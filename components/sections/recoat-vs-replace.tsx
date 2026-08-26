import { Minus, Recycle } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { home } from "@/config/home";

export function RecoatVsReplace() {
  const w = home.wedge;
  return (
    <section className="section bg-paper" aria-labelledby="wedge-heading">
      <div className="container">
        <SectionMark index="02" label="Recoat vs replace" spec="The decision" />

        <div className="mt-8 max-w-3xl">
          <Reveal>
            <h2
              id="wedge-heading"
              className="text-[2rem] leading-[1.06] sm:text-4xl lg:text-[3.1rem] lg:leading-[1.04] font-semibold tracking-tight text-ink text-balance"
            >
              {w.heading}
            </h2>
            <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{w.lede}</p>
          </Reveal>
        </div>

        {/* One argument: the intro flows straight into the decision — Replace vs Recoat,
            split by a restrained central VS. Recoat carries the weight (the answer). */}
        <Reveal>
          <div className="mt-9 grid md:grid-cols-[1fr_auto_1fr] gap-x-10 xl:gap-x-14 gap-y-7 md:items-stretch">
            {/* Replace — the receding route */}
            <div className="md:pt-1">
              <span className="label text-ink-muted">The usual way</span>
              <p className="mt-3 text-[2.75rem] sm:text-6xl font-extrabold tracking-[-0.03em] text-ink-muted leading-none">
                {w.replaceWord}<span className="text-hair-strong">.</span>
              </p>
              <h3 className="mt-6 text-base font-bold text-ink-2">{w.replace.title}</h3>
              <ul className="mt-4 space-y-3">
                {w.replace.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink-2">
                    <Minus className="w-4 h-4 mt-0.5 text-ink-muted shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* VS — vertical spine on desktop, a short horizontal break on mobile */}
            <div className="flex md:flex-col items-center justify-center gap-3 md:gap-0" aria-hidden="true">
              <span className="h-px w-full md:h-auto md:w-px md:flex-1 bg-hair-strong" />
              <span className="shrink-0 text-[0.68rem] font-bold tracking-[0.18em] text-ink-muted md:my-3">VS</span>
              <span className="h-px w-full md:h-auto md:w-px md:flex-1 bg-hair-strong" />
            </div>

            {/* Recoat — the answer, carrying the emphasis and the enquiry path */}
            <div className="md:pt-1">
              <span className="label text-brand-ink">The IMATEC alternative</span>
              <p className="mt-3 text-[2.75rem] sm:text-6xl font-extrabold tracking-[-0.03em] text-ink leading-none">
                {w.recoatWord}<span className="text-brand">.</span>
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-brand-ink">
                <Recycle className="w-4 h-4" aria-hidden="true" />
                Reuse. Recoat. Recycle.
              </p>
              <h3 className="mt-5 text-base font-bold text-ink">{w.recoat.title}</h3>
              <ul className="mt-4 space-y-3">
                {w.recoat.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <Recycle className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <WhatsAppCta label={w.cta.label} message={w.cta.waMessage} size="lg" dataCta="wedge-recoating" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-sm text-ink-muted italic text-center max-w-2xl mx-auto">{w.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
