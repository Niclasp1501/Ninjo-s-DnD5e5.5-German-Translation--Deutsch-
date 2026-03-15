#!/usr/bin/env python3
import argparse
import json
import os
import random
import re
import time
from pathlib import Path
from urllib import error, parse, request


def gemini_generate(api_key: str, model: str, prompt: str) -> str:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{parse.quote(model)}:generateContent?key={parse.quote(api_key)}"
    payload = {
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.2},
    }
    req = request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with request.urlopen(req, timeout=180) as resp:
        body = resp.read().decode("utf-8")
    parsed = json.loads(body)
    cands = parsed.get("candidates", [])
    if not cands:
        raise RuntimeError(f"No candidates returned: {body}")
    parts = cands[0].get("content", {}).get("parts", [])
    text = "".join(p.get("text", "") for p in parts)
    if not text.strip():
        raise RuntimeError(f"Empty text response: {body}")
    return text


def extract_json_object(text: str) -> dict:
    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("Response does not contain a JSON object")
    return json.loads(text[start : end + 1])


def parse_field(text: str, field: str) -> str:
    m = re.search(rf"^{re.escape(field)}:\s*(.+)$", text, re.MULTILINE)
    if not m:
        return ""
    return m.group(1).strip().strip('"\'')


def parse_description_value(text: str) -> str:
    m = re.search(r"^\s+description:\n\s+value:\s+>\-\n(?P<body>(?:\s{6}.+\n)+)", text, re.MULTILINE)
    if not m:
        m = re.search(r"^\s+description:\n\s+value:\s+\|\-\n(?P<body>(?:\s{6}.+\n)+)", text, re.MULTILINE)
    if not m:
        return ""
    body = m.group("body")
    lines = [ln[6:] if ln.startswith("      ") else ln.strip() for ln in body.splitlines()]
    return "\n".join(lines).strip()


def parse_activities(text: str) -> list[str]:
    names = re.findall(r"^\s{6}name:\s*(.+)$", text, re.MULTILINE)
    out = []
    for n in names:
        n = n.strip().strip('"\'')
        if n:
            out.append(n)
    return sorted(set(out))


def load_equipment24_index(source_root: Path) -> dict:
    idx = {}
    pack = source_root / "equipment24"
    for yml in pack.rglob("*.yml"):
        t = yml.read_text(encoding="utf-8")
        iid = parse_field(t, "_id")
        name = parse_field(t, "name")
        typ = parse_field(t, "type")
        if not iid:
            continue
        idx[iid] = {
            "id": iid,
            "name": name,
            "type": typ,
            "description": parse_description_value(t),
            "activities": parse_activities(t),
            "path": str(yml),
        }
    return idx


def _format_metric(n: float) -> str:
    if abs(n - round(n)) < 1e-9:
        return str(int(round(n)))
    return f"{n:.1f}".replace(".", ",")


def metricize_text(s: str) -> str:
    if not isinstance(s, str) or not s:
        return s

    def repl_feet(m):
        v = int(m.group(1))
        meters = v * 0.3  # DnD metric convention: 5 ft = 1.5 m
        return f"{_format_metric(meters)} m"

    def repl_lb(m):
        raw = m.group(1).replace(",", ".")
        try:
            v = float(raw)
        except Exception:
            return m.group(0)
        kg = round(v / 2.0, 1)
        return f"{_format_metric(kg)} kg"

    s = re.sub(r"\b(\d+)\s*(?:Fuß|Fuss|feet|foot|ft\.?)\b", repl_feet, s, flags=re.IGNORECASE)
    s = re.sub(r"\b(\d+(?:[\.,]\d+)?)\s*(?:Pfund|pounds?|lbs?|lb\.?)\b", repl_lb, s, flags=re.IGNORECASE)
    return s


def main():
    parser = argparse.ArgumentParser(description="Translate equipment24 candidate content with Gemini (suggestions only).")
    parser.add_argument("--candidates", default="tools/reports/gemini-candidates-equipment24.json")
    parser.add_argument("--source-root", default=r"C:/Users/nicla/Documents/Playground/dnd5e/packs/_source")
    parser.add_argument("--out", default="tools/reports/equipment24-gemini-suggestions.json")
    parser.add_argument("--run-log", default="tools/reports/equipment24-gemini-last-run.json")
    parser.add_argument("--model", default=os.environ.get("GEMINI_MODEL", "gemini-2.5-flash"))
    parser.add_argument("--batch-size", type=int, default=20)
    parser.add_argument("--max-batches", type=int, default=1)
    parser.add_argument("--sleep-ms", type=int, default=1500)
    parser.add_argument("--max-retries", type=int, default=6)
    parser.add_argument("--initial-backoff-ms", type=int, default=2000)
    parser.add_argument("--jitter-ms", type=int, default=600)
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("GEMINI_API_KEY is not set")

    candidates_doc = json.loads(Path(args.candidates).read_text(encoding="utf-8-sig"))
    candidates = candidates_doc.get("items", [])
    eq_idx = load_equipment24_index(Path(args.source_root))

    out_path = Path(args.out)
    existing = {}
    if out_path.exists():
        existing = json.loads(out_path.read_text(encoding="utf-8-sig"))

    suggestions = existing.get("items", {}) if isinstance(existing, dict) else {}
    queue = [c for c in candidates if c.get("id") not in suggestions]

    attempted = []
    failed = []

    batches_done = 0
    for i in range(0, len(queue), args.batch_size):
        if args.max_batches and batches_done >= args.max_batches:
            break

        batch = queue[i : i + args.batch_size]
        payload = {}
        batch_ids = []
        for c in batch:
            iid = c.get("id")
            if iid not in eq_idx:
                failed.append({"id": iid, "reason": "missing_in_source_index"})
                continue
            src = eq_idx[iid]
            payload[iid] = {
                "name_en": src.get("name", ""),
                "type": src.get("type", ""),
                "description_en_html": src.get("description", ""),
                "activity_names_en": src.get("activities", []),
            }
            batch_ids.append(iid)

        if not payload:
            continue

        batches_done += 1
        attempted.extend(batch_ids)

        prompt = (
            "You translate DnD5e 2024 equipment content from English to German.\n"
            "Return exactly one JSON object keyed by item ID.\n"
            "For each item ID, return an object with optional fields: name, description, activities.\n"
            "Rules:\n"
            "- Keep item IDs unchanged.\n"
            "- Preserve HTML tags, UUID links, placeholders, and SG/DC numbers exactly.\n"
            "- Use clear German DnD terminology (SG, Rettungswurf, Zustaende, etc.).\n"
            "- Use metric DnD style in text when distances/weights appear: 5 ft -> 1,5 m; lb -> kg.\n"
            "- activities must be an object: original activity name -> translated activity name.\n"
            "Input JSON:\n"
            f"{json.dumps(payload, ensure_ascii=False)}"
        )

        success = False
        last_error = None
        for attempt in range(args.max_retries + 1):
            try:
                text = gemini_generate(api_key, args.model, prompt)
                obj = extract_json_object(text)
                accepted = 0
                for iid in batch_ids:
                    v = obj.get(iid)
                    if not isinstance(v, dict):
                        failed.append({"id": iid, "reason": "missing_object_in_response"})
                        continue
                    cleaned = {}
                    if isinstance(v.get("name"), str) and v["name"].strip():
                        cleaned["name"] = metricize_text(v["name"].strip())
                    if isinstance(v.get("description"), str) and v["description"].strip():
                        cleaned["description"] = metricize_text(v["description"].strip())
                    if isinstance(v.get("activities"), dict) and v["activities"]:
                        act = {}
                        for k, val in v["activities"].items():
                            if isinstance(k, str) and isinstance(val, str) and val.strip():
                                act[k] = metricize_text(val.strip())
                        if act:
                            cleaned["activities"] = act
                    if cleaned:
                        suggestions[iid] = cleaned
                        accepted += 1
                    else:
                        failed.append({"id": iid, "reason": "empty_translation_object"})

                out_doc = {
                    "pack": "equipment24",
                    "model": args.model,
                    "items": suggestions,
                }
                out_path.parent.mkdir(parents=True, exist_ok=True)
                out_path.write_text(json.dumps(out_doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                print(f"[batch {batches_done}] ok | accepted={accepted}/{len(batch_ids)} | total_saved={len(suggestions)}", flush=True)
                success = True
                break
            except error.HTTPError as exc:
                last_error = f"HTTP {exc.code}: {exc.reason}"
                if exc.code == 429 and attempt < args.max_retries:
                    backoff = (args.initial_backoff_ms * (2 ** attempt)) + random.randint(0, args.jitter_ms)
                    print(f"[batch {batches_done}] retry {attempt + 1}/{args.max_retries} in {backoff}ms due to {last_error}", flush=True)
                    time.sleep(backoff / 1000)
                    continue
                break
            except Exception as exc:
                last_error = str(exc)
                break

        if not success:
            for iid in batch_ids:
                failed.append({"id": iid, "reason": f"batch_failed: {last_error}"})
            print(f"[batch {batches_done}] failed | reason={last_error}", flush=True)

        if args.sleep_ms > 0:
            time.sleep(args.sleep_ms / 1000)

    run_log = {
        "model": args.model,
        "attempted_ids": attempted,
        "attempted_count": len(attempted),
        "saved_count_total": len(suggestions),
        "failed_count": len(failed),
        "failed": failed[:400],
        "out": str(out_path),
    }
    run_log_path = Path(args.run_log)
    run_log_path.parent.mkdir(parents=True, exist_ok=True)
    run_log_path.write_text(json.dumps(run_log, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Attempted: {len(attempted)}")
    print(f"Saved total: {len(suggestions)}")
    print(f"Failed: {len(failed)}")
    print(f"Suggestions: {out_path}")
    print(f"Run log: {run_log_path}")


if __name__ == "__main__":
    main()
