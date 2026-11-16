import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";

/* Shared opening block for the inner pages. */
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="wrap pb-12 pt-14 md:pb-20 md:pt-24">
      <SectionLabel className="text-forest">{label}</SectionLabel>
      <div className="grid-12 mt-6">
        <h1 className="display-xl col-span-12 lg:col-span-8">{title}</h1>
        {children && (
          <div className="lede col-span-12 mt-8 text-ink-soft md:col-span-9 lg:col-span-6 lg:col-start-1">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
