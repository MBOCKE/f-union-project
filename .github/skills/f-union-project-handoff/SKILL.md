---
name: f-union-project-handoff
description: "Use when taking over, continuing, modifying, or debugging the F-Union Africa Summit website, especially recruitment roles, applications, or project context."
---

# F-Union Project Handoff

Use this skill to orient yourself before continuing work in this repository. It captures the current architecture and the handoff state observed when it was written; the working tree may have moved on since then.

## Takeover procedure

1. Check `git status --short` and inspect the relevant diff before editing. Preserve existing user changes; do not assume the snapshot in [current-state.md](./references/current-state.md) is still current.
2. Read [project-map.md](./references/project-map.md) for routes, module ownership, conventions, integrations, and known documentation drift.
3. For recruitment work, trace the relevant flow through role data, section definitions, route, listing/detail component, application modal, and API route as applicable. Do not rely on the recruitment overview alone where it conflicts with current source.
4. Keep role slugs stable unless URL changes are explicitly requested: slugs generate the recruitment detail routes. Keep role data aligned with `RecruitmentRole` and with the UI fields that consume it.
5. Make the smallest complete change, preserve the French user-facing language and existing Next.js/TypeScript patterns, and update directly related documentation if behavior or data contracts change.
6. Validate with the smallest relevant command. Available project commands are `npm run lint` and `npm run build`; there is no test script in `package.json`.
7. Never read or expose `.env` or `.env.local` values. Check variable names in source and ask the user to configure secrets locally or in the deployment environment.

## Reference files

- [Project map](./references/project-map.md): stack, routes, data flow, integrations, commands, and caveats.
- [Current state snapshot](./references/current-state.md): uncommitted work and immediate continuation context captured for this handoff.
