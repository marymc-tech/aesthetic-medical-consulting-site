import { PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { disclaimer, site } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Terms of Use",
    description: "Terms for using the Aesthetic Med Consulting website.",
    path: "/terms",
  }),
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" intro="Last updated September 2026." cta={false} />
      <Section>
        <div className="prose-amc max-w-3xl text-[16px] leading-relaxed text-charcoal-700">
          <h2 className="text-[28px] font-medium text-charcoal-900">Educational information only</h2>
          <p className="mt-4">{disclaimer}</p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">No client relationship by browsing</h2>
          <p className="mt-4">
            Reading this website or submitting the inquiry form does not create a medical director,
            consulting, or other professional relationship. Services are provided only under a
            signed written agreement.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">Not for patients</h2>
          <p className="mt-4">
            This website does not offer medical advice or patient care. Patients seeking treatment
            should contact Skindale Medspa directly, which operates separately.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">Training programs</h2>
          <p className="mt-4">
            Courses and observation sessions are non-accredited educational programs. A certificate
            of completion is not a license, board certification, or authorization to perform any
            procedure. Attendees are responsible for confirming their own scope of practice.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">Content</h2>
          <p className="mt-4">
            Content on this site is owned by Mary McMillin and may not be reproduced without
            permission. Pricing and program details may change; the current agreement or invoice
            controls.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">Contact</h2>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="font-semibold text-rose-700">{site.email}</a> · {site.phone}
          </p>
        </div>
      </Section>
    </>
  );
}
