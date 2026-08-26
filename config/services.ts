/**
 * The four IMATEC "worlds" — deliberately DIFFERENT commercial relationships,
 * not four identical service cards (approved blueprint §B/03).
 *
 * TRUTH GATE: no "Africa's only" and no Mr McKenic "authorised agent" wording —
 * both are on HOLD pending evidence. Recoating specifics (process/turnaround/
 * warranty) are structured but marked PENDING where copy needs client facts.
 */

export type Relationship =
  | "Specialist service"
  | "IMATEC product"
  | "Trade supply"
  | "Supplied brand";

export interface ServiceWorld {
  slug: string;
  nav: string;
  /** Short menu/label name. */
  name: string;
  relationship: Relationship;
  /** One-line proposition (homepage tile + page lede). */
  summary: string;
  /** Context-aware primary CTA label. */
  ctaLabel: string;
  /** Pre-filled WhatsApp message for this intent. */
  waMessage: string;
  image: string;
  imageAlt: string;
  /** Homepage prominence: 1 = dominant (recoating), 2 = medium, 3 = supporting. */
  weight: 1 | 2 | 3;
}

export const services: ServiceWorld[] = [
  {
    slug: "fuser-roller-recoating",
    nav: "Recoating",
    name: "Fuser / Hot Roller Coating",
    relationship: "Specialist service",
    summary:
      "Recoat worn fuser and hot rollers by renewing the worn surface, a cost-effective alternative to replacing the component.",
    ctaLabel: "Enquire About Recoating",
    waMessage:
      "Hi IMATEC, I'd like to enquire about fuser / hot roller coating.",
    image: "/images/recoated-roller-bench.jpg",
    imageAlt:
      "A recoated black fuser roller mounted in a lathe on the IMATEC workshop bench",
    weight: 1,
  },
  {
    slug: "printer-copier-parts",
    nav: "Parts & Toner",
    name: "Printer Parts, Toner & Consumables",
    relationship: "Trade supply",
    summary:
      "Workshop-tested printer and copier parts, toner and consumables for all brands, supplied to the trade.",
    ctaLabel: "Request a Part",
    waMessage:
      "Hi IMATEC, I'm looking for a printer/copier part. Brand + model: ",
    image: "/images/printer-parts.jpg",
    imageAlt:
      "A range of printer and copier parts (rollers, drums, fuser units and gears) laid out on a workshop surface",
    weight: 2,
  },
  {
    slug: "vacu-tec",
    nav: "Vacu-Tec",
    name: "Vacu-Tec Service Vacuums",
    relationship: "IMATEC product",
    summary:
      "Our Vacu-Tec service vacuum cleaners, designed specifically for copier and printer technicians.",
    ctaLabel: "Enquire About Vacu-Tec",
    waMessage: "Hi IMATEC, I'd like to enquire about a Vacu-Tec service vacuum.",
    image: "/images/vacu-tec.jpg",
    imageAlt: "The IMATEC Vacu-Tec service vacuum cleaner with hose and collection tray",
    weight: 2,
  },
  {
    slug: "mr-mckenic",
    nav: "Mr McKenic",
    name: "Mr McKenic Professional Products",
    relationship: "Supplied brand",
    summary:
      "Genuine Mr McKenic professional cleaning and maintenance products for the office-automation trade.",
    ctaLabel: "Enquire About Products",
    waMessage:
      "Hi IMATEC, I'd like to enquire about Mr McKenic products.",
    image: "/images/mr-mckenic-range.jpg",
    imageAlt:
      "The Mr McKenic professional maintenance product range on a retail display stand",
    weight: 3,
  },
];

export const serviceBySlug = (slug: string): ServiceWorld | undefined =>
  services.find((s) => s.slug === slug);

/** Primary navigation (four worlds + About + Contact). */
export const navItems = [
  { label: "Recoating", href: "/fuser-roller-recoating" },
  { label: "Parts & Toner", href: "/printer-copier-parts" },
  { label: "Vacu-Tec", href: "/vacu-tec" },
  { label: "Mr McKenic", href: "/mr-mckenic" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
