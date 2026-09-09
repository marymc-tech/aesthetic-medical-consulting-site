import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    telephone: "+1-602-999-5847",
    email: site.email,
    description: site.description,
    founder: { "@id": `${site.url}/#mary` },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode || undefined,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Scottsdale" },
      { "@type": "City", name: "Phoenix" },
      { "@type": "State", name: "Arizona" },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
    knowsAbout: [
      "Medical director services for med spas",
      "Good faith examinations",
      "Laser and IPL medical oversight",
      "Nurse injector mentorship",
      "Botox and dermal filler training",
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#mary`,
    name: "Mary McMillin",
    honorificSuffix: "MSN, NP-C, FNP-BC",
    jobTitle: "Aesthetic Nurse Practitioner and Medical Director",
    worksFor: { "@id": `${site.url}/#organization` },
    url: `${site.url}/about`,
    sameAs: [site.social.instagram, site.social.linkedin],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Washburn University" },
      { "@type": "CollegeOrUniversity", name: "Colorado Technical University" },
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
