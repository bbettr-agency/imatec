import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { BrandRail } from "@/components/sections/brand-rail";
import { home } from "@/config/home";

/** `index` lets a host page number this section in its own local datum sequence
 *  (default "05" is the homepage position). */
export function Coverage({ index = "05" }: { index?: string }) {
  const c = home.coverage;
  return (
    <section className="bg-paper py-11 md:py-14" aria-labelledby="coverage-heading">
      <div className="container">
        <SectionMark index={index} label="Brand & parts coverage" spec="9 brands" />

        <div className="mt-7 grid gap-x-14 gap-y-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 id="coverage-heading" className="text-[1.55rem] sm:text-[2rem] lg:text-[2.3rem] font-bold tracking-tight text-ink text-balance">
                {c.heading}
              </h2>
              <p className="mt-3 text-ink-2 text-base leading-relaxed measure">{c.lede}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal>
              <WhatsAppCta label={c.cta.label} message={c.cta.waMessage} size="lg" dataCta="coverage-part" />
            </Reveal>
          </div>
        </div>

        <Reveal preset="fadeIn">
          <BrandRail className="mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
