import { cacheLife } from "next/cache";
import { nfcHunt } from "@/content/nfcHunt";

/*
  Live numbers from the hunt app's public stats endpoint.
  The response shape is fixed by the hunt app's design doc; only the fields
  below are read, and anything unexpected means "no stats" (show nothing).
*/

const phases = ["pre", "registration", "locked", "live", "post", "solo", "closed"] as const;
export type HuntPhase = (typeof phases)[number];

export type HuntStats = {
  phase: HuntPhase;
  slotsLeft: number;
  slotsTotal: number;
  soloFinishers: number;
  registerUrl: string | null;
};

const isCount = (v: unknown): v is number => typeof v === "number" && Number.isInteger(v) && v >= 0;
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null;

export function parseHuntStats(data: unknown): HuntStats | null {
  if (!isObj(data)) return null;
  const { phase, teamSlots, solo, registerUrl } = data;
  if (typeof phase !== "string" || !(phases as readonly string[]).includes(phase)) return null;
  if (!isObj(teamSlots) || !isCount(teamSlots.left) || !isCount(teamSlots.total)) return null;
  if (!isObj(solo) || !isCount(solo.finishers)) return null;
  if (registerUrl !== undefined && registerUrl !== null && typeof registerUrl !== "string") return null;
  return {
    phase: phase as HuntPhase,
    slotsLeft: teamSlots.left,
    slotsTotal: teamSlots.total,
    soloFinishers: solo.finishers,
    registerUrl: typeof registerUrl === "string" && /^https?:\/\//.test(registerUrl) ? registerUrl : null,
  };
}

/** Cached for a few minutes; returns null if the app URL is unset or anything goes wrong. */
export async function getHuntStats(): Promise<HuntStats | null> {
  "use cache";
  cacheLife("minutes");
  if (!nfcHunt.huntAppUrl) return null;
  try {
    const res = await fetch(`${nfcHunt.huntAppUrl}/api/public/stats`, {
      signal: AbortSignal.timeout(3000),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    return parseHuntStats(await res.json());
  } catch {
    return null;
  }
}

/** The one-line live count, or null when nothing should be shown. */
export function statsLine(s: HuntStats | null): string | null {
  if (!s) return null;
  if (s.phase === "registration") {
    return s.slotsLeft === 0
      ? `All ${s.slotsTotal} team slots are full`
      : `${s.slotsLeft} of ${s.slotsTotal} team slots left`;
  }
  if ((s.phase === "solo" || s.phase === "closed") && s.soloFinishers > 0) {
    return `${s.soloFinishers} ${s.soloFinishers === 1 ? "student has" : "students have"} finished the hunt`;
  }
  return null;
}

/** Where the Register button goes, or a disabled label. */
export function registerState(s: HuntStats | null): { href: string } | { disabled: string } {
  if (s?.registerUrl) {
    if (s.phase === "registration") return { href: s.registerUrl };
    return { disabled: s.phase === "pre" ? "Registration opens soon" : "Registration closed" };
  }
  if (nfcHunt.registerUrl) return { href: nfcHunt.registerUrl };
  return { disabled: "Registration opens soon" };
}
