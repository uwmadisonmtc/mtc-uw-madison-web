import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  /** A null href means the link is not configured: nothing is rendered. */
  href: string | null;
  children: ReactNode;
  variant?: "solid" | "outline" | "text";
  /** Use on dark sections. */
  onDark?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center gap-3 font-medium leading-none transition-colors duration-150";

const styles = {
  solid: {
    light: "bg-forest px-5 py-3.5 text-paper hover:bg-ink",
    dark: "bg-paper px-5 py-3.5 text-ink hover:bg-clay-light",
  },
  outline: {
    light: "border border-ink px-5 py-3.5 hover:bg-ink hover:text-paper",
    dark: "border border-paper/60 px-5 py-3.5 text-paper hover:bg-paper hover:text-ink",
  },
  text: {
    light: "border-b border-ink pb-1.5 hover:border-clay hover:text-clay",
    dark: "border-b border-paper/70 pb-1.5 text-paper hover:border-clay-light hover:text-clay-light",
  },
} as const;

export function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

export function LinkButton({ href, children, variant = "solid", onDark, className = "" }: Props) {
  if (!href) return null;
  const cls = `${base} ${styles[variant][onDark ? "dark" : "light"]} ${className}`;
  const external = isExternal(href);
  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform duration-150 group-hover:translate-x-0.5"
    >
      {external && !href.startsWith("mailto:") ? "↗" : "→"}
    </span>
  );
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {arrow}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}

/**
 * Shown in place of a button whose link has not been configured.
 * Visible in development only, so the gap is obvious to whoever is editing
 * but never reaches visitors.
 */
export function Unconfigured({ what }: { what: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <p className="label inline-block border border-dashed border-clay px-3 py-2 text-clay">
      Not configured: {what} — set it in src/content/site.config.ts
    </p>
  );
}
