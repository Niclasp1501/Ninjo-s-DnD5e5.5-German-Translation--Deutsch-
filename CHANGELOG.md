# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Local test branch: bumped module compatibility verification to Foundry v14 and raised required `dnd5e` minimum to `5.3.0`.
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
