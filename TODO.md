# TODO

## Release Tracking
- [x] Latest release: `1.0.1` (2026-03-15)

## Next Releases
- [x] Strict-provenance Babele migration baseline (legacy/modern split + allowlist + gap report).
- [x] Expand modern rules TOC heading localization coverage (overview chapter headings).
- [ ] Translate remaining high-impact UI namespaces (`DND5E.CALENDAR`, `DND5E.FACILITY`, `DND5E.TRANSFORM`).
- [ ] Add stricter placeholder checks for pluralization variants and ICU-style patterns.
- [ ] Add optional glossary enforcement in CI.
- [ ] Add a lightweight smoke-test checklist for Foundry v13 sheet views.

## Process
- [ ] Keep patch-version release flow (`x.y.z` -> increment `z` only for regular translation updates).
- [ ] For every version bump update:
  - `module.json`
  - `README.md`
  - `CHANGELOG.md`
  - `TODO.md` (status adjustments)
- [ ] Create and push a matching git tag (`v<version>`) for release workflow.

