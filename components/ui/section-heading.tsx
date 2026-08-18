import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  /** Heading level — defaults to h2. */
  as?: "h2" | "h3";
  className?: string;
}

/** Eyebrow (label, not a heading) → heading → optional lede. Plain markup;
 *  wrap in <Reveal> at the call site for entrance motion. */
export function SectionHeading({
  eyebrow,
  heading,
  lede,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      {eyebrow && <p className="label text-brand-ink">{eyebrow}</p>}
      <Tag
        className={cn(
          "mt-3 text-ink",
          as === "h2"
            ? "text-[1.7rem] leading-[1.1] sm:text-4xl lg:text-[2.75rem]"
            : "text-2xl lg:text-3xl",
        )}
      >
        {heading}
      </Tag>
      {lede && (
        <p
          className={cn(
            "mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
