# Launch Checklist

Nothing here happens without Mary's explicit approval. Steps are ordered so the Wix site
stays live and untouched until the very end.

## A. Content sign-off (Mary)

- [ ] Every item in `NEEDS-CONFIRMATION.md` answered or consciously deferred
- [ ] Photography supplied and placeholders replaced
- [ ] Privacy Policy and Terms reviewed (attorney recommended)
- [ ] Plan prices and inclusions final
- [ ] Course tuition and next dates added
- [ ] Client Login link verified against the Wix member portal
- [ ] Read-through of every page on desktop and phone by Mary

## B. Technical readiness (developer)

- [ ] Resend account created; sending domain verified (SPF/DKIM records — **these are DNS records at Wix; add them only after Mary approves, and add them alongside existing records, never replacing email/MX records**)
- [ ] Production env vars set in Vercel: `RESEND_API_KEY`, `INQUIRY_TO`, `INQUIRY_FROM`
- [ ] Test submission from the Vercel URL lands in Mary's inbox
- [ ] `npm run lint` and `npm run build` clean; Lighthouse ≥ 90 performance, 100 accessibility / best practices / SEO
- [ ] 404 page reviewed
- [ ] Redirect map prepared (old Wix URLs → new pages) in `next.config.ts` `redirects()`:

  | Old Wix URL | New |
  | --- | --- |
  | `/plans-and-pricing-medical-director-for-nurses` | `/medical-director-services` |
  | `/service-page/initial-consultation` | `/contact` |
  | `/service-page/nurse-injector-observation` | `/training-and-mentorship#observation` |
  | `/service-page/basic-botox-and-dermal-filler-course-2` | `/training-and-mentorship#botox-filler-course` |
  | `/service-page/basic-botox-and-dermal-filler-training` | `/training-and-mentorship#botox-filler-course` |
  | `/botox-and-dermal-filler-certification-training` | `/training-and-mentorship#botox-filler-course` |
  | `/blog-nurse-injector-medspa-arizona` | `/blog` |
  | `/post/*` | `/blog` (or migrated post URLs) |
  | `/s-projects-side-by-side` (gallery) | Skindale gallery URL |
  | `/forms-medspa-consents`, `/start-up-forms-new-medspa`, `/*-forms` | keep on Wix portal (member-only) or `/resources` |

## C. Domain cutover (only with Mary's written go-ahead)

- [ ] Decide portal strategy: keep Wix member portal live on a subdomain (e.g. `portal.aestheticmedicalconsulting.com`) or leave it at its current Wix URL. Update `clientLoginUrl` accordingly.
- [ ] In Vercel, add `aestheticmedicalconsulting.com` and `www.aestheticmedicalconsulting.com`; Vercel shows the exact A / CNAME values.
- [ ] In Wix DNS: change **only** the A record for `@` and the CNAME for `www`. Do not touch MX, TXT (SPF/DKIM/DMARC), nameservers, or any other record. Keep Wix domain registration and email as they are.
- [ ] Wait for propagation; confirm HTTPS certificate issued by Vercel.
- [ ] Verify the Wix site is still reachable via its `*.wixsite.com` address for the member portal if needed.

## D. Post-launch

- [ ] Google Search Console: add property, submit `https://www.aestheticmedicalconsulting.com/sitemap.xml`
- [ ] Google Business Profile: create/claim "Aesthetic Med Consulting" (Scottsdale), separate from Skindale's profile; match name/address/phone to the site footer
- [ ] Check Search Console for 404s from old URLs over the first two weeks; add redirects as needed
- [ ] Decide on analytics (Vercel Analytics is privacy-friendly and needs no cookie banner); extend the CSP if added
- [ ] Update Instagram/Facebook/LinkedIn bios to the new site
- [ ] Keep the Wix subscription until the portal has a replacement; cancel nothing without Mary's approval
