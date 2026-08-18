import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/fuser-roller-recoating`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services
      .filter((s) => s.slug !== "fuser-roller-recoating")
      .map((s) => ({ url: `${site.url}/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
  return entries;
}
