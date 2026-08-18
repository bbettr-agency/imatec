import { Reveal } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { home } from "@/config/home";

export function Coverage() {
  const c = home.coverage;
  return (
    <section className="section bg-ground" aria-labelledby="coverage-heading">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow={c.eyebrow}
                heading={<span id="coverage-heading">{c.heading}</span>}
                lede={c.lede}
              />
              <div className="mt-7">
                <WhatsAppCta label={c.cta.label} message={c.cta.waMessage} size="lg" dataCta="coverage-part" />
              </div>
            </div>
          </Reveal>

          {/* Brand coverage — typeset spec grid, not logo soup */}
          <Reveal preset="fadeIn">
            <ul className="grid grid-cols-2 sm:grid-cols-3 rounded-panel border border-hair bg-paper overflow-hidden">
              {c.brands.map((b, i) => (
                <li
                  key={b}
                  className="flex items-center justify-center text-center px-3 py-6 text-sm font-bold text-ink border-hair border-b [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-0 sm:[&:not(:nth-child(3n))]:border-r"
                >
                  {b}
                </li>
              ))}
              <li className="flex items-center justify-center text-center px-3 py-6 text-sm font-semibold text-ink-muted border-hair border-b sm:[&:not(:nth-child(3n))]:border-r">
                &amp; more
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
