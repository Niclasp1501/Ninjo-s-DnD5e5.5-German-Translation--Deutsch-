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

function translateNameRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  return override?.name || originalValue;
}

function translateDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  const description = override?.description || originalValue;
  if (typeof description !== "string") return description;

  const normalized = description.replace(INLINE_TOKEN_RE, (_full, kind, inner, suffix = "") => {
    const cleanInner = String(inner ?? "")
      .replace(/\s+/g, " ")
      .trim();
    return `@${kind}[${cleanInner}]${suffix || ""}`;
  });
  if (!normalized.includes("@UUID[")) return normalized;

  return normalized.replace(/@UUID\[([^\]]+)\](?:\{([^}]*)\})?/g, (full, uuidPath) => {
    const id = String(uuidPath).split(".").pop();
    if (!id) return full;
    const linked = CURATED_OVERRIDES_BY_ID[id] || MODERN_OVERRIDES_BY_ID[id] || LEGACY_OVERRIDES_BY_ID[id];
    const deName = linked?.name;
    if (!deName || typeof deName !== "string" || !deName.trim()) return full;
    return `@UUID[${uuidPath}]{${deName}}`;
  });
}

function translateActivitiesRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const override = getOverrideById(data);
  if (!override?.activities) return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const activity of Object.values(translated)) {
    if (!activity || typeof activity !== "object" || typeof activity.name !== "string") continue;
    const mapped = override.activities[activity.name];
    if (mapped) activity.name = mapped;
  }
  return translated;
}

function translateAdvancementRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!Array.isArray(originalValue)) return originalValue;

  const itemType = String(data?.type ?? "");
  if (!["class", "subclass", "feat"].includes(itemType)) return originalValue;

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
    if (typeof mapped.title === "string" && mapped.title.trim()) step.title = mapped.title;
    if (typeof mapped.hint === "string" && mapped.hint.trim()) step.hint = mapped.hint;
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

function translateMaterialsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  const override = getOverrideById(data);
  return override?.materials || originalValue;
}

function translateSpellActivationConditionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return override?.activationCondition || originalValue;
}

function translateSpellRangeSpecialRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return override?.rangeSpecial || originalValue;
}

function translateSpellTargetAffectsSpecialRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return override?.targetAffectsSpecial || originalValue;
}

function translateSpellDurationSpecialRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return override?.durationSpecial || originalValue;
}

function translateSpellUnidentifiedDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (String(data?.type ?? "") !== "spell") return originalValue;
  const override = getOverrideById(data);
  return override?.unidentifiedDescription || originalValue;
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
      if (mapped) activity.name = mapped;
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
        activity.description.chatFlavor = activityMeta.chatFlavor;
      }
      if (typeof activityMeta.activationCondition === "string" && activityMeta.activationCondition.trim() && activity?.activation) {
        activity.activation.condition = activityMeta.activationCondition;
      }
      if (typeof activityMeta.rangeSpecial === "string" && activityMeta.rangeSpecial.trim() && activity?.range) {
        activity.range.special = activityMeta.rangeSpecial;
      }
      if (
        typeof activityMeta.targetAffectsSpecial === "string" &&
        activityMeta.targetAffectsSpecial.trim() &&
        activity?.target?.affects
      ) {
        activity.target.affects.special = activityMeta.targetAffectsSpecial;
      }
      if (typeof activityMeta.durationSpecial === "string" && activityMeta.durationSpecial.trim() && activity?.duration) {
        activity.duration.special = activityMeta.durationSpecial;
      }

      if (activityMeta.profileNames && typeof activityMeta.profileNames === "object" && Array.isArray(activity?.profiles)) {
        for (const profile of activity.profiles) {
          if (!profile || typeof profile !== "object" || typeof profile.name !== "string") continue;
          const translatedName = activityMeta.profileNames[profile.name];
          if (typeof translatedName === "string" && translatedName.trim()) {
            profile.name = translatedName;
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

Hooks.once("init", () => {
  if (game.system.id !== "dnd5e") return;

  game.settings.register(MODULE_ID, SETTING_ENABLE_COMPENDIUM_TRANSLATIONS, {
    name: "Zusatzinhalte (Kompendien) übersetzen",
    hint: "Aktiviert Laufzeit-Übersetzungen für zusätzliche dnd5e-Kompendiuminhalte über Babele. Deaktiviert: nur System/UI, Character-Sheets und Tooltips.",
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
    dnd5e55SpellTargetAffectsSpecialDeRuntime: translateSpellTargetAffectsSpecialRuntime,
    dnd5e55SpellUnidentifiedDescriptionDeRuntime: translateSpellUnidentifiedDescriptionRuntime,
    dnd5e55ActivitiesRangeMetricRuntime: convertActivitiesRangeRuntime,
    dnd5e55EffectsDeRuntime: translateEffectsRuntime
  });

  console.log(`[${MODULE_ID}] Babele runtime mappings registered with strict legacy/modern separation.`);
});
