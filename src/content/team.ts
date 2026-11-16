/*
  Leadership team.

  Leave the list empty to hide the roster (the About page then shows a short
  paragraph about student leadership instead). Add people only with their
  permission. `photo` is an id from src/content/photos.ts (optional).
*/

export type TeamMember = {
  name: string;
  role: string;
  /** e.g. "Computer Sciences, 2027". Optional. */
  detail?: string;
  photo?: string;
};

export const team: TeamMember[] = [];
