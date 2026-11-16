"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { joinHref, nav } from "@/content/site.config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Close on navigation. */
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    /* Close if the viewport grows to the desktop layout. */
    const mq = window.matchMedia("(min-width: 64rem)");
    const onWide = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
      document.body.style.overflow = "";
    };
  }, [open]);

  const joinExternal = joinHref.startsWith("http");

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="label -mr-2 flex h-11 items-center gap-2.5 px-2"
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-200 ${
              open ? "translate-y-[5.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-200 ${
              open ? "-translate-y-[5.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="on-dark fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-forest-deep text-paper md:top-[4.5rem]"
      >
        <nav aria-label="Main" className="wrap flex min-h-full flex-col pb-10 pt-4">
          <ul>
            {nav.map((item, i) => {
              const current = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-line-light">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5"
                  >
                    <span className="label w-6 tabular-nums text-moss">0{i + 1}</span>
                    <span className="font-display text-3xl tracking-[-0.03em]">{item.label}</span>
                    {current && <span className="label ml-auto text-moss">You are here</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-10">
            {joinExternal ? (
              <a
                href={joinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-paper px-5 py-4 text-center font-medium text-ink"
              >
                Join MTC ↗
              </a>
            ) : (
              <Link
                href={joinHref}
                onClick={() => setOpen(false)}
                className="block bg-paper px-5 py-4 text-center font-medium text-ink"
              >
                Join MTC →
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
