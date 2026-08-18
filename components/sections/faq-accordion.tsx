import { Plus } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { faqJsonLd } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  eyebrow?: string;
  heading: string;
  items: readonly { q: string; a: string }[];
  bg?: "paper" | "ground";
}

/** Editorial 2-column FAQ — sticky heading left, hairline-divided native <details>
 *  list right (works with no JS) + FAQPage JSON-LD. No boxed container. */
export function FaqAccordion({ eyebrow, heading, items, bg = "paper" }: FaqAccordionProps) {
  return (
    <section className={cn("section", bg === "ground" ? "bg-ground" : "bg-paper")} aria-label="Frequently asked questions">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd([...items])) }} />
      <div className="container">
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <Reveal>
              {eyebrow && <p className="label text-brand-ink">{eyebrow}</p>}
              <h2 className="mt-3 text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">{heading}</h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8 border-t border-hair-strong">
            {items.map((item) => (
              <details key={item.q} className="group border-b border-hair">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg font-bold text-ink transition-colors group-hover:text-brand-ink">{item.q}</h3>
                  <Plus className="w-5 h-5 mt-0.5 text-brand-ink shrink-0 transition-transform duration-200 ease-bench group-open:rotate-45" aria-hidden="true" />
                </summary>
                <div className="pb-6 -mt-1 pr-8">
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
