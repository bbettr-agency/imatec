import type { Metadata } from "next";
import { site } from "@/config/site";

interface PageMeta {
  title: string;
  description: string;
  /** Route path beginning with "/" (canonical). */
  path: string;
  /** Absolute or /public path to an OG image. Defaults to the branded social share. */
  ogImage?: string;
  /** Optional social-preview title (og/twitter) when it should differ from the SEO <title>. */
  ogTitle?: string;
}

/** Build per-page metadata with canonical + Open Graph + Twitter, consistently. */
export function buildMetadata({ title, description, path, ogImage, ogTitle }: PageMeta): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const image = ogImage ?? "/og/imatec-social.jpg";
  const socialTitle = ogTitle ?? title;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_ZA",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name}: ${socialTitle}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
