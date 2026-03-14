# Ninjo's DnD5e5.5 German Translation (Deutsch)

**Current Version / Aktuelle Version:** 0.1.0

German localization module for the official Foundry VTT `dnd5e` system (5.x) on Foundry VTT v13.

MVP scope: UI-first localization only. No SRD or compendium gameplay content is included in this module.

---

## English

### Scope (MVP)
- Includes: UI localization keys from `dnd5e/lang/en.json` (sheets, settings, dialogs, hints, system-facing UI).
- Excludes: SRD/content packs and gameplay text (for example: `content24`, `rules`, `spells24`, `classes24` key spaces).

### Requirements
- Foundry VTT v13
- Official `dnd5e` system, version 5.x

### Installation
1. Open Foundry VTT and go to **Add-on Modules**.
2. Click **Install Module**.
3. Paste the manifest URL:
   `https://github.com/Niclasp1501/foundryvtt-dnd5e55-lang-de/releases/latest/download/module.json`
4. Restart Foundry and enable the module in your world.

### Architecture
- `module.json`: module metadata and dependency on `dnd5e`
- `scripts/init.js`: minimal runtime guard and init hook
- `languages/de.json`: primary localization file
- `tools/`: diff and validation scripts
- `config/`: scope and glossary governance files

### Contribution Workflow (planned)
1. Diff latest `dnd5e/lang/en.json` against `languages/de.json`.
2. Translate missing UI keys.
3. Run validation checks (JSON, placeholders, scope).
4. Open PR with changelog entry.

---

## Deutsch

### Scope (MVP)
- Enthalten: UI-Lokalisierungs-Keys aus `dnd5e/lang/en.json` (Sheets, Einstellungen, Dialoge, Hinweise, systemnahe UI).
- Ausgeschlossen: SRD-/Content-Pakete und Regeltexte (z. B. `content24`, `rules`, `spells24`, `classes24`).

### Voraussetzungen
- Foundry VTT v13
- Offizielles `dnd5e`-System, Version 5.x

### Installation
1. Foundry VTT starten und zu **Zusatzmodule** wechseln.
2. **Modul installieren** klicken.
3. Manifest-URL einfugen:
   `https://github.com/Niclasp1501/foundryvtt-dnd5e55-lang-de/releases/latest/download/module.json`
4. Foundry neu starten und das Modul in der Welt aktivieren.

### Projektstruktur
- `module.json`: Modul-Metadaten und `dnd5e`-Abhangigkeit
- `scripts/init.js`: minimaler Runtime-Guard und Init-Hook
- `languages/de.json`: zentrale Ubersetzungsdatei
- `tools/`: Diff- und Validierungs-Skripte
- `config/`: Scope- und Glossar-Regeln

---

## License / Lizenz
This project is licensed under the MIT License. See [LICENSE](LICENSE).
