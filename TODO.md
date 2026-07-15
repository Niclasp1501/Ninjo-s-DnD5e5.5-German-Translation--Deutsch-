# TODO

## Release Tracking
- [x] Latest release: `14.0.0` (2026-04-22)

## Next Releases
- [x] Strict-provenance Babele migration baseline (legacy/modern split + allowlist + gap report).
- [x] Expand modern rules TOC heading localization coverage (overview chapter headings).
- [ ] Translate remaining high-impact UI namespaces (`DND5E.CALENDAR`, `DND5E.FACILITY`, `DND5E.TRANSFORM`).
- [ ] Add stricter placeholder checks for pluralization variants and ICU-style patterns.
- [ ] Add optional glossary enforcement in CI.
- [ ] Add a lightweight smoke-test checklist for Foundry v13 sheet views.

## Process
- [ ] Keep Foundry-visible release flow:
  - `<foundry-major>.<minor>.<patch>` (example: `14.0.0` for the first v14-verified line)
  - increment `patch` for regular translation updates within the same Foundry-major line
- [ ] For every version bump update:
  - `module.json`
  - `README.md`
  - `CHANGELOG.md`
  - `TODO.md` (status adjustments)
- [ ] Create and push a matching git tag (`v<version>`) for release workflow.

## Possible Feature Backlog
- [x] Guard metric normalization by `dnd5e.metricLengthUnits` (run only when metric length is enabled).
- [x] Add import-time hooks for normalization candidates:
  - `preCreateActor`
  - `preCreateItem`
- [x] Normalize structured distance fields on import:
  - Actor movement/senses (`system.attributes.movement.*`, `system.attributes.senses.*`)
  - Item range (`system.range`)
  - Activity range/target/template (`system.activities.*`)
- [x] Convert units and values consistently:
  - `ft` -> `m`
  - `mi` -> `km`
- [ ] Add idempotency flag (e.g. `flags.<moduleId>.metricNormalized`) to avoid double conversion.
- [x] Keep scope strict: normalize data fields only, do not rewrite descriptive free-text.
- [ ] Add test checklist with import samples (imperial, metric, mixed, repeated import).

