import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const alt = siteConfig.name;
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
          padding: 80,
          background:
            "linear-gradient(135deg, #050505 0%, #0a0a0a 60%, #0f6b2f 200%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            fontWeight: 700,
            color: "#f7c948",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "linear-gradient(135deg, #d4af37, #8a6a1d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#050505",
              fontWeight: 900,
              fontSize: 26,
            }}
          >
            R
          </div>
          Comunidade RFP Sports
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
              color: "#ffffff",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#22c55e",
                }}
              />
              +1.200 operadores ativos
            </div>
            <div>Comunidade VIP · Telegram</div>
          </div>
          <div
            style={{
              padding: "14px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #d4af37, #f7c948)",
              color: "#050505",
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            Entrar no grupo VIP
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
