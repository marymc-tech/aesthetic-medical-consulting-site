import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { ButtonLink, Check, FinalCta, PageHero, Section, SectionHeading } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Nurse Injector Mentorship & Botox Training | Scottsdale, AZ",
  description:
    "Injector mentorship, observation days, and hands-on Botox and dermal filler training for licensed medical professionals in Scottsdale, Arizona, led by Mary McMillin, NP.",
  path: "/training-and-mentorship",
});

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Mentorship"
        title="Learn injecting from a practicing nurse practitioner, in a working Scottsdale med spa"
        intro="Three ways to build skill and confidence: one-on-one mentorship, an observation day, and a hands-on Botox and dermal filler course. All are led by Mary McMillin, NP, and held in Scottsdale, Arizona."
      />

      {/* Quick nav */}
      <div className="border-b border-line bg-cream-100">
        <nav aria-label="On this page" className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-2 px-5 py-4 text-[13px] font-semibold sm:px-8">
          <a href="#mentorship" className="text-charcoal-700 hover:text-rose-700">Injector mentorship</a>
          <a href="#observation" className="text-charcoal-700 hover:text-rose-700">Observation Day</a>
          <a href="#botox-filler-course" className="text-charcoal-700 hover:text-rose-700">Botox &amp; Dermal Filler Course</a>
        </nav>
      </div>

      <Section id="mentorship">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Injector mentorship"
              title="One-on-one guidance for nurse injectors"
              intro="For RNs and new injectors who want a mentor with real clinical experience, not just a certificate on the wall."
            />
            <ul className="mt-8 grid gap-3 text-[15.5px] text-charcoal-700">
              {[
                "Technique review and treatment planning for the areas you treat most",
                "Consultation skills: assessing candidacy, setting expectations, and saying no well",
                "Complication recognition and management planning",
                "Documentation, consent, and pre- and post-care conversations",
                "The business side: pricing, products, and building a schedule",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-lg text-[15px] text-taupe-600">
              Mentorship sessions are included in the Registered Nurse medical director plan and can
              be arranged separately. Contact Mary to discuss what fits.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Ask about mentorship</ButtonLink>
            </div>
          </div>
          <Image
            src="/images/mary-mcmillin-skindale.jpg"
            alt="Mary McMillin in scrubs at the Scottsdale office"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_-40px_rgba(46,42,40,0.45)]"
          />
        </div>
      </Section>

      <Section tone="cream" id="observation">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nurse Injector Observation Day"
              title="See what the work is really like before you commit"
              intro="Spend four hours observing live neurotoxin and dermal filler treatments in a working med spa. Watch how consultations and assessments run, and ask questions in real time."
            />
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                ["Length", "4 hours"],
                ["Fee", "$600"],
                ["Location", "Scottsdale, AZ"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-line bg-cream-50 p-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-taupe-600">{k}</dt>
                  <dd className="mt-1 font-display text-[24px] font-semibold text-charcoal-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-line bg-cream-50 p-8">
            <h3 className="text-[22px] font-semibold text-charcoal-900">What you&apos;ll observe</h3>
            <ul className="mt-4 grid gap-2.5 text-[15.5px] text-charcoal-700">
              {[
                "Patient consultations and treatment planning",
                "Neurotoxin and dermal filler injections across common treatment areas",
                "Documentation, consent, and pre- and post-care conversations",
                "The flow of a working med spa: scheduling, product handling, and patient communication",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14.5px] text-taupe-600">
              Observation only; no hands-on injecting is included. If you go on to take the Botox
              and Dermal Filler Course, the $600 observation fee is credited toward the course.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Book an Observation Day</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section id="botox-filler-course">
        <SectionHeading
          eyebrow="Basic Botox & Dermal Filler Course"
          title="Hands-on injectables training for licensed medical professionals"
          intro="Learn the fundamentals of neurotoxin and dermal filler treatment in a small-group setting inside a working med spa, with supervised practice on live models."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-8">
            <div>
              <h3 className="text-[24px] font-semibold text-charcoal-900">Who should attend</h3>
              <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-charcoal-700">
                Licensed medical professionals who want to begin offering neurotoxin and dermal
                filler treatments. There are no prerequisites. Please confirm that your license and
                state rules allow you to perform these procedures; the course is educational and
                does not itself authorize you to inject.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-charcoal-900">What you&apos;ll learn</h3>
              <ul className="mt-4 grid gap-2.5 text-[15.5px] text-charcoal-700 sm:grid-cols-2">
                {[
                  "Facial anatomy relevant to injectables",
                  "Patient assessment and candidacy",
                  "Neurotoxin injection techniques",
                  "Dermal filler techniques",
                  "Safety protocols and complication management",
                  "Consent, documentation, and aftercare",
                  "Supervised hands-on practice with live models",
                  "A short multiple-choice assessment to reinforce key concepts",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-charcoal-900">Instructors</h3>
              <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-charcoal-700">
                Mary McMillin, MSN, NP-C, FNP-BC, aesthetic nurse practitioner and medical
                director, injecting since 2016; with Alizia Gutierrez, RN.
              </p>
            </div>
          </div>
          <div className="h-fit rounded-2xl border border-line bg-cream-100 p-8">
            <p className="eyebrow">Course details</p>
            <dl className="mt-4 grid gap-4 text-[15px]">
              <div>
                <dt className="font-semibold text-charcoal-900">Includes</dt>
                <dd className="text-taupe-600">Training materials, lunch, hands-on practice with live models, and a certificate of completion</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal-900">Location</dt>
                <dd className="text-taupe-600">Skindale Medspa, North Scottsdale Road, Scottsdale, AZ</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal-900">Tuition</dt>
                <dd className="text-taupe-600"><span className="font-display text-[24px] font-semibold text-charcoal-900">$1,500</span><br />Observation Day fees ($600) are credited toward tuition. Contact Mary for upcoming dates.</dd>
              </div>
            </dl>
            <p className="mt-5 text-[13.5px] leading-relaxed text-taupe-600">
              This is a non-accredited course intended for educational and skill-building purposes
              only. A certificate of completion is not a license or board certification and does
              not replace state requirements or product-specific training.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/contact">Ask about the next session</ButtonLink>
              <a href={site.phoneHref} className="text-center text-sm font-semibold text-charcoal-900 underline-offset-4 hover:underline">
                Text or call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <FinalCta title="Ready to build your skills?" text="Tell Mary where you are in your aesthetics career and she'll suggest the right starting point." />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Basic Botox and Dermal Filler Course",
          description:
            "Hands-on neurotoxin and dermal filler training for licensed medical professionals, held in Scottsdale, Arizona. Non-accredited; certificate of completion.",
          provider: { "@id": `${site.url}/#organization` },
          url: `${site.url}/training-and-mentorship#botox-filler-course`,
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Training & Mentorship", path: "/training-and-mentorship" },
        ])}
      />
    </>
  );
}
