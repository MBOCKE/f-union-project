# Recruitment section structure

This report describes how the recruitment pages, role data, and application
UI are connected, including what happens today when someone tries to apply.

## Files and responsibilities

| File | Responsibility |
| --- | --- |
| `src/app/recrutement/page.tsx` | Next.js route for `/recrutement`; exports page metadata and renders the recruitment listing. |
| `src/app/recrutement/[slug]/page.tsx` | Dynamic role route; resolves a slug, generates static role paths, and handles unknown slugs. |
| `src/features/recruitment/types.ts` | TypeScript shape shared by role data and role components. |
| `src/features/recruitment/constants/roles.ts` | Static source of truth for the 15 roles, category options, shared benefits, and slug lookup. |
| `src/features/recruitment/components/RecruitmentPage.tsx` | Client-side listing page: hero, search/filter controls, role cards, process explanation, FAQ, and application modal wiring. |
| `src/features/recruitment/components/RecruitmentRolePage.tsx` | Role-specific detail page and its separate email-link application action. |
| `src/features/recruitment/components/ApplicationModal.tsx` | Three-step role application modal and locally-held applicant field values. |

## Routes and navigation

### `/recrutement`

`src/app/recrutement/page.tsx` is a small server route. It sets the page title
and description, then renders `RecruitmentPage`. The listing component is a
client component because its search, category filter, selected role, and modal
are controlled with React state.

The listing page contains these sections:

1. A hero for the F-UNION Africa Summit 2027, including a background image and
   recruitment summary.
2. The open-positions section (`#postes`) with search, category filters, and
   role cards.
3. A three-part “Comment candidater ?” explainer (`#candidater`) covering
   candidature, exchange, and integration. Its copy says the official form
   will be connected once the application tool and deadline are confirmed.
4. An FAQ (`#faq`) implemented with native expandable `<details>` elements.
5. A final call to action that links back to the positions section.

Each role card's “Postuler” button selects that role and opens
`ApplicationModal`. It does not navigate to the role's detail route.

### `/recrutement/[slug]`

The dynamic route uses `generateStaticParams()` to create one static route per
role in `recruitmentRoles`. At request/render time it awaits the `slug`, calls
`getRecruitmentRole(slug)`, and invokes Next.js `notFound()` for an unknown
slug. A known role is passed to `RecruitmentRolePage`.

The detail page displays the role category, title, tagline, manager, duration,
commitment, format, summary, responsibilities, profile, “not for you if”
criteria, benefits, and optional note. Its “Candidater pour ce poste” button
is currently a `mailto:contact@f-union.org` link with a general subject line;
it does not open the application modal or prefill the role.

## Role data model

`RecruitmentRole` in `types.ts` defines:

- `slug`, `title`, `category`, `tagline`
- `manager`, `collaborators`, `duration`, `commitment`, `format`
- `summary`
- `responsibilities`, `profile`, `notFor`, and `benefits` as string arrays
- optional `note`

`roles.ts` stores 15 role objects in `recruitmentRoles`. Shared benefit arrays
avoid repeating common offer text. `recruitmentCategories` is generated from
the distinct role categories, preceded by “Tous les postes.” The
`getRecruitmentRole` helper finds the first role matching a slug.

## Listing search and filters

`RecruitmentPage` holds three pieces of UI state:

- `activeCategory`, initially “Tous les postes”
- `search`, initially empty
- `selectedRole`, initially `null`

`useMemo` filters the static role list. A role must match the selected category
(unless “Tous les postes” is selected) and the normalized, trimmed search.
Search checks only the role's title, category, tagline, and format. The
category control is a select on small screens and a row of buttons on desktop.
If there are no matches, the page displays an empty state with a reset action.

Role cards use images and icon/category mappings maintained in
`RecruitmentPage.tsx`; those presentation maps are separate from the role data.
Clicking a card's button sets `selectedRole`. The page then passes
`isOpen={!!selectedRole}`, `role={selectedRole}`, and an `onClose` callback to
the modal. The callback sets `selectedRole` back to `null`.

## Modal flow and applicant data

`ApplicationModal` receives:

- `isOpen`: whether the modal should be displayed
- `onClose`: callback owned by the listing page
- `role`: the selected `RecruitmentRole` (optional/null in the prop type)

When either `isOpen` is false or there is no role, the component renders
nothing. Otherwise, it shows a responsive overlay/dialog with a close button,
click-outside dismissal, step indicator, step-specific heading and image, and
the content for the active step. Clicking inside the dialog stops the click
from reaching the backdrop.

The three steps are:

1. **Attentes** — shows the selected role's responsibilities and profile.
2. **Avantages** — shows the selected role's benefits.
3. **Informations** — shows applicant inputs:
   - `firstName`: first name
   - `lastName`: last name
   - `email`: email (`type="email"`)
   - `phone`: phone (`type="tel"`)
   - `cv`: first selected file, stored as a browser `File`
   - `motivations`: free-text motivation

`step` stores the active step. `formData` is a generic object in React state,
and `handleChange(field, value)` updates one entry while retaining the other
entries. `InputField` wraps the text/email/phone inputs; `UploadField` wraps a
file input and displays the selected file's name. The controls are controlled
by React state, so navigating between steps keeps the typed values while the
modal remains open.

“Retour” decrements the step. “Continuer” increments it until step 3. When
closed, an effect resets `step` to 1 and clears `formData`; reopening starts
with a fresh application.

## Current submission and validation status

Despite its “form” appearance and step-three instruction, the modal does not
currently render a `<form>`, submit to an endpoint, call Web3Forms, or persist
or email applicant data. The final “Postuler” button simply calls `onClose`.
There is no success/error state or submission loading state.

There is also no required-field validation. `type="email"` selects an
email-oriented browser input but is not being used as a form constraint here.
The CV label says “PDF,” but the file input has no `accept` restriction,
required check, size/type validation, or upload behavior. The `File` only stays
in client-side React state until the modal closes. The role-detail page's
`mailto:` action is separate and does not submit these modal fields.

## Web3Forms integration points

To connect Web3Forms, the most direct path is to implement submission in
`ApplicationModal`, where both the applicant state and selected `role` are
available:

1. Use a real form or an explicit submit handler for step 3. Keep the first
   two steps as informational navigation.
2. Add field names and required constraints matching the payload expected by
   the chosen Web3Forms integration. Include role identity (at least its
   title and/or slug) from the `role` prop so applications can be associated
   with the correct opening.
3. Validate applicant fields and CV type/size before sending. Confirm
   Web3Forms' current file-upload support and limits; storing a `File` in
   React state alone does not upload it.
4. Track pending, success, and failure states. Keep the modal open and retain
   values if the request fails; reset/close only after a confirmed success.
5. Decide whether the role-detail page should remain a separate email action or
   be changed to open/use the same application flow. It currently does not
   share the modal submission path.

The FAQ's selection-process answer and the “Comment candidater ?” copy should
also be revisited when a real submission workflow is connected, so the page's
description matches the actual application experience.
