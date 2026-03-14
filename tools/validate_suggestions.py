#!/usr/bin/env python3
import argparse
import json
import re
import sys
from pathlib import Path


PLACEHOLDER_CURLY = re.compile(r"\{[a-zA-Z0-9_.-]+\}")
PLACEHOLDER_PRINTF = re.compile(r"%(?:\d+\$)?[sdif]")
HTML_TAG = re.compile(r"</?[a-zA-Z][^>]*>")
NUMBER = re.compile(r"\d+(?:[\.,]\d+)?")


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


def token_multiset(regex, text):
    m = {}
    for token in regex.findall(text):
        m[token] = m.get(token, 0) + 1
    return m


def contains_any_unit(text, units):
    lower = text.lower()
    for unit in units:
        if re.search(rf"\b{re.escape(unit.lower())}\b", lower):
            return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Validate LLM suggestions for placeholders and metric plausibility.")
    parser.add_argument("--en", required=True)
    parser.add_argument("--suggestions", required=True)
    parser.add_argument("--metric-policy", default="config/metric-policy.json")
    parser.add_argument("--out", default="tools/validation-report.json")
    args = parser.parse_args()

    en = json.loads(Path(args.en).read_text(encoding="utf-8"))
    suggestions = json.loads(Path(args.suggestions).read_text(encoding="utf-8"))
    policy = json.loads(Path(args.metric_policy).read_text(encoding="utf-8"))

    en_flat = flatten(en)
    sug_flat = flatten(suggestions)

    imperial_units = policy.get("imperial_units", [])
    metric_units = policy.get("metric_units", [])
    req_num = bool(policy.get("require_number_when_source_has_number", True))
    req_unit = bool(policy.get("require_unit_when_source_has_imperial_unit", True))

    issues = []

    for key, target in sug_flat.items():
        if not isinstance(target, str):
            issues.append({"key": key, "type": "non_string", "message": "Suggestion is not a string"})
            continue

        source = en_flat.get(key)
        if not isinstance(source, str):
            issues.append({"key": key, "type": "unknown_key", "message": "Key not found in source EN file"})
            continue

        src_curly = token_multiset(PLACEHOLDER_CURLY, source)
        tgt_curly = token_multiset(PLACEHOLDER_CURLY, target)
        if src_curly != tgt_curly:
            issues.append({
                "key": key,
                "type": "placeholder_curly_mismatch",
                "message": f"Expected {src_curly}, got {tgt_curly}"
            })

        src_printf = token_multiset(PLACEHOLDER_PRINTF, source)
        tgt_printf = token_multiset(PLACEHOLDER_PRINTF, target)
        if src_printf != tgt_printf:
            issues.append({
                "key": key,
                "type": "placeholder_printf_mismatch",
                "message": f"Expected {src_printf}, got {tgt_printf}"
            })

        src_tags = token_multiset(HTML_TAG, source)
        tgt_tags = token_multiset(HTML_TAG, target)
        if src_tags != tgt_tags:
            issues.append({
                "key": key,
                "type": "html_tag_mismatch",
                "message": "HTML tags changed"
            })

        src_has_num = bool(NUMBER.search(source))
        tgt_has_num = bool(NUMBER.search(target))
        if req_num and src_has_num and not tgt_has_num:
            issues.append({
                "key": key,
                "type": "number_missing",
                "message": "Source has a number but translation does not"
            })

        src_has_imperial = contains_any_unit(source, imperial_units)
        tgt_has_metric = contains_any_unit(target, metric_units)
        tgt_has_imperial = contains_any_unit(target, imperial_units)

        if req_unit and src_has_imperial and not (tgt_has_metric or tgt_has_imperial):
            issues.append({
                "key": key,
                "type": "unit_missing",
                "message": "Source has imperial unit but translation has no unit"
            })

    report = {
        "checked": len(sug_flat),
        "issues": len(issues),
        "items": issues
    }

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Checked: {len(sug_flat)}")
    print(f"Issues: {len(issues)}")
    print(f"Report: {out_path}")

    if issues:
        sys.exit(1)


if __name__ == "__main__":
    main()
