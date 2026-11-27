/*
  Projects.

  `status` shows as a small tag on the card:
    "in-progress"  being built now
    "done"         finished
  `photo` is an id from src/content/photos.ts. `url` (optional) makes the
  card link somewhere: a page on this site ("/nfc-hunt") or a live site.
  `label` (optional) replaces the status tag text, e.g. a date.
*/

import { nfcHunt } from "./nfcHunt";
import { dateParts } from "@/lib/today";

const hunt = dateParts(nfcHunt.date);

export type Project = {
  title: string;
  blurb: string;
  status: "in-progress" | "done";
  photo: string;
  url?: string;
  label?: string;
};

export const projects: Project[] = [
  {
    title: nfcHunt.name,
    blurb:
      "A campus scavenger hunt you play by tapping your phone on NFC tags, run through a web app built by MTC members. Planned with the CAI Commons at UW–Madison for February 2027.",
    status: "in-progress",
    photo: "project-nfc",
    label: `${hunt.month.slice(0, 3)} ${hunt.day}, ${hunt.year}`,
    url: nfcHunt.path,
  },
];
