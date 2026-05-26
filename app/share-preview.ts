import type { ShareReport } from "./share-report";

export const sharePreviewServiceName = "나만의 종목 분석";
export const fallbackSharePreviewTitle = "나만의 종목 분석 공유 리포트";
export const fallbackSharePreviewDescription =
  "7가지 기준으로 작성한 종목 판단 리포트입니다.";

export function getSharePreviewTitle(report: ShareReport | null) {
  return report ? `${report.stock.name} 종목 분석 리포트` : fallbackSharePreviewTitle;
}

export function getSharePreviewDescription(report: ShareReport | null) {
  return report
    ? `${report.score}점 · ${report.scoreLabel} | 나만의 종목 분석에서 작성한 자기 점검 리포트입니다.`
    : fallbackSharePreviewDescription;
}

export function getSharePreviewStockMeta(report: ShareReport | null) {
  if (!report || report.stock.isCustom) {
    return "";
  }

  return `${report.stock.ticker} · ${report.stock.market}`;
}
