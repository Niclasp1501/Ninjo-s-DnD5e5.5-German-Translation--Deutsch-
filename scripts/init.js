const MODULE_ID = "foundryvtt-dnd5e55-lang-de";
const SETTING_ENABLE_COMPENDIUM_TRANSLATIONS = "enableCompendiumTranslations";
const MODULE_PACK_NAME = "dnd5e55-de-tooltips";
const MODULE_PACK_COLLECTION = `${MODULE_ID}.${MODULE_PACK_NAME}`;
const LEGACY_UUID_PREFIX_MAP = new Map([
  ["Compendium.dnd-players-handbook.content.", "Compendium.dnd5e.content24."],
  ["Compendium.dnd-players-handbook.equipment.", "Compendium.dnd5e.equipment24."],
  ["Compendium.dnd-players-handbook.spells.", "Compendium.dnd5e.spells24."],
  ["Compendium.dnd-players-handbook.classes.", "Compendium.dnd5e.classes24."],
  ["Compendium.dnd-players-handbook.origins.", "Compendium.dnd5e.origins24."],
  ["Compendium.dnd-players-handbook.feats.", "Compendium.dnd5e.feats24."],
  ["Compendium.dnd-players-handbook.tables.", "Compendium.dnd5e.tables24."]
]);
const REFERENCE_LABEL_MAP_DE = new Map([
  ["Attack", "Angriff"],
  ["Dash", "Sprinten"],
  ["Disengage", "R\u00fcckzug"],
  ["Dodge", "Ausweichen"],
  ["Help", "Helfen"],
  ["Hide", "Verstecken"],
  ["Influence", "Beeinflussen"],
  ["Magic", "Magie"],
  ["Ready", "Bereithalten"],
  ["Search", "Suchen"],
  ["Study", "Studieren"],
  ["Utilize", "Nutzen"],
  ["D20 Test", "W20-Wurf"],
  ["D20 Tests", "W20-W\u00fcrfe"],
  ["Critical Hit", "Kritischer Treffer"],
  ["Bonus Actions", "Bonusaktionen"],
  ["Reactions", "Reaktionen"]
]);
const TOC_HEADING_MAP_DE = new Map([
  ["Playing the Game", "Das Spielgeschehen"],
  ["Character Classes", "Klassen"],
  ["Character Origins", "Charakterherk\u00fcnfte"],
  ["Equipment", "Ausr\u00fcstung"],
  ["Spells", "Zauber"],
  ["Feats", "Talente"],
  ["Rules Glossary", "Regelglossar"],
  ["Gameplay Toolbox", "Spielhilfen"],
  ["The Basics", "Grundlagen"],
  ["Ensuring Fun for All", "Spa\u00df f\u00fcr alle sichern"],
  ["Magic Items", "Magische Gegenst\u00e4nde"],
  ["How to Use a Monster", "Monster verwenden"],
  ["Monster A-Z", "Monster A-Z"],
  ["Tracking Sheets", "Tracking-B\u00f6gen"],
  ["Running Combat", "Kampf leiten"],
  ["Monster", "Monster"]
]);
const TOC_HEADING_MAP_DE_NORMALIZED = new Map(
  Array.from(TOC_HEADING_MAP_DE.entries(), ([source, target]) => [source.toLowerCase(), target])
);
const BabeleReferenceLabelMap = new Map();
const COMPENDIUM_LABEL_MAP_DE = new Map([
  ["D&D Modern Content", "D&D Moderne Inhalte"],
  ["D&D Legacy Content", "D&D Legacy-Inhalte"],
  ["Character Features", "Charaktermerkmale"],
  ["Items & Spells", "Gegenstände & Zauber"],
  ["Monsters", "Monster"],
  ["Player's Handbook", "Spielerhandbuch"],
  ["Players Handbook", "Spielerhandbuch"]
]);

const SKILL_LABELS_DE = {
  acr: "Akrobatik",
  ani: "Mit Tieren umgehen",
  arc: "Arkane Kunde",
  ath: "Athletik",
  dec: "Taeuschung",
  his: "Geschichte",
  ins: "Motiv erkennen",
  itm: "Einschuechtern",
  inv: "Nachforschungen",
  med: "Heilkunde",
  nat: "Naturkunde",
  per: "Auftreten",
  prc: "Wahrnehmung",
  prf: "Darbietung",
  rel: "Religion",
  slt: "Fingerfertigkeit",
  ste: "Heimlichkeit",
  sur: "Ueberlebenskunst"
};

function isGermanUi() {
  return String(game.i18n?.lang ?? "").toLowerCase().startsWith("de");
}

function isCompendiumTranslationEnabled() {
  return game.settings?.get(MODULE_ID, SETTING_ENABLE_COMPENDIUM_TRANSLATIONS) !== false;
}

function isMetricLengthEnabled() {
  return game.settings?.get("dnd5e", "metricLengthUnits") === true;
}

function shouldNormalizeMetricImports() {
  if (game.system.id !== "dnd5e") return false;
  return isMetricLengthEnabled();
}

function roundMetricValue(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function convertDistanceValue(value, fromUnit, toUnit) {
  const num = Number(value);
  if (!Number.isFinite(num)) return value;

  const from = CONFIG.DND5E?.movementUnits?.[fromUnit]?.conversion;
  const to = CONFIG.DND5E?.movementUnits?.[toUnit]?.conversion;
  if (!Number.isFinite(from) || !Number.isFinite(to) || to === 0) return value;

  return roundMetricValue((num * from) / to);
}

function convertScalarLike(value, fromUnit, toUnit) {
  if (typeof value === "number") return convertDistanceValue(value, fromUnit, toUnit);

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (!/^[-+]?\d+(\.\d+)?$/.test(trimmed)) return value; // Keep formulas as-is.
    const converted = convertDistanceValue(Number(trimmed), fromUnit, toUnit);
    if (!Number.isFinite(converted)) return value;
    return String(converted);
  }

  return value;
}

function normalizeDistanceUnitsInObject(root) {
  if (!root || typeof root !== "object") return 0;

  const DISTANCE_KEYS = ["value", "long", "reach", "size", "width", "height", "distance"];
  let changes = 0;

  const walk = node => {
    if (!node || typeof node !== "object") return;

    if (Array.isArray(node)) {
      for (const entry of node) walk(entry);
      return;
    }

    const rawUnits = typeof node.units === "string" ? node.units.toLowerCase() : null;
    const targetUnit = rawUnits === "ft" ? "m" : rawUnits === "mi" ? "km" : null;

    if (targetUnit) {
      for (const key of DISTANCE_KEYS) {
        if (!(key in node)) continue;
        const original = node[key];
        const converted = convertScalarLike(original, rawUnits, targetUnit);
        if (converted !== original) {
          node[key] = converted;
          changes += 1;
        }
      }

      if (node.units !== targetUnit) {
        node.units = targetUnit;
        changes += 1;
      }
    }

    for (const value of Object.values(node)) walk(value);
  };

  walk(root);
  return changes;
}

function normalizeItemCreateData(source) {
  return normalizeDistanceUnitsInObject(source?.system ?? source);
}

function normalizeActorCreateData(source) {
  let changes = normalizeDistanceUnitsInObject(source?.system ?? source);

  const items = source?.items;
  if (Array.isArray(items)) {
    for (const itemSource of items) {
      changes += normalizeItemCreateData(itemSource);
    }
  }

  return changes;
}

function normalizeLabel(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\u00e4/g, "ae")
    .replace(/\u00f6/g, "oe")
    .replace(/\u00fc/g, "ue")
    .replace(/\u00df/g, "ss")
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

function remapLegacyUuid(uuid) {
  const value = String(uuid ?? "");
  for (const [legacyPrefix, modernPrefix] of LEGACY_UUID_PREFIX_MAP.entries()) {
    if (value.startsWith(legacyPrefix)) return `${modernPrefix}${value.slice(legacyPrefix.length)}`;
  }
  return value;
}

function keyVariants(value) {
  const source = String(value ?? "").trim();
  if (!source) return [];
  const lower = source.toLowerCase();
  const compact = lower.replace(/[^a-z0-9]+/g, "");
  const alnum = lower.replace(/[^a-z0-9]+/g, " ").trim();
  return Array.from(new Set([source, lower, compact, alnum]));
}

function addReferenceLabel(source, localized) {
  const local = String(localized ?? "").trim();
  if (!local) return;
  for (const variant of keyVariants(source)) {
    BabeleReferenceLabelMap.set(variant, local);
  }
}

function getReferenceLabel(sourceText) {
  const text = String(sourceText ?? "").trim();
  if (!text) return null;

  const direct = REFERENCE_LABEL_MAP_DE.get(text);
  if (direct) return direct;

  for (const variant of keyVariants(text)) {
    const mapped = BabeleReferenceLabelMap.get(variant);
    if (!mapped) continue;
    if (normalizeLabel(mapped) === normalizeLabel(text)) continue;
    return mapped;
  }

  return null;
}

async function loadReferenceLabelsFromBabele() {
  const files = ["dnd5e.content24.json", "dnd5e.rules.json"];
  for (const file of files) {
    try {
      const response = await fetch(`modules/${MODULE_ID}/babele/${file}`);
      if (!response.ok) continue;
      const data = await response.json();
      const entries = data?.entries ?? {};
      for (const [entryKey, entryValue] of Object.entries(entries)) {
        addReferenceLabel(entryKey, entryValue?.name);
        for (const [pageKey, pageValue] of Object.entries(entryValue?.pages ?? {})) {
          addReferenceLabel(pageKey, pageValue?.name);
        }
      }
    } catch (_err) {
      // Non-fatal: fallback map remains available.
    }
  }
}

function normalizeLegacyUuidsInElement(rootElement) {
  const roots = collectSearchRoots(rootElement);
  if (!roots.length) return 0;

  let changed = 0;
  for (const root of roots) {
    for (const link of root.querySelectorAll("a.content-link[data-uuid], a.entity-link[data-uuid], [data-uuid]")) {
      const original = link.dataset?.uuid;
      if (!original) continue;
      const mapped = remapLegacyUuid(original);
      if (mapped === original) continue;
      link.dataset.uuid = mapped;
      changed += 1;
    }
  }

  return changed;
}

function localizeReferenceLabelsInElement(rootElement) {
  const roots = collectSearchRoots(rootElement);
  if (!roots.length) return 0;

  let changed = 0;
  const selector = [
    "a.content-link",
    "a.entity-link",
    "a[data-link]",
    "a[data-uuid]",
    "span.reference"
  ].join(", ");

  for (const root of roots) {
    for (const link of root.querySelectorAll(selector)) {
      const text = String(link.textContent ?? "").trim();
      if (!text) continue;
      const localized = getReferenceLabel(text);
      if (!localized || localized === text) continue;
      link.textContent = localized;
      changed += 1;
    }
  }

  return changed;
}

function localizeOverviewHeadingsInElement(rootElement) {
  const roots = collectSearchRoots(rootElement);
  if (!roots.length) return 0;

  const normalizeDisplayText = value =>
    String(value ?? "")
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  let changed = 0;
  const selector = "h1, h2, h3, h4, h5, h6, strong, a, span, p, li, th, td, div";
  for (const root of roots) {
    for (const node of root.querySelectorAll(selector)) {
      const text = String(node.textContent ?? "").trim();
      if (!text || text.length > 80) continue;
      const replacement = TOC_HEADING_MAP_DE_NORMALIZED.get(normalizeDisplayText(text));
      if (!replacement || replacement === text.trim()) continue;
      node.textContent = replacement;
      changed += 1;
    }
  }
  return changed;
}

function collectSearchRoots(rootElement) {
  const roots = [];
  const seen = new Set();

  const addRoot = root => {
    if (!root?.querySelectorAll) return;
    if (seen.has(root)) return;
    seen.add(root);
    roots.push(root);
  };

  addRoot(rootElement);

  if (rootElement?.shadowRoot) addRoot(rootElement.shadowRoot);

  if (rootElement?.querySelectorAll) {
    for (const el of rootElement.querySelectorAll("*")) {
      if (el?.shadowRoot) addRoot(el.shadowRoot);
    }
  }

  return roots;
}

function localizeTocHeading(value) {
  const text = String(value ?? "").trim();
  if (!text) return text;
  return TOC_HEADING_MAP_DE.get(text) ?? text;
}

function localizeCompendiumLabel(value) {
  const text = String(value ?? "").trim();
  if (!text) return text;
  return COMPENDIUM_LABEL_MAP_DE.get(text) ?? text;
}

function localizePackFolderTree(folderNode) {
  if (!folderNode || typeof folderNode !== "object") return;

  if (typeof folderNode.name === "string") {
    folderNode.name = localizeCompendiumLabel(folderNode.name);
  }

  for (const child of folderNode.folders ?? []) {
    localizePackFolderTree(child);
  }
}

function localizeDnd5ePackFoldersConfig() {
  const roots = game.system?.packFolders;
  if (!Array.isArray(roots)) return;
  for (const root of roots) localizePackFolderTree(root);
}

function localizeCompendiumSidebarInElement(rootElement) {
  if (!rootElement?.querySelectorAll) return 0;

  const replaceTextNodeValue = value => {
    let output = value;
    for (const [source, target] of COMPENDIUM_LABEL_MAP_DE.entries()) {
      const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      output = output.replace(new RegExp(`(^|\\s)${escaped}(?=\\s|$)`), `$1${target}`);
    }
    return output;
  };

  let changed = 0;
  const selectors = [
    "#compendium .directory .folder .folder-header h3",
    "#compendium .directory .folder .folder-header .folder-name",
    "#compendium .directory .folder .folder-name",
    "#compendium .directory .entry-name",
    "#compendium .package .package-title",
    "#compendium .compendium-name",
    "#compendium .folder .folder-header",
    "#compendium .folder .folder-title"
  ].join(", ");

  for (const node of rootElement.querySelectorAll(selectors)) {
    if (!node) continue;

    for (const child of node.childNodes ?? []) {
      if (child.nodeType !== Node.TEXT_NODE) continue;
      const original = String(child.nodeValue ?? "");
      const replaced = replaceTextNodeValue(original);
      if (replaced === original) continue;
      child.nodeValue = replaced;
      changed += 1;
    }

    const direct = String(node.textContent ?? "").trim();
    if (!direct) continue;
    const localized = localizeCompendiumLabel(direct);
    if (localized !== direct && node.childElementCount === 0) {
      node.textContent = localized;
      changed += 1;
    }
  }

  return changed;
}

async function localizeCompendiumFolderDocuments() {
  if (!game.user?.isGM) return 0;

  const updates = [];
  for (const folder of game.folders ?? []) {
    if (folder.type !== "Compendium") continue;
    const localized = localizeCompendiumLabel(folder.name);
    if (localized === folder.name) continue;
    updates.push({ _id: folder.id, name: localized });
  }

  if (!updates.length) return 0;

  try {
    await Folder.implementation.updateDocuments(updates, { diff: false, render: false });
  } catch (_err) {
    for (const update of updates) {
      const folder = game.folders.get(update._id);
      if (!folder) continue;
      await folder.update({ name: update.name }, { diff: false, render: false });
    }
  }

  ui.compendium?.render(true);
  console.log(`[${MODULE_ID}] Localized compendium folders: ${updates.length}`);
  return updates.length;
}

function patchTableOfContentsCompendiumContext() {
  if (patchTableOfContentsCompendiumContext._installed) return;
  patchTableOfContentsCompendiumContext._installed = true;

  const candidateClasses = new Set();
  for (const packId of ["dnd5e.content24", "dnd5e.rules"]) {
    const appClass = game.packs?.get(packId)?.applicationClass;
    if (appClass) candidateClasses.add(appClass);
  }

  for (const appClass of candidateClasses) {
    const proto = appClass?.prototype;
    if (!proto || proto._deTocHeadingPatchApplied) continue;
    const original = proto._prepareContext;
    if (typeof original !== "function") continue;

    proto._prepareContext = async function patchedPrepareContext(...args) {
      const context = await original.apply(this, args);
      if (!isGermanUi()) return context;

      if (context?.header?.title) context.header.title = localizeTocHeading(context.header.title);
      for (const chapter of context?.chapters ?? []) {
        if (chapter?.name) chapter.name = localizeTocHeading(chapter.name);
        for (const page of chapter?.pages ?? []) {
          if (page?.entry && page?.name) page.name = localizeTocHeading(page.name);
        }
      }
      return context;
    };

    proto._deTocHeadingPatchApplied = true;
  }
}

function installLegacyUuidBridge() {
  if (installLegacyUuidBridge._installed) return;
  installLegacyUuidBridge._installed = true;

  const localizeTree = element => {
    normalizeLegacyUuidsInElement(element);
    localizeReferenceLabelsInElement(element);
    localizeOverviewHeadingsInElement(element);
    localizeCompendiumSidebarInElement(element);
  };

  document.addEventListener(
    "click",
    event => {
      const link = event.target?.closest?.("a.content-link[data-uuid], a.entity-link[data-uuid], [data-uuid]");
      if (!link?.dataset?.uuid) return;
      link.dataset.uuid = remapLegacyUuid(link.dataset.uuid);
    },
    true
  );

  Hooks.on("renderApplication", (_app, html) => {
    const element = html?.[0] ?? html;
    localizeTree(element);

    // Some dnd5e apps update content asynchronously after initial render.
    for (const delay of [50, 250, 1000]) {
      window.setTimeout(() => localizeTree(element), delay);
    }
  });

  // Some dnd5e table-of-contents blocks are rendered asynchronously after the
  // application render hook. Observe added DOM nodes and localize them on arrival.
  if (!installLegacyUuidBridge._observer && document?.body) {
    installLegacyUuidBridge._observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          const owner = mutation.target?.parentElement;
          if (owner) localizeTree(owner);
          continue;
        }

        for (const node of mutation.addedNodes ?? []) {
          if (node instanceof HTMLElement) localizeTree(node);
        }
      }
    });
    installLegacyUuidBridge._observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  localizeTree(document.body);
}

function patchLegacyTooltipRendering() {
  const proto = JournalEntryPage?.prototype;
  if (!proto || proto._deTooltipPatchApplied) return;

  const original = proto.richTooltip;

  proto.richTooltip = async function richTooltipPatched(enrichmentOptions = {}) {
    if (this.pack !== MODULE_PACK_COLLECTION) {
      return original?.call(this, enrichmentOptions);
    }

    if (typeof original === "function") {
      const native = await original.call(this, enrichmentOptions);
      if (native?.content) return native;
    }

    const textEditor = foundry.applications.ux.TextEditor.implementation;
    const enriched = await textEditor.enrichHTML(this.text?.content ?? "", {
      secrets: false,
      relativeTo: this,
      ...enrichmentOptions
    });

    const context = {
      page: this,
      type: game.i18n.localize("DND5E.Skill"),
      content: enriched
    };

    return {
      content: await foundry.applications.handlebars.renderTemplate(
        "systems/dnd5e/templates/journal/page-rule-tooltip.hbs",
        context
      ),
      classes: ["dnd5e-tooltip", "rule-tooltip", "dnd5e2", "themed", "theme-light"]
    };
  };

  proto._deTooltipPatchApplied = true;
}

async function getPack() {
  const pack = game.packs?.get(MODULE_PACK_COLLECTION);
  if (!pack) {
    console.warn(`[${MODULE_ID}] Module compendium pack not found: ${MODULE_PACK_COLLECTION}`);
    return null;
  }
  return pack;
}

async function getTooltipJournal(pack) {
  const index = await pack.getIndex();
  const first = index.contents?.[0] ?? index[0] ?? Array.from(index)[0];
  if (!first?._id) return null;
  return pack.getDocument(first._id);
}

function buildPageBySkill(journal) {
  if (!journal) return null;

  const normalizedSkillByLabel = new Map(
    Object.entries(SKILL_LABELS_DE).map(([skillKey, label]) => [normalizeLabel(label), skillKey])
  );

  const pageBySkill = new Map();
  for (const page of journal.pages) {
    const flagged = page.getFlag?.(MODULE_ID, "skillKey");
    const byName = normalizedSkillByLabel.get(normalizeLabel(page.name));
    const skillKey = flagged || byName;
    if (!skillKey) continue;
    pageBySkill.set(skillKey, page.uuid);
  }

  return pageBySkill;
}

function applySkillReferenceMapping(pageBySkill) {
  if (!pageBySkill?.size) return 0;

  let applied = 0;
  for (const [skillKey, skillConfig] of Object.entries(CONFIG.DND5E?.skills ?? {})) {
    const uuid = pageBySkill.get(skillKey);
    if (!uuid) continue;
    skillConfig.reference = uuid;
    applied += 1;
  }
  return applied;
}

Hooks.once("init", () => {
  if (game.system.id !== "dnd5e") {
    ui.notifications?.error("This module requires the official dnd5e system.");
    return;
  }

  patchLegacyTooltipRendering();
  console.log(`[${MODULE_ID}] Initialized.`);
});

Hooks.on("preCreateItem", (document, createData) => {
  if (!shouldNormalizeMetricImports()) return;

  const source = foundry.utils.deepClone(createData ?? {});
  const changes = normalizeItemCreateData(source);
  if (changes > 0) document.updateSource(source);
});

Hooks.on("preCreateActor", (document, createData) => {
  if (!shouldNormalizeMetricImports()) return;

  const source = foundry.utils.deepClone(createData ?? {});
  const changes = normalizeActorCreateData(source);
  if (changes > 0) document.updateSource(source);
});

Hooks.once("ready", async () => {
  if (game.system.id !== "dnd5e") return;
  if (!isGermanUi()) return;

  localizeDnd5ePackFoldersConfig();
  await localizeCompendiumFolderDocuments();
  patchTableOfContentsCompendiumContext();

  if (isCompendiumTranslationEnabled()) {
    await loadReferenceLabelsFromBabele();
    installLegacyUuidBridge();
  } else {
    console.log(`[${MODULE_ID}] Additional compendium translations are disabled by world setting.`);
  }

  try {
    const pack = await getPack();
    if (!pack) return;

    const journal = await getTooltipJournal(pack);
    const pageBySkill = buildPageBySkill(journal);

    if (!pageBySkill?.size) {
      console.warn(`[${MODULE_ID}] No tooltip pages resolved from module compendium.`);
      return;
    }

    const mapped = applySkillReferenceMapping(pageBySkill);
    const expected = Object.keys(SKILL_LABELS_DE).length;
    console.log(`[${MODULE_ID}] Skill tooltip references mapped: ${mapped}/${expected}`);

    if (mapped < expected) {
      const unresolved = Object.keys(SKILL_LABELS_DE).filter(skillKey => !pageBySkill.has(skillKey));
      console.warn(`[${MODULE_ID}] Unresolved skill tooltip pages: ${unresolved.join(", ")}`);
    }
  } catch (err) {
    console.error(`[${MODULE_ID}] Failed to map DE skill tooltip references from module compendium`, err);
  }
});

Hooks.on("renderCompendiumDirectory", (_app, html) => {
  if (game.system.id !== "dnd5e" || !isGermanUi()) return;
  const element = html?.[0] ?? html;
  localizeCompendiumSidebarInElement(element);
  for (const delay of [50, 250, 1000]) {
    window.setTimeout(() => localizeCompendiumSidebarInElement(element), delay);
  }
});
