import { Check, Minus } from "lucide-react";
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

        <div className="mt-9 max-w-3xl">
          <Reveal>
            <h2
              id="wedge-heading"
              className="text-[2rem] leading-[1.06] sm:text-4xl lg:text-[3.1rem] lg:leading-[1.04] font-extrabold tracking-tight text-ink text-balance"
            >
              {w.heading}
            </h2>
            <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{w.lede}</p>
          </Reveal>
        </div>

        {/* The decision — two paths, split by a rule; Recoat carries the weight */}
        <Reveal>
          <div className="mt-11 grid md:grid-cols-2 md:divide-x md:divide-hair-strong border-t border-hair-strong">
            {/* Replace — receding */}
            <div className="pt-8 pb-8 md:pb-10 md:pr-12 border-b md:border-b-0 border-hair">
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

            {/* Recoat — the answer */}
            <div className="pt-8 md:pt-8 md:pl-12">
              <span className="label text-brand-ink">The IMATEC alternative</span>
              <p className="mt-3 text-[2.75rem] sm:text-6xl font-extrabold tracking-[-0.03em] text-ink leading-none">
                {w.recoatWord}<span className="text-brand">.</span>
              </p>
              <span className="mt-4 block h-1 w-16 rounded-full bg-brand" aria-hidden="true" />
              <h3 className="mt-5 text-base font-bold text-ink">{w.recoat.title}</h3>
              <ul className="mt-4 space-y-3">
                {w.recoat.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />
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
          <p className="mt-7 text-sm text-ink-muted italic max-w-2xl">{w.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
