import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { PageHero, Section } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Schedule a Discovery Call | Aesthetic Med Consulting",
  description:
    "Request a complimentary discovery call with Mary McMillin, NP, for medical director services, good faith exams, or training in Scottsdale, Phoenix, and across Arizona.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule a discovery call"
        intro="A complimentary 30-minute conversation, by video or in person in Scottsdale, about your practice, the oversight or training you're looking for, and whether working together makes sense. No obligation."
        cta={false}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="relative">
            <InquiryForm />
          </div>
          <aside className="grid h-fit gap-6">
            <div className="rounded-2xl border border-line bg-cream-100 p-7">
              <p className="eyebrow">Prefer to talk now?</p>
              <p className="mt-3 text-[15.5px] text-charcoal-700">
                Text or call{" "}
                <a href={site.phoneHref} className="font-semibold text-charcoal-900 hover:text-rose-700">
                  {site.phone}
                </a>
                <br />
                Email{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-charcoal-900 hover:text-rose-700">
                  {site.email}
                </a>
              </p>
              <p className="mt-3 text-[14px] text-taupe-600">Mary answers on working days and replies to messages within one business day.</p>
            </div>
            <div className="rounded-2xl border border-line bg-cream-100 p-7">
              <p className="eyebrow">Office</p>
              <p className="mt-3 text-[15.5px] text-charcoal-700">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p className="mt-3 text-[14px] text-taupe-600">
                In-person meetings by appointment. Virtual support available throughout Arizona.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-cream-50 p-7 text-[14px] text-taupe-600">
              <p className="font-semibold text-charcoal-900">Patients</p>
              <p className="mt-1">
                This form is for licensed professionals and practices. If you&apos;d like to book a
                treatment, please visit{" "}
                <a href={site.skindaleUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-700 hover:underline">
                  Skindale Medspa
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </Section>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
