import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider, NOSCRIPT_FALLBACK } from "@/engine/motion";
import { Header } from "@/components/funnel/header";
import { Footer } from "@/components/funnel/footer";
import { StickyCta } from "@/components/funnel/sticky-cta";
import { Analytics } from "@/components/analytics/analytics";
import { site } from "@/config/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonld";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "IMATEC · Fuser / Hot Roller Recoating & Printer Parts",
    template: "%s · IMATEC",
  },
  description: site.descriptionShort,
  applicationName: site.name,
  authors: [{ name: "Bbettr Agency", url: "https://www.bbettragency.com" }],
  // No explicit `robots` here: indexing is the default, and setting it at the root
  // duplicated (and contradicted) the 404 page's own noindex tag.
  icons: { icon: "/imatec-logo.svg", apple: "/imatec-logo.png" },
  // Search-engine ownership verification. Paste the token (content value only) into
  // the Vercel env vars; tags render only when set. Bing powers ChatGPT search & Copilot.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#0B82E6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={openSans.variable}>
      <head>
        <noscript>
          <style>{NOSCRIPT_FALLBACK}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:rounded-btn focus:shadow-card"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyCta />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
