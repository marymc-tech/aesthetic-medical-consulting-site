import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, personJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted (no third-party font requests; keeps CSP strict).
const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = localFont({
  src: [
    { path: "../fonts/mulish-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/mulish-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/mulish-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/mulish-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/mulish-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Medical Director for Arizona Med Spas`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-charcoal-900 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={personJsonLd()} />
      </body>
    </html>
  );
}
