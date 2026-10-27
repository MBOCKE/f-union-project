# Continuation snapshot

This is a point-in-time handoff note, not a source of truth. Re-check the worktree and current files before relying on it.

## Worktree state observed

At handoff creation, `git status --short` showed one user change:

```text
M src/features/recruitment/constants/roles.ts
```

The diff changes the title for the role whose slug is `charge-finances-douala` from `Chargé·e de Finances - Terrain Douala` to `Chargé·e de Finances`. The slug and all other role data were unchanged in that diff. This title edit was already present and was not made as part of creating this skill. Preserve it; do not discard or reset it.

The current UI uses role titles in listing/detail views and in the application subject, while the stable slug is used for generated detail URLs and upload paths. If asked to continue this title update, check whether any related display copy or tests need alignment without changing the route slug by accident.

## Immediate context and open verification

- The user asked for a project-specific skill so another agent can take over with context. The skill and reference notes in this folder are that deliverable.
- The handoff snapshot did not include a stated follow-up change request beyond the existing finance-role title edit. Do not infer additional scope from that single diff.
- `FORM-STRUCTURE.md` predates the current recruitment flow in several areas; use it as background only and verify current source.
- No tests were run for this documentation-only addition. If continuing code work, run the focused lint/build checks appropriate to the change.
