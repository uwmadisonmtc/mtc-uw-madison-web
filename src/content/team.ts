/*
  Team.

  Add board members here and the Team section (and its menu link) appears.
  While the list is empty the section is hidden.
  `photo` is an id from src/content/photos.ts; add a matching slot there.

  Example:
    { name: "First Last", role: "President", photo: "team-first-last" },
*/

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

export const team: TeamMember[] = [];
