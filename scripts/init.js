const MODULE_ID = "foundryvtt-dnd5e55-lang-de";
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
  ["Disengage", "Rückzug"],
  ["Dodge", "Ausweichen"],
  ["Help", "Helfen"],
  ["Hide", "Verstecken"],
  ["Influence", "Beeinflussen"],
  ["Magic", "Magie"],
  ["Ready", "Bereithalten"],
  ["Search", "Suchen"],
  ["Study", "Studieren"],
  ["Utilize", "Nutzen"]
]);
const BabeleReferenceLabelMap = new Map();

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
  for (const variant of keyVariants(text)) {
    const mapped = BabeleReferenceLabelMap.get(variant);
    if (mapped) return mapped;
  }
  return REFERENCE_LABEL_MAP_DE.get(text) || null;
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
  const root = rootElement?.querySelectorAll ? rootElement : null;
  if (!root) return 0;

  let changed = 0;
  for (const link of root.querySelectorAll("a.content-link[data-uuid], a.entity-link[data-uuid], [data-uuid]")) {
    const original = link.dataset?.uuid;
    if (!original) continue;
    const mapped = remapLegacyUuid(original);
    if (mapped === original) continue;
    link.dataset.uuid = mapped;
    changed += 1;
  }

  return changed;
}

function localizeReferenceLabelsInElement(rootElement) {
  const root = rootElement?.querySelectorAll ? rootElement : null;
  if (!root) return 0;

  let changed = 0;
  const selector = [
    "a.content-link",
    "a.entity-link",
    "a[data-link]",
    "a[data-uuid]",
    "span.reference"
  ].join(", ");

  for (const link of root.querySelectorAll(selector)) {
    const text = String(link.textContent ?? "").trim();
    if (!text) continue;
    const localized = getReferenceLabel(text);
    if (!localized || localized === text) continue;
    link.textContent = localized;
    changed += 1;
  }

  return changed;
}

function localizeOverviewHeadingsInElement(rootElement) {
  const root = rootElement?.querySelectorAll ? rootElement : null;
  if (!root) return 0;
  const headingMap = new Map([
    ["Playing the Game", "Das Spiel spielen"],
    ["Character Classes", "Klassen"],
    ["Equipment", "Ausrüstung"],
    ["Rules Glossary", "Regelglossar"],
    ["Gameplay Toolbox", "Spielhilfen"]
  ]);
  let changed = 0;
  for (const node of root.querySelectorAll("h1, h2, h3, h4, strong, a, span")) {
    const text = String(node.textContent ?? "").trim();
    if (!text) continue;
    const replacement = headingMap.get(text);
    if (!replacement || replacement === text) continue;
    node.textContent = replacement;
    changed += 1;
  }
  return changed;
}

function installLegacyUuidBridge() {
  if (installLegacyUuidBridge._installed) return;
  installLegacyUuidBridge._installed = true;

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
    normalizeLegacyUuidsInElement(element);
    localizeReferenceLabelsInElement(element);
    localizeOverviewHeadingsInElement(element);
  });

  normalizeLegacyUuidsInElement(document.body);
  localizeReferenceLabelsInElement(document.body);
  localizeOverviewHeadingsInElement(document.body);
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

Hooks.once("ready", async () => {
  if (game.system.id !== "dnd5e") return;
  if (!isGermanUi()) return;

  await loadReferenceLabelsFromBabele();
  installLegacyUuidBridge();

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
