"use client";

import { useEffect, useRef, useState } from "react";
import { joinHref, nav } from "@/content/site.config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    /* Close if the window grows to the desktop layout. */
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

  const newTab = joinHref.startsWith("http");
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 flex h-11 items-center gap-2.5 px-2 font-semibold"
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-200 ${
              open ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-200 ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="on-dark fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink text-white md:top-[4.5rem] md:h-[calc(100dvh-4.5rem)]"
      >
        <nav aria-label="Main" className="wrap flex min-h-full flex-col pb-10 pt-2">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/15">
                <a
                  href={item.href}
                  onClick={close}
                  className="font-display block py-5 text-3xl font-extrabold uppercase [font-stretch:112%]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={joinHref}
            onClick={close}
            {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-10 flex h-14 items-center justify-center rounded-full bg-accent text-lg font-semibold"
          >
            Join MTC
          </a>
        </nav>
      </div>
    </div>
  );
}
