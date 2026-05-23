"use client";

import { useMemo, useState } from "react";

type AnswerKey = "strong" | "partial" | "unclear" | "low" | "normal" | "high";

type ChecklistOption = {
  key: AnswerKey;
  label: string;
  score: number;
};

type ChecklistCard = {
  id: string;
  title: string;
  weight: number;
  description: string;
  expertPoint: string;
  hints: string[];
  options: ChecklistOption[];
  researchSuggestion: string;
};

const standardOptions = (fullScore: number): ChecklistOption[] => [
  { key: "strong", label: "강하게 확인됨", score: fullScore },
  { key: "partial", label: "일부 확인됨", score: Math.ceil(fullScore / 2) },
  { key: "unclear", label: "아직 불확실함", score: 0 },
];

const checklistCards: ChecklistCard[] = [
  {
    id: "marketOpportunity",
    title: "시장 기회",
    weight: 15,
    description:
      "회사가 속한 시장이 앞으로 더 커질 수 있는지, 그리고 회사가 그 안에서 성장할 여지가 있는지 점검합니다.",
    expertPoint:
      "장기 성장 후보는 단순히 유행하는 테마에 속했다는 이유만으로 충분하지 않습니다. 5~10년 동안 구조적으로 커질 수 있는 시장 안에서 회사가 실제로 확장할 공간이 있는지가 중요합니다.",
    hints: [
      "시장이 앞으로 몇 년 동안 커질 가능성이 있나요?",
      "단기 유행이 아니라 구조적 변화와 연결되어 있나요?",
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
      "성장주는 스토리만으로는 부족합니다. 매출, 수주, 고객 수, 신제품, 해외 진출처럼 확인 가능한 증거가 함께 있어야 합니다.",
    hints: [
      "최근 매출이 꾸준히 증가하고 있나요?",
      "신규 고객이나 대형 계약이 확인되나요?",
      "수주잔고나 판매량 증가가 보이나요?",
      "신제품이나 신사업이 실제 매출로 이어지고 있나요?",
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
      "매출이 늘어날 때 이익이 더 빠르게 늘어날 수 있는 사업 구조인지 점검합니다.",
    expertPoint:
      "큰 폭의 장기 성장은 매출 증가만으로는 부족한 경우가 많습니다. 매출이 늘수록 영업이익률도 함께 좋아지는 구조가 중요합니다.",
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
      "좋은 산업에 있다고 해서 모든 회사가 같은 성과를 내지는 않습니다. 시간이 지나도 유지될 수 있는 기술, 브랜드, 비용, 고객 관계 같은 우위가 필요합니다.",
    hints: [
      "기술 장벽이나 특허가 있나요?",
      "고객이 쉽게 다른 회사로 옮기기 어려운가요?",
      "브랜드, 원가 경쟁력, 점유율 우위가 있나요?",
      "공급망에서 중요한 위치를 차지하고 있나요?",
    ],
    options: standardOptions(15),
    researchSuggestion:
      "경쟁사 비교, 기술 장벽, 고객 고착도, 시장 점유율을 확인해보세요.",
  },
  {
    id: "valuationRisk",
    title: "밸류에이션 부담",
    weight: 15,
    description:
      "좋은 회사라도 이미 너무 비싸게 평가되어 있다면 투자 성과가 낮아질 수 있습니다.",
    expertPoint:
      "좋은 회사와 좋은 진입 조건은 다릅니다. 시장의 기대가 현재 가격에 얼마나 반영되어 있는지 차분히 확인해야 합니다.",
    hints: [
      "최근 주가가 이미 크게 올랐나요?",
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
      "현재 밸류에이션, 과거 평균, 동종 업계 비교, 기대감 반영 정도를 확인해보세요.",
  },
  {
    id: "catalysts",
    title: "촉매",
    weight: 10,
    description:
      "시장이 회사를 다시 평가하게 만들 수 있는 구체적 사건이 있는지 봅니다.",
    expertPoint:
      "좋은 회사라도 시장이 알아보지 못하면 오랜 시간이 필요할 수 있습니다. 신제품, 대형 고객, 실적 전환 같은 촉매는 투자 아이디어를 더 구체적으로 만들어 줍니다.",
    hints: [
      "신제품 출시가 예정되어 있나요?",
      "대형 고객 확보 가능성이 있나요?",
      "흑자 전환이나 이익 급증 가능성이 있나요?",
      "산업 사이클 회복이나 공급 부족 흐름이 있나요?",
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
      "좋은 분석은 장점만 보는 것이 아닙니다. 어떤 일이 생기면 투자 아이디어가 약해지는지 미리 정해두는 과정이 중요합니다.",
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
      { key: "unclear", label: "거의 점검하지 못함", score: 0 },
    ],
    researchSuggestion:
      "아이디어가 틀렸다고 볼 수 있는 경고 신호를 먼저 정리해보세요.",
  },
];

const disclaimer =
  "이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.";

const noDataNotices = [
  "실시간 주가 데이터를 사용하지 않습니다.",
  "재무제표를 자동 분석하지 않습니다.",
  "AI 분석이나 외부 주식 API를 사용하지 않습니다.",
  "미래 수익률을 예측하지 않습니다.",
  "점수는 사용자의 자기 평가에만 기반합니다.",
];

const memoPlaceholder =
  "이 항목에서 그렇게 판단한 근거를 간단히 적어보세요. 예: 최근 매출 성장, 신규 고객, 밸류에이션 부담, 주요 리스크 등";

function getScoreResult(score: number) {
  if (score >= 80) {
    return {
      label: "강한 검토 후보",
      interpretation:
        "여러 핵심 기준에서 긍정적인 답변이 많습니다. 다만 이 결과는 예측이나 권유가 아니며, 더 깊은 자료 확인이 필요한 후보라는 뜻에 가깝습니다.",
    };
  }

  if (score >= 60) {
    return {
      label: "관심 후보",
      interpretation:
        "일부 매력적인 요소가 있지만 아직 확인해야 할 부분이 남아 있습니다. 약한 영역을 중심으로 추가 조사를 진행하는 것이 좋습니다.",
    };
  }

  if (score >= 40) {
    return {
      label: "추가 근거 필요",
      interpretation:
        "아이디어는 흥미로울 수 있지만 현재 답변만으로는 근거가 충분하지 않습니다. 테마나 최근 분위기만으로 판단하지 않도록 주의가 필요합니다.",
    };
  }

  return {
    label: "신중 검토 필요",
    interpretation:
      "현재 답변 기준으로는 장기 성장 후보로 보기 어렵습니다. 관심을 유지하더라도 더 많은 근거와 리스크 점검이 필요합니다.",
  };
}

export default function Home() {
  const [stockName, setStockName] = useState("");
  const [answers, setAnswers] = useState<Record<string, AnswerKey>>({});
  const [memos, setMemos] = useState<Record<string, string>>({});

  const answeredCards = checklistCards
    .map((card) => {
      const selectedKey = answers[card.id];
      const selectedOption = card.options.find((option) => option.key === selectedKey);

      return selectedOption ? { card, selectedOption } : undefined;
    })
    .filter((answer): answer is { card: ChecklistCard; selectedOption: ChecklistOption } =>
      Boolean(answer),
    );

  const score = useMemo(
    () => answeredCards.reduce((total, answer) => total + answer.selectedOption.score, 0),
    [answeredCards],
  );

  const isComplete =
    stockName.trim().length > 0 && answeredCards.length === checklistCards.length;
  const result = getScoreResult(score);

  const strongestAreas = answeredCards
    .filter(({ card, selectedOption }) => selectedOption.score / card.weight >= 0.8)
    .map(({ card }) => card.title);

  const weakestAreas = answeredCards
    .filter(({ card, selectedOption }) => selectedOption.score / card.weight <= 0.5)
    .map(({ card }) => card.title);

  const researchSuggestions = checklistCards
    .filter((card) => weakestAreas.includes(card.title))
    .map((card) => card.researchSuggestion);

  const writtenMemos = checklistCards
    .map((card) => {
      const memo = memos[card.id]?.trim();

      return memo ? { cardTitle: card.title, memo } : undefined;
    })
    .filter((memo): memo is { cardTitle: string; memo: string } => Boolean(memo));

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <p className="text-sm font-semibold text-slate-500">텐버거 체크</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            이 종목, 장기 성장 후보일까?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            관심 종목을 입력하고, 경험 많은 투자자들이 자주 확인하는 7가지 기준으로
            성장 가능성과 리스크를 스스로 점검해보세요.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <label htmlFor="stockName" className="text-base font-semibold text-slate-900">
            관심 종목
          </label>
          <input
            id="stockName"
            type="text"
            value={stockName}
            onChange={(event) => setStockName(event.target.value)}
            placeholder="예: 삼성전자, SK하이닉스, NVIDIA"
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-slate-700 focus:ring-4 focus:ring-slate-200"
          />
          <p className="mt-3 text-sm leading-6 text-slate-500">
            실제 주가 데이터는 사용하지 않으며, 입력한 종목명은 결과 제목에만 사용됩니다.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">7가지 성장 후보 점검 프레임워크</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            텐버거 후보는 단순히 인기 있는 테마에 속해 있다고 만들어지지 않습니다. 시장
            기회, 실제 성장 증거, 이익 레버리지, 경쟁 우위, 밸류에이션 부담, 촉매,
            그리고 리스크와 반증 조건을 함께 살펴봐야 합니다.
          </p>
        </section>

        <section className="grid gap-4">
          {checklistCards.map((card, index) => (
            <article
              key={card.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    기준 {index + 1} · {card.weight}점
                  </p>
                  <h3 className="mt-1 text-xl font-bold leading-7 text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900">
                    고수들이 보는 포인트
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.expertPoint}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900">확인 힌트</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    {card.hints.map((hint) => (
                      <li key={hint} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {card.options.map((option) => {
                  const isSelected = answers[card.id] === option.key;

                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() =>
                        setAnswers((currentAnswers) => ({
                          ...currentAnswers,
                          [card.id]: option.key,
                        }))
                      }
                      className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        isSelected
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5">
                <label
                  htmlFor={`memo-${card.id}`}
                  className="text-sm font-semibold text-slate-900"
                >
                  판단 근거 메모
                </label>
                <textarea
                  id={`memo-${card.id}`}
                  value={memos[card.id] ?? ""}
                  onChange={(event) =>
                    setMemos((currentMemos) => ({
                      ...currentMemos,
                      [card.id]: event.target.value,
                    }))
                  }
                  placeholder={memoPlaceholder}
                  rows={3}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-700 focus:ring-4 focus:ring-slate-200"
                />
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">자기 점검 결과</h2>

          {isComplete ? (
            <div className="mt-5 grid gap-6 lg:grid-cols-[240px_1fr]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">{stockName.trim()}</p>
                <p className="mt-3 text-5xl font-bold tracking-tight text-slate-950">
                  {score}
                  <span className="text-xl font-semibold text-slate-500">/100</span>
                </p>
                <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 ring-1 ring-slate-200">
                  {result.label}
                </p>
              </div>

              <div className="space-y-5">
                <p className="leading-7 text-slate-700">{result.interpretation}</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-950">강점 영역</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {strongestAreas.length > 0
                        ? strongestAreas.join(" / ")
                        : "뚜렷한 강점 영역은 아직 확인되지 않았습니다."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-950">약점 영역</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {weakestAreas.length > 0
                        ? weakestAreas.join(" / ")
                        : "현재 답변 기준으로 큰 약점은 적어 보입니다. 그래도 외부 자료로 사실을 확인해보세요."}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">추가 조사 제안</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    {(researchSuggestions.length > 0
                      ? researchSuggestions
                      : [
                          "추가로 재무제표, 산업 리포트, 실적 발표 자료, 경쟁사 비교를 확인해보세요.",
                        ]
                    ).map((suggestion) => (
                      <li key={suggestion} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">내 판단 근거</h3>
                  {writtenMemos.length > 0 ? (
                    <div className="mt-3 space-y-3">
                      {writtenMemos.map(({ cardTitle, memo }) => (
                        <div key={cardTitle} className="rounded-lg bg-slate-50 p-3">
                          <p className="text-sm font-semibold text-slate-900">{cardTitle}</p>
                          <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                            {memo}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      아직 작성한 판단 근거 메모가 없습니다.
                    </p>
                  )}
                </div>

                <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 ring-1 ring-amber-200">
                  {disclaimer}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
              종목명을 입력하고 7가지 기준을 모두 점검하면 결과가 표시됩니다.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-slate-950">중요 안내</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{disclaimer}</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
            {noDataNotices.map((notice) => (
              <li key={notice} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                {notice}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
