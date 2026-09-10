import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { ButtonLink, FinalCta, Section, SectionHeading } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Mary McMillin, NP | Aesthetic Medical Director, AZ",
  description:
    "Meet Mary McMillin, MSN, NP-C, FNP-BC: double board-certified nurse practitioner, aesthetic medical director, and Laser Safety Officer serving practices across Arizona.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-br from-cream-100 via-cream-50 to-blush-200/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-16 sm:px-8 md:grid-cols-[1.2fr_1fr] md:pb-20 md:pt-24">
          <div>
            <p className="eyebrow">About Mary</p>
            <h1 className="mt-4 text-[38px] font-medium leading-[1.05] text-charcoal-900 md:text-[54px]">
              Mary McMillin, MSN, NP-C, FNP-BC
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-taupe-600">
              A family nurse practitioner who has spent nearly a decade in aesthetic medicine,
              first as an injector and now as a medical director, educator, and mentor to
              aesthetic professionals across Arizona.
            </p>
          </div>
          <Image
            src="/images/mary-mcmillin-portrait.jpg"
            alt="Mary McMillin, MSN, NP-C, FNP-BC"
            width={1200}
            height={1500}
            priority
            sizes="(max-width: 768px) 100vw, 384px"
            className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-[0_30px_60px_-40px_rgba(46,42,40,0.45)] md:ml-auto"
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-amc text-[16.5px] leading-relaxed text-charcoal-700">
            <h2 className="text-[34px] font-medium text-charcoal-900">Her path into aesthetics</h2>
            <p className="mt-6">
              Mary grew up in Kansas and came to nursing after several years in pharmaceutical and
              medical sales, work that taught her how clinical evidence, product knowledge, and
              business realities fit together. She earned her Bachelor of Science in Nursing from
              Washburn University and her Master of Science in Nursing, Family Nurse Practitioner,
              from Colorado Technical University.
            </p>
            <p>
              She trained in neurotoxins and dermal fillers in 2016, learning from injectors she
              still respects today, and quickly found that aesthetics was where she wanted to build
              her career. Her injecting philosophy is simple: refined, natural-looking results that
              enhance a person&apos;s features rather than overpower them.
            </p>
            <h2 className="mt-12 text-[34px] font-medium text-charcoal-900">What she does today</h2>
            <p className="mt-6">
              Mary serves as medical director and Laser Safety Officer for practices in Arizona.
              Through Aesthetic Med Consulting she supports nurses, laser technicians,
              estheticians, and practice owners with oversight, good faith exams, protocols, and
              mentorship, and she teaches hands-on injectables training in Scottsdale.
            </p>
            <p>
              She still sees patients, which matters: the guidance she gives comes from a practice
              she runs every week, not from theory.
            </p>
            <h2 className="mt-12 text-[34px] font-medium text-charcoal-900">How she works</h2>
            <p className="mt-6">
              A good medical director is present, supportive, and experienced. That means answering
              the phone, working through problems as a team, and bringing real regulatory and
              clinical experience to every conversation. Most clients say the difference they notice
              first is simply that Mary is reachable.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Schedule a Discovery Call</ButtonLink>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-cream-100 p-8">
            <p className="eyebrow">Credentials</p>
            <ul className="mt-4 grid gap-3 text-[15px] text-charcoal-700">
              <li>Double board-certified Family Nurse Practitioner (NP-C, FNP-BC)</li>
              <li>Master of Science in Nursing, Family Nurse Practitioner, Colorado Technical University</li>
              <li>Bachelor of Science in Nursing, Washburn University</li>
              <li>Advanced aesthetic injector, trained in neurotoxins and dermal fillers since 2016</li>
              <li>Aesthetic and medical laser medical director</li>
              <li>Laser Safety Officer</li>
            </ul>
            <p className="eyebrow mt-8">Licensed in</p>
            <p className="mt-3 text-[15px] text-charcoal-700">{site.licensedStates.join(", ")}</p>
            <p className="eyebrow mt-8">Based in</p>
            <p className="mt-3 text-[15px] text-charcoal-700">Scottsdale, Arizona, serving the Phoenix area and practices statewide</p>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-cream-50 p-8 text-center md:p-10">
          <SectionHeading
            align="center"
            eyebrow="Two separate practices"
            title="Consulting here. Patient care at Skindale Medspa."
            intro="Aesthetic Med Consulting works with licensed professionals and practices. Mary sees patients for aesthetic treatments at Skindale Medspa in Scottsdale, which operates separately with its own website and booking."
          />
          <div className="mt-6">
            <ButtonLink href={site.skindaleUrl} variant="secondary" external>
              Visit Skindale Medspa
            </ButtonLink>
          </div>
        </div>
      </Section>

      <FinalCta />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Mary", path: "/about" },
        ])}
      />
    </>
  );
}
