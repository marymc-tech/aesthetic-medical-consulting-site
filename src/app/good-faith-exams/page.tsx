import JsonLd from "@/components/JsonLd";
import { Faq, FinalCta, PageHero, Section, SectionHeading } from "@/components/ui";
import { faqGroups } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Good Faith Exams for Aesthetic Practices in Arizona",
  description:
    "Timely good faith exams by a board-certified nurse practitioner for med spas and nurse injectors in Scottsdale, Phoenix, and across Arizona. Telehealth or in person.",
  path: "/good-faith-exams",
});

const gfeFaqs = faqGroups.find((g) => g.id === "good-faith-exams")!.items;

export default function GoodFaithExamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Good Faith Examinations"
        title="Good faith exams for med spas and nurse injectors in Arizona"
        intro="Before many aesthetic treatments, a patient should be evaluated by a qualified provider who confirms they are an appropriate candidate. Mary provides those exams so your patients are properly assessed and your treatments can move forward."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What an exam covers" title="A clinical evaluation, not a formality" />
            <div className="prose-amc mt-6 text-[16px] leading-relaxed text-charcoal-700">
              <p>
                During a good faith exam, Mary reviews the patient&apos;s medical history,
                medications, allergies, and contraindications; discusses the planned treatment and
                its risks; and documents whether the patient is an appropriate candidate.
              </p>
              <p>
                The result is a clear record for the patient&apos;s chart that supports safe
                treatment and good documentation.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["Telehealth", "Video exams scheduled around your treatment calendar, so patients are not kept waiting."],
              ["In person", "Available in Scottsdale and the Phoenix area for practices that prefer on-site evaluation."],
              ["Documentation", "Every exam is documented and shared with your practice for the patient's chart through secure channels."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-line bg-cream-100 p-6">
                <h3 className="text-[22px] font-semibold text-charcoal-900">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-taupe-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="Who this is for" title="Practices that need a reliable provider for exams" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Solo nurse injectors", "A dependable provider for exams so you can book and treat with confidence."],
            ["Med spas", "Coverage when in-house providers are unavailable or overbooked."],
            ["Laser and esthetics practices", "Provider evaluation for treatments that call for it before service."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-line bg-cream-50 p-7">
              <h3 className="text-[22px] font-semibold text-charcoal-900">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-taupe-600">{d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[15.5px] text-charcoal-700">
          Good faith exams are included in the Medical Spa and Registered Nurse medical director
          plans. Standalone arrangements may be available; contact Mary to discuss.
        </p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Common questions" title="About good faith exams" />
          <div>
            {gfeFaqs.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </Section>

      <FinalCta title="Need exam coverage for your practice?" text="Book a complimentary discovery call to talk through scheduling, documentation, and whether a standalone or bundled arrangement fits." />
      <JsonLd data={faqJsonLd(gfeFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Good Faith Exams", path: "/good-faith-exams" },
        ])}
      />
    </>
  );
}
