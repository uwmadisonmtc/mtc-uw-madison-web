import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

/* Card shown when the site is shared on social media or in a chat. */
export const alt = "Muslim Tech Collaborative at UW–Madison. Build with purpose. Find your people.";
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={src} width={564} height={210} alt="" />
          <div style={{ marginTop: 18, fontSize: 84, fontWeight: 900, letterSpacing: -2, color: "#e0242b" }}>
            UW–MADISON
          </div>
        </div>
        <div style={{ fontSize: 40 }}>Build with purpose. Find your people.</div>
      </div>
    ),
    size,
  );
}
