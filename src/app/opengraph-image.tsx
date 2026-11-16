import { ImageResponse } from "next/og";

/* Social sharing card. Replace with a real event photo card once photos are in. */
export const alt = "Muslim Tech Collaborative at UW–Madison. Build with purpose. Find your people.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#12261c",
          color: "#f4f1ea",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 26, letterSpacing: 3 }}>
          <span style={{ fontWeight: 700, fontSize: 44, letterSpacing: -2, marginRight: 20 }}>MTC</span>
          <span style={{ color: "#9db8a5" }}>UW–MADISON</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1, letterSpacing: -3 }}>
          <span>Build with purpose.</span>
          <span>Find your people.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: "#9db8a5" }}>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: "#9db8a5" }} />
          <div style={{ width: 120, height: 2, background: "#9db8a5" }} />
          <div style={{ width: 22, height: 22, borderRadius: 11, border: "2px solid #9db8a5", marginRight: 24 }} />
          Muslim Tech Collaborative · University of Wisconsin–Madison
        </div>
      </div>
    ),
    size,
  );
}
