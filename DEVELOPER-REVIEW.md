# Developer Review Guide

For the developer reviewing the Aesthetic Med Consulting site before launch.

## What this is

A static-first marketing site: Next.js 16 App Router, TypeScript (strict), Tailwind CSS 4.
Every page is prerendered at build time. The only runtime code is `POST /api/inquiry`
(Node runtime) and the Open Graph image generator. No database, no auth, no cookies,
no third-party scripts. Fonts are self-hosted so the CSP can stay strict.

## Review checklist

1. **Install and build**
   ```bash
   npm ci && npm run lint && npm run build
   ```
   Expect zero lint errors and all routes marked `○ (Static)` except `/api/inquiry`.

2. **Run and smoke-test**
   ```bash
   INQUIRY_DRY_RUN=true PORT=3100 npm run start
   node scripts/visual-check.mjs        # requires Playwright's Chromium; set CHROME_PATH if needed
   ```
   The script screenshots every page at 1440 / 834 / 390 px, opens the mobile menu,
   checks for horizontal overflow and console errors, and submits the form end to end.

3. **Inquiry endpoint** (`src/app/api/inquiry/route.ts`)
   - Shared validation in `src/lib/inquiry.ts` (client and server).
   - Honeypot field `website`; bots get a silent `{ ok: true }`.
   - Best-effort per-instance rate limit (5 per 10 min per IP). Upgrade to Vercel WAF rules or Upstash if abuse appears.
   - Sends via Resend. `INQUIRY_DRY_RUN=true` accepts without sending (preview/local).
   - Stores nothing. The form displays a no-PHI warning; the privacy policy repeats it.

4. **Security headers** (`next.config.ts`): CSP (`default-src 'self'`; inline styles/scripts allowed because Next injects them), HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy. If you add analytics or embeds, extend `script-src` / `connect-src` / `frame-src` accordingly.

5. **SEO**
   - Per-page `metadata` via `pageMetadata()` in `src/lib/seo.ts`: absolute titles, descriptions, canonical, Open Graph, Twitter card.
   - JSON-LD: ProfessionalService + Person on every page (layout), FAQPage on Home/FAQs/GFE, Course on Training, BreadcrumbList on inner pages.
   - `sitemap.ts` and `robots.ts` are generated. Preview deployments emit `Disallow: /` (based on `VERCEL_ENV` at build time).
   - `/privacy` and `/terms` are `noindex`.

6. **Accessibility**: Lighthouse a11y 100 on tested pages. Skip link, focus rings, semantic landmarks, `aria-current`, `aria-expanded` on the menu, labelled form controls, `prefers-reduced-motion` respected in `Reveal.tsx` and CSS.

7. **Content edits**: `src/lib/content.ts` (services, plans, FAQs, testimonials, blog links) and `src/lib/site.ts` (business details, nav, disclaimer). Items awaiting Mary are in `NEEDS-CONFIRMATION.md` and tagged `CONFIRM` in comments.

## GitHub → Vercel setup

1. Create a **private** GitHub repository (e.g. `aesthetic-medical-consulting-site`) and push this project:
   ```bash
   git remote add origin git@github.com:<owner>/<repo>.git
   git push -u origin main
   ```
2. In Vercel: **Add New → Project → Import** the repository. Framework preset: Next.js (auto-detected). No build overrides needed.
3. Environment variables (Project → Settings → Environment Variables):
   - Preview: `INQUIRY_DRY_RUN=true`
   - Production: `RESEND_API_KEY`, `INQUIRY_TO`, `INQUIRY_FROM` (leave `INQUIRY_DRY_RUN` unset)
4. Deploy. Vercel assigns a temporary `*.vercel.app` URL. **Do not add the custom domain yet.**
5. Every push to `main` deploys to production on Vercel's URL; pull requests get preview URLs.

## Known limitations / future work

- Blog posts link to the existing Wix site until their full text is migrated (a `content/blog/*.md` + `remark` setup is the natural next step, or a headless CMS if Mary wants to publish without a developer).
- Client Login is an external link to the Wix member portal. A Supabase-backed portal is out of scope for this phase.
- Images are placeholders (`Placeholder` component). Replace with `next/image` once photography is supplied; add `images.remotePatterns` only if hosting images off-site.
- The in-memory rate limiter resets per serverless instance.
