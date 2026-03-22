import { LEGACY_OVERRIDES_BY_ID } from "./babele-runtime-overrides.legacy.generated.js";
import { MODERN_OVERRIDES_BY_ID } from "./babele-runtime-overrides.modern.generated.js";
import { CURATED_OVERRIDES_BY_ID } from "./babele-runtime-overrides.js";

const MODULE_ID = "foundryvtt-dnd5e55-lang-de";
const SETTING_ENABLE_COMPENDIUM_TRANSLATIONS = "enableCompendiumTranslations";
const ITEM_TYPES_WITH_WEIGHT = new Set(["weapon", "tool", "equipment", "consumable", "loot", "container"]);
const FEET_UNITS = new Set(["ft", "feet", "foot"]);
const DISTANCE_UNIT_MAP = {
  ft: { unit: "m", factor: 0.3 },
  feet: { unit: "m", factor: 0.3 },
  foot: { unit: "m", factor: 0.3 },
  mi: { unit: "km", factor: 1.6 },
  mile: { unit: "km", factor: 1.6 },
  miles: { unit: "km", factor: 1.6 }
};
const INLINE_TOKEN_RE = /@(UUID|Embed|Compendium)\[([\s\S]*?)\](\{[^}]*\})?/g;
const AWARD_CMD_RE = /\[\[\s*\/award\s+([^\]]+)\]\]/gi;
const LOOKUP_ACTIVITY_RE = /\[\[\s*lookup\s+([^\]]*?)\s+activity=([A-Za-z0-9_-]+)([^\]]*?)\]\]/gi;
const RICH_TOKEN_PROTECT_RE =
  /(@(?:UUID|Embed|Compendium)\[[\s\S]*?\](?:\{[^}]*\})?|\[\[[\s\S]*?\]\](?:\{[^}]*\})?|&Reference\[[^\]]*\])/g;
const ACTOR_LANGUAGE_TOKEN_MAP = {
  "blink dog": "Blinkhund",
  "common": "Gemeinsprache",
  "elvish": "Elfisch",
  "dwarvish": "Zwergisch",
  "giant": "Riesisch",
  "gnomish": "Gnomisch",
  "goblin": "Goblin",
  "halfling": "Halblingisch",
  "orc": "Orkisch",
  "draconic": "Drakonisch",
  "sylvan": "Sylvan",
  "abyssal": "Abyssisch",
  "celestial": "Himmlisch",
  "deep speech": "Tiefensprache",
  "infernal": "Infernal",
  "primordial": "Ursprache",
  "undercommon": "Untergemeinsprache"
};
const EMBEDDED_ITEM_NAME_FALLBACK_MAP = {
  "Move and Attack": "Bewegen und angreifen",
  "Pack Damage": "Rudelschaden",
  "Life Bond": "Lebensband",
  "Otherworldly Slam": "Jenseitiger Hieb",
  "Fell Glare": "Unheilvoller Blick"
};
const ACTOR_TYPE_CUSTOM_MAP = {
  "Spectral Sword": "Spektralschwert",
  "Nature Spirit": "Naturgeist",
  "Otherworldly Steed": "Jenseitiges Reittier",
  "Celestial, Fey, or Fiend (Your Choice)": "Himmlisch, Fee oder Unhold (deine Wahl)"
};

function isGermanUi() {
  return String(game.i18n?.lang ?? "").toLowerCase().startsWith("de");
}

function isCompendiumTranslationEnabled() {
  return game.settings?.get(MODULE_ID, SETTING_ENABLE_COMPENDIUM_TRANSLATIONS) !== false;
}

function getSourceId(data) {
  return foundry.utils.parseUuid(data?.flags?.core?.sourceId || data?._stats?.compendiumSource)?.id;
}

function getItemId(data) {
  return getSourceId(data) || data?._id || "";
}

function getOverrideById(data) {
  const itemId = getItemId(data);
  if (!itemId) return null;

  // Priority: curated manual > modern generated > strict legacy generated.
  return CURATED_OVERRIDES_BY_ID[itemId] || MODERN_OVERRIDES_BY_ID[itemId] || LEGACY_OVERRIDES_BY_ID[itemId] || null;
}

function getOverrideScalarString(data, key) {
  const override = getOverrideById(data);
  const scalars = override?.scalarStrings;
  if (!scalars || typeof scalars !== "object") return "";
  const value = scalars[key];
  return typeof value === "string" && value.trim() ? fixMojibakeRuntime(value) : "";
}

function roundMetric(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Math.round((n / 2) * 10) / 10;
}

function parseLooseNumber(value) {
  const n = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function formatMetricNumber(value) {
  if (!Number.isFinite(value)) return String(value);
  const rounded = Math.round(value * 10) / 10;
  if (Number.isInteger(rounded)) return String(rounded);
  return String(rounded).replace(".", ",");
}

function convertUnitTextValue(rawValue, factor) {
  const n = parseLooseNumber(rawValue);
  if (n === null) return null;
  return formatMetricNumber(n * factor);
}

function convertImperialUnitsInTextRuntime(text) {
  if (typeof text !== "string" || !text.trim()) return text;
  if (!/(feet|foot|ft|fuß|fuss|miles?|mile|mi|inches?|inch|lbs?|pounds?|zoll)/i.test(text)) return text;

  const protectedChunks = [];
  let out = text.replace(RICH_TOKEN_PROTECT_RE, (m) => {
    const idx = protectedChunks.push(m) - 1;
    return `__RT_PROTECTED_${idx}__`;
  });

  out = out.replace(
    /(\d+(?:[.,]\d+)?)\s*[-–]\s*(\d+(?:[.,]\d+)?)\s*(feet|foot|ft|fuß|fuss|miles|mile|mi|inches|inch|zoll|pounds|pound|lbs|lb)(?=$|[\s,.;:!?\)\]\}])/gi,
    (_m, a, b, unit) => {
      const u = String(unit).toLowerCase();
      const factor = /(mile|mi)/.test(u) ? 1.6 : /(inch|zoll)/.test(u) ? 2.5 : /(pound|lb)/.test(u) ? 0.5 : 0.3;
      const suffix = /(mile|mi)/.test(u) ? "km" : /(inch|zoll)/.test(u) ? "cm" : /(pound|lb)/.test(u) ? "kg" : "m";
      const av = convertUnitTextValue(a, factor);
      const bv = convertUnitTextValue(b, factor);
      if (av === null || bv === null) return _m;
      return `${av}-${bv} ${suffix}`;
    }
  );

  out = out.replace(
    /(\d+(?:[.,]\d+)?)\s*-\s*(feet|foot|ft|fuß|fuss)\s*-\s*(square|cube|radius|cone|line|wide|tall|high|deep|long)\b/gi,
    (_m, num, _unit, shape) => {
      const v = convertUnitTextValue(num, 0.3);
      if (v === null) return _m;
      const s = String(shape).toLowerCase();
      if (s === "square") return `${v} m × ${v} m`;
      if (s === "cube") return `${v} m Würfel`;
      if (s === "radius") return `${v} m Radius`;
      if (s === "cone") return `${v} m Kegel`;
      if (s === "line") return `${v} m Linie`;
      if (s === "wide") return `${v} m breit`;
      if (s === "tall" || s === "high") return `${v} m hoch`;
      if (s === "deep") return `${v} m tief`;
      if (s === "long") return `${v} m lang`;
      return `${v} m`;
    }
  );

  out = out
    .replace(/(\d+(?:[.,]\d+)?)\s*(feet|foot|ft|fuß|fuss)(?=$|[\s,.;:!?\)\]\}])/gi, (_m, num) => {
      const v = convertUnitTextValue(num, 0.3);
      return v === null ? _m : `${v} m`;
    })
    .replace(/(\d+(?:[.,]\d+)?)\s*(miles|mile|mi)(?=$|[\s,.;:!?\)\]\}])/gi, (_m, num) => {
      const v = convertUnitTextValue(num, 1.6);
      return v === null ? _m : `${v} km`;
    })
    .replace(/(\d+(?:[.,]\d+)?)\s*(inches|inch|zoll)(?=$|[\s,.;:!?\)\]\}])/gi, (_m, num) => {
      const v = convertUnitTextValue(num, 2.5);
      return v === null ? _m : `${v} cm`;
    })
    .replace(/(\d+(?:[.,]\d+)?)\s*(pounds|pound|lbs|lb)(?=$|[\s,.;:!?\)\]\}])/gi, (_m, num) => {
      const v = convertUnitTextValue(num, 0.5);
      return v === null ? _m : `${v} kg`;
    });

  const damageWordMap = {
    acid: "Säureschaden",
    bludgeoning: "Wuchtschaden",
    cold: "Kälteschaden",
    fire: "Feuerschaden",
    force: "Wuchtschaden",
    lightning: "Blitzschaden",
    necrotic: "nekrotischen Schaden",
    piercing: "durchschlagenden Schaden",
    poison: "Giftschaden",
    psychic: "psychischen Schaden",
    radiant: "gleißenden Schaden",
    slashing: "Hiebschaden",
    thunder: "Donnerschaden"
  };
  out = out.replace(
    /\b(Acid|Bludgeoning|Cold|Fire|Force|Lightning|Necrotic|Piercing|Poison|Psychic|Radiant|Slashing|Thunder)\s+(damage|Schaden)\b/gi,
    (_m, dtype) => {
      const key = String(dtype).toLowerCase();
      return damageWordMap[key] || _m;
    }
  );

  // Handle dynamic lookup tokens where numeric value is resolved at runtime in Foundry:
  // "[[lookup ...]] Fuß großen Emanation" -> "[[lookup ...]] m großen Emanation"
  // "[[lookup ...]]-Fuß-Emanation" -> "[[lookup ...]]-m-Emanation"
  out = out
    .replace(/(__RT_PROTECTED_\d+__)\s*(fuß|fuss|feet|foot|ft)(?=$|[\s,.;:!?\)\]\}])/gi, "$1 m")
    .replace(
      /(__RT_PROTECTED_\d+__)\s*-\s*(fuß|fuss|feet|foot|ft)\s*-\s*(emanation|radius|kegel|linie|cube|würfel)/gi,
      "$1-m-$3"
    )
    .replace(
      /\b(fuß|fuss|feet|foot|ft)\b(?=\s+(gro(?:ß|ss)e?n?|emanation|radius|kegel|linie|weit|entfernt|lang|breit|hoch|tief|durchmesser|würfel))/gi,
      "m"
    );

  out = out.replace(/__RT_PROTECTED_(\d+)__/g, (_m, idx) => protectedChunks[Number(idx)] ?? _m);
  // Normalize malformed lookup labels that can appear as [[lookup ...]][label].
  out = out.replace(/(\[\[\s*lookup[^\]]+\]\])\[([^\]\r\n]+)\]/gi, "$1{$2}");
  return out;
}

function normalizeInlineRollCommandsRuntime(text) {
  if (typeof text !== "string" || !text.includes("[[/")) return text;

  return text.replace(/\[\[\s*\/([^\]]+)\]\]/g, (full, cmdBody) => {
    let body = String(cmdBody ?? "");
    body = body
      .replace(/^\s*angriff\b/i, "attack")
      .replace(/^\s*schaden\b/i, "damage")
      .replace(/^\s*rettungswurf\b/i, "save")
      .replace(/\bdurchschnittlich\b/gi, "average")
      .replace(/\berweitert\b/gi, "extended");
    return `[[/${body.trim()}]]`;
  });
}

function fixMojibakeRuntime(text) {
  if (typeof text !== "string" || !text || !/[ÃÂâ]/.test(text)) return text;
  let current = text;
  for (let i = 0; i < 3; i += 1) {
    if (!/[ÃÂâ]/.test(current)) break;
    try {
      const bytes = Uint8Array.from([...current].map((ch) => ch.charCodeAt(0) & 0xff));
      const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
      if (!decoded || decoded === current) break;
      if (decoded.includes("�") && !current.includes("�")) break;
      current = decoded;
    } catch (_err) {
      break;
    }
  }
  // Fallback for mixed/double-encoded fragments that survived the UTF-8 decode pass.
  return current
    // Handle mixed mojibake variants (Windows codepage artifacts)
    .replace(/\u00C3\u0178/g, "ß") // "ÃŸ"
    .replace(/\u00C3\u0153/g, "Ü") // "Ãœ"
    .replace(/\u00C3\u201E/g, "Ä") // "Ã„"
    .replace(/\u00C3\u2013/g, "Ö") // "Ã–"
    .replace(/\u00C3\u0192\u00C2\u00A4/g, "ä") // "ÃƒÂ¤"
    .replace(/\u00C3\u0192\u00C2\u00B6/g, "ö") // "ÃƒÂ¶"
    .replace(/\u00C3\u0192\u00C2\u00BC/g, "ü") // "ÃƒÂ¼"
    .replace(/\u00C3\u0192\u00C5\u00B8/g, "ß") // "ÃƒÅ¸"
    .replace(/\u00C3\u0192\u00E2\u20AC\u017E/g, "Ä") // "Ãƒâ€ž"
    .replace(/\u00C3\u0192\u00E2\u20AC\u201C/g, "Ö") // "Ãƒâ€“"
    .replace(/\u00C3\u0192\u00C5\u201C/g, "Ü") // "ÃƒÅœ"
    .replace(/Ã„/g, "Ä")
    .replace(/Ã–/g, "Ö")
    .replace(/Ãœ/g, "Ü")
    .replace(/Ã¤/g, "ä")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã¼/g, "ü")
    .replace(/ÃŸ/g, "ß")
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/â€¦/g, "...")
    .replace(/â€˜/g, "‘")
    .replace(/â€™/g, "’")
    .replace(/â€ž/g, "„")
    .replace(/â€œ/g, "“")
    .replace(/â€\x9c/g, "“")
    .replace(/â€\x9d/g, "”")
    .replace(/âˆ’/g, "-")
    .replace(/ˆ’/g, "-")
    .replace(/a`-(?=\d)/g, "-")
    .replace(/−(?=\d)/g, "-")
    .replace(/Â/g, "");
}

function normalizeOverrideValueStringsRuntime(value) {
  if (typeof value === "string") return fixMojibakeRuntime(value);
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      value[i] = normalizeOverrideValueStringsRuntime(value[i]);
    }
    return value;
  }
  if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) {
      value[k] = normalizeOverrideValueStringsRuntime(v);
    }
    return value;
  }
  return value;
}

function normalizeAllOverrideMapsRuntime() {
  normalizeOverrideValueStringsRuntime(CURATED_OVERRIDES_BY_ID);
  normalizeOverrideValueStringsRuntime(MODERN_OVERRIDES_BY_ID);
  normalizeOverrideValueStringsRuntime(LEGACY_OVERRIDES_BY_ID);
}

function translateNameRuntime(originalValue, entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  const fromEntry =
    typeof entryTranslation === "string" && entryTranslation.trim() ? fixMojibakeRuntime(entryTranslation) : "";
  return fixMojibakeRuntime(override?.name || fromEntry || originalValue);
}

function translateDescriptionRuntime(originalValue, entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  const fromEntry =
    typeof entryTranslation === "string" && entryTranslation.trim() ? fixMojibakeRuntime(entryTranslation) : "";
  const description = fixMojibakeRuntime(override?.description || fromEntry || originalValue);
  if (typeof description !== "string") return description;

  const normalized = description.replace(INLINE_TOKEN_RE, (_full, kind, inner, suffix = "") => {
    const cleanInner = String(inner ?? "")
      .replace(/\\"/g, "\"")
      .replace(/\\'/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    const cleanSuffix = String(suffix || "")
      .replace(/\\"/g, "\"")
      .replace(/\\'/g, "'");
    return `@${kind}[${cleanInner}]${cleanSuffix}`;
  });
  const awardNormalized = normalizeAwardCommands(normalized);
  const lookupNormalized = stripInvalidLookupActivityRefs(awardNormalized, data);
  if (!lookupNormalized.includes("@UUID[")) {
    return normalizeInlineRollCommandsRuntime(convertImperialUnitsInTextRuntime(fixMojibakeRuntime(lookupNormalized)));
  }

  const withUuidLabels = lookupNormalized.replace(/@UUID\[([^\]]+)\](?:\{([^}]*)\})?/g, (full, uuidPath) => {
    const id = String(uuidPath).split(".").pop();
    if (!id) return full;
    const linked = CURATED_OVERRIDES_BY_ID[id] || MODERN_OVERRIDES_BY_ID[id] || LEGACY_OVERRIDES_BY_ID[id];
    const deName = linked?.name;
    if (!deName || typeof deName !== "string" || !deName.trim()) return full;
    return `@UUID[${uuidPath}]{${deName}}`;
  });
  return normalizeInlineRollCommandsRuntime(convertImperialUnitsInTextRuntime(fixMojibakeRuntime(withUuidLabels)));
}

function stripInvalidLookupActivityRefs(text, data) {
  if (typeof text !== "string" || !text.includes("[[lookup")) return text;
  const activities = data?.system?.activities;
  if (!activities || typeof activities !== "object") return text;
  const validIds = new Set(Object.keys(activities).filter(Boolean));
  if (!validIds.size) return text;

  return text.replace(LOOKUP_ACTIVITY_RE, (full, left, activityId, right) => {
    if (validIds.has(activityId)) return full;
    const normalizedLeft = String(left ?? "").trim();
    const normalizedRight = String(right ?? "").trim();
    const spaceLeft = normalizedLeft ? `${normalizedLeft} ` : "";
    const spaceRight = normalizedRight ? ` ${normalizedRight}` : "";
    return `[[lookup ${spaceLeft}${spaceRight}]]`.replace(/\s+\]\]$/, "]]").replace(/\s{2,}/g, " ");
  });
}

function translateActorLanguageText(text) {
  if (typeof text !== "string" || !text.trim()) return text;
  let out = fixMojibakeRuntime(text);
  out = out
    .replace(/\bworks only with you\b/gi, "funktioniert nur mit dir")
    .replace(/\bunderstands the languages you know\b/gi, "versteht die Sprachen, die du kennst")
    .replace(/\bthe languages you know\b/gi, "die Sprachen, die du kennst")
    .replace(/\bplus five other languages\b/gi, "plus fünf weitere Sprachen")
    .replace(/\bplus two languages\b/gi, "plus zwei Sprachen")
    .replace(/\bunderstands\b/gi, "versteht")
    .replace(/\bbut can(?:not|['’]t) speak them\b/gi, "kann sie aber nicht sprechen")
    .replace(/\bbut can(?:not|['’]t) speak\b/gi, "kann es aber nicht sprechen")
    .replace(/\ball languages\b/gi, "alle Sprachen")
    .replace(/\bcan(?:not|['’]t) speak\b/gi, "kann nicht sprechen");

  for (const [en, de] of Object.entries(ACTOR_LANGUAGE_TOKEN_MAP)) {
    const re = new RegExp(`\\b${en.replace(/\s+/g, "\\s+")}\\b`, "gi");
    out = out.replace(re, de);
  }

  out = out.replace(/\s{2,}/g, " ").trim();
  return out;
}

function translateActorTypeCustomText(text) {
  if (typeof text !== "string" || !text.trim()) return text;
  const normalized = fixMojibakeRuntime(text).trim();
  return ACTOR_TYPE_CUSTOM_MAP[normalized] || normalized;
}

function translateActorTypeCustomRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  return getOverrideScalarString(data, "system.details.type.custom") || translateActorTypeCustomText(originalValue);
}

function translateEmbeddedItemNameFallback(originalValue) {
  if (typeof originalValue !== "string" || !originalValue.trim()) return originalValue;
  const normalized = fixMojibakeRuntime(originalValue).trim();
  return EMBEDDED_ITEM_NAME_FALLBACK_MAP[normalized] || normalized;
}

function canonicalAwardUnit(unit) {
  const u = String(unit ?? "").toLowerCase();
  if (u === "xp") return "xp";
  if (u === "gp" || u === "gm") return "gp";
  if (u === "sp" || u === "sm") return "sp";
  if (u === "cp" || u === "km") return "cp";
  if (u === "ep" || u === "em") return "ep";
  if (u === "pp" || u === "pm") return "pp";
  return "";
}

function normalizeAwardCommands(text) {
  if (typeof text !== "string" || !text.includes("/award")) return text;
  return text.replace(AWARD_CMD_RE, (full, args) => {
    const parts = [];
    const re = /(\d+(?:[.,]\d+)?)\s*([a-zA-Z]+)/g;
    let m;
    while ((m = re.exec(String(args ?? ""))) !== null) {
      const amount = m[1].replace(",", ".");
      const unit = canonicalAwardUnit(m[2]);
      if (!unit) continue;
      parts.push(`${amount}${unit}`);
    }
    if (!parts.length) return full;
    return `[[/award ${parts.join(" ")}]]`;
  });
}

function translateActivitiesRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const override = getOverrideById(data);
  const activityNameMap = override?.activities && typeof override.activities === "object" ? override.activities : null;

  const translated = foundry.utils.deepClone(originalValue);
  for (const activity of Object.values(translated)) {
    if (!activity || typeof activity !== "object") continue;
    const sourceActivityName = String(activity.name ?? "");
    const activityId = String(activity._id ?? "");
    const activityMeta =
      override?.activitiesMeta?.[activityId] ||
      override?.activitiesMeta?.[sourceActivityName] ||
      null;

    if (activityNameMap && sourceActivityName) {
      const mapped = activityNameMap[sourceActivityName];
      if (mapped) activity.name = fixMojibakeRuntime(mapped);
    }

    const rangeUnits = String(activity?.range?.units ?? "").toLowerCase();
    if (DISTANCE_UNIT_MAP[rangeUnits] && activity?.range?.value !== undefined && activity?.range?.value !== null) {
      activity.range.value = convertDistanceValueByUnit(activity.range.value, rangeUnits);
      activity.range.units = convertDistanceUnit(activity.range.units);
    }

    const tmplUnits = String(activity?.target?.template?.units ?? "").toLowerCase();
    if (DISTANCE_UNIT_MAP[tmplUnits]) {
      if (activity?.target?.template?.size !== undefined && activity?.target?.template?.size !== null) {
        activity.target.template.size = convertDistanceValueByUnit(activity.target.template.size, tmplUnits);
      }
      if (activity?.target?.template?.width !== undefined && activity?.target?.template?.width !== null) {
        activity.target.template.width = convertDistanceValueByUnit(activity.target.template.width, tmplUnits);
      }
      activity.target.template.units = convertDistanceUnit(activity.target.template.units);
    }

    if (activityMeta && typeof activityMeta === "object") {
      if (typeof activityMeta.chatFlavor === "string" && activityMeta.chatFlavor.trim() && activity?.description) {
        activity.description.chatFlavor = fixMojibakeRuntime(activityMeta.chatFlavor);
      }
      if (typeof activityMeta.activationCondition === "string" && activityMeta.activationCondition.trim() && activity?.activation) {
        activity.activation.condition = fixMojibakeRuntime(activityMeta.activationCondition);
      }
      if (typeof activityMeta.rangeSpecial === "string" && activityMeta.rangeSpecial.trim() && activity?.range) {
        activity.range.special = fixMojibakeRuntime(activityMeta.rangeSpecial);
      }
      if (typeof activityMeta.durationSpecial === "string" && activityMeta.durationSpecial.trim() && activity?.duration) {
        activity.duration.special = fixMojibakeRuntime(activityMeta.durationSpecial);
      }
      if (
        typeof activityMeta.targetAffectsSpecial === "string" &&
        activityMeta.targetAffectsSpecial.trim() &&
        activity?.target?.affects
      ) {
        activity.target.affects.special = fixMojibakeRuntime(activityMeta.targetAffectsSpecial);
      }
      if (activityMeta.profileNames && typeof activityMeta.profileNames === "object" && activity?.profiles) {
        for (const profile of Object.values(activity.profiles)) {
          if (!profile || typeof profile !== "object") continue;
          const profileName = String(profile.name ?? "");
          const mappedName = activityMeta.profileNames[profileName];
          if (typeof mappedName === "string" && mappedName.trim()) {
            profile.name = fixMojibakeRuntime(mappedName);
          }
        }
      }
    }
  }
  return translated;
}

function translateAdvancementRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const itemType = String(data?.type ?? "");
  if (!["class", "subclass", "feat", "race", "background"].includes(itemType)) return originalValue;

  const override = getOverrideById(data);
  const advMap = override?.advancement;
  if (!advMap || typeof advMap !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const step of translated) {
    if (!step || typeof step !== "object") continue;
    const sid = String(step._id ?? "");
    const title = String(step.title ?? "");
    const mapped = advMap[sid] || advMap[title] || null;
    if (!mapped || typeof mapped !== "object") continue;
    if (typeof mapped.title === "string" && mapped.title.trim()) step.title = fixMojibakeRuntime(mapped.title);
    if (typeof mapped.hint === "string" && mapped.hint.trim()) step.hint = fixMojibakeRuntime(mapped.hint);
  }
  return translated;
}

function convertWeightValueRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!ITEM_TYPES_WITH_WEIGHT.has(String(data?.type ?? ""))) return originalValue;
  const units = String(data?.system?.weight?.units ?? "").toLowerCase();
  if (units !== "lb") return originalValue;
  return roundMetric(originalValue);
}

function convertWeightUnitsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!ITEM_TYPES_WITH_WEIGHT.has(String(data?.type ?? ""))) return originalValue;
  const units = String(originalValue ?? "").toLowerCase();
  return units === "lb" ? "kg" : originalValue;
}

function convertFeetToMeters(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Math.round(n * 0.3 * 10) / 10;
}

function convertDistanceByUnit(value, unitKey) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  const rule = DISTANCE_UNIT_MAP[String(unitKey ?? "").toLowerCase()];
  if (!rule) return value;
  return Math.round(n * rule.factor * 10) / 10;
}

function convertDistanceFormulaByUnit(value, unitKey) {
  if (typeof value !== "string") return value;
  const rule = DISTANCE_UNIT_MAP[String(unitKey ?? "").toLowerCase()];
  if (!rule) return value;
  return value.replace(/(\d+(?:\.\d+)?)/g, (m, num) => {
    const n = Number(num);
    if (!Number.isFinite(n)) return m;
    const scaled = Math.round(n * rule.factor * 10) / 10;
    return Number.isInteger(scaled) ? String(scaled) : String(scaled);
  });
}

function convertDistanceValueByUnit(value, unitKey) {
  const n = Number(value);
  if (Number.isFinite(n)) return convertDistanceByUnit(value, unitKey);
  return convertDistanceFormulaByUnit(value, unitKey);
}

function convertDistanceUnit(unitValue) {
  const rule = DISTANCE_UNIT_MAP[String(unitValue ?? "").toLowerCase()];
  return rule ? rule.unit : unitValue;
}

function convertSpellRangeValueRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const units = String(data?.system?.range?.units ?? "").toLowerCase();
  if (!DISTANCE_UNIT_MAP[units]) return originalValue;
  return convertDistanceValueByUnit(originalValue, units);
}

function convertSpellRangeUnitsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  return convertDistanceUnit(originalValue);
}

function convertSpellTargetTemplateSizeRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const units = String(data?.system?.target?.template?.units ?? "").toLowerCase();
  if (!DISTANCE_UNIT_MAP[units]) return originalValue;
  return convertDistanceValueByUnit(originalValue, units);
}

function convertSpellTargetTemplateUnitsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  return convertDistanceUnit(originalValue);
}

function convertSpellTargetTemplateRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  const units = String(translated?.units ?? "").toLowerCase();
  if (!DISTANCE_UNIT_MAP[units]) return originalValue;
  translated.size = convertDistanceValueByUnit(translated.size, units);
  translated.units = convertDistanceUnit(translated.units);
  return translated;
}

function convertOriginDistanceMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "race") return originalValue;
  if (originalValue === null || originalValue === undefined || originalValue === "") return originalValue;
  const n = Number(originalValue);
  if (!Number.isFinite(n)) return originalValue;
  return convertFeetToMeters(n);
}

function convertOriginDistanceUnitMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "race") return originalValue;
  return "m";
}

function convertOriginDistanceContainerUnitsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "race") return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;
  const translated = foundry.utils.deepClone(originalValue);
  translated.units = "m";
  return translated;
}

function getActorDistanceContextUnit(data) {
  const movementUnits = String(data?.system?.attributes?.movement?.units ?? "").toLowerCase();
  if (DISTANCE_UNIT_MAP[movementUnits]) return movementUnits;
  const sensesUnits = String(data?.system?.attributes?.senses?.units ?? "").toLowerCase();
  if (DISTANCE_UNIT_MAP[sensesUnits]) return sensesUnits;
  return "ft";
}

function convertActorDistanceMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (originalValue === null || originalValue === undefined || originalValue === "") return originalValue;
  return convertDistanceValueByUnit(originalValue, getActorDistanceContextUnit(data));
}

function convertActorDistanceUnitMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  return "m";
}

function convertActorMovementMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  const sourceUnit = String(translated.units ?? getActorDistanceContextUnit(data) ?? "ft").toLowerCase();
  const unitKey = DISTANCE_UNIT_MAP[sourceUnit] ? sourceUnit : "ft";
  for (const key of ["walk", "fly", "swim", "climb", "burrow"]) {
    if (translated[key] !== null && translated[key] !== undefined && translated[key] !== "") {
      translated[key] = convertDistanceValueByUnit(translated[key], unitKey);
    }
  }
  translated.units = "m";
  return translated;
}

function convertActorSensesMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  const sourceUnit = String(translated.units ?? getActorDistanceContextUnit(data) ?? "ft").toLowerCase();
  const unitKey = DISTANCE_UNIT_MAP[sourceUnit] ? sourceUnit : "ft";

  if (translated.ranges && typeof translated.ranges === "object") {
    for (const key of ["darkvision", "blindsight", "tremorsense", "truesight"]) {
      if (translated.ranges[key] !== null && translated.ranges[key] !== undefined && translated.ranges[key] !== "") {
        translated.ranges[key] = convertDistanceValueByUnit(translated.ranges[key], unitKey);
      }
    }
  }

  for (const key of ["darkvision", "blindsight", "tremorsense", "truesight"]) {
    if (translated[key] !== null && translated[key] !== undefined && translated[key] !== "") {
      translated[key] = convertDistanceValueByUnit(translated[key], unitKey);
    }
  }
  translated.units = "m";
  return translated;
}

function translateActorLanguagesRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  if (typeof translated.custom === "string" && translated.custom.trim()) {
    translated.custom =
      getOverrideScalarString(data, "system.traits.languages.custom") || translateActorLanguageText(translated.custom);
  }
  if (typeof translated.special === "string" && translated.special.trim()) {
    translated.special = translateActorLanguageText(translated.special);
  }

  const tel = translated?.communication?.telepathy;
  if (tel && typeof tel === "object") {
    const unit = String(tel.units ?? "ft").toLowerCase();
    const unitKey = DISTANCE_UNIT_MAP[unit] ? unit : "ft";
    if (tel.value !== null && tel.value !== undefined && tel.value !== "") {
      tel.value = convertDistanceValueByUnit(tel.value, unitKey);
    }
    if (tel.units !== null && tel.units !== undefined && tel.units !== "") {
      tel.units = convertDistanceUnit(unitKey);
    }
  }
  return translated;
}

function translateActorLanguagesCustomRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (typeof originalValue !== "string" || !originalValue.trim()) return originalValue;
  return getOverrideScalarString(data, "system.traits.languages.custom") || translateActorLanguageText(originalValue);
}

function translateActorHabitatCustomRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (typeof originalValue !== "string") return originalValue;
  return getOverrideScalarString(data, "system.details.habitat.custom") || fixMojibakeRuntime(originalValue);
}

function translateActorHabitatValueRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const actorType = String(data?.type ?? "");
  if (!["npc", "character", "vehicle"].includes(actorType)) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (let i = 0; i < translated.length; i += 1) {
    const row = translated[i];
    if (!row || typeof row !== "object") continue;
    const key = `system.details.habitat.value.${i}.subtype`;
    const translatedSubtype = getOverrideScalarString(data, key);
    if (translatedSubtype && typeof row.subtype === "string") {
      row.subtype = translatedSubtype;
    } else if (typeof row.subtype === "string") {
      row.subtype = fixMojibakeRuntime(row.subtype);
    }
  }
  return translated;
}

function convertItemRangeMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const units = String(data?.system?.range?.units ?? "").toLowerCase();
  if (!DISTANCE_UNIT_MAP[units]) return originalValue;
  if (originalValue === null || originalValue === undefined || originalValue === "") return originalValue;
  return convertDistanceValueByUnit(originalValue, units);
}

function convertItemRangeUnitMetricRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const units = String(data?.system?.range?.units ?? originalValue ?? "").toLowerCase();
  if (!DISTANCE_UNIT_MAP[units]) return originalValue;
  return convertDistanceUnit(units);
}

function translateMaterialsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.materials || originalValue);
}

function translateSpellActivationConditionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.activationCondition || originalValue);
}

function translateSpellRangeSpecialRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.rangeSpecial || originalValue);
}

function translateSpellTargetAffectsSpecialRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.targetAffectsSpecial || originalValue);
}

function translateSpellDurationSpecialRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.durationSpecial || originalValue);
}

function translateSpellUnidentifiedDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.unidentifiedDescription || originalValue);
}

function convertActivitiesRangeRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const override = getOverrideById(data);
  const translated = foundry.utils.deepClone(originalValue);
  for (const activity of Object.values(translated)) {
    if (!activity || typeof activity !== "object") continue;
    const sourceActivityName = String(activity.name ?? "");
    const activityId = String(activity._id ?? "");
    const activityMeta =
      override?.activitiesMeta?.[activityId] ||
      override?.activitiesMeta?.[sourceActivityName] ||
      null;

    if (override?.activities && sourceActivityName) {
      const mapped = override.activities[sourceActivityName];
      if (mapped) activity.name = fixMojibakeRuntime(mapped);
    }

    const rangeUnits = String(activity?.range?.units ?? "").toLowerCase();
    if (DISTANCE_UNIT_MAP[rangeUnits] && activity?.range?.value !== undefined && activity?.range?.value !== null) {
      activity.range.value = convertDistanceValueByUnit(activity.range.value, rangeUnits);
      activity.range.units = convertDistanceUnit(activity.range.units);
    }

    const tmplUnits = String(activity?.target?.template?.units ?? "").toLowerCase();
    if (DISTANCE_UNIT_MAP[tmplUnits] && activity?.target?.template?.size !== undefined && activity?.target?.template?.size !== null) {
      activity.target.template.size = convertDistanceValueByUnit(activity.target.template.size, tmplUnits);
      activity.target.template.units = convertDistanceUnit(activity.target.template.units);
    }

    if (activityMeta && typeof activityMeta === "object") {
      if (typeof activityMeta.chatFlavor === "string" && activityMeta.chatFlavor.trim() && activity?.description) {
        activity.description.chatFlavor = fixMojibakeRuntime(activityMeta.chatFlavor);
      }
      if (typeof activityMeta.activationCondition === "string" && activityMeta.activationCondition.trim() && activity?.activation) {
        activity.activation.condition = fixMojibakeRuntime(activityMeta.activationCondition);
      }
      if (typeof activityMeta.rangeSpecial === "string" && activityMeta.rangeSpecial.trim() && activity?.range) {
        activity.range.special = fixMojibakeRuntime(activityMeta.rangeSpecial);
      }
      if (
        typeof activityMeta.targetAffectsSpecial === "string" &&
        activityMeta.targetAffectsSpecial.trim() &&
        activity?.target?.affects
      ) {
        activity.target.affects.special = fixMojibakeRuntime(activityMeta.targetAffectsSpecial);
      }
      if (typeof activityMeta.durationSpecial === "string" && activityMeta.durationSpecial.trim() && activity?.duration) {
        activity.duration.special = fixMojibakeRuntime(activityMeta.durationSpecial);
      }

      if (activityMeta.profileNames && typeof activityMeta.profileNames === "object" && Array.isArray(activity?.profiles)) {
        for (const profile of activity.profiles) {
          if (!profile || typeof profile !== "object" || typeof profile.name !== "string") continue;
          const translatedName = activityMeta.profileNames[profile.name];
          if (typeof translatedName === "string" && translatedName.trim()) {
            profile.name = fixMojibakeRuntime(translatedName);
          }
        }
      }
    }
  }
  return translated;
}

function translateEffectsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const override = getOverrideById(data);
  const effectsMap = override?.effects;
  if (!effectsMap || typeof effectsMap !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const effect of translated) {
    if (!effect || typeof effect !== "object") continue;
    const effectId = String(effect._id ?? "");
    const effectName = String(effect.name ?? effect.label ?? "");

    const mapped = effectsMap[effectId] || effectsMap[effectName] || null;
    let nextName = null;
    let nextDescription = null;

    if (typeof mapped === "string" && mapped.trim()) {
      nextName = mapped;
    } else if (mapped && typeof mapped === "object") {
      if (typeof mapped.name === "string" && mapped.name.trim()) nextName = mapped.name;
      if (typeof mapped.description === "string" && mapped.description.trim()) nextDescription = mapped.description;
    }

    if (nextName) {
      effect.name = nextName;
      if (typeof effect.label === "string") effect.label = nextName;
    }
    if (nextDescription && typeof effect.description === "string") {
      effect.description = nextDescription;
    }
  }
  return translated;
}

function translateEmbeddedItemsRuntime(originalValue, _entryTranslation, _data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const item of translated) {
    if (!item || typeof item !== "object") continue;

    const override = getOverrideById(item);

    if (typeof override?.name === "string" && override.name.trim()) {
      item.name = fixMojibakeRuntime(override.name);
    } else if (typeof item.name === "string") {
      item.name = translateEmbeddedItemNameFallback(item.name);
    }

    const desc = item?.system?.description?.value;
    if (typeof desc === "string") {
      item.system.description.value = translateDescriptionRuntime(desc, null, item);
    }

    if (item?.system?.activities && typeof item.system.activities === "object") {
      item.system.activities = translateActivitiesRuntime(item.system.activities, null, item);
    }

    if (item?.system?.range && typeof item.system.range === "object") {
      if ("reach" in item.system.range) {
        item.system.range.reach = convertItemRangeMetricRuntime(item.system.range.reach, null, item);
      }
      if ("value" in item.system.range) {
        item.system.range.value = convertItemRangeMetricRuntime(item.system.range.value, null, item);
      }
      if ("long" in item.system.range) {
        item.system.range.long = convertItemRangeMetricRuntime(item.system.range.long, null, item);
      }
      if ("units" in item.system.range) {
        item.system.range.units = convertItemRangeUnitMetricRuntime(item.system.range.units, null, item);
      }
    }

    if (Array.isArray(item?.effects)) {
      item.effects = translateEffectsRuntime(item.effects, null, item);
    }

    if (Array.isArray(item?.system?.advancement)) {
      item.system.advancement = translateAdvancementRuntime(item.system.advancement, null, item);
    }

    if (typeof override?.activationCondition === "string" && override.activationCondition.trim() && item?.system?.activation) {
      item.system.activation.condition = fixMojibakeRuntime(override.activationCondition);
    }
    if (typeof override?.rangeSpecial === "string" && override.rangeSpecial.trim() && item?.system?.range) {
      item.system.range.special = fixMojibakeRuntime(override.rangeSpecial);
    }
    if (typeof override?.durationSpecial === "string" && override.durationSpecial.trim() && item?.system?.duration) {
      item.system.duration.special = fixMojibakeRuntime(override.durationSpecial);
    }
    if (
      typeof override?.targetAffectsSpecial === "string" &&
      override.targetAffectsSpecial.trim() &&
      item?.system?.target?.affects
    ) {
      item.system.target.affects.special = fixMojibakeRuntime(override.targetAffectsSpecial);
    }
    if (
      typeof override?.unidentifiedDescription === "string" &&
      override.unidentifiedDescription.trim() &&
      item?.system?.unidentified
    ) {
      item.system.unidentified.description = fixMojibakeRuntime(override.unidentifiedDescription);
    }
  }

  return translated;
}

function applyDamageLocalizationFallback() {
  if (!isGermanUi()) return;

  const damageTypeMap = {
    Acid: "Säure",
    Bludgeoning: "Wuchtschaden",
    Cold: "Kälte",
    Fire: "Feuer",
    Force: "Wucht",
    Lightning: "Blitz",
    Necrotic: "Nekrotisch",
    Piercing: "Durchschlagend",
    Poison: "Gift",
    Psychic: "Psychisch",
    Radiant: "Strahlend",
    Slashing: "Hieb",
    Thunder: "Donner"
  };
  const damageTypeMapByConfigKey = {
    acid: "Säure",
    bludgeoning: "Wuchtschaden",
    cold: "Kälte",
    fire: "Feuer",
    force: "Wucht",
    lightning: "Blitz",
    necrotic: "Nekrotisch",
    piercing: "Durchschlagend",
    poison: "Gift",
    psychic: "Psychisch",
    radiant: "Strahlend",
    slashing: "Hieb",
    thunder: "Donner"
  };

  const translations = game.i18n?.translations;
  if (!translations || typeof translations !== "object") return;

  const setRuntimeKey = (key, value) => {
    if (!key || !value) return;
    foundry.utils.setProperty(translations, key, value);
    if (game.i18n?._fallback && typeof game.i18n._fallback === "object") {
      const current = foundry.utils.getProperty(game.i18n._fallback, key);
      if (!current || String(current).trim() === "" || String(current).trim() === key) {
        foundry.utils.setProperty(game.i18n._fallback, key, value);
      }
    }
  };

  const dnd5e = (translations.DND5E ??= {});
  const damage = (dnd5e.DAMAGE ??= {});
  const damageTypes = (damage.Type ??= {});

  for (const [key, value] of Object.entries(damageTypeMap)) {
    damageTypes[key] = value;
    setRuntimeKey(`DND5E.DAMAGE.Type.${key}`, value);
  }

  const bypass = (damage.PhysicalBypass ??= {});
  bypass.Label = "Physische Umgehungen";
  bypass.Title = "Physische Umgehungen";
  bypass.Hint = "Diese Waffeneigenschaften umgehen den Widerstand gegen physischen Schaden.";
  setRuntimeKey("DND5E.DAMAGE.PhysicalBypass.Label", bypass.Label);
  setRuntimeKey("DND5E.DAMAGE.PhysicalBypass.Title", bypass.Title);
  setRuntimeKey("DND5E.DAMAGE.PhysicalBypass.Hint", bypass.Hint);
  // Defensive aliases for mixed key casing used by some contexts/modules.
  setRuntimeKey("DND5E.Damage.PhysicalBypass.Label", bypass.Label);
  setRuntimeKey("DND5E.Damage.PhysicalBypass.Title", bypass.Title);
  setRuntimeKey("DND5E.Damage.PhysicalBypass.Hint", bypass.Hint);
  // Legacy flat keys used by dnd5e 5.2.x templates/dialogs.
  setRuntimeKey("DND5E.DamagePhysicalBypass", bypass.Label);
  setRuntimeKey("DND5E.DamagePhysicalBypassHint", bypass.Hint);
  setRuntimeKey("DND5E.DamagePhysicalBypasses", "{damageTypes} von Angriffen, die nicht {bypassTypes} sind");
  setRuntimeKey("DND5E.DamagePhysicalBypassesShort", "Umgegangen durch {type}-Quellen");
  setRuntimeKey(
    "DND5E.DamageModification.BypassHint",
    "Diese Waffeneigenschaften umgehen die Schadensmodifikation für physischen Schaden."
  );
  // Legacy flat damage-type keys.
  setRuntimeKey("DND5E.DamageAcid", "Säure");
  setRuntimeKey("DND5E.DamageAll", "Gesamtschaden");
  setRuntimeKey("DND5E.DamageBludgeoning", "Wuchtschaden");
  setRuntimeKey("DND5E.DamageCold", "Kälte");
  setRuntimeKey("DND5E.DamageFire", "Feuer");
  setRuntimeKey("DND5E.DamageForce", "Wucht");
  setRuntimeKey("DND5E.DamageLightning", "Blitz");
  setRuntimeKey("DND5E.DamageNecrotic", "Nekrotisch");
  setRuntimeKey("DND5E.DamagePiercing", "Durchschlagend");
  setRuntimeKey("DND5E.DamagePhysical", "Nichtmagischer physischer Schaden");
  setRuntimeKey("DND5E.DamagePoison", "Gift");
  setRuntimeKey("DND5E.DamagePsychic", "Psychisch");
  setRuntimeKey("DND5E.DamageRadiant", "Strahlend");
  setRuntimeKey("DND5E.DamageSlashing", "Hieb");
  setRuntimeKey("DND5E.DamageThunder", "Donner");

  // Used by the bypass checkbox list in trait editors.
  setRuntimeKey("DND5E.ITEM.Property.Adamantine", "Adamantin");
  setRuntimeKey("DND5E.ITEM.Property.Magical", "Magisch");
  setRuntimeKey("DND5E.ITEM.Property.Silvered", "Versilbert");

  const configDamage = CONFIG?.DND5E?.damageTypes;
  if (configDamage && typeof configDamage === "object") {
    for (const [key, value] of Object.entries(damageTypeMapByConfigKey)) {
      if (!configDamage[key] || typeof configDamage[key] !== "object") continue;
      configDamage[key].label = value;
    }
  }

  const configItemProps = CONFIG?.DND5E?.itemProperties;
  if (configItemProps && typeof configItemProps === "object") {
    for (const entry of Object.values(configItemProps)) {
      if (!entry || typeof entry !== "object") continue;
      const current = String(entry.label ?? "").trim();
      if (current === "DND5E.ITEM.Property.Adamantine" || /^adamantine$/i.test(current)) {
        entry.label = "Adamantin";
      } else if (current === "DND5E.ITEM.Property.Magical" || /^magical$/i.test(current)) {
        entry.label = "Magisch";
      } else if (current === "DND5E.ITEM.Property.Silvered" || /^silvered$/i.test(current)) {
        entry.label = "Versilbert";
      }
    }
  }
}

function translateRollTableResultsRuntime(originalValue, entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const override = getOverrideById(data);
  const resultMap =
    (override?.tableResults && typeof override.tableResults === "object" && !Array.isArray(override.tableResults)
      ? override.tableResults
      : null) ||
    (entryTranslation && typeof entryTranslation === "object" && !Array.isArray(entryTranslation)
      ? entryTranslation
      : null);
  if (!resultMap || typeof resultMap !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const result of translated) {
    if (!result || typeof result !== "object") continue;
    const rid = String(result._id ?? "");
    const rr = Array.isArray(result.range) && result.range.length >= 2 ? `${result.range[0]}-${result.range[1]}` : "";
    const mapped = resultMap[rid] || resultMap[rr] || null;
    if (typeof mapped === "string" && mapped.trim()) {
      const normalized = normalizeInlineRollCommandsRuntime(
        convertImperialUnitsInTextRuntime(fixMojibakeRuntime(mapped))
      );
      if (typeof result.description === "string") result.description = normalized;
      if (typeof result.text === "string") result.text = normalized;
      continue;
    }

    if (mapped && typeof mapped === "object") {
      if (typeof mapped.name === "string" && mapped.name.trim()) {
        result.name = fixMojibakeRuntime(mapped.name);
      }
      if (typeof mapped.description === "string" && mapped.description.trim()) {
        const normalized = normalizeInlineRollCommandsRuntime(
          convertImperialUnitsInTextRuntime(fixMojibakeRuntime(mapped.description))
        );
        if (typeof result.description === "string") result.description = normalized;
        if (typeof result.text === "string") result.text = normalized;
      }
      continue;
    }
  }
  return translated;
}

function translateJournalPagesRuntime(originalValue, entryTranslation, _data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;
  if (!entryTranslation || typeof entryTranslation !== "object" || Array.isArray(entryTranslation)) return originalValue;

  return originalValue.map((data) => {
    const translation = entryTranslation[data?._id] || entryTranslation[data?.name];
    if (!translation || typeof translation !== "object") return data;

    const mapped = foundry.utils.mergeObject(foundry.utils.deepClone(data), {
      name: translation.name,
      image: { caption: translation.caption ?? data?.image?.caption },
      src: translation.src ?? data?.src,
      text: { content: translation.text ?? data?.text?.content },
      video: {
        width: translation.width ?? data?.video?.width,
        height: translation.height ?? data?.video?.height
      },
      translated: true
    });

    const hasClassAppendixEmbed =
      typeof translation.description === "string" &&
      /@Embed\[Compendium\.dnd5e\.content24\.JournalEntry\.phbAppendixClass\.JournalEntryPage\./.test(translation.description);

    if (hasClassAppendixEmbed) {
      const currentDescription = typeof mapped?.system?.description?.value === "string" ? mapped.system.description.value : "";
      mapped.system = mapped.system && typeof mapped.system === "object" ? mapped.system : {};
      mapped.system.description = {
        value: translateDescriptionRuntime(currentDescription, translation.description, mapped)
      };
    }

    return mapped;
  });
}

Hooks.once("init", () => {
  if (game.system.id !== "dnd5e") return;
  normalizeAllOverrideMapsRuntime();

  game.settings.register(MODULE_ID, SETTING_ENABLE_COMPENDIUM_TRANSLATIONS, {
    name: "Zusatzinhalte (Kompendien) übersetzen",
    hint: "Aktiviert Laufzeit-Übersetzungen für zusätzliche dnd5e-Kompendiuminhalte über Babele. Deaktiviert: nur System/UI, Character-Sheets und Tooltips.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
    requiresReload: true
  });
  applyDamageLocalizationFallback();

  if (!isCompendiumTranslationEnabled()) {
    console.log(`[${MODULE_ID}] Additional compendium translations are disabled by world setting.`);
    return;
  }

  if (typeof Babele === "undefined") {
    console.warn(`[${MODULE_ID}] Babele not found. Runtime translation is disabled.`);
    return;
  }

  Babele.get().register({
    module: MODULE_ID,
    lang: "de",
    dir: "babele"
  });

  Babele.get().registerConverters({
    dnd5e55NameDeRuntime: translateNameRuntime,
    dnd5e55DescriptionDeRuntime: translateDescriptionRuntime,
    dnd5e55ActivitiesDeRuntime: translateActivitiesRuntime,
    dnd5e55AdvancementDeRuntime: translateAdvancementRuntime,
    dnd5e55MaterialsDeRuntime: translateMaterialsRuntime,
    dnd5e55WeightMetricRuntime: convertWeightValueRuntime,
    dnd5e55WeightUnitMetricRuntime: convertWeightUnitsRuntime,
    dnd5e55SpellActivationConditionDeRuntime: translateSpellActivationConditionRuntime,
    dnd5e55SpellRangeMetricRuntime: convertSpellRangeValueRuntime,
    dnd5e55SpellRangeUnitMetricRuntime: convertSpellRangeUnitsRuntime,
    dnd5e55SpellRangeSpecialDeRuntime: translateSpellRangeSpecialRuntime,
    dnd5e55SpellDurationSpecialDeRuntime: translateSpellDurationSpecialRuntime,
    dnd5e55SpellTargetTemplateMetricRuntime: convertSpellTargetTemplateRuntime,
    dnd5e55SpellTemplateMetricRuntime: convertSpellTargetTemplateSizeRuntime,
    dnd5e55SpellTemplateUnitMetricRuntime: convertSpellTargetTemplateUnitsRuntime,
    dnd5e55OriginDistanceMetricRuntime: convertOriginDistanceMetricRuntime,
    dnd5e55OriginDistanceUnitMetricRuntime: convertOriginDistanceUnitMetricRuntime,
    dnd5e55OriginDistanceContainerUnitsRuntime: convertOriginDistanceContainerUnitsRuntime,
    dnd5e55ActorDistanceMetricRuntime: convertActorDistanceMetricRuntime,
    dnd5e55ActorDistanceUnitMetricRuntime: convertActorDistanceUnitMetricRuntime,
    dnd5e55ActorMovementMetricRuntime: convertActorMovementMetricRuntime,
    dnd5e55ActorSensesMetricRuntime: convertActorSensesMetricRuntime,
    dnd5e55ActorLanguagesDeRuntime: translateActorLanguagesRuntime,
    dnd5e55ActorLanguagesCustomDeRuntime: translateActorLanguagesCustomRuntime,
    dnd5e55ActorTypeCustomDeRuntime: translateActorTypeCustomRuntime,
    dnd5e55ActorHabitatCustomDeRuntime: translateActorHabitatCustomRuntime,
    dnd5e55ActorHabitatValueDeRuntime: translateActorHabitatValueRuntime,
    dnd5e55ItemRangeMetricRuntime: convertItemRangeMetricRuntime,
    dnd5e55ItemRangeUnitMetricRuntime: convertItemRangeUnitMetricRuntime,
    dnd5e55SpellTargetAffectsSpecialDeRuntime: translateSpellTargetAffectsSpecialRuntime,
    dnd5e55SpellUnidentifiedDescriptionDeRuntime: translateSpellUnidentifiedDescriptionRuntime,
    dnd5e55ActivitiesRangeMetricRuntime: convertActivitiesRangeRuntime,
    dnd5e55EffectsDeRuntime: translateEffectsRuntime,
    dnd5e55EmbeddedItemsDeRuntime: translateEmbeddedItemsRuntime,
    dnd5e55JournalPagesDeRuntime: translateJournalPagesRuntime,
    dnd5e55RollTableResultsDeRuntime: translateRollTableResultsRuntime
  });
  console.log(`[${MODULE_ID}] Babele runtime mappings registered with strict legacy/modern separation.`);
});

Hooks.once("ready", () => {
  applyDamageLocalizationFallback();
});






