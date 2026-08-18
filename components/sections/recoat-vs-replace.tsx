import { Check, Minus } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { home } from "@/config/home";

export function RecoatVsReplace() {
  const w = home.wedge;
  return (
    <section className="section bg-paper" aria-labelledby="wedge-heading">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow={w.eyebrow}
              heading={<span id="wedge-heading">{w.heading}</span>}
              lede={w.lede}
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:items-stretch">
          {/* Replace — the default */}
          <Reveal preset="fadeUpItem" index={0} className="h-full">
            <div className="h-full rounded-panel border border-hair bg-steel-soft p-7">
              <p className="label text-ink-muted">The usual way</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink-2">{w.replace.title}</h3>
              <ul className="mt-5 space-y-3">
                {w.replace.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink-2">
                    <Minus className="w-4 h-4 mt-0.5 text-ink-muted shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Recoat — the IMATEC alternative (emphasised) */}
          <Reveal preset="fadeUpItem" index={1} className="h-full">
            <div className="h-full rounded-panel border-2 border-brand/30 bg-brand-soft/60 p-7 shadow-card">
              <p className="label text-brand-ink">The IMATEC alternative</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink">{w.recoat.title}</h3>
              <ul className="mt-5 space-y-3">
                {w.recoat.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink">
                    <Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <WhatsAppCta label={w.cta.label} message={w.cta.waMessage} size="lg" dataCta="wedge-recoating" />
            <p className="text-sm text-ink-muted italic measure">{w.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
