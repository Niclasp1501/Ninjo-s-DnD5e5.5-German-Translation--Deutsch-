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

function roundMetric(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Math.round((n / 2) * 10) / 10;
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
    .replace(/Ã„/g, "Ä")
    .replace(/Ã–/g, "Ö")
    .replace(/Ãœ/g, "Ü")
    .replace(/Ã¤/g, "ä")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã¼/g, "ü")
    .replace(/ÃŸ/g, "ß")
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/â€ž/g, "„")
    .replace(/â€œ/g, "“")
    .replace(/â€\x9c/g, "“")
    .replace(/â€\x9d/g, "”")
    .replace(/Â/g, "");
}

function translateNameRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  return fixMojibakeRuntime(override?.name || originalValue);
}

function translateDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  const description = fixMojibakeRuntime(override?.description || originalValue);
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
  if (!awardNormalized.includes("@UUID[")) return fixMojibakeRuntime(awardNormalized);

  return awardNormalized.replace(/@UUID\[([^\]]+)\](?:\{([^}]*)\})?/g, (full, uuidPath) => {
    const id = String(uuidPath).split(".").pop();
    if (!id) return full;
    const linked = CURATED_OVERRIDES_BY_ID[id] || MODERN_OVERRIDES_BY_ID[id] || LEGACY_OVERRIDES_BY_ID[id];
    const deName = linked?.name;
    if (!deName || typeof deName !== "string" || !deName.trim()) return full;
    return `@UUID[${uuidPath}]{${deName}}`;
  });
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
  if (!override?.activities && !override?.activitiesMeta) return originalValue;

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
    if (!override) continue;

    if (typeof override.name === "string" && override.name.trim()) {
      item.name = fixMojibakeRuntime(override.name);
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

    if (typeof override.activationCondition === "string" && override.activationCondition.trim() && item?.system?.activation) {
      item.system.activation.condition = fixMojibakeRuntime(override.activationCondition);
    }
    if (typeof override.rangeSpecial === "string" && override.rangeSpecial.trim() && item?.system?.range) {
      item.system.range.special = fixMojibakeRuntime(override.rangeSpecial);
    }
    if (typeof override.durationSpecial === "string" && override.durationSpecial.trim() && item?.system?.duration) {
      item.system.duration.special = fixMojibakeRuntime(override.durationSpecial);
    }
    if (
      typeof override.targetAffectsSpecial === "string" &&
      override.targetAffectsSpecial.trim() &&
      item?.system?.target?.affects
    ) {
      item.system.target.affects.special = fixMojibakeRuntime(override.targetAffectsSpecial);
    }
    if (
      typeof override.unidentifiedDescription === "string" &&
      override.unidentifiedDescription.trim() &&
      item?.system?.unidentified
    ) {
      item.system.unidentified.description = fixMojibakeRuntime(override.unidentifiedDescription);
    }
  }

  return translated;
}

function translateRollTableResultsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const override = getOverrideById(data);
  const resultMap = override?.tableResults;
  if (!resultMap || typeof resultMap !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const result of translated) {
    if (!result || typeof result !== "object") continue;
    const rid = String(result._id ?? "");
    const rr = Array.isArray(result.range) && result.range.length >= 2 ? `${result.range[0]}-${result.range[1]}` : "";
    const mapped = resultMap[rid] || resultMap[rr] || null;
    if (typeof mapped !== "string" || !mapped.trim()) continue;

    const normalized = fixMojibakeRuntime(mapped);
    if (typeof result.description === "string") result.description = normalized;
    if (typeof result.text === "string") result.text = normalized;
  }
  return translated;
}

Hooks.once("init", () => {
  if (game.system.id !== "dnd5e") return;

  game.settings.register(MODULE_ID, SETTING_ENABLE_COMPENDIUM_TRANSLATIONS, {
    name: "Zusatzinhalte (Kompendien) Ã¼bersetzen",
    hint: "Aktiviert Laufzeit-Ãœbersetzungen fÃ¼r zusÃ¤tzliche dnd5e-Kompendiuminhalte Ã¼ber Babele. Deaktiviert: nur System/UI, Character-Sheets und Tooltips.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
    requiresReload: true
  });

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
    dnd5e55ItemRangeMetricRuntime: convertItemRangeMetricRuntime,
    dnd5e55ItemRangeUnitMetricRuntime: convertItemRangeUnitMetricRuntime,
    dnd5e55SpellTargetAffectsSpecialDeRuntime: translateSpellTargetAffectsSpecialRuntime,
    dnd5e55SpellUnidentifiedDescriptionDeRuntime: translateSpellUnidentifiedDescriptionRuntime,
    dnd5e55ActivitiesRangeMetricRuntime: convertActivitiesRangeRuntime,
    dnd5e55EffectsDeRuntime: translateEffectsRuntime,
    dnd5e55EmbeddedItemsDeRuntime: translateEmbeddedItemsRuntime,
    dnd5e55RollTableResultsDeRuntime: translateRollTableResultsRuntime
  });

  console.log(`[${MODULE_ID}] Babele runtime mappings registered with strict legacy/modern separation.`);
});






