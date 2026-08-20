import type { CSSProperties } from "react";
import { Reveal } from "@/engine/motion";
import { brandLogos } from "@/config/site";
import { cn } from "@/lib/utils";

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

/**
 * The moving nine-brand logo rail — IMATEC's recurring compatibility motif.
 * Framed by two hairlines (its identity), slow seamless pure-CSS drift, hover/focus
 * pause, edge fades, reduced-motion static wrap; the duplicate set is aria-hidden.
 * Compatibility / product-support context only — no partnership implied.
 */
export function BrandRail({ className }: { className?: string }) {
  return (
    <div className={cn("brand-rail border-y border-hair-strong py-6 sm:py-7 overflow-hidden", className)}>
      <ul className="brand-track list-none m-0 p-0" aria-label="Printer and copier brands IMATEC supplies and supports parts for">
        {brandLogos.map((b) => <BrandLogo key={b.slug} b={b} />)}
        {brandLogos.map((b) => <BrandLogo key={`dup-${b.slug}`} b={b} dup />)}
      </ul>
    </div>
  );
}

/**
 * Compact standalone rail band — the signature strip for inner pages and repeats.
 * A slim compatibility label + the moving rail; used as a hero → content transition
 * so brand exposure carries across the site without another giant section.
 */
export function BrandRailBand({
  label = "Across the major office-automation brands",
  className,
}: {
  label?: string | null;
  className?: string;
}) {
  return (
    <section className={cn("bg-paper py-9 md:py-11", className)} aria-label="Supported printer and copier brands">
      <div className="container">
        {label && <p className="label text-ink-muted mb-4">{label}</p>}
        <Reveal preset="fadeIn">
          <BrandRail />
        </Reveal>
      </div>
    </section>
  );
}
