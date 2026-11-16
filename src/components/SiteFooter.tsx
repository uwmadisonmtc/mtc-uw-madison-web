import Link from "next/link";
import { links, mailto, nav, site } from "@/content/site.config";
import { NodeMark } from "./NodeMark";
import { Wordmark } from "./Wordmark";

const external = [
  { label: "Instagram", href: links.instagram },
  { label: "Event calendar", href: links.calendar },
  { label: "GitHub", href: links.github },
  { label: "MTC National", href: links.national },
].filter((l): l is { label: string; href: string } => Boolean(l.href));

export function SiteFooter() {
  const email = mailto();
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="wrap grid-12 gap-y-12 py-14 md:py-20">
        <div className="col-span-12 lg:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-[34ch] text-paper/75">
            Tech for the community, by the community. A chapter of the national Muslim Tech
            Collaborative.
          </p>
          <NodeMark className="mt-8 text-moss [--color-paper:var(--color-ink)]" />
        </div>

        <nav aria-label="Footer" className="col-span-6 md:col-span-4 lg:col-span-3 lg:col-start-7">
          <p className="label text-moss">Site</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link decoration-paper/30">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <p className="label text-moss">Elsewhere</p>
          <ul className="mt-4 space-y-2.5">
            {email && links.email && (
              <li>
                <a href={email} className="link break-all decoration-paper/30">
                  {links.email}
                </a>
              </li>
            )}
            {external.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link decoration-paper/30"
                >
                  {l.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-light">
        <div className="wrap label flex flex-col gap-2 py-5 text-paper/60 sm:flex-row sm:justify-between">
          <p>
            {site.name} · University of Wisconsin–Madison
          </p>
          <p>A student-run organization · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
