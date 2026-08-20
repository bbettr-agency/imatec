/**
 * IMATEC — canonical site config (single source of truth).
 *
 * TRUTH GATE: values marked `PENDING` are client-stated / unverified and must be
 * confirmed before final content lock. They are centralised here so one edit
 * updates the whole site (footer, schema, contact page, WhatsApp links).
 * See docs/PHASE-1B-SITEMAP-WIREFRAME-HERO.md → NAP Confirmation Checklist.
 */

/**
 * Canonical origin for the whole site (drives metadataBase, canonical URLs,
 * Open Graph/Twitter image resolution, sitemap.xml and robots.txt).
 *
 * It is env-driven so the signals always resolve to a live URL:
 *  - Once the production domain is connected, set `NEXT_PUBLIC_SITE_URL`
 *    (e.g. https://www.imatec.co.za) in the Vercel project and redeploy.
 *  - Until then it defaults to the live Vercel URL, so canonical/OG/sitemap/
 *    robots are self-consistent and do NOT point at an unresolved domain.
 * NEXT_PUBLIC_ is inlined at build for both server and client → no mismatch.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://imatec.vercel.app").replace(/\/+$/, "");

export const site = {
  name: "IMATEC",
  /** PENDING: confirm exact legal name + hyphenation. */
  legalName: "IMATEC – Imaging Technology",
  /** Client's own tagline (company profile). */
  tagline: "Engineering better print solutions for Africa",
  descriptionShort:
    "Specialist fuser & hot roller recoating for Africa's office-automation industry — plus workshop-tested printer & copier parts, consumables and service equipment.",

  url: SITE_URL,

  // --- Contact (PENDING canonical NAP — see checklist) ---
  contact: {
    /** PENDING: canonical phone — 082 808 5623 (mobile) vs 012 653 0428 (landline). */
    phoneDisplay: "082 808 5623",
    phoneE164: "+27828085623",
    /** WhatsApp digits for wa.me links. */
    whatsapp: "27828085623",
    /** PENDING: canonical public email — dorette@ / sales@ / info@. */
    email: "dorette@imatec.co.za",
  },

  // --- Address (PENDING canonical — unit / Ext number / postcode) ---
  address: {
    street: "187 Edison Crescent",
    unit: "", // PENDING: "Unit 7, Eldor Park"?
    suburb: "Hennopspark", // PENDING: "Hennopspark Ext 15"?
    city: "Centurion",
    province: "Gauteng",
    postalCode: "0157", // PENDING confirm
    country: "South Africa",
    countryCode: "ZA",
  },

  /** Positioning of place — based local, serving national. */
  serviceArea: "South Africa",
  based: "Centurion, Gauteng",

  /** PENDING: confirm founding year to substantiate "30+ years". */
  yearsExperience: "30+",

  /** Brands whose parts IMATEC supplies (company profile — verified list). */
  brands: [
    "Ricoh",
    "Canon",
    "Konica Minolta",
    "Kyocera",
    "Xerox",
    "HP",
    "Sharp",
    "Toshiba",
    "Lexmark",
  ],

  social: {
    facebook: "https://www.facebook.com/fuserrollers/",
    instagram: "https://www.instagram.com/imatec.co.za",
  },

  /** PENDING: office hours not confirmed — omit from schema until known. */
  hours: null as null | { days: string; open: string; close: string }[],
} as const;

export type Site = typeof site;

/**
 * Brand logos for the coverage rail (compatibility / product-support context only —
 * not partnership or endorsement). Real transparent artwork in /public/images/brands/.
 * `w`/`h` are intrinsic px (prevent CLS); `scale` optically balances differing aspect
 * ratios against a shared rail height (square/compact marks scale down, thin wordmarks up).
 * All nine supported brands are represented.
 */
export const brandLogos = [
  { slug: "ricoh", name: "Ricoh", w: 370, h: 136, scale: 1.0 },
  { slug: "canon", name: "Canon", w: 300, h: 72, scale: 0.98 },
  { slug: "konica-minolta", name: "Konica Minolta", w: 366, h: 218, scale: 0.9 },
  { slug: "kyocera", name: "Kyocera", w: 520, h: 113, scale: 1.0 },
  { slug: "xerox", name: "Xerox", w: 520, h: 115, scale: 1.0 },
  { slug: "hp", name: "HP", w: 520, h: 520, scale: 0.78 },
  { slug: "sharp", name: "Sharp", w: 520, h: 84, scale: 0.9 },
  { slug: "toshiba", name: "Toshiba", w: 390, h: 75, scale: 0.96 },
  { slug: "lexmark", name: "Lexmark", w: 379, h: 90, scale: 1.02 },
] as const;
