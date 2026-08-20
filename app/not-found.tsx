import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";

export default function NotFound() {
  return (
    <section className="section bg-paper">
      <div className="container">
        <div className="max-w-2xl py-10">
          <p className="label text-brand-ink">Error 404</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 text-ink-2 text-lg leading-relaxed measure">
            The page may have moved. Head back home, or get in touch. We&apos;re happy to point you
            to the right place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/" size="lg">Back to home</Button>
            <WhatsAppCta label="WhatsApp IMATEC" message="Hi IMATEC, I have an enquiry." size="lg" variant="ghost" />
          </div>
        </div>
      </div>
    </section>
  );
}
