import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { nfcHunt } from "@/content/nfcHunt";
import { dateParts } from "@/lib/today";

/* Share card for /nfc-hunt, in the same style as the site's main card. */
const d = dateParts(nfcHunt.date);
const when = `${d.weekday.slice(0, 3)}, ${d.month.slice(0, 3)} ${d.day}, ${d.year} · ${nfcHunt.building}`;

export const alt = `${nfcHunt.name}. ${nfcHunt.pitch} ${when}.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/assets/brand/mtc-logo-white.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0b0b",
          color: "#ffffff",
        }}
      >
        <img src={src} width={376} height={140} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: -3, lineHeight: 1, color: "#e0242b" }}>
            NFC SCAVENGER HUNT
          </div>
          <div style={{ marginTop: 24, fontSize: 48, fontWeight: 700 }}>{nfcHunt.pitch}</div>
        </div>
        <div style={{ fontSize: 36, color: "rgba(255,255,255,0.8)" }}>{when}</div>
      </div>
    ),
    size,
  );
}
