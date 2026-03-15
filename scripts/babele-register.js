import { TOOL_OVERRIDES_BY_ID } from "./babele-runtime-overrides.js";

const MODULE_ID = "foundryvtt-dnd5e55-lang-de";

function isGermanUi() {
  return String(game.i18n?.lang ?? "").toLowerCase().startsWith("de");
}

function normalizeName(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\u00e4/g, "ae")
    .replace(/\u00f6/g, "oe")
    .replace(/\u00fc/g, "ue")
    .replace(/\u00df/g, "ss")
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9+'() :.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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
  return TOOL_OVERRIDES_BY_ID[itemId] || null;
}

function roundMetric(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return Math.round((n / 2) * 10) / 10;
}

const NAME_MAP_DE = new Map(
  Object.entries({
    "alchemist's supplies": "Alchemistenausrüstung",
    "brewer's supplies": "Brauerausrüstung",
    "calligrapher's supplies": "Kalligrafieausrüstung",
    "carpenter's tools": "Zimmermannswerkzeug",
    "cartographer's tools": "Kartografenwerkzeug",
    "cobbler's tools": "Schusterwerkzeug",
    "cook's utensils": "Kochutensilien",
    "glassblower's tools": "Glasbläserwerkzeug",
    "jeweler's tools": "Juwelierswerkzeug",
    "leatherworker's tools": "Ledererwerkzeug",
    "mason's tools": "Maurerwerkzeug",
    "painter's supplies": "Malerbedarf",
    "potter's tools": "Töpferwerkzeug",
    "smith's tools": "Schmiedewerkzeug",
    "tinker's tools": "Kesselflickerwerkzeug",
    "weaver's tools": "Weberwerkzeug",
    "woodcarver's tools": "Schnitzwerkzeug",
    "disguise kit": "Verkleidungsausrüstung",
    "forgery kit": "Fälscherausrüstung",
    "herbalism kit": "Kräuterkundeausrüstung",
    "navigator's tools": "Navigationswerkzeuge",
    "poisoner's kit": "Giftmischerausrüstung",
    "thieves' tools": "Diebeswerkzeug",
    "musical instrument: bagpipes": "Musikinstrument: Dudelsack",
    "musical instrument: drum": "Musikinstrument: Trommel",
    "musical instrument: dulcimer": "Musikinstrument: Hackbrett",
    "musical instrument: flute": "Musikinstrument: Flöte",
    "musical instrument: horn": "Musikinstrument: Horn",
    "musical instrument: lute": "Musikinstrument: Laute",
    "musical instrument: lyre": "Musikinstrument: Leier",
    "musical instrument: pan flute": "Musikinstrument: Panflöte",
    "musical instrument: shawm": "Musikinstrument: Schalmei",
    "musical instrument: viol": "Musikinstrument: Viola da Gamba",
    "gaming set: dice": "Spielset: Würfel",
    "gaming set: dragonchess": "Spielset: Drachenschach",
    "gaming set: playing cards": "Spielset: Spielkarten",
    "club": "Knüppel",
    "dagger": "Dolch",
    "greatclub": "Großknüppel",
    "handaxe": "Handaxt",
    "javelin": "Wurfspeer",
    "light hammer": "Leichter Hammer",
    "mace": "Streitkolben",
    "quarterstaff": "Kampfstab",
    "sickle": "Sichel",
    "spear": "Speer",
    "light crossbow": "Leichte Armbrust",
    "dart": "Wurfpfeil",
    "shortbow": "Kurzbogen",
    "sling": "Schleuder",
    "battleaxe": "Streitaxt",
    "flail": "Flegel",
    "glaive": "Glefe",
    "greataxe": "Zweihandaxt",
    "greatsword": "Zweihandschwert",
    "halberd": "Hellebarde",
    "lance": "Lanze",
    "longsword": "Langschwert",
    "maul": "Kriegshammer",
    "morningstar": "Morgenstern",
    "pike": "Pike",
    "rapier": "Rapier",
    "scimitar": "Krummsäbel",
    "shortsword": "Kurzschwert",
    "trident": "Dreizack",
    "war pick": "Kriegspickel",
    "warhammer": "Kriegshammer",
    "whip": "Peitsche",
    "blowgun": "Blasrohr",
    "hand crossbow": "Handarmbrust",
    "heavy crossbow": "Schwere Armbrust",
    "longbow": "Langbogen",
    "net": "Netz"
  }).map(([k, v]) => [normalizeName(k), v])
);

function translateItemNameRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;

  const override = getToolOverride(data);
  if (override?.name) return override.name;

  const original = String(originalValue ?? "").trim();
  if (!original) return originalValue;

  const plusSuffix = original.match(/^(.+?)\s*(\+\d+)$/);
  if (plusSuffix) {
    const translatedBase = translateItemNameRuntime(plusSuffix[1], null, data);
    return `${translatedBase} ${plusSuffix[2]}`;
  }

  const mapped = NAME_MAP_DE.get(normalizeName(original));
  if (mapped) return mapped;

  return originalValue;
}

function translateToolWeaponDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;

  const override = getToolOverride(data);
  if (override?.description) return override.description;

  return originalValue;
}

function translateToolWeaponActivitiesRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const override = getToolOverride(data);
  if (!override?.activities) return originalValue;

  const translated = foundry.utils.deepClone(originalValue);
  for (const activity of Object.values(translated)) {
    if (!activity || typeof activity !== "object") continue;
    if (typeof activity.name !== "string") continue;

    const mapped = override.activities[activity.name];
    if (mapped) activity.name = mapped;
  }

  return translated;
}

function convertWeightValueRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;
  return roundMetric(originalValue);
}

function convertWeightUnitsRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;
  const units = String(originalValue ?? "").toLowerCase();
  if (units === "lb") return "kg";
  return originalValue;
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