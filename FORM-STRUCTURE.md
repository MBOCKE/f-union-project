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

1. **Mission** — shows `role.summary` under “Votre contribution” and
   `role.responsibilities` under “Concrètement, votre mission”.
2. **Profil** — shows `role.profile` under “Le profil que nous recherchons”
   and `role.engagement` under “Votre engagement”.
3. **Informations** — shows `role.benefits` and applicant inputs:
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
modal remains open. The step indicators are keyboard-accessible buttons that
can jump directly to any step; the active step is identified with
`aria-current="step"`. “Continuer” advances one step and is replaced by
“Postuler” on the final step. There is no “Retour” button. When closed, an
effect resets `step` to 1 and clears `formData`; reopening starts with a fresh
application.

## Submission and validation status

On step 3, “Postuler” validates that first name, last name, email, and
motivations contain non-whitespace text, then sends a `FormData` POST request
to `https://api.web3forms.com/submit`. The payload includes the Web3Forms
access key, role title and slug, applicant name, email, phone (or
“Non renseigné”), and motivations. The CV remains in client-side form state
for the applicant's experience but is intentionally not included in the
request.

The modal tracks pending, error, and success states. While submitting, the
button is disabled and reads “Envoi en cours...”. Web3Forms errors and network
errors are shown above the button; after a successful response, the fields
and button are replaced by a confirmation message. Closing the modal resets
the form and submission state. The modal does not currently upload the CV,
validate email format beyond the email input type, or persist data locally.

The browser build reads `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Set this variable
in `.env.local` for local development and in the Vercel project's environment
variables for deployment. The local placeholder in `.env.local` must be
replaced with the actual Web3Forms access key. Because the variable is
prefixed with `NEXT_PUBLIC_`, it is exposed to the client bundle and must be
a Web3Forms public access key, not a private server secret.
