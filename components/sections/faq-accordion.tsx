import { ChevronDown } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqJsonLd } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  eyebrow?: string;
  heading: string;
  items: readonly { q: string; a: string }[];
  bg?: "paper" | "ground";
}

/** Native <details> accordion (works with no JS) + FAQPage JSON-LD. */
export function FaqAccordion({ eyebrow, heading, items, bg = "ground" }: FaqAccordionProps) {
  return (
    <section className={cn("section", bg === "ground" ? "bg-ground" : "bg-paper")} aria-label="Frequently asked questions">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...items])) }} />
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow={eyebrow} heading={heading} />
          </Reveal>
          <div className="mt-8 divide-y divide-hair rounded-panel border border-hair bg-paper">
            {items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-bold text-ink">{item.q}</h3>
                  <ChevronDown className="w-5 h-5 text-brand-ink shrink-0 transition-transform duration-200 ease-bench group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 -mt-1">
                  <p className="text-sm md:text-[0.95rem] text-ink-2 leading-relaxed measure">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
