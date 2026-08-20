import type { Metadata } from "next";
import { site } from "@/config/site";

interface PageMeta {
  title: string;
  description: string;
  /** Route path beginning with "/" (canonical). */
  path: string;
  /** Absolute or /public path to an OG image. Defaults to the brand OG. */
  ogImage?: string;
}

/** Build per-page metadata with canonical + Open Graph + Twitter, consistently. */
export function buildMetadata({ title, description, path, ogImage }: PageMeta): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const image = ogImage ?? "/og/imatec-og.jpg";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_ZA",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name}: ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
