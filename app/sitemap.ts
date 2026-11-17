import type { MetadataRoute } from "next";
import { site, pageUpdated } from "@/config/site";

/**
 * lastmod = the real date each route's content last changed (config/site.ts →
 * pageUpdated), NOT the build time, so crawlers can trust it. changeFrequency /
 * priority are omitted: Google ignores them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(pageUpdated).map(([path, date]) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: date,
  }));
}
