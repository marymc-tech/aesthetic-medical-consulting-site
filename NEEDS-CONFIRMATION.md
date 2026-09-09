# Needs Mary's Confirmation

Updated September 9, 2026 after Mary's review. Confirmed items are recorded at the bottom.

## Still open (Mary will supply)

- [ ] **Client Login URL** — the exact Wix member-login link. Until then the button points to the Wix `/articles` page. Update `src/lib/site.ts` → `clientLoginUrl`.
- [ ] **Social links** — Instagram, Facebook, LinkedIn URLs to verify (current values were carried over from the old footer). `src/lib/site.ts` → `social`.
- [ ] **Additional testimonials** — Mary has more, with permission; add them to `src/lib/content.ts` → `testimonials` when supplied.
- [ ] **Photography** — placeholders stay until photos are supplied (portrait for hero and About; office/teaching shots optional).
- [ ] **Course dates** — add upcoming session dates to the Training page when scheduled.
- [ ] **Blog migration** — the three professional posts still open on the Wix site; migrate the full text when ready. "Can you put Botox here?" moves to Skindale.

## For the developer

- [ ] Create the private GitHub repo and push (see `DEVELOPER-REVIEW.md`).
- [ ] Import into Vercel; set `INQUIRY_DRY_RUN=true` on Preview.
- [ ] Create the Resend account, verify the sending domain, and set `RESEND_API_KEY`, `INQUIRY_TO=marymcnp@gmail.com`, `INQUIRY_FROM` on Production.

## Confirmed by Mary (September 9, 2026)

- Plan prices: $750 Medical Spa, $600 Registered Nurse, $500 Certified Laser Technician, $100 Medical Esthetician per month; inclusions as published.
- Botox & Dermal Filler Course tuition: $1,500. Observation Day: 4 hours, $600, at Skindale, credited toward the course. No prerequisites. Co-instructor Alizia Gutierrez, RN.
- Standalone good faith exams: $30 per exam.
- Medical weight-loss and IV hydration oversight: removed from the site.
- Credentials and degrees as stated; "injecting since 2016" and "nearly a decade" accurate. No certifying body named for Laser Safety Officer.
- Address shown publicly: 11000 N. Scottsdale Road, Scottsdale, AZ 85254.
- Email: marymcnp@gmail.com (also the inquiry destination). Phone: 602.999.5847, text preferred.
- Skindale Medspa (www.skindalemedspa.com) is where patients book.
- Discovery call: 30 minutes, complimentary.
- Newsletter signup: removed. Privacy Policy and Terms: no attorney review planned.
- GitHub, Vercel, and Resend: the developer will set these up.
