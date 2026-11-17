import generated from "./photos.generated.json";

/*
  Photos.

  Each entry is a "slot" that pages refer to by id. To fill or replace one:
    1. Put the original file in /_incoming and run `npm run photos`
       (see README). It writes a web-ready copy into /public/assets/…
    2. Set `file` below to that path, and write real `alt` text.

  A slot whose file does not exist yet renders as a clearly marked
  "photo needed" box, never as a stock image.
*/

export type PhotoSlot = {
  /** Path under /public, e.g. "/assets/events/kickoff-01.jpg". */
  file: string | null;
  /** Describe what is in the picture for someone who cannot see it. */
  alt: string;
  /**
   * Which part of the photo to keep when it is cropped, as "left% top%".
   * "50% 50%" is the middle (the default); "50% 70%" keeps more of the lower part.
   */
  focus?: string;
  /** What should go here, shown while the slot is empty. */
  brief: string;
};

export const photos = {
  hero: {
    file: "/assets/events/hero.jpg",
    alt: "A speaker at a podium presents a Muslim Tech Collaborative slide to a seated audience in a large hall.",
    focus: "50% 62%",
    brief: "Hero: wide shot of students at an MTC event.",
  },
  "internship-panel": {
    file: "/assets/events/internship-panel.jpg",
    alt: "Four student panelists seated at a table, one speaking into a microphone, at the internship speaker panel.",
    focus: "50% 68%",
    brief: "Internship Panel",
  },
  "professional-development": {
    file: "/assets/events/professional-development.jpg",
    alt: "Rows of students and professionals seated in a ballroom, smiling toward the stage.",
    focus: "50% 70%",
    brief: "Professional Development",
  },
  "ai-discussion": {
    file: "/assets/events/ai-discussion.jpg",
    alt: "Students talking around a table during a discussion on AI.",
    brief: "AI Discussion",
  },
  "project-nfc": { file: null, alt: "", brief: "NFC Scavenger Hunt: a real tag or build session." },
} satisfies Record<string, PhotoSlot>;

export type PhotoId = keyof typeof photos;

type Dimensions = { width: number; height: number; blurDataURL?: string };
const dimensions = generated as Record<string, Dimensions>;

export function getPhoto(id: string) {
  const slot = (photos as Record<string, PhotoSlot>)[id];
  if (!slot) return null;
  const dims = slot.file ? dimensions[slot.file] : undefined;
  return { ...slot, dims: dims ?? null };
}
