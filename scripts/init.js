const MODULE_ID = "foundryvtt-dnd5e55-lang-de";
const MODULE_PACK_NAME = "dnd5e55-de-tooltips";
const MODULE_PACK_COLLECTION = `${MODULE_ID}.${MODULE_PACK_NAME}`;

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
