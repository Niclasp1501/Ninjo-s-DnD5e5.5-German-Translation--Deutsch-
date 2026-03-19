export const CURATED_OVERRIDES_BY_ID = {
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
  },
  phbPrismaticLaye: {
    name: "Prismatische Schichten",
    tableResults: {
      t0CrtbVhYtW3a7Lt: {
        name: "Rot",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 fire]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p><p><em>Zusätzliche Effekte:</em> Nichtmagische Fernkampfangriffe können diese Schicht nicht durchdringen; sie wird zerstört, wenn sie mindestens 25 Kälteschaden erleidet.</p>"
      },
      jAjDgUISYpf5GnE5: {
        name: "Orange",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 acid]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p><p><em>Zusätzliche Effekte:</em> Magische Fernkampfangriffe können diese Schicht nicht durchdringen; sie wird durch starken Wind zerstört (wie z. B. durch <em>Gust of Wind</em>).</p>"
      },
      "6ofDupJRAkCwQL5d": {
        name: "Gelb",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 lightning]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p><p><em>Zusätzliche Effekte:</em> Diese Schicht wird zerstört, wenn sie mindestens 60 Wuchtschaden erleidet.</p>"
      },
      uA69bAczU0ATdEt4: {
        name: "Grün",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 poison]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p><p><em>Zusätzliche Effekte:</em> Ein <em>Passwall</em>-Zauber oder ein anderer Zauber derselben oder höheren Stufe, der ein Portal auf einer festen Oberfläche öffnen kann, zerstört diese Schicht.</p>"
      },
      "0UVk1kE4Nz7qMSlj": {
        name: "Blau",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 cold]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p><p><em>Zusätzliche Effekte:</em> Diese Schicht wird zerstört, wenn sie mindestens 25 Feuerschaden erleidet.</p>"
      },
      b1ryx7FwWLGwgQiQ: {
        name: "Indigo",
        description:
          "<p><em>Misslungener Rettungswurf:</em> Das Ziel erhält den Zustand &amp;Reference[Restrained] und führt am Ende jedes seiner Züge einen [[/save con]] Rettungswurf aus. Gelingt ihm der Rettungswurf dreimal, endet der Zustand. Misslingt er dreimal, erhält es den Zustand &amp;Reference[Petrified], bis ein Effekt wie <em>Greater Restoration</em> den Zustand beendet. Erfolge und Misserfolge müssen nicht aufeinanderfolgend sein; zähle beide mit, bis das Ziel drei gleiche Ergebnisse gesammelt hat.</p><p><em>Zusätzliche Effekte:</em> Zauber können nicht durch diese Schicht gewirkt werden; sie wird durch helles Licht zerstört, das durch den Zauber <em>Daylight</em> erzeugt wird.</p>"
      },
      cbfHzGC7oLI48i1F: {
        name: "Violett",
        description:
          "<p><em>Misslungener Rettungswurf:</em> Das Ziel erhält den Zustand &amp;Reference[Blinded] und führt zu Beginn deines nächsten Zuges einen [[/save wis]] Rettungswurf aus. Bei einem erfolgreichen Rettungswurf endet der Zustand. Bei einem misslungenen Rettungswurf endet der Zustand, und die Kreatur teleportiert sich auf eine andere Existenzebene (Wahl des SL).</p><p><em>Zusätzliche Effekte:</em> Diese Schicht wird durch <em>Dispel Magic</em> zerstört.</p>"
      }
    }
  },
  phbPrismaticRays: {
    name: "Prismatische Strahlen",
    tableResults: {
      Yh9bG6idhWWwUmdS: {
        name: "Rot",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 fire]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p>"
      },
      WtYqe4zm1DJyXmI5: {
        name: "Orange",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6]] Säureschaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p>"
      },
      DYdvoPQwjzkQAmOz: {
        name: "Gelb",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 lightning]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p>"
      },
      VJ0WNUsuWtNqlr7M: {
        name: "Grün",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 poison]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p>"
      },
      xZgEE34Oi8lV3z8S: {
        name: "Blau",
        description:
          "<p><em>Misslungener Rettungswurf:</em> [[/damage 12d6 cold]] Schaden.</p><p><em>Erfolgreicher Rettungswurf:</em> Halber Schaden.</p>"
      },
      "9roEeqKHIauLWYsP": {
        name: "Indigo",
        description:
          "<p><em>Misslungener Rettungswurf:</em> Das Ziel erhält den Zustand &amp;Reference[Restrained] und führt am Ende jedes seiner Züge einen [[/save con]] Rettungswurf aus. Gelingt ihm der Rettungswurf dreimal, endet der Zustand. Misslingt er dreimal, erhält es den Zustand &amp;Reference[Petrified], bis ein Effekt wie <em>Greater Restoration</em> den Zustand beendet. Erfolge und Misserfolge müssen nicht aufeinanderfolgend sein; zähle beide mit, bis das Ziel drei gleiche Ergebnisse gesammelt hat.</p>"
      },
      YRy23VFeS34ZU0kN: {
        name: "Violett",
        description:
          "<p><em>Misslungener Rettungswurf:</em> Das Ziel erhält den Zustand &amp;Reference[Blinded] und führt zu Beginn deines nächsten Zuges einen [[/save wis]] Rettungswurf aus. Bei einem erfolgreichen Rettungswurf endet der Zustand. Bei einem misslungenen Rettungswurf endet der Zustand, und die Kreatur teleportiert sich auf eine andere Existenzebene (Wahl des SL).</p>"
      },
      w7WNMlR1c0Bmsj1l: {
        name: "Besonderes",
        description: "<p>Das Ziel wird von zwei Strahlen getroffen. Würfle zweimal und wiederhole jeden Wurf von 8.</p>"
      }
    }
  }
};

// Backward compatibility for older imports.
export const TOOL_OVERRIDES_BY_ID = CURATED_OVERRIDES_BY_ID;
