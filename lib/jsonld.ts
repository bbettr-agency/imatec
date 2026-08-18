/**
 * Structured data (JSON-LD).
 *
 * TRUTH GATE: no AggregateRating / Review schema — IMATEC has no genuine
 * consented reviews yet, and fabricating rating data is prohibited. Opening
 * hours are omitted until confirmed. NAP flows from config/site.ts.
 */

import { site } from "@/config/site";
import { services, serviceBySlug } from "@/config/services";

const streetAddress = [site.address.unit, site.address.street]
  .filter(Boolean)
  .join(", ");

/** Organization + LocalBusiness (real NAP, service area, sameAs). */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.descriptionShort,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    image: `${site.url}/images/recoated-roller-bench.jpg`,
    logo: `${site.url}/imatec-logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: { "@type": "Country", name: site.serviceArea },
    knowsAbout: [
      "Fuser roller recoating",
      "Hot roller recoating",
      "Printer and copier parts",
      "Office automation",
    ],
    sameAs: [site.social.facebook, site.social.instagram],
  };
}

/** Service schema for a service page. */
export function serviceJsonLd(slug: string) {
  const svc = serviceBySlug(slug);
  if (!svc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    serviceType: svc.name,
    description: svc.summary,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Country", name: site.serviceArea },
    url: `${site.url}/${svc.slug}`,
  };
}

/** BreadcrumbList for an inner page. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** FAQPage — only from genuine Q&A (eligible pages). */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const allServiceSlugs = services.map((s) => s.slug);
