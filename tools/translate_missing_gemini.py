#!/usr/bin/env python3
import argparse
import json
import os
import random
import time
from pathlib import Path
from urllib import request, parse, error


def flatten(node, prefix="", out=None):
    if out is None:
        out = {}
    if isinstance(node, dict):
        for k, v in node.items():
            p = f"{prefix}.{k}" if prefix else k
            flatten(v, p, out)
    else:
        out[prefix] = node
    return out


def unflatten_to_nested(flat_map):
    root = {}
    for key, value in flat_map.items():
        parts = key.split(".")
        cur = root
        for part in parts[:-1]:
            cur = cur.setdefault(part, {})
        cur[parts[-1]] = value
    return root


def gemini_generate(api_key, model, prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{parse.quote(model)}:generateContent?key={parse.quote(api_key)}"
    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [{"text": prompt}]
            }
        ],
        "generationConfig": {
            "temperature": 0.2
        }
    }
    data = json.dumps(payload).encode("utf-8")
    req = request.Request(url, data=data, headers={"Content-Type": "application/json"}, method="POST")
    with request.urlopen(req, timeout=120) as resp:
        body = resp.read().decode("utf-8")
    parsed = json.loads(body)
    candidates = parsed.get("candidates", [])
    if not candidates:
        raise RuntimeError(f"No candidates returned: {body}")
    parts = candidates[0].get("content", {}).get("parts", [])
    text = "".join(p.get("text", "") for p in parts)
    if not text.strip():
        raise RuntimeError(f"Empty text response: {body}")
    return text


def extract_json_object(text):
    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("Response does not contain a JSON object")
    return json.loads(text[start:end + 1])


def save_suggestions(out_path, translated_flat):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    nested = unflatten_to_nested(translated_flat)
    out_path.write_text(json.dumps(nested, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Translate missing keys using Gemini and write DE suggestions.")
    parser.add_argument("--missing", default="tools/missing-keys.json")
    parser.add_argument("--out", default="languages/de.suggestions.json")
    parser.add_argument("--glossary", default="config/glossary.json")
    parser.add_argument("--metric-policy", default="config/metric-policy.json")
    parser.add_argument("--model", default=os.environ.get("GEMINI_MODEL", "gemini-2.5-flash"))
    parser.add_argument("--batch-size", type=int, default=20)
    parser.add_argument("--sleep-ms", type=int, default=1200)
    parser.add_argument("--max-retries", type=int, default=6)
    parser.add_argument("--initial-backoff-ms", type=int, default=2000)
    parser.add_argument("--jitter-ms", type=int, default=600)
    parser.add_argument("--max-batches", type=int, default=0, help="0 means unlimited")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("GEMINI_API_KEY is not set")

    missing_doc = json.loads(Path(args.missing).read_text(encoding="utf-8"))
    items = missing_doc.get("items", [])
    glossary_doc = json.loads(Path(args.glossary).read_text(encoding="utf-8"))
    metric_policy = json.loads(Path(args.metric_policy).read_text(encoding="utf-8"))

    out_path = Path(args.out)
    translated = {}
    if out_path.exists():
        existing = json.loads(out_path.read_text(encoding="utf-8"))
        translated = flatten(existing)

    term_entries = glossary_doc.get("terms", [])
    glossary_lines = []
    for entry in term_entries:
        src = entry.get("source")
        tgt = entry.get("target")
        if src and tgt:
            glossary_lines.append(f"- {src} => {tgt}")

    failures = []
    filtered_items = [it for it in items if it.get("key") not in translated]
    total_batches = (len(filtered_items) + args.batch_size - 1) // args.batch_size if args.batch_size > 0 else 0
    if args.max_batches:
        total_batches = min(total_batches, args.max_batches)

    batch_count = 0
    for i in range(0, len(filtered_items), args.batch_size):
        if args.max_batches and batch_count >= args.max_batches:
            break

        batch = filtered_items[i:i + args.batch_size]
        payload = {entry["key"]: entry["source"] for entry in batch}
        batch_count += 1
        print(
            f"[batch {batch_count}/{total_batches}] start | size={len(batch)} | translated_so_far={len(translated)}",
            flush=True
        )

        prompt = (
            "You are translating DnD5e UI/localization text from English to German.\n"
            "Output only one JSON object mapping keys to translated strings.\n"
            "Rules:\n"
            "1) Preserve placeholders exactly: {name}, {value}, %s, %d, %1$s, HTML tags.\n"
            "2) Keep key names unchanged.\n"
            "3) Tone: clear Foundry VTT UI German.\n"
            "4) Metric conversion is allowed and preferred when an imperial unit appears.\n"
            "5) Never invent extra keys.\n"
            f"Metric policy: {json.dumps(metric_policy, ensure_ascii=False)}\n"
            f"Glossary:\n{chr(10).join(glossary_lines) if glossary_lines else '- (empty)'}\n"
            "Translate this JSON:\n"
            f"{json.dumps(payload, ensure_ascii=False)}"
        )

        success = False
        last_error = None

        for attempt in range(args.max_retries + 1):
            try:
                response_text = gemini_generate(api_key, args.model, prompt)
                obj = extract_json_object(response_text)
                accepted = 0
                for key, src in payload.items():
                    val = obj.get(key)
                    if isinstance(val, str) and val.strip():
                        translated[key] = val
                        accepted += 1
                    else:
                        failures.append({"key": key, "reason": "missing_or_empty_in_model_response"})
                save_suggestions(out_path, translated)
                print(
                    f"[batch {batch_count}/{total_batches}] ok | accepted={accepted}/{len(payload)} | translated_total={len(translated)}",
                    flush=True
                )
                success = True
                break
            except error.HTTPError as exc:
                last_error = f"HTTP {exc.code}: {exc.reason}"
                if exc.code == 429 and attempt < args.max_retries:
                    backoff = (args.initial_backoff_ms * (2 ** attempt)) + random.randint(0, args.jitter_ms)
                    print(
                        f"[batch {batch_count}/{total_batches}] retry {attempt + 1}/{args.max_retries} after {backoff}ms due to {last_error}",
                        flush=True
                    )
                    time.sleep(backoff / 1000)
                    continue
                break
            except Exception as exc:
                last_error = str(exc)
                break

        if not success:
            for key in payload.keys():
                failures.append({"key": key, "reason": f"batch_failed: {last_error}"})
            print(
                f"[batch {batch_count}/{total_batches}] failed | reason={last_error}",
                flush=True
            )

        if args.sleep_ms > 0:
            time.sleep(args.sleep_ms / 1000)

    report = {
        "model": args.model,
        "requested": len(items),
        "alreadyPresentInSuggestions": len(items) - len(filtered_items),
        "translatedTotalInSuggestions": len(translated),
        "failed": len(failures),
        "failures": failures[:200]
    }
    report_path = Path("tools/translation-report.json")
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Requested: {len(items)}")
    print(f"Already in suggestions: {len(items) - len(filtered_items)}")
    print(f"Translated total in suggestions: {len(translated)}")
    print(f"Failed in this run: {len(failures)}")
    print(f"Suggestions: {out_path}")
    print(f"Report: {report_path}")


if __name__ == "__main__":
    main()
