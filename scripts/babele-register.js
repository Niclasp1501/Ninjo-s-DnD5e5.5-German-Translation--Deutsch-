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

const ACTIVITY_NAME_MAP_DE = new Map([
  ["Mimic Handwriting", "Handschrift imitieren"],
  ["Duplicate Wax Seal", "Wachssiegel fälschen"],
  ["Pick a Lock/Disarm a Trap", "Schloss knacken/Falle entschärfen"],
  ["Plot a Course", "Kurs festlegen"],
  ["Determine Position by Stargazing", "Position per Sternbeobachtung bestimmen"]
]);

function translateItemNameRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;

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

function translateDescriptionTextDe(text) {
  let out = String(text ?? "");
  if (!out) return out;

  const sentencePatterns = [
    {
      re: /Mimic\s+10\s+or\s+fewer\s+words\s+of\s+someone\s+else['’]s\s+handwriting\s+\((?:DC|SG)\s*_?15\),\s*or\s+duplicate\s+a\s+wax\s+seal\s+\((?:DC|SG)\s*_?20\)/gi,
      de: "Imitiere bis zu 10 Wörter in der Handschrift einer anderen Person (SG 15) oder fälsche ein Wachssiegel (SG 20)"
    },
    {
      re: /Pick\s+a\s+lock\s+\((?:DC|SG)\s*_?15\),\s*or\s+disarm\s+a\s+trap\s+\((?:DC|SG)\s*_?15\)/gi,
      de: "Knacke ein Schloss (SG 15) oder entschärfe eine Falle (SG 15)"
    },
    {
      re: /Plot\s+a\s+course\s+\((?:DC|SG)\s*_?10\),\s*or\s+determine\s+position\s+by\s+stargazing\s+\((?:DC|SG)\s*_?15\)/gi,
      de: "Bestimme einen Kurs (SG 10) oder ermittle die Position per Sternbeobachtung (SG 15)"
    },
    {
      re: /Detect\s+a\s+poisoned\s+object\s+\((?:DC|SG)\s*_?10\)/gi,
      de: "Erkenne ein vergiftetes Objekt (SG 10)"
    },
    {
      re: /Identify\s+a\s+plant\s+\((?:DC|SG)\s*_?10\)/gi,
      de: "Bestimme eine Pflanze (SG 10)"
    },
    {
      re: /Play\s+a\s+known\s+tune\s+\((?:DC|SG)\s*_?10\),\s*or\s+improvise\s+a\s+song\s+\((?:DC|SG)\s*_?15\)/gi,
      de: "Spiele eine bekannte Melodie (SG 10) oder improvisiere ein Lied (SG 15)"
    }
  ];

  for (const { re, de } of sentencePatterns) {
    out = out.replace(re, de);
  }

  out = out
    .replace(/<strong>\s*Ability:\s*<\/strong>/gi, "<strong>Attribut:</strong>")
    .replace(/<strong>\s*Utilize:\s*<\/strong>/gi, "<strong>Verwenden:</strong>")
    .replace(/<strong>\s*Craft:\s*<\/strong>/gi, "<strong>Herstellen:</strong>")
    .replace(/\bStrength\b/g, "Stärke")
    .replace(/\bDexterity\b/g, "Geschicklichkeit")
    .replace(/\bConstitution\b/g, "Konstitution")
    .replace(/\bIntelligence\b/g, "Intelligenz")
    .replace(/\bWisdom\b/g, "Weisheit")
    .replace(/\bCharisma\b/g, "Charisma")
    .replace(/\(DC\s*_?(\d+)\)/g, "(SG $1)")
    .replace(/\(DC\s+(\d+)\)/g, "(SG $1)");

  return out;
}

function translateToolWeaponDescriptionRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;
  if (typeof originalValue !== "string") return originalValue;
  return translateDescriptionTextDe(originalValue);
}

function translateToolWeaponActivitiesRuntime(originalValue, _entryTranslation, data) {
  if (!isGermanUi()) return originalValue;
  if (!isTargetType(data)) return originalValue;
  if (!originalValue || typeof originalValue !== "object") return originalValue;

  const translated = foundry.utils.deepClone(originalValue);

  for (const activity of Object.values(translated)) {
    if (!activity || typeof activity !== "object") continue;

    if (typeof activity.name === "string" && ACTIVITY_NAME_MAP_DE.has(activity.name)) {
      activity.name = ACTIVITY_NAME_MAP_DE.get(activity.name);
    }

    if (activity.description?.chatFlavor && typeof activity.description.chatFlavor === "string") {
      activity.description.chatFlavor = translateDescriptionTextDe(activity.description.chatFlavor);
    }
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