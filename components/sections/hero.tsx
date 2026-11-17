import { getImageProps } from "next/image";
import { Reveal, heroStack } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { BrandRail } from "@/components/sections/brand-rail";
import { home } from "@/config/home";

/**
 * Hero — client-approved direction. Light-first: the supplied roller/blue artwork
 * is the background (a different asset per aspect ratio, desktop vs mobile), copy
 * sits on the clean side, and the moving brand rail runs full-width beneath it.
 * REUSE · RECOAT · RECYCLE carries the brand message. LCP = H1 (never animated).
 */
/* Art-directed hero artwork via <picture>: each breakpoint downloads only its own
   asset, but (unlike the old CSS background) through the Next image optimiser —
   AVIF/WebP, responsive widths, high fetch priority. Decorative (alt=""). */
const heroArt = { alt: "", sizes: "100vw", quality: 80, priority: true } as const;
const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({ ...heroArt, src: "/images/hero-bg-desktop.jpg", width: 1717, height: 916 });
const {
  props: { srcSet: _mobileSrcSet, ...mobileImg },
} = getImageProps({ ...heroArt, src: "/images/hero-bg-mobile.jpg", width: 853, height: 1844 });

export function Hero() {
  const hero = heroStack({ character: "precise" });
  const h = home.hero;
  const [reuse, recoat, recycle] = h.slogan;

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Background artwork — mobile (roller/blue bottom) and desktop (roller/blue right).
          A <picture> so only the matching asset loads at each breakpoint. */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source media="(min-width: 640px)" srcSet={desktopSrcSet} sizes="100vw" />
          <source srcSet={_mobileSrcSet} sizes="100vw" />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt="" comes from getImageProps (decorative) */}
          <img {...mobileImg} className="absolute inset-0 h-full w-full object-cover object-bottom sm:object-right" />
        </picture>
        {/* Readability lift on the copy side — white on the left (desktop) / top (mobile) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-paper from-25% via-paper/80 via-55% to-transparent to-75%" aria-hidden="true" />
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-paper from-30% via-paper/85 via-60% to-transparent to-88%" aria-hidden="true" />
      </div>

      {/* Copy */}
      <div className="container relative z-10 flex flex-col justify-center min-h-[32rem] sm:min-h-[35rem] lg:min-h-[39rem] pt-10 pb-12 sm:py-16 lg:py-20">
        <div className="max-w-xl">
          <p className="label text-brand-ink">{h.eyebrow}</p>

          <h1
            {...hero.lcp}
            className="mt-4 text-[2.3rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04] font-bold tracking-tight text-ink text-balance"
          >
            {h.h1.lead} <span className="text-brand-ink">{h.h1.accent}</span>
          </h1>

          <Reveal {...hero.step(0)}>
            <p data-speakable className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{h.sub}</p>
          </Reveal>

          {/* REUSE · RECOAT · RECYCLE — brand statement, not cards */}
          <Reveal {...hero.step(1)}>
            <p className="mt-6 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-lg sm:text-xl font-bold uppercase tracking-[0.06em] text-ink">
              <span>{reuse}</span>
              <span className="text-brand/50" aria-hidden="true">·</span>
              <span className="text-brand-ink">{recoat}</span>
              <span className="text-brand/50" aria-hidden="true">·</span>
              <span>{recycle}</span>
            </p>
          </Reveal>

          <Reveal {...hero.step(2)}>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              <WhatsAppCta label={h.primaryCta.label} message={h.primaryCta.waMessage} size="lg" dataCta="hero-recoating" />
              <Button href={h.secondaryCta.href} variant="ghost" size="lg" dataCta="hero-process">
                {h.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-3.5 label !tracking-[0.06em] normal-case text-ink-muted">{h.reassurance}</p>
          </Reveal>
        </div>
      </div>

      {/* Full-width moving brand rail — logo presence spans the whole composition */}
      <div className="relative z-10 bg-paper/85 backdrop-blur-sm">
        <BrandRail />
      </div>
    </section>
  );
}
