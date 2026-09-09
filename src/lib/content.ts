export type Service = {
  slug: string;
  title: string;
  blurb: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "medical-director",
    title: "Medical Director Services",
    blurb:
      "Written protocols, standing orders, clinical oversight, and a medical director who answers the phone.",
    href: "/medical-director-services",
  },
  {
    slug: "good-faith-exams",
    title: "Good Faith Examinations",
    blurb:
      "Timely telehealth or in-person evaluations so patients are assessed by a qualified provider before treatment.",
    href: "/good-faith-exams",
  },
  {
    slug: "startup",
    title: "Practice Startup Guidance",
    blurb:
      "Practical help structuring a new aesthetic or wellness practice: accounts, registrations, protocols, and first hires.",
    href: "/resources#startup",
  },
  {
    slug: "protocols",
    title: "Clinical Protocols & Consent Forms",
    blurb:
      "A library of protocol templates, intake and consent forms, and regulatory documents to adapt to your practice.",
    href: "/resources#library",
  },
  {
    slug: "oversight",
    title: "Laser, IPL & Weight-Loss Oversight",
    blurb:
      "Medical oversight for laser and IPL services and for medical weight-loss programs, with pre- and post-care guidance.",
    href: "/medical-director-services#oversight",
  },
  {
    slug: "training",
    title: "Training & Mentorship",
    blurb:
      "Injector mentorship, observation days, and hands-on Botox and dermal filler training in Scottsdale.",
    href: "/training-and-mentorship",
  },
];

export const audiences = [
  {
    title: "Med-spa owners",
    text: "A responsive medical director with real aesthetic experience, for practices offering injectables, laser, and wellness services.",
  },
  {
    title: "Nurse injectors & registered nurses",
    text: "Protocols, good faith exams, and mentorship for RNs building or growing an injectables practice.",
  },
  {
    title: "Certified laser technicians",
    text: "Treatment protocols and clinical oversight for laser hair removal and related services.",
  },
  {
    title: "Medical estheticians & wellness practices",
    text: "Appropriate oversight for estheticians adding medical-grade treatments and for aesthetic and wellness practices.",
  },
];

export type Plan = {
  name: string;
  audience: string;
  price: string;
  cadence: string;
  summary: string;
  includes: string[];
};

/**
 * Plan pricing and inclusions are taken from the currently published
 * aestheticmedicalconsulting.com plans page. CONFIRM before launch.
 */
export const plans: Plan[] = [
  {
    name: "Medical Spa",
    audience: "For med spas offering injectables, laser, and other medical aesthetic services",
    price: "$750",
    cadence: "per month",
    summary:
      "Medical director oversight for medical spas, including clinical protocols and guidance.",
    includes: [
      "Medical director oversight and written clinical protocols",
      "Good faith exams for your patients",
      "Full client forms library",
      "Monthly business and clinical coaching",
      "Daily phone and text access on working days",
      "Support setting up compounding pharmacy and medical skincare accounts",
    ],
  },
  {
    name: "Registered Nurse",
    audience: "For RNs performing aesthetic treatments under medical director protocols",
    price: "$600",
    cadence: "per month",
    summary:
      "Registered nurses perform aesthetic treatments under the direction of a licensed medical director who provides protocols and clinical oversight.",
    includes: [
      "Protocols and clinical oversight",
      "Good faith exams for your patients",
      "Four one-hour mentorship sessions",
      "Client forms library",
      "Monthly coaching and daily phone and text access",
    ],
  },
  {
    name: "Certified Laser Technician",
    audience: "For laser technicians providing laser hair removal and related services",
    price: "$500",
    cadence: "per month",
    summary:
      "Laser technicians operate under the direction of a licensed medical director who provides treatment protocols, clinical guidance, and oversight.",
    includes: [
      "Treatment protocols and pre- and post-care guidance",
      "Clinical oversight",
      "Support setting up a compounding pharmacy account for topical numbing",
      "Client forms library, monthly coaching, and daily phone and text access",
    ],
  },
  {
    name: "Medical Esthetician",
    audience: "For licensed estheticians who need medical oversight for specific treatments",
    price: "$100",
    cadence: "per month",
    summary: "Monthly medical director services plan for medical estheticians.",
    includes: [
      "Client forms library",
      "Monthly coaching",
      "Daily phone and text access on working days",
      "Support setting up a compounding pharmacy account for topical numbing",
    ],
  },
];

export type Faq = { q: string; a: string };
export type FaqGroup = { title: string; id: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Working with a medical director",
    id: "medical-director",
    items: [
      {
        q: "What does a medical director actually do for my practice?",
        a: "A medical director provides clinical oversight: written protocols and standing orders for the services you offer, guidance on patient selection and safety, review of documentation, and a qualified provider you can reach when a clinical question comes up. Mary also brings practical business experience from running her own practice.",
      },
      {
        q: "Does having a medical director make my practice compliant?",
        a: "No single arrangement does. Arizona's requirements are specific to the services you offer, who performs them, and how your business is structured, and they change over time. Mary helps you understand what applies to your practice and builds oversight designed to support safe, well-documented care. You remain responsible for your own licensing, registrations, and compliance, and questions of law should go to a healthcare attorney.",
      },
      {
        q: "Do you work with practices outside Scottsdale and Phoenix?",
        a: "Yes. Most oversight, coaching, and good faith exams are provided virtually, so Mary supports practices throughout Arizona. She is also licensed in Kansas, Nebraska, Nevada, New Mexico, New York, and Utah; contact her to discuss arrangements in those states.",
      },
      {
        q: "How quickly can we get started?",
        a: "After a discovery call, you receive a medical director agreement to review. Once signed, onboarding begins with your protocols, forms, and account setup. Timing depends on the services you offer and what you already have in place.",
      },
      {
        q: "Are you also a medical director for other businesses?",
        a: "Yes. Mary serves as medical director for practices in Arizona, including her own, Skindale Medspa in Scottsdale. Patient care at Skindale is entirely separate from the professional services offered through Aesthetic Medical Consulting.",
      },
    ],
  },
  {
    title: "Good faith exams",
    id: "good-faith-exams",
    items: [
      {
        q: "What is a good faith exam?",
        a: "A good faith exam is a clinical evaluation by a qualified provider before treatment. It covers the patient's history, medications, allergies, and contraindications, and documents whether the patient is an appropriate candidate for the planned treatment.",
      },
      {
        q: "Does every treatment need one?",
        a: "It depends on the treatment, the setting, and Arizona requirements, which can change. Mary will help you understand what applies to your services; for a definitive answer, consult the relevant Arizona Board rules or a healthcare attorney.",
      },
      {
        q: "How are exams scheduled?",
        a: "Most exams are done by telehealth, scheduled around your treatment calendar. In-person exams are available in Scottsdale and the Phoenix area.",
      },
      {
        q: "Can I use you only for good faith exams?",
        a: "Good faith exams are included in the Medical Spa and Registered Nurse plans. Standalone arrangements may be available; contact Mary to discuss.",
      },
    ],
  },
  {
    title: "Training and mentorship",
    id: "training",
    items: [
      {
        q: "Who can attend the Botox and dermal filler course?",
        a: "The course is designed for licensed medical professionals who want to begin offering neurotoxin and dermal filler treatments. Please confirm that your license and state rules allow you to perform these procedures; the course is educational and does not itself authorize you to inject.",
      },
      {
        q: "Is the course accredited?",
        a: "No. It is a non-accredited course intended for educational and skill-building purposes. You receive a certificate of completion, which is not a state license or board certification.",
      },
      {
        q: "What is the Observation Day?",
        a: "A four-hour session observing live neurotoxin and dermal filler treatments in a working Scottsdale med spa. It is observation only, with no hands-on injecting, and is a good way to see what the work is like before committing to training.",
      },
    ],
  },
  {
    title: "Getting started",
    id: "getting-started",
    items: [
      {
        q: "What happens on a discovery call?",
        a: "You and Mary talk through the services you offer or plan to offer, what oversight and support you're looking for, and whether working together makes sense. It is complimentary and there is no obligation.",
      },
      {
        q: "Are you accepting new patients?",
        a: "This site is for professionals. If you are looking for aesthetic treatments as a patient, please visit Skindale Medspa in Scottsdale, where Mary sees patients.",
      },
      {
        q: "Can I send patient records through the website?",
        a: "No. Please do not submit patient names, photographs, medical records, or any protected health information through this website. Clinical documents are exchanged through secure channels once you are a client.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[1].items[0],
  faqGroups[3].items[0],
];

export const testimonials = [
  {
    quote:
      "I've had a few medical directors at this point, and I can tell you that when you find a good one, your life as a business owner is better. Mary is here whenever we need her for anything and is a great resource of knowledge. We are so grateful for her guidance at our spa.",
    name: "Nicolle",
    role: "Owner, Desert Rain Skin",
    location: "Scottsdale, Arizona",
  },
];

/**
 * Blog posts currently published on the Wix site. Full text has not been
 * migrated; links point to the live posts until content is moved over.
 */
export const blogPosts = [
  {
    title: "How to Get Your First Aesthetic Injector Job When Everyone Wants Experience",
    date: "2026-08-21",
    readTime: "6 min read",
    url: "https://www.aestheticmedicalconsulting.com/post/how-to-get-your-first-aesthetic-injector-job-when-everyone-wants-experience",
  },
  {
    title: "Searching for a Medical Director?",
    date: "2025-01-07",
    readTime: "3 min read",
    url: "https://www.aestheticmedicalconsulting.com/post/searching-for-a-medical-director",
  },
  {
    title: "Dedicated to the Nurse Who Wants to Become a Nurse Injector",
    date: "2024-02-13",
    readTime: "4 min read",
    url: "https://www.aestheticmedicalconsulting.com/post/dedicated-to-the-nurse-who-wants-to-become-a-nurse-injector",
  },
];
