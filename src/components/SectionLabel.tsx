import type { ReactNode } from "react";

/* "02 — Projects" style label that opens a section. */
export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      {index && <span className="tabular-nums opacity-60">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-6 bg-current opacity-40" />}
      <span>{children}</span>
    </p>
  );
}
