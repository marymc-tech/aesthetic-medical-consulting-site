import { ImageResponse } from "next/og";

export const alt = "Aesthetic Medical Consulting — Mary McMillin, MSN, NP-C, FNP-BC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const photo = await readFile(join(process.cwd(), "public/images/mary-mcmillin-portrait-600.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: "linear-gradient(135deg, #f4ece4 0%, #fbf8f4 55%, #e9cdc4 100%)",
        }}
      >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#2e2a28",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#9a6a60", fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
          Scottsdale, Arizona
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 60, lineHeight: 1.05, maxWidth: 700 }}>
            Experienced Medical Direction for Aesthetic and Wellness Practices
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#6b5d54", fontFamily: "Arial, sans-serif" }}>
            Aesthetic Medical Consulting · Mary McMillin, MSN, NP-C, FNP-BC
          </div>
        </div>
      </div>
      <img src={photoSrc} alt="" width={420} height={630} style={{ objectFit: "cover", height: "100%", width: 420 }} />
      </div>
    ),
    { ...size },
  );
}
