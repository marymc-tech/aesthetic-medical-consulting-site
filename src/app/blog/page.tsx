import JsonLd from "@/components/JsonLd";
import { FinalCta, PageHero, Section } from "@/components/ui";
import { blogPosts } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog for Arizona Nurse Injectors & Med Spa Owners",
  description:
    "Practical articles on building an aesthetics career, choosing a medical director, and running a med spa in Arizona, written by Mary McMillin, NP.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guidance for nurses, injectors, and practice owners"
        intro="Written from inside a working Arizona practice."
        cta={false}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((p) => (
            <li key={p.url} className="rounded-2xl border border-line bg-cream-100 p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-taupe-600">
                {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {p.readTime}
              </p>
              <h2 className="mt-3 text-[26px] font-semibold leading-tight text-charcoal-900">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-rose-700">
                  {p.title}
                </a>
              </h2>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[12.5px] font-bold uppercase tracking-[0.08em] text-rose-700 hover:underline"
              >
                Read article
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[14px] text-taupe-600">
          Articles currently open on the existing site while they are migrated here.
        </p>
      </Section>
      <FinalCta />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
