import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { BrandRailBand } from "@/components/sections/brand-rail";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionMark } from "@/components/ui/section-mark";
import { Reveal } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { pages } from "@/config/pages";

const p = pages.parts;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/printer-copier-parts",
});

// Honest, derived from the approach copy (not invented).
const supplyPoints = ["Sourced from trusted manufacturers", "Checked in our own workshop", "Vetted, not drop-shipped"];

export default function PartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("printer-copier-parts")) }} />

      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Printer Parts, Toner & Consumables", path: "/printer-copier-parts" }]}
        image={{ src: "/images/printer-parts.jpg", alt: "A range of printer and copier parts (rollers, drums, fuser units and gears) laid out on a workshop surface" }}
        actions={<WhatsAppCta label="Request a Part" message="Hi IMATEC, I'm looking for a printer/copier part. Brand + model: " size="lg" dataCta="parts-hero" />}
      />

      {/* 01 — How we supply */}
      <section className="section bg-ground" aria-labelledby="parts-approach">
        <div className="container">
          <SectionMark index="01" label={p.approach.eyebrow} spec="Tested supply" />
          <div className="mt-9 grid gap-x-14 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 id="parts-approach" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.approach.heading}</h2>
                <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.approach.body}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal preset="fadeUpItem">
                <p className="label text-ink-muted">What that means for you</p>
                <ul className="mt-4 border-t border-hair">
                  {supplyPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 py-3.5 border-b border-hair text-sm text-ink"><Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />{pt}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — What we stock */}
      <section className="section bg-paper" aria-labelledby="parts-stock">
        <div className="container">
          <SectionMark index="02" label={p.categories.eyebrow} spec={`${p.categories.items.length} categories`} />
          <div className="mt-9 grid gap-x-14 gap-y-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <Reveal>
                <h2 id="parts-stock" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.categories.heading}</h2>
                <p className="mt-4 text-ink-2 leading-relaxed measure">From the fuser to the feed path, the parts the trade orders most, plus toner and consumables.</p>
              </Reveal>
              <Reveal preset="imageReveal">
                <div className="mt-7 relative w-full aspect-[3/4] max-w-[20rem] overflow-hidden rounded-panel border border-hair bg-[#1b2128]">
                  <Image
                    src="/images/printer-exploded.jpg"
                    alt="Exploded technical view of a copier/printer — panels, boards, ink tanks, carriage, rollers and chassis"
                    fill
                    sizes="(max-width:1024px) 90vw, 320px"
                    className="object-contain"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <ul className="border-t border-hair-strong grid sm:grid-cols-2 sm:gap-x-10">
                  {p.categories.items.map((c) => (
                    <li key={c} className="flex items-center gap-3 py-4 border-b border-hair text-base sm:text-lg font-bold text-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <BrandRailBand label="Parts & support across the major brands" />

      <FinalCta index="03" />
    </>
  );
}
