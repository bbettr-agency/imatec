import type { ReactNode } from "react";

/** Plain, readable long-form body for legal pages (privacy, terms). */
export function LegalBody({ updated, children }: { updated: string; children: ReactNode }) {
  return (
    <section className="section bg-ground">
      <div className="container">
        <div className="max-w-3xl space-y-8 text-ink-2 text-base leading-relaxed [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:tracking-tight [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-brand-ink [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2">
          <p className="label text-ink-muted">Last updated: {updated}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
