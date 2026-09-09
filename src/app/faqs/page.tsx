import JsonLd from "@/components/JsonLd";
import { Faq, FinalCta, PageHero, Section } from "@/components/ui";
import { faqGroups } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQs | Medical Director, Good Faith Exams & Training in AZ",
  description:
    "Answers to common questions about working with a medical director, good faith exams, injectables training, and getting started with Aesthetic Medical Consulting in Arizona.",
  path: "/faqs",
});

export default function FaqsPage() {
  const all = faqGroups.flatMap((g) => g.items);
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Questions practice owners and nurses ask most"
        intro="If your question isn't here, call, text, or send a message. Mary answers on working days."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="FAQ sections" className="hidden lg:block">
            <ul className="sticky top-28 grid gap-2 text-[14px]">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="text-taupe-600 hover:text-rose-700">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid gap-14">
            {faqGroups.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-28">
                <h2 className="text-[30px] font-medium text-charcoal-900">{g.title}</h2>
                <div className="mt-4">
                  {g.items.map((f) => (
                    <Faq key={f.q} {...f} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <FinalCta title="Still have a question?" text="Book a complimentary discovery call or send a message. There's no obligation." />
      <JsonLd data={faqJsonLd(all)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ])}
      />
    </>
  );
}
