import type { StockMetadata } from "./stocks";

export type AnswerKey = "strong" | "partial" | "unclear" | "low" | "normal" | "high";

export type ChecklistOption = {
  key: AnswerKey;
  label: string;
  score: number;
};

export type ChecklistCard = {
  id: string;
  title: string;
  weight: number;
  description: string;
  expertPoint: string;
  hints: string[];
  options: ChecklistOption[];
  researchSuggestion: string;
};

export type CategoryJudgment = {
  id: string;
  title: string;
  selectedLabel: string;
  score: number;
  weight: number;
};

export type EvidenceMemo = {
  id: string;
  title: string;
  memo: string;
};

export type ShareReport = {
  stock: StockMetadata;
  stockName: string;
  score: number;
  scoreLabel: string;
  interpretation: string;
  strongestAreas: string[];
  weakestAreas: string[];
  researchSuggestions: string[];
  categoryJudgments: CategoryJudgment[];
  evidenceMemos: EvidenceMemo[];
  createdAt: string;
};

export const memoMaxLength = 200;

export const investmentDisclaimer =
  "이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.";

export const dataLimitationNotice =
  "이 결과는 사용자가 직접 선택하고 작성한 내용을 바탕으로 계산됩니다. 실제 주가, 재무제표, 뉴스, 공시 데이터는 자동 반영되지 않습니다.";

export const shareSpecificDisclaimer =
  "공유 리포트는 작성자가 직접 선택하고 작성한 내용을 보여줍니다. 텐버거 체크는 해당 종목을 추천하거나 작성자의 메모를 검증하지 않습니다.";

const standardOptions = (fullScore: number): ChecklistOption[] => [
  { key: "strong", label: "강하게 확인됨", score: fullScore },
  { key: "partial", label: "일부 확인됨", score: Math.ceil(fullScore / 2) },
  { key: "unclear", label: "아직 불확실함", score: 0 },
];

export const checklistCards: ChecklistCard[] = [
  {
    id: "marketOpportunity",
    title: "시장 기회",
    weight: 15,
    description:
      "회사가 속한 시장이 앞으로 커질 가능성이 있고, 그 안에서 회사가 성장할 여지가 있는지 점검합니다.",
    expertPoint:
      "장기 성장 후보는 단순히 유행하는 테마가 아니라 구조적으로 커지는 시장 안에서 확인되어야 합니다.",
    hints: [
      "시장이 몇 년 동안 커질 가능성이 있나요?",
      "일시적 유행이 아니라 구조적 변화와 연결되어 있나요?",
      "회사의 현재 매출 규모가 전체 시장에 비해 작아 성장 여지가 있나요?",
      "AI, 반도체, 전력망, 로봇, 보안, 바이오처럼 장기 변화와 연결되어 있나요?",
    ],
    options: standardOptions(15),
    researchSuggestion:
      "시장 규모, 장기 성장률, 주요 수요처, 산업 리포트를 추가로 확인해보세요.",
  },
  {
    id: "growthEvidence",
    title: "성장 증거",
    weight: 20,
    description:
      "좋은 이야기만 있는지, 실제 숫자와 사건으로 성장 근거가 확인되는지 살펴봅니다.",
    expertPoint:
      "성장주는 스토리만으로 충분하지 않습니다. 매출, 수주, 고객, 해외 진출처럼 확인 가능한 증거가 필요합니다.",
    hints: [
      "최근 매출이 꾸준히 늘고 있나요?",
      "신규 고객이나 대형 계약이 있나요?",
      "수주잔고나 판매량 증가가 확인되나요?",
      "새 제품이나 서비스가 실제 매출로 이어지고 있나요?",
    ],
    options: standardOptions(20),
    researchSuggestion:
      "최근 매출 추이, 수주잔고, 신규 고객, 실적 발표 자료를 확인해보세요.",
  },
  {
    id: "profitLeverage",
    title: "이익 레버리지",
    weight: 15,
    description:
      "매출이 늘어날 때 이익률도 함께 좋아질 수 있는 사업 구조인지 점검합니다.",
    expertPoint:
      "장기 성장 후보는 매출 증가뿐 아니라 영업이익률 개선 여지도 함께 봐야 합니다.",
    hints: [
      "매출 증가와 함께 영업이익률이 개선되고 있나요?",
      "고정비 부담이 줄어들면 이익률이 좋아질 수 있나요?",
      "규모의 경제가 작동하는 사업인가요?",
      "가격 결정력이나 원가 절감 여지가 있나요?",
    ],
    options: standardOptions(15),
    researchSuggestion:
      "영업이익률 변화, 원가 구조, 고정비 비중, 가격 결정력을 확인해보세요.",
  },
  {
    id: "competitiveAdvantage",
    title: "경쟁 우위",
    weight: 15,
    description:
      "경쟁사가 쉽게 따라오기 어려운 기술, 브랜드, 고객 관계, 비용 우위가 있는지 확인합니다.",
    expertPoint:
      "좋은 산업에서도 모든 회사가 같은 성과를 내지는 않습니다. 시간이 지나도 지켜질 수 있는 우위가 중요합니다.",
    hints: [
      "기술 장벽이나 특허가 있나요?",
      "고객이 다른 회사로 옮기기 어려운 이유가 있나요?",
      "브랜드, 비용 경쟁력, 공급망 우위가 있나요?",
      "동종 기업과 비교해 분명한 차별점이 있나요?",
    ],
    options: standardOptions(15),
    researchSuggestion:
      "경쟁사 비교, 기술 장벽, 고객 유지율, 시장 점유율을 확인해보세요.",
  },
  {
    id: "valuationRisk",
    title: "밸류에이션 부담",
    weight: 15,
    description:
      "좋은 회사라도 이미 기대가 많이 반영되어 있다면 진입 리스크가 커질 수 있습니다.",
    expertPoint:
      "좋은 회사와 좋은 진입 조건은 다릅니다. 시장 기대가 현재 가격에 얼마나 반영되어 있는지 차분히 확인해야 합니다.",
    hints: [
      "최근 가격이 이미 크게 올랐나요?",
      "PER, PSR, PBR 같은 지표가 과거보다 높아졌나요?",
      "동종 업계와 비교해 과도하게 비싸 보이나요?",
      "실적이 조금만 흔들려도 하락 위험이 커질 수 있나요?",
    ],
    options: [
      { key: "low", label: "부담 낮음", score: 15 },
      { key: "normal", label: "보통", score: 8 },
      { key: "high", label: "부담 높음", score: 0 },
    ],
    researchSuggestion:
      "현재 밸류에이션, 과거 평균, 동종 업계 비교, 기대 반영 정도를 확인해보세요.",
  },
  {
    id: "catalysts",
    title: "촉매",
    weight: 10,
    description:
      "시장이 회사를 다시 평가하게 만들 수 있는 구체적 사건이 있는지 살펴봅니다.",
    expertPoint:
      "좋은 회사라도 시장이 알아보기까지 시간이 걸릴 수 있습니다. 실적 전환, 제품 출시, 대형 고객 같은 촉매를 확인하세요.",
    hints: [
      "신제품 출시나 사업 일정이 예정되어 있나요?",
      "대형 고객 확보 가능성이 있나요?",
      "적자 축소나 이익 급증 가능성이 있나요?",
      "산업 사이클 회복이나 공급 부족 요인이 있나요?",
    ],
    options: standardOptions(10),
    researchSuggestion:
      "신제품 일정, 실적 변곡점, 대형 고객, 산업 사이클 회복 가능성을 확인해보세요.",
  },
  {
    id: "riskCheck",
    title: "리스크와 반증 조건",
    weight: 10,
    description:
      "내 생각이 틀렸다고 판단해야 할 신호가 무엇인지 미리 정리합니다.",
    expertPoint:
      "좋은 분석은 장점만 보지 않습니다. 어떤 일이 생기면 아이디어가 약해지는지 미리 정해두는 과정이 중요합니다.",
    hints: [
      "매출 성장 둔화가 나타나면 어떻게 판단할 건가요?",
      "마진이 악화되면 아이디어가 약해지나요?",
      "주요 고객 이탈 가능성은 없나요?",
      "경쟁 심화나 기술 변화 위험은 없나요?",
      "내 생각이 틀렸다는 경고 신호를 말할 수 있나요?",
    ],
    options: [
      { key: "strong", label: "리스크를 명확히 이해함", score: 10 },
      { key: "partial", label: "일부만 이해함", score: 5 },
      { key: "unclear", label: "거의 점검하지 못함", score: 0 },
    ],
    researchSuggestion:
      "아이디어가 약해진다고 볼 수 있는 경고 신호를 먼저 정리해보세요.",
  },
];

export function getScoreResult(score: number) {
  if (score >= 80) {
    return {
      label: "강한 검토 후보",
      interpretation:
        "여러 핵심 기준에서 긍정적인 답변이 많습니다. 다만 이 결과는 투자 추천이 아니며, 추가 조사를 해볼 만한 후보라는 의미에 가깝습니다.",
    };
  }

  if (score >= 60) {
    return {
      label: "관심 후보",
      interpretation:
        "일부 매력적인 요소가 있지만 아직 확인해야 할 부분이 남아 있습니다. 약한 항목을 중심으로 추가 조사가 필요합니다.",
    };
  }

  if (score >= 40) {
    return {
      label: "추가 근거 필요",
      interpretation:
        "아이디어가 흥미로울 수는 있지만 현재 답변만으로는 근거가 충분하지 않습니다. 테마나 기대감만으로 판단하지 않도록 주의해야 합니다.",
    };
  }

  return {
    label: "신중 검토 필요",
    interpretation:
      "현재 답변만 기준으로는 장기 성장 후보로 보기 어렵습니다. 관심을 유지하더라도 더 많은 근거와 리스크 점검이 필요합니다.",
  };
}

export function encodeShareReport(report: ShareReport) {
  return encodeURIComponent(JSON.stringify(report));
}

function parseShareReportData(data: string): Partial<ShareReport> | null {
  try {
    return JSON.parse(data) as Partial<ShareReport>;
  } catch {
    try {
      return JSON.parse(decodeURIComponent(data)) as Partial<ShareReport>;
    } catch {
      return null;
    }
  }
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isStockMetadata(value: unknown): value is StockMetadata {
  if (!value || typeof value !== "object") {
    return false;
  }

  const stock = value as Partial<StockMetadata>;

  return (
    typeof stock.id === "string" &&
    typeof stock.name === "string" &&
    typeof stock.ticker === "string" &&
    typeof stock.market === "string"
  );
}

export function decodeShareReport(data: string): ShareReport | null {
  const parsed = parseShareReportData(data);

  if (!parsed) {
    return null;
  }

  try {
    const legacyStockName = typeof parsed.stockName === "string" ? parsed.stockName : "";
    const stock = isStockMetadata(parsed.stock)
      ? parsed.stock
      : legacyStockName
        ? {
            id: "legacy-shared-stock",
            name: legacyStockName,
            ticker: "공유 링크",
            market: "이전 형식",
          }
        : null;

    if (
      !stock ||
      typeof parsed.score !== "number" ||
      typeof parsed.scoreLabel !== "string" ||
      typeof parsed.interpretation !== "string" ||
      !isStringArray(parsed.strongestAreas) ||
      !isStringArray(parsed.weakestAreas) ||
      !isStringArray(parsed.researchSuggestions) ||
      !Array.isArray(parsed.categoryJudgments) ||
      !Array.isArray(parsed.evidenceMemos) ||
      typeof parsed.createdAt !== "string"
    ) {
      return null;
    }

    return {
      stock,
      stockName: legacyStockName || stock.name,
      score: parsed.score,
      scoreLabel: parsed.scoreLabel,
      interpretation: parsed.interpretation,
      strongestAreas: parsed.strongestAreas,
      weakestAreas: parsed.weakestAreas,
      researchSuggestions: parsed.researchSuggestions,
      categoryJudgments: parsed.categoryJudgments,
      evidenceMemos: parsed.evidenceMemos,
      createdAt: parsed.createdAt,
    };
  } catch {
    return null;
  }
}
