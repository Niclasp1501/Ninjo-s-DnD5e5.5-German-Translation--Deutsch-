#!/usr/bin/env python3
import argparse
import json
import re
from pathlib import Path

DEFAULT_LEGACY_ROOT = Path(r"F:/KI-Agenten-Workspace/sprache/de")
DEFAULT_DND5E_SOURCE = Path(r"C:/Users/nicla/Documents/Playground/dnd5e/packs/_source")
DEFAULT_POLICY = Path("config/legacy-provenance-policy.json")
DEFAULT_ALLOWLIST = Path("config/legacy-id-allowlist.json")
DEFAULT_OUTPUT_LEGACY = Path("scripts/babele-runtime-overrides.legacy.generated.js")
DEFAULT_OUTPUT_MODERN = Path("scripts/babele-runtime-overrides.modern.generated.js")
DEFAULT_REPORT = Path("tools/reports/migration-gap-report.json")


def normalize_name(value: str) -> str:
    value = str(value or "")
    value = value.strip().lower()
    # Normalize common apostrophe encodings from legacy exports.
    value = value.replace("?", "'")
    value = value.replace("???", "'")
    value = value.replace("????????", "'")
    value = re.sub(r"\s+", " ", value)
    return value



def parse_root_field(text: str, field: str) -> str:
    m = re.search(rf"^{re.escape(field)}:\s*(.+)$", text, re.MULTILINE)
    if not m:
        return ""
    raw = m.group(1).strip()
    if raw.startswith('"') and raw.endswith('"'):
        raw = raw[1:-1]
    if raw.startswith("'") and raw.endswith("'"):
        raw = raw[1:-1]
    return raw


def collect_targets(source_root: Path, pack: str, allowed_types: set[str]) -> list[dict]:
    targets: list[dict] = []
    pack_dir = source_root / pack
    if not pack_dir.exists():
        return targets

    for yml in pack_dir.rglob("*.yml"):
        text = yml.read_text(encoding="utf-8-sig")
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
        out = {}
        for e in entries:
            if not isinstance(e, dict):
                continue
            key = e.get("id") or e.get("name")
            if key:
                out[key] = e
        return out
    if isinstance(entries, dict):
        return entries
    return {}


def build_legacy_index(legacy_root: Path, file_names: set[str]) -> dict[str, dict]:
    out: dict[str, dict] = {}
    for file_name in sorted(file_names):
        p = legacy_root / file_name
        if not p.exists():
            out[file_name] = {}
            continue
        entries = load_legacy_entries(p)
        normalized = {}
        for key, value in entries.items():
            normalized[normalize_name(key)] = value
        out[file_name] = normalized
    return out


def to_js_module(obj_name: str, payload: dict) -> str:
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    return f"export const {obj_name} = {body};\n"


def match_legacy_entry(legacy_indexes: dict[str, dict], legacy_files: list[str], english_name: str):
    needle = normalize_name(english_name)
    for lf in legacy_files:
        entry = legacy_indexes.get(lf, {}).get(needle)
        if entry:
            return lf, entry
    return None, None


def payload_from_entry(entry: dict) -> dict:
    payload = {}

    name = entry.get("name")
    if isinstance(name, str) and name.strip():
        payload["name"] = name

    desc = entry.get("description")
    if isinstance(desc, str) and desc.strip():
        payload["description"] = desc

    activities = entry.get("activities")
    if isinstance(activities, dict) and activities:
        payload["activities"] = activities

    return payload


def merge_dict(base: dict, incoming: dict):
    for key, value in incoming.items():
        if key == "activities" and isinstance(value, dict):
            base.setdefault("activities", {})
            base["activities"].update(value)
        else:
            base[key] = value


def main():
    parser = argparse.ArgumentParser(description="Strict-provenance migration of legacy DE translations into ID-based runtime overrides.")
    parser.add_argument("--legacy-root", default=str(DEFAULT_LEGACY_ROOT), help="Path to legacy translation root directory")
    parser.add_argument("--source-root", default=str(DEFAULT_DND5E_SOURCE), help="Path to dnd5e packs/_source root")
    parser.add_argument("--policy", default=str(DEFAULT_POLICY), help="Path to provenance policy JSON")
    parser.add_argument("--allowlist", default=str(DEFAULT_ALLOWLIST), help="Path to ID allowlist JSON")
    parser.add_argument("--out-legacy", default=str(DEFAULT_OUTPUT_LEGACY), help="Generated legacy JS overrides output file")
    parser.add_argument("--out-modern", default=str(DEFAULT_OUTPUT_MODERN), help="Generated modern JS overrides output file")
    parser.add_argument("--report", default=str(DEFAULT_REPORT), help="JSON report output")
    args = parser.parse_args()

    legacy_root = Path(args.legacy_root)
    source_root = Path(args.source_root)
    policy_path = Path(args.policy)
    allowlist_path = Path(args.allowlist)
    out_legacy = Path(args.out_legacy)
    out_modern = Path(args.out_modern)
    report_path = Path(args.report)

    policy = json.loads(policy_path.read_text(encoding="utf-8-sig"))
    allowlist = json.loads(allowlist_path.read_text(encoding="utf-8-sig"))

    packs_cfg = policy.get("packs", {})
    allowlist_packs = allowlist.get("packs", {})

    all_legacy_files = set()
    for cfg in packs_cfg.values():
        for lf in cfg.get("legacyFiles", []):
            all_legacy_files.add(lf)

    legacy_indexes = build_legacy_index(legacy_root, all_legacy_files)

    legacy_overrides: dict[str, dict] = {}
    modern_overrides: dict[str, dict] = {}

    report = {
        "policy": str(policy_path),
        "allowlist": str(allowlist_path),
        "legacy_root": str(legacy_root),
        "source_root": str(source_root),
        "totals": {
            "targets": 0,
            "legacy_mapped": 0,
            "modern_unmapped": 0,
            "conflict_blocked": 0,
            "missing_legacy": 0
        },
        "by_pack": {},
        "legacy_mapped": {},
        "modern_unmapped": {},
        "conflict_blocked": {},
        "missing_legacy": {}
    }

    for pack, cfg in packs_cfg.items():
        allowed_types = set(cfg.get("types", []))
        mode = cfg.get("mode", "allow_ids_only")
        legacy_files = cfg.get("legacyFiles", [])
        allow_ids = set(allowlist_packs.get(pack, []))

        targets = collect_targets(source_root, pack, allowed_types)

        report["by_pack"][pack] = {
            "mode": mode,
            "targets": len(targets),
            "legacy_mapped": 0,
            "modern_unmapped": 0,
            "conflict_blocked": 0,
            "missing_legacy": 0
        }

        for t in targets:
            report["totals"]["targets"] += 1
            legacy_file, entry = match_legacy_entry(legacy_indexes, legacy_files, t["name"])

            if not entry:
                report["totals"]["missing_legacy"] += 1
                report["by_pack"][pack]["missing_legacy"] += 1
                report["missing_legacy"].setdefault(pack, []).append({
                    "id": t["id"],
                    "name": t["name"],
                    "type": t["type"]
                })
                continue

            if mode == "allow_ids_only" and t["id"] not in allow_ids:
                report["totals"]["conflict_blocked"] += 1
                report["by_pack"][pack]["conflict_blocked"] += 1
                report["conflict_blocked"].setdefault(pack, []).append({
                    "id": t["id"],
                    "name": t["name"],
                    "type": t["type"],
                    "legacy_file": legacy_file,
                    "reason": "not_in_allowlist"
                })
                report["totals"]["modern_unmapped"] += 1
                report["by_pack"][pack]["modern_unmapped"] += 1
                report["modern_unmapped"].setdefault(pack, []).append({
                    "id": t["id"],
                    "name": t["name"],
                    "type": t["type"]
                })
                continue

            payload = payload_from_entry(entry)
            if not payload:
                report["totals"]["missing_legacy"] += 1
                report["by_pack"][pack]["missing_legacy"] += 1
                report["missing_legacy"].setdefault(pack, []).append({
                    "id": t["id"],
                    "name": t["name"],
                    "type": t["type"],
                    "reason": "empty_payload"
                })
                continue

            target = legacy_overrides.setdefault(t["id"], {})
            merge_dict(target, payload)

            report["totals"]["legacy_mapped"] += 1
            report["by_pack"][pack]["legacy_mapped"] += 1
            report["legacy_mapped"].setdefault(pack, []).append({
                "id": t["id"],
                "name": t["name"],
                "type": t["type"],
                "legacy_file": legacy_file
            })

    out_legacy.parent.mkdir(parents=True, exist_ok=True)
    out_legacy.write_text(to_js_module("LEGACY_OVERRIDES_BY_ID", legacy_overrides), encoding="utf-8")

    out_modern.parent.mkdir(parents=True, exist_ok=True)
    out_modern.write_text(to_js_module("MODERN_OVERRIDES_BY_ID", modern_overrides), encoding="utf-8")

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"targets={report['totals']['targets']} legacy_mapped={report['totals']['legacy_mapped']} modern_unmapped={report['totals']['modern_unmapped']} conflict_blocked={report['totals']['conflict_blocked']} missing_legacy={report['totals']['missing_legacy']}")
    print(f"legacy_out={out_legacy}")
    print(f"modern_out={out_modern}")
    print(f"report={report_path}")


if __name__ == "__main__":
    main()
