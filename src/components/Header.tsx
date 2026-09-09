"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex flex-col leading-none" aria-label={`${site.name} home`}>
          <span className="font-display text-[22px] font-semibold tracking-tight text-charcoal-900">
            Aesthetic Medical Consulting
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-700">
            Mary McMillin, MSN, NP-C, FNP-BC
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {nav
            .filter((n) => n.href !== "/")
            .map((n) => {
              const active = pathname === n.href || pathname.startsWith(`${n.href}/`);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[14px] font-medium transition-colors hover:text-rose-700 ${
                    active ? "text-rose-700" : "text-charcoal-700"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.clientLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-charcoal-900/25 px-4 py-2 text-[13px] font-semibold text-charcoal-900 transition-colors hover:border-charcoal-900"
          >
            Client Login
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-charcoal-900 px-5 py-2.5 text-[13px] font-semibold text-cream-50 transition-colors hover:bg-charcoal-700"
          >
            Schedule a Discovery Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-charcoal-900 transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-charcoal-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-[1.5px] w-full bg-charcoal-900 transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-73px)] overflow-y-auto border-t border-line bg-cream-50 xl:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3.5 text-[16px] font-medium text-charcoal-900"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-charcoal-900 px-5 py-3 text-center text-[14px] font-semibold text-cream-50"
            >
              Schedule a Discovery Call
            </Link>
            <a
              href={site.clientLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal-900/25 px-5 py-3 text-center text-[14px] font-semibold text-charcoal-900"
            >
              Client Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
