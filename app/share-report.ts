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

export const shareSpecificDisclaimer =
  "이 공유 리포트는 사용자가 직접 선택하고 작성한 내용을 바탕으로 생성되었습니다. 텐버거 체크는 해당 종목을 추천하거나 사용자 메모를 검증하지 않습니다.";

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
      "회사가 속한 시장이 앞으로 커질 가능성이 있는지, 회사가 그 안에서 성장할 여지가 있는지 점검합니다.",
    expertPoint:
      "장기 성장 후보는 단순히 유행하는 테마를 고르는 것이 아닙니다. 5~10년 동안 구조적으로 커질 시장 안에서 회사가 실제로 확장할 공간이 있는지가 중요합니다.",
    hints: [
      "시장이 앞으로 몇 년 동안 커질 가능성이 있나요?",
      "일시적 유행이 아니라 구조적 변화와 연결되어 있나요?",
      "회사 매출이 아직 전체 시장에 비해 작아 성장 여지가 있나요?",
      "AI, 반도체, 전력망, 로봇, 보안, 바이오처럼 장기 변화와 연결되어 있나요?",
    ],
    options: standardOptions(15),
    researchSuggestion:
      "시장 규모, 장기 성장률, 산업 리포트, 주요 수요처를 추가로 확인해보세요.",
  },
  {
    id: "growthEvidence",
    title: "성장 증거",
    weight: 20,
    description:
      "좋은 이야기만 있는지, 실제 숫자와 사건으로 성장 근거가 확인되는지 살펴봅니다.",
    expertPoint:
      "성장주는 스토리만으로는 부족합니다. 매출, 수주, 고객, 해외 진출처럼 확인 가능한 증거가 함께 있어야 합니다.",
    hints: [
      "최근 매출이 꾸준히 증가하고 있나요?",
      "신규 고객이나 대형 계약이 있나요?",
      "수주잔고나 판매량 증가가 확인되나요?",
      "새 제품이나 신사업이 실제 매출로 이어지고 있나요?",
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
      "매출이 늘어날 때 이익이 더 빠르게 좋아질 수 있는 사업 구조인지 점검합니다.",
    expertPoint:
      "장기 성장 후보는 매출 증가만으로 충분하지 않은 경우가 많습니다. 매출이 늘수록 영업이익률도 함께 좋아질 수 있는 구조가 중요합니다.",
    hints: [
      "매출 증가와 함께 영업이익률이 개선되고 있나요?",
      "고정비 부담이 줄면 이익률이 좋아질 수 있나요?",
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
      "경쟁사가 쉽게 따라오기 어려운 강점이 있는지 확인합니다.",
    expertPoint:
      "좋은 산업에 있어도 모든 회사가 같은 성과를 내지는 않습니다. 시간이 지나도 유지될 수 있는 기술, 브랜드, 비용, 고객 관계 같은 우위가 필요합니다.",
    hints: [
      "기술 장벽이나 특허가 있나요?",
      "고객이 쉽게 다른 회사로 옮기기 어려운가요?",
      "브랜드, 비용 경쟁력, 점유율 우위가 있나요?",
      "공급망에서 중요한 위치를 차지하고 있나요?",
    ],
    options: standardOptions(15),
    researchSuggestion:
      "경쟁사 비교, 기술 장벽, 고객 유지력, 시장 점유율을 확인해보세요.",
  },
  {
    id: "valuationRisk",
    title: "밸류에이션 부담",
    weight: 15,
    description:
      "좋은 회사라도 이미 너무 비싸게 평가되어 있다면 투자 성과가 낮아질 수 있습니다.",
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
      "시장이 회사를 다시 평가하게 만들 수 있는 구체적 사건이 있는지 봅니다.",
    expertPoint:
      "좋은 회사라도 시장이 알아보지 못하면 오래 기다려야 할 수 있습니다. 신제품, 대형 고객, 실적 전환 같은 촉매가 아이디어를 더 구체적으로 만듭니다.",
    hints: [
      "신제품 출시가 예정되어 있나요?",
      "대형 고객 확보 가능성이 있나요?",
      "흑자 전환이나 이익 급증 가능성이 있나요?",
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
      "좋은 분석은 장점만 보는 것이 아닙니다. 어떤 일이 생기면 투자 아이디어가 약해지는지 미리 정해보는 과정이 중요합니다.",
    hints: [
      "매출 성장 둔화가 나타나면 어떻게 판단할 건가요?",
      "마진이 악화되면 아이디어가 약해지나요?",
      "주요 고객 이탈 가능성은 없나요?",
      "경쟁 심화나 기술 변화 위험은 없나요?",
      "내 생각이 틀렸다는 경고 신호를 명확히 말할 수 있나요?",
    ],
    options: [
      { key: "strong", label: "리스크를 명확히 이해함", score: 10 },
      { key: "partial", label: "일부만 이해함", score: 5 },
      { key: "unclear", label: "거의 평가하지 못함", score: 0 },
    ],
    researchSuggestion:
      "아이디어가 틀렸다고 볼 수 있는 경고 신호를 먼저 정리해보세요.",
  },
];

export function getScoreResult(score: number) {
  if (score >= 80) {
    return {
      label: "강한 검토 후보",
      interpretation:
        "여러 핵심 기준에서 긍정적인 응답이 많습니다. 다만 이 결과는 투자 추천이 아니며, 추가 조사할 만한 후보라는 뜻에 가깝습니다.",
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
        "아이디어가 흥미로울 수 있지만 현재 응답만으로는 근거가 충분하지 않습니다. 테마나 기대감만으로 판단하지 않도록 주의해야 합니다.",
    };
  }

  return {
    label: "신중 검토 필요",
    interpretation:
      "현재 응답만 기준으로는 장기 성장 후보로 보기 어렵습니다. 관심을 유지하더라도 더 많은 근거와 리스크 점검이 필요합니다.",
  };
}

export function encodeShareReport(report: ShareReport) {
  return encodeURIComponent(JSON.stringify(report));
}

export function decodeShareReport(data: string): ShareReport | null {
  try {
    const parsed = JSON.parse(decodeURIComponent(data)) as Partial<ShareReport>;

    if (
      typeof parsed.stockName !== "string" ||
      typeof parsed.score !== "number" ||
      typeof parsed.scoreLabel !== "string" ||
      typeof parsed.interpretation !== "string" ||
      !Array.isArray(parsed.strongestAreas) ||
      !Array.isArray(parsed.weakestAreas) ||
      !Array.isArray(parsed.researchSuggestions) ||
      !Array.isArray(parsed.categoryJudgments) ||
      !Array.isArray(parsed.evidenceMemos) ||
      typeof parsed.createdAt !== "string"
    ) {
      return null;
    }

    return parsed as ShareReport;
  } catch {
    return null;
  }
}
