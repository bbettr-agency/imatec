import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { home } from "@/config/home";

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

        {/* The wall — brand names at scale */}
        <Reveal preset="fadeIn">
          <ul className="mt-11 border-y border-hair-strong py-9 flex flex-wrap items-baseline gap-x-8 sm:gap-x-10 gap-y-3">
            {c.brands.map((b) => (
              <li
                key={b}
                className="text-[1.9rem] sm:text-[2.7rem] lg:text-[3.4rem] font-extrabold tracking-[-0.03em] leading-none text-ink whitespace-nowrap"
              >
                {b}
              </li>
            ))}
            <li className="text-[1.4rem] sm:text-2xl font-bold tracking-tight leading-none text-ink-muted self-center">
              &amp; more
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
