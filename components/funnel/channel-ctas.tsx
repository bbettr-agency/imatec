import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, telLink } from "@/lib/utils";
import { site } from "@/config/site";

/** WhatsApp brand glyph (inline SVG — avoids a generic chat icon). */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.5.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.5-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.01 3.06 4.87 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1 14.66-11.7 9.36 9.36 0 0 1 2.76 6.68c-.01 5.2-4.24 9.44-9.44 9.44zM20.5 3.5A11.36 11.36 0 0 0 12.05.5C5.8.5.72 5.58.72 11.83c0 2 .52 3.95 1.52 5.67L.5 23.5l6.16-1.62a11.3 11.3 0 0 0 5.39 1.37h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.02z" />
    </svg>
  );
}

interface CtaProps {
  message?: string;
  label?: string;
  size?: "md" | "lg";
  variant?: "primary" | "whatsapp" | "ghost" | "quiet";
  dataCta?: string;
  className?: string;
}

export function WhatsAppCta({
  message,
  label = "WhatsApp IMATEC",
  size = "md",
  variant = "primary",
  dataCta = "whatsapp",
  className,
}: CtaProps) {
  return (
    <Button href={waLink(message)} external variant={variant} size={size} dataCta={dataCta} className={className}>
      <WhatsAppGlyph className="w-[1.05em] h-[1.05em]" />
      {label}
      {variant === "primary" && <ArrowRight className="w-4 h-4 -mr-0.5" aria-hidden="true" />}
    </Button>
  );
}

export function CallCta({
  size = "md",
  variant = "ghost",
  className,
}: {
  size?: "md" | "lg";
  variant?: "primary" | "whatsapp" | "ghost" | "quiet";
  className?: string;
}) {
  return (
    <Button href={telLink()} external variant={variant} size={size} dataCta="call" className={className}>
      <Phone className="w-4 h-4" aria-hidden="true" />
      {site.contact.phoneDisplay}
    </Button>
  );
}

export { WhatsAppGlyph };
