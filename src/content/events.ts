/*
  Events.

  HOW TO ADD AN EVENT
  Copy one of the objects below, change the fields, save. Nothing else to touch.
  - `date` is "YYYY-MM-DD". Events move from Upcoming to Past on their own
    the day after they happen.
  - If you do not know the exact date of an old event, set `date: null`
    and `held: true`. It is listed under Past without a date.
  - `photo` is an id from src/content/photos.ts (optional).
*/

export type EventKind = "Community" | "Career" | "Discussion" | "Workshop" | "Project";

export type ChapterEvent = {
  slug: string;
  title: string;
  kind: EventKind;
  /** ISO date, or null when the exact date has not been confirmed. */
  date: string | null;
  /** Only for events with `date: null`: true means it already happened. */
  held?: boolean;
  /** e.g. "6:00 PM". Optional. */
  time?: string;
  location?: string;
  summary: string;
  photo?: string;
  /** RSVP or details link. Optional. */
  url?: string;
};

export const events: ChapterEvent[] = [
  {
    slug: "kickoff",
    title: "MTC Kickoff",
    kind: "Community",
    date: null,
    held: true,
    summary:
      "Our first gathering. Students met the chapter, heard what we want to build this year, and stayed to talk.",
    photo: "kickoff",
  },
  {
    slug: "internship-panel",
    title: "Internship Panel",
    kind: "Career",
    date: null,
    held: true,
    summary:
      "Students who have been through recruiting answered questions about finding, landing, and getting the most out of internships.",
    photo: "internship-panel",
  },
  {
    slug: "professional-development",
    title: "Professional Development Night",
    kind: "Career",
    date: null,
    held: true,
    summary:
      "A working session on the practical side of a tech career: resumes, applications, and how to talk about your projects.",
    photo: "professional-development",
  },
  {
    slug: "ai-discussion",
    title: "AI Discussion",
    kind: "Discussion",
    date: null,
    held: true,
    summary:
      "An open conversation about where AI is heading, how students are using it, and what it means for our work and our communities.",
    photo: "ai-discussion",
  },
];

/*
  Things we are planning that do not have a date yet.
  Move an item into `events` above once a date is confirmed.
*/
export const inPlanning: { title: string; note: string }[] = [
  {
    title: "NFC Scavenger Hunt",
    note: "A campus scavenger hunt built on NFC tags, planned in collaboration with the CAI Commons at UW–Madison. In development; no date set.",
  },
  {
    title: "Technical workshops",
    note: "Hands-on sessions taught by students. Topics and dates will be posted here.",
  },
];

export function splitEvents(today: string) {
  const upcoming = events
    .filter((e) => e.date !== null && e.date >= today)
    .sort((a, b) => a.date!.localeCompare(b.date!));
  const past = events
    .filter((e) => (e.date !== null && e.date < today) || (e.date === null && e.held))
    /* dated events newest first, undated ones keep the order written above */
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return { upcoming, past };
}
