import type { ReactNode } from "react";

type Props = {
  /** A null href means the link is not configured: nothing is rendered. */
  href: string | null;
  children: ReactNode;
  variant?: "accent" | "ink" | "outline" | "outline-light";
  className?: string;
};

const styles = {
  accent: "bg-accent text-white hover:bg-accent-dark",
  ink: "bg-ink text-white hover:bg-accent",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border-2 border-white text-white hover:bg-white hover:text-ink",
} as const;

/* Pill shape shared by every button, so non-link buttons can match. */
export const buttonBase =
  "inline-flex h-12 items-center justify-center rounded-full px-6 font-semibold transition-colors duration-150";

export function LinkButton({ href, children, variant = "accent", className = "" }: Props) {
  if (!href) return null;
  const newTab = href.startsWith("http");
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${buttonBase} ${styles[variant]} ${className}`}
    >
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
