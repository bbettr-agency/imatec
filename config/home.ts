/**
 * Homepage copy — config-driven (no hardcoded copy in components).
 *
 * TRUTH GATE applied throughout:
 *  - no "Africa's only", no Mr McKenic "authorised agent"
 *  - no invented prices, turnaround times, warranty terms or proprietary process detail
 *  - "30+ years" is client-stated (confirm founding year at content lock)
 *  - verified facts: 9-brand coverage, own-workshop testing, IMATEC-built Vacu-Tec
 */

import { site } from "./site";

export const home = {
  hero: {
    eyebrow: "Specialist fuser & hot roller recoating",
    h1: {
      lead: "Recoat your fuser roller —",
      accent: "before you replace it.",
    },
    sub: `For ${site.yearsExperience} years, IMATEC has kept Africa's copiers and printers running — recoating fuser and hot rollers back to working spec, and supplying workshop-tested parts, consumables and our own service equipment to dealers and technicians nationwide.`,
    primaryCta: {
      label: "Enquire About Recoating",
      waMessage: "Hi IMATEC, I'd like to enquire about fuser / hot roller recoating.",
    },
    secondaryCta: { label: "See how recoating works", href: "/fuser-roller-recoating#process" },
    reassurance: "Send us your roller · No-obligation quote · We reply on WhatsApp",
    // ≤3 hero proof items, all verified / client-stated. No fabricated ratings.
    trust: [
      { strong: `${site.yearsExperience} years`, rest: "in office automation" },
      { strong: "9 brands supported", rest: "Ricoh · Canon · Konica Minolta · Kyocera · Xerox · HP · Sharp · Toshiba · Lexmark" },
      { strong: "Workshop-tested", rest: "every part checked before we supply it" },
    ],
    // The authentic recoated-roller object, presented with a technical spec label.
    objectLabel: "FR · Recoated to spec",
    objectDims: ["Ø restored", "Surface renewed"],
  },

  worlds: {
    eyebrow: "One workshop, four capabilities",
    heading: "Everything the copier trade needs to keep running",
    lede: "Recoating is our specialist service. Around it, we supply the parts, build the equipment and stock the products the office-automation trade relies on — each a different relationship, handled the right way.",
  },

  wedge: {
    eyebrow: "Recoat vs replace",
    heading: "A worn roller doesn't always mean a new one",
    lede: "When a fuser or hot roller wears, the default is to buy a new part — often imported, with the cost and the wait that come with it. Recoating restores the roller you already have.",
    replace: {
      title: "Replace the part",
      points: [
        "Buy a new roller — frequently imported",
        "Import lead time before the machine runs again",
        "The old roller core is scrapped",
      ],
    },
    recoat: {
      title: "Recoat with IMATEC",
      points: [
        "Restore the roller to working spec",
        "Keep your existing OEM core",
        "A cost-effective alternative to replacement",
      ],
    },
    // Big decision words for the typographic composition.
    replaceWord: "Replace",
    recoatWord: "Recoat",
    // Honest: exact savings/turnaround depend on the roller — confirmed on enquiry.
    note: "Exact cost, saving and turnaround depend on the roller and machine — we'll quote yours on enquiry.",
    cta: { label: "Enquire About Recoating", waMessage: "Hi IMATEC, I'd like a recoating quote. My roller is from: " },
  },

  why: {
    eyebrow: "Why IMATEC",
    heading: "The specialist workshop behind the trade",
    lede: "Three things set IMATEC apart from a parts catalogue — and each is something we actually do, not something we say.",
    pillars: [
      {
        title: "We recoat, not just replace",
        proof: "Professional recoating of fuser and hot rollers — a specialist capability, not a line in a catalogue.",
        soWhat: "You get a real alternative to buying and importing a new component.",
      },
      {
        title: "We test before we supply",
        proof: "We don't simply import parts — every product is tested in our own workshop, on real machines, before it becomes part of our range.",
        soWhat: "The parts you order are vetted, not drop-shipped.",
      },
      {
        title: "We build our own equipment",
        proof: "Our Vacu-Tec service vacuums are designed and built by IMATEC for copier and printer technicians.",
        soWhat: "It's proof we understand the machines — from the inside.",
      },
    ],
  },

  process: {
    eyebrow: "How recoating works",
    heading: "From worn roller to bench-tested return",
    lede: "The shape of the recoating process. Full technical detail is confirmed with your quote.",
    // Generic, honest stages — not proprietary specifics (those are PENDING client confirmation).
    steps: [
      { n: "01", title: "Assess", desc: "We inspect your roller and confirm it's a candidate for recoating." },
      { n: "02", title: "Strip & prepare", desc: "The worn surface is removed and the core is prepared." },
      { n: "03", title: "Recoat", desc: "The roller surface is restored to working specification." },
      { n: "04", title: "Cure", desc: "The new surface is cured for durability." },
      { n: "05", title: "Bench-test", desc: "The roller is tested before it's returned to you." },
    ],
    cta: { label: "See the recoating service", href: "/fuser-roller-recoating" },
  },

  coverage: {
    eyebrow: "Brand & parts coverage",
    heading: "Workshop-tested parts for nine major brands",
    lede: "Printer and copier parts, toner and consumables — supplied to dealers, technicians and service providers across South Africa.",
    brands: site.brands,
    cta: { label: "Request a Part", waMessage: "Hi IMATEC, I'm looking for a printer/copier part. Brand + model: " },
  },

  story: {
    eyebrow: "Three decades on the bench",
    heading: "The people who know this equipment",
    body: "IMATEC has spent more than three decades in the office-automation industry — recoating rollers, sourcing and testing parts, and building the tools technicians use. It's specialist work, and it's why dealers and service providers keep coming back.",
    cta: { label: "About IMATEC", href: "/about" },
    // Real, verified/client-stated facts only — no fabricated proof or ratings.
    facts: [
      { value: "30+", label: "Years in office automation" },
      { value: "9", label: "Major brands supported" },
      { value: "Own-built", label: "Vacu-Tec service equipment" },
      { value: "Tested", label: "Every part, in our own workshop" },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    heading: "Recoating, answered plainly",
    items: [
      {
        q: "What is fuser / hot roller recoating?",
        a: "It's the professional restoration of a worn fuser or hot roller's surface back to working specification — so the roller can keep running instead of being replaced.",
      },
      {
        q: "Is recoating better than replacing the roller?",
        a: "It's a cost-effective alternative. Instead of buying a new part — often imported, with the lead time that adds — recoating restores the roller you already have. Whether it's the right call depends on the roller, and we'll advise you honestly.",
      },
      {
        q: "Which printer and copier brands do you support?",
        a: `We supply and work with parts for ${site.brands.join(", ")} and others.`,
      },
      {
        q: "How do I get a roller to you?",
        a: "Send us the details of your roller and machine on WhatsApp or by enquiry, and we'll confirm the best way to get it to us and quote the work.",
      },
      {
        q: "Do you only recoat, or do you supply parts too?",
        a: "Both. Alongside recoating we supply workshop-tested printer and copier parts, toner and consumables — plus our own Vacu-Tec service vacuums and Mr McKenic professional products.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Tell us what you need",
    heading: "We already understand the equipment. Let's talk.",
    sub: "Whether it's a roller to recoat, a part to source, or a product to order — reach us the fastest way for you.",
  },
} as const;
