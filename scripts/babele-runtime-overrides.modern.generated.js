export const MODERN_OVERRIDES_BY_ID = {
  "phbagAcid0000000": {
    "name": "Säure",
    "description": "<p>Wenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen eines Fläschchens Säure ersetzen. Wähle eine Kreatur oder ein Objekt, das du innerhalb von 6 Metern von dir sehen kannst. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und dein Übungsbonus) bestehen oder erleidet 2W6 Säureschaden.</p>",
    "activities": {
      "Throw Acid": "Säure werfen"
    }
  },
  "dmgBoatUtility00": {
    "name": "Faltboot aktivieren",
    "description": "<p><strong>Erstes Befehlswort.</strong> Die Kiste entfaltet sich zu einem @UUID[Compendium.dnd5e.actors24.Actor.phbmobRowboat000]{Ruderboot}.</p><p><strong>Zweites Befehlswort.</strong> Die Kiste entfaltet sich zu einem @UUID[Compendium.dnd5e.actors24.Actor.phbmobKeelboat00]{Kielboot}.</p><p><strong>Drittes Befehlswort.</strong> Das <em>Faltboot</em> faltet sich wieder zu einer Kiste zusammen, wenn keine Kreaturen an Bord sind. Alle Objekte im Gefäß, die nicht in die Kiste passen, bleiben außerhalb der Kiste, wenn sie sich zusammenfaltet. Alle Objekte im Gefäß, die in die Kiste passen, tun dies.</p><p>Wenn die Kiste zu einem Gefäß wird, entspricht ihr Gewicht dem eines normalen Gefäßes ihrer Größe, und alles, was in der Kiste gelagert war, bleibt im Boot.</p><p>Statistiken für das Ruderboot und Kielboot erscheinen in @UUID[Compendium.dnd5e.content24.JournalEntry.phbEquipment0000]{Ausrüstung}. Wenn eines der Gefäße auf 0 Trefferpunkte reduziert wird, ist das <em>Faltboot</em> zerstört.</p>",
    "activities": {
      "1st and 2nd Command": "1. und 2. Befehl",
      "3rd Command": "3. Befehl"
    }
  },
  "dmgAdamantineArm": {
    "name": "Adamantinharnisch",
    "description": "<p><em>Rüstung (jede mittelschwere oder schwere, außer Lederharnisch), Ungewöhnlich</em></p><p>Dieser Harnisch ist mit Adamantin verstärkt, einer der härtesten Substanzen, die es gibt. Während du ihn trägst, wird jeder &amp;Reference[CriticalHits]{Kritische Treffer} gegen dich zu einem normalen Treffer.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Adamantine Armor": "Adamantinharnisch"
    }
  },
  "dmgAirRingOfElem": {
    "name": "Ring der Elementarbefehlsgewalt (Luft)",
    "description": "<p>Ring, Legendär (Benötigt Einstimmung)</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> ist mit einer der vier Elementarebenen verbunden. Der Spielleiter wählt die verbundene Ebene oder bestimmt sie zufällig. Zum Beispiel ist ein <em>Ring der Elementarbefehlsgewalt</em> (Luft) mit der Elementarebene der Luft verbunden.</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> hat die folgenden zwei Eigenschaften:</p><p><strong>Elementarer Fluch.</strong> Während du den Ring trägst, hast du Vorteil auf Angriffswürfe gegen Elementare und sie haben Nachteil auf Angriffswürfe gegen dich.</p><p><strong>Elementarer Zwang.</strong> Während du den Ring trägst, kannst du eine Magie-Aktion ausführen, um zu versuchen, ein Elementar, das du innerhalb von 18 Metern von dir siehst, zu zwingen. Das Elementar macht einen SG 18 Weisheitsrettungswurf. Bei einem misslungenen Rettungswurf hat das Elementar den Zustand &amp;Reference[Charmed apply=false] bis zum Beginn deines nächsten Zuges, und du bestimmst, was es mit seiner Bewegung und Aktion in seinem nächsten Zug tut.</p><p><em><strong>Elementarer Fokus.</strong></em> Während du den Ring trägst, profitierst du von zusätzlichen Eigenschaften, die der verbundenen Elementarebene des Rings entsprechen:</p><p><strong>Luft.</strong> Du sprichst Auran, du hast Resistenz gegen Blitzschaden und du hast eine Flugbewegungsrate gleich deiner Bewegungsrate und kannst schweben.</p><p><em><strong>Zauberwirken.</strong></em> Der Ring hat 5 Ladungen und erhält täglich bei Sonnenaufgang 1W4 + 1 verbrauchte Ladungen zurück. Während du den Ring trägst, kannst du einen Zauber von ihm wirken. Wähle den Zauber aus der Liste der verfügbaren Zauber basierend auf der Elementarebene, mit der der Ring verbunden ist, wie in der folgenden Tabelle gezeigt. Die Tabelle gibt an, wie viele Ladungen du ausgeben musst, um den Zauber zu wirken, der einen Rettungswurf-SG von 18 hat.</p><table><thead><tr><th\nstyle=\"min-width:50px\"><p>Ebene</p></th><th><p>Zauber\n(Ladungen)</p></th></tr></thead><tbody><tr><td><p>Luft</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplChainLight]{Kettenblitz} (3 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplFeatherFal]{Federfall} (0 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplGustofWind]{Windstoß} (2 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplWindWall00]{Windwand} (1 Ladung)</p></td></tr></tbody></table>",
    "activities": {
      "Elemental Compulsion": "Elementarer Zwang"
    }
  },
  "phbagAmmunitionV": {
    "name": "Munition (Variiert)",
    "description": "<p>Munition wird von einer Waffe benötigt, die die Eigenschaft Munition besitzt. Die Beschreibung einer Waffe gibt die Art der von der Waffe verwendeten Munition an. Die Munitionstabelle listet die verschiedenen Arten und die Menge auf, die du beim Kauf erhältst. Die Tabelle listet auch den Gegenstand auf, der typischerweise zur Aufbewahrung jeder Art verwendet wird; die Lagerung muss separat gekauft werden.</p><table><caption>Munition</caption><thead><tr><td>Typ</td><td>Menge</td><td>Lagerung</td><td>Gewicht</td><td>Kosten</td></tr></thead><tbody><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbamoArrows0000]{Pfeile}</td><td>20</td><td>@UUID[Compendium.dnd5e.equipment24.Item.phbagQuiver00000]{Köcher}</td><td>0,5 kg</td><td>1\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbamoBolts00000]{Bolzen}</td><td>20</td><td>@UUID[Compendium.dnd5e.equipment24.Item.phbagCaseCrossbo]{Behälter}</td><td>0,75 kg</td><td>1\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbamoBulletsFir]{Kugeln,\nSchusswaffe}</td><td>10</td><td>@UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{Beutel}</td><td>1 kg</td><td>3\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbamoBulletsSli]{Kugeln,\nSchleuder}</td><td>20</td><td>@UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{Beutel}</td><td>0,75 kg</td><td>4\nSM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbamoNeedles000]{Nadeln}</td><td>50</td><td>@UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{Beutel}</td><td>0,5 kg</td><td>1 GM</td></tr></tbody></table>"
  },
  "dmgSlayingAmmuni": {
    "name": "Munition der Tötung",
    "description": "<p>Diese magische Munition ist dazu bestimmt, Kreaturen eines bestimmten Typs zu töten, den der Spielleiter wählt oder zufällig durch Würfeln auf der untenstehenden Tabelle bestimmt. Wenn eine Kreatur dieses Typs Schaden durch die Munition erleidet, macht die Kreatur einen SG 17 Konstitutionsrettungswurf, erleidet bei einem misslungenen Rettungswurf zusätzlichen 6W10 Wuchtschaden oder bei einem gelungenen Rettungswurf die Hälfte dieses zusätzlichen Schadens.</p><p>Nachdem sie einer Kreatur ihren zusätzlichen Schaden zugefügt hat, wird die Munition nichtmagisch.</p><details><summary>Kreaturentyp-Tabelle (zum Ausklappen klicken)</summary><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgSlayingAmmuni\nrollable]</p></details><p>\n@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Ammunition of Slaying": "Munition der Tötung",
      "Slaying Save": "Rettungswurf der Tötung"
    }
  },
  "dmgAmmunition12o": {
    "name": "Munition, +1, +2 oder +3",
    "description": "<p><em>Waffe (jede Munition), Ungewöhnlich (+1), Selten (+2) oder Sehr Selten (+3)</em></p><p>Du hast einen Bonus auf Angriffs- und Schadenswürfe, die mit diesem Stück magischer Munition gemacht werden. Der Bonus wird durch die Seltenheit der Munition bestimmt. Sobald sie ein Ziel trifft, ist die Munition nicht länger magisch.</p><p>Diese Munition wird typischerweise in Mengen von zehn oder zwanzig Stück gefunden oder verkauft. Zehn Stück dieser Munition entsprechen im Wert einem Trank derselben Seltenheit.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Ammunition, +1, +2, or +3": "Munition, +1, +2 oder +3"
    }
  },
  "phbagArcaneFocus": {
    "name": "Arkaner Fokus (Variiert)",
    "description": "<p>Ein Arkaner Fokus nimmt eine der Formen in der Tabelle der Arkanen Fokusse an und ist mit Juwelen besetzt oder geschnitzt, um arkane Magie zu kanalisieren. Ein Zauberer, Hexenmeister oder Magier kann einen solchen Gegenstand als Zauberfokus verwenden.</p><table><caption>Arkane\nFokusse</caption><thead><tr><td>Fokus</td><td>Gewicht</td><td>Kosten</td></tr></thead><tbody><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbafcCrystal000]{Kristall}</td><td>0,5 kg</td><td>10\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbafcOrb0000000]{Kugel}</td><td>1,5 kg</td><td>20\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbafcRod0000000]{Rute}</td><td>1 kg</td><td>10\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbafcStaffalsoa]{Stab}\n(auch ein\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepQuartersta]{Viertelstab})</td><td>2 kg</td><td>5\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbafcWand000000]{Zauberstab}</td><td>0,5 kg</td><td>10 GM</td></tr></tbody></table>"
  },
  "dmgArmorOfResist": {
    "name": "Rüstung der Resistenz",
    "description": "<p><em>Rüstung (jede leichte, mittelschwere oder schwere), Selten (Benötigt Einstimmung)</em></p><p>Du hast Resistenz gegen eine Art von Schaden, während du diese Rüstung trägst. Der Spielleiter wählt die Art oder bestimmt sie zufällig durch Würfeln auf der folgenden Tabelle.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgArmorOfResist\nrollable\ncaption=false]</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Armor of Resistance": "Rüstung der Resistenz"
    }
  },
  "dmgArmor12or3000": {
    "name": "Rüstung, +1, +2 oder +3",
    "description": "<p><em>Rüstung (jede leichte, mittelschwere oder schwere), Selten (+1), Sehr Selten (+2) oder Legendär (+3)</em></p><p>Du hast einen Bonus auf die Rüstungsklasse, während du diese Rüstung trägst. Der Bonus wird durch ihre Seltenheit bestimmt.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Armor, +1, +2, or +3": "Rüstung, +1, +2 oder +3"
    }
  },
  "phbamoArrows0000": {
    "name": "Pfeile",
    "description": "<p><em><strong>Lagerung:</strong>\n@UUID[Compendium.dnd5e.equipment24.Item.phbagQuiver00000]{Köcher}</em></p><p>@UUID[Compendium.dnd5e.equipment24.Item.phbagAmmunitionV]{Munition}\nwird von einer Waffe benötigt, die die Eigenschaft Munition besitzt. Die Beschreibung einer Waffe gibt die Art der von der Waffe verwendeten Munition an. Die Munitionstabelle listet die verschiedenen Arten und die Menge auf, die du beim Kauf erhältst. Die Tabelle listet auch den Gegenstand auf, der typischerweise zur Aufbewahrung jeder Art verwendet wird; die Lagerung muss separat gekauft werden.</p>"
  },
  "dmgAssassinsBloo": {
    "name": "Assassinenblut",
    "description": "<p><em>Eingenommenes Gift</em></p><p>Eine Kreatur, die Assassinenblut ausgesetzt ist, macht einen SG 10 Konstitutionsrettungswurf. Bei einem misslungenen Rettungswurf erleidet die Kreatur 6 (1W12) Giftschaden und hat den Zustand &amp;Reference[Poisoned\napply=false] für 24 Stunden. Bei einem gelungenen Rettungswurf erleidet die Kreatur nur halb so viel Schaden.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "dmgDmtBalance000": {
    "name": "Gleichgewicht",
    "description": "<p>Du kannst einen deiner Attributswerte um 2 erhöhen, bis zu einem Maximum von 22, vorausgesetzt, du verringerst auch einen anderen deiner Attributswerte um 2. Du kannst kein Attribut verringern, das einen Wert von 5 oder niedriger hat. Alternativ kannst du wählen, deine Attributswerte nicht anzupassen, in welchem Fall diese Karte <span class=\"no-break\">keine Wirkung</span> hat.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgBeadOfNourish": {
    "name": "Nährperle",
    "description": "<div><p><em>Wundersamer Gegenstand, Gewöhnlich</em></p><p>Diese geschmacklose, gelatineartige Perle löst sich auf deiner Zunge auf und bietet so viel Nahrung wie 1 Tag @UUID[Compendium.dnd5e.equipment24.Item.phbagRations0000]{Rationen}.</p></div>",
    "activities": {
      "Consume": "Verzehren"
    }
  },
  "dmgBeltOfGiantSt": {
    "name": "Gürtel der Riesenstärke",
    "description": "<p><em>Wundersamer Gegenstand, Seltenheit variiert (Benötigt Einstimmung)</em></p><p>Während du diesen Gürtel trägst, ändert sich deine Stärke zu einem vom Gürtel verliehenen Wert. Die Art des Riesen bestimmt den Wert (siehe die Tabelle unten). Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke ohne den Gürtel gleich oder größer als der Wert des Gürtels ist.</p><table><thead><tr><td>Gürtel</td><td>Stärke</td><td>Seltenheit</td></tr></thead><tbody><tr><td><em>Gürtel\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmghilBeltofGian]{Hügel})</td><td>21</td><td>Selten</td></tr><tr><td><em>Gürtel\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgfroBeltofGian]{Frost} oder\n@UUID[Compendium.dnd5e.equipment24.Item.dmgstoBeltofGian]{Stein})</td><td>23</td><td>Sehr\nSelten</td></tr><tr><td><em>Gürtel der Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgfirBeltofGian]{Feuer})</td><td>25</td><td>Sehr\nSelten</td></tr><tr><td><em>Gürtel der Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgcloBeltofGian]{Wolken})</td><td>27</td><td>Legendär</td></tr><tr><td><em>Gürtel\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgstmBeltofGian]{Sturm})</td><td>29</td><td>Legendär</td></tr></tbody></table>"
  },
  "dmgcloBeltofGian": {
    "name": "Gürtel der Riesenstärke (Wolken)",
    "description": "<div><p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgBeltOfGiantSt]</em></p><p>Während du diesen Gürtel trägst, ändert sich deine Stärke zu 27. Die Art des Riesen bestimmt den Wert. Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke ohne den Gürtel gleich oder größer als 27 ist.</p></div>"
  },
  "dmgfirBeltofGian": {
    "name": "Gürtel der Riesenstärke (Feuer)",
    "description": "<div><p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgBeltOfGiantSt]</em></p><p>Während du diesen Gürtel trägst, ändert sich deine Stärke zu 25. Die Art des Riesen bestimmt den Wert. Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke ohne den Gürtel gleich oder größer als 25 ist.</p></div>"
  },
  "dmgfroBeltofGian": {
    "name": "Gürtel der Riesenstärke (Frost)",
    "description": "<div><p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgBeltOfGiantSt]</em></p><p>Während du diesen Gürtel trägst, ändert sich deine Stärke zu 23. Die Art des Riesen bestimmt den Wert. Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke ohne den Gürtel gleich oder größer als 23 ist.</p></div>"
  },
  "dmghilBeltofGian": {
    "name": "Gürtel der Riesenstärke (Hügel)",
    "description": "<div><p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgBeltOfGiantSt]</em></p><p>Während du diesen Gürtel trägst, ändert sich deine Stärke zu 21. Die Art des Riesen bestimmt den Wert. Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke ohne den Gürtel gleich oder größer als 21 ist.</p></div>"
  },
  "dmgstoBeltofGian": {
    "name": "Gürtel der Riesenstärke (Stein)",
    "description": "<div><p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgBeltOfGiantSt]</em></p><p>Während du diesen Gürtel trägst, ändert sich deine Stärke zu 23. Die Art des Riesen bestimmt den Wert. Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke ohne den Gürtel gleich oder größer als 23 ist.</p></div>"
  },
  "dmgstmBeltofGian": {
    "name": "Gürtel der Riesenstärke (Sturm)",
    "description": "<div><p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgBeltOfGiantSt]</em></p><p>Solange\ndu diesen Gürtel trägst, ändert sich deine Stärke auf 29. Die Art des Riesen\nbestimmt den Wert. Der Gegenstand hat keine Wirkung auf dich, wenn deine Stärke\nohne den Gürtel gleich oder größer als 29 ist.</p></div>"
  },
  "dmgBerserkerAxe0": {
    "name": "Berserkeraxt",
    "description": "<div><p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepBattleaxe0]{Streitaxt},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreataxe00]{Große Axt} oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepHalberd000]{Hellebarde}), Selten\n(Benötigt Einstimmung)</em></p><p>Du erhältst einen Bonus von +1 auf Angriffs- und\nSchadenswürfe, die du mit dieser magischen Waffe machst. Zusätzlich erhöht sich,\nsolange du auf diese Waffe eingestimmt bist, dein maximaler Trefferpunkte um 1 für jede\nStufe, die du erreicht hast.</p><section class=\"secret\"\nid=\"secret-kIoBCQDeN3tTKast\"><p><strong>Fluch.</strong> Diese Waffe ist\nverflucht, und die Einstimmung auf sie überträgt den Fluch auf dich. Solange\ndu verflucht bleibst, bist du nicht bereit, dich von der Waffe zu trennen, und hältst sie\njederzeit in Reichweite. Du hast außerdem Nachteil auf Angriffswürfe mit\nanderen Waffen als dieser.</p><p>Immer wenn eine andere Kreatur dir Schaden zufügt,\nwährend du die Waffe besitzt, musst du einen erfolgreichen [[/save\nability=wis dc=15 format=long]] ablegen oder in Raserei geraten. Dieser Rasereizustand endet,\nwenn du deinen Zug beginnst und keine Kreaturen innerhalb von 18 Metern von dir\nsind, die du sehen oder hören kannst.</p><p>Während du in Raserei bist, betrachtest du die Kreatur,\ndie dir am nächsten ist und die du sehen oder hören kannst, als deinen Feind. Wenn es\nmehrere mögliche Kreaturen gibt, wähle eine zufällig aus. In jedem deiner Züge,\nmusst du dich so nah wie möglich an die Kreatur heranbewegen und die Angriffsaktion ausführen,\nwobei du die Kreatur als Ziel wählst. Wenn du nicht nah genug an die Kreatur herankommst,\num sie mit der Waffe anzugreifen, endet dein Zug, nachdem du deine gesamte\nverfügbare Bewegung aufgebraucht hast. Wenn die Kreatur stirbt oder von dir nicht mehr\ngesehen oder gehört werden kann, wird die nächste Kreatur, die du sehen oder\nhören kannst, dein neues Ziel.</p></section></div><p>\n@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Berserker Axe": "Berserkeraxt"
    }
  },
  "phbamoBolts00000": {
    "name": "Bolzen",
    "description": "<p><em><strong>Lagerung:</strong>\n@UUID[Compendium.dnd5e.equipment24.Item.phbagCaseCrossbo]{Köcher}</em></p><p>@UUID[Compendium.dnd5e.equipment24.Item.phbagAmmunitionV]{Munition}\nwird von einer Waffe benötigt, die die Eigenschaft Munition besitzt. Die\nBeschreibung einer Waffe gibt die Art der von der Waffe verwendeten Munition an. Die\nMunitionstabelle listet die verschiedenen Arten und die Menge auf, die du beim Kauf\nerhältst. Die Tabelle listet auch den Gegenstand auf, der typischerweise zur Lagerung\njeder Art verwendet wird; die Lagerung muss separat gekauft werden.</p>"
  },
  "phbagBottleGlass": {
    "name": "Flasche, Glas"
  },
  "dmgFwpBronzeGrif": {
    "name": "Bronzegreif",
    "description": "<p><em>Siehe\n@UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderbare Figur}</em></p><p>Diese Bronzestatuette stellt einen aufgerichteten Greif dar.\nSie kann für bis zu 6 Stunden zu einem\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmGriffon0000000]{Greif}</strong>\nwerden. Nachdem sie einmal benutzt wurde, kann sie erst nach 5\nTagen wieder benutzt werden.</p><section class=\"secret\"\nid=\"secret-CyXRwZfsh4tOiRUf\"><p><strong>Foundry-Hinweis</strong></p><p>Die\nbegrenzten Verwendungen dieses Gegenstands stellen die 5 Tage dar, die erforderlich sind, bevor die Figur wieder verwendet werden kann.</p></section>"
  },
  "phbamoBulletsFir": {
    "name": "Kugeln, Feuerwaffe",
    "description": "<p><em><strong>Lagerung:</strong>\n@UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{Beutel}</em></p><p>@UUID[Compendium.dnd5e.equipment24.Item.phbagAmmunitionV]{Munition}\nwird von einer Waffe benötigt, die die Eigenschaft Munition besitzt. Die\nBeschreibung einer Waffe gibt die Art der von der Waffe verwendeten Munition an. Die\nMunitionstabelle listet die verschiedenen Arten und die Menge auf, die du beim Kauf\nerhältst. Die Tabelle listet auch den Gegenstand auf, der typischerweise zur Lagerung\njeder Art verwendet wird; die Lagerung muss separat gekauft werden.</p>"
  },
  "phbamoBulletsSli": {
    "name": "Kugeln, Schleuder",
    "description": "<p><em><strong>Lagerung:</strong>\n@UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{Beutel}</em></p><p>@UUID[Compendium.dnd5e.equipment24.Item.phbagAmmunitionV]{Munition}\nwird von einer Waffe benötigt, die die Eigenschaft Munition besitzt. Die\nBeschreibung einer Waffe gibt die Art der von der Waffe verwendeten Munition an. Die\nMunitionstabelle listet die verschiedenen Arten und die Menge auf, die du beim Kauf\nerhältst. Die Tabelle listet auch den Gegenstand auf, der typischerweise zur Lagerung\njeder Art verwendet wird; die Lagerung muss separat gekauft werden.</p>"
  },
  "dmgBurntOthurFum": {
    "name": "Verbrannte Othur-Dämpfe",
    "description": "<p><em>Eingeatmetes Gift</em></p><p>Eine Kreatur, die verbrannten Othur-Dämpfen ausgesetzt ist,\n muss einen erfolgreichen Rettungswurf auf Konstitution SG 13 ablegen oder nimmt 10 (3d6) Giftschaden,\n und sie muss den Rettungswurf zu Beginn jedes ihrer Züge wiederholen. Bei\njedem aufeinanderfolgenden fehlgeschlagenen Rettungswurf nimmt die Kreatur 3 (1d6) Giftschaden.\nNach drei erfolgreichen Rettungswürfen endet das Gift.</p>",
    "activities": {
      "Successive Failed Save Damage": "Schaden bei aufeinanderfolgendem fehlgeschlagenen Rettungswurf",
      "Use Poison": "Gift verwenden"
    }
  },
  "phbagCaseCrossbo": {
    "name": "Köcher, Armbrustbolzen"
  },
  "phbagCaseMaporSc": {
    "name": "Hülle, Karte oder Schriftrolle",
    "description": "<p>Eine Karten- oder Schriftrollenhülle fasst bis zu 10 Blatt Papier oder 5 Blatt\nParchment.</p>"
  },
  "dmgCentralPouch0": {
    "name": "Zentraler Beutel"
  },
  "phbagChain000000": {
    "name": "Kette",
    "description": "<p>Als Aktion 'Nutzen' kannst du eine Kette um eine unwillige Kreatur\ninnerhalb von 1,5 Metern von dir wickeln, die den Zustand &amp;Reference[Gepackt],\n&amp;Reference[Handlungsunfähig] oder &amp;Reference[Fesselnd] hat, wenn\ndu einen erfolgreichen Stärke (Athletik) Wurf SG 13 ablegst. Wenn die Beine\nder Kreatur gefesselt sind, hat die Kreatur den Zustand Fesselnd, bis sie entkommt.\nUm der Kette zu entkommen, muss die Kreatur als Aktion einen erfolgreichen SG 18\nGeschicklichkeit (Akrobatik) Wurf ablegen. Um die Kette zu sprengen, ist als Aktion ein\nerfolgreicher Stärke (Athletik) Wurf SG 20 erforderlich.</p>",
    "activities": {
      "Burst Chain Check": "Kette sprengen (Wurf)",
      "Escape Check": "Entkommen (Wurf)",
      "Wrap Chain Check": "Kette wickeln (Wurf)"
    }
  },
  "dmgClawedGauntle": {
    "name": "Klauenbewehrter Handschuh",
    "description": "<p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgDemonArmor000]</em></p><p>Die\nklauenbewehrten Handschuhe der Rüstung ermöglichen es deinen waffenlosen Angriffen,\n1W8 Hiebschaden anstelle des üblichen Wuchtschadens zu verursachen, und du erhältst einen Bonus von +1 auf\ndie Angriffs- und Schadenswürfe deiner waffenlosen Angriffe.</p>"
  },
  "dmgCloakOfInvisi": {
    "name": "Umhang der Unsichtbarkeit",
    "description": "<div><p><em>Wunderbarer Gegenstand, Legendär (Benötigt\nEinstimmung)</em></p></div><p>Dieser Umhang hat 3 Ladungen und regeneriert 1W3\nverbrauchte Ladungen täglich bei Sonnenaufgang. Während du den Umhang trägst, kannst du eine\nMagie-Aktion ausführen, um die Kapuze über deinen Kopf zu ziehen und 1 Ladung zu verbrauchen, um dir\nden Zustand &amp;Reference[Unsichtbar apply=false] für 1 Stunde zu verleihen.\nDer Effekt endet vorzeitig, wenn du die Kapuze herunterziehst (keine Aktion erforderlich) oder\nden Umhang ablegst.</p>",
    "activities": {
      "Raise Hood": "Kapuze hochziehen"
    }
  },
  "phbagClothesFine": {
    "name": "Kleidung, Edel",
    "description": "<p>Edle Kleidung besteht aus teuren Stoffen und ist mit kunstvoll\ngefertigten Details verziert. Einige Veranstaltungen und Orte lassen nur Personen zu, die diese\nKleidung tragen.</p>"
  },
  "phbagClothesTrav": {
    "name": "Kleidung, Reisende",
    "description": "<p>Reisende Kleidung sind strapazierfähige Kleidungsstücke, die für Reisen in\nverschiedenen Umgebungen konzipiert sind.</p>"
  },
  "dmgCollapsingRoo": {
    "name": "Einstürzendes Dach",
    "description": "<div><p><em>Tödliche Falle (Stufen 1–4)</em></p><p><strong>Auslöser:</strong>\nEine Kreatur überquert einen Stolperdraht</p><p><strong>Dauer:</strong>\nAugenblicklich</p><p>Diese Falle verwendet einen Stolperdraht, um einen instabilen\nDeckenabschnitt zum Einsturz zu bringen. Der Stolperdraht ist 7,5 cm über dem Boden gespannt und verläuft\nzwischen zwei schwachen Stützen, die umkippen, wenn der Stolperdraht gezogen\nwird.</p><p>Die erste Kreatur, die den Stolperdraht überquert, bringt die\nStützen zum Umkippen und den instabilen Deckenabschnitt zum Einsturz. Jede\nKreatur unter dem instabilen Deckenabschnitt muss einen erfolgreichen Rettungswurf auf Geschicklichkeit SG 13\nablegen, nimmt bei einem fehlgeschlagenen Rettungswurf 11 (2W10) Wuchtschaden oder die Hälfte davon bei einem\nerfolgreichen. Schutt vom Einsturz verwandelt den Fallenbereich in &amp;Reference[Schwieriges\nGelände].</p><p><em><strong>Entdecken und Entschärfen.</strong></em> Als Suchaktion\nkann eine Kreatur den Fallenbereich untersuchen und einen [[/check prc\n11]] Wurf ablegen, wobei sie bei einem erfolgreichen Wurf den Stolperdraht und den instabilen Deckenabschnitt\nentdeckt. Einmal entdeckt, kann der Stolperdraht leicht durchgeschnitten oder\numgangen werden (kein Attributswurf erforderlich).</p><p><em><strong>Auf höheren\nStufen.</strong></em> Du kannst die Falle für höhere Stufen skalieren, indem du\nden Schaden und den Rettungswurf-SG erhöhst, wie in der folgenden\nTabelle gezeigt.</p><table><thead><tr><th><p>Stufen</p></th><th><p>Wuchtschaden</p></th><th><p>Rettungswurf-SG</p></th></tr></thead><tbody><tr><td><p>5–10</p></td><td><p>22\n(4W10)</p></td><td><p>15</p></td></tr><tr><td><p>11–16</p></td><td><p>55\n(10W10)</p></td><td><p>17</p></td></tr><tr><td><p>17–20</p></td><td><p>99\n(18W10)</p></td><td><p>19</p></td></tr></tbody></table></div>",
    "activities": {
      "Trigger (1-4)": "Auslöser (1-4)",
      "Trigger (11-16)": "Auslöser (11-16)",
      "Trigger (17-20)": "Auslöser (17-20)",
      "Trigger (5-10)": "Auslöser (5-10)"
    }
  },
  "dmgDmtComet00000": {
    "name": "Komet",
    "description": "<p> Das nächste Mal, wenn du in den Kampf gegen eine oder mehrere feindliche Kreaturen\ntrittst, kannst du eine von ihnen als deinen Feind auswählen, wenn du die Initiative würfelst. Wenn du\ndeinen Feind während dieses Kampfes auf 0 Trefferpunkte reduzierst, hast du Vorteil auf\nRettungswürfe gegen den Tod für 1 Jahr. Wenn jemand anderes deinen gewählten Feind auf\n0 Trefferpunkte reduziert oder du keinen Feind wählst, hat diese Karte keine Wirkung.</p>",
    "activities": {
      "Card Effect: Resolve": "Karteneffekt: Auflösen",
      "Card Effect: Start": "Karteneffekt: Start"
    }
  },
  "phbagCostume0000": {
    "name": "Kostüm",
    "description": "<p>Solange du ein Kostüm trägst, hast du Vorteil auf jeden Attributswurf, den du\nmachst, um die Person oder den Typ von Person zu imitieren, die es darstellt.</p>"
  },
  "oQRUfRQQjsMMXJhD": {
    "name": "Kostüm",
    "description": "<p>Solange du ein Kostüm trägst, hast du Vorteil auf jeden Attributswurf, den du\nmachst, um die Person oder den Typ von Person zu imitieren, die es darstellt.</p>"
  },
  "dmgCarrionCrawle": {
    "name": "Kriecher-Schleim",
    "description": "<p><em>Kontaktgift</em></p><p>Eine Kreatur, die Kriecher-Schleim ausgesetzt ist, muss einen Rettungswurf auf Konstitution SG 13 bestehen oder ist für 1 Minute vom Zustand &amp;Reference[Poisoned apply=false] betroffen. Die Kreatur ist außerdem vom Zustand &amp;Reference[Paralyzed apply=false] betroffen, solange sie auf diese Weise vergiftet ist. Die Kreatur wiederholt den Rettungswurf am Ende jedes ihrer Züge und beendet den Effekt bei Erfolg.</p>",
    "activities": {
      "Use Poison": "Gift anwenden"
    }
  },
  "dmgDancingSword0": {
    "name": "Tanzendes Schwert",
    "description": "<div><p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Großschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepRapier0000]{Rapier},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel} oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepShortsword]{Kurzschwert}),\nSehr Selten (Benötigt Einstimmung)</em></p></div><p>Du kannst eine Bonusaktion\neinsetzen, um diese magische Waffe in die Luft zu werfen. Wenn du dies tust, beginnt die Waffe zu schweben, fliegt bis zu 9 Meter weit und greift eine Kreatur deiner Wahl innerhalb von 1,5 Metern von sich selbst an. Die Waffe verwendet deinen Angriffswurf und addiert deinen Attributsmodifikator zu den Schadenswürfen.</p><p>Während die Waffe schwebt, kannst du\neine Bonusaktion einsetzen, um sie bis zu 9 Meter weit zu einem anderen Punkt\ninnerhalb von 9 Metern von dir fliegen zu lassen. Als Teil derselben Bonusaktion kannst du die\nWaffe eine Kreatur innerhalb von 1,5 Metern von der Waffe angreifen lassen.</p><p>Nachdem die\nschwebende Waffe zum vierten Mal angegriffen hat, fliegt sie zu dir zurück und\nversucht, in deine Hand zurückzukehren. Wenn du keine Hand frei hast, fällt die Waffe\nin deinem Feld zu Boden. Wenn die Waffe keinen freien Weg zu\ndir hat, bewegt sie sich so nah wie möglich an dich heran und fällt dann zu Boden. Sie\nhört auch auf zu schweben, wenn du sie ergreifst oder mehr als 9 Meter von\nihr entfernt bist.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Activate Sword: Dexterity": "Schwert aktivieren: Geschicklichkeit",
      "Activate Sword: Stength": "Schwert aktivieren: Stärke",
      "Dancing Sword": "Tanzendes Schwert"
    }
  },
  "dmgDefender00000": {
    "name": "Verteidiger",
    "description": "<p><em>Waffe (Beliebige Nahkampfwaffe), Legendär (Benötigt\nEinstimmung)</em></p><p>Du erhältst einen Bonus von +3 auf Angriffs- und Schadenswürfe,\ndie du mit dieser magischen Waffe machst.</p><p>Das erste Mal, wenn du in jedem deiner Züge mit der Waffe angreifst, kannst du einen Teil oder den gesamten Bonus der Waffe auf deine Rüstungsklasse übertragen. Zum Beispiel könntest du den Bonus auf deine Angriffs- und Schadenswürfe auf +1 reduzieren und einen Bonus von +2 auf die Rüstungsklasse erhalten. Die angepassten Boni bleiben bis zum Beginn deines nächsten Zuges in Kraft, obwohl du die Waffe halten musst, um einen Bonus auf die RK von\nihr zu erhalten.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Defender": "Verteidiger"
    }
  },
  "phbgstDice000000": {
    "name": "Würfel",
    "description": "<p><strong>Attribut:</strong> Weisheit</p><p\nclass=\"phb-meta\"><strong>Anwenden:</strong> Erkennen, ob jemand schummelt (SG 10), oder das Spiel gewinnen (SG 20)</p>",
    "activities": {
      "Catch Cheating": "Schummeln erkennen",
      "Play to Win": "Auf Sieg spielen"
    }
  },
  "dmgDmtDonjon0000": {
    "name": "Verlies",
    "description": "<p>Du verschwindest und wirst in einem Zustand der Scheintodstarre in\neiner extradimensionalen Sphäre begraben. Alles, was du trägst und bei dir hast,\nverschwindet mit dir, außer Artefakte, die in dem Raum zurückbleiben,\nden du beim Verschwinden eingenommen hast. Du bleibst gefangen, bis du\ngefunden und aus der Sphäre entfernt wirst. Du kannst durch keine Erkenntnismagie\ngeortet werden, aber ein\n<em>@UUID[Compendium.dnd5e.spells24.Item.phbsplWish000000]{Wunsch}</em>\n-Zauber kann den Ort deines Gefängnisses enthüllen. Du ziehst keine weiteren Karten.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgOrbOfDragonki": {
    "name": "Drachenkugel",
    "description": "<p><em>Wundersamer Gegenstand, Artefakt (Benötigt Einstimmung)</em></p><section\nclass=\"secret\" id=\"secret-giR5yoa8kkJFGmuP\"><p>Solange du an eine Kugel\neingestimmt bist, kannst du eine Magie-Aktion einsetzen, um in die Tiefen der Kugel zu blicken. Du musst dann\neinen Rettungswurf auf Charisma SG 15 bestehen. Bei einem erfolgreichen Rettungswurf kontrollierst du die\nKugel, solange du an sie eingestimmt bleibst. Bei einem misslungenen Rettungswurf belegt die Kugel\ndich mit dem Zustand &amp;Reference[Charmed apply=false], solange du an sie eingestimmt\nbleibst.</p><p>Solange du von der Kugel bezaubert bist, kannst du deine Einstimmung auf sie nicht freiwillig beenden,\nund die Kugel wirkt nach Belieben den Zauber\n@UUID[Compendium.dnd5e.spells24.Item.phbsplSuggestion]{Suggestion} auf dich\n(Rettungswurf SG 18), der dich dazu drängt, auf die bösen Ziele hinzuarbeiten, die sie sich wünscht.\nDie Drachenessenz in der Kugel könnte vieles wollen: die Vernichtung\neiner bestimmten Gesellschaft oder Organisation, Freiheit von der Kugel, die Verbreitung\nvon Leid in der Welt, die Förderung der Verehrung Tiamats oder etwas\nanderes, das der SL entscheidet.</p><p><em><strong>Eine Kugel zerstören.</strong></em> Eine\n<em>Drachenkugel</em> hat RK 20 und wird zerstört, wenn sie Schaden durch eine\n<em>+3 Waffe</em> oder einen\n@UUID[Compendium.dnd5e.spells24.Item.phbsplDisintegra]{Desintegration}\n-Zauber erleidet. Nichts anderes kann ihr schaden.</p></section><p>Eine Kugel ist eine geätzte\nKristallkugel mit einem Durchmesser von etwa 25 Zentimetern. Bei Gebrauch wächst sie auf etwa 50\nZentimeter Durchmesser an, und Nebel wirbelt in ihrem\nInneren.</p><p><em><strong>Zauber.</strong></em> Die Kugel hat 7 Ladungen und\nregeneriert täglich bei Sonnenaufgang 1W4 + 3 verbrauchte Ladungen. Wenn du die Kugel kontrollierst,\nkannst du einen der Zauber aus der folgenden Tabelle von ihr wirken. Die Tabelle\ngibt an, wie viele Ladungen du aufwenden musst, um den\nZauber zu wirken.</p><table><thead><tr><th><p>Zauber</p></th><th><p>Ladungskosten</p></th><th></th></tr></thead><tbody><tr><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplCureWounds]{Wunden\nheilen} (Grad 9\nVersion)</p></td><td><p>4</p></td><td></td></tr><tr><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplDaylight00]{Tageslicht}</p></td><td><p>1</p></td><td></td></tr><tr><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplDeathWard0]{Todeswache}</p></td><td><p>2</p></td><td></td></tr><tr><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplDetectMagi]{Magie\nentdecken}</p></td><td><p>0</p></td><td></td></tr><tr><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplScrying000]{Ausspähung}\n(Rettungswurf\nSG 18)</p></td><td><p>3</p></td><td></td></tr></tbody></table><p><em><strong>Drachen\nrufen.</strong></em> Solange du die Kugel kontrollierst, kannst du eine Magie-Aktion\neinsetzen, um die Kugel einen telepathischen Ruf aussenden zu lassen, der sich in alle\nRichtungen über 64 Kilometer erstreckt. Chromatische Drachen in Reichweite fühlen sich gezwungen, zur\nKugel zu kommen, so schnell wie möglich auf dem direktesten Weg. Drachengötter\nwie Tiamat sind von diesem Ruf unberührt. Chromatische Drachen, die zur\nKugel gezogen werden, könnten dir gegenüber &amp;Reference[Hostile apply=false] sein, weil du sie gegen ihren Willen zwingst.\nSobald du diese Eigenschaft genutzt hast, kann sie 1 Stunde lang nicht wieder verwendet werden.</p>",
    "activities": {
      "Attunement Save": "Einstimmungs-Rettungswurf",
      "Call Dragons": "Drachen rufen"
    }
  },
  "dmgDragonSlayer0": {
    "name": "Drachentöter",
    "description": "<p><em>Waffe (Beliebig Einfach oder Kampf), Selten</em></p><p>Du erhältst einen Bonus von +1\nauf Angriffs- und Schadenswürfe, die du mit dieser magischen Waffe machst.</p><p>Die\nWaffe verursacht zusätzlich 3W6 Schaden des Waffentyps, wenn das Ziel ein\nDrache ist.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Dragon Slayer": "Drachentöter"
    }
  },
  "phbgstDragonches": {
    "name": "Drachenschach",
    "description": "<p><strong>Attribut:</strong> Weisheit</p><p\nclass=\"phb-meta\"><strong>Anwenden:</strong> Erkennen, ob jemand schummelt (SG 10), oder das Spiel gewinnen (SG 20)</p>",
    "activities": {
      "Catch Cheating": "Schummeln erkennen",
      "Play to Win": "Auf Sieg spielen"
    }
  },
  "phbagDruidicFocu": {
    "name": "Druidischer Fokus (Variiert)",
    "description": "<p>Ein Druidischer Fokus nimmt eine der Formen in der Tabelle der Druidischen Fokusse an und\nist geschnitzt, mit Band gebunden oder bemalt, um ursprüngliche Magie zu kanalisieren. Ein Druide\noder Waldläufer kann ein solches Objekt als Zauberfokus\nverwenden.</p><table><caption>Druidische\nFokusse</caption><thead><tr><td>Fokus</td><td>Gewicht</td><td>Kosten</td></tr></thead><tbody><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbdfcSprigofmis]{Mistelzweig}</td><td>—</td><td>1\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbdfcWoodenstaf]{Holzstab}\n(auch ein\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepQuartersta]{Viertelstab})</td><td>2\nkg</td><td>5\nGM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbdfcYewwand000]{Eibenstab}</td><td>0,5 kg</td><td>10 GM</td></tr></tbody></table>"
  },
  "dmgEarthRingOfEl": {
    "name": "Erdring der Elementarbefehlsgewalt",
    "description": "<p>Ring, Legendär (Benötigt Einstimmung)</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> ist mit einer der vier Elementarebenen verbunden. Der SL wählt\noder bestimmt zufällig die verbundene Ebene. Zum Beispiel ist ein <em>Ring der\nElementarbefehlsgewalt</em> (Luft) mit der Elementarebene der\nLuft verbunden.</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> hat die folgenden zwei\nEigenschaften:</p><p><strong>Elementarfluch.</strong> Während du den Ring trägst,\nhast du Vorteil auf Angriffswürfe gegen Elementare, und sie haben\nNachteil auf Angriffswürfe gegen dich.</p><p><strong>Elementarzwang.</strong>\nWährend du den Ring trägst, kannst du eine Magie-Aktion einsetzen,\num zu versuchen, ein Elementar, das du innerhalb von 18 Metern von dir siehst, zu zwingen. Das\nElementar macht einen Rettungswurf auf Weisheit SG 18. Bei einem misslungenen Rettungswurf ist das\nElementar bis zum Beginn deines nächsten Zuges vom Zustand &amp;Reference[Charmed apply=false] betroffen,\nund du bestimmst, was es mit seiner Bewegung und Aktion in seinem nächsten Zug tut.</p><p><em><strong>Elementarer Fokus.</strong></em>\nWährend du den Ring trägst, profitierst du von zusätzlichen Eigenschaften,\ndie der verbundenen Elementarebene des Rings\nentsprechen:</p><p><strong>Erde.</strong> Du kennst Terranisch, und du hast\nResistenz gegen Säureschaden. Gelände, das aus Schutt, Felsen oder Erde\nbesteht, ist für dich kein Schwieriges Gelände. Außerdem kannst du dich durch feste\nErde oder Fels bewegen, als wären diese Bereiche Schwieriges Gelände, ohne die\nMaterie zu stören, durch die du gehst. Wenn du deinen Zug in fester Erde oder\nFels beendest, wirst du in den nächsten unbesetzten Raum geschoben, den du zuletzt\nbesetzt hast.</p><p><em><strong>Zauberwirken.</strong></em> Der Ring hat 5\nLadungen und regeneriert täglich bei Sonnenaufgang 1W4 + 1 verbrauchte Ladungen. Während du den\nRing trägst, kannst du einen Zauber von ihm wirken. Wähle den Zauber aus der Liste der\nverfügbaren Zauber basierend auf der Elementarebene, mit der der Ring verbunden ist, wie\nin der folgenden Tabelle gezeigt. Die Tabelle gibt an, wie viele Ladungen du\naufwenden musst, um den Zauber zu wirken, der einen Rettungswurf SG\n18 hat.</p><table><thead><tr><th\nstyle=\"min-width:50px\"><p>Ebene</p></th><th><p>Zauber\n(Ladungen)</p></th></tr></thead><tbody><tr><td><p>Erde</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplEarthquake]{Erdbeben}\n(5 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplStoneShape]{Steingestalt} (2 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplStoneskin0]{Steinhaut} (3\nLadungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplWallofSton]{Steinwand} (3\nLadungen)</p></td></tr></tbody></table>",
    "activities": {
      "Elemental Compulsion": "Elementarzwang"
    }
  },
  "dmgFwpEbonyFlyRa": {
    "name": "Ebenholzfliege",
    "description": "<p><em>Siehe\n@UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderbare Kraftfigur}</em></p><p>Diese Ebenholzstatuette, geschnitzt im Abbild\neiner Bremsfliege, kann für bis zu 12 Stunden zu einer\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.dmgGiantFly00000]{Riesenfliege}</strong> werden und als Reittier geritten werden. Sobald sie\nbenutzt wurde, kann sie erst nach 2 Tagen wieder benutzt werden.</p><section\nclass=\"secret\" id=\"secret-50TFh1zOfnv1SBKO\"><p><strong>Foundry-Hinweis</strong></p><p>Die begrenzten Verwendungen dieses Gegenstands stellen die 2 Tage dar,\ndie vergehen müssen, bevor die Figur wieder verwendet werden kann.</p></section>"
  },
  "dmgElementalGem0": {
    "name": "Elementarjuwel",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Dieser Edelstein enthält einen Funken\nElementarenergie. Wenn du eine Anwenden-Aktion einsetzt, um den Edelstein zu zerbrechen, wird ein\nElementar beschworen, und der Edelstein hört auf, magisch zu sein. Das Elementar\nerscheint in einem unbesetzten Feld so nah wie möglich am zerbrochenen Edelstein,\nversteht deine Sprachen, gehorcht deinen Befehlen und ist sofort nach dir\nan deiner Initiativzählung an der Reihe. Das Elementar verschwindet nach 1 Stunde,\nwenn es stirbt oder wenn du es als Bonusaktion entlässt. Die Art des Edelsteins\nbestimmt das Elementar, wie in der folgenden\nTabelle gezeigt.</p><table><thead><tr><td>Edelstein</td><td>Beschworenes\nElementar</td></tr></thead><tbody><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.dmgBlueElemental]{Blauer\nSaphir}</td><td>@UUID[Compendium.dnd5e.actors24.Actor.mmAirElemental00]{Luftelementar}</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.dmgEmeraldElemen]{Smaragd}</td><td>@UUID[Compendium.dnd5e.actors24.Actor.mmWaterElemental]{Wasserelementar}</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.dmgRedElementalG]{Roter\nKorund}</td><td>@UUID[Compendium.dnd5e.actors24.Actor.mmFireElemental0]{Feuerelementar}</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.dmgYellowElement]{Gelber\nDiamant}</td><td>@UUID[Compendium.dnd5e.actors24.Actor.mmEarthElemental]{Erdelementar}</td></tr></tbody></table>",
    "activities": {
      "Blue Sapphire": "Blauer Saphir",
      "Emerald": "Smaragd",
      "Red Corundum": "Roter Korund",
      "Yellow Diamond": "Gelber Diamant"
    }
  },
  "dmgBlueElemental": {
    "name": "Elementarjuwel (Blauer Saphir)",
    "description": "<p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgElementalGem0]</em></p><p>Dieser\nEdelstein enthält einen Funken Elementarenergie. Wenn du eine Anwenden-Aktion einsetzt, um\nden Edelstein zu zerbrechen, wird ein\n@UUID[Compendium.dnd5e.actors24.Actor.mmAirElemental00]{Luftelementar} beschworen,\nund der Edelstein hört auf, magisch zu sein. Das Elementar erscheint in einem\nunbesetzten Feld so nah wie möglich am zerbrochenen Edelstein, versteht deine\nSprachen, gehorcht deinen Befehlen und ist sofort nach dir\nan deiner Initiativzählung an der Reihe. Das Elementar verschwindet nach 1 Stunde,\nwenn es stirbt oder wenn du es als Bonusaktion entlässt.</p>",
    "activities": {
      "Utilize": "Anwenden"
    }
  },
  "dmgEmeraldElemen": {
    "name": "Elementarjuwel (Smaragd)",
    "description": "<p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgElementalGem0]</em></p><p>Dieser\nEdelstein enthält einen Funken Elementarenergie. Wenn du eine Anwenden-Aktion einsetzt, um\nden Edelstein zu zerbrechen, wird ein\n@UUID[Compendium.dnd5e.actors24.Actor.mmWaterElemental]{Wasserelementar}\nbeschworen, und der Edelstein hört auf, magisch zu sein. Das Elementar erscheint in einem\nunbesetzten Feld so nah wie möglich am zerbrochenen Edelstein, versteht deine\nSprachen, gehorcht deinen Befehlen und ist sofort nach dir\nan deiner Initiativzählung an der Reihe. Das Elementar verschwindet nach 1 Stunde,\nwenn es stirbt oder wenn du es als Bonusaktion entlässt.</p>",
    "activities": {
      "Utilize": "Anwenden"
    }
  },
  "dmgRedElementalG": {
    "name": "Elementarjuwel (Roter Korund)",
    "description": "<p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgElementalGem0]</em></p><p>Dieser\nEdelstein enthält einen Funken Elementarenergie. Wenn du eine Anwenden-Aktion einsetzt, um\nden Edelstein zu zerbrechen, wird ein\n@UUID[Compendium.dnd5e.actors24.Actor.mmFireElemental0]{Feuerelementar} beschworen,\nund der Edelstein hört auf, magisch zu sein. Das Elementar erscheint in einem\nunbesetzten Feld so nah wie möglich am zerbrochenen Edelstein, versteht deine\nSprachen, gehorcht deinen Befehlen und ist sofort nach dir\nan deiner Initiativzählung an der Reihe. Das Elementar verschwindet nach 1 Stunde,\nwenn es stirbt oder wenn du es als Bonusaktion entlässt.</p>",
    "activities": {
      "Utilize": "Anwenden"
    }
  },
  "dmgYellowElement": {
    "name": "Elementarjuwel (Gelber Diamant)",
    "description": "<p><em>Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgElementalGem0]</em></p><p>Dieser\nEdelstein enthält einen Funken Elementarenergie. Wenn du eine Anwenden-Aktion einsetzt, um\nden Edelstein zu zerbrechen, wird ein\n@UUID[Compendium.dnd5e.actors24.Actor.mmEarthElemental]{Erdelementar}\nbeschworen, und der Edelstein hört auf, magisch zu sein. Das Elementar erscheint in einem\nunbesetzten Feld so nah wie möglich am zerbrochenen Edelstein, versteht deine\nSprachen, gehorcht deinen Befehlen und ist sofort nach dir\nan deiner Initiativzählung an der Reihe. Das Elementar verschwindet nach 1 Stunde,\nwenn es stirbt oder wenn du es als Bonusaktion entlässt.</p>",
    "activities": {
      "Utilize": "Anwenden"
    }
  },
  "dmgElixirOfHealt": {
    "name": "Elixier der Gesundheit",
    "description": "<div><p><em>Trank, Selten</em></p></div><p>Wenn du diesen Trank trinkst, wirst du\nvon allen magischen Ansteckungen geheilt. Außerdem enden die folgenden Zustände\nauf dir: &amp;Reference[Blinded apply=false], &amp;Reference[Deafened\napply=false], &amp;Reference[Paralyzed apply=false] und\n&amp;Reference[Poisoned apply=false].</p><p>Die klare, rote Flüssigkeit enthält winzige\nLichtbläschen.</p>",
    "activities": {
      "Utilize": "Anwenden"
    }
  },
  "dmgEnergyBow0000": {
    "name": "Energiebogen",
    "description": "<p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepLongbow000]{Langbogen} oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepShortbow00]{Kurzbogen}), Sehr\nSelten (Benötigt Einstimmung)</em></p><p>Du erhältst einen Bonus von +1 auf Angriffs- und Schadenswürfe,\ndie du mit dieser magischen Waffe machst, die keine Sehne hat. Jedes\nMal, wenn du deinen Arm in einer Schussbewegung zurückziehst, erscheint ein magischer Pfeil aus\ngoldener Energie, eingelegt und schussbereit. Ein von dieser\nWaffe erzeugter Pfeil verursacht bei einem Treffer Energieschaden anstelle von Stichschaden,\nund er verschwindet, nachdem er sein Ziel getroffen oder verfehlt hat. Bis er verschwindet, strahlt der\nPfeil Helles Licht in einem Radius von 6 Metern und Schwaches Licht für\nweitere 6 Meter aus.</p><p>Diese Waffe hat die folgenden zusätzlichen\nEigenschaften.</p><details><summary><strong>Pfeil der\nFesselung.</strong></summary><p>Wann immer du diese Waffe benutzt, um einen\nFernkampfangriff gegen eine Kreatur zu machen, kannst du versuchen, das Ziel\nzu fesseln, anstatt ihm Schaden zuzufügen. Wenn der Pfeil trifft, muss das Ziel\neinen [[/save ability=str dc=15 format=long]] bestehen oder ist für\n1 Minute vom Zustand &amp;Reference[Restrained apply=false] betroffen. Als eine\nAktion kann eine Kreatur, die von einem Pfeil gefesselt ist, einen [[/check ability=str\nskill=ath dc=20 format=long]] machen, um zu versuchen, die Fesselung zu brechen, wodurch der\nEffekt bei einem erfolgreichen Wurf auf sich selbst endet.</p></details><details><summary><strong>Pfeil des\nTransports.</strong></summary><p>Als Magie-Aktion kannst du einen Energiepfeil\nvon dieser Waffe auf ein Ziel abfeuern, das du innerhalb von 18 Metern von dir sehen kannst.\nDas Ziel kann entweder eine willige mittelgroße oder kleinere Kreatur oder ein Objekt\nsein, das nicht getragen wird, vorausgesetzt, das Objekt ist klein genug, um\nin einen 1,5 Meter großen Würfel zu passen. Der Pfeil teleportiert das Ziel zu einem unbesetzten\nFeld, das du innerhalb von 3 Metern von\ndir sehen kannst.</p></details><details><summary><strong>Energieleiter.</strong></summary><p>Als Magie-Aktion kannst du einen Hagel von\nEnergiepfeilen von dieser Waffe auf eine Wand abfeuern, die bis zu 18 Meter von dir entfernt ist.\nDie Pfeile werden zu leuchtenden Sprossen, die aus der Wand ragen und eine\nmagische Leiter von bis zu 18 Metern Länge an der Wand bilden. Diese Leiter hält für 1\nMinute, bevor sie verschwindet.</p></details><p>\n@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Arrow of Restraint": "Pfeil der Fesselung",
      "Arrow of Transport": "Pfeil des Transports",
      "Energy Bow": "Energiebogen",
      "Energy Ladder": "Energieleiter"
    }
  },
  "dmgEssenceOfEthe": {
    "name": "Ätheressenz",
    "description": "<p><em>Inhalationsgift</em></p><p>Eine Kreatur, die Ätheressenz ausgesetzt ist,\nmuss einen Rettungswurf auf Konstitution SG 15 bestehen oder ist für 8 Stunden vom\nZustand &amp;Reference[Poisoned apply=false] betroffen. Die Kreatur\nist außerdem vom Zustand &amp;Reference[Unconscious apply=false] betroffen, solange\nsie auf diese Weise vergiftet ist. Die Kreatur wacht auf, wenn sie Schaden erleidet oder wenn\neine andere Kreatur eine Aktion einsetzt, um sie wachzurütteln.</p>",
    "activities": {
      "Use Poison": "Gift anwenden"
    }
  },
  "dmgDmtEuryale000": {
    "name": "Euryale",
    "description": "<p>Das medusenartige Antlitz der Karte verflucht dich. Du erleidest einen Malus von −2 auf\nRettungswürfe, solange du auf diese Weise verflucht bist. Nur ein Gott oder die Magie der\nSchicksalskarte kann diesen Fluch beenden.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgFallingNet000": {
    "name": "Fallnetz",
    "description": "<div><p><em>Lästiger Falle (Stufen\n1–4)</em></p><p><strong>Auslöser:</strong> Eine Kreatur überquert einen Stolperdraht</p><p><strong>Dauer:</strong> Augenblicklich</p><p>Eine Fallnetz-Falle verwendet einen Stolperdraht, um ein beschwertes, 3 Meter großes Netz freizugeben, das von der Decke hängt. Der Stolperdraht ist 7,5 cm über dem Boden gespannt und erstreckt sich zwischen zwei Säulen oder Bäumen.</p><p>Die erste Kreatur, die den Stolperdraht überquert, lässt das Netz auf sie fallen. Das Ziel muss einen Rettungswurf auf Geschicklichkeit SG 10 bestehen oder den &amp;Reference[Restrained]{Festhalten} Zustand haben, bis es entkommt. Das Ziel ist automatisch erfolgreich, wenn es Riesig oder größer ist. Eine Kreatur kann eine Aktion aufwenden, um eine Fertigkeitsprobe auf Stärke (Athletik) SG 10 abzulegen, wodurch sie sich selbst oder eine andere Kreatur in ihrer Reichweite bei Erfolg aus dem Netz befreit.</p><p><em><strong>Entdecken und Entschärfen.</strong></em> Als Suchaktion kann eine Kreatur den Fallenbereich untersuchen und eine [[/check prc 11]] Probe ablegen, wodurch sie bei Erfolg den Stolperdraht und das hängende @UUID[Compendium.dnd5e.equipment24.Item.phbagNet00000000]{Netz} entdeckt. Einmal entdeckt, kann der Stolperdraht leicht durchgeschnitten oder umgangen werden (keine Fertigkeitsprobe erforderlich).</p><p><em><strong>Das Netz zerstören.</strong></em> Das Netz auf 0 Trefferpunkte zu reduzieren, befreit jede darin gefangene Kreatur (siehe @UUID[Compendium.dnd5e.content24.JournalEntry.phbEquipment0000.JournalEntryPage.xIDcbjgXOndS8zRl]{Ausrüstung} für die Werte des Netzes).</p><p><em><strong>Die Falle stellen.</strong></em> Eine Kreatur, die Diebeswerkzeuge und alle Fallenkomponenten (einschließlich eines Netzes) besitzt, kann versuchen, eine Fallnetz-Falle zu stellen, was ihr mit einer erfolgreichen Fertigkeitsprobe auf Geschicklichkeit (Fingerfertigkeit) SG 13 gelingt. Jeder Versuch, diese Falle zu stellen, dauert 10 Minuten.</p><p><em><strong>Auf höheren Stufen.</strong></em> Du kannst die Falle für höhere Stufen skalieren, indem du das Gewicht des Netzes erhöhst, was den Rettungswurf-SG und den SG der Stärke (Athletik)-Probe wie folgt erhöht: SG 12 auf Stufen 5–10, SG 14 auf Stufen 11–16 oder SG 16 auf Stufen 17–20.</p></div>",
    "activities": {
      "Escape Check (1-4)": "Entkommen (1-4)",
      "Escape Check (11-16)": "Entkommen (11-16)",
      "Escape Check (17-20)": "Entkommen (17-20)",
      "Escape Check (5-10)": "Entkommen (5-10)",
      "Set Trap": "Falle stellen",
      "Trigger (1-4)": "Auslösen (1-4)",
      "Trigger (11-16)": "Auslösen (11-16)",
      "Trigger (17-20)": "Auslösen (17-20)",
      "Trigger (5-10)": "Auslösen (5-10)"
    }
  },
  "dmgDmtFates00000": {
    "name": "Schicksale",
    "description": "<p> Das Gefüge der Realität löst sich auf und spinnt sich neu, wodurch du ein Ereignis vermeiden oder auslöschen kannst, als wäre es nie geschehen. Du kannst die Magie der Karte sofort nach dem Ziehen der Karte oder zu jedem anderen Zeitpunkt vor <span class=\"no-break\">deinem Tod</span> nutzen.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgQuaalsFeather": {
    "name": "Feder-Marke",
    "description": "<p><em>Wundersamer Gegenstand, Seltenheit variiert</em></p><p>Dieser Gegenstand sieht aus wie eine Feder. Es gibt verschiedene Arten von Feder-Marken, jede mit einem anderen <span class=\"no-break\">einmaligen</span> Effekt. Der SL wählt die Art der Marke oder bestimmt sie zufällig, indem er auf der Tabelle der Feder-Marken würfelt. Die Art der Marke bestimmt ihre Seltenheit.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgQuaalsFeather\ncaption=false rollable]</p>"
  },
  "dmgAnchorQuaalsF": {
    "name": "Feder-Marke (Anker)",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich, Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgQuaalsFeather]{Feder-Marke}</em></p><p>Du kannst eine Magie-Aktion aufwenden, um die Marke an ein Boot oder Schiff zu halten. Für die nächsten 24 Stunden kann das Gefährt auf keine Weise bewegt werden. Erneutes Berühren des Gefährts mit der Marke beendet den Effekt. Wenn der Effekt endet, verschwindet die Marke.</p>",
    "activities": {
      "Use": "Benutzen"
    }
  },
  "dmgBirdQuaalsFea": {
    "name": "Feder-Marke (Vogel)",
    "description": "<p><em>Wundersamer Gegenstand, Selten, Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgQuaalsFeather]{Feder-Marke}</em></p><p>Du kannst eine Magie-Aktion aufwenden, um die Marke 1,5 Meter in die Luft zu werfen. Die Marke verschwindet und ein riesiger, vielfarbiger Vogel nimmt ihren Platz ein. Der Vogel hat die Werte eines\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmRoc00000000000]{Roc}</strong>,\nkann aber nicht angreifen. Er gehorcht deinen einfachen Befehlen und kann bis zu 225 kg tragen, während er mit seiner Höchstgeschwindigkeit fliegt (25,5 km pro Stunde für maximal 230 km pro Tag, mit einer 1-stündigen Rast für alle 3 Stunden Flug) oder 450 kg mit halber Geschwindigkeit. Der Vogel verschwindet, nachdem er seine maximale Tagesdistanz geflogen ist oder wenn er auf 0 Trefferpunkte fällt. Du kannst den Vogel als Magie-Aktion entlassen.</p>",
    "activities": {
      "Use": "Benutzen"
    }
  },
  "dmgFanQuaalsFeat": {
    "name": "Feder-Marke (Fächer)",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich, Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgQuaalsFeather]{Feder-Marke}</em></p><p>Wenn du dich auf einem Boot oder Schiff befindest, kannst du eine Magie-Aktion aufwenden, um die Marke bis zu 3 Meter in die Luft zu werfen. Die Marke verschwindet, und ein riesiger, schlagender Fächer nimmt ihren Platz ein. Der Fächer schwebt und erzeugt einen starken Wind. Dieser Wind kann die Segel eines Schiffes füllen und dessen Geschwindigkeit für 8 Stunden um 8 km pro Stunde erhöhen. Du kannst den Fächer als Magie-Aktion entlassen.</p>",
    "activities": {
      "Use": "Benutzen"
    }
  },
  "dmgSwanBoatQuaal": {
    "name": "Feder-Marke (Schwanenboot)",
    "description": "<p><em>Wundersamer Gegenstand, Selten, Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgQuaalsFeather]{Feder-Marke}</em></p><p>Du kannst eine Magie-Aktion aufwenden, um die Marke an ein Gewässer mit mindestens 18 Metern Durchmesser zu halten. Die Marke verschwindet, und ein 15 Meter langes, 6 Meter breites Boot in Form eines Schwans nimmt ihren Platz ein. Das Boot ist selbstfahrend und bewegt sich mit einer Geschwindigkeit von 9,5 km pro Stunde über Wasser. Du kannst eine Magie-Aktion auf dem Boot aufwenden, um es zu befehlen, sich zu bewegen oder sich um bis zu 90 Grad zu drehen. Das Boot bleibt für 24 Stunden und verschwindet dann. Du kannst das Boot als Magie-Aktion entlassen.</p>",
    "activities": {
      "Use": "Benutzen"
    }
  },
  "dmgTreeQuaalsFea": {
    "name": "Feder-Marke (Baum)",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich, Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgQuaalsFeather]{Feder-Marke}</em></p><p>Du musst dich im Freien befinden, um diese Marke zu verwenden. Du kannst eine Magie-Aktion aufwenden, um sie an einen unbesetzten Bereich auf dem Boden zu halten. Die Marke verschwindet, und an ihrer Stelle entsteht ein nichtmagischer Eichenbaum. Der Baum ist 18 Meter hoch und hat einen Stamm mit 1,5 Metern Durchmesser, und seine Äste an der Spitze breiten sich in einem Radius von 6 Metern aus.</p>",
    "activities": {
      "Use": "Benutzen"
    }
  },
  "dmgWhipQuaalsFea": {
    "name": "Feder-Marke (Peitsche)",
    "description": "<p><em>Wundersamer Gegenstand, Selten, Siehe:\n@UUID[Compendium.dnd5e.equipment24.Item.dmgQuaalsFeather]{Feder-Marke}</em></p><p>Du kannst eine Magie-Aktion aufwenden, um die Marke auf einen Punkt innerhalb von 3 Metern von dir zu werfen. Die Marke verschwindet, und eine\n@UUID[Compendium.dnd5e.actors24.Actor.dmgqftFloatingWh]{schwebende Peitsche}\nnimmt ihren Platz ein. Du kannst dann eine Bonusaktion aufwenden, um einen Nahkampf-Zauberangriff gegen eine Kreatur innerhalb von 3 Metern von der Peitsche auszuführen, mit einem Angriffsbonus\nvon +9. Bei einem Treffer erleidet das Ziel 1W6 + 5 Wuchtschaden.</p><p>Als Bonusaktion kannst du die Peitsche anweisen, bis zu 6 Meter weit zu fliegen und den Angriff gegen eine Kreatur innerhalb von 3 Metern von der Peitsche zu wiederholen. Die Peitsche verschwindet nach 1 Stunde, wenn du eine Magie-Aktion aufwendest, um sie zu entlassen, oder wenn du stirbst oder den Zustand Handlungsunfähig hast.</p>",
    "activities": {
      "Use": "Benutzen"
    }
  },
  "dmgFigurineOfWon": {
    "name": "Wunderwirkende Figur",
    "description": "<div><p><em>Wundersamer Gegenstand, Seltenheit variiert</em></p></div><p>Eine <em>Wunderwirkende Figur</em> ist eine Statuette, die klein genug ist, um in eine Tasche zu passen. Wenn du eine Magie-Aktion aufwendest, um die Figur auf einen Punkt auf dem Boden innerhalb von 18 Metern von dir zu werfen, wird die Figur zu einer lebenden Kreatur, wie in der Beschreibung der Figur unten angegeben. Wenn der Bereich, in dem die Kreatur erscheinen würde, von anderen Kreaturen oder Objekten besetzt ist oder wenn nicht genügend Platz für die Kreatur vorhanden ist, wird die Figur nicht zu einer Kreatur.</p><p>Die Kreatur ist dir und deinen Verbündeten gegenüber Freundlich. Sie versteht deine Sprachen, gehorcht deinen Befehlen und ist in der Initiative sofort nach dir an der Reihe. Wenn du keine Befehle gibst, verteidigt sich die Kreatur, unternimmt aber keine weiteren Aktionen.</p><p>Die Kreatur existiert für eine Dauer, die für jede Figur spezifisch ist. Am Ende der Dauer kehrt die Kreatur in ihre Figurenform zurück. Sie kehrt früher in eine Figur zurück, wenn ihre Kreaturenform auf 0 Trefferpunkte fällt oder wenn du eine Magie-Aktion aufwendest, während du die Kreatur berührst, um sie in die Figurenform zurückkehren zu lassen. Wenn die Kreatur wieder zu einer Figur wird, kann ihre Eigenschaft erst wieder verwendet werden, nachdem eine bestimmte Zeit vergangen ist, wie in der Beschreibung der Figur angegeben.</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpBronzeGrif]{Bronzegreif\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpEbonyFlyRa]{Ebenholzfliege\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpGoldenLion]{Goldene\nLöwen\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpIvoryGoats]{Elfenbeinziegen\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpMarbleElep]{Marmorelefant\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpObsidianSt]{Obsidianross (Sehr\nSelten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpOnyxDogRar]{Onyxhund\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpSerpentine]{Schlangenhafte Eule\n(Selten)}</p><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFwpSilverRave]{Silberner\nRabe (Ungewöhnlich)}</p>"
  },
  "dmgFireRingOfEle": {
    "name": "Feuerring der Elementarbefehlsgewalt",
    "description": "<p>Ring, Legendär (Benötigt Einstimmung)</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> ist mit einer der vier Elementarebenen verbunden. Der SL wählt oder bestimmt zufällig die verbundene Ebene. Zum Beispiel ist ein <em>Ring der Elementarbefehlsgewalt</em> (Luft) mit der Elementarebene der Luft verbunden.</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> hat die folgenden zwei Eigenschaften:</p><p><strong>Elementarfluch.</strong> Während du den Ring trägst, hast du Vorteil auf Angriffswürfe gegen Elementare und sie haben Nachteil auf Angriffswürfe gegen dich.</p><p><strong>Elementarer Zwang.</strong> Während du den Ring trägst, kannst du eine Magie-Aktion aufwenden, um zu versuchen, ein Elementarwesen, das du innerhalb von 18 Metern von dir siehst, zu zwingen. Das Elementarwesen macht einen Rettungswurf auf Weisheit SG 18. Bei einem misslungenen Rettungswurf hat das Elementarwesen den &amp;Reference[Charmed apply=false] Zustand bis zum Beginn deines nächsten Zuges, und du bestimmst, was es mit seiner Bewegung und Aktion in seinem nächsten Zug tut.</p><p><em><strong>Elementarer Fokus.</strong></em> Während du den Ring trägst, profitierst du von zusätzlichen Eigenschaften, die der verbundenen Elementarebene des Rings entsprechen:</p><p><strong>Feuer.</strong> Du sprichst Ignan, und du hast Immunität gegen Feuerschaden.</p><p><em><strong>Zauberwirken.</strong></em> Der Ring hat 5 Ladungen und regeneriert täglich bei Sonnenaufgang 1W4 + 1 verbrauchte Ladungen. Während du den Ring trägst, kannst du einen Zauber von ihm wirken. Wähle den Zauber aus der Liste der verfügbaren Zauber basierend auf der Elementarebene, mit der der Ring verbunden ist, wie in der folgenden Tabelle gezeigt. Die Tabelle gibt an, wie viele Ladungen du aufwenden musst, um den Zauber zu wirken, der einen Rettungswurf-SG von 18 hat.</p><table><thead><tr><th\nstyle=\"min-width:50px\"><p>Ebene</p></th><th><p>Zauber\n(Ladungen)</p></th></tr></thead><tbody><tr><td><p>Feuer</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplBurningHan]{Brennende\nHände} (1 Ladung),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplFireball00]{Feuerball} (2\nLadungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplFireStorm0]{Feuersturm} (4 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplWallofFire]{Feuerwand} (3\nLadungen)</p></td></tr></tbody></table>",
    "activities": {
      "Elemental Compulsion": "Elementarer Zwang"
    }
  },
  "dmgFirecastingSt": {
    "name": "Feuerwirkende Statue",
    "description": "<div><p><em>Tödliche Falle (Stufen 1–4)</em></p><p><strong>Auslöser:</strong>\nEine Kreatur betritt eine Druckplatte</p><p><strong>Dauer:</strong>\nAugenblicklich, und die Falle setzt sich zu Beginn des nächsten\nZuges zurück</p><p>Wenn eine Kreatur zum ersten Mal in einem Zug die Druckplatte dieser Falle betritt oder ihren Zug dort beginnt, speit eine nahegelegene Statue einen 4,5 Meter großen Kegel aus magischen Flammen. Die Statue kann wie alles Mögliche aussehen, wie ein Drache oder ein Zauberer. Jede Kreatur im Kegel muss einen Rettungswurf auf Geschicklichkeit SG 15 bestehen, erleidet bei einem misslungenen Rettungswurf 11 (2W10) Feuerschaden oder die Hälfte davon bei einem erfolgreichen.</p><p><em><strong>Entdecken und\nEntschärfen.</strong></em> Ein <em>Magie entdecken</em>-Zauber offenbart eine Aura von Hervorrufungs-Magie um die Statue. Als Suchaktion kann eine Kreatur innerhalb von 1,5 Metern von der Statue diese untersuchen und eine [[/check DC prc 10]] Probe ablegen, wodurch sie bei Erfolg ein winziges Glyphe auf der Statue entdeckt. Sobald das Glyphe gefunden ist, kann ein Charakter eine Studienaktion aufwenden, um es zu untersuchen und eine\n[[/check arc 15]] Probe ablegen, wodurch er bei Erfolg feststellt, dass das Glyphe „Feuer“ bedeutet. Als Aktion kann ein Charakter ein scharfes Werkzeug verwenden, um das Glyphe zu entstellen, was die Falle entschärft.</p><p>Als Suchaktion kann eine Kreatur den Bodenabschnitt, der die Druckplatte bildet, untersuchen und eine\n[[/check prc 15]] Probe ablegen, wodurch sie bei Erfolg die Druckplatte entdeckt. Das Einklemmen eines Eisenstifts oder eines ähnlichen Objekts unter die Druckplatte verhindert, dass die Falle ausgelöst wird.</p><p><em><strong>Auf höheren\nStufen.</strong></em> Du kannst die Falle für höhere Stufen skalieren, indem du den Schaden und den Wirkungsbereich erhöhst, wie in der folgenden Tabelle gezeigt.</p><table><thead><tr><th><p>Stufen</p></th><th><p>Feuerschaden</p></th><th><p>Wirkungsbereich</p></th></tr></thead><tbody><tr><td><p>5–10</p></td><td><p>22\n(4W10)</p></td><td><p>9 Meter\nKegel</p></td></tr><tr><td><p>11–16</p></td><td><p>55\n(10W10)</p></td><td><p>18 Meter\nKegel</p></td></tr><tr><td><p>17–20</p></td><td><p>99\n(18W10)</p></td><td><p>36 Meter Kegel</p></td></tr></tbody></table></div>",
    "activities": {
      "Trigger (1-4)": "Auslösen (1-4)",
      "Trigger (11-16)": "Auslösen (11-16)",
      "Trigger (17-20)": "Auslösen (17-20)",
      "Trigger (5-10)": "Auslösen (5-10)"
    }
  },
  "dmgFlameTongue00": {
    "name": "Flammenzunge",
    "description": "<p><em>Waffe (Jede Nahkampfwaffe), Selten (Benötigt\nEinstimmung)</em></p><p>Während du diese magische Waffe hältst, kannst du eine Bonusaktion aufwenden und ein Befehlswort verwenden, um Flammen den <span\nclass=\"no-break\">schaden</span>verursachenden Teil der Waffe umhüllen zu lassen. Diese Flammen spenden helles Licht in einem Radius von 12 Metern und schwaches Licht für weitere 12 Meter. Solange die Waffe in Flammen steht, verursacht sie bei einem Treffer zusätzlichen 2W6 Feuerschaden. Die Flammen halten an, bis du eine Bonusaktion aufwendest, um den Befehl erneut zu geben, oder bis du die Waffe fallen lässt, verstaust oder einsteckst.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Engulf in Flames": "In Flammen hüllen",
      "Flame Tongue": "Flammenzunge"
    }
  },
  "dmgDmtFlames0000": {
    "name": "Flammen",
    "description": "<p> Ein mächtiger Teufel wird zu deinem Feind. Der Teufel trachtet nach deinem Verderben und quält dich, genießt dein Leiden, bevor er versucht, dich zu töten. Diese Feindschaft währt, bis entweder du oder der Teufel stirbt.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgDmtFool000000": {
    "name": "Narr",
    "description": "<p> Du hast Nachteil auf W20-Proben für die nächsten 72 Stunden. Ziehe eine weitere Karte; dieses Ziehen zählt nicht als eines deiner deklarierten Ziehungen.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgFrostBrand000": {
    "name": "Frostbrand",
    "description": "<p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepGlaive0000]{Glefe},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Großschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepRapier0000]{Rapier},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel}, oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepShortsword]{Kurzschwert}),\nSehr Selten (Benötigt Einstimmung)</em></p><p>Wenn du mit einem Angriffswurf mit dieser magischen Waffe triffst, erleidet das Ziel zusätzlichen 1W6 Kälteschaden. Außerdem hast du, während du die Waffe hältst, Resistenz gegen Feuerschaden.</p><p>Bei eisigen Temperaturen spendet die Waffe helles Licht in einem Radius von 3 Metern und schwaches Licht für weitere 3 Meter.</p><p>Wenn du diese Waffe ziehst, kannst du alle nichtmagischen Flammen innerhalb von 9 Metern von dir löschen. Einmal verwendet, kann diese Eigenschaft für 1 Stunde nicht wieder verwendet werden.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Frost Brand": "Frostbrand"
    }
  },
  "dmgDmtGem0000000": {
    "name": "Edelstein",
    "description": "<p> Fünfundzwanzig Schmuckstücke im Wert von je 2.000 GM oder fünfzig Edelsteine im Wert von je 1.000 GM erscheinen zu deinen Füßen.</p>",
    "activities": {
      "Card Effect: Gems": "Karteneffekt: Edelsteine",
      "Card Effect: Jewelry": "Karteneffekt: Schmuck"
    }
  },
  "dmgGiantSlayer00": {
    "name": "Riesentöter",
    "description": "<p><em>Waffe (Jede Einfache oder Kriegswaffe), Selten</em></p><p>Du erhältst einen Bonus von +1 auf Angriffs- und Schadenswürfe, die mit dieser magischen Waffe gemacht werden.</p><p>Wenn du einen Riesen mit dieser Waffe triffst, erleidet der Riese zusätzlichen 2W6 Schaden des Waffentyps und muss einen Rettungswurf auf Stärke SG 15 bestehen oder den Zustand Liegend haben.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Attack vs Giant": "Angriff gegen Riesen",
      "Giant Slayer": "Riesentöter"
    }
  },
  "dmgGlovesOfThiev": {
    "name": "Handschuhe der Diebeskunst",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Diese Handschuhe sind beim Tragen unmerklich. Während du sie trägst, erhältst du einen Bonus von +5 auf Fertigkeitsproben auf Geschicklichkeit (Fingerfertigkeit).</p><section id=\"secret-MTbVEJqcHy1oERli\"\nclass=\"secret\"><p><strong>Foundry-Hinweis</strong></p><p>Der aktive Effekt <strong>Handschuhe an</strong> automatisiert den +5 Bonus auf deine Fingerfertigkeitsproben.</p></section>"
  },
  "dmgFwpGoldenLion": {
    "name": "Goldene Löwen",
    "description": "<p><em>Siehe\n@UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderwirkende Figur}</em></p><p>Diese goldenen Löwenstatuetten werden immer paarweise erstellt. Du kannst eine Figur oder beide gleichzeitig verwenden. Jede kann für bis zu 1 Stunde zu einem\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmLion0000000000]{Löwen}</strong>\nwerden. Sobald ein Löwe verwendet wurde, kann er erst nach 7 Tagen wieder verwendet werden.</p><section class=\"secret\"\nid=\"secret-e1wLN4czlgS5CpcW\"><p><strong>Foundry-Hinweis</strong></p><p>Jede\n<strong>Löwen benutzen</strong>-Aktivität hat begrenzte Verwendungen, die die 7 Tage darstellen, die erforderlich sind, bevor diese bestimmte gepaarte Figur wieder verwendet werden kann.</p></section>",
    "activities": {
      "Use First Lion": "Ersten Löwen benutzen",
      "Use Second Lion": "Zweiten Löwen benutzen"
    }
  },
  "dmgBagOfTricks00": {
    "name": "Grauer Beutel der Tricks",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Dieser Beutel aus grauem, rostfarbenem oder hellbraunem Stoff erscheint leer. Wenn man jedoch in den Beutel greift, offenbart sich die Anwesenheit eines kleinen, flauschigen Objekts.</p><p>Du kannst eine Magieaktion ausführen, um das flauschige Objekt aus dem Beutel zu ziehen und es bis zu 6 Meter weit zu werfen. Wenn das Objekt landet, verwandelt es sich in eine Kreatur, die du bestimmst, indem du auf der Tabelle würfelst, die der Farbe des Beutels entspricht. Siehe @UUID[Compendium.dnd5e.content24.JournalEntry.mmMonstersAtoZ00]{Monster} für den Werteblock der Kreatur. Die Kreatur verschwindet bei der nächsten Morgendämmerung oder wenn sie auf 0 Trefferpunkte reduziert wird.</p><p>Die Kreatur ist dir und deinen Verbündeten gegenüber Freundlich und handelt sofort nach dir auf deinem Initiativwert. Du kannst eine Bonusaktion ausführen, um zu befehlen, wie sich die Kreatur bewegt und welche Aktion sie in ihrem nächsten Zug ausführt, z. B. einen Feind angreifen. In Ermangelung solcher Befehle handelt die Kreatur auf eine ihrer Natur entsprechende Weise.</p><p>Sobald drei flauschige Objekte aus dem Beutel gezogen wurden, kann der Beutel bis zur nächsten Morgendämmerung nicht wieder verwendet werden.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgGrayBagOfTric rollable]</p></div>",
    "activities": {
      "Pull and Throw": "Ziehen und Werfen"
    }
  },
  "dmgHatOfManySpel": {
    "name": "Hut vieler Zauber",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten (Benötigt Einstimmung durch einen Zauberer)</em></p><p>Dieser spitze Hut hat die folgenden Eigenschaften.</p><p><em><strong>Zauberfokus.</strong></em> Während du den Hut hältst, kannst du ihn als Zauberfokus für deine Zaubererzauber verwenden. Jeder Zauber, den du mit dem Hut wirkst, erhält eine spezielle somatische Komponente: Du musst in den Hut greifen und den Zauber aus ihm „ziehen“.</p><p><em><strong>Unbekannter Zauber.</strong></em> Während du den Hut hältst, kannst du versuchen, einen Zauber des Grades 1 oder höher zu wirken, den du nicht kennst. Der Zauber muss auf der Zauberliste des Zauberers stehen, er muss von einem Grad sein, den du wirken kannst, und er darf keine Materialkomponenten haben, die mehr als 1.000 GM kosten. Sobald du dich für den Zauber entschieden hast, musst du einen Zauberplatz des Zaubergrades verbrauchen. Dann, um zu bestimmen, ob du den Zauber wirkst, mache einen Intelligenz (Arkanum)-Wurf (SG 10 plus Zaubergrad). Bei einem erfolgreichen Wurf wirkst du den Zauber mit seiner normalen Wirkzeit, und du kannst diese Eigenschaft erst wieder verwenden, nachdem du eine Kurze oder Lange Rast beendet hast. Bei einem fehlgeschlagenen Wurf misslingt dir das Wirken des Zaubers und stattdessen tritt ein zufälliger Effekt auf, der durch Würfeln auf der folgenden Tabelle bestimmt wird.</p><p>Jeder Zauber, den du aus dem Hut wirkst, verwendet deinen SG für Zauberrettungswürfe und deinen Zauberangriffsbonus.</p><details><summary>Würfeltabelle</summary><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgHatOfManySpel caption=false rollable]</p></details>",
    "activities": {
      "Unknown Spell Check": "Wurf für unbekannten Zauber"
    }
  },
  "dmgHiddenPit0000": {
    "name": "Versteckte Grube",
    "description": "<div><p><em>Lästigkeitsfalle (Stufen 1–4)</em></p><p><strong>Auslöser:</strong> Eine Kreatur bewegt sich auf den Deckel der Grube</p><p><strong>Dauer:</strong> Augenblicklich</p><p>Diese 3 Meter tiefe Grube hat einen aufklappbaren Deckel, der aus Material besteht, das dem umgebenden Boden gleicht. Wenn eine Kreatur auf den Deckel tritt, schwingt er wie eine Falltür auf, wodurch die Kreatur in die Grube fällt. Der Deckel bleibt danach offen.</p><p>Eine Kreatur, die in die Grube fällt, erleidet 3 (1W6) Wuchtschaden durch den Fall.</p><p><em><strong>Entdecken und Entschärfen.</strong></em> Als Studieraktion kann eine Kreatur den Bodenabschnitt, der den Deckel der Grube bildet, untersuchen und einen [[/check inv 15]]-Wurf machen, wobei sie die Grube bei einem erfolgreichen Wurf entdeckt. Sobald die Grube entdeckt ist, kann ein Eisendorn oder ein ähnlicher Gegenstand zwischen den Deckel der Grube und den umgebenden Boden geklemmt werden, um zu verhindern, dass sich der Deckel öffnet, wodurch er sicher zu überqueren ist. Der Deckel kann auch mit <em>Arkanes Schloss</em> oder ähnlicher Magie geschlossen gehalten werden.</p><p><em><strong>Entkommen.</strong></em> Eine Kreatur benötigt eine Klettergeschwindigkeit, Kletterausrüstung oder Magie wie <em>Spinnenklettern</em>, um die glatten Wände der Grube zu erklimmen. Du kannst die Grube leichter entkommen lassen, indem du Risse in die Wände einfügst, die groß genug sind, um als Hand- und Fußgriffe zu dienen.</p><p><em><strong>Auf höheren Stufen.</strong></em> Du kannst die Falle für höhere Stufen skalieren, indem du die Tiefe und den Schaden der Grube erhöhst, wie in der folgenden Tabelle gezeigt.</p><table><thead><tr><th><p>Stufen</p></th><th><p>Grubentiefe</p></th><th><p>Wuchtschaden</p></th></tr></thead><tbody><tr><td><p>5–10</p></td><td><p>9 Meter</p></td><td><p>10 (3W6)</p></td></tr><tr><td><p>11–16</p></td><td><p>18 Meter</p></td><td><p>21 (6W6)</p></td></tr><tr><td><p>17–20</p></td><td><p>36 Meter</p></td><td><p>42 (12W6)</p></td></tr></tbody></table></div>",
    "activities": {
      "Trigger (1-4)": "Auslöser (1-4)",
      "Trigger (11-16)": "Auslöser (11-16)",
      "Trigger (17-20)": "Auslöser (17-20)",
      "Trigger (5-10)": "Auslöser (5-10)"
    }
  },
  "dmgHolyAvenger00": {
    "name": "Heiliger Rächer",
    "description": "<p><em>Waffe (Einfach oder Kampf), Legendär (Benötigt Einstimmung durch einen Paladin)</em></p><p>Du erhältst einen Bonus von +3 auf Angriffs- und Schadenswürfe, die mit dieser magischen Waffe gemacht werden. Wenn du einen Unhold oder Untoten damit triffst, erleidet diese Kreatur zusätzlich 2W10 gleißenden Schaden.</p><p>Während du die gezogene Waffe hältst, erzeugt sie eine 3 Meter große Emanation, die von dir ausgeht. Du und alle dir freundlich gesinnten Kreaturen in der Emanation haben Vorteil auf Rettungswürfe gegen Zauber und andere magische Effekte. Wenn du 17 oder mehr Stufen in der Paladinklasse hast, erhöht sich die Größe der Emanation auf 9 Meter.</p><p>[[10 + floor(@classes.paladin.levels / 17) * 20]]{Emanationsgröße (Fuß)}</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Holy Avenger": "Heiliger Rächer"
    }
  },
  "phbagHolySymbolV": {
    "name": "Heiliges Symbol (Variiert)",
    "description": "<p>Ein Heiliges Symbol nimmt eine der Formen in der Tabelle der Heiligen Symbole an und ist mit Juwelen besetzt oder bemalt, um göttliche Magie zu kanalisieren. Ein Kleriker oder Paladin kann ein Heiliges Symbol als Zauberfokus verwenden.</p><p>Die Tabelle gibt an, ob ein Heiliges Symbol gehalten, getragen oder auf Stoff (wie einem Wappenrock oder Banner) oder einem Schild getragen werden muss.</p><table><caption>Heilige Symbole</caption><thead><tr><td>Symbol</td><td>Gewicht</td><td>Kosten</td></tr></thead><tbody><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbhsyAmuletworn]{Amulett} (getragen oder gehalten)</td><td>0,5 kg</td><td>5 GM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbhsyEmblemborn]{Emblem} (auf Stoff oder einem Schild getragen)</td><td>—</td><td>5 GM</td></tr><tr><td>@UUID[Compendium.dnd5e.equipment24.Item.phbhsyReliquaryh]{Reliquiar} (gehalten)</td><td>1 kg</td><td>5 GM</td></tr></tbody></table>"
  },
  "phbagHolyWater00": {
    "name": "Weihwasser",
    "description": "<p>Wenn du die Angriffsaktion ausführst, kannst du einen deiner Angriffe durch das Werfen einer Flasche Weihwasser ersetzen. Ziele eine Kreatur an, die du innerhalb von 6 Metern von dir sehen kannst. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und Übungsbonus) bestehen oder erleidet 2W8 gleißenden Schaden, wenn es ein Unhold oder ein Untoter ist.</p>",
    "activities": {
      "Throw": "Werfen"
    }
  },
  "nshr9PBVyB03T7wB": {
    "name": "Weihwasser",
    "description": "<p>Wenn du die Angriffsaktion ausführst, kannst du einen deiner Angriffe durch das Werfen einer Flasche Weihwasser ersetzen. Ziele eine Kreatur an, die du innerhalb von 6 Metern von dir sehen kannst. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und Übungsbonus) bestehen oder erleidet 2W8 gleißenden Schaden, wenn es ein Unhold oder ein Untoter ist.</p>",
    "activities": {
      "Throw": "Werfen"
    }
  },
  "dmgHornofValhall": {
    "name": "Horn von Valhalla",
    "description": "<p><em>Wundersamer Gegenstand, Selten (Silber oder Messing), Sehr Selten (Bronze) oder Legendär (Eisen)</em></p><p>Du kannst eine Magieaktion ausführen, um dieses Horn zu blasen. Daraufhin erscheinen Kriegergeister aus der Ebene von Ysgard in unbesetzten Bereichen innerhalb von 18 Metern von dir. Jeder Geist verwendet den <strong>Berserker</strong>-Werteblock und kehrt nach 1 Stunde oder wenn er auf 0 Trefferpunkte fällt nach Ysgard zurück. Die Geister sehen aus wie lebende, atmende Krieger und sind immun gegen die Zustände Bezaubert und Verängstigt. Sobald du das Horn benutzt hast, kann es erst nach 7 Tagen wieder verwendet werden.</p><p>Es sind vier Arten von <em>Hörnern von Valhalla</em> bekannt, die jeweils aus einem anderen Metall gefertigt sind. Die Art des Horns bestimmt, wie viele Geister es beschwört, sowie die Anforderung für seine Verwendung. Der Spielleiter wählt die Art des Horns oder bestimmt sie zufällig, indem er auf der folgenden Tabelle würfelt.</p><p>Wenn du das Horn bläst, ohne seine Anforderung zu erfüllen, greifen die beschworenen Geister dich an. Wenn du die Anforderung erfüllst, sind sie dir und deinen Verbündeten gegenüber Freundlich und folgen deinen Befehlen.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgHornOfValhall rollable]</p>",
    "activities": {
      "Summon Warriors": "Krieger beschwören"
    }
  },
  "phbagInk00000000": {
    "name": "Tinte",
    "description": "<p>Tinte wird in einer 28-Gramm-Flasche geliefert, die genug Tinte zum Schreiben von etwa 500 Seiten enthält.</p>"
  },
  "vi0j4PYnO596a2L1": {
    "name": "Tinte",
    "description": "<p>Tinte wird in einer 28-Gramm-Flasche geliefert, die genug Tinte zum Schreiben von etwa 500 Seiten enthält.</p>"
  },
  "UEH4xJlj50S9ztbH": {
    "name": "Tinte",
    "description": "<p>Tinte wird in einer 28-Gramm-Flasche geliefert, die genug Tinte zum Schreiben von etwa 500 Seiten enthält.</p>"
  },
  "dmgIounStone0000": {
    "name": "Ioun-Stein",
    "description": "<p><em>Wundersamer Gegenstand, Seltenheit variiert (Benötigt Einstimmung)</em></p><p>Etwa marmorgroß, sind <em>Ioun-Steine</em> nach Ioun benannt, einem Gott des Wissens und der Prophezeiung, der auf einigen Welten verehrt wird. Es gibt viele Arten von <em>Ioun-Steinen</em>, wobei jede Art eine einzigartige Kombination aus Form und Farbe darstellt.</p><p>Wenn du eine Magieaktion ausführst, um einen <em>Ioun-Stein</em> in die Luft zu werfen, umkreist der Stein deinen Kopf in einem Abstand von 0,3 bis 0,9 Metern und verleiht dir dabei seinen Vorteil. Du kannst bis zu drei <em>Ioun-Steine</em> gleichzeitig um deinen Kopf kreisen lassen.</p><p>Jeder <em>Ioun-Stein</em>, der deinen Kopf umkreist, gilt als ein Gegenstand, den du trägst. Der kreisende Stein vermeidet den Kontakt mit anderen Kreaturen und Objekten, passt seine Umlaufbahn an, um Kollisionen zu vermeiden und vereitelt alle Versuche anderer Kreaturen, ihn anzugreifen oder zu schnappen.</p><p>Als Nutzungsaktion kannst du beliebig viele <em>Ioun-Steine</em>, die deinen Kopf umkreisen, ergreifen und verstauen. Wenn deine Einstimmung auf einen <em>Ioun-Stein</em> endet, während er deinen Kopf umkreist, fällt der Stein, als hättest du ihn fallen gelassen.</p><p>Die Art des Steins bestimmt seine Seltenheit und seine Effekte.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgAbsorptionIou]{Absorption} (Sehr Selten).</strong> Während dieses blasslila Ellipsoid deinen Kopf umkreist, kannst du eine Reaktion ausführen, um einen Zauber des Grades 4 oder niedriger, der von einer Kreatur gewirkt wird, die du sehen kannst, aufzuheben. Ein aufgehobener Zauber hat keine Wirkung, und alle Ressourcen, die zum Wirken verwendet wurden, sind verschwendet. Sobald der Stein 20 Zauberstufen aufgehoben hat, brennt er aus, wird mattgrau und verliert seine Magie.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgAgilityIounSt]{Beweglichkeit} (Sehr Selten).</strong> Deine Geschicklichkeit erhöht sich um 2, bis zu einem Maximum von 20, während diese tiefrote Kugel deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgAwarenessIoun]{Wachsamkeit} (Selten).</strong> Während dieses dunkelblaue Rhomboid deinen Kopf umkreist, hast du Vorteil auf Initiativwürfe und Weisheit (Wahrnehmung)-Würfe.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgFortitudeIoun]{Widerstandsfähigkeit} (Sehr Selten).</strong> Deine Konstitution erhöht sich um 2, bis zu einem Maximum von 20, während dieses pinke Rhomboid deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgGreaterAbsorp]{Größere Absorption} (Legendär).</strong> Während dieses marmorierte lavendel- und grüne Ellipsoid deinen Kopf umkreist, kannst du eine Reaktion ausführen, um einen Zauber des Grades 8 oder niedriger, der von einer Kreatur gewirkt wird, die du sehen kannst, aufzuheben. Ein aufgehobener Zauber hat keine Wirkung, und alle Ressourcen, die zum Wirken verwendet wurden, sind verschwendet. Sobald der Stein 20 Zauberstufen aufgehoben hat, brennt er aus, wird mattgrau und verliert seine Magie.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgInsightIounSt]{Einsicht} (Sehr Selten).</strong> Deine Weisheit erhöht sich um 2, bis zu einem Maximum von 20, während diese glühend blaue Kugel deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgIntellectIoun]{Intellekt} (Sehr Selten).</strong> Deine Intelligenz erhöht sich um 2, bis zu einem Maximum von 20, während diese marmorierte scharlachrote und blaue Kugel deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgLeadershipIou]{Führung} (Sehr Selten).</strong> Dein Charisma erhöht sich um 2, bis zu einem Maximum von 20, während diese marmorierte pinke und grüne Kugel deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgMasteryIounSt]{Meisterschaft} (Legendär).</strong> Dein Übungsbonus erhöht sich um 1, während dieses blassgrüne Prisma deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgProtectionIou]{Schutz} (Selten).</strong> Du erhältst einen Bonus von +1 auf die Rüstungsklasse, während dieses staubrosafarbene Prisma deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgRegnerationIo]{Regeneration} (Legendär).</strong> Du erhältst 15 Trefferpunkte am Ende jeder Stunde zurück, in der diese perlmuttweiße Spindel deinen Kopf umkreist, wenn du mindestens 1 Trefferpunkt hast.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgReserveIounSt]{Reserve} (Selten).</strong> Dieses leuchtend violette Prisma speichert Zauber, die in es gewirkt werden, und hält sie, bis du sie verwendest. Der Stein kann bis zu 4 Zauberstufen gleichzeitig speichern. Wenn er gefunden wird, enthält er 1W4 Stufen gespeicherter Zauber, die vom Spielleiter ausgewählt werden.</p><p>Jede Kreatur kann einen Zauber des Grades 1 bis 4 in den Stein wirken, indem sie ihn berührt, während der Zauber gewirkt wird. Der Zauber hat keine Wirkung, außer dass er im Stein gespeichert wird. Wenn der Stein den Zauber nicht halten kann, wird der Zauber ohne Wirkung verbraucht. Der Grad des Zauberplatzes, der zum Wirken des Zaubers verwendet wurde, bestimmt, wie viel Platz er beansprucht.</p><p>Während dieser Stein deinen Kopf umkreist, kannst du jeden darin gespeicherten Zauber wirken. Der Zauber verwendet den Zauberplatzgrad, den SG für Zauberrettungswürfe, den Zauberangriffsbonus und die Zauberwirkungsfähigkeit des ursprünglichen Wirkers, wird aber ansonsten so behandelt, als hättest du den Zauber gewirkt. Der aus dem Stein gewirkte Zauber ist nicht mehr darin gespeichert, wodurch Platz frei wird.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgStrengthIounS]{Stärke} (Sehr Selten).</strong> Deine Stärke erhöht sich um 2, bis zu einem Maximum von 20, während dieses hellblaue Rhomboid deinen Kopf umkreist.</p><p><strong>@UUID[Compendium.dnd5e.equipment24.Item.dmgSustenanceIou]{Nahrung} (Selten).</strong> Du musst nicht essen oder trinken, während diese klare Spindel deinen Kopf umkreist.</p>"
  },
  "dmgIronBandsOfBi": {
    "name": "Eisenbänder",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Diese rostige Eisenkugel hat einen Durchmesser von 7,5 Zentimetern und wiegt 0,5 kg. Du kannst eine Magieaktion ausführen, um die Kugel auf eine Riesige oder kleinere Kreatur zu werfen, die du innerhalb von 18 Metern von dir sehen kannst. Während die Kugel durch die Luft fliegt, öffnet sie sich zu einem Gewirr von Metallbändern.</p><p>Mache einen Fernangriffswurf mit einem Angriffsbonus, der deinem Geschicklichkeitsmodifikator plus deinem Übungsbonus entspricht. Bei einem Treffer hat das Ziel den &amp;Reference[Restrained apply=false]-Zustand, bis du eine Bonusaktion ausführst, um einen Befehl zu geben, der es freigibt. Dies oder ein Fehlschlag des Angriffs führt dazu, dass sich die Bänder zusammenziehen und wieder zu einer Kugel werden.</p><p>Eine Kreatur, die die Bänder berühren kann, einschließlich der gefesselten, kann eine Aktion ausführen, um einen SG 20 Stärke (Athletik)-Wurf zu machen, um die Eisenbänder zu zerbrechen. Bei einem erfolgreichen Wurf wird der Gegenstand zerstört und die gefesselte Kreatur befreit. Bei einem fehlgeschlagenen Wurf schlagen alle weiteren Versuche dieser Kreatur automatisch fehl, bis 24 Stunden vergangen sind.</p><p>Sobald die Bänder verwendet wurden, können sie erst bei der nächsten Morgendämmerung wieder verwendet werden.</p>",
    "activities": {
      "Break Check": "Bruch-Wurf",
      "Throw Bands": "Bänder werfen"
    }
  },
  "dmgFwpIvoryGoats": {
    "name": "Elfenbeinziegen",
    "description": "<p><em>Siehe @UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderfigur}</em></p><p>Diese Elfenbeinstatuetten von Ziegen werden immer in Dreiersets hergestellt. Jede Ziege sieht einzigartig aus und funktioniert anders als die anderen. Ihre Eigenschaften sind wie folgt:</p><p><strong>Ziege des Schreckens.</strong> Diese Figur kann bis zu 3 Stunden lang zu einer <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmGiantGoat00000]{Riesen-Ziege}</strong> werden. Die Ziege kann nicht angreifen, aber du kannst ihre Hörner (harmlos) entfernen und als Waffen verwenden. Ein Horn wird zu einer <em>+1 Lanze</em>, und das andere wird zu einem <em>+2 Langschwert</em>. Das Entfernen eines Horns erfordert eine Magieaktion, und die Waffen verschwinden und die Hörner kehren zurück, wenn die Ziege wieder ihre Figurenform annimmt. Während du die Ziege reitest, muss jede feindliche Kreatur, die ihren Zug innerhalb einer 9 Meter großen Emanation beginnt, die von der Ziege ausgeht, einen SG 15 Weisheitsrettungswurf bestehen oder hat den Zustand Verängstigt für 1 Minute, bis du die Ziege nicht mehr reitest oder bis die Ziege wieder ihre Figurenform annimmt. Die verängstigte Kreatur wiederholt den Rettungswurf am Ende jedes ihrer Züge und beendet den Effekt bei einem Erfolg für sich selbst. Sobald sie den Rettungswurf erfolgreich bestanden hat, ist eine Kreatur für die nächsten 24 Stunden immun gegen diesen Effekt. Sobald die Figur verwendet wurde, kann sie erst nach 15 Tagen wieder verwendet werden.</p><p><strong>Ziege des Reisens.</strong> Diese Figur kann zu einer Großen Ziege mit denselben Werten wie ein <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmRidingHorse000]{Reitpferd}</strong> werden. Sie hat 24 Ladungen, und jede Stunde oder jeder Teil davon, die sie in Ziegenform verbringt, kostet 1 Ladung. Solange sie Ladungen hat, kannst du sie so oft verwenden, wie du möchtest. Wenn ihr die Ladungen ausgehen, kehrt sie in eine Figur zurück und kann erst nach 7 Tagen wieder verwendet werden, wenn sie alle verbrauchten Ladungen zurückerhält.</p><section class=\"secret\" id=\"secret-Bzl0aaerk0Ql0uOm\"><p><strong>Foundry-Hinweis</strong></p><p>Die Aktivität <strong>Reiseziege zurückverwandeln oder zurückrufen</strong> wird optional bereitgestellt, um die Verfolgung der nicht zusammenhängenden 24 Stunden zu erleichtern, die die Figur in Ziegenform bleiben kann. Beim Zurückverwandeln in eine Figur stellt der Skalierungswert für den Verbrauch die Anzahl der in Ziegenform verbrachten Stunden dar. Beim Zurückrufen der Figur in Ziegenform deaktiviere das Kontrollkästchen „Gegenstandsverwendung verbrauchen?“, wenn du diese Aktivität verwendest.</p></section><p><strong>Ziege der Mühsal.</strong> Diese Figur kann bis zu 3 Stunden lang zu einer <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmGiantGoat00000]{Riesen-Ziege}</strong> werden. Sobald sie verwendet wurde, kann sie erst nach 30 Tagen wieder verwendet werden.</p>",
    "activities": {
      "Goat of Terror": "Ziege des Schreckens",
      "Goat of Travail": "Ziege der Mühsal",
      "Goat of Traveling": "Ziege des Reisens",
      "Revert or Recall Goat of Traveling": "Reiseziege zurückverwandeln oder zurückrufen"
    }
  },
  "dmgDmtJester0000": {
    "name": "Narr",
    "description": "<p> Du hast Vorteil auf W20-Würfe für die nächsten 72 Stunden, oder du kannst zwei zusätzliche Karten über deine deklarierten Züge hinaus ziehen.</p>",
    "activities": {
      "Card Effect: Advantage": "Karteneffekt: Vorteil",
      "Card Effect: Draw Two": "Karteneffekt: Zwei ziehen"
    }
  },
  "dmgDmtKey0000000": {
    "name": "Schlüssel",
    "description": "<p> Eine seltene oder seltenere magische Waffe, mit der du geübt bist, erscheint bei dir. Der Spielleiter wählt die Waffe.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgDmtKnight0000": {
    "name": "Ritter",
    "description": "<p>Du erhältst die Dienste eines <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmKnight00000000]{Ritters}</strong>, der magisch in einem unbesetzten Bereich deiner Wahl innerhalb von 9 Metern von dir erscheint. Der Ritter hat dieselbe Gesinnung wie du und dient dir loyal bis zum Tod, da er glaubt, dass ihr beide vom Schicksal zusammengeführt wurdet. Arbeite mit deinem Spielleiter zusammen, um einen Namen und eine Hintergrundgeschichte für diesen NSC zu erstellen. Der Spielleiter kann einen anderen Werteblock verwenden, um den Ritter darzustellen, <span class=\"no-break\">wie gewünscht</span>.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "phbagLadder00000": {
    "name": "Leiter"
  },
  "phbagLanternBull": {
    "name": "Laterne, Richtstrahl",
    "description": "<p>Eine Richtstrahl-Laterne verbrennt Öl als Brennstoff, um Helles Licht in einem 18 Meter langen Kegel und Dämmriges Licht für weitere 18 Meter zu werfen.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "phbagLanternHood": {
    "name": "Laterne, Verdeckt",
    "description": "<p>Eine Verdeckte Laterne verbrennt Öl als Brennstoff, um Helles Licht in einem Radius von 9 Metern und Dämmriges Licht für weitere 9 Meter zu werfen. Als Bonusaktion kannst du die Haube herunterlassen, wodurch das Licht auf Dämmriges Licht in einem Radius von 1,5 Metern reduziert wird, oder sie wieder anheben.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "dmgLeftPouch0000": {
    "name": "Linke Tasche"
  },
  "dmgLongCompartme": {
    "name": "Langes Fach",
    "description": "<p>Das lange Fach fasst bis zu 6 lange Gegenstände, wie Bögen, Kampfstäbe oder Speere.</p>"
  },
  "dmgLuckBlade0000": {
    "name": "Glücksklinge",
    "description": "<p><em>Waffe (@UUID[Compendium.dnd5e.equipment24.Item.phbwepGlaive0000]{Glefe}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Großschwert}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepRapier0000]{Rapier}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepSickle0000]{Sichel} oder @UUID[Compendium.dnd5e.equipment24.Item.phbwepShortsword]{Kurzschwert}), Legendär (Benötigt Einstimmung)</em></p><p>Du erhältst einen Bonus von +1 auf Angriffs- und Schadenswürfe, die du mit dieser magischen Waffe machst. Solange die Waffe bei dir ist, erhältst du außerdem einen Bonus von +1 auf Rettungswürfe.</p><p><strong>Glück.</strong> Wenn die Waffe bei dir ist, kannst du ihr Glück herbeirufen (keine Aktion erforderlich), um einen misslungenen W20-Wurf zu wiederholen, falls du nicht den Zustand Handlungsunfähig hast. Du musst das zweite Ergebnis verwenden. Nachdem diese Eigenschaft einmal verwendet wurde, kann sie erst wieder nach der nächsten Morgendämmerung eingesetzt werden.</p><p><strong>Wunsch.</strong> Die Waffe hat [[/r 1d3#Initial Charges]] Ladungen. Während du sie hältst, kannst du 1 Ladung verbrauchen und <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplWish000000]{Wunsch}</em> damit wirken. Nachdem diese Eigenschaft einmal verwendet wurde, kann sie erst wieder nach der nächsten Morgendämmerung eingesetzt werden. Die Waffe verliert diese Eigenschaft, wenn sie keine Ladungen mehr hat.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Luck": "Glück",
      "Luck Blade": "Glücksklinge"
    }
  },
  "dmgMalice0000000": {
    "name": "Bosheit",
    "description": "<p><em>Eingeatmetes Gift</em></p><p>Eine Kreatur, die der Bosheit ausgesetzt ist, muss einen Rettungswurf auf Konstitution SG 15 bestehen oder hat den Zustand &amp;Reference[Poisoned apply=false] für 1 Stunde. Die Kreatur hat außerdem den Zustand &amp;Reference[Blinded apply=false], solange sie auf diese Weise vergiftet ist.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "phbagMap00000000": {
    "name": "Karte",
    "description": "<p>Wenn du eine genaue Karte konsultierst, erhältst du einen Bonus von +5 auf Weisheit (Überleben)-Würfe, die du machst, um dich an dem darauf dargestellten Ort zurechtzufinden.</p>"
  },
  "dmgFwpMarbleElep": {
    "name": "Marmorelefant",
    "description": "<p><em>Siehe @UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderbare Figur}</em></p><p>Diese Marmorstatuette gleicht einem trompetenden Elefanten. Sie kann für bis zu 24 Stunden zu einem <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmElephant000000]{Elefanten}</strong> werden. Nachdem sie einmal verwendet wurde, kann sie erst nach 7 Tagen wieder eingesetzt werden.</p><section class=\"secret\" id=\"secret-RHHx3aKcpKsHN2aK\"><p><strong>Foundry Note</strong></p><p>This item's limited uses represent the 7 days required before the figurine can be used again.</p></section>"
  },
  "dmgMidnightTears": {
    "name": "Mitternachtstränen",
    "description": "<p><em>Eingenommenes Gift</em></p><p>Eine Kreatur, die Mitternachtstränen einnimmt, erleidet keine Wirkung bis zum Schlag Mitternacht. Jeder Effekt, der den Zustand &amp;Reference[Poisoned apply=false] beendet, neutralisiert dieses Gift. Wenn das Gift vor Mitternacht nicht neutralisiert wurde, macht die Kreatur einen Rettungswurf auf Konstitution SG 17 und erleidet bei einem misslungenen Rettungswurf 31 (9W6) Giftschaden oder halb so viel Schaden bei einem erfolgreichen.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "dmgMidsizeCompar": {
    "name": "Mittelgroßes Fach"
  },
  "phbagMirror00000": {
    "name": "Spiegel",
    "description": "<p>Ein handgehaltener Stahlspiegel ist nützlich für die persönliche Kosmetik, aber auch, um um Ecken zu spähen und Licht als Signal zu reflektieren.</p>"
  },
  "SoNpADeVEx2DDZgB": {
    "name": "Spiegel",
    "description": "<p>Ein handgehaltener Stahlspiegel ist nützlich für die persönliche Kosmetik, aber auch, um um Ecken zu spähen und Licht als Signal zu reflektieren.</p>"
  },
  "dmgMithralArmor0": {
    "name": "Mithrilrüstung",
    "description": "<p><em>Rüstung (Jede mittlere oder schwere, außer Lederharnisch), Ungewöhnlich</em></p><p>Mithril ist ein leichtes, flexibles Metall. Rüstungen aus diesem Material können unter normaler Kleidung getragen werden. Wenn die Rüstung normalerweise einen Nachteil auf Geschicklichkeit (Heimlichkeit)-Würfe auferlegt oder eine Stärkeanforderung hat, tut die Mithril-Version der Rüstung dies nicht.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Mithral Armor": "Mithrilrüstung"
    }
  },
  "dmgDmtMoon000000": {
    "name": "Mond",
    "description": "<p>Du erhältst die Fähigkeit, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplWish000000]{Wunsch}</em> 1W3-mal zu wirken.</p>",
    "activities": {
      "Card Effect: Wish": "Karteneffekt: Wunsch"
    }
  },
  "phbwepMusket0000": {
    "name": "Muskete"
  },
  "dmgDeckOfManyThi": {
    "name": "Geheimnisvolles Deck",
    "description": "<div><p><em>Wunderbarer Gegenstand, Legendär</em></p></div><p>Dieses Deck, das normalerweise in einer Schachtel oder einem Beutel gefunden wird, enthält eine Anzahl von Karten aus Elfenbein oder Pergament. Die meisten (75 Prozent) dieser Decks haben dreizehn Karten, aber einige haben zweiundzwanzig. Verwende die entsprechende Spalte der Tabelle des Geheimnisvollen Decks, wenn du zufällig gezogene Karten aus dem Deck bestimmst.</p><p>Bevor du eine Karte ziehst, musst du angeben, wie viele Karten du ziehen möchtest, und sie dann zufällig ziehen. Alle Karten, die über diese Anzahl hinaus gezogen werden, haben keine Wirkung. Andernfalls, sobald du eine Karte aus dem Deck ziehst, tritt ihre Magie in Kraft. Du musst jede Karte spätestens 1 Stunde nach dem vorherigen Zug ziehen. Wenn du die gewählte Anzahl nicht ziehst, fliegen die verbleibenden Karten von selbst aus dem Deck und treten alle gleichzeitig in Kraft.</p><p>Sobald eine Karte gezogen wird, verschwindet sie. Sofern es sich nicht um die Karte Narr oder Harlekin handelt, erscheint die Karte wieder im Deck, wodurch es möglich ist, dieselbe Karte zweimal zu ziehen. (Sobald der Narr oder Harlekin das Deck verlassen hat, würfle erneut auf der Tabelle, wenn diese Karte wieder auftaucht.)</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmg13CardDeckOfM rollable]</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmg22CardDeckOfM rollable]</p><section class=\"secret\" id=\"secret-89gUJH8GuylznwxV\"><p><strong>Foundry Note</strong></p><p>Upon discovery, the owner (or GM) should use the <strong>Check Deck Size</strong> activity in order to determine the number of cards in the deck. The activity will set this item's remaining uses (out of 22) according to the number of cards in this deck. Alternatively, the GM may set this item's <em>max uses</em> based on the deck size.</p><p>In either case, both the <strong>Check Deck Size</strong> activity and the Embedded RollTable link corresponding to the unused deck size can be deleted after this determination has been made.</p></section>",
    "activities": {
      "Check Deck Size": "Deckgröße prüfen",
      "Draw Cards": "Karten ziehen"
    }
  },
  "phbamoNeedles000": {
    "name": "Nadeln",
    "description": "<p><em><strong>Lagerung:</strong> @UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{Beutel}</em></p><p>@UUID[Compendium.dnd5e.equipment24.Item.phbagAmmunitionV]{Munition} wird von einer Waffe benötigt, die die Eigenschaft Munition hat. Die Beschreibung einer Waffe gibt den Munitionstyp an, der von der Waffe verwendet wird. Die Munitionstabelle listet die verschiedenen Typen und die Menge auf, die du beim Kauf erhältst. Die Tabelle listet auch den Gegenstand auf, der typischerweise zur Lagerung jedes Typs verwendet wird; die Lagerung muss separat gekauft werden.</p>"
  },
  "dmgNineLivesStea": {
    "name": "Neun-Leben-Stehler",
    "description": "<p><em>Waffe (Jede einfache oder kriegerische), Sehr selten (Benötigt Einstimmung)</em></p><p>Du erhältst einen Bonus von +2 auf Angriffs- und Schadenswürfe, die du mit dieser magischen Waffe machst.</p><p><strong>Lebensraub.</strong> Die Waffe hat [[/r 1d8 + 1]] Ladungen. Wenn du eine Kreatur, die weniger als 100 Trefferpunkte hat, mit dieser Waffe angreifst und eine 20 auf dem W20 für den Angriffswurf würfelst, muss die Kreatur einen Rettungswurf auf Konstitution SG 15 bestehen oder wird sofort getötet, während das Schwert ihre Lebenskraft aus ihrem Körper reißt. Konstrukte und Untote bestehen den Rettungswurf automatisch. Die Waffe verliert 1 Ladung, wenn die Kreatur getötet wird. Wenn die Waffe keine Ladungen mehr hat, verliert sie diese Eigenschaft.</p><section class=\"secret\" id=\"secret-vSYC0gYqNiDynkjf\"><p><strong>Foundry Note</strong></p><p>The <strong>Life Stealing</strong> activity should be updated with its max uses set to the number of charges rolled.</p></section><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Life Stealing": "Lebensraub",
      "Nine Lives Stealer": "Neun-Leben-Stehler"
    }
  },
  "dmgFwpObsidianSt": {
    "name": "Obsidianross",
    "description": "<p><em>Siehe @UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderbare Figur}</em></p><p>Dieses polierte Obsidianpferd kann für bis zu 24 Stunden zu einem <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmNightmare00000]{Alptraum}</strong> werden. Der Alptraum kämpft nur zur Selbstverteidigung. Nachdem es einmal verwendet wurde, kann es erst nach 5 Tagen wieder eingesetzt werden.</p><p>Die Figur hat jedes Mal, wenn du sie benutzt, eine [[/r 1d10cs1]]{10-prozentige Chance}, deine Befehle zu ignorieren, einschließlich eines Befehls, in die Figurenform zurückzukehren. Wenn du den Alptraum besteigst, während er deine Befehle ignoriert, werden du und der Alptraum sofort an einen zufälligen Ort auf der Ebene des Hades transportiert, wo der Alptraum in die Figurenform zurückkehrt.</p><section class=\"secret\" id=\"secret-OH9v7OxKinHyCnIQ\"><p><strong>Foundry Note</strong></p><p>This item's limited uses represent the 5 days required before the figurine can be used again.</p></section>"
  },
  "phbagOil00000000": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong> Wenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Wähle eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir als Ziel. Das Ziel muss einen Rettungswurf auf Geschicklichkeit (SG 8 plus dein Geschicklichkeitsmodifikator und Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5 Meter großen quadratischen Bereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "JpE7eqjwXw95Sai5": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong> Wenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Wähle eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir als Ziel. Das Ziel muss einen Rettungswurf auf Geschicklichkeit (SG 8 plus dein Geschicklichkeitsmodifikator und Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5 Meter großen quadratischen Bereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "8dJcpxveaFEzjK5C": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong> Wenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Wähle eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir als Ziel. Das Ziel muss einen Rettungswurf auf Geschicklichkeit (SG 8 plus dein Geschicklichkeitsmodifikator und Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5 Meter großen quadratischen Bereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "q6nVEb4XnTWxqA81": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong>\nWenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Ziele auf eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und dein Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5-Meter-Quadratbereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "rwITntQ6OAy0neX8": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong>\nWenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Ziele auf eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und dein Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5-Meter-Quadratbereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "VczW1tStT5y7No3b": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong>\nWenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Ziele auf eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und dein Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5-Meter-Quadratbereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "Ur2LYFqSdOgeWWF0": {
    "name": "Öl",
    "description": "<p>Du kannst eine Kreatur, ein Objekt oder einen Bereich mit Öl übergießen oder es als Brennstoff verwenden, wie unten beschrieben.</p><p><strong>Eine Kreatur oder ein Objekt übergießen.</strong>\nWenn du die Aktion Angriff ausführst, kannst du einen deiner Angriffe durch das Werfen einer Ölflasche ersetzen. Ziele auf eine Kreatur oder ein Objekt innerhalb von 6 Metern von dir. Das Ziel muss einen Geschicklichkeitsrettungswurf (SG 8 plus dein Geschicklichkeitsmodifikator und dein Übungsbonus) bestehen oder ist mit Öl bedeckt. Wenn das Ziel Feuerschaden erleidet, bevor das Öl trocknet (nach 1 Minute), erleidet das Ziel zusätzlichen [[/damage 5 type=fire]] Schaden durch brennendes Öl.</p><p><strong>Einen Bereich übergießen.</strong> Du kannst die Aktion Nutzen ausführen, um eine Ölflasche auf ebenen Boden zu gießen, um einen 1,5-Meter-Quadratbereich innerhalb von 1,5 Metern von dir zu bedecken. Wenn es angezündet wird, brennt das Öl bis zum Ende des Zuges, 2 Runden nachdem das Öl angezündet wurde (oder 12 Sekunden), und verursacht 5 Feuerschaden bei jeder Kreatur, die den Bereich betritt oder ihren Zug dort beendet. Eine Kreatur kann diesen Schaden nur einmal pro Zug erleiden.</p><p><strong>Brennstoff.</strong> Öl dient als Brennstoff für Lampen und Laternen. Einmal angezündet, brennt eine Ölflasche 6 Stunden lang in einer Lampe oder Laterne. Diese Dauer muss nicht zusammenhängend sein; du kannst das brennende Öl löschen (als Aktion Nutzen) und es wieder anzünden, bis es insgesamt 6 Stunden gebrannt hat.</p>",
    "activities": {
      "Douse Space": "Bereich übergießen",
      "Throw": "Werfen"
    }
  },
  "dmgOilOfTaggit00": {
    "name": "Taggit-Öl",
    "description": "<p><em>Kontaktgift</em></p><p>Eine Kreatur, die Taggit-Öl ausgesetzt ist, muss einen SG 13 Konstitutionsrettungswurf bestehen oder hat den Zustand &amp;Reference[Poisoned apply=false] (Vergiftet) für 24 Stunden. Die Kreatur hat außerdem den Zustand &amp;Reference[Unconscious apply=false] (Bewusstlos), solange sie auf diese Weise vergiftet ist. Sie wacht auf, wenn sie Schaden nimmt.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "dmgFwpOnyxDogRar": {
    "name": "Onyxhund",
    "description": "<p><em>Siehe\n@UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Wunderwirkende Figur}</em></p><p>Diese Onyxstatuette eines Hundes kann bis zu 6 Stunden lang zu einem\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmMastiff0000000]{Mastiff}</strong>\nwerden. Der Mastiff hat eine Intelligenz von 8 und kann Gemeinsprache sprechen. Er hat außerdem Blindgespür mit einer Reichweite von 18 Metern. Sobald er benutzt wurde, kann er erst nach 7 Tagen wieder verwendet werden.</p><section\nclass=\"secret\" id=\"secret-61PsF1VxjiD2gq06\"><p><strong>Foundry-Hinweis</strong></p><p>Die begrenzten Verwendungen dieses Gegenstands repräsentieren die 7 Tage, die vergehen müssen, bevor die Figur wieder verwendet werden kann.</p></section>"
  },
  "dmgPaleTincture0": {
    "name": "Blasse Tinktur",
    "description": "<p><em>Eingenommenes Gift</em></p><p>Eine Kreatur, die Blasser Tinktur ausgesetzt ist, muss einen SG 16 Konstitutionsrettungswurf bestehen oder nimmt 3 (1W6) Giftschaden und hat den Zustand &amp;Reference[Poisoned apply=false] (Vergiftet). Die vergiftete Kreatur wiederholt den Rettungswurf alle 24 Stunden und nimmt bei einem misslungenen Rettungswurf 3 (1W6) Giftschaden. Der Schaden, den das Gift verursacht, kann auf keine Weise geheilt werden, solange die Kreatur vergiftet bleibt. Nach sieben erfolgreichen Rettungswürfen gegen das Gift ist die Kreatur nicht mehr vergiftet.</p><section\nclass=\"secret\" id=\"secret-tSBe5DSXqLu6xn8u\"><p><strong>Foundry-Hinweis</strong></p><p>Die Aktivität <strong>Gift verwenden</strong> beinhaltet den Rettungswurf, und der Aktive Effekt <strong>Vergiftet und Max. reduzieren</strong> wendet den Zustand Vergiftet an und kann auch zur Verhinderung von Heilung verwendet werden. Bearbeite den Aktiven Effekt beim Spieler, wechsle zur Registerkarte „Effekte“ und passe den „Effektwert“ auf „-X“ an, wobei X der Gesamtschaden ist, den sie durch das Gift erlitten haben. Dies reduziert ihre maximalen TP vorübergehend um diesen Wert.</p></section>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "phbwepPistol0000": {
    "name": "Pistole"
  },
  "phbgstPlayingcar": {
    "name": "Spielkarten",
    "description": "<p><strong>Attribut:</strong> Weisheit</p><p\nclass=\"phb-meta\"><strong>Nutzen:</strong> Erkennen, ob jemand schummelt (SG 10), oder das Spiel gewinnen (SG 20)</p>",
    "activities": {
      "Catch Cheating": "Schummeln erkennen",
      "Play to Win": "Auf Sieg spielen"
    }
  },
  "phbagPoisonBasic": {
    "name": "Gift, einfach",
    "description": "<p>Als Bonusaktion kannst du ein Fläschchen mit einfachem Gift verwenden, um eine Waffe oder bis zu drei Munitionsstücke zu beschichten. Eine Kreatur, die Stich- oder Hiebschaden von der vergifteten Waffe oder Munition erleidet, nimmt zusätzlichen 1W4 Giftschaden. Einmal aufgetragen, behält das Gift seine Wirksamkeit für 1 Minute oder bis sein Schaden verursacht wird, je nachdem, was zuerst eintritt.</p><section\nid=\"secret-YwO5GX35V4XweNWL\" class=\"secret\"><p><strong>Foundry-Hinweis</strong></p><p>Diese Funktion beinhaltet einen Wurf für den Giftschaden.</p></section>"
  },
  "dmgPoisonedDarts": {
    "name": "Vergiftete Wurfpfeile",
    "description": "<div><p><em>Tödliche Falle (Stufen 1–4)</em></p><p><strong>Auslöser:</strong>\nEine Kreatur bewegt sich auf eine Druckplatte</p><p><strong>Dauer:</strong>\nAugenblicklich, und die Falle setzt sich zu Beginn des nächsten Zuges zurück, wenn sie weniger als dreimal ausgelöst wurde</p><p>Wenn eine Kreatur zum ersten Mal in einem Zug auf die Druckplatte dieser Falle tritt, schießen vergiftete Wurfpfeile aus in den umgebenden Wänden eingelassenen Röhren. Die Löcher, die diese Röhren beherbergen, sind durch Staub und Spinnweben verdeckt oder geschickt zwischen Basreliefs, Wandgemälden oder Fresken versteckt.</p><p>Jede Kreatur im Pfad der Wurfpfeile muss einen SG 13 Geschicklichkeitsrettungswurf bestehen oder wird von [[/r 1d3]] Wurfpfeilen getroffen und nimmt 3 (1W6) Giftschaden pro Wurfpfeil.</p><p><em><strong>Entdecken und Entschärfen.</strong></em> Als Aktion Suchen kann eine Kreatur die Wände untersuchen und einen [[/check prc 15]]-Wurf machen, wobei sie die Löcher bei einem erfolgreichen Wurf entdeckt. Alle Löcher mit Wachs, Stoff oder Schutt zu verstopfen, verhindert das Abfeuern der Wurfpfeile.</p><p>Als Aktion Suchen kann eine Kreatur den Bodenabschnitt, der die Druckplatte bildet, untersuchen und einen [[/check prc 15]]-Wurf machen, wobei sie die Druckplatte bei einem erfolgreichen Wurf entdeckt. Einen Eisendorn oder einen ähnlichen Gegenstand unter die Druckplatte zu verkeilen, verhindert, dass die Falle ausgelöst wird.</p><p><em><strong>Auf höheren Stufen.</strong></em> Du kannst die Falle für höhere Stufen skalieren, indem du den Giftschaden jedes Wurfpfeils wie folgt erhöhst: 7 (2W6) auf Stufen 5–10, 14 (4W6) auf Stufen 11–16 oder 24 (7W6) auf Stufen 17–20.</p></div>",
    "activities": {
      "Trigger (1-4)": "Auslösen (1-4)",
      "Trigger (11-16)": "Auslösen (11-16)",
      "Trigger (17-20)": "Auslösen (17-20)",
      "Trigger (5-10)": "Auslösen (5-10)"
    }
  },
  "dmgPoisonedNeedl": {
    "name": "Vergiftete Nadel",
    "description": "<div><p><em>Belästigungsfalle (Stufen\n1–4)</em></p><p><strong>Auslöser:</strong> Eine Kreatur öffnet das Schloss der Falle unsachgemäß oder scheitert beim Entschärfen der Falle</p><p><strong>Dauer:</strong>\nAugenblicklich</p><p>Eine vergiftete Nadel ist in einem Schloss versteckt. Wenn eine Kreatur das Schloss mit einem anderen Gegenstand als dem richtigen Schlüssel öffnet, schnellt die Nadel heraus und sticht die Kreatur. Die Kreatur macht einen SG 11 Konstitutionsrettungswurf. Bei einem misslungenen Rettungswurf nimmt die Kreatur 5 (1W10) Giftschaden und hat den Zustand &amp;Reference[Poisoned apply=false] (Vergiftet) für 1 Stunde. Bei einem erfolgreichen Rettungswurf nimmt die Kreatur nur halb so viel Schaden.</p><p><em><strong>Vermeiden.</strong></em> Die Falle wird nicht ausgelöst, wenn das Schloss mit einem <em>Klopf</em>-Zauber oder ähnlicher Magie geöffnet wird.</p><p><em><strong>Entdecken und Entschärfen.</strong></em> Als Aktion Suchen kann eine Kreatur das präparierte Schloss untersuchen und einen [[/check prc 15]]-Wurf machen, wobei sie die Nadel bei einem erfolgreichen Wurf entdeckt. Sobald die Falle entdeckt wurde, kann ein Charakter eine Aktion ausführen, um zu versuchen, die Falle zu entschärfen, was mit einem erfolgreichen [[/check slt 15]]-Wurf gelingt. Bei einem misslungenen Wurf löst die Kreatur die Falle aus.</p><p><em><strong>Auf höheren\nStufen.</strong></em> Du kannst die Falle für höhere Stufen skalieren, indem du den Schaden und den Rettungswurf-SG erhöhst, wie in der folgenden\nTabelle gezeigt.</p><table><thead><tr><th><p>Stufen</p></th><th><p>Giftschaden</p></th><th><p>Rettungswurf-SG</p></th><th></th></tr></thead><tbody><tr><td><p>5–10</p></td><td><p>11\n(2W10)</p></td><td><p>13</p></td><td></td></tr><tr><td><p>11–16</p></td><td><p>22\n(4W10)</p></td><td><p>15</p></td><td></td></tr><tr><td><p>17–20</p></td><td><p>55\n(10W10)</p></td><td><p>17</p></td><td></td></tr></tbody></table></div>",
    "activities": {
      "Trigger (1-4)": "Auslösen (1-4)",
      "Trigger (11-16)": "Auslösen (11-16)",
      "Trigger (17-20)": "Auslösen (17-20)",
      "Trigger (5-10)": "Auslösen (5-10)"
    }
  },
  "phbagPotIron0000": {
    "name": "Topf, Eisen"
  },
  "dmgPotionofGiant": {
    "name": "Trank der Riesenstärke",
    "description": "<p><em>Trank, Seltenheit variiert</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde. Die Art des Riesen bestimmt den Wert (siehe die Tabelle unten). Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p><table><thead><tr><td>Trank</td><td>Stärke</td><td>Seltenheit</td></tr></thead><tbody><tr><td><em>Trank\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgHillPotionOfG]{Hügel})</td><td>21</td><td>Ungewöhnlich</td></tr><tr><td><em>Trank\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgFrostPotionOf]{Frost} oder\n@UUID[Compendium.dnd5e.equipment24.Item.dmgStonePotionOf]{Stein})</td><td>23</td><td>Selten</td></tr><tr><td><em>Trank\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgFirePotionOfG]{Feuer})</td><td>25</td><td>Selten</td></tr><tr><td><em>Trank\nder Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgCloudPotionOf]{Wolken})</td><td>27</td><td>Sehr\nselten</td></tr><tr><td><em>Trank der Riesenstärke</em>\n(@UUID[Compendium.dnd5e.equipment24.Item.dmgStormPotionOf]{Sturm})</td><td>29</td><td>Legendär</td></tr></tbody></table>"
  },
  "dmgCloudPotionOf": {
    "name": "Trank der Riesenstärke (Wolken)",
    "description": "<p><em>Trank, Sehr selten</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde auf 27. Die Art des Riesen bestimmt den Wert. Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgFirePotionOfG": {
    "name": "Trank der Riesenstärke (Feuer)",
    "description": "<p><em>Trank, Selten</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde auf 25. Die Art des Riesen bestimmt den Wert. Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgFrostPotionOf": {
    "name": "Trank der Riesenstärke (Frost)",
    "description": "<p><em>Trank, Selten</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde auf 23. Die Art des Riesen bestimmt den Wert. Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgHillPotionOfG": {
    "name": "Trank der Riesenstärke (Hügel)",
    "description": "<p><em>Trank, Ungewöhnlich</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde auf 21. Die Art des Riesen bestimmt den Wert. Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgStonePotionOf": {
    "name": "Trank der Riesenstärke (Stein)",
    "description": "<p><em>Trank, Selten</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde auf 23. Die Art des Riesen bestimmt den Wert. Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgStormPotionOf": {
    "name": "Trank der Riesenstärke (Sturm)",
    "description": "<p><em>Trank, Legendär</em></p><p>Wenn du diesen Trank trinkst, ändert sich dein Stärkewert für 1 Stunde auf 29. Die Art des Riesen bestimmt den Wert. Der Trank hat keine Wirkung auf dich, wenn deine Stärke gleich oder größer als dieser Wert ist.</p><p>Die transparente Flüssigkeit dieses Tranks enthält einen Lichtsplitter, der einem Fingernagel eines Riesen ähnelt.</p>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgGreaterPotion": {
    "name": "Heiltrank (Größer)",
    "description": "<p><em>Trank, Ungewöhnlich</em></p><p>Du regenerierst 4W4 + 4 Trefferpunkte, wenn du\ndiesen Trank trinkst.</p><p>Unabhängig von seiner Potenz schimmert die rote Flüssigkeit des Tranks,\nwenn sie aufgewühlt wird.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "dmgSuperiorPotio": {
    "name": "Heiltrank (Überragend)",
    "description": "<p><em>Trank, Selten</em></p><p>Du regenerierst 8W4 + 8 Trefferpunkte, wenn du\ndiesen Trank trinkst.</p><p>Unabhängig von seiner Potenz schimmert die rote Flüssigkeit des Tranks,\nwenn sie aufgewühlt wird.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "dmgSupremePotion": {
    "name": "Heiltrank (Höchster)",
    "description": "<p><em>Trank, Sehr Selten</em></p><p>Du regenerierst 10W4 + 20 Trefferpunkte, wenn\ndu diesen Trank trinkst.</p><p>Unabhängig von seiner Potenz schimmert die rote Flüssigkeit des Tranks,\nwenn sie aufgewühlt wird.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "dmgPotionOfInvul": {
    "name": "Trank der Unverwundbarkeit",
    "description": "<p><em>Trank, Selten</em></p><p>Für 1 Minute, nachdem du diesen Trank getrunken hast,\nhast du Resistenz gegen alle Arten von Schaden.</p><p>Die sirupartige Flüssigkeit dieses Tranks sieht\naus wie verflüssigtes Eisen.</p>",
    "activities": {
      "Drink": "Trinken"
    }
  },
  "dmgPotionOfLonge": {
    "name": "Trank der Langlebigkeit",
    "description": "<p><em>Trank, Sehr Selten</em></p><p>Wenn du diesen Trank trinkst, wird dein\nkörperliches Alter um 1W6 + 6 Jahre reduziert, auf ein Minimum von 13 Jahren. Jedes\nMal, wenn du anschließend einen Trank der Langlebigkeit trinkst, besteht eine kumulative\nChance von 10 Prozent, dass du stattdessen um 1W6 + 6 Jahre alterst.</p><p>In dieser\nbernsteinfarbenen Flüssigkeit schwebt ein winziges Herz, das entgegen aller Vernunft immer noch\nschlägt. Diese Zutaten verschwinden, wenn der Trank geöffnet wird.</p>",
    "activities": {
      "Drink": "Trinken"
    }
  },
  "dmgPotionOfResis": {
    "name": "Trank der Resistenz",
    "description": "<p><em>Trank, Ungewöhnlich</em></p><p>Wenn du diesen Trank trinkst, hast du\nfür 1 Stunde Resistenz gegen eine Art von Schaden. Der SL wählt die Art oder\nbestimmt sie zufällig, indem er auf der folgenden\nTabelle würfelt.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgPotionOfResis\ncaption=false rollable]</p><section class=\"secret\"\nid=\"secret-yI26znYuybVCz6iX\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser\nGegenstand enthält Aktive Effekte für jede Art von Resistenz. Verwende den AE für\ndie vom SL gewählte Schadensart.</p></section>",
    "activities": {
      "Drink Potion": "Trank trinken"
    }
  },
  "dmgPotionOfVital": {
    "name": "Trank der Vitalität",
    "description": "<p><em>Trank, Sehr Selten</em></p><p>Wenn du diesen Trank trinkst, entfernt er\nalle &amp;Reference[Exhaustion apply=false]-Stufen, die du hast, und beendet den\n&amp;Reference[Poisoned apply=false]-Zustand bei dir. Für die nächsten 24\nStunden regenerierst du die maximale Anzahl an Trefferpunkten für jeden Trefferwürfel,\nden du ausgibst.</p><p>Die purpurrote Flüssigkeit dieses Tranks pulsiert regelmäßig mit mattem\nLicht, das an einen Herzschlag erinnert.</p><section class=\"secret\"\nid=\"secret-z0SSGecWIDLeIdS3\"><p><strong>Foundry-Hinweis</strong></p><p>Der\nAktive Effekt <strong>Voller Vitalität</strong> kann zur\nVerfolgung verwendet werden.</p></section>",
    "activities": {
      "Drink": "Trinken"
    }
  },
  "dmgPurpleWormPoi": {
    "name": "Purpurwurmgift",
    "description": "<p><em>Verletzungsgift</em></p><p>Eine Kreatur, die Purpurwurmgift ausgesetzt ist,\nmuss einen Rettungswurf auf Konstitution gegen SG 21 ablegen. Bei einem misslungenen Rettungswurf erleidet sie 35 (10W6) Giftschaden, bei einem erfolgreichen Rettungswurf halb so viel Schaden.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "dmgDmtPuzzle0000": {
    "name": "Rätsel",
    "description": "<p> Reduziere deine Intelligenz oder Weisheit dauerhaft um 1W4 + 1 (auf einen\nMindestwert von 1). Du kannst eine zusätzliche Karte über deine deklarierten\nZiehungen hinaus ziehen.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgQuarterstaffO": {
    "name": "Viertelstab des Akrobaten",
    "description": "<p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepQuartersta]{Viertelstab}),\nSehr Selten (Benötigt Einstimmung)</em></p><p>Du erhältst einen Bonus von +2 auf Angriffs-\nund Schadenswürfe, die mit dieser magischen Waffe gemacht werden.</p><p>Während du\ndiese Waffe hältst, kannst du sie dazu bringen, grünes Dämmriges Licht bis zu 3 Metern\nauszustrahlen, entweder als Bonusaktion oder nachdem du die Initiative gewürfelt hast, oder du kannst\ndas Licht als Bonusaktion löschen.</p><p>Während du diese Waffe hältst,\nkannst du eine Bonusaktion nutzen, um ihre Form zu ändern, sie in einen 15 cm\nlangen Stab (zur einfacheren Aufbewahrung) oder eine 3 Meter lange Stange zu verwandeln oder sie wieder in einen\nViertelstab zurückzuverwandeln; die Waffe verlängert sich nur so weit, wie der umgebende\nRaum es zulässt.</p><p>In bestimmten Formen hat die Waffe die folgenden\nzusätzlichen Eigenschaften.</p><p><em><strong>Akrobatische Unterstützung (Nur in Viertelstab- oder\n3-Meter-Stangenform).</strong></em> Während du diese Waffe hältst, hast du\nVorteil bei Geschicklichkeit (Akrobatik)-Würfen.</p><p><em><strong>Angriffs-\nAbleitung (Nur in Viertelstabform).</strong></em> Wenn du von einem\nAngriff getroffen wirst, während du die Waffe hältst, kannst du eine Reaktion nutzen, um die\nWaffe um dich herum zu wirbeln, wodurch du einen Bonus von +5 auf deine Rüstungsklasse gegen den\nauslösenden Angriff erhältst, was den Angriff möglicherweise dazu bringt, dich zu verfehlen. Du kannst diese Eigenschaft erst wieder nutzen, nachdem du eine Kurze oder Lange\nRast beendet hast.</p><p><em><strong>Fernkampfwaffe (Nur in Viertelstabform\n).</strong></em> Diese Waffe hat die Eigenschaft Werfbar mit einer normalen\nReichweite von 9 Metern und einer langen Reichweite von 36 Metern. Unmittelbar nachdem du\neinen Fernkampfangriff mit der Waffe ausgeführt hast, fliegt sie zu deiner Hand zurück.</p>",
    "activities": {
      "Attack Deflection": "Angriffsableitung"
    }
  },
  "phbagRamPortable": {
    "name": "Rammbock, Tragbar",
    "description": "<p>Du kannst einen Tragbaren Rammbock verwenden, um Türen aufzubrechen. Dabei erhältst du\neinen Bonus von +4 auf den Stärke-Wurf. Ein anderer Charakter kann dir beim Einsatz des\nRammbocks helfen, wodurch du Vorteil auf diesen Wurf erhältst.</p>"
  },
  "dmgRightPouch000": {
    "name": "Rechter Beutel"
  },
  "dmgsupRingofResi": {
    "name": "Ring"
  },
  "dmgRingOfElement": {
    "name": "Ring der Elementarbefehlsgewalt",
    "description": "<p><em>Ring, Legendär (Benötigt Einstimmung)</em></p><p>Jeder Ring der\nElementarbefehlsgewalt ist mit einer der vier Elementarebenen verbunden. Der SL\nwählt oder bestimmt zufällig die verbundene Ebene. Zum Beispiel ist ein Ring der\nElementarbefehlsgewalt (Luft) mit der Elementarebene der\nLuft verbunden.</p><p>Jeder Ring der Elementarbefehlsgewalt hat die folgenden zwei\nEigenschaften:</p><p><strong>Elementarer Fluch.</strong> Während du den Ring trägst,\nhast du Vorteil auf Angriffswürfe gegen Elementare und diese haben\nNachteil auf Angriffswürfe gegen dich.</p><p><strong>Elementarer\nZwang.</strong> Während du den Ring trägst, kannst du eine Magie-Aktion nutzen,\num zu versuchen, ein Elementar, das du innerhalb von 18 Metern von dir siehst, zu zwingen. Das\nElementar muss einen Weisheitsrettungswurf gegen SG 18 ablegen. Bei einem misslungenen Rettungswurf hat das\nElementar den Zustand Verzaubert bis zum Beginn deines nächsten Zuges, und\ndu bestimmst, was es mit seiner Bewegung und Aktion in seinem nächsten\nZug tut.</p><p><strong>Elementarer Fokus.</strong> Während du den Ring trägst, profitierst du\nvon zusätzlichen Eigenschaften, die der verbundenen Elementarebene des Rings\nentsprechen:</p><p><strong>Luft.</strong> Du kennst Auran, du hast\nResistenz gegen Blitzschaden, und du hast eine Flugbewegungsrate gleich deiner\nBewegungsrate und kannst schweben.</p><p><strong>Erde.</strong> Du kennst Terran, und\ndu hast Resistenz gegen Säureschaden. Gelände, das aus Schutt, Felsen oder\nErde besteht, ist für dich kein Schwieriges Gelände. Zusätzlich kannst du dich durch\nfeste Erde oder Fels bewegen, als wären diese Bereiche Schwieriges Gelände, ohne\ndie Materie zu stören, durch die du dich bewegst. Wenn du deinen Zug in\nfester Erde oder Fels beendest, wirst du zum nächsten unbesetzten Feld\ngeschoben, das du zuletzt besetzt hast.</p><p><strong>Feuer.</strong> Du kennst Ignan, und du\nhast Immunität gegen Feuerschaden.</p><p><strong>Wasser.</strong> Du kennst\nAquan, du erhältst eine Schwimmbewegungsrate von 18 Metern, und du kannst\nunter Wasser atmen.</p><p><strong>Zauberwirken.</strong> Der Ring hat 5 Ladungen\nund regeneriert täglich bei Sonnenaufgang 1W4 + 1 verbrauchte Ladungen. Während du den\nRing trägst, kannst du einen Zauber von ihm wirken. Wähle den Zauber aus der Liste der\nverfügbaren Zauber basierend auf der Elementarebene, mit der der Ring verbunden ist, wie\nin der folgenden Tabelle gezeigt. Die Tabelle gibt an, wie viele Ladungen du\naufwenden musst, um den Zauber zu wirken, der einen Rettungswurf-SG von\n18 hat.</p><table><thead><tr><td><p>Ebene</p></td><td><p>Zauber\n(Ladungen)</p></td></tr></thead><tbody><tr><td><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgAirRingOfElem]{Luft-\nRing}</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplChainLight]{Kettenblitz}\n(3 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplFeatherFal]{Federfall} (0\nLadungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplGustofWind]{Windstoß}\n(2 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplWindWall00]{Windwand} (1\nLadung)</p></td></tr><tr><td><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgEarthRingOfEl]{Erd-\nRing}</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplEarthquake]{Erdbeben}\n(5 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplStoneShape]{Steingestalt}\n(2 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplStoneskin0]{Steinhaut} (3\nLadungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplWallofSton]{Steinwand} (3\nLadungen)</p></td></tr><tr><td><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgFireRingOfEle]{Feuer-\nRing}</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplBurningHan]{Brennende\nHände} (1 Ladung),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplFireball00]{Feuerball} (2\nLadungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplFireStorm0]{Feuersturm}\n(4 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplWallofFire]{Feuerwand} (3\nLadungen)</p></td></tr><tr><td><p>@UUID[Compendium.dnd5e.equipment24.Item.dmgWaterRingOfEl]{Wasser-\nRing}</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplCreateorDe]{Wasser\nerschaffen oder zerstören} (1 Ladung),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplIceStorm00]{Eissturm} (2\nLadungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplTsunami000]{Tsunami}\n(5 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplWallofIce0]{Eiswand}\n(3 Ladungen),\n@UUID[Compendium.dnd5e.spells24.Item.phbsplWaterWalk0]{Wasserwandeln} (2\nLadungen)</p></td></tr></tbody></table>"
  },
  "dmgRingOfResista": {
    "name": "Ring der Resistenz",
    "description": "<p><em>@UUID[Compendium.dnd5e.equipment24.Item.dmgsupRingofResi]{Ring},\nSelten</em></p><p>Du hast Resistenz gegen eine Schadensart, während du diesen\nRing trägst. Der Edelstein im Ring zeigt die Art an, die der SL wählt oder\nzufällig bestimmt, indem er auf der folgenden\nTabelle würfelt.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgRingOfResista\nrollable\ncaption=false]</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Ring of Resistance": "Ring der Resistenz"
    }
  },
  "phbagRobe0000000": {
    "name": "Robe",
    "description": "<p>Eine Robe hat berufliche oder zeremonielle Bedeutung. Einige Veranstaltungen und\nOrte lassen nur Personen zu, die eine Robe mit bestimmten Farben oder\nSymbolen tragen.</p>"
  },
  "jLcAY4Oph8ZEniG2": {
    "name": "Robe",
    "description": "<p>Eine Robe hat berufliche oder zeremonielle Bedeutung. Einige Veranstaltungen und\nOrte lassen nur Personen zu, die eine Robe mit bestimmten Farben oder\nSymbolen tragen.</p>"
  },
  "dmgRodOfResurrec": {
    "name": "Stab der Wiederauferstehung",
    "description": "<p><em>Stab, Legendär (Benötigt Einstimmung)</em></p><p>Der Stab hat 5\nLadungen. Während du ihn hältst, kannst du einen der folgenden Zauber von\nihm wirken: @UUID[Compendium.dnd5e.spells24.Item.phbsplHeal000000]{Heilung} (verbraucht\n1 Ladung) oder\n@UUID[Compendium.dnd5e.spells24.Item.phbsplResurrecti]{Wiederauferstehung}\n(verbraucht 5 Ladungen).</p><p>Der Stab regeneriert täglich bei\nSonnenaufgang 1 verbrauchte Ladung. Wenn du die letzte Ladung verbrauchst, würfle [[/r 1d20]]. Bei einer 1\nverschwindet der Stab in einem harmlosen Strahlenglanz.</p>"
  },
  "dmgDmtRogue00000": {
    "name": "Schurke",
    "description": "<p> Ein NSC nach Wahl des SL wird dir gegenüber Feindselig. Du kennst die\nIdentität dieses NSC nicht, bis er oder jemand anderes sie offenbart. Nichts\nGeringeres als ein <em>Wunsch</em>-Zauber oder göttliche Intervention kann die\nFeindseligkeit des NSC dir gegenüber beenden.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgRollingStone0": {
    "name": "Rollender Stein",
    "description": "<div><p ><em>Tödliche Falle (Stufen 11–16) oder Belästigungsfalle (Stufen\n17–20)</em></p><p><strong>Auslöser:</strong> Eine Kreatur betritt eine\nDruckplatte</p><p><strong>Dauer:</strong> Bis der Stein aufhört zu\nrollen</p><p>Wenn eine Kreatur eine versteckte Druckplatte betritt, wird eine\nKugel aus massivem Stein mit einem Radius von 1,5 Metern aus einem geheimen Fach freigegeben und\nbeginnt zu rollen. Der Stein und alle Kreaturen in der Nähe würfeln Initiative; der\nStein erhält einen Bonus von [[/r 1d20 + 8]]{+8} auf seinen Initiativwurf.</p><p>In\nseinem Zug bewegt sich der Stein 18 Meter in eine Richtung und ändert den Kurs, wenn\ner durch ein Hindernis umgeleitet wird. Der Stein kann sich durch die Felder von Kreaturen bewegen,\nund Kreaturen können sich durch das Feld des Steins bewegen, wobei sie es als\n&amp;Reference[Schwieriges Gelände] behandeln. Immer wenn der Stein zum ersten Mal in einem Zug das Feld einer Kreatur betritt oder eine Kreatur das Feld des Steins betritt,\nwährend der Stein rollt, muss diese Kreatur einen Geschicklichkeitsrettungswurf gegen SG 15 bestehen oder 55 (10W10) Wuchtschaden erleiden und den\n&amp;Reference[Liegend apply=false]-Zustand erhalten.</p><p>Der Stein stoppt, wenn er\neine Wand oder eine ähnliche Barriere trifft. Er kann keine Ecken umrunden, aber kreative\nKerkerbauer integrieren gekrümmte Kurven in nahegelegene Gänge, die es dem\nStein ermöglichen, sich weiterzubewegen.</p><p><em><strong>Entdecken und\nEntschärfen.</strong></em> Als Studienaktion kann eine Kreatur den\nBodenabschnitt, der die Druckplatte bildet, untersuchen und einen [[/check inv\n15]]-Wurf machen, wobei sie bei einem erfolgreichen Wurf die Funktion der Druckplatte ableitet.\nDas Einklemmen eines Eisenspießes oder eines ähnlichen Objekts unter die Druckplatte\nverhindert das Auslösen der Falle.</p><p><em><strong>Den Stein\nZerstören.</strong></em> Der Stein ist ein Großes Objekt mit RK 17, TP 100, einem\nSchadensschwellenwert von 10 und Immunität gegen Gift- und Psychischen\nSchaden.</p><p><em><strong>Den Stein Verlangsamen.</strong></em> Als Aktion kann eine\nKreatur versuchen, den Stein mit einem Stärke (Athletik)-Wurf gegen SG 20 zu verlangsamen.\nWenn der Wurf erfolgreich ist, wird die Strecke, die der Stein in seinem\nZug zurücklegt, um 4,5 Meter reduziert. Wenn diese Strecke auf 0 fällt, hört er auf, sich zu bewegen\nund ist keine Bedrohung mehr.</p></div>",
    "activities": {
      "Slow": "Verlangsamen"
    }
  },
  "phbagRope0000000": {
    "name": "Seil",
    "description": "<p>Als Aktion Nutzen kannst du einen Knoten mit dem Seil binden, wenn du einen erfolgreichen SG 10 Geschicklichkeit (Fingerfertigkeit)-Wurf ablegst. Das Seil kann mit einem erfolgreichen SG 20 Stärke (Athletik)-Wurf zerrissen werden.</p><p>Du kannst eine unwillige Kreatur nur mit dem Seil fesseln, wenn die Kreatur den &amp;Reference[Grappled]{Gepackt}-, &amp;Reference[Incapacitated]{Handlungsunfähig}- oder &amp;Reference[Restrained]{Festhalten}-Zustand hat. Wenn die Beine der Kreatur gefesselt sind, hat die Kreatur den Zustand Fesselung, bis sie entkommt. Das Entkommen aus dem Seil erfordert, dass die Kreatur als Aktion einen erfolgreichen SG 15 Geschicklichkeit (Akrobatik)-Wurf ablegt.</p>",
    "activities": {
      "Burst Rope": "Seil zerreißen",
      "Escape Check": "Entkommen-Wurf",
      "Tie Knot": "Knoten binden"
    }
  },
  "x8jC9e00t4cUYiKR": {
    "name": "Seil",
    "description": "<p>Als Aktion Nutzen kannst du einen Knoten mit dem Seil binden, wenn du einen erfolgreichen SG 10 Geschicklichkeit (Fingerfertigkeit)-Wurf ablegst. Das Seil kann mit einem erfolgreichen SG 20 Stärke (Athletik)-Wurf zerrissen werden.</p><p>Du kannst eine unwillige Kreatur nur mit dem Seil fesseln, wenn die Kreatur den &amp;Reference[Grappled]{Gepackt}-, &amp;Reference[Incapacitated]{Handlungsunfähig}- oder &amp;Reference[Restrained]{Festhalten}-Zustand hat. Wenn die Beine der Kreatur gefesselt sind, hat die Kreatur den Zustand Fesselung, bis sie entkommt. Das Entkommen aus dem Seil erfordert, dass die Kreatur als Aktion einen erfolgreichen SG 15 Geschicklichkeit (Akrobatik)-Wurf ablegt.</p>",
    "activities": {
      "Burst Rope": "Seil zerreißen",
      "Escape Check": "Entkommen-Wurf",
      "Tie Knot": "Knoten binden"
    }
  },
  "LfDewuKszszreg6i": {
    "name": "Seil",
    "description": "<p>Als Aktion Nutzen kannst du einen Knoten mit dem Seil binden, wenn du einen erfolgreichen SG 10 Geschicklichkeit (Fingerfertigkeit)-Wurf ablegst. Das Seil kann mit einem erfolgreichen SG 20 Stärke (Athletik)-Wurf zerrissen werden.</p><p>Du kannst eine unwillige Kreatur nur mit dem Seil fesseln, wenn die Kreatur den &amp;Reference[Grappled]{Gepackt}-, &amp;Reference[Incapacitated]{Handlungsunfähig}- oder &amp;Reference[Restrained]{Festhalten}-Zustand hat. Wenn die Beine der Kreatur gefesselt sind, hat die Kreatur den Zustand Fesselung, bis sie entkommt. Das Entkommen aus dem Seil erfordert, dass die Kreatur als Aktion einen erfolgreichen SG 15 Geschicklichkeit (Akrobatik)-Wurf ablegt.</p>",
    "activities": {
      "Burst Rope": "Seil zerreißen",
      "Escape Check": "Entkommen-Wurf",
      "Tie Knot": "Knoten binden"
    }
  },
  "5KMKEV07I25SVth0": {
    "name": "Seil",
    "description": "<p>Als Aktion Nutzen kannst du einen Knoten mit dem Seil binden, wenn du einen erfolgreichen SG 10 Geschicklichkeit (Fingerfertigkeit)-Wurf ablegst. Das Seil kann mit einem erfolgreichen SG 20 Stärke (Athletik)-Wurf zerrissen werden.</p><p>Du kannst eine unwillige Kreatur nur mit dem Seil fesseln, wenn die Kreatur den &amp;Reference[Grappled]{Gepackt}-, &amp;Reference[Incapacitated]{Handlungsunfähig}- oder &amp;Reference[Restrained]{Festhalten}-Zustand hat. Wenn die Beine der Kreatur gefesselt sind, hat die Kreatur den Zustand Fesselung, bis sie entkommt. Das Entkommen aus dem Seil erfordert, dass die Kreatur als Aktion einen erfolgreichen SG 15 Geschicklichkeit (Akrobatik)-Wurf ablegt.</p>",
    "activities": {
      "Burst Rope": "Seil zerreißen",
      "Escape Check": "Entkommen-Wurf",
      "Tie Knot": "Knoten binden"
    }
  },
  "dmgDmtRuin000000": {
    "name": "Verderben",
    "description": "<p>Alle Formen von Reichtum, die du bei dir trägst oder besitzt, außer magischen Gegenständen, gehen dir verloren. Tragbarer Besitz verschwindet. Unternehmen, Gebäude und Land, die du besitzt, gehen auf eine Weise verloren, die die Realität am wenigsten verändert. Jegliche Dokumentation, die beweist, dass du etwas besitzen solltest, das durch diese Karte verloren ging, verschwindet ebenfalls.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgRustBagofTric": {
    "name": "Rostfarbener Beutel der Tricks",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Dieser Beutel aus grauem, rostfarbenem oder hellbraunem Stoff erscheint leer. Wenn man jedoch in den Beutel greift, offenbart sich die Anwesenheit eines kleinen, flauschigen Objekts.</p><p>Du kannst eine Magie-Aktion ausführen, um das flauschige Objekt aus dem Beutel zu ziehen und es bis zu 6 Meter weit zu werfen. Wenn das Objekt landet, verwandelt es sich in eine Kreatur, die du bestimmst, indem du auf der Tabelle würfelst, die der Farbe des Beutels entspricht. Siehe @UUID[Compendium.dnd5e.content24.JournalEntry.mmMonstersAtoZ00]{Monster} für den Werteblock der Kreatur. Die Kreatur verschwindet bei der nächsten Morgendämmerung oder wenn sie auf 0 Trefferpunkte reduziert wird.</p><p>Die Kreatur ist dir und deinen Verbündeten gegenüber Freundlich und handelt unmittelbar nach dir auf deinem Initiativwert. Du kannst eine Bonusaktion ausführen, um zu befehlen, wie sich die Kreatur bewegt und welche Aktion sie in ihrem nächsten Zug ausführt, z. B. einen Feind angreifen. In Ermangelung solcher Befehle handelt die Kreatur auf eine Weise, die ihrer Natur entspricht.</p><p>Sobald drei flauschige Objekte aus dem Beutel gezogen wurden, kann der Beutel bis zur nächsten Morgendämmerung nicht wieder verwendet werden.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgRustBagOfTric rollable]</p></div>",
    "activities": {
      "Pull and Throw": "Ziehen und Werfen"
    }
  },
  "dmgDmtSage000000": {
    "name": "Weiser",
    "description": "<p>Zu jedem Zeitpunkt innerhalb eines Jahres, nachdem du diese Karte gezogen hast, kannst du in Meditation eine Frage stellen und mental eine wahrheitsgemäße Antwort auf diese Frage erhalten.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgsupBasicScrol": {
    "name": "Schriftrolle"
  },
  "dmgSendingStones": {
    "name": "Sendesteine",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p><em>Sendesteine</em> kommen paarweise vor, wobei jeder Stein so geschnitzt ist, dass er zum anderen passt, damit die Paarung leicht zu erkennen ist. Während du einen Stein berührst, kannst du @UUID[Compendium.dnd5e.spells24.Item.phbsplSending000]{Botschaft} von ihm wirken. Das Ziel ist der Träger des anderen Steins. Wenn keine Kreatur den anderen Stein trägt, weißt du das, sobald du den Stein benutzt, und du wirkst den Zauber nicht.</p><p>Sobald <em>Botschaft</em> mit einem der Steine gewirkt wurde, können die Steine bis zur nächsten Morgendämmerung nicht wieder verwendet werden. Wenn einer der Steine eines Paares zerstört wird, wird der andere nichtmagisch.</p>"
  },
  "dmgSentinelShiel": {
    "name": "Schild des Wächters",
    "description": "<p><em>Rüstung (Schild), Ungewöhnlich</em></p><p>Während du diesen Schild hältst, hast du Vorteil auf Initiativwürfe und Weisheit (Wahrnehmung)-Würfe. Der Schild ist mit einem Augensymbol verziert.</p>"
  },
  "dmgSerpentVenom0": {
    "name": "Schlangengift",
    "description": "<p><em>Verletzungsgift</em></p><p>Eine Kreatur, die Schlangengift ausgesetzt ist, muss einen erfolgreichen SG 11 Konstitutionsrettungswurf ablegen, erleidet bei einem misslungenen Rettungswurf 10 (3W6) Giftschaden oder die Hälfte des Schadens bei einem erfolgreichen.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "dmgFwpSerpentine": {
    "name": "Schlangenhafte Eule",
    "description": "<p><em>Siehe\n@UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Figur der Wunderkraft}</em></p><p>Diese schlangenhafte Statuette einer Eule kann für bis zu 8 Stunden zu einer <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmGiantOwl000000]{Rieseneule}</strong> werden. Die Eule kann telepathisch mit dir über jede Entfernung kommunizieren, wenn du und sie sich auf derselben Existenzebene befinden. Sobald sie benutzt wurde, kann sie erst nach 2 Tagen wieder verwendet werden.</p><section class=\"secret\"\nid=\"secret-lvDPI4uyHQj4dE5a\"><p><strong>Foundry-Hinweis</strong></p><p>Die begrenzten Verwendungen dieses Gegenstands stellen die 2 Tage dar, die erforderlich sind, bevor die Figur wieder verwendet werden kann.</p></section>"
  },
  "dmgShieldOfTheCa": {
    "name": "Schild des Kavaliers",
    "description": "<p><em>Rüstung (Schild), Sehr Selten (Benötigt Einstimmung)</em></p><p>Während du diesen Schild hältst, hast du einen Bonus von +2 auf die Rüstungsklasse. Dieser Bonus kommt zusätzlich zum normalen Bonus des Schildes auf die RK.</p><p>Der Schild hat die folgenden zusätzlichen Eigenschaften, die du verwenden kannst, während du ihn hältst.</p><p><em><strong>Wuchtiger Schlag</strong></em><strong>.</strong> Wenn du die Angriffsaktion ausführst, kannst du einen der Angriffswürfe mit dem Schild gegen ein Ziel innerhalb von 1,5 Metern von dir selbst machen. Wende deinen Übungsbonus und deinen Stärkemodifikator auf den Angriffswurf an. Bei einem Treffer verursacht der Schild dem Ziel Wuchtschaden in Höhe von 2W6 + 2 plus deinem Stärkemodifikator, und wenn das Ziel eine Kreatur ist, kannst du sie bis zu 3 Meter direkt von dir wegstoßen. Wenn die Kreatur deine Größe oder kleiner ist, kannst du sie auch zu Boden werfen, wodurch sie den Zustand Liegend erhält.</p><p><em><strong>Schutzfeld.</strong></em> Als Reaktion, wenn du oder ein Verbündeter, den du innerhalb von 1,5 Metern von dir sehen kannst, von einem Angriff anvisiert wird oder einen Rettungswurf gegen einen Flächeneffekt ablegt, kannst du den Schild verwenden, um eine unbewegliche 1,5-Meter-Emanation zu erzeugen, die von dir ausgeht. Wenn die Emanation erscheint, werden alle Kreaturen oder Objekte, die nicht vollständig darin enthalten sind, in die nächsten unbesetzten Felder außerhalb davon geschoben. Der Angriff oder Flächeneffekt, der die Reaktion ausgelöst hat, hat keine Wirkung auf Kreaturen und Objekte innerhalb der Emanation, die so lange anhält, wie du die Konzentration aufrechterhältst, bis zu 1 Minute. Nichts kann in die oder aus der Emanation gelangen. Eine Kreatur oder ein Objekt innerhalb der Emanation kann nicht durch Angriffe oder Effekte von außen beschädigt werden, noch kann eine Kreatur innerhalb der Emanation etwas außerhalb beschädigen. Sobald diese Eigenschaft verwendet wurde, kann sie erst bei der nächsten Morgendämmerung wieder verwendet werden.</p>",
    "activities": {
      "Forceful Bash": "Wuchtiger Schlag",
      "Protective Field": "Schutzfeld"
    }
  },
  "dmgShield12or300": {
    "name": "Schild, +1, +2 oder +3",
    "description": "<p><em>Rüstung\n(@UUID[Compendium.dnd5e.equipment24.Item.phbarmShield0000]{Schild}),\nUngewöhnlich (+1), Selten (+2) oder Sehr Selten (+3)</em></p><p>Während du diesen Schild hältst, hast du einen Bonus auf die Rüstungsklasse, der durch die Seltenheit des Schildes bestimmt wird, zusätzlich zum normalen Bonus des Schildes auf die RK.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Shield, +1, +2, or +3": "Schild, +1, +2 oder +3"
    }
  },
  "dmgShortCompartm": {
    "name": "Kurzes Fach",
    "description": "<p>Das kurze Fach kann bis zu 60 Pfeile, Bolzen oder ähnliche Objekte aufnehmen.</p>"
  },
  "dmgFwpSilverRave": {
    "name": "Silberner Rabe",
    "description": "<p><em>Siehe\n@UUID[Compendium.dnd5e.equipment24.Item.dmgFigurineOfWon]{Figur der Wunderkraft}</em></p><p>Diese silberne Statuette eines Raben kann für bis zu 12 Stunden zu einem\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmRaven000000000]{Raben}</strong>\nwerden. Sobald sie benutzt wurde, kann sie erst nach 2 Tagen wieder verwendet werden. In Rabenform verleiht dir die Figur die Fähigkeit, <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplAnimalMess]{Tierbotschaft}</em> auf sie zu wirken.</p><section class=\"secret\"\nid=\"secret-1zjsYfZzKHfXhi9j\"><p><strong>Foundry-Hinweis</strong></p><p>Die begrenzten Verwendungen dieses Gegenstands stellen die 2 Tage dar, die erforderlich sind, bevor die Figur wieder verwendet werden kann.</p></section>"
  },
  "dmgDmtSkull00000": {
    "name": "Schädel",
    "description": "<p>Ein\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.dmgAvatarofDeath]{Avatar des Todes}</strong> erscheint in einem unbesetzten Feld so nah wie möglich bei dir. Der Avatar zielt mit seinen Angriffen nur auf dich, erscheint als gespenstisches Skelett, gekleidet in eine zerfetzte schwarze Robe und trägt eine spektrale Sense. Der Avatar verschwindet, wenn er auf 0 Trefferpunkte fällt oder du stirbst. Wenn ein Verbündeter von dir dem Avatar Schaden zufügt, beschwört dieser Verbündete einen weiteren\n<strong>Avatar des Todes</strong>. Der neue Avatar erscheint in einem unbesetzten Feld so nah wie möglich bei diesem Verbündeten und zielt mit seinen Angriffen nur auf diesen Verbündeten. Du und deine Verbündeten können als Folge dieses Ziehens jeweils nur einen Avatar beschwören. Eine Kreatur, die von einem Avatar getötet wurde, kann nicht wiederbelebt werden.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgSpellScroll00": {
    "name": "Zauberrolle"
  },
  "dmgSpellScroll1s": {
    "name": "Zauberrolle, 1. Grad"
  },
  "dmgSpellScroll2n": {
    "name": "Zauberrolle, 2. Grad"
  },
  "dmgSpellScroll3r": {
    "name": "Zauberrolle, Grad 3"
  },
  "dmgSpellScroll4t": {
    "name": "Zauberrolle, Grad 4"
  },
  "dmgSpellScroll5t": {
    "name": "Zauberrolle, Grad 5"
  },
  "dmgSpellScroll6t": {
    "name": "Zauberrolle, Grad 6"
  },
  "dmgSpellScroll7t": {
    "name": "Zauberrolle, Grad 7"
  },
  "dmgSpellScroll8t": {
    "name": "Zauberrolle, Grad 8"
  },
  "dmgSpellScroll9t": {
    "name": "Zauberrolle, Grad 9"
  },
  "phbagCantripScro": {
    "name": "Zauberrolle, Zaubertrick",
    "description": "<p>Eine <em>Zauberrolle</em> (Zaubertrick) oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbagSpellScroll]{Zauberrolle\n(Grad 1)} ist ein magischer Gegenstand, der die Worte eines Zaubertricks bzw. eines Zaubers des 1. Grades enthält, bestimmt vom Erschaffer der Rolle. Wenn der Zauber auf der Zauberliste deiner Klasse steht, kannst du die Rolle lesen und den Zauber mit seiner normalen Zauberzeit und ohne Materialkomponenten wirken.</p><p>Wenn der Zauber einen Rettungswurf oder einen Angriffswurf erfordert,\nbeträgt die SG für den Zauberrettungswurf 13 und der Angriffsbonus +5. Die Rolle\nzerfällt, sobald der Zauber gewirkt wurde.</p>"
  },
  "dmgSpellScrollCa": {
    "name": "Zauberrolle, Zaubertrick"
  },
  "phbagSpellScroll": {
    "name": "Zauberrolle, Grad 1",
    "description": "<p>Eine @UUID[Compendium.dnd5e.equipment24.Item.phbagCantripScro]{Zauberrolle\n(Zaubertrick)} oder <em>Zauberrolle</em> (Grad 1) ist ein magischer Gegenstand, der\ndie Worte eines Zaubertricks bzw. eines Zaubers des 1. Grades enthält, bestimmt vom\nErschaffer der Rolle. Wenn der Zauber auf der Zauberliste deiner Klasse steht, kannst du\ndie Rolle lesen und den Zauber mit seiner normalen Zauberzeit und\nohne Materialkomponenten wirken.</p><p>Wenn der Zauber einen\nRettungswurf oder einen Angriffswurf erfordert, beträgt die SG für den Zauberrettungswurf 13 und der Angriffsbonus\n+5. Die Rolle zerfällt, sobald der Zauber gewirkt wurde.</p>"
  },
  "dmgLolthsSting00": {
    "name": "Spinnenstich",
    "description": "<p><em>Verletzungsgift</em></p><p>Eine Kreatur, die Lolths Stich ausgesetzt ist, muss\neinen Rettungswurf auf Konstitution gegen SG 13 bestehen oder ist 1 Stunde lang vom\nZustand &amp;reference[Poisoned apply=false] betroffen. Wenn die Kreatur\nden Rettungswurf um 5 oder mehr verfehlt, ist die Kreatur auf diese Weise vergiftet auch vom\nZustand &amp;Reference[Unconscious apply=false] betroffen. Die Kreatur erwacht,\nwenn sie Schaden erleidet oder wenn eine andere Kreatur eine\nAktion aufwendet, um sie wachzurütteln.</p>",
    "activities": {
      "Use Poison": "Gift einsetzen"
    }
  },
  "dmgSpikedPit0000": {
    "name": "Stachelgrube",
    "description": "<div><p><em>Tödliche Falle (Stufen 1–4)</em></p><p><strong>Auslöser:</strong>\nEine Kreatur betritt den Deckel der Grube</p><p><strong>Dauer:</strong>\nAugenblicklich</p><p>Eine 3 Meter tiefe Grube hat einen aufklappbaren Deckel, der aus\nMaterial besteht, das identisch mit dem umgebenden Boden ist. Wenn eine Kreatur den\nDeckel betritt, schwingt er wie eine Falltür auf, wodurch die Kreatur in\ndie Grube fällt, die am Boden geschärfte Holz- oder Metallspieße hat. Der Deckel\nbleibt danach offen.</p><p>Eine Kreatur, die in die Grube fällt, landet am\nBoden und erleidet 3 (1W6) Wuchtschaden durch den Sturz plus 9 (2W8)\nStichschaden durch die Spieße.</p><p><em><strong>Entdecken und\nEntschärfen.</strong></em> Als Studienaktion kann eine Kreatur den\nBodenabschnitt, der den Deckel der Grube bildet, untersuchen und eine [[/check inv 15]]\nProbe ablegen, wobei sie die Grube bei einem erfolgreichen Wurf entdeckt. Sobald die versteckte Grube\nentdeckt wurde, kann ein Eisenspieß oder ein ähnlicher Gegenstand zwischen den\nDeckel der Grube und den umgebenden Boden geklemmt werden, um zu verhindern, dass sich der Deckel öffnet,\ndadurch wird er sicher zu überqueren. Der Deckel kann auch mit einem\n<em>Arkanes Schloss</em>-Zauber oder ähnlicher\nMagie verschlossen gehalten werden.</p><p><em><strong>Entkommen.</strong></em> Eine Kreatur benötigt eine Kletterbewegungsrate,\nKletterausrüstung oder Magie wie einen <em>Spinnenklettern</em>-Zauber, um\ndie glatten Wände der Grube zu erklimmen. Du kannst das Entkommen aus der Grube erleichtern,\nindem du Risse in den Wänden hinzufügst, die groß genug sind, um als Hand- und\nFußgriffe zu dienen.</p><p><em><strong>Auf höheren Stufen.</strong></em> Du kannst die Falle\nfür höhere Stufen anpassen, indem du die Tiefe und den Schaden der Grube erhöhst,\nwie in der folgenden\nTabelle gezeigt.</p><table><thead><tr><th><p>Stufen</p></th><th><p>Grubentiefe</p></th><th><p>Schaden</p></th></tr></thead><tbody><tr><td><p>5–10</p></td><td><p>9\nMeter</p></td><td><p>10 (3W6) Wuchtschaden plus 13 (3W8)\nStichschaden</p></td></tr><tr><td><p>11–16</p></td><td><p>18\nMeter</p></td><td><p>21 (6W6) Wuchtschaden plus 36 (8W8)\nStichschaden</p></td></tr><tr><td><p>17–20</p></td><td><p>36\nMeter</p></td><td><p>42 (12W6) Wuchtschaden plus 57 (13W8)\nStichschaden</p></td></tr></tbody></table></div>",
    "activities": {
      "Trigger (1-4)": "Auslöser (1-4)",
      "Trigger (11-16)": "Auslöser (11-16)",
      "Trigger (17-20)": "Auslöser (17-20)",
      "Trigger (5-10)": "Auslöser (5-10)"
    }
  },
  "phbagSpikesIron0": {
    "name": "Spieße, Eisen",
    "description": "<p>Eisenspieße werden in Bündeln zu je zehn Stück geliefert. Als Nutzungsaktion kannst du einen\nstumpfen Gegenstand, wie einen Leichten Hammer, verwenden, um einen Spieß in Holz, Erde\noder ein ähnliches Material zu schlagen. Du kannst dies tun, um eine Tür zu verkeilen oder um dann ein\nSeil oder eine Kette an den Spieß zu binden.</p>"
  },
  "dmgDmtStar000000": {
    "name": "Stern",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "phbagString00000": {
    "name": "Schnur",
    "description": "<p>Eine Schnur ist 3 Meter lang. Du kannst als Nutzungsaktion einen Knoten hineinbinden.</p>"
  },
  "dmgDmtSun0000000": {
    "name": "Sonne",
    "description": "<p> Ein magischer Gegenstand (vom SL gewählt) erscheint bei dir. Zusätzlich\nerhältst du täglich bei Sonnenaufgang 10 temporäre Trefferpunkte, bis du stirbst.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgSwordOfLifeSt": {
    "name": "Schwert des Lebensraubs",
    "description": "<p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepGlaive0000]{Glefe},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Großschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepRapier0000]{Rapier},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel} oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepShortsword]{Kurzschwert}),\nSelten (Benötigt Einstimmung)</em></p><p>Wenn du eine Kreatur mit dieser\nmagischen Waffe angreifst und bei dem Angriffswurf eine 20 auf dem W20 würfelst, erleidet das Ziel\nzusätzlich 15 nekrotischen Schaden, wenn es kein Konstrukt oder Untoter ist,\nund du erhältst temporäre Trefferpunkte in Höhe des erlittenen nekrotischen Schadens.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Sword of Life Stealing": "Schwert des Lebensraubs"
    }
  },
  "dmgSwordOfSharpn": {
    "name": "Schwert der Schärfe",
    "description": "<p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepGlaive0000]{Glefe},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Großschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert} oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel}), Sehr\nSelten (Benötigt Einstimmung)</em></p><p>Wenn du ein Objekt mit dieser\nmagischen Waffe angreifst und triffst, maximierst du deine Waffenschadenswürfel gegen das\nZiel.</p><p>Wenn du eine Kreatur mit dieser Waffe angreifst und bei dem Angriffswurf eine 20 auf\ndem W20 würfelst, erleidet das Ziel zusätzlich 14 Hiebschaden\nund erhält <span class=\"no-break\">1 &amp;Reference[Exhaustion]{Erschöpfung}</span>\nErschöpfungsstufe.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Sword of Sharpness": "Schwert der Schärfe"
    }
  },
  "dmgSwordOfWoundi": {
    "name": "Schwert der Verwundung",
    "description": "<p><em>Waffe\n(@UUID[Compendium.dnd5e.equipment24.Item.phbwepGlaive0000]{Glefe},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Großschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepRapier0000]{Rapier},\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel} oder\n@UUID[Compendium.dnd5e.equipment24.Item.phbwepShortsword]{Kurzschwert}),\nSelten (Benötigt Einstimmung)</em></p><p>Wenn du eine Kreatur mit einem\nAngriff triffst, der diese magische Waffe verwendet, erleidet das Ziel zusätzlich 2W6 nekrotischen\nSchaden und muss einen Rettungswurf auf Konstitution gegen SG 15 bestehen oder ist 1 Stunde lang nicht\nin der Lage, Trefferpunkte zurückzugewinnen. Das Ziel wiederholt den Rettungswurf am Ende\njedes seiner Züge und beendet den Effekt bei einem Erfolg.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Sword of Wounding": "Schwert der Verwundung",
      "Sword of Wounding Save": "Rettungswurf des Schwertes der Verwundung"
    }
  },
  "dmgDmtTalons0000": {
    "name": "Klauen",
    "description": "<p> Jeder magische Gegenstand, den du trägst oder bei dir hast, zerfällt. Artefakte in deinem\nBesitz verschwinden stattdessen.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgTanBagofTrick": {
    "name": "Beigefarbener Beutel der Tricks",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Dieser Beutel aus grauem, rostfarbenem oder beigefarbenem Stoff erscheint leer. Wenn du jedoch in den Beutel greifst, offenbart sich ein kleines, flauschiges Objekt.</p><p>Du kannst eine Magie-Aktion ausführen, um das flauschige Objekt aus dem Beutel zu ziehen und es bis zu 6 Meter weit zu werfen. Wenn das Objekt landet, verwandelt es sich in eine Kreatur, die du durch einen Wurf auf der Tabelle bestimmst, die der Farbe des Beutels entspricht. Siehe @UUID[Compendium.dnd5e.content24.JournalEntry.mmMonstersAtoZ00]{Monster} für den Werteblock der Kreatur. Die Kreatur verschwindet bei der nächsten Morgendämmerung oder wenn sie auf 0 Trefferpunkte reduziert wird.</p><p>Die Kreatur ist dir und deinen Verbündeten gegenüber Freundlich und handelt sofort nach dir auf deinem Initiativwert. Du kannst eine Bonusaktion ausführen, um zu befehlen, wie sich die Kreatur bewegt und welche Aktion sie in ihrem nächsten Zug ausführt, z. B. einen Feind angreifen. In Ermangelung solcher Befehle handelt die Kreatur auf eine Weise, die ihrer Natur entspricht.</p><p>Sobald drei flauschige Objekte aus dem Beutel gezogen wurden, kann der Beutel bis zur nächsten Morgendämmerung nicht wieder verwendet werden.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgTanBagOfTrick rollable]</p></div>",
    "activities": {
      "Pull and Throw": "Ziehen und Werfen"
    }
  },
  "phbagTent0000000": {
    "name": "Zelt"
  },
  "phbgstThreedrago": {
    "name": "Drei-Drachen-Ante",
    "description": "<p><strong>Attribut:</strong> Weisheit</p><p class=\"phb-meta\"><strong>Nutzen:</strong> Erkennen, ob jemand schummelt (SG 10), oder das Spiel gewinnen (SG 20)</p>",
    "activities": {
      "Catch Cheating": "Schummeln erkennen",
      "Play to Win": "Auf Sieg spielen"
    }
  },
  "dmgDmtThrone0000": {
    "name": "Thron",
    "description": "<p>Du erhältst Übung und &amp;Reference[Expertise]{Expertise} in deiner Wahl von Geschichte, Einsicht, Einschüchterung oder Überzeugen. Zusätzlich erhältst du rechtmäßigen Besitz einer kleinen Festung irgendwo in der Welt. Die Festung beherbergt jedoch derzeit ein oder mehrere Monster, die vertrieben werden müssen, bevor du die Festung als deine beanspruchen kannst.</p><section id=\"secret-KpjqOSPJGy0Ec8YA\" class=\"secret\"><p><strong>Foundry-Hinweis</strong></p><p>Im Gegensatz zu den anderen Karten aus dem Stapel wird dieser Gegenstand sich bei Gebrauch <em>nicht</em> selbst zerstören, um als Symbol des Besitzes der Festung zu dienen.</p></section>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgThunderousGre": {
    "name": "Donnernder Großknüppel",
    "description": "<p><em>Waffe (@UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatclub0]{Großknüppel}), Sehr Selten (Benötigt Einstimmung)</em></p><p>Solange du auf diese magische Waffe eingestimmt bist, beträgt deine Stärke 20, es sei denn, deine Stärke ist bereits gleich oder größer als dieser Wert. Die Waffe verursacht zusätzlichen 1W8 Donnerschaden an jeder Kreatur, die sie trifft, und zusätzlichen 3W8 Donnerschaden an Objekten, die sie trifft und die nicht getragen oder gehalten werden.</p><p>Die Waffe hat die folgenden zusätzlichen Eigenschaften.</p><p><em><strong>Donnerschlag.</strong></em> Als Magie-Aktion kannst du die Waffe gegen eine harte Oberfläche schlagen, um einen lauten Donnerschlag zu erzeugen, der bis zu 90 Meter weit hörbar ist. Du erzeugst außerdem einen 9-Meter-Kegel aus donnernder Energie. Jede Kreatur in dem Kegel muss einen SG 15 Stärke-Rettungswurf bestehen oder erhält den Zustand Liegend. Nichtmagische Objekte in dem Kegel, die nicht getragen oder gehalten werden, erleiden [[/damage 3d8 type=thunder]] Schaden.</p><p><em><strong>Erdbeben.</strong></em> Als Magie-Aktion kannst du die Waffe gegen den Boden schlagen, um eine intensive seismische Störung in einem Kreis mit 15 Metern Radius, zentriert auf den Aufprallpunkt, zu erzeugen. Strukturen, die in diesem Bereich mit dem Boden in Kontakt stehen, erleiden 50 Wuchtschaden, und jede Kreatur auf dem Boden in diesem Bereich muss einen SG 20 Geschicklichkeits-Rettungswurf bestehen oder erhält den Zustand Liegend. Wenn diese Kreatur auch konzentriert, muss sie einen [[/save con 20]] Rettungswurf bestehen oder ihre Konzentration wird gebrochen. Zusätzlich kannst du eine 9 Meter tiefe, 3 Meter breite Spalte im Boden an einer beliebigen Stelle in dem Bereich öffnen lassen. Jede Kreatur an einer Stelle, an der sich die Spalte öffnet, muss einen SG 20 Geschicklichkeits-Rettungswurf bestehen; bei einem misslungenen Rettungswurf fällt sie in die Spalte, bei einem erfolgreichen Rettungswurf bewegt sie sich mit dem Rand der Spalte. Jede Struktur an einer Stelle, an der sich die Spalte öffnet, stürzt in die Spalte. Sobald du diese Eigenschaft benutzt hast, kann sie erst bei der nächsten Morgendämmerung wieder verwendet werden.</p>",
    "activities": {
      "Clap of Thunder": "Donnerschlag",
      "Earthquake: Concentration Save": "Erdbeben: Konzentrations-Rettungswurf",
      "Earthquake: Fissure": "Erdbeben: Spalte",
      "Earthquake: Object Damage": "Erdbeben: Objektschaden",
      "Earthquake: Save": "Erdbeben: Rettungswurf"
    }
  },
  "dmgTorpor0000000": {
    "name": "Torpor",
    "description": "<p><em>Eingenommenes Gift</em></p><p>Eine Kreatur, die dem Torpor-Gift ausgesetzt ist, muss einen SG 15 Konstitutions-Rettungswurf bestehen oder erhält den Zustand &amp;Reference[Vergiftet] für [[/r 4d6]] Stunden. Die Bewegungsrate der Kreatur ist halbiert, solange die Kreatur auf diese Weise Vergiftet ist.</p>",
    "activities": {
      "Use Poison": "Gift anwenden"
    }
  },
  "dmgViciousWeapon": {
    "name": "Bösartige Waffe",
    "description": "<p><em>Waffe (Einfach oder Militärisch), Selten</em></p><p>Diese magische Waffe verursacht zusätzlichen 2W6 Schaden an jeder Kreatur, die sie trifft. Dieser zusätzliche Schaden ist vom gleichen Typ wie der normale Schaden der Waffe.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Vicious Weapon": "Bösartige Waffe"
    }
  },
  "dmgDmtVoid000000": {
    "name": "Leere",
    "description": "<p>Deine Seele wird aus deinem Körper gezogen und in einem Objekt an einem vom SL gewählten Ort gefangen. Ein oder mehrere mächtige Wesen bewachen den Ort. Solange deine Seele auf diese Weise gefangen ist, ist dein Körper träge, altert nicht mehr und benötigt keine Nahrung, Luft oder Wasser. Ein <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplWish000000]{Wunsch}</em>-Zauber kann deine Seele nicht in deinen Körper zurückbringen, aber der Zauber enthüllt den Ort des Objekts, das deine Seele enthält. Du ziehst keine weiteren Karten.</p>",
    "activities": {
      "Card Effect": "Karteneffekt"
    }
  },
  "dmgVorpalSword00": {
    "name": "Vorpal-Schwert",
    "description": "<p><em>Waffe (@UUID[Compendium.dnd5e.equipment24.Item.phbwepGlaive0000]{Glefe}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepGreatsword]{Zweihänder}, @UUID[Compendium.dnd5e.equipment24.Item.phbwepLongsword0]{Langschwert} oder @UUID[Compendium.dnd5e.equipment24.Item.phbwepScimitar00]{Krummsäbel}), Legendär (Benötigt Einstimmung)</em></p><p>Du erhältst einen +3 Bonus auf Angriffs- und Schadenswürfe, die du mit dieser magischen Waffe machst. Zusätzlich ignoriert die Waffe Resistenz gegen Hiebschaden.</p><p>Wenn du diese Waffe benutzt, um eine Kreatur anzugreifen, die mindestens einen Kopf hat, und eine 20 auf dem W20 für den Angriffswurf würfelst, schneidest du einen der Köpfe der Kreatur ab. Die Kreatur stirbt, wenn sie ohne den verlorenen Kopf nicht überleben kann. Eine Kreatur ist immun gegen diesen Effekt, wenn sie Immunität gegen Hiebschaden hat, wenn sie keinen Kopf hat oder braucht, oder wenn der SL entscheidet, dass die Kreatur zu groß ist, um ihren Kopf mit dieser Waffe abzuschneiden. Eine solche Kreatur erleidet stattdessen zusätzlichen 30 Hiebschaden durch den Treffer. Wenn die Kreatur Legendäre Resistenz hat, kann sie eine tägliche Anwendung dieser Eigenschaft aufwenden, um den Verlust ihres Kopfes zu vermeiden und stattdessen den zusätzlichen Schaden zu erleiden.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Vorpal Sword": "Vorpal-Schwert"
    }
  },
  "dmg1WandOfTheWar": {
    "name": "Zauberstab des Kriegsmagiers, +1, +2 oder +3",
    "description": "<p><em>@UUID[Compendium.dnd5e.equipment24.Item.phbafcWand000000]{Zauberstab}, Ungewöhnlich (+1), Selten (+2) oder Sehr Selten (+3) (Benötigt Einstimmung durch einen Zauberwirker)</em></p><p>Solange du diesen Zauberstab hältst, erhältst du einen Bonus auf Zauberangriffswürfe, der durch die Seltenheit des Zauberstabs bestimmt wird. Zusätzlich ignorierst du &amp;Reference[Halbe Deckung], wenn du einen Zauberangriffswurf machst.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Wand of the War Mage, +1, +2, or +3": "Zauberstab des Kriegsmagiers, +1, +2 oder +3"
    }
  },
  "phbWaterpint0000": {
    "name": "Wasser (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "2nlARB78sJo8Z2W6": {
    "name": "Wasser (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "It6m0vGGZwCf9E7r": {
    "name": "Wasser (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "Qgekp4euuB5S9tpe": {
    "name": "Wasser (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "aWEY8Xh0wfn69Q1w": {
    "name": "Wasser (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "67ScUFYRuMU0J2Wt": {
    "name": "Wasser (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "dmgWaterRingOfEl": {
    "name": "Wasserring der Elementarbefehlsgewalt",
    "description": "<p>Ring, Legendär (Benötigt Einstimmung)</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> ist mit einer der vier Elementarebenen verbunden. Der SL wählt oder bestimmt zufällig die verbundene Ebene. Zum Beispiel ist ein <em>Ring der Elementarbefehlsgewalt</em> (Luft) mit der Elementarebene der Luft verbunden.</p><p>Jeder <em>Ring der Elementarbefehlsgewalt</em> hat die folgenden zwei Eigenschaften:</p><p><strong>Elementarfluch.</strong> Während du den Ring trägst, hast du Vorteil auf Angriffswürfe gegen Elementare und sie haben Nachteil auf Angriffswürfe gegen dich.</p><p><strong>Elementarer Zwang.</strong> Während du den Ring trägst, kannst du eine Magie-Aktion ausführen, um zu versuchen, ein Elementar, das du innerhalb von 18 Metern von dir siehst, zu zwingen. Das Elementar macht einen SG 18 Weisheits-Rettungswurf. Bei einem misslungenen Rettungswurf erhält das Elementar den Zustand &amp;Reference[Bezaubert apply=false] bis zum Beginn deines nächsten Zuges, und du bestimmst, was es mit seiner Bewegung und Aktion in seinem nächsten Zug tut.</p><p><em><strong>Elementarer Fokus.</strong></em> Während du den Ring trägst, profitierst du von zusätzlichen Eigenschaften, die der verbundenen Elementarebene des Rings entsprechen:</p><p><strong>Wasser.</strong> Du kennst Aquan, du erhältst eine Schwimmbewegungsrate von 18 Metern und du kannst unter Wasser atmen.</p><p><em><strong>Zauberwirken.</strong></em> Der Ring hat 5 Ladungen und erhält täglich bei Sonnenaufgang 1W4 + 1 verbrauchte Ladungen zurück. Während du den Ring trägst, kannst du einen Zauber daraus wirken. Wähle den Zauber aus der Liste der verfügbaren Zauber basierend auf der Elementarebene, mit der der Ring verbunden ist, wie in der folgenden Tabelle gezeigt. Die Tabelle gibt an, wie viele Ladungen du aufwenden musst, um den Zauber zu wirken, der einen SG von 18 hat.</p><table><thead><tr><th style=\"min-width:50px\"><p>Ebene</p></th><th><p>Zauber (Ladungen)</p></th></tr></thead><tbody><tr><td><p>Wasser</p></td><td><p>@UUID[Compendium.dnd5e.spells24.Item.phbsplCreateorDe]{Wasser erschaffen oder zerstören} (1 Ladung), @UUID[Compendium.dnd5e.spells24.Item.phbsplIceStorm00]{Eissturm} (2 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplTsunami000]{Tsunami} (5 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplWallofIce0]{Eiswand} (3 Ladungen), @UUID[Compendium.dnd5e.spells24.Item.phbsplWaterWalk0]{Wasserwandeln} (2 Ladungen)</p></td></tr></tbody></table>",
    "activities": {
      "Elemental Compulsion": "Elementarer Zwang"
    }
  },
  "dmgspWaterfresh0": {
    "name": "Wasser, frisch (Pinte)",
    "description": "<p>Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[Dehydration]{Dehydrierung}.</p>",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "dmgspWatersalt00": {
    "name": "Wasser, Salzwasser (Pinte)",
    "activities": {
      "Consume": "Verbrauchen"
    }
  },
  "dmgWeaponOfWarni": {
    "name": "Waffe der Warnung",
    "description": "<p><em>Waffe (Einfach oder Militärisch), Ungewöhnlich (Benötigt Einstimmung)</em></p><p>Solange diese Waffe in deiner Reichweite ist und du auf sie eingestimmt bist, erhalten du und Verbündete innerhalb von 9 Metern um dich herum die folgenden Vorteile.</p><p><strong>Alarm.</strong> Die Waffe weckt jedes Subjekt, das natürlich schläft, auf magische Weise, wenn der Kampf beginnt. Dieser Vorteil weckt ein Subjekt nicht aus magisch induziertem Schlaf.</p><p><strong>Übernatürliche Bereitschaft.</strong> Jedes Subjekt hat Vorteil auf seine Initiativwürfe.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE cite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Weapon of Warning": "Waffe der Warnung"
    }
  },
  "dmgWeapon12or300": {
    "name": "Waffe, +1, +2 oder +3",
    "description": "<p><em>Waffe (Einfach oder Militärisch), Ungewöhnlich (+1), Selten (+2) oder Sehr Selten (+3)</em></p><p>Du erhältst einen Bonus auf Angriffs- und Schadenswürfe, die mit dieser magischen Waffe gemacht werden. Der Bonus wird durch die Seltenheit der Waffe bestimmt.</p><p>@Embed[Compendium.dnd5e.content24.JournalEntry.dmgFoundryRefere.JournalEntryPage.Ok4iCgD25ENgoRxE\ncite=false caption=false classes=\"hide-in-embed\"]</p>",
    "activities": {
      "Weapon, +1, +2, or +3": "Waffe, +1, +2 oder +3"
    }
  },
  "dmgWyvernPoison0": {
    "name": "Wyverngift",
    "description": "<p><em>Verletzungsgift</em></p><p>Eine Kreatur, die Wyverngift ausgesetzt ist, muss einen Rettungswurf auf Konstitution SG 14 ablegen. Bei einem misslungenen Rettungswurf erleidet sie 24 (7W6) Giftschaden, bei einem erfolgreichen Rettungswurf halb so viel Schaden.</p>",
    "activities": {
      "Use Poison": "Gift verwenden"
    }
  },
  "dmgApparatusOfKw": {
    "name": "Apparat des Krebses",
    "description": "<div><p><em>Wundersamer Gegenstand, Legendär</em></p><p>Dieser Gegenstand erscheint zunächst als ein versiegeltes Eisenfass, das 225 kg wiegt. Das Fass hat einen versteckten Verschluss, der mit einem erfolgreichen [[/check ability=int skill=inv dc=20]]-Wurf gefunden werden kann. Das Lösen des Verschlusses öffnet eine Luke an einem Ende des Fasses, wodurch zwei mittelgroße oder kleinere Kreaturen hineinkriechen können. Zehn Hebel sind in einer Reihe am anderen Ende angebracht, jeder in einer neutralen Position, fähig, sich nach oben oder unten zu bewegen. Wenn bestimmte Hebel betätigt werden, verwandelt sich der Apparat, um einem riesigen Hummer zu ähneln.</p><p>Der\n<em>@UUID[Compendium.dnd5e.actors24.Actor.dmgApparatusofKw]{Apparat des Krebses}</em> ist ein Großes Objekt mit den folgenden Werten: RK 20; TP\n200; Bewegungsrate 9 m, Schwimmbewegungsrate 9 m (oder 0 m für beides, wenn die Beine nicht\nausgefahren sind); Immunität gegen Gift- und Psychischen Schaden.</p><p>@Embed[Compendium.dnd5e.actors24.Actor.dmgApparatusofKw\ncaption=false]</p></div>",
    "activities": {
      "Move Levers": "Hebel bewegen"
    }
  },
  "dmgBagOfBeans000": {
    "name": "Sack voller Bohnen",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Dieser schwere Stoffbeutel enthält bei Fund 3W4 trockene Bohnen. Der Beutel wiegt 0,25 kg, unabhängig davon, wie viele Bohnen er enthält, und wird zu einem\n@UUID[Compendium.dnd5e.equipment24.Item.phbagPouch000000]{nichtmagischen Gegenstand},\nwenn er keine Bohnen mehr enthält.</p><p>Wenn du eine oder mehrere Bohnen\naus dem Beutel schüttest, explodieren sie in einer Kugel mit 3 Metern Radius, die auf ihnen zentriert ist.\nAlle ausgeschütteten Bohnen werden bei der Explosion zerstört, und jede Kreatur in\nder Kugel, einschließlich dir, muss einen Rettungswurf auf Geschicklichkeit SG 15 ablegen. Bei einem\nmisslungenen Rettungswurf erleidet sie 5W4 Wuchtschaden, bei einem erfolgreichen\nRettungswurf halb so viel Schaden.</p><p>Wenn du eine Bohne aus dem Beutel nimmst, sie in Erde oder Sand\npflanzt und dann gießt, verschwindet die Bohne und erzeugt 1 Minute\nspäter einen Effekt aus dem Boden, wo sie gepflanzt wurde. Der SL kann einen Effekt\naus der folgenden Tabelle wählen oder ihn zufällig\nbestimmen.</p><details><summary>Effekt des Sacks voller Bohnen (zum Ausklappen\nklicken)</summary><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgBagOfBeansEff\nrollable caption=false]</p></details><p></p><section class=\"secret\"\nid=\"secret-Ksf2KyYXOK1HhLmm\"><p><strong>Foundry-Hinweis</strong></p><p>Nach\nErhalt dieses Gegenstands kann die Aktivität <strong>Bohnen zählen</strong> verwendet\nwerden, um die Anzahl der enthaltenen trockenen Bohnen zu bestimmen\nund die Anzahl der Verwendungen dieses Gegenstands entsprechend festzulegen.</p></section>",
    "activities": {
      "Count Beans": "Bohnen zählen",
      "Dump Beans": "Bohnen ausschütten",
      "Plant Bean": "Bohne pflanzen"
    }
  },
  "phbagBell0000000": {
    "name": "Glocke",
    "description": "<p>Wenn eine Glocke als Aktion zum Nutzen geläutet wird, erzeugt sie einen Klang, der bis zu 18 Meter weit zu hören ist.</p>"
  },
  "GDF2kmAUO8B5UEEJ": {
    "name": "Glocke",
    "description": "<p>Wenn eine Glocke als Aktion zum Nutzen geläutet wird, erzeugt sie einen Klang, der bis zu 18 Meter weit zu hören ist.</p>"
  },
  "NmDigoAOjCENDrea": {
    "name": "Glocke",
    "description": "<p>Wenn eine Glocke als Aktion zum Nutzen geläutet wird, erzeugt sie einen Klang, der bis zu 18 Meter weit zu hören ist.</p>"
  },
  "phbagBlockandTac": {
    "name": "Flaschenzug",
    "description": "<p>Ein Flaschenzug ermöglicht es dir, das bis zu Vierfache des Gewichts zu heben, das du normalerweise heben kannst.</p>"
  },
  "dmgBowlOfCommand": {
    "name": "Schale zur Befehligung von Wasserelementaren",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten</em></p></div><p>Solange diese Schale mit Wasser gefüllt ist und du dich innerhalb von 1,5 Metern davon befindest, kannst du eine Magie-Aktion ausführen, um ein\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmWaterElemental]{Wasserelementar}</strong> zu beschwören. Das Elementar erscheint in einem unbesetzten Raum so nah\nan der Schale wie möglich, versteht deine Sprachen, gehorcht deinen Befehlen,\nund ist sofort nach dir an deiner Initiative an der Reihe. Das\nElementar verschwindet nach 1 Stunde, wenn es stirbt, oder wenn du es als\nBonusaktion entlässt. Die Schale kann auf diese Weise erst wieder nach der nächsten\nMorgendämmerung verwendet werden.</p><p>Die Schale hat einen Durchmesser von etwa 30 cm und ist halb so tief. Sie\nfasst etwa 11 Liter.</p>"
  },
  "dmgBrassHornOfVa": {
    "name": "Messinghorn von Valhalla",
    "description": "<p><em>Siehe: @UUID[Compendium.dnd5e.equipment24.Item.dmgHornofValhall]{Horn\nvon Valhalla}</em></p><p><em>Voraussetzung: Übung mit allen Einfachen\nWaffen</em></p><p><em>Geister: 3</em></p><p>Du kannst eine Magie-Aktion\nausführen, um dieses Horn zu blasen. Als Reaktion erscheinen Kriegergeister aus der Ebene von Ysgard\nin unbesetzten Räumen innerhalb von 18 Metern von dir. Jeder Geist verwendet den\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmBerserker00000]{Berserker}</strong>\nWerteblock und kehrt nach 1 Stunde oder wenn er auf 0 Trefferpunkte fällt nach\nYsgard zurück. Die Geister sehen aus wie lebende, atmende Krieger, und sie haben\nImmunität gegen die Zustände &amp;Reference[Charmed apply=false] (Bezaubert) und\n&amp;Reference[Frightened apply=false] (Verängstigt). Sobald du das Horn benutzt hast,\nkann es erst nach 7 Tagen wieder verwendet werden.</p><p>Wenn du das\nHorn bläst, ohne seine Voraussetzung zu erfüllen, greifen dich die beschworenen Geister an. Wenn\ndu die Voraussetzung erfüllst, sind sie dir und deinen Verbündeten gegenüber Freundlich und\nfolgen deinen Befehlen.</p>",
    "activities": {
      "Summon Warriors": "Krieger beschwören"
    }
  },
  "dmgBrazierOfComm": {
    "name": "Kohlenbecken zur Befehligung von Feuerelementaren",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten</em></p></div><p>Solange du dich innerhalb von 1,5 Metern\ndieses Kohlenbeckens befindest, kannst du eine Magie-Aktion ausführen, um ein\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmFireElemental0]{Feuerelementar}</strong> zu beschwören. Das Elementar erscheint in einem unbesetzten Raum so nah\nam Kohlenbecken wie möglich, versteht deine Sprachen, gehorcht deinen\nBefehlen, und ist sofort nach dir an deiner Initiative\nan der Reihe. Das Elementar verschwindet nach 1 Stunde, wenn es stirbt, oder wenn du\nes als Bonusaktion entlässt. Das Kohlenbecken kann auf diese Weise erst wieder\nnach der nächsten Morgendämmerung verwendet werden.</p>"
  },
  "dmgBronzeHornOfV": {
    "name": "Bronzehorn von Valhalla",
    "description": "<p><em>Siehe: @UUID[Compendium.dnd5e.equipment24.Item.dmgHornofValhall]{Horn\nvon Valhalla}</em></p><p><em>Voraussetzung: Übung mit allen Mittleren\nRüstungen</em></p><p><em>Geister: 4</em></p><p>Du kannst eine Magie-Aktion ausführen,\num dieses Horn zu blasen. Als Reaktion erscheinen Kriegergeister aus der Ebene von Ysgard\nin unbesetzten Räumen innerhalb von 18 Metern von dir. Jeder Geist verwendet den\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmBerserker00000]{Berserker}</strong>\nWerteblock und kehrt nach 1 Stunde oder wenn er auf 0 Trefferpunkte fällt nach\nYsgard zurück. Die Geister sehen aus wie lebende, atmende Krieger, und sie haben\nImmunität gegen die Zustände &amp;Reference[Charmed apply=false] (Bezaubert) und\n&amp;Reference[Frightened apply=false] (Verängstigt). Sobald du das Horn benutzt hast,\nkann es erst nach 7 Tagen wieder verwendet werden.</p><p>Wenn du das\nHorn bläst, ohne seine Voraussetzung zu erfüllen, greifen dich die beschworenen Geister an. Wenn\ndu die Voraussetzung erfüllst, sind sie dir und deinen Verbündeten gegenüber Freundlich und\nfolgen deinen Befehlen.</p>",
    "activities": {
      "Summon Warriors": "Krieger beschwören"
    }
  },
  "dmgBroomOfFlying": {
    "name": "Besen des Fliegens",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich (Benötigt\nEinstimmung)</em></p></div><p>Dieser Holzbesen funktioniert wie ein gewöhnlicher\nBesen, bis du dich darauf stellst und eine Magie-Aktion ausführst, um ihn unter\ndir schweben zu lassen, woraufhin er in der Luft geritten werden kann. Er hat eine Flugbewegungsrate\nvon 15 Metern. Er kann bis zu 180 kg tragen, aber seine Flugbewegungsrate wird zu 9\nMetern, wenn er über 90 kg trägt. Der Besen hört auf zu schweben, wenn du\nlandest oder wenn du ihn nicht mehr reitest.</p><p>Als Magie-Aktion kannst du\nden Besen allein zu einem Ziel innerhalb von 1,5 Kilometern von dir schicken, wenn\ndu den Ort nennst und mit ihm vertraut bist. Der Besen kehrt zu\ndir zurück, wenn du eine Magie-Aktion ausführst und ein Befehlswort verwendest, falls der Besen\nnoch innerhalb von 1,5 Kilometern von dir ist.</p>",
    "activities": {
      "Activate Broom": "Besen aktivieren",
      "Send Alone or Recall": "Allein senden oder zurückrufen"
    }
  },
  "dmgCarpetOfFlyin": {
    "name": "Fliegender Teppich",
    "description": "<div><p><em>Wundersamer Gegenstand, Sehr Selten</em></p></div><p>Du kannst diesen\nTeppich schweben und fliegen lassen, indem du eine Magie-Aktion ausführst und das\nBefehlswort des Teppichs verwendest. Er bewegt sich nach deinen Anweisungen, wenn du\ndich innerhalb von 9 Metern von ihm befindest.</p><p>Vier Größen von <em>Fliegenden Teppichen</em> existieren. Der SL\nwählt die Größe eines bestimmten Teppichs oder bestimmt sie zufällig, indem er auf\nder folgenden Tabelle würfelt. Ein Teppich kann bis zum Doppelten des in der Tabelle\nangegebenen Gewichts tragen, aber seine Flugbewegungsrate halbiert sich, wenn er mehr als seine normale\nKapazität trägt.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgCarpetOfFlyin\nrollable]</p><section class=\"secret\"\nid=\"secret-T3avxyNy4el35GqZ\"><p><strong>Foundry-Hinweis</strong></p><p>Die\nvier bereitgestellten Beschwörungsaktivitäten repräsentieren die möglichen Größen des\nTeppichs. Wenn der SL eine Größe wählt, sollten die drei Aktivitäten,\ndie den anderen Größen entsprechen, gelöscht werden.</p></section>",
    "activities": {
      "Activate (3 by 5 ft.)": "Aktivieren (0,9 x 1,5 m)",
      "Activate (4 by 6 ft.)": "Aktivieren (1,2 x 1,8 m)",
      "Activate (5 by 7 ft.)": "Aktivieren (1,5 x 2,1 m)",
      "Activate (6 by 9 ft.)": "Aktivieren (1,8 x 2,7 m)"
    }
  },
  "dmgCenserOfContr": {
    "name": "Rauchfass zur Befehligung von Luftelementaren",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten</em></p></div><p>Während du dieses Rauchfass sanft schwingst,\nkannst du eine Magie-Aktion ausführen, um ein\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmAirElemental00]{Luftelementar}</strong> zu beschwören. Das Elementar erscheint in einem unbesetzten Raum so nah\nam Rauchfass wie möglich, versteht deine Sprachen, gehorcht deinen\nBefehlen, und ist sofort nach dir an deiner Initiative\nan der Reihe. Das Elementar verschwindet nach 1 Stunde, wenn es stirbt, oder wenn du\nes als Bonusaktion entlässt. Das Rauchfass kann auf diese Weise erst wieder\nnach der nächsten Morgendämmerung verwendet werden.</p>"
  },
  "dmgChimeOfOpenin": {
    "name": "Glockenspiel des Öffnens",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten</em></p></div><p>Dieses hohle Metallrohr\nist etwa 30 cm lang und wiegt 0,5 kg. Als Magie-Aktion kannst du\ndas Glockenspiel anschlagen, um\n<em>@UUID[Compendium.dnd5e.spells24.Item.phbsplKnock00000]{Klopfen}</em> zu wirken.\nDas übliche Klopfgeräusch des Zaubers wird durch den klaren, klingelnden\nTon des Glockenspiels ersetzt, der bis zu 90 Meter weit zu hören ist.</p><p>Das Glockenspiel kann\n10 Mal verwendet werden. Nach dem zehnten Mal reißt es und wird unbrauchbar.</p>"
  },
  "phbagClimbersKit": {
    "name": "Kletterausrüstung",
    "description": "<p>Eine Kletterausrüstung enthält Stiefelspitzen, Handschuhe, Haken und ein Klettergeschirr. Als\nAktion zum Nutzen kannst du die Kletterausrüstung verwenden, um dich zu verankern; wenn du\ndies tust, kannst du nicht mehr als 7,5 Meter vom Ankerpunkt fallen, und du kannst dich nicht\nweiter als 7,5 Meter von dort entfernen, ohne den Anker als Bonusaktion zu lösen.</p>"
  },
  "dmgCrystalBall00": {
    "name": "Kristallkugel",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten (Benötigt Einstimmung)</em></p><p>Während\ndu diese Kristallkugel berührst, kannst du damit\n@UUID[Compendium.dnd5e.spells24.Item.phbsplScrying000]{Ausspähung} (Rettungswurf SG\n17) wirken.</p>"
  },
  "dmgMindReadingCr": {
    "name": "Kristallkugel der Gedankenlesung",
    "description": "<div><p><em>Wundersamer Gegenstand, Legendär (Benötigt\nEinstimmung)</em></p></div><p>Während du diese Kristallkugel berührst, kannst du damit\n<em>@UUID[Compendium.dnd5e.spells24.Item.phbsplScrying000]{Ausspähung}</em>\n(Rettungswurf SG 17) wirken. Zusätzlich kannst du\n<em>@UUID[Compendium.dnd5e.spells24.Item.phbsplDetectThou]{Gedanken entdecken}</em>\n(Rettungswurf SG 17) auf Kreaturen wirken, die du innerhalb von 9 Metern\ndes Zaubersensors sehen kannst. Du musst dich nicht auf diesen Zauber <em>Gedanken\nentdecken</em> konzentrieren, um ihn während seiner Wirkungsdauer aufrechtzuerhalten, aber er endet, wenn der\n<em>Ausspähung</em>-Zauber endet.</p>"
  },
  "dmgTelepathyCrys": {
    "name": "Kristallkugel der Telepathie",
    "description": "<div><p><em>Wundersamer Gegenstand, Legendär (Benötigt\nEinstimmung)</em></p></div><p>Während du diese Kristallkugel berührst, kannst du damit\n<em>@UUID[Compendium.dnd5e.spells24.Item.phbsplScrying000]{Ausspähung}</em>\n(Rettungswurf SG 17) wirken. Zusätzlich kannst du telepathisch mit\nKreaturen kommunizieren, die du innerhalb von 9 Metern des Zaubersensors sehen kannst. Du kannst auch\n<em>@UUID[Compendium.dnd5e.spells24.Item.phbsplSuggestion]{Suggestion}</em>\n(Rettungswurf SG 17) durch den Sensor auf eine dieser Kreaturen wirken. Du musst dich nicht\nauf diese <em>Suggestion</em> konzentrieren, um sie während ihrer\nWirkungsdauer aufrechtzuerhalten, aber sie endet, wenn <em>Ausspähung</em> endet. Du kannst\n<em>Suggestion</em> auf diese Weise erst wieder nach der nächsten Morgendämmerung wirken.</p>"
  },
  "dmgTrueSeeingCry": {
    "name": "Kristallkugel der Wahren Sicht",
    "description": "<div><p><em>Wundersamer Gegenstand, Legendär (Benötigt Einstimmung)</em></p></div><p>Solange du diese Kristallkugel berührst, kannst du damit <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplScrying000]{Ausspähung}</em> wirken (Rettungswurf SG 17). Zusätzlich hast du Wahre Sicht mit einer Reichweite von 36 Metern, zentriert auf den Sensor des Zaubers.</p>"
  },
  "dmgCubeOfForce00": {
    "name": "Kraftwürfel",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten (Benötigt Einstimmung)</em></p></div><p>Dieser Würfel ist etwa 2,5 Zentimeter breit. Jede Seite hat eine deutliche Markierung. Du kannst eine dieser Seiten drücken, die dafür benötigte Anzahl an Ladungen aufwenden und dadurch den damit verbundenen Zauber wirken (Rettungswurf SG 17), wie in der Tabelle 'Seiten des Kraftwürfels' gezeigt.</p><p>Der Würfel beginnt mit 10 Ladungen und erhält täglich bei Sonnenaufgang 1W6 <span class=\"no-break\">verbrauchte</span> Ladungen zurück.</p><table><caption>Seiten des Kraftwürfels</caption><thead><tr><td>Zauber</td><td>Ladungskosten</td></tr></thead><tbody><tr><td><em>@UUID[Compendium.dnd5e.spells24.Item.phbsplMageArmor0]{Magierrüstung}</em></td><td>1</td></tr><tr><td><em>@UUID[Compendium.dnd5e.spells24.Item.phbsplShield0000]{Schild}</em></td><td>1</td></tr><tr><td><em>@UUID[Compendium.dnd5e.spells24.Item.phbsplLeomundsTi]{Leomunds Winzige Hütte}</em></td><td>3</td></tr><tr><td><em>@UUID[Compendium.dnd5e.spells24.Item.phbPrivateSanctu]{Privates Heiligtum}</em></td><td>4</td></tr><tr><td><em>@UUID[Compendium.dnd5e.spells24.Item.phbsplOtilukesRe]{Otilukes Unverwüstliche Kugel}</em></td><td>4</td></tr><tr><td><em>@UUID[Compendium.dnd5e.spells24.Item.phbsplWallofForc]{Mauer der Kraft}</em></td><td>5</td></tr></tbody></table>"
  },
  "dmgCubicGate0000": {
    "name": "Kubisches Tor",
    "description": "<div><p><em>Wundersamer Gegenstand, Legendär</em></p></div><p>Dieser Würfel ist 7,5 Zentimeter breit und strahlt spürbare magische Energie aus. Die sechs Seiten des Würfels sind jeweils einem anderen Existenzplan zugeordnet, einer davon ist die Materielle Ebene. Die anderen Seiten sind mit vom SL bestimmten Ebenen verbunden.</p><p>Der Würfel hat 3 Ladungen und erhält täglich bei Sonnenaufgang 1W3 verbrauchte Ladungen zurück. Als Magische Aktion kannst du 1 Ladung des Würfels aufwenden, um einen der folgenden Zauber mit dem Würfel zu wirken.</p><p><strong>Tor.</strong> Wenn du eine Seite des Würfels drückst, wirkst du <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplGate000000]{Tor}</em> und öffnest ein Portal zu dem Existenzplan, der dieser Seite zugeordnet ist.</p><p><strong>Ebenenwechsel.</strong> Wenn du eine Seite des Würfels zweimal drückst, wirkst du <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplPlaneShift]{Ebenenwechsel}</em> und transportierst die Ziele zu dem Existenzplan, der dieser Seite zugeordnet ist.</p>"
  },
  "dmgDecanterOfEnd": {
    "name": "Dekanter des Endlosen Wassers",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p></div><p>Diese verschlossene Flasche schwappt beim Schütteln, als ob sie Wasser enthielte. Der Dekanter wiegt 1 kg.</p><p>Du kannst eine Magische Aktion ausführen, um den Stopfen zu entfernen und eines von drei Befehlswörtern auszusprechen, woraufhin eine Menge @UUID[Compendium.dnd5e.equipment24.Item.dmgspWaterfresh0]{frischen Wassers} oder @UUID[Compendium.dnd5e.equipment24.Item.dmgspWatersalt00]{Salzwassers} (deiner Wahl) aus der Flasche strömt. Das Wasser hört zu Beginn deines nächsten Zuges auf zu strömen. Wähle aus den folgenden Befehlswörtern:</p><div class=\"def-block\"><p><strong>Plätschern.</strong> Der Dekanter erzeugt 3,8 Liter Wasser.</p><p><strong>Springbrunnen.</strong> Der Dekanter erzeugt 19 Liter Wasser.</p><p><strong>Geysir.</strong> Der Dekanter erzeugt 114 Liter Wasser, das in einer 9 Meter langen und 30 Zentimeter breiten Linie hervorströmt. Wenn du den Dekanter hältst, kannst du den Geysir in eine Richtung zielen (keine Aktion erforderlich). Eine Kreatur deiner Wahl in der Linie muss einen Rettungswurf auf Stärke SG 13 bestehen oder nimmt 1W4 Wuchtschaden und erhält den Zustand &amp;Reference[Liegend]. Anstelle einer Kreatur kannst du ein Objekt in der Linie anvisieren, das nicht getragen oder gehalten wird und das nicht mehr als 100 kg wiegt. Das Objekt wird vom Geysir umgestoßen.</p></div>",
    "activities": {
      "Fountain": "Springbrunnen",
      "Geyser": "Geysir",
      "Splash": "Plätschern"
    }
  },
  "dmgDeckOfIllusio": {
    "name": "Deck der Illusionen",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p></div><p>Diese Schachtel enthält einen Satz Karten. Ein vollständiges Deck hat 34 Karten: 32 zeigen bestimmte Kreaturen und zwei haben eine spiegelnde Oberfläche. Ein als Schatz gefundenes Deck hat normalerweise [[/r 1d20 − 1#Fehlende Karten]] Karten weniger.</p><p>Die Magie des Decks funktioniert nur, wenn seine Karten zufällig gezogen werden. Du kannst eine Magische Aktion ausführen, um eine Karte zufällig aus dem Deck zu ziehen und sie an einen Punkt innerhalb von 9 Metern von dir auf den Boden zu werfen. Eine Illusion einer Kreatur, bestimmt durch einen Wurf auf die Tabelle 'Deck der Illusionen', bildet sich über der geworfenen Karte und bleibt bestehen, bis sie gebannt wird. Die durch die Karte erzeugte illusorische Kreatur sieht aus und verhält sich wie eine echte Kreatur ihrer Art, außer dass sie keinen Schaden anrichten kann. Solange du dich innerhalb von 36 Metern von der illusorischen Kreatur befindest und sie sehen kannst, kannst du eine Magische Aktion ausführen, um sie überallhin innerhalb von 9 Metern von ihrer Karte zu bewegen.</p><p>Jede physische Interaktion mit der illusorischen Kreatur offenbart sie als falsch, da Objekte durch sie hindurchgehen. Eine Kreatur, die eine Studienaktion ausführt, um die illusorische Kreatur visuell zu inspizieren, identifiziert sie als Illusion mit einem erfolgreichen [[/check ability=int skill=inv dc=15 format=long]]. Die Illusion hält an, bis ihre Karte bewegt oder die Illusion gebannt wird (mittels eines Zaubers <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplDispelMagi]{Bannmagie}</em> oder eines ähnlichen Effekts). Wenn die Illusion endet, verschwindet das Bild auf ihrer Karte, und diese Karte kann nicht wieder verwendet werden.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgDeckOfIllusio rollable]</p><section class=\"secret\" id=\"secret-dg7rbpSc8GfB0AXm\"><p><strong>Foundry-Hinweis</strong></p><p>Aufgrund der Einwegnatur jeder Karte wird empfohlen, eine Kopie der @UUID[Compendium.dnd5e.tables24.RollTable.dmgDeckOfIllusio]{Tabelle} zu importieren und ihre UUID in den @Embed-Enricher oben einzufügen.</p><p>Zusätzlich sollte der SL oder Spieler beim ersten Erhalt die Aktion <strong>Anzahl der Karten zählen</strong> verwenden, um die Gesamtzahl der verbleibenden Karten im Deck zufällig zu bestimmen. Nach einmaligem Gebrauch kann sie gelöscht werden.</p></section><p></p>",
    "activities": {
      "Count Number of Cards": "Anzahl der Karten zählen",
      "Draw Card": "Karte ziehen"
    }
  },
  "dmgDimensionalSh": {
    "name": "Dimensionale Fesseln",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten</em></p></div><p>Du kannst eine Nutzungsaktion ausführen, um diese Fesseln an einer Kreatur anzulegen, die den Zustand &amp;Reference[Handlungsunfähig apply=false] hat. Die Fesseln passen sich an Kreaturen der Größen Klein bis Groß an. Die Fesseln hindern eine durch sie gefesselte Kreatur daran, jegliche Art von extradimensionaler Bewegung zu nutzen, einschließlich Teleportation oder Reisen zu einem anderen Existenzplan. Sie hindern die Kreatur nicht daran, ein interdimensionales Portal zu durchqueren.</p><p>Du und jede Kreatur, die du beim Anlegen der Fesseln bestimmst, können eine Nutzungsaktion ausführen, um sie zu entfernen. Einmal alle 30 Tage kann die gefesselte Kreatur einen [[/check ability=str skill=ath dc=30 format=long]] ablegen. Bei einem erfolgreichen Wurf befreit sich die Kreatur und zerstört die Fesseln.</p>",
    "activities": {
      "Attempt Escape": "Fluchtversuch",
      "Place Shackles": "Fesseln anlegen"
    }
  },
  "dmgEversmokingBo": {
    "name": "Flasche des Ewigen Rauchs",
    "description": "<div><p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p></div><p>Als Magische Aktion kannst du diese Flasche öffnen oder schließen.</p><p>Das Öffnen der Flasche lässt dichten Rauch hervorquellen, der eine Wolke bildet, die eine 18 Meter große Emanation füllt, die von der Flasche ausgeht. Der Bereich innerhalb des Rauchs ist &amp;Reference[StarkVerdeckt].</p><p>Jede Minute, die die Flasche offen bleibt, vergrößert sich die Größe der Emanation um 3 Meter, bis sie ihre maximale Größe von 36 Metern erreicht.</p><p>Das Schließen der Flasche bewirkt, dass die Wolke an Ort und Stelle fixiert wird, bis sie sich nach 10 Minuten auflöst. Ein starker Wind (wie der, der durch den Zauber <em>Windstoß</em> erzeugt wird) löst die Wolke nach 1 Minute auf.</p><section class=\"secret\" id=\"secret-O7B8LCiiU4CnDjQw\"><p><strong>Foundry-Hinweis</strong></p><p>Der Skalierungsregler der Aktion <strong>Flasche öffnen</strong> steuert die Größe der erzeugten Emanation von 18 Metern bei Skalierungswert 1 bis 36 Metern bei Skalierungswert 7 (Schritte von 3 Metern).</p></section>",
    "activities": {
      "Open Bottle": "Flasche öffnen"
    }
  },
  "dmgFoldingBoat00": {
    "name": "Faltboot",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten</em></p></div><p>Dieses Objekt erscheint als Holzkiste, die 30 Zentimeter lang, 15 Zentimeter breit und 15 Zentimeter tief ist. Sie wiegt 2 kg und schwimmt. Sie kann geöffnet werden, um Gegenstände darin zu lagern. Dieser Gegenstand hat auch drei Befehlswörter, von denen jedes eine Magische Aktion zur Verwendung erfordert:</p><p>@Embed[Compendium.dnd5e.equipment24.Item.dmgBoatUtility00 caption=false]</p>"
  },
  "dmgGemOfBrightne": {
    "name": "Edelstein der Helligkeit",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Dieses Prisma hat 50 Ladungen. Während du es hältst, kannst du eine Magische Aktion ausführen und eines von drei Befehlswörtern verwenden, um einen der folgenden Effekte zu bewirken:</p><p><strong>Erstes Befehlswort.</strong> Der Edelstein strahlt Helles Licht in einem Radius von 9 Metern und Schwaches Licht für weitere 9 Meter aus. Dieser Effekt verbraucht keine Ladung. Er hält an, bis du eine Bonusaktion ausführst, um das Befehlswort zu wiederholen, oder bis du eine andere Funktion des Edelsteins nutzt.</p><p><strong>Zweites Befehlswort.</strong> Du verbrauchst 1 Ladung und lässt den Edelstein einen brillanten Lichtstrahl auf eine Kreatur abfeuern, die du innerhalb von 18 Metern von dir sehen kannst. Die Kreatur muss einen Rettungswurf auf Konstitution SG 15 bestehen oder erhält den Zustand &amp;Reference[Blind apply=false] für 1 Minute. Die Kreatur wiederholt den Rettungswurf am Ende jedes ihrer Züge und beendet den Effekt bei Erfolg.</p><p><strong>Drittes Befehlswort.</strong> Du verbrauchst 5 Ladungen und lässt den Edelstein in einem 9 Meter großen Kegel mit intensivem Licht aufleuchten. Jede Kreatur im Kegel legt einen Rettungswurf ab, als ob sie von dem mit dem zweiten Befehlswort erzeugten Strahl getroffen würde.</p><p>Wenn alle Ladungen des Edelsteins verbraucht sind, wird der Edelstein zu einem nichtmagischen Juwel im Wert von 50 GM.</p>",
    "activities": {
      "First Command Word": "Erstes Befehlswort",
      "Second Command Word": "Zweites Befehlswort",
      "Third Command Word": "Drittes Befehlswort"
    }
  },
  "dmgGemOfSeeing00": {
    "name": "Edelstein der Sicht",
    "description": "<p><em>Wundersamer Gegenstand, Selten (Benötigt Einstimmung)</em></p><p>Dieser Edelstein hat 3 Ladungen. Als Magische Aktion kannst du 1 Ladung aufwenden. Für die nächsten 10 Minuten hast du &amp;Reference[WahreSicht] bis zu 36 Meter, wenn du durch den Edelstein blickst.</p><p>Der Edelstein erhält täglich bei Sonnenaufgang 1W3 verbrauchte Ladungen zurück.</p>",
    "activities": {
      "Gain Truesight": "Wahre Sicht erhalten"
    }
  },
  "phbagGrapplingHo": {
    "name": "Enterhaken",
    "description": "<p>Als Nutzungsaktion kannst du den Enterhaken auf ein Geländer, einen Vorsprung oder eine andere Fangvorrichtung innerhalb von 15 Metern von dir werfen, und der Haken verfängt sich, wenn du einen Wurf auf Geschicklichkeit (Akrobatik) SG 13 erfolgreich ablegst. Wenn du ein Seil am Haken befestigt hast, kannst du daran hochklettern.</p>",
    "activities": {
      "Throw": "Werfen"
    }
  },
  "dmgHornOfBlastin": {
    "name": "Horn des Donners",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Du kannst eine Magische Aktion ausführen, um in das Horn zu blasen, das einen donnernden Stoß in einem 9 Meter großen Kegel aussendet, der bis zu 180 Meter weit hörbar ist. Jede Kreatur im Kegel legt einen Rettungswurf auf Konstitution SG 15 ab. Bei einem misslungenen Rettungswurf nimmt eine Kreatur 5W8 Donnerschaden und erhält den Zustand &amp;Reference[Taub apply=false] für 1 Minute. Bei einem erfolgreichen Rettungswurf nimmt eine Kreatur nur halb so viel Schaden. Glas- oder Kristallobjekte im Kegel, die nicht getragen oder gehalten werden, nehmen 10W8 Donnerschaden.</p><p>Jede Nutzung der Magie des Horns hat eine 20-prozentige Chance, dass das Horn explodiert. Die Explosion verursacht 10W6 Energieschaden beim Benutzer und zerstört das Horn.</p><section class=\"secret\" id=\"secret-rkHeC2mFJBKqNOh0\"><p><strong>Foundry-Hinweis</strong></p><p>Die Aktion <strong>Wurf für Explosionschance</strong> gibt 1 zurück, wenn es explodiert, andernfalls 0.</p></section>",
    "activities": {
      "Blow Horn": "Horn blasen",
      "Explosion Damage": "Explosionsschaden",
      "Object Damage": "Objektschaden",
      "Roll for Explosion Chance": "Wurf für Explosionschance"
    }
  },
  "dmgHorseshoesOfA": {
    "name": "Hufeisen des Zephyrs",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Diese Hufeisen kommen im Viererset. Als Magische Aktion kannst du eines der Hufeisen an den Huf eines Pferdes oder einer ähnlichen Kreatur halten, woraufhin sich das Hufeisen am Huf befestigt. Das Entfernen eines Hufeisens erfordert ebenfalls eine Magische Aktion.</p><p>Solange alle vier Hufeisen an den Hufen eines Pferdes oder einer ähnlichen Kreatur befestigt sind, ermöglichen sie der Kreatur, sich normal zu bewegen, während sie 10 Zentimeter über einer Oberfläche schwebt. Dieser Effekt bedeutet, dass die Kreatur nicht-feste oder instabile Oberflächen, wie Wasser oder Lava, überqueren oder darüber stehen kann. Die Kreatur hinterlässt keine Spuren und ignoriert &amp;Reference[SchwierigesGelände]. Zusätzlich kann die Kreatur bis zu 12 Stunden am Tag reisen, ohne &amp;Reference[Erschöpfung] durch längere Reisen zu erhalten.</p>",
    "activities": {
      "Attach Horseshoes": "Hufeisen anbringen"
    }
  },
  "dmgHorseshoesOfS": {
    "name": "Hufeisen der Geschwindigkeit",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Diese Hufeisen kommen im Viererset. Als Magische Aktion kannst du eines der Hufeisen an den Huf eines Pferdes oder einer ähnlichen Kreatur halten, woraufhin sich das Hufeisen am Huf befestigt. Das Entfernen eines Hufeisens erfordert ebenfalls eine Magische Aktion.</p><p>Solange alle vier Hufeisen an derselben Kreatur befestigt sind, erhöht sich ihre Bewegungsrate um 9 Meter.</p>",
    "activities": {
      "Attach Horseshoes": "Hufeisen anbringen"
    }
  },
  "phbagInkPen00000": {
    "name": "Tintenfeder"
  },
  "uBvsyY44RP4LJLzp": {
    "name": "Tintenfeder"
  },
  "x9BzTUcsOj6K6OJE": {
    "name": "Tintenfeder"
  },
  "dmgDaernsInstant": {
    "name": "Daerns Sofortfestung",
    "description": "<div><p><em>Wundersamer Gegenstand, Selten (Benötigt Einstimmung)</em></p></div><p>Als Magische Aktion kannst du diese 2,5 Zentimeter große Adamantinstatuette auf den Boden stellen und, indem du ein Befehlswort verwendest, sie schnell zu einem quadratischen Adamantinturm heranwachsen lassen. Das Wiederholen des Befehlswortes lässt den Turm in die Statuettenform zurückkehren, was nur funktioniert, wenn der Turm leer ist. Jede Kreatur in dem Bereich, in dem der Turm erscheint, wird auf einen unbesetzten Raum außerhalb, aber neben dem Turm geschoben. Objekte in dem Bereich, die nicht getragen oder gehalten werden, werden ebenfalls vom Turm weggeschoben.</p><p>Der Turm ist 6 Meter breit und 9 Meter hoch, mit Pfeilschlitzen auf allen Seiten und einer Zinnenkrone darauf. Sein Inneres ist in zwei Stockwerke unterteilt, die durch eine Leiter, Treppe oder Rampe (deiner Wahl) verbunden sind. Diese Leiter, Treppe oder Rampe endet an einer Falltür, die zum Dach führt. Bei der Erschaffung hat der Turm eine einzelne Tür auf Bodenniveau an der Seite, die dir zugewandt ist. Die Tür öffnet sich nur auf deinen Befehl hin, den du als Bonusaktion erteilen kannst. Sie ist immun gegen den Zauber <em>Klopfen</em> und ähnliche Magie.</p><p>Magie verhindert, dass der Turm umkippt. Das Dach, die Tür und die Wände haben jeweils RK 20; TP 100; Immunität gegen Wucht-, Stich- und Hiebschaden, außer dem, der durch Belagerungswaffen verursacht wird; und Resistenz gegen alle anderen Schäden. Das Schrumpfen des Turms zurück in die Statuettenform repariert keine Schäden am Turm. Nur ein Zauber <em>@UUID[Compendium.dnd5e.spells24.Item.phbsplWish000000]{Wunsch}</em> kann den Turm reparieren (diese Verwendung des Zaubers zählt als Replikation eines Zaubers des 8. Grades oder niedriger). Jedes Wirken von <em>Wunsch</em> lässt den Turm alle seine Trefferpunkte zurückgewinnen.</p>",
    "activities": {
      "Grow Tower": "Turm wachsen lassen",
      "Open Fortress Door": "Festungstür öffnen"
    }
  },
  "dmgIronFlask0000": {
    "name": "Eisenflasche",
    "description": "<p><em>Wundersamer Gegenstand, Legendär</em></p><p>Während du diese mit einem Messingstopfen versehene Eisenflasche hältst, kannst du eine Magische Aktion ausführen, um eine Kreatur anzuvisieren, die du innerhalb von 18 Metern von dir sehen kannst. Wenn die Flasche leer ist und das Ziel einem anderen Existenzplan als dem, auf dem du dich befindest, entstammt, muss das Ziel einen Rettungswurf auf Weisheit SG 17 bestehen oder wird in der Flasche gefangen. Wenn das Ziel zuvor von der Flasche gefangen wurde, hat es Vorteil auf den Rettungswurf. Einmal gefangen, bleibt eine Kreatur in der Flasche, bis sie freigelassen wird. Die Flasche kann nur eine Kreatur gleichzeitig aufnehmen. Eine in der Flasche gefangene Kreatur altert nicht und muss nicht atmen, essen oder trinken.</p><p>Du kannst eine Magische Aktion ausführen, um den Stopfen der Flasche zu entfernen und die Kreatur in der Flasche freizulassen. Die Kreatur gehorcht dann deinen Befehlen für 1 Stunde und versteht diese Befehle, auch wenn sie die Sprache, in der die Befehle gegeben werden, nicht kennt. Wenn du keine Befehle erteilst oder der Kreatur einen Befehl gibst, der wahrscheinlich zu ihrem Tod oder ihrer Gefangenschaft führt, verteidigt sie sich, unternimmt aber ansonsten keine Aktionen. Am Ende der Dauer handelt die Kreatur gemäß ihrer normalen Veranlagung und Gesinnung.</p><p>Ein Zauber @UUID[Compendium.dnd5e.spells24.Item.phbsplIdentify00]{Identifizieren} enthüllt, ob die Flasche eine Kreatur enthält, aber die einzige Möglichkeit, die Art der Kreatur zu bestimmen, ist das Öffnen der Flasche. Eine neu entdeckte <em>Eisenflasche</em> könnte bereits eine vom SL gewählte Kreatur enthalten.</p><section class=\"secret\" id=\"secret-LJ4Og6JjdncKvEKV\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser Gegenstand hat eine begrenzte Verwendung, um zu verfolgen, ob eine Kreatur in der Flasche gefangen wurde.</p><p>Die Aktion <strong>Gefangene Kreatur hinzufügen</strong> verbraucht eine Nutzung, um anzuzeigen, dass sie derzeit voll ist.</p><p>Die Aktion <strong>Gefangene Kreatur freilassen</strong> ist eine Beschwörungsaktion, die eine Nutzung wiederherstellt, um anzuzeigen, dass sie nun eine weitere Kreatur enthalten kann. Du kannst die Aktion bearbeiten, zum Tab „Beschwören“ wechseln und den Actor der gefangenen Kreatur auf den Tab ziehen, damit sie später beschworen werden kann.</p></section>",
    "activities": {
      "Add Trapped Creature": "Gefangene Kreatur hinzufügen",
      "Attempt to Trap Creature": "Versuch, Kreatur zu fangen",
      "Release Creature": "Kreatur freilassen"
    }
  },
  "dmgIronHornOfVal": {
    "name": "Eisenhorn von Valhalla",
    "description": "<p><em>Siehe: @UUID[Compendium.dnd5e.equipment24.Item.dmgHornofValhall]{Horn von Valhalla}</em></p><p><em>Voraussetzung: Übung mit allen Kriegswaffen</em></p><p><em>Geister: 5</em></p><p>Du kannst eine Magische Aktion ausführen, um in dieses Horn zu blasen. Als Reaktion erscheinen Kriegergeister vom Plan Ysgard in unbesetzten Räumen innerhalb von 18 Metern von dir. Jeder Geist verwendet den Werteblock des <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmBerserker00000]{Berserkers}</strong> und kehrt nach 1 Stunde oder wenn er auf 0 Trefferpunkte fällt, nach Ysgard zurück. Die Geister sehen aus wie lebende, atmende Krieger und haben Immunität gegen die Zustände &amp;Reference[Bezaubert apply=false] und &amp;Reference[Verängstigt apply=false]. Sobald du das Horn benutzt hast, kann es erst nach 7 Tagen wieder verwendet werden.</p><p>Wenn du in das Horn bläst, ohne seine Voraussetzung zu erfüllen, greifen dich die beschworenen Geister an. Wenn du die Voraussetzung erfüllst, sind sie dir und deinen Verbündeten freundlich gesinnt und folgen deinen Befehlen.</p>",
    "activities": {
      "Summon Warriors": "Krieger beschwören"
    }
  },
  "phbagLamp0000000": {
    "name": "Lampe",
    "description": "<p>Eine Lampe verbrennt\n@UUID[Compendium.dnd5e.equipment24.Item.phbagOil00000000]{Öl} als Brennstoff, um\nhelles Licht in einem Radius von 4,5 Metern und dämmriges Licht für weitere 9\nMeter zu spenden.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "SMj5QHHkDCdvkx35": {
    "name": "Lampe",
    "description": "<p>Eine Lampe verbrennt\n@UUID[Compendium.dnd5e.equipment24.Item.phbagOil00000000]{Öl} als Brennstoff, um\nhelles Licht in einem Radius von 4,5 Metern und dämmriges Licht für weitere 9\nMeter zu spenden.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "KUlBAAjJ9KmOCSsC": {
    "name": "Lampe",
    "description": "<p>Eine Lampe verbrennt\n@UUID[Compendium.dnd5e.equipment24.Item.phbagOil00000000]{Öl} als Brennstoff, um\nhelles Licht in einem Radius von 4,5 Metern und dämmriges Licht für weitere 9\nMeter zu spenden.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "Ekz3r0UKJ261oBJj": {
    "name": "Lampe",
    "description": "<p>Eine Lampe verbrennt\n@UUID[Compendium.dnd5e.equipment24.Item.phbagOil00000000]{Öl} als Brennstoff, um\nhelles Licht in einem Radius von 4,5 Metern und dämmriges Licht für weitere 9\nMeter zu spenden.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "dmgLanternOfReve": {
    "name": "Laterne der Enthüllung",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Im angezündeten Zustand brennt diese Kapuzenlaterne\n6 Stunden lang mit 0,5 Litern Öl und spendet helles Licht in einem Radius von 9\nMetern und dämmriges Licht für weitere 9 Meter. &amp;Reference[Invisible\napply=false] Kreaturen und Objekte sind sichtbar, solange sie sich im\nhellen Licht der Laterne befinden. Du kannst eine Nutzen-Aktion ausführen, um die Kapuze zu senken,\nwodurch das Licht der Laterne auf dämmriges Licht in einem Radius von 1,5 Metern reduziert wird.</p>",
    "activities": {
      "Consume Oil": "Öl verbrauchen"
    }
  },
  "phbagLock0000000": {
    "name": "Schloss",
    "description": "<p>Ein Schloss wird mit einem Schlüssel geliefert. Ohne den Schlüssel kann eine Kreatur\n@UUID[Compendium.dnd5e.equipment24.Item.phbtulThievesToo]{Diebeswerkzeuge}\nverwenden, um dieses Schloss mit einem erfolgreichen [[/tool thief dex 15]] Wurf zu knacken.</p>"
  },
  "dmgManualOfBodil": {
    "name": "Handbuch der körperlichen Gesundheit",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Dieses Buch enthält Gesundheits- und\nErnährungstipps, und seine Worte sind mit Magie aufgeladen. Wenn du 48\nStunden über einen Zeitraum von 6 Tagen oder weniger damit verbringst, den Inhalt des Buches zu studieren und\nseine Richtlinien zu praktizieren, erhöht sich deine Konstitution um 2, bis zu einem Maximum\nvon 30. Das Handbuch verliert dann seine Magie, erlangt sie aber in einem\nJahrhundert wieder.</p><section class=\"secret\"\nid=\"secret-SOm6BCXpqNkcxRCM\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser\nGegenstand hat 48 maximale Verwendungen, um die gelesenen Stunden zu verfolgen.</p><p>Die\nAktivität <strong>Lesen</strong> enthält einen Skalierungswert, mit dem du\ndie Anzahl der gelesenen Stunden eingeben kannst. Sobald du 48 erreicht hast, kannst du den\nenthaltenen Aktiven Effekt verwenden, um deine Konstitution zu erhöhen.</p><p>Die\nAktivität <strong>Fortschritt zurücksetzen</strong> setzt deine Verwendungen auf 0 zurück, wenn du das Buch nicht\ninnerhalb von 6 Tagen abschließt und von vorne beginnen musst.</p></section>",
    "activities": {
      "Read": "Lesen",
      "Reset Progress": "Fortschritt zurücksetzen"
    }
  },
  "dmgManualOfGainf": {
    "name": "Handbuch der gewinnbringenden Übungen",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Dieses Buch beschreibt Fitness-\nÜbungen, und seine Worte sind mit Magie aufgeladen. Wenn du 48 Stunden\nüber einen Zeitraum von 6 Tagen oder weniger damit verbringst, den Inhalt des Buches zu studieren und\nseine Richtlinien zu praktizieren, erhöht sich deine Stärke um 2, bis zu einem Maximum von\n30. Das Handbuch verliert dann seine Magie, erlangt sie aber in einem\nJahrhundert wieder.</p><section class=\"secret\"\nid=\"secret-rzQiysHGZvxuxsGz\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser\nGegenstand hat 48 maximale Verwendungen, um die gelesenen Stunden zu verfolgen.</p><p>Die\nAktivität <strong>Lesen</strong> enthält einen Skalierungswert, mit dem du\ndie Anzahl der gelesenen Stunden eingeben kannst. Sobald du 48 erreicht hast, kannst du den\nenthaltenen Aktiven Effekt verwenden, um deine Stärke zu erhöhen.</p><p>Die Aktivität <strong>Fortschritt\nzurücksetzen</strong> setzt deine Verwendungen auf 0 zurück, wenn du das Buch nicht\ninnerhalb von 6 Tagen abschließt und von vorne beginnen musst.</p></section>",
    "activities": {
      "Read": "Lesen",
      "Reset Progress": "Fortschritt zurücksetzen"
    }
  },
  "dmgManualOfGolem": {
    "name": "Handbuch der Golems",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Dieser Foliant enthält Informationen\nund Beschwörungen, die notwendig sind, um einen bestimmten Golemtyp herzustellen. Der SL\nwählt den Typ oder bestimmt ihn zufällig, indem er auf der beigefügten\nTabelle würfelt. Um das Handbuch zu entschlüsseln und zu verwenden, musst du ein Zauberwirker mit mindestens\nzwei Zauberplätzen des 5. Grades sein. Eine Kreatur, die ein <em>Handbuch der\nGolems</em> nicht verwenden kann und versucht, es zu lesen, erleidet [[/damage 6d6 type=psychic]]\npsychischen Schaden.</p><p>Um einen Golem zu erschaffen, musst du die in der\nTabelle angegebene Zeit aufwenden, ohne Unterbrechung mit dem Handbuch arbeiten und nicht mehr als\n8 Stunden pro Tag ruhen. Du musst auch die angegebenen Kosten für den Kauf von\nMaterialien bezahlen.</p><p>Sobald du die Erschaffung des Golems abgeschlossen hast, wird das Buch in\nunheimlichen Flammen verzehrt. Der Golem wird lebendig, wenn die Asche des\nHandbuchs auf ihn gestreut wird. Siehe das <em>Monsterhandbuch</em> für den\nWerteblock des Golems. Der Golem steht unter deiner Kontrolle, und er versteht\nund gehorcht deinen\nBefehlen.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgManualOfGolem\nrollable]</p><section class=\"secret\"\nid=\"secret-8T2YtEsnAW7JZ5Bp\"><p><strong>Foundry-Hinweis</strong></p><p>Nachdem\ndu den Golemtyp bestimmt hast, den dieses Handbuch erschafft, kannst du die\nanderen nicht benötigten Aktivitäten löschen.</p></section>",
    "activities": {
      "Create Clay Golem": "Lehmgolem erschaffen",
      "Create Flesh Golem": "Fleischgolem erschaffen",
      "Create Iron Golem": "Eisengolem erschaffen",
      "Create Stone Golem": "Steingolem erschaffen"
    }
  },
  "dmgManualOfQuick": {
    "name": "Handbuch der Schnelligkeit der Aktion",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Dieses Buch enthält Koordinations-\nund Gleichgewichtsübungen, und seine Worte sind mit Magie aufgeladen. Wenn du\n48 Stunden über einen Zeitraum von 6 Tagen oder weniger damit verbringst, den Inhalt des Buches zu studieren und\nseine Richtlinien zu praktizieren, erhöht sich deine Geschicklichkeit um 2, bis zu einem Maximum von\n30. Das Handbuch verliert dann seine Magie, erlangt sie aber in einem\nJahrhundert wieder.</p><section class=\"secret\"\nid=\"secret-cXi2vCFHtxDKHpSv\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser\nGegenstand hat 48 maximale Verwendungen, um die gelesenen Stunden zu verfolgen.</p><p>Die\nAktivität <strong>Lesen</strong> enthält einen Skalierungswert, mit dem du\ndie Anzahl der gelesenen Stunden eingeben kannst. Sobald du 48 erreicht hast, kannst du den\nenthaltenen Aktiven Effekt verwenden, um deine Geschicklichkeit zu erhöhen.</p><p>Die Aktivität <strong>Fortschritt\nzurücksetzen</strong> setzt deine Verwendungen auf 0 zurück, wenn du das Buch nicht\ninnerhalb von 6 Tagen abschließt und von vorne beginnen musst.</p></section>",
    "activities": {
      "Read": "Lesen",
      "Reset Progress": "Fortschritt zurücksetzen"
    }
  },
  "dmgNolzursMarvel": {
    "name": "Wunderbare Pigmente",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Diese feine Holzschachtel enthält\n1W4 Töpfe Pigment und einen Pinsel (insgesamt 0,5 kg schwer).</p><p>Mit\ndem Pinsel und dem Verbrauch von 1 Topf Pigment kannst du beliebig viele\ndreidimensionale Objekte und Geländemerkmale (wie Wände, Türen,\nBäume, Blumen, Waffen, Spinnennetze und Gruben) malen, vorausgesetzt, diese Elemente sind alle\nauf einen 6-Meter-Würfel beschränkt. Der Aufwand dauert 10 Minuten (unabhängig von der\nAnzahl der Elemente, die du erstellst), während dieser Zeit musst du im\nWürfel bleiben und es erfordert Konzentration. Wenn deine Konzentration unterbrochen wird oder du\nden Würfel verlässt, bevor die Arbeit beendet ist, verschwinden alle gemalten Elemente,\nund der Topf Pigment ist verschwendet.</p><p>Wenn die Arbeit beendet ist, werden alle\ngemalten Objekte und Geländemerkmale real. Das Malen einer Tür an\neiner Wand erschafft also eine tatsächliche Tür, die zu dem geöffnet werden kann, was dahinter liegt.\nDas Malen einer Grube erschafft eine echte Grube, deren gesamte Tiefe innerhalb\ndes 6-Meter-Würfels liegen muss.</p><p>Kein Objekt, das mit einem Topf Pigment erschaffen wird, darf\neinen Wert von mehr als 25 GM haben, und der Gesamtwert aller Objekte,\ndie mit einem Topf Pigment erschaffen werden, darf 500 GM nicht überschreiten. Wenn du Objekte von\ngrößerem Wert malst (wie einen großen Goldhaufen), sehen sie authentisch aus, aber\neine genaue Untersuchung zeigt, dass sie aus Paste, Keksen oder anderem\nwertlosen Material bestehen.</p><p>Wenn du eine Energieform wie Feuer oder\nBlitz malst, löst sich die Energie auf, sobald du das Gemälde fertiggestellt hast,\nohne Schaden anzurichten.</p><section class=\"secret\"\nid=\"secret-qUNCffT2Tfry1qQt\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser\nGegenstand beginnt mit 4 maximalen Verwendungen. Die Aktivität <strong>Anzahl der\nTöpfe bestimmen</strong> kann verwendet werden, um zu bestimmen, wie viele Töpfe in\nder Schachtel verbleiben.</p></section>",
    "activities": {
      "Determine Number of Pots": "Anzahl der Töpfe bestimmen",
      "Paint": "Malen"
    }
  },
  "dmgMirrorOfLifeT": {
    "name": "Spiegel der Lebensfalle",
    "description": "<p><em>Wundersamer Gegenstand, Sehr Selten</em></p><p>Wenn dieser 1,2 Meter hohe,\n0,6 Meter breite Spiegel indirekt betrachtet wird, zeigt seine Oberfläche schwache Bilder von\nKreaturen. Der Spiegel wiegt 25 kg und hat RK 11, TP 10, Immunität\ngegen Gift- und Psychischen Schaden sowie Verwundbarkeit gegen Wuchtschaden. Er\nzerspringt und wird zerstört, wenn er auf 0 Trefferpunkte reduziert wird.</p><p>Wenn der\nSpiegel an einer vertikalen Oberfläche hängt und du dich innerhalb von 1,5 Metern von ihm befindest,\nkannst du eine Magie-Aktion ausführen und ein Befehlswort verwenden, um ihn zu aktivieren. Er\nbleibt aktiviert, bis du eine Magie-Aktion ausführst und das Befehlswort\nwiederholst, um ihn zu deaktivieren.</p><p>Jede Kreatur außer dir, die ihr\nSpiegelbild im aktivierten Spiegel sieht, während sie sich innerhalb von 9 Metern vom Spiegel befindet, muss\neinen Rettungswurf auf Charisma SG 15 bestehen oder wird zusammen mit\nallem, was sie trägt oder bei sich hat, in einer der zwölf\nextradimensionalen Zellen des Spiegels gefangen. Eine Kreatur, die die Natur des Spiegels kennt,\nmacht den Rettungswurf mit Vorteil, und Konstrukte bestehen den Rettungswurf\nautomatisch.</p><p>Eine extradimensionale Zelle ist eine unendliche Weite,\ngefüllt mit dichtem Nebel, der die Sicht auf 3 Meter reduziert. Kreaturen,\ndie in den Zellen des Spiegels gefangen sind, altern nicht und müssen weder essen,\ntrinken noch schlafen. Eine Kreatur, die in einer Zelle gefangen ist, kann mit Magie\nentkommen, die Ebenenreisen erlaubt. Andernfalls ist die Kreatur in der\nZelle gefangen, bis sie befreit wird.</p><p>Wenn der Spiegel eine Kreatur fängt,\naber seine zwölf extradimensionalen Zellen bereits belegt sind, befreit der Spiegel eine\nzufällig gefangene Kreatur, um den neuen Gefangenen aufzunehmen. Eine befreite Kreatur\nerscheint in einem unbesetzten Raum in Sichtweite des Spiegels, aber von ihm\nabgewandt. Wenn der Spiegel zerbricht, werden alle darin enthaltenen Kreaturen befreit\nund erscheinen in unbesetzten Räumen in seiner Nähe.</p><p>Während du dich innerhalb von 1,5 Metern vom\nSpiegel befindest, kannst du eine Magie-Aktion ausführen, um eine darin gefangene Kreatur zu\nbenennen oder eine bestimmte Zelle nach Nummer aufzurufen. Die benannte oder in der\nbenannten Zelle enthaltene Kreatur erscheint als Bild auf der Oberfläche des Spiegels.\nDu und die Kreatur können dann kommunizieren.</p><p>Auf ähnliche Weise kannst du eine\nMagie-Aktion ausführen und ein zweites Befehlswort verwenden, um eine im Spiegel\ngefangene Kreatur zu befreien. Die befreite Kreatur erscheint zusammen mit ihren\nBesitztümern im unbesetzten Raum, der dem Spiegel am nächsten liegt und von ihm\nabgewandt ist.</p><p>Das Platzieren des Spiegels in einem extradimensionalen Raum, der von einem\n<em>Beutel der Aufbewahrung</em>, einem <em>Tragbaren Loch</em> oder einem ähnlichen Gegenstand\ngeschaffen wurde, zerstört sofort beide Gegenstände und öffnet ein Tor zur Astralebene. Das Tor\nentsteht dort, wo der eine Gegenstand in den anderen gelegt wurde. Jede Kreatur\ninnerhalb von 3 Metern vom Tor und nicht hinter Voller Deckung wird durch es\nan einen zufälligen Ort auf der Astralebene gesaugt. Das Tor schließt sich dann. Das Tor\nist nur eine Einbahnstraße und kann nicht wieder geöffnet werden.</p><section\nid=\"secret-wD2MAubhr1RWqA6v\" class=\"secret\"><p><strong>Foundry-\nHinweis</strong></p><p>Dieser Gegenstand hat eine maximale Verwendung von 12, die verwendet werden kann,\num die Anzahl der im Spiegel gefangenen Kreaturen zu verfolgen. Die\nAktivitäten <strong>Gefangene Kreatur hinzufügen/befreien</strong> können verwendet werden, um\ndiese Zahl zu erhöhen/verringern.</p></section>",
    "activities": {
      "Add Trapped Creature": "Gefangene Kreatur hinzufügen",
      "Free Trapped Creature": "Gefangene Kreatur befreien"
    }
  },
  "dmgNecklaceOfFir": {
    "name": "Halskette der Feuerbälle",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Diese Halskette hat 1W6 + 3 Perlen\ndaran hängen. Du kannst eine Magie-Aktion ausführen, um eine Perle abzunehmen und sie\nbis zu 18 Meter weit zu werfen. Wenn sie das Ende ihrer Flugbahn erreicht, detoniert die Perle\nals ein @UUID[Compendium.dnd5e.spells24.Item.phbsplFireball00]{Feuerball} des 3.\nGrades (Rettungswurf SG 15).</p><p>Du kannst mehrere Perlen oder sogar die ganze Halskette auf einmal\nschleudern. Wenn du dies tust, erhöhe den Schaden des <em>Feuerballs</em> um 1W6\nfür jede Perle nach der ersten (maximal 12W6).</p><section class=\"secret\"\nid=\"secret-sVvONZCjIbxSR0Xs\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser\nGegenstand hat 9 begrenzte Verwendungen. Die Aktivität <strong>Anzahl der\nPerlen bestimmen</strong> kann verwendet werden, um zu bestimmen, wie viele Perlen\n(entspricht 1W6 + 3) sich an der Halskette befinden.</p><p>Die Aktivität <strong>Perle\nwerfen</strong> ermöglicht es dir, den Feuerball auf maximal 12W6 zu skalieren.</p></section>",
    "activities": {
      "Determine Number of Beads": "Anzahl der Perlen bestimmen",
      "Throw Bead": "Perle werfen"
    }
  },
  "phbagNet00000000": {
    "name": "Netz",
    "description": "<p>Wenn du die Angriffsaktion ausführst, kannst du einen deiner Angriffe\ndurch das Werfen eines Netzes ersetzen. Wähle eine Kreatur, die du innerhalb von 4,5 Metern von\ndir sehen kannst, als Ziel. Das Ziel muss einen Rettungswurf auf Geschicklichkeit (SG 8 plus\ndein Geschicklichkeitsmodifikator und Übungsbonus) bestehen oder den\nZustand &amp;Reference[Restrained]{Festhalten} haben, bis es entkommt. Das Ziel besteht\nautomatisch, wenn es Riesig oder größer ist.</p><p>Um zu entkommen, muss das Ziel oder eine\nKreatur innerhalb von 1,5 Metern von ihm eine Aktion ausführen, um einen [[/skill ath\n10]] Wurf zu machen, wodurch die gefesselte Kreatur bei Erfolg befreit wird. Das Zerstören des\nNetzes (RK 10; 5 TP; Immunität gegen Wuchtschaden, Giftschaden und Psychischen Schaden)\nbefreit das Ziel ebenfalls und beendet den Effekt.</p>"
  },
  "dmgPearlOfPower0": {
    "name": "Perle der Macht",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich (Benötigt Einstimmung durch einen\nZauberwirker)</em></p><p>Solange diese Perle bei dir ist, kannst du eine\nMagie-Aktion ausführen, um einen verbrauchten Zauberplatz des 3. Grades oder niedriger zurückzuerlangen. Sobald\ndu die Perle benutzt hast, kann sie erst wieder bei der nächsten Morgendämmerung verwendet werden.</p>",
    "activities": {
      "Regain Spell Slot": "Zauberplatz zurückerlangen"
    }
  },
  "dmgPipesOfHaunti": {
    "name": "Pfeifen der Heimsuchung",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Diese Pfeifen haben 3 Ladungen und\nregenerieren täglich bei Morgendämmerung 1W3 verbrauchte Ladungen. Du kannst eine Magie-Aktion ausführen, um\nsie zu spielen und 1 Ladung verbrauchen, um eine unheimliche, fesselnde Melodie zu erzeugen. Jede\nKreatur deiner Wahl innerhalb von 9 Metern von dir muss einen Rettungswurf auf Weisheit SG 15\nbestehen oder den Zustand &amp;Reference[Frightened apply=false] für 1 Minute haben. Eine\nKreatur, die den Rettungswurf nicht besteht, wiederholt ihn am\nEnde jedes ihrer Züge, wobei der Effekt bei Erfolg für sie endet. Eine\nKreatur, die ihren Rettungswurf besteht, ist 24 Stunden lang immun gegen den Effekt dieser Pfeifen.</p>",
    "activities": {
      "Play Pipes": "Pfeifen spielen"
    }
  },
  "dmgPipesOfTheSew": {
    "name": "Pfeifen der Kanalisation",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich (Benötigt Einstimmung)</em></p><p>Solange\ndiese Pfeifen bei dir sind, sind gewöhnliche Ratten und Riesenratten\ndir gegenüber gleichgültig und werden dich nicht angreifen, es sei denn, du bedrohst oder verletzt\nsie.</p><p>Die Pfeifen haben 3 Ladungen und regenerieren täglich bei Morgendämmerung 1W3 verbrauchte Ladungen.\nWenn du die Pfeifen als Magie-Aktion spielst, kannst du eine Bonusaktion ausführen,\num 1 bis 3 Ladungen zu verbrauchen und einen\n<strong>@UUID[Compendium.dnd5e.actors24.Actor.mmSwarmOfRats000]{Rattenschwarm}</strong>\nmit jeder verbrauchten Ladung herbeizurufen, wenn genügend Ratten innerhalb von 800 Metern von dir sind,\num auf diese Weise gerufen zu werden (nach Ermessen des SL). Wenn\nnicht genügend Ratten vorhanden sind, um einen Schwarm zu bilden, ist die Ladung verschwendet. Gerufene\nSchwärme bewegen sich auf dem kürzesten verfügbaren Weg zur Musik, stehen aber ansonsten\nnicht unter deiner Kontrolle.</p><p>Immer wenn ein <strong>Rattenschwarm</strong>,\nder nicht unter der Kontrolle einer anderen Kreatur steht, innerhalb von 9 Metern\nvon dir kommt, während du die Pfeifen spielst, macht der Schwarm einen Rettungswurf auf Weisheit SG 15.\nBei einem erfolgreichen Rettungswurf verhält sich der Schwarm wie gewohnt und kann für die nächsten 24\nStunden nicht von der Musik der Pfeifen beeinflusst werden. Bei einem misslungenen Rettungswurf\nwird der Schwarm von der Musik der Pfeifen beeinflusst und wird dir und deinen Verbündeten\ngegenüber freundlich, solange du die Pfeifen jede Runde als Magie-Aktion weiter spielst. Ein\nfreundlicher Schwarm gehorcht deinen Befehlen. Wenn du einem freundlichen Schwarm keine Befehle gibst,\nverteidigt er sich, unternimmt aber ansonsten keine Aktionen. Wenn ein freundlicher Schwarm seinen Zug\nmehr als 9 Meter von dir entfernt beginnt, endet deine Kontrolle über diesen Schwarm, und der\nSchwarm verhält sich wie gewohnt und kann für die nächsten 24 Stunden nicht von der Musik der Pfeifen\nbeeinflusst werden.</p>",
    "activities": {
      "Call Swarm of Rats": "Rattenschwarm herbeirufen",
      "Sway Rats": "Ratten beeinflussen"
    }
  },
  "dmgPortableHole0": {
    "name": "Tragbares Loch",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Dieses feine schwarze Tuch, weich wie Seide,\nist auf die Größe eines Taschentuchs gefaltet. Es entfaltet sich zu einem\nkreisförmigen Tuch mit 1,8 Metern Durchmesser.</p><p>Du kannst eine Magie-Aktion ausführen, um\nein <em>Tragbares Loch</em> zu entfalten und es auf oder gegen eine feste\nOberfläche zu legen, woraufhin das <em>Tragbare Loch</em> ein extradimensionales\nLoch von 3 Metern Tiefe erzeugt. Der zylindrische Raum innerhalb des Lochs existiert auf einer\nanderen Existenzebene, daher kann er nicht verwendet werden, um offene Passagen zu schaffen.\nJede Kreatur innerhalb eines offenen <em>Tragbaren Lochs</em> kann das Loch\nverlassen, indem sie herausklettert.</p><p>Du kannst eine Magie-Aktion ausführen, um ein\n<em>Tragbares Loch</em> zu schließen, indem du die Ränder des Tuchs festhältst und\nes zusammenfaltest. Das Zusammenfalten des Tuchs schließt das Loch, und alle Kreaturen oder\nObjekte darin verbleiben im extradimensionalen Raum. Egal was sich darin befindet,\ndas Loch wiegt so gut wie nichts.</p><p>Wenn das Loch zusammengefaltet ist, kann eine\nKreatur innerhalb des extradimensionalen Raums des Lochs eine Aktion ausführen, um einen Wurf auf\nStärke (Athletik) SG 10 zu machen. Bei einem erfolgreichen Wurf bahnt sich die\nKreatur ihren Weg nach draußen und erscheint innerhalb von 1,5 Metern vom <em>Tragbaren\nLoch</em>. Ein geschlossenes <em>Tragbares Loch</em> enthält genug Luft für 1 Stunde\nAtmung, geteilt durch die Anzahl der atmenden Kreaturen\ndarin.</p><p>Das Platzieren eines <em>Tragbaren Lochs</em> in einem extradimensionalen\nRaum, der von einem <em>Beutel der Aufbewahrung</em>, einem <em>Praktischen Tornister</em> oder\neinem ähnlichen Gegenstand geschaffen wurde, zerstört sofort beide Gegenstände und öffnet ein Tor zur\nAstralebene. Das Tor entsteht dort, wo der eine Gegenstand in den anderen gelegt wurde.\nJede Kreatur innerhalb von 3 Metern vom Tor und nicht hinter\n&amp;Reference[Total Cover]{Volle Deckung} ist, wird durch es gesaugt und an einem zufälligen\nOrt auf der Astralebene abgesetzt. Das Tor schließt sich dann. Das Tor ist nur eine\nEinbahnstraße und kann nicht wieder geöffnet werden.</p>",
    "activities": {
      "Escape Check": "Entkommen-Wurf",
      "Unfold Portable Hole": "Tragbares Loch entfalten"
    }
  },
  "dmgRodOfLordlyMi": {
    "name": "Stab der Herrschergewalt",
    "description": "<p><em>Stab, Legendär (Benötigt Einstimmung)</em></p><p>Dieser Stab hat einen\ngeflanschten Kopf und funktioniert als magischer Streitkolben, der einen Bonus von +3 auf\nAngriffs- und Schadenswürfe gewährt, die damit gemacht werden. Der Stab hat Eigenschaften,\ndie mit sechs verschiedenen Knöpfen verbunden sind, die in einer Reihe entlang des\nSchafts angeordnet sind. Er hat auch drei weitere Eigenschaften, die unten\ndetailliert sind.</p><p><em><strong>Knöpfe</strong></em>. Du kannst einen der\nfolgenden Knöpfe als Bonusaktion drücken; der Effekt eines Knopfes hält an, bis du\neinen anderen Knopf drückst oder bis du denselben Knopf erneut drückst, was\ndazu führt, dass der Stab in seine normale Form zurückkehrt:</p><details><summary>Knopfeffekte</summary><p><strong>Knopf 1.</strong> Eine feurige Klinge sprießt aus\ndem Ende gegenüber dem geflanschten Kopf des Stabes. Die Flammen spenden helles Licht in einem\nRadius von 12 Metern und dämmriges Licht für weitere 12\nMeter, und die Klinge funktioniert als magisches Langschwert oder Kurzschwert (deiner Wahl),\ndas bei einem Treffer zusätzlichen 2W6 Feuerschaden verursacht.</p><p><strong>Knopf 2.</strong> Der\ngeflanschte Kopf des Stabes klappt herunter und zwei halbmondförmige Klingen springen heraus,\nwodurch der Stab zu einer magischen Streitaxt wird, die einen Bonus von +3 auf\nAngriffs- und Schadenswürfe gewährt, die damit gemacht werden.</p><p><strong>Knopf\n3.</strong> Der geflanschte Kopf des Stabes klappt herunter, eine Speerspitze springt aus\nder Spitze des Stabes, und der Griff des Stabes verlängert sich zu einem 1,8 Meter langen Schaft,\nwodurch der Stab zu einem magischen Speer wird, der einen Bonus von +3 auf Angriffs-\nund Schadenswürfe gewährt, die damit gemacht werden.</p><p><strong>Knopf 4.</strong> Der\nStab verwandelt sich in eine Kletterstange von bis zu 15 Metern Länge (du gibst die\nLänge an), wobei die Knöpfe des Stabes in deiner Reichweite bleiben. In Oberflächen, die so\nhart wie Granit sind, verankern ein Dorn am unteren Ende und drei Haken am oberen Ende\ndie Stange. Horizontale Stangen von 7,5 cm Länge klappen von den Seiten aus, 30 cm\nvoneinander entfernt, und bilden eine Leiter. Die Stange kann bis zu 2.000 kg tragen. Mehr Gewicht\noder mangelnde feste Verankerung führt dazu, dass der Stab in seine normale\nForm zurückkehrt.</p><p><strong>Knopf 5.</strong> Der Stab verwandelt sich in einen\nhandgehaltenen Rammbock und gewährt seinem Benutzer einen Bonus von +10 auf Stärke (Athletik)-\nWürfe, die gemacht werden, um Türen, Barrikaden und andere\nBarrieren zu durchbrechen.</p><p><strong>Knopf 6.</strong> Der Stab nimmt seine normale\nForm an oder behält sie bei und zeigt den magnetischen Norden an. (Nichts geschieht, wenn diese\nFunktion des Stabes an einem Ort verwendet wird, der keinen magnetischen Norden hat.) Der\nStab gibt dir auch Kenntnis über deine ungefähre Tiefe unter dem Boden oder deine Höhe\ndarüber.</p></details><p><strong>Lebensentzug.</strong> Wenn\ndu eine Kreatur mit einem Nahkampfangriff mit dem Stab triffst, kannst du das Ziel\nzwingen, einen Rettungswurf auf Konstitution SG 17 zu machen. Bei einem misslungenen Rettungswurf\nerleidet das Ziel zusätzlichen 4W6 Nekrotischen Schaden, und du regenerierst eine Anzahl von\nTrefferpunkten, die der Hälfte dieses Nekrotischen Schadens entspricht. Einmal verwendet, kann diese Eigenschaft\nerst wieder bei der nächsten Morgendämmerung verwendet werden.</p><p><strong>Paralyse.</strong> Wenn\ndu eine Kreatur mit einem Nahkampfangriff mit dem Stab triffst, kannst du das Ziel\nzwingen, einen Rettungswurf auf Konstitution SG 17 zu machen. Bei einem misslungenen Rettungswurf\nhat das Ziel den Zustand &amp;Reference[Paralyzed apply=false] für 1\nMinute. Das Ziel wiederholt den Rettungswurf am Ende jedes seiner Züge,\nwobei der Effekt bei Erfolg für es endet. Einmal verwendet, kann diese Eigenschaft erst wieder\nbei der nächsten Morgendämmerung verwendet werden.</p><p><strong>Einschüchtern.</strong> Während du\nden Stab hältst, kannst du eine Magie-Aktion ausführen, um jede Kreatur, die du sehen\nkannst, innerhalb von 9 Metern von dir zu zwingen, einen Rettungswurf auf Weisheit SG 17 zu machen. Bei einem\nmisslungenen Rettungswurf hat ein Ziel den Zustand &amp;Reference[Frightened apply=false]\nfür 1 Minute. Ein eingeschüchtertes Ziel wiederholt den Rettungswurf am Ende\njedes seiner Züge, wobei der Effekt bei Erfolg für es endet. Einmal verwendet,\nkann diese Eigenschaft erst wieder bei der nächsten Morgendämmerung verwendet werden.</p><section\nclass=\"secret\" id=\"secret-o1BCgF1HX5lyWN4U\"><p><strong>Foundry-\nHinweis</strong></p><p>Für jeden verwendbaren Knopf wurde eine Aktivität hinzugefügt,\ndie den Angriff mit den entsprechenden Boni implementiert.</p><p>Die Eigenschaften sind\nebenfalls als Aktivitäten implementiert und verfolgen ihre eigenen Verwendungen pro\nMorgendämmerung.</p><p>Bei Verwendung von Knopf 5 kannst du manuell einen Bonus von +10 im\nFeld 'Situativer Bonus' hinzufügen, wenn du den Wurf machst.</p></section>",
    "activities": {
      "Button 1 Attack": "Knopf 1 Angriff",
      "Button 2 Attack": "Knopf 2 Angriff",
      "Button 2 Versatile Attack": "Knopf 2 Vielseitiger Angriff",
      "Button 3 Attack": "Knopf 3 Angriff",
      "Drain Life": "Lebensentzug",
      "Paralyze": "Paralyse",
      "Terrify": "Einschüchtern"
    }
  },
  "dmgRopeOfClimbin": {
    "name": "Kletterseil",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Dieses 18 Meter lange Seil kann\nbis zu 1.500 kg tragen. Während du ein Ende des Seils hältst, kannst du eine\nMagie-Aktion ausführen, um dem anderen Ende des Seils zu befehlen, sich zu beleben und sich auf ein\nvon dir gewähltes Ziel zuzubewegen, bis zur Länge des Seils von dir entfernt.\nDieses Ende bewegt sich 3 Meter in deinem Zug, wenn du es zuerst befiehlst, und 3 Meter\nzu Beginn jedes deiner folgenden Züge, bis es sein Ziel erreicht oder bis du ihm sagst,\nes solle anhalten. Du kannst dem Seil auch sagen, es solle sich sicher an einem Objekt\nbefestigen oder sich lösen, sich verknoten oder entknoten, oder sich zum Tragen\naufrollen.</p><p>Wenn du dem Seil sagst, es solle sich verknoten, erscheinen große Knoten in\nAbständen von 30 cm entlang des Seils. Im verknoteten Zustand verkürzt sich das Seil auf eine\nLänge von 15 Metern und gewährt Vorteil auf Fertigkeitswürfe, die zum Klettern mit dem Seil\ngemacht werden.</p><p>Das Seil hat RK 20, TP 20 und Immunität gegen Gift- und Psychischen Schaden.\nEs regeneriert 1 Trefferpunkt alle 5 Minuten, solange es mindestens 1 Trefferpunkt hat. Wenn das Seil auf\n0 Trefferpunkte fällt, wird es zerstört.</p><section class=\"secret\"\nid=\"secret-S4xxCILbyoIPQL7g\"><p><strong>Foundry-Hinweis</strong></p><p>Der\nGegenstand hat 20 Verwendungen, um seine TP zu verfolgen. Die Aktivität <strong>Seil\nbeschädigen</strong> kann verwendet werden, um Schaden anzuwenden, und die Aktivität <strong>Seil\nreparieren</strong> kann verwendet werden, um seine TP wiederherzustellen.</p></section>",
    "activities": {
      "Command": "Befehlen",
      "Damage Rope": "Seil beschädigen",
      "Repair Rope": "Seil reparieren"
    }
  },
  "dmgRopeOfEntangl": {
    "name": "Seil der Verstrickung",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Dieses Seil ist 9 Meter lang. Während du ein Ende des Seils hältst, kannst du eine Magie-Aktion ausführen, um dem anderen Ende zu befehlen, vorzuschnellen und eine Kreatur, die du innerhalb von 6 Metern von dir sehen kannst, zu verstricken. Das Ziel muss einen SG 15 Geschicklichkeitsrettungswurf bestehen oder den &amp;Reference[Restrained apply=false]-Zustand erhalten. Du kannst das Ziel freigeben, indem du dein Ende des Seils loslässt (wodurch sich das Seil im Raum des Ziels zusammenrollt) oder indem du eine Bonusaktion verwendest, um den Befehl zu wiederholen (wodurch sich das Seil in deiner Hand zusammenrollt).</p><p>Ein durch das Seil gefesseltes Ziel kann eine Aktion ausführen, um nach eigener Wahl einen SG 15 Stärke (Athletik)- oder Geschicklichkeit (Akrobatik)-Wurf zu machen. Bei einem erfolgreichen Wurf ist das Ziel nicht länger durch das Seil gefesselt. Wenn du das Seil noch hältst, wenn ein Ziel daraus entkommt, kannst du eine Reaktion ausführen, um dem Seil zu befehlen, sich in deiner Hand zusammenzurollen; andernfalls rollt sich das Seil im Raum des Ziels zusammen.</p><p>Das Seil hat RW 20, TP 20 und Immunität gegen Gift- und Psychischen Schaden. Es regeneriert 1 Trefferpunkt alle 5 Minuten, solange es mindestens 1 Trefferpunkt hat. Wenn das Seil auf 0 Trefferpunkte fällt, wird es zerstört.</p><section class=\"secret\" id=\"secret-7RGkmfY1bTmeeb5L\"><p><strong>Foundry-Hinweis</strong></p><p>Der Gegenstand enthält 20 Verwendungen zur Verfolgung seiner TP. Die Aktivität <strong>Seil beschädigen</strong> kann verwendet werden, um Schaden anzuwenden, und die Aktivität <strong>Seil reparieren</strong> kann verwendet werden, um seine TP wiederherzustellen.</p><p>Die Aktivität <strong>Entkommen</strong> kann verwendet werden, um einen Athletik- und Geschicklichkeitswurf an den Chat zu senden, damit das Ziel für seine Flucht würfeln kann.</p></section>",
    "activities": {
      "Damage Rope": "Seil beschädigen",
      "Entangle": "Verstricken",
      "Escape": "Entkommen",
      "Repair Rope": "Seil reparieren"
    }
  },
  "dmgScarabOfProte": {
    "name": "Skarabäus des Schutzes",
    "description": "<p><em>Wundersamer Gegenstand, Legendär (Benötigt Einstimmung)</em></p><p>Dieses käferförmige Medaillon bietet drei Vorteile, solange es sich in deinem Besitz befindet.</p><p><em><strong>Verteidigung.</strong></em> Du erhältst einen +1 Bonus auf die Rüstungsklasse.</p><p><em><strong>Bewahrung.</strong></em> Der Skarabäus hat 12 Ladungen. Wenn du einen Rettungswurf gegen einen Nekromantiezauber oder einen schädlichen Effekt, der von einem Untoten ausgeht, misslingt, kannst du eine Reaktion ausführen, um 1 Ladung zu verbrauchen und den fehlgeschlagenen Rettungswurf in einen erfolgreichen umzuwandeln. Der Skarabäus zerfällt zu Pulver und wird zerstört, wenn seine letzte Ladung verbraucht ist.</p><p><em><strong>Zauberresistenz.</strong></em> Du hast Vorteil bei Rettungswürfen gegen Zauber.</p>",
    "activities": {
      "Preserve": "Bewahren"
    }
  },
  "phbagSignalWhist": {
    "name": "Signalpfeife",
    "description": "<p>Wenn eine Signalpfeife als Aktion 'Nutzen' geblasen wird, erzeugt sie einen Ton, der bis zu 180 Meter weit gehört werden kann.</p>",
    "activities": {
      "Whistle": "Pfeifen"
    }
  },
  "dmgSilverHornOfV": {
    "name": "Silbernes Horn von Valhalla",
    "description": "<p><em>Siehe: @UUID[Compendium.dnd5e.equipment24.Item.dmgHornofValhall]{Horn von Valhalla}</em></p><p><em>Voraussetzung: Keine</em></p><p><em>Geister: 2</em></p><p>Du kannst eine Magie-Aktion ausführen, um dieses Horn zu blasen. Daraufhin erscheinen Kriegergeister aus der Ebene von Ysgard in unbesetzten Räumen innerhalb von 18 Metern von dir. Jeder Geist verwendet den <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmBerserker00000]{Berserker}</strong>-Werteblock und kehrt nach 1 Stunde oder wenn er auf 0 Trefferpunkte fällt nach Ysgard zurück. Die Geister sehen aus wie lebende, atmende Krieger und haben Immunität gegen die &amp;Reference[Charmed apply=false]- und &amp;Reference[Frightened apply=false]-Zustände. Sobald du das Horn benutzt hast, kann es erst nach 7 Tagen wieder verwendet werden.</p><p>Wenn du das Horn bläst, ohne seine Voraussetzung zu erfüllen, greifen die beschworenen Geister dich an. Wenn du die Voraussetzung erfüllst, sind sie dir und deinen Verbündeten gegenüber freundlich und folgen deinen Befehlen.</p>",
    "activities": {
      "Summon Warriors": "Krieger beschwören"
    }
  },
  "dmgSovereignGlue": {
    "name": "Souveräner Klebstoff",
    "description": "<p><em>Wundersamer Gegenstand, Legendär</em></p><p>Diese zähflüssige, milchig-weiße Substanz kann eine dauerhafte Klebeverbindung zwischen zwei beliebigen Objekten herstellen. Sie muss in einem Glas oder einer Flasche aufbewahrt werden, die innen mit @UUID[Compendium.dnd5e.equipment24.Item.dmgOilOfSlipperi]{Öl der Glätte} beschichtet wurde. Wenn sie gefunden wird, enthält ein Behälter 1W6 + 1 Unzen.</p><p>Eine Unze des Klebstoffs kann eine 0,3 Meter große quadratische Oberfläche bedecken. Das Auftragen einer Unze <em>Souveränen Klebstoffs</em> erfordert eine Aktion 'Nutzen', und der aufgetragene Klebstoff benötigt 1 Minute zum Aushärten. Sobald dies geschehen ist, kann die von ihm erzeugte Verbindung nur durch die Anwendung von @UUID[Compendium.dnd5e.equipment24.Item.dmgUniversalSolv]{Universallösungsmittel} oder @UUID[Compendium.dnd5e.equipment24.Item.dmgOilOfEthereal]{Öl der Ätherealität} oder mit einem @UUID[Compendium.dnd5e.spells24.Item.phbsplWish000000]{Wunsch}-Zauber gebrochen werden.</p><section class=\"secret\" id=\"secret-5E4TGkxH4i9Bo67I\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser Gegenstand enthält 7 begrenzte Verwendungen. Die Aktivität <strong>Unzen bestimmen</strong> kann verwendet werden, um die Anzahl der Unzen zu bestimmen, die 1W6 + 1 entsprechen.</p><p>Die Aktivität <strong>Klebstoff auftragen</strong> ermöglicht es dir, die Menge der aufgetragenen Unzen auszuwählen.</p></section>",
    "activities": {
      "Apply Glue": "Klebstoff auftragen",
      "Determine Ounces": "Unzen bestimmen"
    }
  },
  "dmgSphereOfAnnih": {
    "name": "Sphäre der Vernichtung",
    "description": "<p><em>Wundersamer Gegenstand, Legendär</em></p><p>Diese schwarze Sphäre mit 0,6 Meter Durchmesser ist ein Loch im Multiversum, das im Raum schwebt und durch ein sie umgebendes magisches Feld stabilisiert wird.</p><p>Die Sphäre vernichtet jegliche Materie, durch die sie hindurchgeht, und jegliche Materie, die durch sie hindurchgeht. Artefakte sind die Ausnahme. Sofern ein Artefakt nicht anfällig für Schaden durch eine <em>Sphäre der Vernichtung</em> ist, passiert es die Sphäre unversehrt. Alles andere, das die Sphäre berührt, aber nicht vollständig von ihr verschlungen und vernichtet wird, erleidet 8W10 Wuchtschaden.</p><p><em><strong>Die Sphäre kontrollieren.</strong></em> Eine <em>Sphäre der Vernichtung</em> ist stationär, bis jemand die Kontrolle über sie übernimmt. Wenn du dich innerhalb von 18 Metern von einer Sphäre befindest, kannst du eine Magie-Aktion ausführen, um einen SG 25 Intelligenz (Arkanakunde)-Wurf zu machen. Bei einem erfolgreichen Wurf kontrollierst du die Sphäre bis zum Beginn deines nächsten Zuges, und wenn sie unter der Kontrolle einer anderen Kreatur stand, verliert diese Kreatur die Kontrolle über die Sphäre. Bei einem fehlgeschlagenen Wurf bewegt sich die Sphäre 3 Meter in einer geraden Linie auf dich zu.</p><p>Während du die Sphäre kontrollierst, kannst du eine Bonusaktion ausführen, um sie in eine Richtung deiner Wahl zu bewegen, bis zu einer Anzahl von Metern, die dem Fünffachen deines Intelligenzmodifikators entspricht (mindestens 1,5 Meter). Jede Kreatur, deren Raum die Sphäre betritt, muss einen SG 19 Geschicklichkeitsrettungswurf bestehen oder wird von ihr berührt und erleidet 8W10 Wuchtschaden. Eine Kreatur, die durch diesen Schaden auf 0 Trefferpunkte reduziert wird, wird vernichtet und hinterlässt ihre Besitztümer, aber keine anderen physischen Überreste.</p><p><em><strong>Sphären-Interaktionen.</strong></em> Wenn die Sphäre mit einem planaren Portal (wie dem, das durch den @UUID[Compendium.dnd5e.spells24.Item.phbsplGate000000]{Tor}-Zauber erzeugt wird) oder einem extradimensionalen Raum (wie dem innerhalb eines @UUID[Compendium.dnd5e.equipment24.Item.dmgPortableHole0]{Tragbaren Lochs}) in Kontakt kommt, bestimmt der SL zufällig, was passiert, indem er die folgende Tabelle verwendet.</p><p>@Embed[Compendium.dnd5e.tables24.RollTable.dmgSphereOfAnnih]</p>",
    "activities": {
      "Control the Sphere": "Die Sphäre kontrollieren",
      "Engulfed": "Verschlungen"
    }
  },
  "dmgStoneOfContro": {
    "name": "Stein der Erd-Elementar-Kontrolle",
    "description": "<p><em>Wundersamer Gegenstand, Selten</em></p><p>Während du diesen 2,25 kg schweren Stein auf den Boden legst, kannst du eine Magie-Aktion ausführen, um ein <strong>@UUID[Compendium.dnd5e.actors24.Actor.mmEarthElemental]{Erd-Elementar}</strong> zu beschwören. Das Elementar erscheint in einem unbesetzten Raum deiner Wahl innerhalb von 9 Metern von dir, gehorcht deinen Befehlen und ist in der Initiative sofort nach dir an der Reihe. Das Elementar verschwindet nach 1 Stunde, wenn es stirbt oder wenn du es als Bonusaktion entlässt. Der Stein kann auf diese Weise erst wieder nach der nächsten Morgendämmerung verwendet werden.</p>",
    "activities": {
      "Summon Elemental": "Elementar beschwören"
    }
  },
  "dmgTalismanOfPur": {
    "name": "Talisman des reinen Guten",
    "description": "<p><em>Wundersamer Gegenstand, Legendär (Benötigt Einstimmung durch einen Kleriker oder Paladin)</em></p><p>Dieser Talisman ist ein mächtiges Symbol des Guten. Ein Unhold oder ein Untoter, der den Talisman berührt, erleidet 8W6 Strahlungsschaden und erleidet den Schaden jedes Mal erneut, wenn er seinen Zug beendet, während er den Talisman hält oder trägt.</p><p><em><strong>Heiliges Symbol.</strong></em> Du kannst den Talisman als Heiliges Symbol verwenden. Du erhältst einen +2 Bonus auf Zauberangriffswürfe, während du ihn trägst oder hältst.</p><p><em><strong>Reiner Tadel.</strong></em> Der Talisman hat 7 Ladungen. Während du den Talisman trägst oder hältst, kannst du eine Magie-Aktion ausführen, um 1 Ladung zu verbrauchen und eine Kreatur anzuvisieren, die du auf dem Boden innerhalb von 36 Metern von dir sehen kannst. Eine flammende Spalte öffnet sich unter dem Ziel, und das Ziel macht einen SG 20 Geschicklichkeitsrettungswurf. Wenn das Ziel ein Unhold oder ein Untoter ist, hat es Nachteil bei dem Rettungswurf. Bei einem fehlgeschlagenen Rettungswurf fällt das Ziel in die Spalte und wird zerstört, ohne Überreste zu hinterlassen. Bei einem erfolgreichen Rettungswurf wird das Ziel nicht in die Spalte geworfen, erleidet aber 4W6 Psychischen Schaden durch die Tortur. In beiden Fällen schließt sich die Spalte dann und hinterlässt keine Spur ihrer Existenz. Wenn du die letzte Ladung verbrauchst, löst sich der Talisman in goldene Lichtpunkte auf und wird zerstört.</p>",
    "activities": {
      "Fiend and Undead Damage": "Unhold- und Untoten-Schaden",
      "Pure Rebuke": "Reiner Tadel"
    }
  },
  "dmgTalismanOfUlt": {
    "name": "Talisman des ultimativen Bösen",
    "description": "<p><em>Wundersamer Gegenstand, Legendär (Benötigt Einstimmung)</em></p><p>Dieser Gegenstand symbolisiert unbußfertiges Böses. Eine Kreatur, die kein Unhold oder Untoter ist und den Talisman berührt, erleidet 8W6 Nekrotischen Schaden und erleidet den Schaden jedes Mal erneut, wenn sie ihren Zug beendet, während sie den Talisman hält oder trägt.</p><p><em><strong>Heiliges Symbol.</strong></em> Du kannst den Talisman als Heiliges Symbol verwenden. Du erhältst einen +2 Bonus auf Zauberangriffswürfe, während du ihn trägst oder hältst.</p><p><em><strong>Ultimatives Ende.</strong></em> Der Talisman hat 6 Ladungen. Während du den Talisman trägst oder hältst, kannst du eine Magie-Aktion ausführen, um 1 Ladung zu verbrauchen und eine Kreatur anzuvisieren, die du auf dem Boden innerhalb von 36 Metern von dir sehen kannst. Eine flammende Spalte öffnet sich unter dem Ziel, und das Ziel macht einen SG 20 Geschicklichkeitsrettungswurf. Wenn das Ziel ein Himmlisches Wesen ist, hat es Nachteil bei dem Rettungswurf. Bei einem fehlgeschlagenen Rettungswurf fällt das Ziel in die Spalte und wird zerstört, ohne Überreste zu hinterlassen. Bei einem erfolgreichen Rettungswurf wird das Ziel nicht in die Spalte geworfen, erleidet aber 4W6 Psychischen Schaden durch die Tortur. In beiden Fällen schließt sich die Spalte dann und hinterlässt keine Spur ihrer Existenz. Wenn du die letzte Ladung verbrauchst, löst sich der Talisman in übelriechenden Schleim auf und wird zerstört.</p>",
    "activities": {
      "Non-Fiend or Undead Damage": "Schaden für Nicht-Unholde oder Untote",
      "Ultimate End": "Ultimatives Ende"
    }
  },
  "phbagTinderbox00": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "RqrWyXa9XkriaxTP": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "YAXBQxHMEtJx6OuQ": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "EGuDt2xpscYtalmV": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "rIuY5ZDJh6ctfUwG": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "367bsHMaHI1II4k9": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "gHOs5HRZJdnUwfng": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "etKzfLUMWikSsi3R": {
    "name": "Zunderbüchse",
    "description": "<p>Eine Zunderbüchse ist ein kleiner Behälter, der Feuerstein, Zunderstahl und Zunder (gewöhnlich trockenes, in leichtem Öl getränktes Tuch) enthält, um ein Feuer zu entfachen. Sie zum Anzünden einer Kerze, Lampe, Laterne oder Fackel – oder irgendetwas anderem mit offenem Brennstoff – zu verwenden, dauert eine Bonusaktion. Das Anzünden jedes anderen Feuers dauert 1 Minute.</p>",
    "activities": {
      "Light": "Anzünden"
    }
  },
  "dmgTomeOfClearTh": {
    "name": "Band des klaren Denkens",
    "description": "<p><em>Wundersamer Gegenstand, Sehr selten</em></p><p>Dieses Buch enthält Gedächtnis- und Logikübungen, und seine Worte sind mit Magie aufgeladen. Wenn du 48 Stunden über einen Zeitraum von 6 Tagen oder weniger damit verbringst, den Inhalt des Buches zu studieren und seine Richtlinien zu praktizieren, erhöht sich deine Intelligenz um 2, bis zu einem Maximum von 30. Das Handbuch verliert dann seine Magie, erlangt sie aber in einem Jahrhundert zurück.</p><section class=\"secret\" id=\"secret-IEz5CmdQakntpRWJ\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser Gegenstand enthält maximal 48 Verwendungen zur Verfolgung der gelesenen Stunden.</p><p>Die Aktivität <strong>Lesen</strong> enthält einen skalierenden Wert, mit dem du die Anzahl der gelesenen Stunden eingeben kannst. Sobald du 48 erreicht hast, kannst du den enthaltenen Aktiven Effekt verwenden, um deine Intelligenz zu erhöhen.</p><p>Die Aktivität <strong>Fortschritt zurücksetzen</strong> setzt deine Verwendungen auf 0 zurück, wenn du das Buch nicht innerhalb von 6 Tagen abschließt und von vorne beginnen musst.</p></section>",
    "activities": {
      "Read": "Lesen",
      "Reset Progress": "Fortschritt zurücksetzen"
    }
  },
  "dmgTomeOfLeaders": {
    "name": "Band der Führung und des Einflusses",
    "description": "<p><em>Wundersamer Gegenstand, Sehr selten</em></p><p>Dieses Buch enthält Richtlinien zur Beeinflussung und Verzauberung anderer, und seine Worte sind mit Magie aufgeladen. Wenn du 48 Stunden über einen Zeitraum von 6 Tagen oder weniger damit verbringst, den Inhalt des Buches zu studieren und seine Richtlinien zu praktizieren, erhöht sich dein Charisma um 2, bis zu einem Maximum von 30. Das Handbuch verliert dann seine Magie, erlangt sie aber in einem Jahrhundert zurück.</p><section class=\"secret\" id=\"secret-3CB9QWRmYLF6zQFy\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser Gegenstand enthält maximal 48 Verwendungen zur Verfolgung der gelesenen Stunden.</p><p>Die Aktivität <strong>Lesen</strong> enthält einen skalierenden Wert, mit dem du die Anzahl der gelesenen Stunden eingeben kannst. Sobald du 48 erreicht hast, kannst du den enthaltenen Aktiven Effekt verwenden, um dein Charisma zu erhöhen.</p><p>Die Aktivität <strong>Fortschritt zurücksetzen</strong> setzt deine Verwendungen auf 0 zurück, wenn du das Buch nicht innerhalb von 6 Tagen abschließt und von vorne beginnen musst.</p></section>",
    "activities": {
      "Read": "Lesen",
      "Reset Progress": "Fortschritt zurücksetzen"
    }
  },
  "dmgTomeOfUnderst": {
    "name": "Band des Verständnisses",
    "description": "<p><em>Wundersamer Gegenstand, Sehr selten</em></p><p>Dieses Buch enthält Intuitions- und Einsichtsübungen, und seine Worte sind mit Magie aufgeladen. Wenn du 48 Stunden über einen Zeitraum von 6 Tagen oder weniger damit verbringst, den Inhalt des Buches zu studieren und seine Richtlinien zu praktizieren, erhöht sich deine Weisheit um 2, bis zu einem Maximum von 30. Das Handbuch verliert dann seine Magie, erlangt sie aber in einem Jahrhundert zurück.</p><section class=\"secret\" id=\"secret-geGQeemrI6uIgb0R\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser Gegenstand enthält maximal 48 Verwendungen zur Verfolgung der gelesenen Stunden.</p><p>Die Aktivität <strong>Lesen</strong> enthält einen skalierenden Wert, mit dem du die Anzahl der gelesenen Stunden eingeben kannst. Sobald du 48 erreicht hast, kannst du den enthaltenen Aktiven Effekt verwenden, um deine Weisheit zu erhöhen.</p><p>Die Aktivität <strong>Fortschritt zurücksetzen</strong> setzt deine Verwendungen auf 0 zurück, wenn du das Buch nicht innerhalb von 6 Tagen abschließt und von vorne beginnen musst.</p></section>",
    "activities": {
      "Read": "Lesen",
      "Reset Progress": "Fortschritt zurücksetzen"
    }
  },
  "dmgUniversalSolv": {
    "name": "Universallösungsmittel",
    "description": "<p><em>Wundersamer Gegenstand, Legendär</em></p><p>Dieses Röhrchen enthält eine milchige Flüssigkeit mit starkem Alkoholgeruch. Wenn es gefunden wird, enthält ein Röhrchen 1W6 + 1 Unzen.</p><p>Du kannst eine Nutzen-Aktion ausführen, um 1 oder mehr Unzen Lösungsmittel aus dem Röhrchen auf eine Oberfläche in Reichweite zu gießen. Jede Unze löst sofort bis zu 0,09 Quadratmeter (1 Quadratfuß) Klebstoff auf, den sie berührt, einschließlich @UUID[Compendium.dnd5e.equipment24.Item.dmgSovereignGlue]{Souveräner Klebstoff}.</p><section class=\"secret\"\nid=\"secret-cCr2F0ctb7qvQ3x8\"><p><strong>Foundry-Hinweis</strong></p><p>Dieser Gegenstand hat 7 begrenzte Anwendungen. Die Aktivität <strong>Unzen bestimmen</strong> kann verwendet werden, um die Anzahl der Unzen zu bestimmen, die 1W6 + 1 entsprechen.</p><p>Die Aktivität <strong>Lösungsmittel anwenden</strong> ermöglicht es dir, die Anzahl der Unzen auszuwählen, die du anwendest.</p></section>",
    "activities": {
      "Apply Glue": "Klebstoff anwenden",
      "Determine Ounces": "Unzen bestimmen"
    }
  },
  "phbagWaterskin00": {
    "name": "Wasserschlauch",
    "description": "<p>Ein Wasserschlauch fasst bis zu 4 Pints. Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[dehydration]{Dehydrierung}.</p>"
  },
  "LuLBFWwxjbNKU9FF": {
    "name": "Wasserschlauch",
    "description": "<p>Ein Wasserschlauch fasst bis zu 4 Pints. Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[dehydration]{Dehydrierung}.</p>"
  },
  "UOiM3icOTVhR3llN": {
    "name": "Wasserschlauch",
    "description": "<p>Ein Wasserschlauch fasst bis zu 4 Pints. Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[dehydration]{Dehydrierung}.</p>"
  },
  "5tEPJK0TLcjPvPNF": {
    "name": "Wasserschlauch",
    "description": "<p>Ein Wasserschlauch fasst bis zu 4 Pints. Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[dehydration]{Dehydrierung}.</p>"
  },
  "X5XgogJLLydoKdrJ": {
    "name": "Wasserschlauch",
    "description": "<p>Ein Wasserschlauch fasst bis zu 4 Pints. Wenn du nicht genug Wasser trinkst, riskierst du &amp;Reference[dehydration]{Dehydrierung}.</p>"
  },
  "dmgWellOfManyWor": {
    "name": "Brunnen vieler Welten",
    "description": "<p><em>Wundersamer Gegenstand, Legendär</em></p><p>Dieses feine schwarze Tuch, weich wie Seide, ist auf die Größe eines Taschentuchs gefaltet. Es entfaltet sich zu einem kreisförmigen Tuch mit 1,8 Metern (1,8 m) Durchmesser.</p><p>Du kannst eine Magie-Aktion ausführen, um den <em>Brunnen vieler Welten</em> zu entfalten und auf eine feste Oberfläche zu legen, woraufhin er ein zweiseitiges, kreisförmiges Portal mit 1,8 Metern (1,8 m) Durchmesser zu einer anderen Welt oder Existenzebene bildet. Jedes Mal, wenn der Gegenstand ein Portal öffnet, entscheidet der SL, wohin es führt. Das Portal bleibt offen, bis eine Kreatur innerhalb von 1,5 Metern (1,5 m) davon eine Magie-Aktion ausführt, um es zu schließen, indem sie die Ränder des Tuchs ergreift und es zusammenfaltet.</p><p>Sobald der <em>Brunnen vieler Welten</em> ein Portal geöffnet hat, kann er dies für [[/r 1d8 # Stunden]] Stunden nicht wieder tun.</p>",
    "activities": {
      "Unfold": "Entfalten"
    }
  },
  "dmgWindFan000000": {
    "name": "Windfächer",
    "description": "<p><em>Wundersamer Gegenstand, Ungewöhnlich</em></p><p>Während du diesen Fächer hältst, kannst du @UUID[Compendium.dnd5e.spells24.Item.phbsplGustofWind]{Windstoß} (Rettungswurf SG 13) von ihm wirken. Jedes weitere Mal, wenn der Fächer vor der nächsten Morgendämmerung benutzt wird, besteht eine kumulative Chance von 20 Prozent, dass er nicht funktioniert; wenn der Fächer nicht funktioniert, zerreißt er zu nutzlosen, nichtmagischen Fetzen.</p><p><strong>Würfle für die Chance, dass er nicht funktioniert:</strong> [[/r 1d5cs&gt;@item.uses.spent]]</p><section class=\"secret\"\nid=\"secret-hNmHToEJ6Gg4usEf\"><p><strong>Foundry-Hinweis</strong></p><p>Jede Anwendung von Windstoß verbraucht eine Nutzung dieses Gegenstands und wird bei Morgendämmerung zurückgesetzt. Der obige Inline-Wurf würfelt 1W5 und prüft, ob der Wert höher ist als die Anzahl der Nutzungen, um die kumulative 20-prozentige Chance des Nichtfunktionierens zu handhaben. Er gibt „1“ zurück, wenn er erfolgreich ist, und „0“, wenn er fehlschlägt.</p></section>",
    "activities": {
      "Gust of Wind": "Windstoß"
    }
  }
};
