import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { home } from "@/config/home";

const nameClass =
  "brand-name text-[1.7rem] sm:text-[2.3rem] lg:text-[2.9rem] font-extrabold tracking-[-0.03em] leading-none text-ink whitespace-nowrap";

export function Coverage() {
  const c = home.coverage;
  return (
    <section className="section bg-paper" aria-labelledby="coverage-heading">
      <div className="container">
        <SectionMark index="05" label="Brand & parts coverage" spec="9 brands" />

        <div className="mt-9 grid gap-x-14 gap-y-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 id="coverage-heading" className="text-[1.7rem] sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-ink text-balance">
                {c.heading}
              </h2>
              <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{c.lede}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal>
              <WhatsAppCta label={c.cta.label} message={c.cta.waMessage} size="lg" dataCta="coverage-part" />
            </Reveal>
          </div>
        </div>

        {/* The rail — brand names at scale, slow continuous drift (pure CSS) */}
        <Reveal preset="fadeIn">
          <div className="brand-rail mt-11 border-y border-hair-strong py-8 sm:py-9 overflow-hidden">
            <ul className="brand-track list-none m-0 p-0" aria-label="Brands supported">
              {c.brands.map((b) => (
                <li key={b} className={nameClass}>{b}</li>
              ))}
              {c.brands.map((b) => (
                <li key={`dup-${b}`} aria-hidden className={`${nameClass} brand-dup`}>{b}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
