/*
  NFC Scavenger Hunt: every fact about the event lives here.

  HOW TO EDIT
  - Values marked TODO are `null`. While a value is `null` the site shows a
    visible placeholder ("TBA", "Registration opens soon"), never a guess.
    Replace `null` with the real value once it is confirmed.
  - `npm run check` lists every TODO that is still `null`.
  - The home page (Projects card, Upcoming banner, Join link) reads this file
    too, so changing the date here changes it everywhere.
*/

export const nfcHunt = {
  name: "NFC Scavenger Hunt",
  pitch: "Tap. Decode. Race the clock.",
  path: "/nfc-hunt",
  host: "Muslim Tech Collaborative (MTC) at UW–Madison",
  supportLine: "Supported by the CAI Commons mini grant.",

  /* "YYYY-MM-DD". The day after, the event moves to Past events by itself. */
  date: "2027-02-03",
  startTime: "5:30 pm",
  /* TODO: end time, e.g. "7:30 pm" (the event runs about 2 hours). */
  endTime: null as string | null,
  building: "Morgridge Hall",
  /* Shown as is until the room is booked, e.g. "Room 1524". */
  room: "Room TBD",

  teamSize: "3–5",
  maxTeams: 15,

  /* TODO: prize details, e.g. "Gift cards for the top three teams." */
  prizes: null as string | null,

  /* TODO: solo-week dates as text, e.g. "Feb 4–10" (planned Feb 4–10). */
  soloDates: null as string | null,
  soloMinStations: 5,
  soloStations: 7,

  /* TODO: the hunt app's /register page. Used only if the live stats below are unavailable. */
  registerUrl: null as string | null,
  /*
    TODO: the hunt app's base URL, e.g. "https://hunt.example.com" (no trailing slash).
    When set, the page reads <huntAppUrl>/api/public/stats for live slot and
    finisher counts and the registration link. If it is unset or the request
    fails, the page simply leaves those numbers out.
  */
  huntAppUrl: null as string | null,

  learn: [
    "What NFC is, and why a tag works without a battery.",
    "What is stored on a tag: the records you can read and write, versus the tag's own ID.",
    "How to read and write tags yourself with the free NFC Tools app.",
    "How to spot a malicious tag before you tap it.",
  ],

  faq: [
    { q: "Do I need experience?", a: "No. The workshop covers everything you need." },
    {
      q: "Which phones work?",
      a: "iPhone XS or newer, and most Android phones. On Android, turn NFC on in your settings.",
    },
    {
      q: "Do I need a team?",
      a: "Yes, teams have 3–5 people. Can't find one? Register anyway and you can join a team with open spots.",
    },
    { q: "Is it free?", a: "Yes." },
    { q: "What do I bring?", a: "A charged phone." },
  ],
};

/* ---- Display helpers: turn a `null` TODO into a visible placeholder. ---- */

export function huntTime() {
  return nfcHunt.endTime
    ? `${nfcHunt.startTime} – ${nfcHunt.endTime}`
    : `${nfcHunt.startTime} – end time TBA (about 2 hours)`;
}

export function huntPlace() {
  return `${nfcHunt.building} · ${nfcHunt.room}`;
}

export function huntPrizes() {
  return nfcHunt.prizes ? `Prizes for the top teams: ${nfcHunt.prizes}` : "Prizes for the top teams. Details TBA.";
}

export function huntSoloWhen() {
  return nfcHunt.soloDates
    ? `for about a week after the event (${nfcHunt.soloDates})`
    : "for about a week after the event (dates TBA)";
}
