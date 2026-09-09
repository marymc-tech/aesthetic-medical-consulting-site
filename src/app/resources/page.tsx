import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { ButtonLink, Check, FinalCta, PageHero, Section, SectionHeading } from "@/components/ui";
import { blogPosts } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Med Spa Startup Guidance, Protocols & Consent Forms | Arizona",
  description:
    "Startup guidance for new aesthetic practices in Arizona, plus a client library of clinical protocols, consent forms, intake documents, and regulatory templates.",
  path: "/resources",
});

const library = [
  { t: "Start-up forms", d: "Checklists and templates for new med spas and solo practices." },
  { t: "Patient intake and consent forms", d: "Intake, treatment consents, and photo release templates." },
  { t: "Protocol templates", d: "Injectables, laser, IV hydration, and medical weight loss." },
  { t: "Regulatory and registration templates", d: "Documents commonly needed for accounts and registrations." },
  { t: "Compounding pharmacy forms", d: "Forms used to establish prescriber accounts for topical numbing and more." },
  { t: "Articles", d: "Clinical, operational, and business guidance for members." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Resources"
        title="Startup guidance, protocols, and forms for aesthetic practices"
        intro="Practical support for launching and running an aesthetic or wellness practice in Arizona, and a client library of documents to adapt to your services."
      />

      <Section id="startup">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Aesthetic practice startup guidance"
              title="Start on solid footing"
              intro="Opening a med spa or solo injectables practice involves decisions that are hard to undo. Mary helps new owners think them through with the benefit of running her own Scottsdale practice."
            />
          </div>
          <ul className="grid gap-3 self-center text-[15.5px] text-charcoal-700">
            {[
              "Understanding the oversight structure your services call for in Arizona",
              "Which accounts and registrations a new practice typically needs, and how to approach them",
              "Building a protocol set and forms library before your first patient",
              "Product and pharmacy relationships that require a prescriber",
              "Service menu, pricing, and hiring decisions for a first year",
              "What to ask before signing a lease, a device contract, or a medical director agreement",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 max-w-2xl text-[14.5px] text-taupe-600">
          Startup guidance is educational and practical, not legal or accounting advice. For
          questions of law, entity structure, or tax, Mary will encourage you to involve a
          healthcare attorney or accountant.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Talk through your startup plan</ButtonLink>
        </div>
      </Section>

      <Section tone="cream" id="library">
        <SectionHeading
          eyebrow="Client forms library"
          title="Clinical protocols and consent forms"
          intro="Every medical director plan includes access to a library of templates. They are starting points to adapt to your practice, your services, and current Arizona requirements, and should be reviewed with your medical director before use."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {library.map((l) => (
            <div key={l.t} className="bg-cream-50 p-7">
              <h3 className="text-[21px] font-semibold text-charcoal-900">{l.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-taupe-600">{l.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.clientLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-charcoal-900 px-6 py-3 text-[14px] font-semibold text-cream-50 transition-colors hover:bg-charcoal-700"
          >
            Client Login
          </a>
          <Link href="/medical-director-services#plans" className="text-[14px] font-semibold text-rose-700 hover:underline">
            Not a client yet? See plans
          </Link>
        </div>
      </Section>

      <Section id="blog">
        <SectionHeading
          eyebrow="From the blog"
          title="Articles for nurses, injectors, and practice owners"
        />
        <ul className="mt-10 grid gap-4">
          {blogPosts.map((p) => (
            <li key={p.url} className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[19px] font-semibold text-charcoal-900 hover:text-rose-700"
              >
                {p.title}
              </a>
              <span className="text-sm text-taupe-600">
                {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} · {p.readTime}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="mt-6 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-rose-700 hover:underline">
          All articles
        </Link>
      </Section>

      <FinalCta title="Planning a new practice?" text="A complimentary discovery call is the best first step. Bring your questions." />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Professional Resources", path: "/resources" },
        ])}
      />
    </>
  );
}
