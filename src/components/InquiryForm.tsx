"use client";

import { useState, type FormEvent } from "react";
import { SERVICES_OF_INTEREST, US_STATES, validateInquiry } from "@/lib/inquiry";
import { phiNotice, site } from "@/lib/site";

type Status = "idle" | "submitting" | "sent" | "error";

const field =
  "w-full rounded-lg border border-line bg-cream-50 px-4 py-3 text-[15px] text-charcoal-900 placeholder:text-taupe-500 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/30";
const label = "block text-[13px] font-semibold text-charcoal-900";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      business: fd.get("business"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      state: fd.get("state"),
      title: fd.get("title"),
      services: fd.getAll("services"),
      message: fd.get("message"),
      website: fd.get("website"),
    };

    const v = validateInquiry(payload);
    if (!v.ok) {
      setErrors(v.errors);
      const first = Object.keys(v.errors)[0];
      (form.querySelector(`[name="${first}"]`) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setServerError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        if (json.errors) setErrors(json.errors);
        setServerError(json.error ?? "Something went wrong. Please call or email instead.");
      }
    } catch {
      setStatus("error");
      setServerError("We couldn't reach the server. Please call or email instead.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-cream-100 p-8">
        <h3 className="text-[26px] font-semibold text-charcoal-900">Thanks for reaching out.</h3>
        <p className="mt-3 text-[15.5px] text-taupe-600">
          Mary will be in touch within one business day. If it&apos;s urgent, text or call{" "}
          <a href={site.phoneHref} className="font-semibold text-charcoal-900">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-describedby="phi-notice">
      <div
        id="phi-notice"
        className="rounded-lg border border-rose-500/40 bg-blush-200/40 px-4 py-3 text-[14px] leading-relaxed text-charcoal-900"
      >
        <strong>Please note:</strong> {phiNotice}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name <span aria-hidden="true">*</span></label>
          <input id="name" name="name" autoComplete="name" required className={`${field} mt-1.5`} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
          {errors.name && <p id="err-name" className="mt-1 text-[13px] text-[#a9564d]">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="business" className={label}>Business name</label>
          <input id="business" name="business" autoComplete="organization" className={`${field} mt-1.5`} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required className={`${field} mt-1.5`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} />
          {errors.email && <p id="err-email" className="mt-1 text-[13px] text-[#a9564d]">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone <span aria-hidden="true">*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={`${field} mt-1.5`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} />
          {errors.phone && <p id="err-phone" className="mt-1 text-[13px] text-[#a9564d]">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="state" className={label}>State <span aria-hidden="true">*</span></label>
          <select id="state" name="state" required defaultValue="" className={`${field} mt-1.5`} aria-invalid={!!errors.state} aria-describedby={errors.state ? "err-state" : undefined}>
            <option value="" disabled>Choose a state</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && <p id="err-state" className="mt-1 text-[13px] text-[#a9564d]">{errors.state}</p>}
        </div>
        <div>
          <label htmlFor="title" className={label}>Professional title or license <span aria-hidden="true">*</span></label>
          <input id="title" name="title" placeholder="e.g. RN, NP, laser technician, esthetician, owner" required className={`${field} mt-1.5`} aria-invalid={!!errors.title} aria-describedby={errors.title ? "err-title" : undefined} />
          {errors.title && <p id="err-title" className="mt-1 text-[13px] text-[#a9564d]">{errors.title}</p>}
        </div>
      </div>

      <fieldset>
        <legend className={label}>Services of interest <span aria-hidden="true">*</span></legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {SERVICES_OF_INTEREST.map((s, i) => (
            <label key={s} htmlFor={`svc-${i}`} className="flex cursor-pointer items-start gap-3 rounded-lg border border-line bg-cream-50 px-3 py-2.5 text-[14.5px] text-charcoal-700 has-[:checked]:border-rose-500 has-[:checked]:bg-blush-200/30">
              <input id={`svc-${i}`} type="checkbox" name="services" value={s} className="mt-1 accent-[#9a6a60]" />
              <span>{s}</span>
            </label>
          ))}
        </div>
        {errors.services && <p className="mt-1 text-[13px] text-[#a9564d]">{errors.services}</p>}
      </fieldset>

      <div>
        <label htmlFor="message" className={label}>Brief message</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} className={`${field} mt-1.5`} placeholder="Tell Mary about your practice and what you're looking for. No patient details, please." />
        {errors.message && <p className="mt-1 text-[13px] text-[#a9564d]">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError && (
        <p role="alert" className="rounded-lg border border-[#a9564d]/40 bg-[#a9564d]/10 px-4 py-3 text-[14px] text-charcoal-900">
          {serverError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-charcoal-900 px-7 py-3.5 text-[14px] font-semibold text-cream-50 transition-colors hover:bg-charcoal-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request a Discovery Call"}
        </button>
        <p className="text-[13px] text-taupe-600">Mary replies within one business day.</p>
      </div>
    </form>
  );
}
