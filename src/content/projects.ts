/*
  Projects.

  `status` is shown on every project so visitors can always tell what is
  finished, what is being built, and what is only planned.
    "shipped"         finished and in use
    "in-development"  being worked on now
    "planned"         an intention, not started
*/

export type ProjectStatus = "shipped" | "in-development" | "planned";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  /** Short label/value facts shown as a spec sheet. */
  facts: { label: string; value: string }[];
  /** Plain-language description of how it works. */
  overview: string[];
  /** What students practise by working on it. */
  learn: string[];
  repo?: string;
  photo?: string;
};

export const projects: Project[] = [
  {
    slug: "nfc-scavenger-hunt",
    title: "NFC Scavenger Hunt",
    status: "in-development",
    summary:
      "A campus scavenger hunt you play by tapping your phone on NFC tags. We are building it ourselves, from the tags to the web app behind them.",
    facts: [
      { label: "Status", value: "In development" },
      { label: "With", value: "CAI Commons at UW–Madison (planned collaboration)" },
      { label: "Format", value: "NFC tags, phones, and a small web app" },
      { label: "Built by", value: "MTC student members" },
    ],
    overview: [
      "NFC tags are small, cheap stickers that a phone can read with a tap. Each tag in the hunt points to a checkpoint in a web app, so players need nothing but the phone they already carry.",
      "The details are still being designed. This page will be updated with documentation and photos as the project takes shape.",
    ],
    learn: [
      "How NFC tags store and deliver data to a phone",
      "Building and deploying a small web app that real people will use",
      "Designing software around a physical space",
      "Working as a team: splitting up work, reviewing code, shipping by a date",
    ],
    photo: "project-nfc",
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-development": "In development",
  planned: "Planned",
};
