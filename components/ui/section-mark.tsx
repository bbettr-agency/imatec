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
 * The datum mark — a section index + label (+ optional right-aligned spec). It
 * carries the technical/editorial identity of THE BENCH without a full-width
 * separator rule: the site reads as one continuous composition, differentiated
 * by spacing, tone and composition rather than a line above every section.
 * A short brand tick precedes the index so the mark still reads as a datum.
 */
export function SectionMark({ index, label, spec, className }: SectionMarkProps) {
  return (
    <div className={cn("flex items-baseline gap-3.5", className)}>
      <span className="self-center h-3 w-px bg-brand" aria-hidden="true" />
      <span className="label text-brand-ink tabular-nums">{index}</span>
      <span className="label text-ink-muted">{label}</span>
      {spec && <span className="label text-ink-muted/80 ml-auto hidden sm:inline">{spec}</span>}
    </div>
  );
}
