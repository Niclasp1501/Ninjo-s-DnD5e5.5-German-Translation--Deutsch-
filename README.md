# Ninjo's DnD5e5.5 German Translation (Deutsch)

**Version:** 1.0.6  
**Status:** Beta

Dieses Modul Ã¼bersetzt das Foundry-`dnd5e`-System (5.x) fÃ¼r Foundry v13 ins Deutsche.

## Deutsch (zuerst)

### Zielbild
- Kernfokus ist eine starke deutsche SystemÃ¼bersetzung fÃ¼r:
  - DnD5e-ModuloberflÃ¤che
  - Character Sheets
  - zentrale Spiel- und Bedienfunktionen
- Diese Hauptfunktion ist bereits nutzbar.

### Was ist Beta?
- Beta betrifft primÃ¤r Regel-/Kompendiumsinhalte (SRD und weitere Inhalte).
- Aktuell ist in diesem Bereich vor allem **AusrÃ¼stung** (Legacy + Modern) weit ausgebaut.
- Weitere Inhalte folgen schrittweise in kommenden Releases.
- In `1.0.3` wurden viele weitere Modern-SRD-Inhalte ergÃ¤nzt.
- Hinweis: Die Modern-SRD/Kompendium-Ãœbersetzung ist deutlich breiter abgedeckt, aber weiterhin beta und noch nicht vollstÃ¤ndig.
- In `1.0.4` wurden Origins-/Appendix-Probleme behoben (falsche Zuordnungen, Embed-Rekursionen) und die StabilitÃ¤t verbessert.
- Ebenfalls in `1.0.4`: verbesserte UTF-8/Zeichensatzbehandlung, inklusive korrekter Anzeige von `ÃŸ`, `Ã¤`, `Ã¶` und `Ã¼`.
- In `1.0.5` wurden verbliebene englische Schadens-/Bypass-Texte über korrekte dnd5e-i18n-Keys behoben (ohne UI-Hacks), inkl. `Physical Bypasses` und Legacy-`Damage*`-Labels.
- In `1.0.6` wurden Klassenkapitel im Regelwerk stabilisiert: fehlende `phbAppendixClass`-Unterseiten wurden ergänzt, damit TOC-Abschnitte wie `Ein ... werden ...` wieder für alle Kernklassen konsistent erscheinen.

### Feedback
- Feedback ist ausdrÃ¼cklich willkommen und hilft direkt bei der Priorisierung der nÃ¤chsten Ãœbersetzungsbereiche.

### Voraussetzungen
- Foundry VTT v13
- `dnd5e` System 5.x (aktiv in der Welt)
- Babele 2.7.5 oder neuer

### Optional empfohlen
- `metric-ruler-labels` (separates Modul) fÃ¼r zusÃ¤tzliche metrische Anzeigen im Lineal/Messwerkzeug.
- Hinweis: Distanz-/Reichweitenangaben werden standardmÃ¤ÃŸig metrisch behandelt (`m`/`km`), sofern `dnd5e.metricLengthUnits` aktiv ist.

### Installation
1. In Foundry auf **Add-on Modules** gehen.
2. **Install Module** auswÃ¤hlen.
3. Manifest einfÃ¼gen:
   `https://github.com/Niclasp1501/Ninjo-s-DnD5e5.5-German-Translation--Deutsch-/releases/latest/download/module.json`
4. Modul installieren, Foundry neu starten, Modul in der Welt aktivieren.

---

## English

### Project Goal
- Primary goal is robust German system translation for:
  - dnd5e module interface
  - character sheets
  - core gameplay-facing UI
- This core function is already usable.

### What is Beta?
- Beta currently applies mainly to rules/compendium content (SRD and additional content packs).
- In that area, **equipment** (legacy + modern) is currently the most developed.
- More content will be added step by step in upcoming releases.
- `1.0.3` adds substantial modern SRD translation coverage across additional packs.
- Note: modern SRD/compendium translation is now much broader, but still beta and not yet complete.
- `1.0.4` fixes origins/appendix regressions (wrong content mapping, embed recursion issues) and improves runtime stability.
- `1.0.4` also improves UTF-8 character handling, including reliable rendering of `ÃŸ`, `Ã¤`, `Ã¶`, and `Ã¼`.
- `1.0.5` fixes remaining English damage/bypass labels via correct dnd5e i18n keys (no DOM hack), including `Physical Bypasses` and legacy flat `Damage*` labels.
- `1.0.6` stabilizes class chapter rendering in rules content by completing missing `phbAppendixClass` class pages, restoring consistent TOC subsections across all core classes.

### Feedback
- Feedback is very welcome and helps prioritize the next translation areas.

### Requirements
- Foundry VTT v13
- `dnd5e` system 5.x (active in world)
- Babele 2.7.5 or newer

### Optional recommendation
- `metric-ruler-labels` (separate module) for additional metric labels in ruler/measuring tool overlays.
- Note: Distance/range values are handled in metric units (`m`/`km`) by default when `dnd5e.metricLengthUnits` is enabled.

### Installation
1. Open **Add-on Modules** in Foundry.
2. Click **Install Module**.
3. Paste manifest URL:
   `https://github.com/Niclasp1501/Ninjo-s-DnD5e5.5-German-Translation--Deutsch-/releases/latest/download/module.json`
4. Install, restart Foundry, enable module in your world.

## License
MIT License, see [LICENSE](LICENSE).
