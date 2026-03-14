#!/usr/bin/env python3
import argparse
import json
from pathlib import Path


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


def set_nested(root, dotted, value):
    parts = dotted.split(".")
    cur = root
    for part in parts[:-1]:
        cur = cur.setdefault(part, {})
    cur[parts[-1]] = value


def main():
    parser = argparse.ArgumentParser(description="Merge suggestion keys into languages/de.json")
    parser.add_argument("--base", default="languages/de.json")
    parser.add_argument("--suggestions", default="languages/de.suggestions.json")
    parser.add_argument("--out", default="languages/de.json")
    args = parser.parse_args()

    base = json.loads(Path(args.base).read_text(encoding="utf-8"))
    suggestions = json.loads(Path(args.suggestions).read_text(encoding="utf-8"))

    base_flat = flatten(base)
    sug_flat = flatten(suggestions)

    merged_flat = dict(base_flat)
    applied = 0
    for k, v in sug_flat.items():
        if isinstance(v, str) and v.strip():
            merged_flat[k] = v
            applied += 1

    merged = {}
    for k, v in merged_flat.items():
        set_nested(merged, k, v)

    out_path = Path(args.out)
    out_path.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Applied suggestion keys: {applied}")
    print(f"Output: {out_path}")


if __name__ == "__main__":
    main()
