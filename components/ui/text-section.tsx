import type { ReactNode } from "react";
import { Reveal } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const bgMap = {
  paper: "bg-paper",
  ground: "bg-ground",
  steel: "bg-steel-soft",
} as const;

interface TextSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  children?: ReactNode;
  bg?: keyof typeof bgMap;
  actions?: ReactNode;
  id?: string;
}

/** Simple, config-driven prose section — eyebrow → heading → body → actions. */
export function TextSection({ eyebrow, heading, children, bg = "paper", actions, id }: TextSectionProps) {
  return (
    <section className={cn("section", bgMap[bg])} id={id}>
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow={eyebrow} heading={heading} />
          </Reveal>
          {children && (
            <Reveal>
              <div className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure space-y-4">
                {children}
              </div>
            </Reveal>
          )}
          {actions && (
            <Reveal>
              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">{actions}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
