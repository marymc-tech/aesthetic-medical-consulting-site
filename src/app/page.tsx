import Link from "next/link";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import {
  ButtonLink,
  Faq,
  FinalCta,
  Placeholder,
  Section,
  SectionHeading,
} from "@/components/ui";
import { audiences, homeFaqs, services, testimonials } from "@/lib/content";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Aesthetic Medical Consulting | Medical Director, Arizona",
  description:
    "Experienced medical direction, good-faith exams, protocols, and mentorship for med spas, nurse injectors, and laser technicians in Scottsdale, Phoenix, and across Arizona.",
  path: "/",
});

const steps = [
  {
    title: "Discovery call",
    text: "A complimentary 30-minute conversation about the services you offer, the setting you work in, and the support you're looking for.",
  },
  {
    title: "Agreement",
    text: "If we're a fit, you receive a medical director agreement to review on your own schedule.",
  },
  {
    title: "Onboarding",
    text: "We build your protocols, set up accounts, and put your forms in place.",
  },
  {
    title: "Ongoing support",
    text: "Monthly coaching, good faith exams as needed, and a medical director you can reach.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-blush-200/50 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-16 sm:px-8 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-24">
          <div className="relative">
            <p className="eyebrow">Scottsdale, Arizona · Serving practices statewide</p>
            <h1 className="mt-4 text-[40px] font-medium leading-[1.04] text-charcoal-900 sm:text-[52px] md:text-[60px]">
              Experienced Medical Direction for Aesthetic and Wellness Practices
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-taupe-600">
              Clinical oversight, good-faith examinations, protocols, mentorship, and practical
              support for qualified aesthetic and wellness professionals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Schedule a Discovery Call</ButtonLink>
              <ButtonLink href="/medical-director-services" variant="secondary">
                View services
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-taupe-600">
              Text or call{" "}
              <a href={site.phoneHref} className="font-semibold text-charcoal-900">
                {site.phone}
              </a>
            </p>
          </div>
          <Reveal delay={120}>
            <Placeholder label="Portrait of Mary" className="aspect-[4/5] w-full max-w-md md:ml-auto" />
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-b border-line bg-cream-100">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-2 px-5 py-4 text-[13px] font-semibold text-charcoal-700 sm:px-8">
          <li>Double board-certified Family Nurse Practitioner</li>
          <li>Aesthetic &amp; laser medical director</li>
          <li>Laser Safety Officer</li>
          <li>Licensed in seven states</li>
        </ul>
      </div>

      {/* Who Mary serves */}
      <Section>
        <SectionHeading
          eyebrow="Who Mary serves"
          title="Oversight built around how you practice"
          intro="Whether you own a med spa or you're a nurse building an injectables practice, the arrangement fits your services, your setting, and your stage."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 60} className="bg-cream-50 p-7">
              <h3 className="text-[24px] font-semibold leading-tight text-charcoal-900">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-taupe-600">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core services */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Core services"
          title="What Aesthetic Medical Consulting provides"
          intro="Professional services for licensed practices and providers. Patient care is offered separately through Skindale Medspa."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-cream-50 p-7 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(46,42,40,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span aria-hidden="true" className="mb-5 h-9 w-9 rounded-full bg-blush-200" />
                <h3 className="text-[24px] font-semibold leading-tight text-charcoal-900">{s.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-taupe-600">{s.blurb}</p>
                <span className="mt-5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-rose-700 group-hover:underline">
                  Learn more
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Mary + credentials */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why practices choose Mary"
              title="Present, collaborative, and experienced"
            />
            <dl className="mt-10 grid gap-8">
              <div>
                <dt className="text-[22px] font-semibold text-charcoal-900 font-display">Present</dt>
                <dd className="mt-2 max-w-lg text-[15.5px] leading-relaxed text-taupe-600">
                  Mary answers calls and texts on working days. When a clinical question comes up
                  in the middle of a treatment day, you reach a person, not a portal.
                </dd>
              </div>
              <div>
                <dt className="text-[22px] font-semibold text-charcoal-900 font-display">Collaborative</dt>
                <dd className="mt-2 max-w-lg text-[15.5px] leading-relaxed text-taupe-600">
                  You work as a team. Protocols, patient selection, and the business decisions that
                  come with growth are worked through together.
                </dd>
              </div>
              <div>
                <dt className="text-[22px] font-semibold text-charcoal-900 font-display">Experienced</dt>
                <dd className="mt-2 max-w-lg text-[15.5px] leading-relaxed text-taupe-600">
                  Nearly a decade in aesthetic regulation, procedure, and safety, grounded in a
                  practice Mary runs every week.
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-line bg-cream-100 p-8 md:p-10">
            <p className="eyebrow">Credentials and experience</p>
            <p className="mt-3 text-[28px] font-semibold leading-tight text-charcoal-900 font-display">
              Mary McMillin, MSN, NP-C, FNP-BC
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] text-charcoal-700">
              <li>Double board-certified Family Nurse Practitioner</li>
              <li>Advanced aesthetic injector, trained in neurotoxins and dermal fillers since 2016</li>
              <li>Aesthetic and medical laser medical director</li>
              <li>Laser Safety Officer</li>
              <li>
                Licensed in Arizona, Kansas, Nevada, New Mexico, Nebraska, New York, and Utah
              </li>
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-rose-700 hover:underline"
            >
              About Mary
            </Link>
          </div>
        </div>
      </Section>

      {/* How to get started */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="How to get started"
          title="Four steps from first call to ongoing support"
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-line bg-cream-50 p-7">
              <span className="font-display text-[34px] font-medium leading-none text-rose-500">
                {i + 1}
              </span>
              <h3 className="mt-4 text-[22px] font-semibold text-charcoal-900">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-taupe-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="What clients say" title="Trusted by practice owners in Scottsdale" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-line bg-cream-100 p-8 md:p-10">
              <blockquote className="font-display text-[22px] leading-snug text-charcoal-900 md:text-[26px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-taupe-600">
                <span className="font-semibold text-charcoal-900">{t.name}</span> · {t.role},{" "}
                {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Common questions before a first call"
            intro="A few of the questions practice owners and nurses ask most often."
          />
          <div>
            {homeFaqs.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
            <Link
              href="/faqs"
              className="mt-6 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-rose-700 hover:underline"
            >
              All FAQs
            </Link>
          </div>
        </div>
      </Section>

      <FinalCta />
      <JsonLd data={faqJsonLd(homeFaqs)} />
    </>
  );
}
