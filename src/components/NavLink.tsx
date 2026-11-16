"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const current = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={`relative py-2 transition-colors duration-150 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-200 hover:text-forest ${
        current ? "text-forest after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
      }`}
    >
      {children}
    </Link>
  );
}
