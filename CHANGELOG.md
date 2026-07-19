# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [14.0.14] - 2026-07-19

### Fixed - 350 kaputte Link-Beschriftungen mit Zeilenumbruch-Defekt (\n) repariert

Über die gesamten Live-Wörterbücher (`babele-runtime-overrides.modern.generated.js`,
`babele/dnd5e.content24.json`, `babele/dnd5e.rules.json`) trugen 350 `@UUID`-Links
englische Beschriftungen mit einem `\n` mitten im Text (z. B. `{Gust of\nWind}`,
`{Figurine of\nWondrous Power}`, `{Calligrapher's\nSupplies}`) — ein Alt-Artefakt der
Wörterbuch-Generierung. In Foundry zerbrach das die Anzeige über zwei Zeilen und
verhinderte jede Übersetzung.

Auflösung nach Arbeitsregel #1 (Label = was der Link öffnet):
- **284× über die Ziel-ID** zum deutschen Namen der Zielseite aufgelöst (Windstoß,
  Magisches Geschoss, Magie bannen, Kalligraphiewerkzeuge, Vollständige Genesung …).
- **1× über den Babele-Eintragsnamen** (Charaktererschaffung).
- **65× kuratiert** für editoriale Verweise (35 einzigartige), jeweils am SRD/Glossar
  belegt: Kapitel N, X-Zauberliste / X-Merkmalstabelle / X-Merkmale (Klassennamen
  deutsch), Regeln zur Klassenkombination, Regeln zum Zauberwirken, Epische Gabe,
  Optionen der Schauerlichen Anrufungen, Schule der Hervorrufung, Abenteuerausrüstung …

Rest-`\n`-Labels danach: **0**. Alle drei Wörterbuch-Skripte bestehen `node --check`,
beide JSON-Dateien sind gültig. Das `\n` beweist auto-generierte (nicht handkuratierte)
Labels — Ziel-Auflösung ist hier eindeutig korrekt.

Bekannt/ausgenommen: zwei rein deutsche Nicht-Link-Labels mit Umbruch
(`Emanationsgröße\n(Fuß)` Tabellenkopf, `1d10 ×\n10` Würfelformel) bleiben unangetastet.

## [14.0.13] - 2026-07-19

### Fixed - base-monster alignment now translated (missing Babele converter)

The monster mapping (babele/dnd5e.monsters.json) declared `{"converter": "alignment"}` for
system.details.alignment, but no converter of that name was ever registered — so all ~325
base-system monsters showed English alignment ("Unaligned", "Lawful Evil", …).

Added `convertMonsterAlignmentRuntime` (SRD 5.2.1 map: Unaligned -> gesinnungslos, Lawful ->
Rechtschaffen, Chaotic -> Chaotisch, Good -> gut, Evil -> böse; two-word first-word-capitalised)
and registered it under the name `alignment`. Case-insensitive; unknown values pass through
unchanged; only applies on a German UI. Mirrors the handbook's own creatures (2.2.0.32).

Note: languages/race/environment/source/token converters for the same mapping are likewise
unregistered — those monster fields remain untranslated (separate follow-up).

## [14.0.12] - 2026-07-18

### Fixed - "Bedingung" → "Zustand" for real game states; two Restrained remnants

Only where an actual game-state condition is meant (SRD term "Zustand"). Trigger/weather/
requirement/licence "Bedingungen" (Control Weather tables, Geas/Imprisonment triggers, activation
conditions, CC-licence terms — 41 in total) correctly stay.

    Bedingung -> Zustand   15 spots in the modern runtime override, genus-aware (die Bedingung ->
                           den/der Zustand, die Bedingungen -> die Zustände, der Bedingung [dat.]
                           -> dem Zustand). Includes "&Reference[condition] Bedingung hat" restruc-
                           tured to "den Zustand &Reference[condition] hat".
    Restrained             removed MT glue "&Reference[Restrained]Gefesselt__" -> "&Reference[
                           Restrained]"; "den Zustand 'Gefesselt'" -> "den Zustand 'Festgesetzt'".

Ambiguous "Gefesselt"/"Bewegungsunfähig" effect labels (Entangle/net/chain flavour) were left —
"bound" is plausibly intentional there. Verified counts; JS syntax re-checked.

## [14.0.11] - 2026-07-18

### Fixed - Incapacitated/Frightened labels: capitalised remnants (SRD)

14.0.10 only caught the lowercase predicate forms; the runtime override still carried the
capitalised condition labels/names. Found via a terminology audit of this module:

    Incapacitated   "Handlungsunfähig" -> "Kampfunfähig"   50x (mapping entry, effect labels,
                    "den Zustand Handlungsunfähig", combined labels like "Bezaubert & …")
    Frightened      "Eingeschüchtert"  -> "Verängstigt"     1x (effect label under Rage)

All in scripts/babele-runtime-overrides.modern.generated.js. The module already used
"Kampfunfähig" 20x correctly alongside. Verified counts; residual 0.

Still open in this module (noted for a follow-up): "Bedingung"->"Zustand" for ~14 real
game-state cases; Restrained "Gefesselt" vs "Festgesetzt" (per-case); and the base-monster
alignment field is not translated at all (declared Babele "alignment" converter is missing).

## [14.0.10] - 2026-07-18

### Fixed - Incapacitated: handlungsunfähig → kampfunfähig (in sync with the handbook)

    Incapacitated   handlungsunfähig -> kampfunfähig   (SRD 5.2.1: "Kampfunfähig"; running text
                    lowercase. "handlungsunfähig" 0x in the SRD.)

Two predicate uses ("wenn du handlungsunfähig bist") in content24 + the modern runtime override.

## [14.0.9] - 2026-07-18

### Fixed - Ink Pen name onto the official SRD term (in sync with the handbook)

    Ink Pen   Schreibfeder -> Tintenfüller   (SRD 5.2.1: "Tintenfüller" 6x, "Schreibfeder" 0x)

Item name in the legacy runtime override (3x). The Barbarian's "Inkarnation der Wildheit"
(incarnation of ferocity) is legitimate German and was left as is. A broader "Bedingung"->
"Zustand" pass over the Babele translation (56 occurrences, mostly trigger/weather conditions
that must stay) is deferred to a dedicated audit.

## [14.0.8] - 2026-07-18

### Fixed - species-feature names pulled onto the official SRD 5.2.1 forms (in sync with the handbook)

The standalone handbook module unified these names to the official SRD 5.2.1 (its v2.2.0.27);
this brings the Babele translation of the core dnd5e system onto the same terms. Verified in
the German SRD species sections:

    Otherworldly Presence  Jenseitige Präsenz     -> Außerweltliche Präsenz   (Tiefling)
    Stone's Endurance      Steinerne Ausdauer     -> Felsenfestigkeit         (Goliath, „(Steinriese)“ stays)
    Relentless Endurance   Unerbittliche Ausdauer -> Durchhaltevermögen       (Ork; other spots already said so)
    Powerful Build         Mächtiger Körperbau    -> Kräftiger Körperbau      (Goliath)
    Drow (flavor/tables)   Dunkelelf(e/en)        -> Drow

Patched in the Babele sources (content24, tables) AND the generated runtime overrides
(modern + legacy) that babele-register.js loads live, plus one label in languages/de.json.
Every rule verified with an exact expected count; JSON re-validated. Legitimate prose
("geschärfte Sinne", "scharfe Sinne") left untouched.

## [14.0.7] - 2026-07-17

### Fixed - imperial units were labelled with metric names

A mile is 1.6 km and a cubic foot is 0.028 m³. These keys are **labels**, not
conversions - they name a value without changing it. So `10 mi` displayed as
"10 Kilometer" while meaning 16 km, and `mi` and `km` became indistinguishable in
the interface: `CONFIG.DND5E.movementUnits` showed *Kilometer / km* for both.

| Key | Original | Was | Now |
| --- | --- | --- | --- |
| `DISTANCE.Mile.Label` | Miles | `Kilometer` | `Meilen` |
| `DISTANCE.Mile.Abbreviation` | mi | `km` | `mi` |
| `DISTANCE.Mile.Template` | Miles | `Kilometer` | `Meilen` |
| `TRAVEL.Mile.Label` | Miles | `Kilometer` | `Meilen` |
| `TRAVEL.Mile.AbbreviationDay` | mi/d | `km/T` | `mi/T` |
| `TRAVEL.Mile.AbbreviationHour` | mph | `km/h` | `mi/h` |
| `VOLUME.CubicFoot.Abbreviation` | ft³ | `m³` | `ft³` |
| `VOLUME.CubicFoot.Counted.narrow` | {number}ft³ | `{number}m³` | `{number}ft³` |
| `VOLUME.CubicFoot.Counted.short` | {number} cu ft | `{number} m³` / untranslated | `{number} ft³` |

The module contradicted itself, which is what settles it: `Foot` is `Fuß` / `ft`,
`CubicFoot.Label` is `Kubikfuß`, and `DND5E.DistMi` already renders *Miles* as
`Meilen`. Only these keys pulled the other way.

Converting to metric is what the world setting **Metrische Längeneinheiten
verwenden** (`dnd5e.metricLengthUnits`) is for - it changes the number, using the
system's factor of 3.333, which is the SRD's own: 30 feet = 9 m. Renaming the unit
does not convert anything; it only makes the sheet lie.

Also `TRAVEL.Kilometer.AbbreviationDay` was `km/d` - the *d* is *day*, and the mile
key already used `/T`. Now `km/T`.

Key count verified unchanged: `languages/de.json` 3584.

## [14.0.6] - 2026-07-17

### Fixed - the runtime dictionaries had never been included

The terminology passes 14.0.1 through 14.0.3 cleaned `babele/*.json` and
`languages/de.json` and never touched
`scripts/babele-runtime-overrides.{modern,legacy}.generated.js` - 3 MB together,
imported by `babele-register.js` and therefore live. Those entries said what this
module said a year ago:

| Term | Was | Now | Evidence |
| --- | --- | --- | --- |
| Bardic Inspiration | `Bardeninspiration` (11x) | `Bardische Inspiration` | SRD 5x |
| Bardic Inspiration die | `Bardeninspirationswürfel` (9x) | `Bardische-Inspiration-Würfel` | SRD, with hyphens |
| Armor Training | `Rüstungstraining` (13x) | `Rüstungsvertrautheit` | SRD 18x |
| Tinderbox | `Zunderbüchse` (8x) | `Zunderkästchen` | SRD 11x |
| Epic Boon | `Epischer Segen` (7x) | `Epische Gabe` | SRD 26x |
| Waterskin | `Wasserschlauch` (5x) | `Trinkschlauch` | SRD 8x |
| Ability Check | `Attributsprobe` (7x) | `Attributswurf` | SRD 48x; `Attributsprobe` 0x |
| Greater Restoration | `Größere Wiederherstellung` (2x) | `Vollständige Genesung` | SRD 19x |
| Multiclassing | `Mehrklassigkeit` | `Klassenkombination` | SRD 28x |

Half of these change gender, so the article had to travel with them - "**eine**
Zunderbüchse" is "**ein** Zunderkästchen", "**eine** Attributsprobe" is "**einen**
Attributswurf". Each was read in place first. The definition of Ability Check was
doubly wrong and is now right in both respects:

    was  Eine Attributsprobe ist ein W20-Prüfung, der die Verwendung …
    now  Ein Attributswurf ist eine W20-Prüfung, die die Verwendung …

### Fixed - Ring Mail said the wrong armor

    EN   This armor is leather armor with heavy rings sewn into it.
    was  Bei dieser Rüstung handelt es sich um einen Lederpanzer, in dem …
    now  Bei dieser Rüstung handelt es sich um eine Lederrüstung, in die …

`Lederpanzer` appears 0x in the SRD. It is tempting to read it as Hide Armor -
`Fellrüstung` - because that item used to be called `Lederpanzer` in the handbook.
It is not: here it renders *leather armor*, which is `Lederrüstung` (SRD 25x).
Fellrüstung would have been a confident, wrong answer.

Key counts verified after every edit: content24 2788, rules 1350, de.json 4798;
both runtime dictionaries still import with 2174 and 2114 entries.

## [14.0.5] - 2026-07-17

### Fixed

14.0.4 renamed the two feats where they were *mentioned*, but not where they are
*named*. The runtime dictionary carries the feat's own `name` field, and it still
said the old thing, so the compendium entry itself was unchanged:

    phbftSkilled0000   name: Geübt         -> Begabt
    phbftMagicInitia   name: Magiekundiger -> Eingeweihter der Magie

Caught by asking the running game what the feats are called rather than by reading
the file - the file looked done.

Why `Begabt` and not `Geübt`, given that *proficient* is `geübt` everywhere: the
SRD entry answers it.

    EN   Skilled / Origin Feat / You gain proficiency in any combination of three
         skills or tools of your choice.
    DE   Begabt / Herkunftstalent / Du bist in drei Fertigkeiten oder Werkzeugen
         deiner Wahl in beliebiger Kombination geübt.

The feat is `Begabt`; `geübt` inside its own description is *proficient*. Naming
the feat `Geübt` would collide with the word its own text needs. Four terms, four
words: proficient = geübt, Proficiency Bonus = Übungsbonus, Skill = Fertigkeit,
Skilled = Begabt.

## [14.0.4] - 2026-07-17

### Fixed

Kept in sync with Spielerhandbuch-Deutsch 2.2.0.6, which unified the feat
vocabulary against the official German SRD 5.2.1. This module said different
things than the handbook for the same terms:

| Term | Was | Now | Evidence |
| --- | --- | --- | --- |
| `Origin feat` | `Ursprungstalent`, `Herkunfts-Talent`, and the untranslated `Origin feat` | `Herkunftstalent` | SRD 12x |
| `Epic Boon feat` | `Talente der epischen Gaben`, untranslated `Epic Boon feat` | `Epische-Gabe-Talent` | SRD 21x |
| `Fighting Style feat` | untranslated `Fighting Style feat` | `Kampfstil-Talent` | SRD 6x |
| `Ability Score Improvement` | `Attributsverbesserung` - including the feat's own name | `Attributswerterhöhung` | SRD 84x |
| `Skilled` | `Geübt` | `Begabt` | SRD 2x; `Geübt` 0x |
| `Magic Initiate` | `Magiekundiger` | `Eingeweihter der Magie` | SRD 3x; `Magiekundiger` 0x |

The English leftovers all shared one tell: a line break inside the link label -
`{Origin\nfeat}`, `{Epic\nBoon feat}`, `{Fighting\nStyle feat}`. The newline
broke the lookup of whatever translated the rest, so exactly those were skipped.

### Deliberately not changed

- **`geübt`, 168 places.** That is *proficient* ("in der Fertigkeit Akrobatik geübt")
  and correct. Only the 3 places where `Geübt` was the name of the feat *Skilled*
  were touched, anchored on the feat id `phbftSkilled0000`, never on the word.
- **`Inkarnation`, 2 places.** In the Barbarian text it is ordinary German - "eine
  Inkarnation der Wildheit eines Raubtiers" - not the Eldritch Invocation.
- **All Babele keys.** They are English and are how Babele finds the document to
  translate; only values were changed. Key counts verified unchanged after every
  edit: content24 2788, feats24 folders 46, de.json 3584, the runtime dictionaries
  2174 and 2114 entries, and both still import.

### Known limitations

70 link labels in the runtime dictionary are still English, all with the same line
break defect: `Figurine of\nWondrous Power` (9x), `Gust of\nWind` (5x), `Pact of the
Blade` (3x), `Boon of Dimensional\nTravel` (3x), `Pact of the Tome` (2x),
`Book of Shadows` (2x). Those are magic items, spells and warlock invocations - a separate
family, to be done with the SRD and the glossary rather than folded in here.

## [14.0.3] - 2026-07-16

### Fixed

Kept in sync with Spielerhandbuch-Deutsch 2.2.0.1:

| Term | Was | Now | Evidence |
| --- | --- | --- | --- |
| Dim Light | `schwaches Licht` | `dämmriges Licht` | SRD: "Dämmriges Licht, auch als Schatten bezeichnet" |
| Ball Bearings | `Kugellager` | `Metallkügelchen` | SRD 6x |
| Ink Pen | `Schreibfeder` | `Tintenfüller` | SRD 6x |

Checked and deliberately NOT changed - each is a homonym, not a stale term:

- `Verstricken` in monsters.json is the Entangle spell (it sits in a druid
  spell list next to "Mit Tieren sprechen"), not Bane.
- `{number} Kugeln` in de.json is the ammunition counter, not Ball Bearings.
- `Verkleidungsausrüstung` is the Disguise Kit, not Costume.
- `@UUID[...spells...]{Fesseln}` is the Enthrall spell, not Manacles.
- `Elementar beschwören` in monsters.json is Conjure Elemental and correct;
  only the Summon spells moved to "herbeirufen".

Babele keys verified byte-stable.

## [14.0.2] - 2026-07-16

### Fixed

Kept in sync with the Spielerhandbuch-Deutsch module, which was unified against
the official German SRD 5.2.1 in the same pass. Six terms diverged:

| Term | Was | Now | Evidence |
| --- | --- | --- | --- |
| Armor Training | `Rüstungstraining` | `Rüstungsvertrautheit` | SRD 18x |
| Waterskin | `Wasserschlauch` | `Trinkschlauch` | SRD 8x |
| Tinderbox | `Zunderbüchse` | `Zunderkästchen` | SRD 11x |
| Bardic Inspiration | `Bardeninspiration` | `Bardische Inspiration` | SRD 5x |
| Greater Restoration | `Größere Wiederherstellung` | `Vollständige Genesung` | SRD 19x |
| Halfling Nimbleness | `Halbling-Flinkheit` | `Halblingsgewandtheit` | SRD 1x |

Deliberately left unchanged after checking: `"id": "Multiattack"` and the other
143 `id` values in `babele/dnd5e.monsters.json`. These are Babele's English
matching keys, not display names -- the German name sits next to them and is
already correct (`{"id": "Multiattack", "name": "Mehrfachangriff"}`). Renaming
them would silently disable those translations. `id` is now treated as a key.

Babele keys verified byte-stable against git: `languages/de.json` 4798,
`babele/dnd5e.content24.json` 2788, `babele/dnd5e.rules.json` 1350,
`babele/dnd5e.tables24.json` 1194 -- none added, none removed.

## [14.0.1] - 2026-07-16

### Fixed

Terminology now follows the **official German System Reference Document 5.2.1**,
published by Wizards of the Coast on 2025-12-08 under CC-BY-4.0. It covers the
2024 rules edition this module translates:

    https://media.dndbeyond.com/compendium-images/srd/5.2/DE_SRD_CC_v5.2.1.pdf

This source was previously believed not to exist, and terms were derived instead
(see the correction under *Changed* below). Every entry here is now backed by a
literal quotation from it.

| Term | Was | Now | Evidence in SRD 5.2.1 (de) |
| --- | --- | --- | --- |
| D20 Test | `D20 Test` / `W20-Probe` / `W20-Test` | `W20-Prüfung` | "Solche Würfe heißen W20-Prüfungen." (39x) |
| Weapon Mastery | `Waffenmeisterschaft` | `Waffenbeherrschung` | "1. Stufe: Waffenbeherrschung" (15x) |
| Multiclassing | `Mehrklassigkeit` | `Klassenkombination` | 28x |
| condition (before a condition name) | `die Bedingung Vergiftet` | `den Zustand Vergiftet` | `Zustand` 215x |

Damage types and conditions from the previous entry were re-checked against the
SRD 5.2.1 and are all confirmed: `Wucht`, `Stich`, `Hieb`, `Feuer`, `Kälte`,
`Blitz`, `Schall`, `Säure`, `Gift`, `Nekrotisch`, `Gleißend`, `Energie`,
`Psychisch`, and all 15 condition names. `Zaubergrad` is confirmed (64x).

**`Attributswurf` was already correct here and is unchanged.** The sibling
Spielerhandbuch-Deutsch module had been unified onto `Attributsprobe`, a term
that appears 0x in the official SRD; that module was corrected to match this
one, not the other way round.

Deliberately left unchanged:

- `Fertigkeitsübung(en)`. The SRD's term is the class-table heading
  "Fertigkeiten, in denen du geübt bist" — a full sentence. In this module the
  word is a UI checkbox label (`DND5E.TRANSFORM.Setting.Keep.Skills.Label`) and
  running prose ("die Fertigkeitsübungen eines Monsters"). Substituting the
  sentence would wreck both.
- `Bedingung` as ordinary German ("ungesunden Bedingungen", "unter den
  Bedingungen der Creative Commons"). It appears 16x in the SRD in this sense.
  Only occurrences directly preceding a condition name were changed.

Babele keys are byte-stable: `languages/de.json` 4798 keys and
`babele/dnd5e.content24.json` 2788 keys before and after, none added, none
removed. `D20 Test` and `D20 Tests` remain as keys — only their labels and
values were translated.

### Changed

- README: documents SRD 5.2.1 conformance and the evidence rule for terminology.
- README: added optional beta participation guidance, including practical risk
  notes for test-only usage and backup recommendations.

### Corrected

The previous entry stated that no official German source could be sourced for
the 2024 terminology — "the D3 dictionary covers the 2014 PHB only, the D3
errata database lists no PHB24, and the German SRD is 5.1" — and tagged several
terms `derived` / `needs-official-check`. **That is no longer true.** The German
SRD 5.2.1 was published on 2025-12-08 and confirms all of them:

| Term | Status then | SRD 5.2.1 (de) |
| --- | --- | --- |
| Tier of Play -> `Stufenbereich` | `derived`, unsourced | confirmed, 13x |
| Emanation -> `Ausströmung` | from reviews only | confirmed, 91x |
| Heroic Inspiration -> `Heldische Inspiration` | from reviews only | confirmed, 15x |

The master glossary has been updated accordingly: 523 entries are now tagged
`srd-5.2.1` with the source recorded, and the `needs-official-check` backlog
dropped from 29 to 24.


## [14.0.0] - 2026-04-22
### Changed
- Adopted Foundry-visible versioning (`14.x.y`) to make target compatibility generation immediately recognizable in releases.
- Bumped module release version to `14.0.0` for the first Foundry-v14-verified line.
- Kept dual support contract: `compatibility.minimum = 13`, `compatibility.verified = 14`, and `dnd5e` requirement at `5.x`.
- Added dual render-hook coverage (`renderApplication` + `renderApplicationV2`) for runtime localization passes in mixed V13/V14 app paths.

## [1.0.7] - 2026-03-23
### Fixed
- Added missing spells folder mappings for `Cantrips` and `Supplemental Items` in both modern and legacy spell packs.
- Folder labels now resolve to German consistently in the sidebar:
  - `Cantrips` -> `Zaubertricks`
  - `Supplemental Items` -> `Zusätzliche Inhalte`

## [1.0.6] - 2026-03-23
### Fixed
- Restored class chapter subsection rendering in modern rules content (`content24`), so class TOC entries like `Ein ... werden ...`, `Als Charakter der Stufe 1`, and `Als Multiklassen-Charakter` are available consistently across all core classes.
- Added missing `phbAppendixClass` class-specific page mappings referenced by chapter embeds, eliminating class-specific gaps where only Barbarian showed the expected subsection blocks.

### Changed
- Synchronized appendix-backed class chapter structure with existing German class translations to keep chapter navigation and in-page heading anchors stable.

## [1.0.5] - 2026-03-20
### Changed
- Expanded modern/legacy damage localization compatibility by adding key-safe coverage for both flat and nested dnd5e i18n key families used across 5.x.
- Hardened runtime damage label mapping for resistance/immunity/vulnerability dialogs and physical bypass property labels.

### Fixed
- Fixed remaining English `Physical Bypasses`/hint text in damage trait dialogs by mapping the correct system keys instead of DOM-level rewrites.
- Fixed untranslated legacy damage labels (e.g. `Acid`, `Fire`, `Bludgeoning`) in dialogs that still use flat `DND5E.Damage*` keys.
- Kept Babele-safe behavior intact while removing brittle UI patching paths that could drift with system template changes.

## [1.0.4] - 2026-03-18
### Changed
- Expanded modern origins/content coverage and repaired appendix-based species/background localization paths.
- Improved runtime handling for modern origins/class-related data and additional advancement text mapping.

### Fixed
- Fixed broken/misaligned appendix translations (e.g. wrong content assignments in species pages).
- Prevented nested-embed recursion issues that could cause sluggish windows and repeated Foundry warnings.
- Improved UTF-8/encoding handling in UI labels and item names, including robust display of `ß`, `ä`, `ö`, and `ü`.

## [1.0.3] - 2026-03-17
### Changed
- Expanded modern SRD translation coverage across multiple packs (including substantial additions in spells, origins, classes/features, feats, and content journals).
- Improved metric conversion/runtime handling for additional spell fields and modern data structures.

### Notes
- Modern SRD/compendium translation is now much broader than previous releases, but still beta and not yet fully complete in all areas.

## [1.0.2] - 2026-03-15
### Changed
- Localized compendium folder names more robustly for legacy and modern sidebar structures.
- Standardized legacy SRD pack labels to include `(SRD, DE)` consistently (heroes, rules, tables, monsters).

### Fixed
- Legacy folder headers (`D&D Legacy Content`, `Character Features`, `Items & Spells`, `Monsters`) now localize reliably in-world.
- `Player's Handbook` sidebar label now localizes to `Spielerhandbuch`.

## [1.0.1] - 2026-03-15
### Changed
- Expanded runtime TOC heading localization for modern rules overview chapters.
- Centralized TOC heading map used by both context patching and DOM fallback localization.

### Fixed
- Remaining English overview headings (e.g. `Spells`, `Magic Items`, `Feats`, `Tracking Sheets`) now localize consistently in German UI.

## [1.0.0] - 2026-03-15
### Added
- First beta release (`1.0.0`).
- Stable Babele runtime mapping for equipment-focused translation in:
  - `dnd5e.items` (legacy)
  - `dnd5e.equipment24` (modern)
- Folder and subfolder translation mappings for the equipment packs.

### Changed
- README updated with German-first structure and explicit beta scope.
- Scope messaging aligned: current release focuses on equipment content.

### Fixed
- UTF-8 umlaut handling in equipment folder labels.
- Additional modern equipment folder labels completed.
