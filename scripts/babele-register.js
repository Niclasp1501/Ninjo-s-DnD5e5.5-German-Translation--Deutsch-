import { LEGACY_OVERRIDES_BY_ID } from "./babele-runtime-overrides.legacy.generated.js";
import { MODERN_OVERRIDES_BY_ID } from "./babele-runtime-overrides.modern.generated.js";
import { CURATED_OVERRIDES_BY_ID } from "./babele-runtime-overrides.js";

const MODULE_ID = "foundryvtt-dnd5e55-lang-de";
const SETTING_ENABLE_COMPENDIUM_TRANSLATIONS = "enableCompendiumTranslations";
const ITEM_TYPES_WITH_WEIGHT = new Set(["weapon", "tool", "equipment", "consumable", "loot", "container"]);

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
  return override?.description || originalValue;
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
    dnd5e55WeightMetricRuntime: convertWeightValueRuntime,
    dnd5e55WeightUnitMetricRuntime: convertWeightUnitsRuntime
  });

  console.log(`[${MODULE_ID}] Babele runtime mappings registered with strict legacy/modern separation.`);
});
