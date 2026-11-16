import generated from "./photos.generated.json";

/*
  Photos.

  Each entry is a "slot" that pages refer to by id. To fill or replace one:
    1. Put the original file in /_incoming and run `npm run photos`
       (see README). It writes a web-ready copy into /public/assets/…
    2. Set `file` below to that path, and write real `alt` text and a caption.

  A slot whose file does not exist yet renders as a clearly marked
  "photo needed" box, never as a stock image.
*/

export type PhotoSlot = {
  /** Path under /public, e.g. "/assets/events/kickoff-01.jpg". */
  file: string | null;
  /** Describe what is in the picture for someone who cannot see it. */
  alt: string;
  /** Short caption shown under the photo. Optional. */
  caption?: string;
  /** What should go here, shown while the slot is empty. */
  brief: string;
};

export const photos = {
  hero: {
    file: null,
    alt: "",
    brief: "Hero: students talking or working together at an MTC event. Landscape or 4:5.",
  },
  kickoff: {
    file: null,
    alt: "",
    brief: "MTC Kickoff: the room, wide shot.",
  },
  "internship-panel": {
    file: null,
    alt: "",
    brief: "Internship Panel: panelists or audience.",
  },
  "professional-development": {
    file: null,
    alt: "",
    brief: "Professional Development: students working together.",
  },
  "ai-discussion": {
    file: null,
    alt: "",
    brief: "AI Discussion: the group mid-conversation.",
  },
  "community-1": {
    file: null,
    alt: "",
    brief: "Candid: small group talking.",
  },
  "community-2": {
    file: null,
    alt: "",
    brief: "Candid: food, setup, or in-between moment.",
  },
  "about-group": {
    file: null,
    alt: "",
    brief: "About: group photo of the chapter.",
  },
  "project-nfc": {
    file: null,
    alt: "",
    brief: "NFC Scavenger Hunt: a real tag, prototype, or build session. No mock-ups.",
  },
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
