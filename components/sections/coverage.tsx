import type { CSSProperties } from "react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { home } from "@/config/home";
import { brandLogos } from "@/config/site";

/* eslint-disable @next/next/no-img-element -- decorative logo marquee: plain <img> with
   intrinsic width/height avoids CLS and keeps the CSS-variable rail height simple. */

function BrandLogo({ b, dup = false }: { b: (typeof brandLogos)[number]; dup?: boolean }) {
  return (
    <li className={`brand-logo${dup ? " brand-dup" : ""}`} style={{ "--s": b.scale } as CSSProperties} aria-hidden={dup || undefined}>
      <img
        src={`/images/brands/${b.slug}.png`}
        width={b.w}
        height={b.h}
        alt={dup ? "" : `${b.name} printer & copier parts supported by IMATEC`}
        loading="lazy"
        decoding="async"
      />
    </li>
  );
}

/** `index` lets a host page number this section in its own local datum sequence
 *  (default "05" is the homepage position). */
export function Coverage({ index = "05" }: { index?: string }) {
  const c = home.coverage;
  return (
    <section className="bg-paper py-11 md:py-14 border-b border-hair" aria-labelledby="coverage-heading">
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

        {/* The rail — real brand logos, slow continuous drift (pure CSS). Compatibility /
            product-support context only. Duplicated set (aria-hidden) gives a seamless loop;
            reduced-motion falls back to a static centred wrap showing every logo. */}
        <Reveal preset="fadeIn">
          <div className="brand-rail mt-8 border-y border-hair-strong py-6 sm:py-7 overflow-hidden">
            <ul className="brand-track list-none m-0 p-0" aria-label="Printer and copier brands IMATEC supplies and supports parts for">
              {brandLogos.map((b) => <BrandLogo key={b.slug} b={b} />)}
              {brandLogos.map((b) => <BrandLogo key={`dup-${b.slug}`} b={b} dup />)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
