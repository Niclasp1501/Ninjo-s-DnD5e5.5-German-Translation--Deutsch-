# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.7] - 2026-03-15
### Added
- ID-based runtime override table for 5 tool examples (`Forgery`, `Thieves`, `Navigator`, `Poisoner`, `Herbalism`).

### Changed
- Version bumped to `0.1.7`.
- Replaced regex-based runtime phrase replacement with deterministic item-ID lookup for tool content.

### Fixed
- Included `babele/` directory in release packaging workflow so runtime mapping files are present in `module.zip`.

## [0.1.6] - 2026-03-15
### Changed
- Version bumped to `0.1.6`.

### Fixed
- Corrected module repository URLs in manifest metadata (`url`, `manifest`, `download`) to the active GitHub repository.
- Restored valid Foundry install path for `latest/download/module.zip`.

## [0.1.5] - 2026-03-15
### Added
- Babele integration for runtime weapon and tool translation mappings.
- Runtime mapping files for `dnd5e.items` and `dnd5e.equipment24`.

### Changed
- Version bumped to `0.1.5`.
- German weapon and tool name mapping now uses proper umlauts.

### Fixed
- Tool/weapon metric display conversion for weight (`lb` to `kg`) in runtime mapping.
- Initial tool description phrase replacements for key in-sheet usage text (e.g. Forgery/Thieves/Navigator patterns).

## [0.1.4] - 2026-03-15
### Added
- Internal module compendium pack for German skill tooltip references.

### Changed
- Version bumped to `0.1.4`.
- Skill tooltip references are mapped from module compendium data.

### Fixed
- Resolved locked-compendium runtime issues for tooltip handling.
- Prevented endless tooltip loading spinner for legacy tooltip pages.

## [0.1.3] - 2026-03-15
### Changed
- Version bumped to `0.1.3`.
- Improved and synchronized German UI coverage.

### Fixed
- Stabilized skill tooltip page migration behavior.

## [0.1.2] - 2026-03-14
### Added
- Expanded in-game German localization coverage (including settings and key sheet areas).

### Changed
- Version bumped to `0.1.2`.

## [0.1.1] - 2026-03-14
### Added
- Additional German UI localization coverage for missing system keys.

## [0.1.0] - 2026-03-14
### Added
- Initial release with Foundry v13 and `dnd5e` 5.x compatibility.
- Base German UI localization module structure.
