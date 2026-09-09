import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { Check, FinalCta, PageHero, Section, SectionHeading } from "@/components/ui";
import { plans } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Medical Director Services for Arizona Med Spas & Injectors",
  description:
    "Monthly medical director plans for Arizona med spas, nurse injectors, laser technicians, and estheticians. Protocols, good faith exams, laser and IPL oversight, and daily support.",
  path: "/medical-director-services",
});

const oversight = [
  {
    title: "Injectables",
    text: "Protocols and standing orders for neurotoxin and dermal filler services, patient selection guidance, and complication planning.",
  },
  {
    title: "Laser and IPL",
    text: "Medical oversight for laser hair removal, IPL, and related device treatments, with pre- and post-care protocols. Mary serves as Laser Safety Officer and laser medical director.",
  },
  {
    title: "Medical weight-loss programs",
    text: "Program oversight for practices offering medical weight-loss services, including protocol structure and provider evaluation requirements.",
  },
  {
    title: "IV hydration and wellness",
    text: "Protocols and oversight structure for wellness practices adding IV hydration and related services.",
  },
];

export default function MedicalDirectorServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical Director Services"
        title="A medical director who is present, practical, and experienced in aesthetics"
        intro="Clinical oversight for med spas, nurse injectors, laser technicians, and estheticians in Scottsdale, Phoenix, and across Arizona. Every plan includes written protocols, access to the client forms library, monthly coaching, and a direct line to Mary on working days."
      />

      <Section>
        <SectionHeading
          eyebrow="What oversight includes"
          title="More than a name on the wall"
          intro="A medical director agreement should change how your practice runs day to day. Here is what working with Mary looks like."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Written protocols and standing orders",
              d: "Service-specific protocols for the treatments you offer, reviewed and updated as your menu grows.",
            },
            {
              t: "Clinical guidance when you need it",
              d: "Phone and text access on working days for questions about candidacy, dosing, adverse events, and documentation.",
            },
            {
              t: "Good faith examinations",
              d: "Telehealth or in-person exams so patients are evaluated by a qualified provider before treatment.",
            },
            {
              t: "Documentation support",
              d: "Intake, consent, and charting templates from the client forms library, plus periodic chart review that supports safe, well-documented care.",
            },
            {
              t: "Accounts and registrations",
              d: "Help understanding and setting up compounding pharmacy, medical skincare, and product accounts that require a prescriber.",
            },
            {
              t: "Monthly coaching",
              d: "A standing monthly call covering clinical questions and the business side: pricing, hiring, growth, and what to add next.",
            },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 40} className="rounded-2xl border border-line bg-cream-50 p-7">
              <h3 className="text-[22px] font-semibold leading-tight text-charcoal-900">{item.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-taupe-600">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream" id="plans">
        <SectionHeading
          eyebrow="Plans and pricing"
          title="Transparent monthly plans"
          intro="Choose the plan that matches your license and setting. Not sure which fits? A discovery call will sort it out."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {plans.map((p) => (
            <div key={p.name} className="flex flex-col rounded-2xl border border-line bg-cream-50 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-[28px] font-semibold leading-tight text-charcoal-900">{p.name}</h3>
                <p className="text-right">
                  <span className="font-display text-[32px] font-medium text-charcoal-900">{p.price}</span>
                  <span className="ml-1 text-sm text-taupe-600">{p.cadence}</span>
                </p>
              </div>
              <p className="mt-1 text-sm font-semibold text-rose-700">{p.audience}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-taupe-600">{p.summary}</p>
              <ul className="mt-5 grid gap-2.5 text-[15px] text-charcoal-700">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex gap-3">
                    <Check />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex justify-center rounded-full bg-charcoal-900 px-6 py-3 text-[14px] font-semibold text-cream-50 transition-colors hover:bg-charcoal-700"
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-taupe-600">
          Current medical director clients also receive ongoing file sharing, monthly check-ins,
          priority phone and text access, and invitations to quarterly advanced training sessions
          (offered at an additional fee).
        </p>
      </Section>

      <Section id="oversight">
        <SectionHeading
          eyebrow="Areas of oversight"
          title="Laser, IPL, injectables, and weight-loss program oversight"
          intro="Oversight is structured around the services your practice actually offers."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {oversight.map((o) => (
            <div key={o.title} className="bg-cream-50 p-8">
              <h3 className="text-[24px] font-semibold text-charcoal-900">{o.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-taupe-600">{o.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How it works" title="From discovery call to ongoing support" />
            <ol className="mt-8 grid gap-5">
              {[
                ["Discovery call", "A complimentary conversation about your services, setting, and goals."],
                ["Agreement", "You receive a medical director agreement to review at your own pace."],
                ["Onboarding", "Protocols are written, accounts set up, and forms put in place."],
                ["Ongoing support", "Monthly coaching, good faith exams as needed, and a medical director you can reach."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-display text-[28px] font-medium leading-none text-rose-500">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-charcoal-900">{t}</p>
                    <p className="mt-1 text-[15px] text-taupe-600">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-line bg-cream-50 p-8">
            <p className="eyebrow">A note on compliance</p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-charcoal-700">
              Arizona&apos;s rules for medical aesthetics are specific, and they change. Mary&apos;s
              role is to provide qualified clinical oversight and help you understand what applies
              to your practice. That guidance is educational, not legal advice, and it does not
              replace your own review of Arizona Board requirements or advice from a healthcare
              attorney. No arrangement automatically makes a practice compliant; you remain
              responsible for your licensing, registrations, and day-to-day operations.
            </p>
            <p className="mt-4 text-sm text-taupe-600">
              Questions? Call or text{" "}
              <a href={site.phoneHref} className="font-semibold text-charcoal-900">
                {site.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <FinalCta title="Not sure which plan is right?" text="Book a complimentary discovery call and we'll figure it out together." />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Medical Director Services", path: "/medical-director-services" },
        ])}
      />
    </>
  );
}
