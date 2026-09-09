import { ImageResponse } from "next/og";

export const alt = "Aesthetic Medical Consulting — Mary McMillin, MSN, NP-C, FNP-BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #f4ece4 0%, #fbf8f4 55%, #e9cdc4 100%)",
          color: "#2e2a28",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#9a6a60", fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
          Scottsdale, Arizona
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, maxWidth: 980 }}>
            Experienced Medical Direction for Aesthetic and Wellness Practices
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#7d6e64", fontFamily: "Arial, sans-serif" }}>
            Aesthetic Medical Consulting · Mary McMillin, MSN, NP-C, FNP-BC
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
