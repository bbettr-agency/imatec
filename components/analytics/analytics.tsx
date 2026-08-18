"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Consent-aware analytics (POPIA). GoogleTag Manager loads ONLY after the
 * visitor accepts, and only when NEXT_PUBLIC_GTM_ID is configured. Until then
 * nothing loads and no banner shows — the site ships clean and this is ready to
 * switch on. See SYSTEM/04-MARKETING-ENGINE.md (consent-aware tag loading).
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const STORAGE_KEY = "imatec-consent";

export function Analytics() {
  const [choice, setChoice] = useState<"granted" | "denied" | null | "pending">("pending");

  useEffect(() => {
    if (!GTM_ID) return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setChoice(stored === "granted" || stored === "denied" ? stored : null);
  }, []);

  function decide(value: "granted" | "denied") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  }

  // No GTM configured yet → render nothing at all.
  if (!GTM_ID) return null;

  return (
    <>
      {choice === "granted" && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {choice === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-50 sm:left-auto sm:right-4 sm:max-w-md rounded-panel border border-hair bg-paper shadow-card p-5"
        >
          <p className="text-sm text-ink-2 leading-relaxed">
            We use cookies to understand how the site is used and improve it. You can accept or
            decline analytics cookies. Essential functionality works either way.
          </p>
          <div className="mt-4 flex gap-2.5">
            <button
              onClick={() => decide("granted")}
              className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-btn bg-brand-cta text-white font-bold text-sm hover:bg-brand-ink transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => decide("denied")}
              className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-btn border border-hair-strong text-ink font-bold text-sm hover:border-brand transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
