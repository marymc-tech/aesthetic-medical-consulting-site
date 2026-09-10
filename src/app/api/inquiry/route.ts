import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateInquiry } from "@/lib/inquiry";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Discovery-call inquiry handler.
 * - Validates and sanitizes input; rejects honeypot submissions.
 * - Sends an email via Resend when RESEND_API_KEY is set.
 * - Stores nothing. No database, no PHI expected or accepted.
 *
 * Env:
 *   RESEND_API_KEY   Resend API key (production).
 *   INQUIRY_TO       Destination inbox (defaults to site.email).
 *   INQUIRY_FROM     Verified sender, e.g. "Website <inquiries@aestheticmedconsulting.com>".
 *   INQUIRY_DRY_RUN  "true" to accept submissions without sending (preview testing).
 */

// Very small in-memory rate limit per instance (best-effort on serverless).
const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.t > 10 * 60 * 1000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  rec.n += 1;
  return rec.n > 5;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const v = validateInquiry(body);
  if (!v.ok) {
    // Honeypot hits get a quiet success so bots don't learn anything.
    if (v.errors.website) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, errors: v.errors }, { status: 422 });
  }
  const d = v.data;

  const to = process.env.INQUIRY_TO ?? site.email;
  const from = process.env.INQUIRY_FROM ?? "Aesthetic Med Consulting <onboarding@resend.dev>";
  const subject = `Discovery call request: ${d.name}${d.business ? ` (${d.business})` : ""}`;

  const text = [
    `Name: ${d.name}`,
    `Business: ${d.business || "—"}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    `State: ${d.state}`,
    `Title / license: ${d.title}`,
    `Services of interest: ${d.services.join(", ")}`,
    "",
    "Message:",
    d.message || "—",
  ].join("\n");

  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#2e2a28">
    <h2 style="font-weight:600">Discovery call request</h2>
    <table cellpadding="4">
      <tr><td><b>Name</b></td><td>${esc(d.name)}</td></tr>
      <tr><td><b>Business</b></td><td>${esc(d.business) || "—"}</td></tr>
      <tr><td><b>Email</b></td><td><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></td></tr>
      <tr><td><b>Phone</b></td><td>${esc(d.phone)}</td></tr>
      <tr><td><b>State</b></td><td>${esc(d.state)}</td></tr>
      <tr><td><b>Title / license</b></td><td>${esc(d.title)}</td></tr>
      <tr><td><b>Interested in</b></td><td>${d.services.map(esc).join(", ")}</td></tr>
    </table>
    <p><b>Message</b><br>${esc(d.message).replace(/\n/g, "<br>") || "—"}</p>
  </div>`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.INQUIRY_DRY_RUN === "true" || process.env.NODE_ENV !== "production") {
      console.warn("[inquiry] RESEND_API_KEY not set; dry run. Submission:\n" + text);
      return NextResponse.json({ ok: true, delivered: false });
    }
    console.error("[inquiry] RESEND_API_KEY not set in production.");
    return NextResponse.json(
      { ok: false, error: "The form is not configured yet. Please call or email instead." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({ from, to, replyTo: d.email, subject, text, html });
    if (error) throw error;
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[inquiry] send failed", e);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please call or email instead." },
      { status: 502 },
    );
  }
}
