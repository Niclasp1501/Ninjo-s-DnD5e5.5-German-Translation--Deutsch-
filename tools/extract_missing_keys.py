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


def is_blocked(key, blocked_prefixes):
    for pref in blocked_prefixes:
        if key == pref or key.startswith(pref + "."):
            return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Extract missing translatable keys from EN vs DE.")
    parser.add_argument("--en", required=True, help="Path to source en.json")
    parser.add_argument("--de", required=True, help="Path to current de.json")
    parser.add_argument("--blocklist", default="config/scope-blocklist.json", help="Path to blocked key prefixes")
    parser.add_argument("--out", default="tools/missing-keys.json", help="Output JSON path")
    args = parser.parse_args()

    en = json.loads(Path(args.en).read_text(encoding="utf-8"))
    de = json.loads(Path(args.de).read_text(encoding="utf-8"))
    blocked = json.loads(Path(args.blocklist).read_text(encoding="utf-8"))

    en_flat = flatten(en)
    de_flat = flatten(de)

    missing = []
    for key, value in en_flat.items():
        if not isinstance(value, str):
            continue
        if is_blocked(key, blocked):
            continue
        de_val = de_flat.get(key)
        if not isinstance(de_val, str) or not de_val.strip():
            missing.append({"key": key, "source": value})

    result = {
        "count": len(missing),
        "items": missing
    }

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Missing keys written: {len(missing)} -> {out_path}")


if __name__ == "__main__":
    main()
