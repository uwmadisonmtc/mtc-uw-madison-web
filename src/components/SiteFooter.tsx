import { links } from "@/content/site.config";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="wrap flex flex-col gap-6 border-t border-white/15 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Logo tone="white" className="h-7 w-auto" />
          <span className="text-sm text-white/70">University of Wisconsin–Madison</span>
        </div>
        {links.national && (
          <p className="text-sm text-white/70">
            A chapter of{" "}
            <a
              href={links.national}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:decoration-white"
            >
              Muslim Tech Collaborative
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        )}
      </div>
    </footer>
  );
}
