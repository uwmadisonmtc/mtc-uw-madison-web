import Link from "next/link";
import { joinHref, nav } from "@/content/site.config";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const newTab = joinHref.startsWith("http");
  return (
    <header className="sticky top-0 z-40 border-b border-grey-light bg-paper/95 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link href="/" aria-label="MTC UW–Madison, home" className="flex items-center gap-3">
          <Logo priority className="h-7 w-auto" />
          <span className="font-display hidden text-sm font-extrabold uppercase text-accent [font-stretch:112%] sm:block">
            UW–Madison
          </span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-2 transition-colors duration-150 hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={joinHref}
                {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-10 items-center rounded-full bg-ink px-5 font-semibold text-white transition-colors duration-150 hover:bg-accent"
              >
                Join
                {newTab && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
