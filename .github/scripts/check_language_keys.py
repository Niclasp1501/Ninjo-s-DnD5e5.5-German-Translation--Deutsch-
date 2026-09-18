"""Fail when Foundry would drop entries of a language file while loading it.

Foundry runs expandObject() on every translation file. A top-level key with dots,
such as "SETTINGS.DND5E", is written with setProperty() and replaces the nested
block of the same name completely. Since 14.2609.7 that silently turned 1611
texts back to English, while every offline key count still looked complete.
"""

import json
import sys
from pathlib import Path


def flatten(value, prefix=""):
    result = {}
    for key, entry in value.items():
        path = f"{prefix}.{key}" if prefix else key
        if isinstance(entry, dict):
            result.update(flatten(entry, path))
        else:
            result[path] = entry
    return result


def expand_like_foundry(value):
    if not isinstance(value, dict):
        return value
    expanded = {}
    for key, entry in value.items():
        parts = key.split(".")
        target = expanded
        for part in parts[:-1]:
            if not isinstance(target.get(part), dict):
                target[part] = {}
            target = target[part]
        target[parts[-1]] = expand_like_foundry(entry)
    return expanded


failed = False
for name in sys.argv[1:]:
    data = json.loads(Path(name).read_text(encoding="utf-8-sig"))
    written = flatten(data)
    loaded = flatten(expand_like_foundry(data))
    lost = [key for key in written if key not in loaded]
    if lost:
        failed = True
        print(f"{name}: {len(lost)} entries lost in Foundry")
        for key in lost[:20]:
            print(f"  lost: {key}")
    else:
        print(f"{name}: {len(written)} entries, none lost")

sys.exit(1 if failed else 0)
