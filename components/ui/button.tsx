import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "whatsapp" | "quiet";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-bold rounded-btn transition-[transform,background-color,border-color,box-shadow] duration-200 ease-bench focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:translate-y-0";

const variants: Record<Variant, string> = {
  // IMATEC blue CTA — accessible tint carries white text (AA)
  primary:
    "bg-brand-cta text-white border border-brand-cta shadow-cta hover:bg-brand-ink hover:-translate-y-0.5 hover:shadow-lg",
  ghost:
    "bg-transparent text-ink border border-hair-strong hover:border-brand hover:text-brand-ink hover:-translate-y-0.5",
  whatsapp:
    "bg-whatsapp text-[#04310f] border border-whatsapp hover:-translate-y-0.5 hover:shadow-lg",
  quiet:
    "bg-steel-soft text-ink border border-hair hover:border-hair-strong",
};

const sizes: Record<Size, string> = {
  md: "text-sm px-4 py-2.5 min-h-[44px]",
  lg: "text-base px-5 py-3 min-h-[48px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** GTM/analytics label (data-cta). */
  dataCta?: string;
}

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "href" | "children">;

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  dataCta,
  ...rest
}: AnchorProps | ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...anchorRest } = rest as AnchorProps;
    const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          data-cta={dataCta}
          {...(href.startsWith("http") ? { rel: "noopener noreferrer" } : {})}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} data-cta={dataCta} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonProps;
  return (
    <button className={classes} data-cta={dataCta} {...buttonRest}>
      {children}
    </button>
  );
}
