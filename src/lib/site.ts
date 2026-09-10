/**
 * Single source of truth for business details used across pages,
 * metadata, and structured data. Anything marked CONFIRM is pending
 * Mary's confirmation (see NEEDS-CONFIRMATION.md).
 */
export const site = {
  name: "Aesthetic Med Consulting",
  shortName: "AMC",
  owner: "Mary McMillin, MSN, NP-C, FNP-BC",
  ownerFirst: "Mary",
  tagline: "Experienced Medical Direction for Aesthetic and Wellness Practices",
  description:
    "Medical director services, good-faith exams, protocols, mentorship, and training for med spas, nurse injectors, laser technicians, and estheticians in Scottsdale, Phoenix, and across Arizona.",
  // Production URL. Vercel preview deployments override via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aestheticmedconsulting.com",
  phone: "602.999.5847",
  phoneHref: "tel:+16029995847",
  email: "marymcnp@gmail.com",
  address: {
    street: "11000 N. Scottsdale Road",
    city: "Scottsdale",
    region: "AZ",
    postalCode: "85254",
    country: "US",
  },
  serviceArea: ["Scottsdale", "Phoenix", "Arizona"],
  licensedStates: [
    "Arizona",
    "Kansas",
    "Nebraska",
    "Nevada",
    "New Mexico",
    "New York",
    "Utah",
  ],
  social: {
    instagram: "https://www.instagram.com/aestheticmedicalconsulting",
    facebook: "https://www.facebook.com/profile.php?id=61556277694441",
    linkedin: "https://www.linkedin.com/in/mary-mcmillin-aestheticnp",
  },
  // Temporary: links to the existing Wix membership portal. Mary will supply the exact login URL.
  clientLoginUrl: "https://www.aestheticmedicalconsulting.com/articles",
  skindaleUrl: "https://www.skindalemedspa.com",
  foundedYear: 2024,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/medical-director-services", label: "Medical Director Services" },
  { href: "/good-faith-exams", label: "Good Faith Exams" },
  { href: "/training-and-mentorship", label: "Training & Mentorship" },
  { href: "/resources", label: "Professional Resources" },
  { href: "/about", label: "About Mary" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;

export const disclaimer =
  "Aesthetic Med Consulting provides clinical oversight, education, and business guidance to licensed professionals. Information on this site is educational and is not legal advice. Regulatory requirements vary by state and change over time; practice owners remain responsible for their own licensing, registrations, and compliance.";

export const phiNotice =
  "Please do not submit patient names, photographs, medical records, or protected health information through this form.";
