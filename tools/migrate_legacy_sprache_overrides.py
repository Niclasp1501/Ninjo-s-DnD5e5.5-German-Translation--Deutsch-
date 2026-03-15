#!/usr/bin/env python3
import argparse
import json
import re
from pathlib import Path

DEFAULT_LEGACY = Path(r"F:/KI-Agenten-Workspace/sprache/de/dnd5e.items.json")
DEFAULT_DND5E_SOURCE = Path(r"C:/Users/nicla/Documents/Playground/dnd5e/packs/_source")
DEFAULT_OUTPUT = Path("scripts/babele-runtime-overrides.generated.js")
DEFAULT_REPORT = Path("tools/reports/legacy-migration-report.json")


def normalize_name(value: str) -> str:
    value = str(value or "")
    value = value.strip().lower()
    value = value.replace("’", "'")
    value = re.sub(r"\s+", " ", value)
    return value


def parse_root_field(text: str, field: str) -> str:
    m = re.search(rf"^{re.escape(field)}:\s*(.+)$", text, re.MULTILINE)
    if not m:
        return ""
    raw = m.group(1).strip()
    if raw.startswith("\"") and raw.endswith("\""):
        raw = raw[1:-1]
    if raw.startswith("'") and raw.endswith("'"):
        raw = raw[1:-1]
    return raw


def collect_targets(source_root: Path, packs: list[str], allowed_types: set[str]) -> list[dict]:
    targets = []
    for pack in packs:
        pack_dir = source_root / pack
        if not pack_dir.exists():
            continue
        for yml in pack_dir.rglob("*.yml"):
            text = yml.read_text(encoding="utf-8")
            item_type = parse_root_field(text, "type")
            if item_type not in allowed_types:
                continue
            item_id = parse_root_field(text, "_id")
            name = parse_root_field(text, "name")
            if not item_id or not name:
                continue
            targets.append({
                "pack": pack,
                "id": item_id,
                "name": name,
                "type": item_type,
                "path": str(yml)
            })
    return targets


def load_legacy_entries(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8-sig"))
    entries = data.get("entries") or {}
    if isinstance(entries, list):
        # legacy variants may use list with id/name
        out = {}
        for e in entries:
            key = e.get("id") or e.get("name")
            if key:
                out[key] = e
        return out
    return entries


def legacy_lookup(entries: dict, english_name: str):
    if english_name in entries:
        return entries[english_name]

    normalized = normalize_name(english_name)
    for key, value in entries.items():
        if normalize_name(key) == normalized:
            return value
    return None


def build_generated_overrides(targets: list[dict], legacy_entries: dict):
    overrides = {}
    missing = []

    for t in targets:
        legacy = legacy_lookup(legacy_entries, t["name"])
        if not legacy:
            missing.append(t)
            continue

        name = legacy.get("name")
        desc = legacy.get("description")
        if not name and not desc:
            missing.append(t)
            continue

        payload = {}
        if isinstance(name, str) and name.strip():
            payload["name"] = name
        if isinstance(desc, str) and desc.strip():
            payload["description"] = desc

        if payload:
            overrides[t["id"]] = payload
        else:
            missing.append(t)

    return overrides, missing


def to_js_module(obj_name: str, payload: dict) -> str:
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    return f"export const {obj_name} = {body};\n"


def main():
    parser = argparse.ArgumentParser(description="Migrate selective legacy DE item translations to ID-based runtime overrides.")
    parser.add_argument("--legacy", default=str(DEFAULT_LEGACY), help="Path to legacy dnd5e.items.json")
    parser.add_argument("--source-root", default=str(DEFAULT_DND5E_SOURCE), help="Path to dnd5e packs/_source root")
    parser.add_argument("--packs", default="equipment24,items", help="Comma-separated pack names")
    parser.add_argument("--types", default="tool,weapon", help="Comma-separated item types")
    parser.add_argument("--out", default=str(DEFAULT_OUTPUT), help="Generated JS overrides file")
    parser.add_argument("--report", default=str(DEFAULT_REPORT), help="JSON report output")
    args = parser.parse_args()

    legacy_path = Path(args.legacy)
    source_root = Path(args.source_root)
    out_path = Path(args.out)
    report_path = Path(args.report)

    packs = [p.strip() for p in args.packs.split(",") if p.strip()]
    allowed_types = {t.strip() for t in args.types.split(",") if t.strip()}

    legacy_entries = load_legacy_entries(legacy_path)
    targets = collect_targets(source_root, packs, allowed_types)
    overrides, missing = build_generated_overrides(targets, legacy_entries)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(to_js_module("GENERATED_OVERRIDES_BY_ID", overrides), encoding="utf-8")

    missing_by_pack = {}
    for m in missing:
        missing_by_pack.setdefault(m["pack"], []).append({
            "id": m["id"],
            "name": m["name"],
            "type": m["type"]
        })

    report = {
        "legacy": str(legacy_path),
        "source_root": str(source_root),
        "packs": packs,
        "types": sorted(allowed_types),
        "totals": {
            "targets": len(targets),
            "migrated": len(overrides),
            "missing": len(missing)
        },
        "missing_by_pack": missing_by_pack
    }

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"targets={len(targets)} migrated={len(overrides)} missing={len(missing)}")
    print(f"generated={out_path}")
    print(f"report={report_path}")


if __name__ == "__main__":
    main()