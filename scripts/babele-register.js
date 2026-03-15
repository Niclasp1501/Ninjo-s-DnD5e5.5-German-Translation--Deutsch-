import { GENERATED_OVERRIDES_BY_ID } from "./babele-runtime-overrides.generated.js";
import { TOOL_OVERRIDES_BY_ID } from "./babele-runtime-overrides.js";

const MODULE_ID = "foundryvtt-dnd5e55-lang-de";

function isGermanUi() {
  return String(game.i18n?.lang ?? "").toLowerCase().startsWith("de");
}

function isTargetType(data) {
  return !!data && (data.type === "weapon" || data.type === "tool");
}

function getSourceId(data) {
  return foundry.utils.parseUuid(data?.flags?.core?.sourceId || data?._stats?.compendiumSource)?.id;
}

function getItemId(data) {
  return getSourceId(data) || data?._id || "";
}

function getToolOverride(data) {
  const itemId = getItemId(data);
  if (!itemId) return null;
  return TOOL_OVERRIDES_BY_ID[itemId] || GENERATED_OVERRIDES_BY_ID[itemId] || null;
}

function roundMetric(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Math.round((n / 2) * 10) / 10;
}

function translateItemNameRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi() || !isTargetType(data)) return originalValue;
  const override = getToolOverride(data);
  return override?.name || originalValue;
}

function translateToolWeaponDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi() || !isTargetType(data)) return originalValue;
  const override = getToolOverride(data);
  return override?.description || originalValue;
}

function translateToolWeaponActivitiesRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi() || !isTargetType(data)) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const override = getToolOverride(data);
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
  if (!isGermanUi() || !isTargetType(data)) return originalValue;
  return roundMetric(originalValue);
}

function convertWeightUnitsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi() || !isTargetType(data)) return originalValue;
  const units = String(originalValue ?? "").toLowerCase();
  return units === "lb" ? "kg" : originalValue;
}

Hooks.once("init", () => {
  if (game.system.id !== "dnd5e") return;

  if (typeof Babele === "undefined") {
    console.warn(`[${MODULE_ID}] Babele not found. Runtime weapon/tool translation is disabled.`);
    return;
  }

  Babele.get().register({
    module: MODULE_ID,
    lang: "de",
    dir: "babele"
  });

  Babele.get().registerConverters({
    dnd5e55NameDeRuntime: translateItemNameRuntime,
    dnd5e55DescriptionDeRuntime: translateToolWeaponDescriptionRuntime,
    dnd5e55ActivitiesDeRuntime: translateToolWeaponActivitiesRuntime,
    dnd5e55WeightMetricRuntime: convertWeightValueRuntime,
    dnd5e55WeightUnitMetricRuntime: convertWeightUnitsRuntime
  });

  console.log(`[${MODULE_ID}] Babele runtime mappings registered for DE weapon/tool names, descriptions, and metric weights.`);
});