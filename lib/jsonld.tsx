/**
 * Structured data (JSON-LD) — one connected entity graph keyed by @id:
 *   #business (LocalBusiness) ← #website (WebSite) ← per-page WebPage
 *   #business → #catalog (OfferCatalog) → Products (Vacu-Tec / Mr McKenic / parts)
 *
 * TRUTH GATE: no AggregateRating / Review schema — IMATEC has no genuine
 * consented reviews yet, and fabricating rating data is prohibited. Opening
 * hours, geo coordinates and founding date are omitted until confirmed. NAP
 * flows from config/site.ts. Mr McKenic is a third-party brand: IMATEC is
 * modelled as the seller only (no ownership / "authorised agent" implied).
 */

import { site, pageUpdated } from "@/config/site";
import { services, serviceBySlug } from "@/config/services";

const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;
const CATALOG_ID = `${site.url}/#catalog`;
const VACUTEC_BRAND_ID = `${site.url}/vacu-tec#brand`;

const a = site.address;
const streetAddress = [a.unit, a.street, a.suburb].filter(Boolean).join(", ");
const fullAddress = `${[a.unit, a.street, a.suburb, a.city, a.province, a.postalCode].filter(Boolean).join(", ")}, ${a.country}`;
export const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}`;

const abs = (path: string) => (path === "/" ? site.url : `${site.url}${path}`);
const sameAs = [
  site.social.facebook,
  site.social.instagram,
  ...Object.values(site.profiles),
].filter(Boolean);

/** LocalBusiness (Organization) — real NAP, service area, catalogue, sameAs. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: site.legalName,
    alternateName: [site.name, "IMATEC South Africa", "IMATEC Centurion"],
    url: site.url,
    description: site.descriptionShort,
    slogan: site.tagline,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    image: `${site.url}/images/recoated-roller-bench.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/imatec-logo.png`,
      contentUrl: `${site.url}/imatec-logo.png`,
      width: 512,
      height: 217,
      caption: "IMATEC logo",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: a.city,
      addressRegion: a.province,
      postalCode: a.postalCode,
      addressCountry: a.countryCode,
    },
    hasMap: mapUrl,
    areaServed: { "@type": "Country", name: site.serviceArea },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.contact.phoneE164,
        email: site.contact.email,
        areaServed: site.address.countryCode,
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: `https://wa.me/${site.contact.whatsapp}`,
        areaServed: site.address.countryCode,
        availableLanguage: ["en"],
      },
    ],
    knowsAbout: [
      "Fuser roller recoating",
      "Hot roller recoating",
      "Pressure roller recoating",
      "Printer and copier parts",
      "Toner and consumables",
      "Office automation",
      ...site.brands.map((b) => `${b} printers and copiers`),
    ],
    makesOffer: services
      .filter((s) => s.slug === "fuser-roller-recoating")
      .map((s) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${site.url}/${s.slug}#service` },
      })),
    hasOfferCatalog: { "@id": CATALOG_ID },
    sameAs,
  };
}

/** WebSite node — the publisher link from every page to the business entity. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    alternateName: site.legalName,
    description: site.descriptionShort,
    inLanguage: "en-ZA",
    publisher: { "@id": BUSINESS_ID },
  };
}

/** Per-page WebPage node (AboutPage / ContactPage / WebPage) with real dateModified. */
export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
}) {
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-ZA",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    ...(pageUpdated[path] ? { dateModified: pageUpdated[path] } : {}),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
  };
}

const audience = {
  "@type": "BusinessAudience",
  audienceType: "Office-automation dealers, copier and printer technicians, service providers and businesses running their own equipment",
};

/** Service schema for the recoating service (the one true *service* world). */
export function serviceJsonLd(slug: string) {
  const svc = serviceBySlug(slug);
  if (!svc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/${svc.slug}#service`,
    name: svc.name,
    serviceType: slug === "fuser-roller-recoating" ? "Fuser and hot roller recoating" : svc.relationship,
    description: svc.summary,
    image: `${site.url}${svc.image}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: site.serviceArea },
    audience,
    ...(slug === "fuser-roller-recoating"
      ? {
          alternateName: ["Fuser roller recoating", "Hot roller recoating", "Heat roller recoating", "Fuser roller coating"],
          category: "Printer and copier component remanufacturing",
        }
      : {}),
    url: `${site.url}/${svc.slug}`,
  };
}

/** Vacu-Tec brand node (range supplied by IMATEC — no manufacturer claim). */
export function vacuTecBrandJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": VACUTEC_BRAND_ID,
    name: "Vacu-Tec",
    description: "Service vacuum cleaners designed for copier and printer technicians, supplied in South Africa by IMATEC.",
    url: `${site.url}/vacu-tec`,
    image: `${site.url}/images/vacu-tec.jpg`,
  };
}

/** OfferCatalog of what IMATEC sells (no prices on site → no Product rich results expected). */
export function offerCatalogJsonLd() {
  const seller = { "@id": BUSINESS_ID };
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": CATALOG_ID,
    name: "IMATEC parts, consumables and service equipment",
    itemListElement: [
      {
        "@type": "Offer",
        seller,
        areaServed: site.address.countryCode,
        itemOffered: {
          "@type": "Product",
          name: "Printer and copier parts, toner and consumables",
          description: `Workshop-tested parts for ${site.brands.join(", ")} and other brands: fuser units and rollers, hot and pressure rollers, drums, feed and pickup rollers, toner, gears and bushings.`,
          image: `${site.url}/images/printer-parts.jpg`,
          url: `${site.url}/printer-copier-parts`,
        },
      },
      {
        "@type": "Offer",
        seller,
        areaServed: site.address.countryCode,
        itemOffered: {
          "@type": "Product",
          name: "Vacu-Tec service vacuums",
          description: "Service vacuum cleaners designed for copier and printer technicians.",
          brand: { "@id": VACUTEC_BRAND_ID },
          image: `${site.url}/images/vacu-tec.jpg`,
          url: `${site.url}/vacu-tec`,
        },
      },
      {
        "@type": "Offer",
        seller,
        areaServed: site.address.countryCode,
        itemOffered: {
          "@type": "Product",
          name: "Mr McKenic professional cleaning and maintenance products",
          description: "Contact cleaner, contact cleaner & lubricant, silicone spray, 9-in-1 technology oil, lithium grease, 5-in-1 surface cleaner and fuser roller cleaner.",
          brand: { "@type": "Brand", name: "Mr McKenic" },
          image: `${site.url}/images/mr-mckenic-range.jpg`,
          url: `${site.url}/mr-mckenic`,
        },
      },
    ],
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
      item: abs(item.path),
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

/** Render helper: serialise one or more JSON-LD objects into <script> tags. */
export function JsonLd({ data }: { data: object | object[] | null }) {
  if (!data) return null;
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}

export const allServiceSlugs = services.map((s) => s.slug);
