# Translation Safety Rules

## Token Integrity (Hard Requirement)
- Never translate, rewrite, or structurally modify Foundry command/link tokens.
- Keep all of the following tokens byte-stable except for allowed label text in `{...}`:
  - `[[/attack ...]]`, `[[/damage ...]]`, `[[/save ...]]`, `[[lookup ...]]`
  - `@UUID[...]`, `@Embed[...]`, `@Compendium[...]`, `&Reference[...]`
- Do not localize command keywords (`attack`, `damage`, `save`, `lookup`) inside `[[/...]]`.
- Do not transform token wrappers:
  - never change `[[...]]` to `[...]`
  - never change `{label}` to `[label]`
  - never remove required brackets/braces.

## Translation Scope
- Translate only user-facing prose and labels outside command syntax.
- For linked content, only localize display labels when explicitly intended and safe.
- Preserve IDs, activity references, UUID paths, and embedded references exactly.

## Metric Conversion Scope
- Metric conversion is allowed for human-readable text only.
- Never apply unit conversion inside token internals (`[[...]]`, `@UUID[...]`, `@Embed[...]`, `&Reference[...]`), except safe display text outside the token body.

## Validation Gate Before Apply/Release
- Block changes if any of these are detected:
  - broken token syntax
  - changed command keywords in inline commands
  - lookup/activity reference mismatch
  - UUID/embed/reference corruption
- Run token-integrity checks before full-run apply and before release tagging.
