import json
from datetime import datetime, timezone
from pathlib import Path

OLD_DE = Path(r"C:\Users\nicla\Documents\Playground\foundryvtt-dnd5e-lang-de\languages\de.json")
EN = Path(r"C:\Users\nicla\Documents\Playground\dnd5e\lang\en.json")
OUT = Path("languages/de.json")
BLOCKLIST = Path("config/scope-blocklist.json")
REPORT = Path("tools/migration-report.json")


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


def is_blocked(key, blocked_prefixes):
    for pref in blocked_prefixes:
        if key == pref or key.startswith(pref + "."):
            return True
    return False


old_de = json.loads(OLD_DE.read_text(encoding="utf-8"))
en = json.loads(EN.read_text(encoding="utf-8"))
blocked = json.loads(BLOCKLIST.read_text(encoding="utf-8"))

old_flat = flatten(old_de)
en_flat = flatten(en)

result = {}
reused = 0
missing = 0
blocked_count = 0

for key, en_val in en_flat.items():
    if is_blocked(key, blocked):
        blocked_count += 1
        continue
    if not isinstance(en_val, str):
        continue

    old_val = old_flat.get(key)
    if isinstance(old_val, str):
        set_nested(result, key, old_val)
        reused += 1
    else:
        missing += 1

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

report = {
    "generatedAt": datetime.now(timezone.utc).isoformat(),
    "sourceOldDe": str(OLD_DE),
    "sourceEn": str(EN),
    "output": str(OUT),
    "blockedPrefixes": blocked,
    "totalEnLeafKeys": len(en_flat),
    "blockedLeafKeys": blocked_count,
    "reusedKeys": reused,
    "missingKeys": missing,
}

REPORT.parent.mkdir(parents=True, exist_ok=True)
REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

print(f"Reused keys: {reused}")
print(f"Missing keys: {missing}")
print(f"Blocked keys: {blocked_count}")
print(f"Output: {OUT}")
print(f"Report: {REPORT}")
