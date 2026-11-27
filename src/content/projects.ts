/*
  Projects.

  Add projects here and the Projects section (and its menu link) appears.
  While the list is empty the section is hidden.

  `status` shows as a small tag on the card:
    "in-progress"  being built now
    "done"         finished
  `photo` is an id from src/content/photos.ts. `url` (optional) makes the
  card link somewhere: a page on this site ("/nfc-hunt") or a live site.
  `label` (optional) replaces the status tag text, e.g. a date.

  Example:
    {
      title: "Project name",
      blurb: "One or two sentences on what it is and who it is for.",
      status: "in-progress",
      photo: "project-name",
    },
*/

export type Project = {
  title: string;
  blurb: string;
  status: "in-progress" | "done";
  photo: string;
  url?: string;
  label?: string;
};

export const projects: Project[] = [];
