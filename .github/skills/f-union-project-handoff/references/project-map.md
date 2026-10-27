# Project map

## Product and stack

F-Union Africa Summit's public website is a French-language Next.js application. The repository uses the Next.js App Router, React 19, TypeScript in strict mode, Tailwind CSS 4, and ESLint 9. `package-lock.json` is present; use npm for package scripts. `@/*` maps to `src/*`; `@features/*` and `@core/*` are also configured in `tsconfig.json`.

The content is a mix of local React components, static TypeScript data, and Notion-managed PDF content. The UI is not a single uniform feature: older pages and newer recruitment components use different Tailwind class styles and patterns. Follow the closest existing implementation rather than reformatting unrelated code.

## Route and module map

| Route | Implementation | Notes |
| --- | --- | --- |
| `/` | `src/app/page.tsx` → `src/features/landing/screens/LandingScreen.tsx` | Landing page assembled from feature sections. |
| `/speakers` | `src/app/speakers/page.tsx` | Speaker listing/profile UI; data and types are under `src/features/speakers/`. |
| `/programme/jour2` | `src/app/programme/jour2/page.tsx` → `src/features/programe/screens/jour2.tsx` | Programme feature folder is spelled `programe` (one “m” in the middle). |
| `/programme/jour3` | `src/app/programme/jour3/page.tsx` → `src/features/programe/screens/jour3.tsx` | Shares programme components and data. |
| `/recrutement` | `src/app/recrutement/page.tsx` → `src/features/recruitment/components/RecruitmentPage.tsx` | Client-side listing grouped into sections, search, countdown, and application modal. |
| `/recrutement/[slug]` | `src/app/recrutement/[slug]/page.tsx` → `RecruitmentRolePage.tsx` | Static params come from `recruitmentRoles`; unknown slugs call `notFound()`. |
| `/communique-presse` | `src/app/communique-presse/page.tsx` | Press content and PDFs sourced from Notion. |
| `/api/upload` | `src/app/api/upload/route.ts` | Vercel Blob client upload token handler; PDF-only, max 5 MiB. |
| `/api/download` | `src/app/api/download/route.ts` | Fetches a supplied URL and returns a PDF download. |
| `/api/notion-pdf` | `src/app/api/notion-pdf/route.ts` | Lists, previews, or downloads press PDFs from Notion. |
| `/api/programme-pdf` | `src/app/api/programme-pdf/route.ts` | Lists, previews, or downloads programme PDFs from Notion. |

Shared site chrome lives in `src/core/components/` (`Navbar`, `Footer`, `Container`, `Button`, analytics tracker). `src/app/layout.tsx` sets French document language, Geist fonts, metadata, global navigation/footer, and production Google Analytics.

## Recruitment flow and contracts

- `src/features/recruitment/types.ts` owns `RecruitmentRole`, `RecruitmentSection`, and `ApplicationFormData`.
- `src/features/recruitment/constants/roles.ts` is the static source for 15 role records and shared benefits. `getRecruitmentRole(slug)` backs the detail route.
- `src/features/recruitment/constants/sections.ts` defines five section IDs, labels, descriptions, and ordering. Each role's `sectionId` must refer to one of these IDs.
- `src/features/recruitment/components/RecruitmentPage.tsx` searches title, category, tagline, and format; groups roles into section accordions; and opens the modal for a selected role.
- `src/features/recruitment/components/RecruitmentRolePage.tsx` renders role details and opens the same application modal with that role.
- `src/features/recruitment/components/ApplicationModal.tsx` has three steps (mission, profile/engagement, applicant information), validates required name/email/motivation fields, optionally uploads a CV, then submits applicant and role data to Web3Forms.
- `src/app/api/upload/route.ts` handles the upload handshake. The client currently uses `@vercel/blob/client` and sends the role slug as `clientPayload`.

When editing role content, preserve the role slug unless the requested change explicitly includes route migration. Confirm the role count and all section references from current source rather than relying on copy such as the listing's hard-coded “15” statistic.

## Integrations and environment configuration

Source references these environment-variable names; this list intentionally contains no values:

| Variable | Use |
| --- | --- |
| `NOTION_TOKEN` | Server-side Notion client in `src/lib/notion.ts`. |
| `NOTION_PAGE_ID` | Press page ID for Notion content and PDFs. |
| `NOTION_PAGE_ID2` | Programme PDF page ID. |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob upload integration. |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Browser-visible Web3Forms submission key. It is public by design and must not be a private server secret. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics configuration. |

The repository ignores `.env*`. Do not print, copy, or commit their contents. Missing integration configuration may affect those features independently of local rendering.

## Conventions and verification

- Keep user-facing copy in French unless a task says otherwise.
- Recruitment role data is static and typed. Preserve the separation between data (`constants/`), type contracts (`types.ts`), and React presentation (`components/`).
- Preserve accessible labels/status messaging and keyboard-operable controls when changing interactive UI.
- Existing scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`. There is no `test` script currently.
- `src/app/globals.css` imports Tailwind and `tailwind.config.ts` through `@config`; avoid changing styling setup without checking both.

## Documentation and consistency cautions

- `FORM-STRUCTURE.md` is an older recruitment walkthrough. Parts of it no longer match current source: role sections and `engagement` are in the current type, detail-page apply opens the modal, and the modal currently uploads a selected PDF CV to Blob and sends its URL to Web3Forms. Verify behavior in source before changing that document or using it to infer implementation.
- `README.md` describes the 2026 summit, while the recruitment UI and its route metadata reference the 2027 recruitment cycle. Content across the site is not fully synchronized; change only the requested surface and avoid silently harmonizing unrelated dates.
- Runtime behavior for Notion and external form/upload services depends on credentials and external service configuration; do not claim those integrations work based only on a successful local build.
