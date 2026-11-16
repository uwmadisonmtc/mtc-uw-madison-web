/*
  Projects.

  `status` shows as a small tag on the card:
    "in-progress"  being built now
    "done"         finished
  `photo` is an id from src/content/photos.ts. `url` (optional) makes the
  card link somewhere, e.g. a live site.
*/

export type Project = {
  title: string;
  blurb: string;
  status: "in-progress" | "done";
  photo: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "NFC Scavenger Hunt",
    blurb:
      "A campus scavenger hunt you play by tapping your phone on NFC tags. Planned in collaboration with the CAI Commons at UW–Madison.",
    status: "in-progress",
    photo: "project-nfc",
  },
];
