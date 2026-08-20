import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal, heroStack } from "@/engine/motion";
import { breadcrumbJsonLd } from "@/lib/jsonld";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  /** Breadcrumb trail incl. Home + current page. */
  breadcrumb: { name: string; path: string }[];
  actions?: ReactNode;
  /** When present, integrated as a right-bleed image (mobile: stacked band) — not a boxed card. */
  image?: { src: string; alt: string; label?: string; position?: string };
}

/**
 * Shared inner-page hero. Integrated art direction to match the homepage/flagship:
 * content in the container, the photograph bleeding to the right edge on desktop
 * and dissolving into the paper ground (a stacked band on mobile). LCP = the H1
 * (never animated); the single priority image reveals scale-only.
 */
export function PageHero({ eyebrow, title, sub, breadcrumb, actions, image }: PageHeroProps) {
  const hero = heroStack({ character: "precise" });
  return (
    <section className="relative overflow-hidden bg-paper border-b border-hair">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }}
      />
      <div className="container relative z-10 pt-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
            {breadcrumb.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-hair-strong" aria-hidden="true" />}
                {i < breadcrumb.length - 1 ? (
                  <Link href={c.path} className="hover:text-brand-ink transition-colors">{c.name}</Link>
                ) : (
                  <span className="text-ink-2 font-semibold" aria-current="page">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={image ? "max-w-2xl pb-8 lg:pb-20 lg:min-h-[24rem]" : "max-w-3xl pb-12 md:pb-16"}>
          <p className="label text-brand-ink">{eyebrow}</p>
          <h1
            {...hero.lcp}
            className="mt-4 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.03] font-extrabold tracking-tight text-ink text-balance"
          >
            {title}
          </h1>
          {sub && (
            <Reveal {...hero.step(0)}>
              <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{sub}</p>
            </Reveal>
          )}
          {actions && (
            <Reveal {...hero.step(1)}>
              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">{actions}</div>
            </Reveal>
          )}
        </div>
      </div>

      {image && (
        <Reveal
          preset="imageReveal"
          {...hero.step(1)}
          className="relative h-[15rem] sm:h-[19rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[45%]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 45vw"
            className="object-cover"
            style={{ objectPosition: image.position ?? "center" }}
          />
          {/* dissolve into the paper ground — left edge on desktop, top edge on mobile */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-paper to-transparent" aria-hidden="true" />
          <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent" aria-hidden="true" />
          {image.label && (
            <span className="absolute right-4 bottom-4 lg:right-8 lg:bottom-8 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 border border-brand/40 rounded-md px-2.5 py-1.5">
              {image.label}
            </span>
          )}
        </Reveal>
      )}
    </section>
  );
}
