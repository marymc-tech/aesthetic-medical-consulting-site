import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "cream";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${tone === "cream" ? "bg-cream-100" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-[34px] font-medium leading-[1.1] text-charcoal-900 md:text-[42px]">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-[17px] leading-relaxed text-taupe-600">{intro}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "bg-charcoal-900 text-cream-50 hover:bg-charcoal-700"
      : "border border-charcoal-900/25 text-charcoal-900 hover:border-charcoal-900";
  const base = `inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold transition-colors ${cls}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  cta?: boolean;
}) {
  return (
    <section className="border-b border-line bg-gradient-to-br from-cream-100 via-cream-50 to-blush-200/40">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-[38px] font-medium leading-[1.05] text-charcoal-900 md:text-[54px]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-taupe-600">{intro}</p>
        {cta ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Schedule a Discovery Call</ButtonLink>
            <a
              href={site.phoneHref}
              className="inline-flex items-center rounded-full px-2 py-3 text-[14px] font-semibold text-charcoal-900 underline-offset-4 hover:underline"
            >
              Call or text {site.phone}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Start with a conversation.",
  text = "A complimentary discovery call, by video or in person in Scottsdale. We'll talk through your goals, the oversight you need, and whether we're a good fit.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-charcoal-900 text-cream-50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-[36px] font-medium leading-[1.05] md:text-[48px]">{title}</h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-cream-50/75">{text}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blush-200 px-7 py-3.5 text-[14px] font-semibold text-charcoal-900 transition-colors hover:bg-blush-300"
            >
              Schedule a Discovery Call
            </Link>
            <a href={site.phoneHref} className="text-sm text-cream-50/75 hover:text-cream-50">
              or call/text {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-[3px] h-4 w-4 shrink-0 text-rose-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-line py-4">
      <summary className="flex items-start justify-between gap-6 text-[17px] font-semibold text-charcoal-900">
        <span>{q}</span>
        <span
          aria-hidden="true"
          className="faq-icon mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-rose-700"
        >
          +
        </span>
      </summary>
      <p className="mt-3 max-w-3xl text-[15.5px] leading-relaxed text-taupe-600">{a}</p>
    </details>
  );
}

export function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-blush-200 via-cream-200 to-cream-100 ${className}`}
    >
      <div className="absolute inset-0 flex items-end p-4">
        <span className="rounded-full bg-cream-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-taupe-600">
          Photo placeholder · {label}
        </span>
      </div>
    </div>
  );
}
