const MODULE_ID = "foundryvtt-dnd5e55-lang-de";
const JOURNAL_FLAG = "skillTooltips";
const JOURNAL_NAME = "DnD5e Skill Tooltips (DE Internal)";

const SKILL_TOOLTIPS_DE = {
  acr: { title: "Akrobatik", body: "Beispiele: Halte in kniffligen Situationen das Gleichgewicht oder fuehre ein akrobatisches Kunststueck aus." },
  ani: { title: "Mit Tieren umgehen", body: "Beispiele: Beruhige ein Tier, fuehre es oder deute sein Verhalten und seine Absichten." },
  arc: { title: "Arkane Kunde", body: "Beispiele: Erinnere dich an Wissen ueber Zauber, magische Traditionen, Ebenen und magische Symbole." },
  ath: { title: "Athletik", body: "Beispiele: Klettere, springe, schwimme oder stemme schwere Lasten mit roher koerperlicher Kraft." },
  dec: { title: "Taeuschung", body: "Beispiele: Verberge die Wahrheit, gib dich anders aus oder fuehre andere mit Luegen in die Irre." },
  his: { title: "Geschichte", body: "Beispiele: Erinnere dich an historische Ereignisse, Reiche, Kriege, Legenden und alte Kulturen." },
  ins: { title: "Motiv erkennen", body: "Beispiele: Lies Koerpersprache, erkenne Luegen und erfasse Stimmungen oder verborgene Absichten." },
  itm: { title: "Einschuechtern", body: "Beispiele: Setze Drohungen, Praesenz oder Furcht ein, um andere unter Druck zu setzen." },
  inv: { title: "Nachforschungen", body: "Beispiele: Ziehe aus Hinweisen logische Schluesse, finde Spuren und decke Zusammenhaenge auf." },
  med: { title: "Heilkunde", body: "Beispiele: Stabilisiere eine sterbende Kreatur, diagnostiziere Verletzungen oder beurteile Krankheiten." },
  nat: { title: "Naturkunde", body: "Beispiele: Erinnere dich an Wissen ueber Tiere, Pflanzen, Gelaende, Klima und natuerliche Gefahren." },
  per: { title: "Auftreten", body: "Beispiele: Ueberzeuge andere mit Charme, Takt und glaubwuerdigen Argumenten." },
  prc: { title: "Wahrnehmung", body: "Beispiele: Bemerke Geraeusche, Bewegungen, versteckte Details oder andere Sinneseindruecke." },
  prf: { title: "Darbietung", body: "Beispiele: Unterhalte mit Musik, Gesang, Tanz, Schauspiel oder einer anderen Kunstform." },
  rel: { title: "Religion", body: "Beispiele: Erinnere dich an Wissen ueber Goetter, Kulte, Riten, heilige Symbole und Mythen." },
  slt: { title: "Fingerfertigkeit", body: "Beispiele: Fuehre Taschenspielertricks aus, verstecke kleine Gegenstaende oder manipuliere etwas unbemerkt." },
  ste: { title: "Heimlichkeit", body: "Beispiele: Bewege dich leise, verberge dich im Schatten oder entgehe der Aufmerksamkeit anderer." },
  sur: { title: "Ueberlebenskunst", body: "Beispiele: Finde Spuren, orientiere dich in der Wildnis, jage oder sichere Nahrung und Unterkunft." }
};

function isGermanUi() {
  return String(game.i18n?.lang ?? "").toLowerCase().startsWith("de");
}

function buildTooltipHtml(tooltip) {
  return `<p><strong>Beispiele:</strong> ${tooltip.body.replace(/^Beispiele:\s*/i, "")}</p>`;
}

function makePageData(skillKey, tooltip) {
  return {
    name: tooltip.title,
    type: "rule",
    system: {
      type: "skill",
      tooltip: ""
    },
    title: {
      show: true,
      level: 3
    },
    text: {
      format: 1,
      content: buildTooltipHtml(tooltip)
    },
    ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
    flags: {
      [MODULE_ID]: {
        skillKey
      }
    }
  };
}

function isRuleSkillPage(page) {
  return page?.type === "rule" && page?.system?.type === "skill";
}

function getTooltipJournal() {
  return game.journal?.find(j => j.getFlag(MODULE_ID, JOURNAL_FLAG) === true) ?? null;
}

async function ensureTooltipJournal() {
  let journal = getTooltipJournal();
  if (!journal) {
    journal = await JournalEntry.create({
      name: JOURNAL_NAME,
      ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
      flags: {
        [MODULE_ID]: {
          [JOURNAL_FLAG]: true
        }
      },
      pages: Object.entries(SKILL_TOOLTIPS_DE).map(([skillKey, tooltip]) => makePageData(skillKey, tooltip))
    });
    return journal;
  }

  if ((journal.ownership?.default ?? 0) < CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER) {
    await journal.update({ ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER } });
  }

  const pagesBySkill = new Map();
  for (const page of journal.pages) {
    const skillKey = page.getFlag(MODULE_ID, "skillKey");
    if (!skillKey) continue;
    if (!pagesBySkill.has(skillKey)) pagesBySkill.set(skillKey, []);
    pagesBySkill.get(skillKey).push(page);
  }

  const toCreate = [];
  const toUpdate = [];
  const deleteIds = new Set();

  for (const [skillKey, tooltip] of Object.entries(SKILL_TOOLTIPS_DE)) {
    const pages = pagesBySkill.get(skillKey) ?? [];
    const validPage = pages.find(isRuleSkillPage) ?? null;

    if (!validPage) {
      for (const page of pages) deleteIds.add(page.id);
      toCreate.push(makePageData(skillKey, tooltip));
      continue;
    }

    for (const page of pages) {
      if (page.id !== validPage.id) deleteIds.add(page.id);
    }

    toUpdate.push({
      _id: validPage.id,
      name: tooltip.title,
      title: {
        show: true,
        level: 3
      },
      text: {
        format: 1,
        content: buildTooltipHtml(tooltip)
      },
      flags: {
        [MODULE_ID]: {
          skillKey
        }
      }
    });
  }

  if (deleteIds.size) {
    await journal.deleteEmbeddedDocuments("JournalEntryPage", Array.from(deleteIds));
  }
  if (toCreate.length) {
    await journal.createEmbeddedDocuments("JournalEntryPage", toCreate);
  }
  if (toUpdate.length) {
    await journal.updateEmbeddedDocuments("JournalEntryPage", toUpdate);
  }

  return journal;
}

function applySkillReferenceMapping(journal) {
  if (!journal) return 0;

  const pageBySkill = new Map();
  for (const page of journal.pages) {
    const skillKey = page.getFlag(MODULE_ID, "skillKey");
    if (skillKey) pageBySkill.set(skillKey, page.uuid);
  }

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
  console.log(`[${MODULE_ID}] Initialized.`);
});

Hooks.once("ready", async () => {
  if (game.system.id !== "dnd5e") return;
  if (!isGermanUi()) return;

  try {
    let journal = null;
    if (game.user.isGM) {
      journal = await ensureTooltipJournal();
    } else {
      journal = getTooltipJournal();
    }

    if (!journal) {
      console.warn(`[${MODULE_ID}] DE tooltip journal not available yet. Let a GM open the world once.`);
      return;
    }

    const mapped = applySkillReferenceMapping(journal);
    console.log(`[${MODULE_ID}] Skill tooltip references mapped: ${mapped}`);
  } catch (err) {
    console.error(`[${MODULE_ID}] Failed to prepare DE skill tooltip references`, err);
  }
});
