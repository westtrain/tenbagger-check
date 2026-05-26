import { ImageResponse } from "next/og";

import {
  fallbackSharePreviewTitle,
  getSharePreviewStockMeta,
  sharePreviewServiceName,
} from "../../share-preview";
import { getStoredShareReport } from "../../supabase-share-reports";

export const alt = fallbackSharePreviewTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{
    id?: string;
  }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { id } = await params;
  const report = id ? await getStoredShareReport(id) : null;
  const stockName = report?.stock.name ?? "공유 리포트";
  const stockMeta = getSharePreviewStockMeta(report);
  const score = report ? `${report.score}점` : "자기 점검";
  const scoreLabel = report?.scoreLabel ?? "종목 분석 리포트";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#0f172a",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            color: "#475569",
          }}
        >
          <span>{sharePreviewServiceName}</span>
          <span
            style={{
              border: "2px solid #cbd5e1",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 24,
              color: "#334155",
            }}
          >
            공유 리포트
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              maxWidth: 820,
            }}
          >
            <div
              style={{
                fontSize: stockName.length > 18 ? 58 : 76,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: 0,
              }}
            >
              {stockName}
            </div>
            {stockMeta ? (
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#64748b",
                }}
              >
                {stockMeta}
              </div>
            ) : null}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                borderRadius: 24,
                background: "#0f172a",
                color: "#ffffff",
                padding: "22px 30px",
              }}
            >
              <span style={{ fontSize: 68, fontWeight: 900 }}>{score}</span>
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: 999,
                background: "#ffffff",
                padding: "18px 26px",
                fontSize: 34,
                fontWeight: 800,
                color: "#1e293b",
                border: "2px solid #e2e8f0",
              }}
            >
              {scoreLabel}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #e2e8f0",
            paddingTop: 24,
            fontSize: 28,
            fontWeight: 700,
            color: "#475569",
          }}
        >
          <span>혹시 이 종목, 텐버거 후보일까?</span>
          <span>7가지 기준 자기 점검</span>
        </div>
      </div>
    ),
    size,
  );
}
