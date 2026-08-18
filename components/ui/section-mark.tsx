import { cn } from "@/lib/utils";

interface SectionMarkProps {
  /** Two-digit index reflecting the section's place in the page argument (real sequence). */
  index: string;
  label: string;
  /** Optional right-aligned spec annotation. */
  spec?: string;
  className?: string;
}

/**
 * The datum line — a full-width hairline carrying a section index + label, and an
 * optional spec annotation. Threads the homepage as one engineered document
 * (THE BENCH). Structural, not decorative: the index encodes reading order.
 */
export function SectionMark({ index, label, spec, className }: SectionMarkProps) {
  return (
    <div className={cn("border-t border-hair-strong pt-3.5 flex items-baseline gap-4", className)}>
      <span className="label text-brand-ink tabular-nums">{index}</span>
      <span className="label text-ink-muted">{label}</span>
      {spec && <span className="label text-ink-muted/80 ml-auto hidden sm:inline">{spec}</span>}
    </div>
  );
}
