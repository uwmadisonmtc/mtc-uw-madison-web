import { cacheLife } from "next/cache";

/**
 * Today's date in Madison ("YYYY-MM-DD"), refreshed hourly so events move
 * from Upcoming to Past without anyone redeploying the site.
 */
export async function getToday(): Promise<string> {
  "use cache";
  cacheLife("hours");
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date());
}

const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

/** "2026-11-20" -> parts for display, without time-zone drift. */
export function dateParts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const parts = Object.fromEntries(fmt.formatToParts(d).map((p) => [p.type, p.value]));
  return {
    weekday: parts.weekday,
    month: parts.month,
    day: parts.day,
    year: parts.year,
    full: fmt.format(d),
  };
}
