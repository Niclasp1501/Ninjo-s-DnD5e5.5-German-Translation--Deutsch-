// Checks the compendium overrides for the kinds of damage found on 2026-09-28.
//
// Every one of these slipped through for months because nothing looked at the
// rendered result: enrichers broken by line wraps or translated command words,
// raw placeholders shown to players, two different originals under one German
// name, and items that show English because their German description is missing.

import { LEGACY_OVERRIDES_BY_ID } from "../../scripts/babele-runtime-overrides.legacy.generated.js";
import { MODERN_OVERRIDES_BY_ID } from "../../scripts/babele-runtime-overrides.modern.generated.js";
import { CURATED_OVERRIDES_BY_ID } from "../../scripts/babele-runtime-overrides.js";
import fs from "node:fs";

const ITEMS = JSON.parse(fs.readFileSync(new URL("../../config/dnd5e-item-ids.json", import.meta.url), "utf8"));
const REAL = new Set([...ITEMS.equipment24, ...ITEMS.spells24]);
const EQUIPMENT = new Set(ITEMS.equipment24);

// Same command list dnd5e uses in registerCustomEnrichers.
const COMMAND = /^\[\[\/(attack|award|check|concentration|damage|heal|healing|save|skill|tool|item)( [^\n]*?)?\]\]$/i;
const LOOKUP = /^\[\[(lookup|language) [^\]\n]+\]\]$/i;
const CORE_ROLL = /^\[\[(\/(r|roll|gmr|br|pr|publicroll|blindroll|selfroll|sr) )?[^/\n[\]][^\n[\]]*\]\]\]?$/i;
const AWARD_CURRENCY = /^\[\[\/award (\s*\d+\s*(pp|gp|ep|sp|cp|xp)\b)+/i;
const TOKEN = /\[\[[\s\S]*?\]\]\]?/g;
const PLACEHOLDER = /(?<![\]\w])\{(creature|type)\}/g;
// Template features whose English original carries these gaps on purpose, to be filled in
// when the feature is added to a monster.
const TEMPLATES = new Set(["mmSpellcasting00"]);

// Families whose ids name one specific thing; two ids of one family must not
// share a German name. Monster features are left out on purpose, "Klauen" for
// both Claws and Talons is correct.
const FAMILIES = ["phbspl", "phbarm", "phbwep", "phbtul", "dmg"];

const sets = [
  ["legacy", LEGACY_OVERRIDES_BY_ID],
  ["modern", MODERN_OVERRIDES_BY_ID],
  ["curated", CURATED_OVERRIDES_BY_ID]
];

const errors = [];
const strings = (value, path, out) => {
  if (typeof value === "string") out.push([path, value]);
  else if (Array.isArray(value)) value.forEach((v, i) => strings(v, `${path}[${i}]`, out));
  else if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) strings(v, path ? `${path}.${k}` : k, out);
  return out;
};

for (const [set, overrides] of sets) {
  const names = new Map();
  for (const [id, entry] of Object.entries(overrides)) {
    for (const [path, text] of strings(entry, "", [])) {
      for (const token of text.match(TOKEN) || []) {
        const where = `${set}:${id} ${path}`;
        if (/\n/.test(token)) errors.push(`${where}: line break inside ${JSON.stringify(token.slice(0, 60))}`);
        else if (!(COMMAND.test(token) || LOOKUP.test(token) || CORE_ROLL.test(token))) errors.push(`${where}: unknown enricher ${JSON.stringify(token.slice(0, 60))}`);
        else if (/^\[\[\/award /i.test(token) && !AWARD_CURRENCY.test(token)) errors.push(`${where}: award needs a currency key like gp ${JSON.stringify(token)}`);
      }
      if (!TEMPLATES.has(id)) for (const m of text.matchAll(PLACEHOLDER)) errors.push(`${set}:${id} ${path}: raw placeholder {${m[1]}} is shown to players`);
    }
    const family = FAMILIES.find(f => id.startsWith(f));
    // Only ids the current dnd5e still ships; outdated ids never show up in a compendium.
    if (family && entry.name && (set !== "modern" || REAL.has(id))) {
      const key = `${family}|${entry.name.trim()}`;
      if (names.has(key)) errors.push(`${set}: ${id} and ${names.get(key)} are both called "${entry.name.trim()}"`);
      else names.set(key, id);
    }
    // Items of the 2024 book that are only named: the English text stays visible.
    if (set === "modern" && EQUIPMENT.has(id) && entry.name && !entry.description) {
      errors.push(`modern:${id} "${entry.name}": no German description`);
    }
  }
}

// A new dnd5e version brings new items; each needs an entry, or it stays English.
for (const id of REAL) {
  if (!MODERN_OVERRIDES_BY_ID[id] && !CURATED_OVERRIDES_BY_ID[id]) errors.push(`${id}: in dnd5e ${ITEMS.dnd5e} but not translated`);
}

if (errors.length) {
  const limit = Number(process.env.CHECK_LIMIT || 80);
  for (const line of errors.slice(0, limit)) console.log(line);
  if (errors.length > limit) console.log(`... and ${errors.length - limit} more`);
  console.log(`\n${errors.length} problems in the compendium overrides`);
  process.exit(1);
}
console.log("compendium overrides: enrichers, placeholders, names and descriptions ok");
