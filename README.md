# Ninjo's DnD5e5.5 German Translation (Deutsch)

**Current Version / Aktuelle Version:** 0.1.2

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
- Python 3.10+

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
- `config/`: scope, glossary and metric policy
- `tools/`: migration, diff, translation and validation scripts

### LLM Translation Pipeline (Gemini)
1. Extract missing keys:
   `python tools/extract_missing_keys.py --en C:/Users/nicla/Documents/Playground/dnd5e/lang/en.json --de languages/de.json --out tools/missing-keys.json`
2. Set API key:
   `setx GEMINI_API_KEY "<your-key>"`
3. Generate suggestions (writes `languages/de.suggestions.json`):
   `python tools/translate_missing_gemini.py --missing tools/missing-keys.json`
4. Validate suggestions (placeholders, HTML tags, unit plausibility):
   `python tools/validate_suggestions.py --en C:/Users/nicla/Documents/Playground/dnd5e/lang/en.json --suggestions languages/de.suggestions.json`
5. Merge approved suggestions:
   `python tools/merge_suggestions.py --base languages/de.json --suggestions languages/de.suggestions.json --out languages/de.json`

Notes:
- The LLM is allowed to suggest metric conversions.
- Suggestions are intentionally written to a separate file first.
- Validation blocks obviously broken placeholder and unit output.

---

## Deutsch

### Scope (MVP)
- Enthalten: UI-Lokalisierungs-Keys aus `dnd5e/lang/en.json` (Sheets, Einstellungen, Dialoge, Hinweise, systemnahe UI).
- Ausgeschlossen: SRD-/Content-Pakete und Regeltexte (z. B. `content24`, `rules`, `spells24`, `classes24`).

### Voraussetzungen
- Foundry VTT v13
- Offizielles `dnd5e`-System, Version 5.x
- Python 3.10+

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
- `config/`: Scope-, Glossar- und Metrik-Policy
- `tools/`: Migrations-, Extraktions-, Ubersetzungs- und Validierungs-Skripte

### LLM-Ubersetzungs-Pipeline (Gemini)
1. Fehlende Keys extrahieren:
   `python tools/extract_missing_keys.py --en C:/Users/nicla/Documents/Playground/dnd5e/lang/en.json --de languages/de.json --out tools/missing-keys.json`
2. API-Key setzen:
   `setx GEMINI_API_KEY "<dein-key>"`
3. Vorschlage erzeugen (`languages/de.suggestions.json`):
   `python tools/translate_missing_gemini.py --missing tools/missing-keys.json`
4. Vorschlage validieren (Platzhalter, HTML-Tags, Einheiten-Plausibilitat):
   `python tools/validate_suggestions.py --en C:/Users/nicla/Documents/Playground/dnd5e/lang/en.json --suggestions languages/de.suggestions.json`
5. Freigegebene Vorschlage mergen:
   `python tools/merge_suggestions.py --base languages/de.json --suggestions languages/de.suggestions.json --out languages/de.json`

Hinweise:
- Das LLM darf metrische Umrechnungen vorschlagen.
- Vorschlage gehen bewusst erst in eine separate Datei.
- Die Validierung blockt offensichtliche Platzhalter-/Einheitenfehler.

---

## License / Lizenz
This project is licensed under the MIT License. See [LICENSE](LICENSE).

### Live Window Runner (PowerShell)
Start a separate PowerShell window with live pipeline status:
`powershell -ExecutionPolicy Bypass -File tools/start_pipeline_window.ps1 -BatchSize 5 -SleepMs 3000 -MaxBatches 5`

The window shows each stage and writes a full log to `tools/logs/`.

