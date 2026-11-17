import type { Metadata } from "next";
import { site } from "@/config/site";

interface PageMeta {
  /** SEO title. Inner pages get the layout template ("%s · IMATEC") unless `absolute` is set. */
  title: string;
  /** Use `title` verbatim (no template) — for titles that already carry the brand. */
  absolute?: boolean;
  description: string;
  /** Route path beginning with "/" (canonical). */
  path: string;
  /** /public path to a page-specific OG image. Defaults to the branded 1200×630 social share. */
  ogImage?: { src: string; width: number; height: number; alt: string };
  /** Optional social-preview title (og/twitter) when it should differ from the SEO <title>. */
  ogTitle?: string;
}

const DEFAULT_OG = { src: "/og/imatec-social.jpg", width: 1200, height: 630 };

/** Build per-page metadata with canonical + Open Graph + Twitter, consistently. */
export function buildMetadata({ title, absolute, description, path, ogImage, ogTitle }: PageMeta): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const socialTitle = ogTitle ?? (absolute || title.includes(site.name) ? title : `${title} · ${site.name}`);
  const image = ogImage ?? { ...DEFAULT_OG, alt: socialTitle };
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_ZA",
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.src],
    },
  };
}
