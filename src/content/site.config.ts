/*
  Site-wide settings and official links.

  HOW TO EDIT
  - Replace `null` with the real value once it is confirmed.
  - A link left as `null` is "unconfigured": its button is not rendered,
    so the site never ships a dead link. `npm run check:links` lists them.
*/

export const site = {
  name: "Muslim Tech Collaborative",
  shortName: "MTC UW–Madison",
  description:
    "Muslim Tech Collaborative at UW–Madison is a student community that learns technology, builds projects for the community, and grows together.",
  /* Public address of the deployed site. Update when a domain is chosen. */
  url: "https://mtc-uw-madison.vercel.app",
  location: "Madison, Wisconsin",
} as const;

export type LinkKey = "email" | "instagram" | "join" | "calendar" | "github" | "national";

export const links: Record<LinkKey, string | null> = {
  /* Chapter email address, e.g. "name@example.org" (no "mailto:"). */
  email: null,
  /* Full Instagram profile URL. */
  instagram: null,
  /* Membership form, WIN page, or group-chat invite used by "Join MTC". */
  join: null,
  /* Public event calendar (Luma, Google Calendar, WIN events…). */
  calendar: null,
  /* Chapter GitHub. */
  github: "https://github.com/uwmadisonmtc",
  /* National Muslim Tech Collaborative. */
  national: "https://mtc.so",
};

/** mailto: link with an optional subject, or null if no email is configured. */
export function mailto(subject?: string): string | null {
  if (!links.email) return null;
  return `mailto:${links.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

/** Where "Join MTC" goes: the signup link if set, otherwise the Get Involved page. */
export const joinHref: string = links.join ?? "/get-involved";

export const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
] as const;
