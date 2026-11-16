/*
  The four things the chapter does. `now` is what is true today;
  `next` is what we are working toward. Keep them honest.
*/
export const pillars = [
  {
    name: "Build",
    line: "Work on real projects with other students.",
    now: "An NFC scavenger hunt is in development.",
    next: "Semester-long project teams and tools for community organizations.",
  },
  {
    name: "Learn",
    line: "Pick up skills by doing, and by teaching each other.",
    now: "Technical workshops and open discussions, including on AI.",
    next: "A regular run of student-taught, hands-on sessions.",
  },
  {
    name: "Connect",
    line: "Meet people a few steps ahead of you.",
    now: "Internship panels and professional development nights.",
    next: "Alumni conversations, industry speakers, and mentorship.",
  },
  {
    name: "Community",
    line: "Find people who care about technology and about each other.",
    now: "Gatherings where students share what they know and what they are working on.",
    next: "Projects that give something back to the wider Madison community.",
  },
] as const;

/* Ways to take part. Used on Home and Get Involved. */
export const paths = [
  {
    id: "students",
    who: "Students",
    title: "Join the community",
    line: "Come to an event. No experience or application needed.",
  },
  {
    id: "builders",
    who: "Builders",
    title: "Work on a project",
    line: "Help build the scavenger hunt, or bring an idea for a team.",
  },
  {
    id: "professionals",
    who: "Professionals",
    title: "Speak or mentor",
    line: "Share what you have learned with students starting out.",
  },
  {
    id: "organizations",
    who: "Organizations",
    title: "Propose a project",
    line: "Tell us about a problem a student team could help with.",
  },
] as const;
