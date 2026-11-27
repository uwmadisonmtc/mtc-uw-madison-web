/*
  Site-wide settings and official links.

  HOW TO EDIT
  - Replace `null` with the real value once it is confirmed.
  - A link left as `null` is not shown anywhere on the site, so nothing
    broken is ever published. `npm run check` lists what is still empty.
*/

import { projects } from "./projects";
import { team } from "./team";

export const site = {
  name: "Muslim Tech Collaborative",
  shortName: "MTC UW–Madison",
  description:
    "Muslim Tech Collaborative at UW–Madison: students learning technology, building projects, and growing together.",
  /* Public address of the deployed site. Update when a domain is chosen. */
  url: "https://mtc-uw-madison-web.vercel.app",
} as const;

export const links: Record<"join" | "instagram" | "linkedin" | "email" | "national", string | null> = {
  /* Group chat invite (Discord, GroupMe, WhatsApp…). This is the main "Join" button. */
  join: "https://tr.ee/I-0MaGXv-M",
  /* Full Instagram profile URL. */
  instagram: "https://www.instagram.com/mtcmadison",
  /* Full LinkedIn page URL. */
  linkedin: "https://www.linkedin.com/in/muslim-tech-collaborative-at-uw-madison-975459406/",
  /* Chapter email address, e.g. "name@example.org" (no "mailto:"). */
  email: "madison@mtc.so",
  /* National Muslim Tech Collaborative. */
  national: "https://mtc.so",
};

/* Where "Join" buttons go: the group chat if set, otherwise the Join section. */
export const joinHref: string = links.join ?? "/#join";

/* Menu links. Projects and Team only appear once their lists have entries. */
export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#what-we-do", label: "What we do" },
  ...(projects.length > 0 ? [{ href: "/#projects", label: "Projects" }] : []),
  { href: "/#events", label: "Events" },
  ...(team.length > 0 ? [{ href: "/#team", label: "Team" }] : []),
];
