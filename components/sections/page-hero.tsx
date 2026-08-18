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
  image?: { src: string; alt: string; label?: string };
}

export function PageHero({ eyebrow, title, sub, breadcrumb, actions, image }: PageHeroProps) {
  const hero = heroStack({ character: "precise" });
  return (
    <section className="relative bg-paper border-b border-hair">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }}
      />
      <div className="container pt-8 pb-12 md:pt-10 md:pb-16">
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

        <div className={image ? "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center" : "max-w-3xl"}>
          <div>
            <p className="label text-brand-ink">{eyebrow}</p>
            <h1
              {...hero.lcp}
              className="mt-4 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3rem] lg:leading-[1.04] font-extrabold tracking-tight text-ink text-balance"
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

          {image && (
            <Reveal preset="imageReveal" {...hero.step(1)}>
              <div className="relative rounded-panel border border-hair-strong bg-paper p-3 shadow-card">
                <span className="absolute left-2.5 top-2.5 z-10 w-3 h-3 border-l-2 border-t-2 border-brand" aria-hidden="true" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-roller-low">
                  <Image src={image.src} alt={image.alt} fill priority sizes="(max-width:1024px) 92vw, 44vw" className="object-cover" />
                </div>
                {image.label && (
                  <span className="absolute right-5 bottom-5 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 border border-brand/40 rounded-md px-2.5 py-1.5">
                    {image.label}
                  </span>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
