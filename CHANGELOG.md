# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2026-03-14
### Added
- Full translation coverage for `SETTINGS.DND5E` (module settings UI).
- Live pipeline runners:
  - `tools/run_pipeline.ps1`
  - `tools/start_pipeline_window.ps1`
- Improved Gemini translator progress output (batch start/retry/success/fail logs).
- Tag-based GitHub release workflow for `v*.*.*` tags with packaged module artifacts.
- `TODO.md` project task list.

### Changed
- Version bumped to `0.1.2` in `module.json` and `README.md`.
- Merged a large validated set of character-sheet-related translations into `languages/de.json`.
- Expanded metric-unit validation policy for German unit tokens.

### Fixed
- Translation pipeline visibility in PowerShell by enforcing unbuffered output in runner commands.

## [0.1.1] - 2026-03-14
### Added
- LLM translation pipeline scripts:
  - `tools/extract_missing_keys.py`
  - `tools/translate_missing_gemini.py`
  - `tools/validate_suggestions.py`
  - `tools/merge_suggestions.py`
- Metric validation policy in `config/metric-policy.json`.
- Missing-key extraction artifact `tools/missing-keys.json`.
- README workflow for Gemini-based suggestion generation and guarded merge.
- CI updates: JSON validation and Python syntax checks for tooling scripts.

## [0.1.0] - 2026-03-14
### Added
- Initial repository structure for `foundryvtt-dnd5e55-lang-de`.
- `module.json` with Foundry v13 compatibility and required `dnd5e` system relationship (5.x baseline).
- Initial `README.md`, `CHANGELOG.md`, and `LICENSE`.
- Base directories for `scripts/`, `languages/`, `tools/`, `config/`, and GitHub workflows.
