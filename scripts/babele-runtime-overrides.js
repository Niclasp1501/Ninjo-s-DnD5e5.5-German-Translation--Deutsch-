export const TOOL_OVERRIDES_BY_ID = {
  phbtulForgeryKit: {
    name: "Fälscherausrüstung",
    description:
      '<p class="phb-meta"><strong>Attribut:</strong> Geschicklichkeit</p><p class="phb-meta"><strong>Verwenden:</strong> Imitiere bis zu 10 Wörter in der Handschrift einer anderen Person (SG 15) oder fälsche ein Wachssiegel (SG 20)</p>',
    activities: {
      "Mimic Handwriting": "Handschrift imitieren",
      "Duplicate Wax Seal": "Wachssiegel fälschen"
    }
  },
  phbtulThievesToo: {
    name: "Diebeswerkzeug",
    description:
      '<p class="phb-meta"><strong>Attribut:</strong> Geschicklichkeit</p><p class="phb-meta"><strong>Verwenden:</strong> Knacke ein Schloss (SG 15) oder entschärfe eine Falle (SG 15)</p>',
    activities: {
      "Pick a Lock/Disarm a Trap": "Schloss knacken/Falle entschärfen"
    }
  },
  phbtulNavigators: {
    name: "Navigationswerkzeuge",
    description:
      '<p class="phb-meta"><strong>Attribut:</strong> Weisheit</p><p class="phb-meta"><strong>Verwenden:</strong> Bestimme einen Kurs (SG 10) oder ermittle die Position per Sternbeobachtung (SG 15)</p>',
    activities: {
      "Plot a Course": "Kurs festlegen",
      "Determine Position by Stargazing": "Position per Sternbeobachtung bestimmen"
    }
  },
  phbtulPoisonersK: {
    name: "Giftmischerausrüstung",
    description:
      '<p class="phb-meta"><strong>Attribut:</strong> Intelligenz</p><p class="phb-meta"><strong>Verwenden:</strong> Erkenne ein vergiftetes Objekt (SG 10)</p><p class="phb-meta"><strong>Herstellen:</strong> @UUID[Compendium.dnd5e.equipment24.Item.phbagPoisonBasic]{Basisgift}</p>',
    activities: {
      "Detect Poisoned Object": "Vergiftetes Objekt erkennen"
    }
  },
  phbtulHerbalismK: {
    name: "Kräuterkundeausrüstung",
    description:
      '<p class="phb-meta"><strong>Attribut:</strong> Intelligenz</p><p class="phb-meta"><strong>Verwenden:</strong> Bestimme eine Pflanze (SG 10)</p><p class="phb-meta"><strong>Herstellen:</strong> @UUID[Compendium.dnd5e.equipment24.Item.phbagAntitoxin00]{Antitoxin}, @UUID[Compendium.dnd5e.equipment24.Item.phbagCandle00000]{Kerze}, @UUID[Compendium.dnd5e.equipment24.Item.phbagHealersKit0]{Heilerausrüstung}, @UUID[Compendium.dnd5e.equipment24.Item.phbagPotionofHea]{Heiltrank}</p>',
    activities: {
      "Identify Plant": "Pflanze bestimmen"
    }
  }
};