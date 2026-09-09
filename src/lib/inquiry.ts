/** Shared validation for the discovery-call inquiry form (client + server). */

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming","Washington, D.C.","Other",
] as const;

export const SERVICES_OF_INTEREST = [
  "Medical director services",
  "Good faith exams",
  "Practice startup guidance",
  "Protocols and consent forms",
  "Laser / IPL oversight",
  "Injector mentorship",
  "Nurse injector observation",
  "Botox and dermal filler training",
  "Ongoing clinical and business support",
] as const;

export type InquiryInput = {
  name: string;
  business: string;
  email: string;
  phone: string;
  state: string;
  title: string;
  services: string[];
  message: string;
  website?: string; // honeypot; must be empty
};

const MAX = { name: 120, business: 160, email: 200, phone: 40, title: 120, message: 2000 };

export function validateInquiry(raw: unknown): { ok: true; data: InquiryInput } | { ok: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const r = (raw ?? {}) as Record<string, unknown>;
  const str = (k: string) => (typeof r[k] === "string" ? (r[k] as string).trim() : "");

  const data: InquiryInput = {
    name: str("name"),
    business: str("business"),
    email: str("email"),
    phone: str("phone"),
    state: str("state"),
    title: str("title"),
    services: Array.isArray(r.services) ? (r.services as unknown[]).filter((s): s is string => typeof s === "string") : [],
    message: str("message"),
    website: str("website"),
  };

  if (!data.name) errors.name = "Please enter your name.";
  if (data.name.length > MAX.name) errors.name = "Name is too long.";
  if (data.business.length > MAX.business) errors.business = "Business name is too long.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.email.length > MAX.email) errors.email = "Email is too long.";
  if (!data.phone || data.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number with area code.";
  if (data.phone.length > MAX.phone) errors.phone = "Phone number is too long.";
  if (!data.state || !(US_STATES as readonly string[]).includes(data.state)) errors.state = "Please choose your state.";
  if (!data.title) errors.title = "Please enter your professional title or license.";
  if (data.title.length > MAX.title) errors.title = "Title is too long.";
  if (data.services.length === 0) errors.services = "Please choose at least one service of interest.";
  if (data.services.some((s) => !(SERVICES_OF_INTEREST as readonly string[]).includes(s))) errors.services = "Invalid service selection.";
  if (data.message.length > MAX.message) errors.message = "Please keep your message under 2,000 characters.";
  if (data.website) errors.website = "Spam check failed.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
