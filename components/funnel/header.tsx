"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/config/services";
import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { WhatsAppCta, CallCta } from "@/components/funnel/channel-ctas";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/imatec-logo.svg"
      alt="IMATEC — Imaging Technology"
      width={140}
      height={59}
      className={cn("w-auto", className)}
    />
  );
}

export function Header() {
  const scrolled = useScrollPast(THRESHOLD.header);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 ease-bench",
        scrolled || open
          ? "bg-paper/95 backdrop-blur-md border-b border-hair shadow-nav"
          : "bg-paper/80 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 gap-4">
        <Link href="/" aria-label="IMATEC home" className="shrink-0">
          <Logo className="h-7" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold transition-colors duration-200 hover:text-brand-ink",
                  active ? "text-brand-ink" : "text-ink-2",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block shrink-0">
          <WhatsAppCta label="WhatsApp" size="md" dataCta="whatsapp-nav" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink rounded-btn hover:bg-steel-soft"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-hair bg-paper">
          <nav className="container py-4 flex flex-col" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 text-base font-semibold border-b border-hair last:border-0",
                  pathname === item.href ? "text-brand-ink" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <WhatsAppCta label="WhatsApp IMATEC" size="lg" dataCta="whatsapp-mobilemenu" />
              <CallCta size="lg" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
