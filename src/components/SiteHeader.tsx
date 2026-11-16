import Link from "next/link";
import { joinHref, nav } from "@/content/site.config";
import { isExternal } from "./LinkButton";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const joinExternal = isExternal(joinHref);
  return (
    <header className="relative z-40 border-b border-line bg-paper">
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <Wordmark />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
            <li>
              {joinExternal ? (
                <a
                  href={joinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest px-4 py-2.5 font-medium text-paper transition-colors duration-150 hover:bg-ink"
                >
                  Join MTC<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link
                  href={joinHref}
                  className="bg-forest px-4 py-2.5 font-medium text-paper transition-colors duration-150 hover:bg-ink"
                >
                  Join MTC
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
