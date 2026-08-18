import type { Config } from "tailwindcss";

/**
 * IMATEC design tokens — light-first "THE BENCH".
 * Structure per SYSTEM/01-DESIGN-TOKENS.md; values from the approved Phase-1B
 * blueprint (light palette, Open Sans, one controlled blue accent).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Surfaces (light-first)
        paper: "#FFFFFF",
        ground: "#F6F8FA", // soft off-white ground
        steel: {
          DEFAULT: "#E4E9EF", // structure / subtle section fill
          soft: "#EEF1F5",
        },
        hair: {
          DEFAULT: "#E2E7ED",
          strong: "#CBD3DC",
        },
        // Brand
        brand: {
          // IMATEC blue — the controlled accent (primary CTA + key marks)
          DEFAULT: "#0B82E6",
          cta: "#0A6AC0", // accessible tint: white text on blue passes AA
          ink: "#0A5FA8", // accessible tint: blue text/links on white pass AA
          soft: "#EAF3FC", // very light wash, used sparingly
        },
        // Ink (charcoal typography scale)
        ink: {
          DEFAULT: "#343434", // headings + strong body
          2: "#565B62", // secondary text
          muted: "#858C95", // labels, captions
        },
        // The authentic recoated roller (only "dark" on the page — a product object)
        roller: {
          hi: "#6B7178",
          mid: "#2B2E33",
          low: "#0C0D0F",
        },
        // Action colour (SA channel) — the only non-accent action colour
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // tighter display leading baked into the scale usage via classes
        "display": ["clamp(2rem, 5.4vw, 3.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        label: "0.15em",
      },
      borderRadius: {
        // one radius family
        card: "0.875rem", // 14px
        panel: "1.25rem", // 20px
        btn: "0.625rem", // 10px
      },
      boxShadow: {
        // large, soft, low-opacity (premium depth)
        card: "0 18px 40px -24px rgba(20, 30, 50, 0.18)",
        object: "0 22px 44px -22px rgba(12, 13, 15, 0.28)",
        cta: "0 14px 30px -14px rgba(11, 130, 230, 0.45)",
        nav: "0 8px 24px -18px rgba(20, 30, 50, 0.30)",
      },
      maxWidth: {
        measure: "65ch",
      },
      transitionTimingFunction: {
        // the house curve (also enforced in engine/motion)
        bench: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
