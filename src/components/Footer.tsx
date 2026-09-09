import Link from "next/link";
import { disclaimer, nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-charcoal-900">
              Aesthetic Medical Consulting
            </p>
            <p className="mt-1 text-sm text-taupe-600">{site.owner}</p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-charcoal-700">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              <a href={site.phoneHref} className="hover:text-rose-700">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-rose-700">
                {site.email}
              </a>
            </address>
            <p className="mt-5 max-w-md text-sm text-taupe-600">
              Serving med spas and aesthetic professionals across Scottsdale, Phoenix, and
              Arizona. Also licensed in Kansas, Nebraska, Nevada, New Mexico, New York, and
              Utah.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-charcoal-700 hover:text-rose-700">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-charcoal-700 hover:text-rose-700">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={site.clientLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-700 hover:text-rose-700"
                >
                  Client Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-charcoal-700 hover:text-rose-700">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-charcoal-700 hover:text-rose-700">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-charcoal-700 hover:text-rose-700">
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-8 rounded-lg border border-line bg-cream-50 p-4 text-sm">
              <p className="font-semibold text-charcoal-900">Looking for treatment as a patient?</p>
              <p className="mt-1 text-taupe-600">
                Mary sees patients at{" "}
                <a
                  href={site.skindaleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-700 underline-offset-2 hover:underline"
                >
                  Skindale Medspa
                </a>{" "}
                in Scottsdale. Patient services are separate from the professional consulting
                offered here.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-taupe-600">{disclaimer}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-taupe-600">
            <span>© 2024–{new Date().getFullYear()} Mary McMillin. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-rose-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-rose-700">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
