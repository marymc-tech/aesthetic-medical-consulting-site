import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "monthly" },
    { path: "/medical-director-services", priority: 0.9, freq: "monthly" },
    { path: "/good-faith-exams", priority: 0.9, freq: "monthly" },
    { path: "/training-and-mentorship", priority: 0.8, freq: "monthly" },
    { path: "/resources", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/faqs", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/blog", priority: 0.5, freq: "weekly" },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
