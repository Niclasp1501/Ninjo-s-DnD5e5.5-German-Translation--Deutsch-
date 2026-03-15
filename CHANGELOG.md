# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
