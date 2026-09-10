import { PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Privacy Policy",
    description: "How Aesthetic Med Consulting handles information submitted through this website.",
    path: "/privacy",
  }),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Last updated September 2026." cta={false} />
      <Section>
        <div className="prose-amc max-w-3xl text-[16px] leading-relaxed text-charcoal-700">
          <h2 className="text-[28px] font-medium text-charcoal-900">What this site collects</h2>
          <p className="mt-4">
            This website is for licensed professionals and practices. When you submit the
            discovery-call form, we receive the information you enter: your name, business name,
            email, phone number, state, professional title or license, services of interest, and
            your message. That information is sent to us by email so we can respond. It is not
            stored in a database by this website.
          </p>
          <p>
            Please do not submit patient names, photographs, medical records, or protected health
            information through this website. This website is not designed to receive or store
            protected health information, and we make no representation that the website or its
            hosting providers are HIPAA compliant.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">How we use it</h2>
          <p className="mt-4">
            We use the information you provide to reply to your inquiry and, if you become a
            client, to provide our services. We do not sell your information.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">Hosting and analytics</h2>
          <p className="mt-4">
            This site is hosted on Vercel, which may process standard server logs (such as IP
            address and browser type) to deliver the site. We do not currently run third-party
            advertising or tracking scripts.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">External links</h2>
          <p className="mt-4">
            Links to Skindale Medspa, social media, and the client portal lead to separate websites
            with their own privacy practices.
          </p>
          <h2 className="mt-10 text-[28px] font-medium text-charcoal-900">Contact</h2>
          <p className="mt-4">
            Questions about this policy: <a href={`mailto:${site.email}`} className="font-semibold text-rose-700">{site.email}</a> or {site.phone}.
          </p>
        </div>
      </Section>
    </>
  );
}
