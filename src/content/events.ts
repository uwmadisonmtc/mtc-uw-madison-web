/*
  Events.

  HOW TO ADD AN EVENT
  Copy one of the objects below and change the fields. Nothing else to touch.
  - `date` is "YYYY-MM-DD". An event with a future date is shown as the
    "Next event". The day after, it moves to Past events by itself.
  - If you do not know the exact date of an old event, use `date: null`.
  - `photo` is an id from src/content/photos.ts.
  - `instagramUrl` (optional) makes the past-event card link to that post.
  - `time`, `location`, `url` (optional) are shown for an upcoming event.
*/

export type ChapterEvent = {
  title: string;
  date: string | null;
  photo: string;
  instagramUrl?: string;
  time?: string;
  location?: string;
  url?: string;
};

export const events: ChapterEvent[] = [
  { title: "MTC Kickoff", date: null, photo: "kickoff" },
  { title: "Internship Panel", date: null, photo: "internship-panel" },
  { title: "Professional Development", date: null, photo: "professional-development" },
  { title: "AI Discussion", date: null, photo: "ai-discussion" },
];

export function splitEvents(today: string) {
  const upcoming = events
    .filter((e) => e.date !== null && e.date >= today)
    .sort((a, b) => a.date!.localeCompare(b.date!));
  const past = events
    .filter((e) => e.date === null || e.date < today)
    /* dated events newest first; undated ones keep the order written above */
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return { upcoming, past };
}
