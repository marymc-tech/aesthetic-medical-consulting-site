# Aesthetic Med Consulting — website

Marketing site for Aesthetic Med Consulting (Mary McMillin, MSN, NP-C, FNP-BC).
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · hosted on Vercel.

No database, no authentication, no patient data. The only server-side code is the
discovery-call inquiry endpoint, which forwards submissions by email.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values, or leave INQUIRY_DRY_RUN=true for local testing
npm run dev                  # http://localhost:3000
```

Production build and checks:

```bash
npm run lint
npm run build && npm run start
node scripts/visual-check.mjs   # screenshots at 3 widths, mobile menu, form submission (needs the site running on :3100)
```

## Project layout

```
src/app/                    routes (one folder per page) + sitemap.ts, robots.ts, opengraph-image.tsx
src/app/api/inquiry/        POST handler for the discovery-call form (Resend email, no storage)
src/components/             Header, Footer, InquiryForm, Reveal (scroll animation), ui.tsx (shared blocks)
src/lib/site.ts             business details used everywhere (phone, address, links, disclaimer, nav)
src/lib/content.ts          services, plans, FAQs, testimonials, blog links — edit copy here
src/lib/seo.ts              metadata + JSON-LD helpers
src/lib/inquiry.ts          form validation shared by client and server
src/fonts/                  self-hosted Cormorant Garamond + Mulish (woff2)
scripts/visual-check.mjs    Playwright smoke test
```

## Environment variables

| Name | Where | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Vercel (Production + Preview) | Sends inquiry emails via Resend. Without it, production returns a friendly "not configured" error. |
| `INQUIRY_TO` | Vercel | Inbox that receives inquiries. Defaults to the email in `site.ts`. |
| `INQUIRY_FROM` | Vercel | Verified sender, e.g. `Website <inquiries@aestheticmedicalconsulting.com>`. Requires domain verification in Resend. |
| `INQUIRY_DRY_RUN` | Preview / local | `true` accepts submissions without sending (logs them). Use on preview deployments until email is configured. |
| `NEXT_PUBLIC_SITE_URL` | Preview | Overrides canonical/OG URLs on preview deployments (optional). |

Preview deployments are `noindex` via `robots.txt` automatically (`VERCEL_ENV !== "production"`).

## Editing content

Most copy lives in `src/lib/content.ts` and `src/lib/site.ts`. Page-specific prose is in each
`src/app/<page>/page.tsx`. Items pending Mary's confirmation are listed in `NEEDS-CONFIRMATION.md`
and marked `CONFIRM` in code comments.

## Deployment

See `DEVELOPER-REVIEW.md` for the GitHub → Vercel setup and `LAUNCH-CHECKLIST.md` for cutover.
Do not point the live domain at Vercel until the launch checklist is approved.
