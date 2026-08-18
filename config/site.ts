/**
 * IMATEC — canonical site config (single source of truth).
 *
 * TRUTH GATE: values marked `PENDING` are client-stated / unverified and must be
 * confirmed before final content lock. They are centralised here so one edit
 * updates the whole site (footer, schema, contact page, WhatsApp links).
 * See docs/PHASE-1B-SITEMAP-WIREFRAME-HERO.md → NAP Confirmation Checklist.
 */

export const site = {
  name: "IMATEC",
  /** PENDING: confirm exact legal name + hyphenation. */
  legalName: "IMATEC – Imaging Technology",
  /** Client's own tagline (company profile). */
  tagline: "Engineering better print solutions for Africa",
  descriptionShort:
    "Specialist fuser & hot roller recoating for Africa's office-automation industry — plus workshop-tested printer & copier parts, consumables and service equipment.",

  url: "https://www.imatec.co.za",

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
