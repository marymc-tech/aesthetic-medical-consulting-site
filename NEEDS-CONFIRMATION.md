# Needs Mary's Confirmation

Nothing below was invented. Where a fact could not be confirmed, the site says less rather
than guessing. Each item notes where it lives in code so it can be updated in one place.

## Pricing and inclusions

- [ ] **Plan prices** — $750 Medical Spa, $600 Registered Nurse, $500 Certified Laser Technician, $100 Medical Esthetician per month, copied from the current plans page. Confirm or change in `src/lib/content.ts` → `plans`.
- [ ] **Plan inclusions** — copied from the current site (forms library, monthly coaching, daily contact, four mentorship hours for RNs, GFEs in Medical Spa and RN plans, compounding pharmacy / skincare account setup). Anything to add, remove, or keep off the public site?
- [ ] **Course tuition** — current site shows both $1,500 and $1,800. The new site says "contact for current pricing." Set the number in `src/app/training-and-mentorship/page.tsx` once confirmed.
- [ ] **Observation Day** — 4 hours, $600, at Skindale Medspa, $600 credited toward the course. Still accurate?
- [ ] **Standalone good faith exams** — offered outside a plan? Price or "contact for pricing"? (`src/app/good-faith-exams/page.tsx`)
- [ ] **Medical weight-loss oversight** — which plans include it; any limits on medications or programs? (`src/app/medical-director-services/page.tsx` → `oversight`)
- [ ] **IV hydration oversight** — listed as an area of oversight because the current site has IV hydration forms. Keep?

## Credentials and biography

- [ ] "Double board-certified" = NP-C (AANP) and FNP-BC (ANCC)? Any certifying body to name for Laser Safety Officer?
- [ ] "Injecting since 2016" and "nearly a decade in aesthetic medicine" — accurate?
- [ ] Degrees: BSN Washburn University; MSN-FNP Colorado Technical University (from current My Story page).
- [ ] List **Alizia Gutierrez, RN** as course co-instructor? (`training-and-mentorship/page.tsx`)
- [ ] Course eligibility wording: which licenses may attend, any prerequisites? Currently "licensed medical professionals."

## Contact details

- [ ] **Address** — 11000 N. Scottsdale Road: suite number and ZIP (`src/lib/site.ts` → `address`). Show publicly, or "by appointment, Scottsdale"?
- [ ] **Email** — currently marymcnp@gmail.com. Set up a branded address before launch? Also used as the inquiry destination (`INQUIRY_TO`).
- [ ] **Phone** — 602.999.5847, call and text OK?
- [ ] **Client Login URL** — currently points to the Wix `/articles` page. Provide the exact member-login link (`src/lib/site.ts` → `clientLoginUrl`).
- [ ] **Skindale Medspa URL** — www.skindalemedspa.com assumed.
- [ ] **Social links** — Instagram @marymc_aestheticnp, Facebook page ID 61556277694441, LinkedIn mary-mcmillin-aestheticnp (from current footer). Note the Instagram handle still uses the old brand name.

## Content

- [ ] **Testimonial** — Nicolle, Owner, Desert Rain Skin, Scottsdale (used verbatim). Others, with permission?
- [ ] **Photography** — all images are labeled placeholders. Need: a professional portrait (hero + About), 2–3 office/treatment-room photos, 1–2 teaching/mentoring photos.
- [ ] **Blog** — the four existing posts are linked to the Wix site; full text has not been migrated. Migrate all, or move "Can you put Botox here?" to Skindale? (`src/lib/content.ts` → `blogPosts`)
- [ ] **Newsletter signup** — not included in the new site. Keep it? Which provider?
- [ ] **Privacy Policy and Terms of Use** — drafts written for attorney review (`/privacy`, `/terms`).
- [ ] **Discovery call length** — not stated on the new site (old site said 1 hour). State a length?

## Technical

- [ ] **Email delivery** — Resend account and API key; verify sending domain so mail comes from @aestheticmedicalconsulting.com.
- [ ] **GitHub** — private repository name and owner.
- [ ] **Vercel** — project name; who has access.
