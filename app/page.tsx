"use client";

import { useMemo, useState } from "react";

type ChoiceValue = "high" | "medium" | "low";

type Question = {
  id: string;
  title: string;
  description: string;
  choices: {
    label: string;
    value: ChoiceValue;
    score: number;
  }[];
};

const questions: Question[] = [
  {
    id: "marketGrowth",
    title: "이 회사가 속한 시장은 앞으로 크게 성장할 가능성이 있나요?",
    description: "시장 자체가 커지고 있는지 차분하게 점검합니다.",
    choices: [
      { label: "높음", value: "high", score: 20 },
      { label: "보통", value: "medium", score: 10 },
      { label: "낮음", value: "low", score: 0 },
    ],
  },
  {
    id: "companyGrowth",
    title: "이 회사의 매출이나 이익은 앞으로 성장할 가능성이 높나요?",
    description: "회사의 실제 성장 가능성을 간단히 생각해봅니다.",
    choices: [
      { label: "높음", value: "high", score: 20 },
      { label: "보통", value: "medium", score: 10 },
      { label: "낮음", value: "low", score: 0 },
    ],
  },
  {
    id: "competitiveAdvantage",
    title: "이 회사는 경쟁사 대비 뚜렷한 강점이 있나요?",
    description: "기술, 브랜드, 네트워크 효과, 비용 우위 같은 경쟁력을 점검합니다.",
    choices: [
      { label: "높음", value: "high", score: 20 },
      { label: "보통", value: "medium", score: 10 },
      { label: "낮음", value: "low", score: 0 },
    ],
  },
  {
    id: "financialQuality",
    title: "이 회사의 재무 상태는 안정적이고 보기 쉬운 편인가요?",
    description: "부채, 현금흐름, 수익성의 질을 단순하게 확인합니다.",
    choices: [
      { label: "높음", value: "high", score: 20 },
      { label: "보통", value: "medium", score: 10 },
      { label: "낮음", value: "low", score: 0 },
    ],
  },
  {
    id: "entryRisk",
    title: "현재 가격에 이미 기대감이 많이 반영되어 있다고 보나요?",
    description: "좋은 회사라도 너무 비싸게 접근하면 장기 수익률이 낮아질 수 있습니다.",
    choices: [
      { label: "낮음", value: "low", score: 20 },
      { label: "보통", value: "medium", score: 10 },
      { label: "높음", value: "high", score: 0 },
    ],
  },
];

const disclaimer =
  "이 서비스는 투자 추천이 아닙니다. 제공하는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.";

function getResult(score: number) {
  if (score >= 80) {
    return {
      label: "강한 검토 후보",
      interpretation:
        "성장성, 경쟁력, 재무 안정성 측면에서 긍정적인 응답이 많습니다. 다만 높은 점수도 투자 추천은 아니며, 추가 조사할 만한 후보라는 뜻에 가깝습니다.",
    };
  }

  if (score >= 60) {
    return {
      label: "관심 후보",
      interpretation:
        "일부 긍정적인 요소가 있지만 아직 확인해야 할 부분이 남아 있습니다. 실제 판단 전에는 재무 지표, 산업 전망, 가격 부담을 더 점검해야 합니다.",
    };
  }

  if (score >= 40) {
    return {
      label: "추가 근거 필요",
      interpretation:
        "장기 성장 후보로 보기에는 근거가 충분하지 않을 수 있습니다. 성장성이나 경쟁 우위가 분명한지 더 신중하게 확인해보는 편이 좋습니다.",
    };
  }

  return {
    label: "신중 검토 필요",
    interpretation:
      "현재 응답만 기준으로는 장기 성장 후보로 보기 어렵습니다. 관심을 유지하더라도 판단 전에 더 많은 근거가 필요합니다.",
  };
}

export default function Home() {
  const [stockName, setStockName] = useState("");
  const [answers, setAnswers] = useState<Record<string, ChoiceValue>>({});

  const selectedChoices = useMemo(
    () =>
      questions
        .map((question) =>
          question.choices.find((choice) => choice.value === answers[question.id]),
        )
        .filter((choice) => choice !== undefined),
    [answers],
  );

  const score = selectedChoices.reduce((total, choice) => total + choice.score, 0);
  const isComplete = stockName.trim().length > 0 && selectedChoices.length === questions.length;
  const result = getResult(score);

  const strengths = questions
    .filter((question) => {
      const selectedChoice = question.choices.find(
        (choice) => choice.value === answers[question.id],
      );

      return selectedChoice && selectedChoice.score >= 20;
    })
    .map((question) => question.title);

  const cautions = questions
    .filter((question) => {
      const selectedChoice = question.choices.find(
        (choice) => choice.value === answers[question.id],
      );

      return selectedChoice && selectedChoice.score <= 10;
    })
    .map((question) => question.title);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <p className="text-sm font-semibold text-slate-500">텐버거 체크</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            이 종목, 장기 성장 후보일까?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            관심 종목을 입력하고 5가지 기준으로 성장 가능성과 리스크를 스스로 점검해보세요.
            결과는 예측이나 추천이 아니라 다음 리서치를 돕는 교육용 체크리스트입니다.
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
            실제 주가 데이터는 사용하지 않으며, 입력한 종목명은 결과 제목에만 사용합니다.
          </p>
        </section>

        <section className="grid gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-950">성장 후보 체크리스트</h2>
            <p className="mt-2 text-sm text-slate-600">
              각 항목에 가장 가까운 답을 선택하면 총점이 계산됩니다.
            </p>
          </div>

          {questions.map((question, index) => (
            <article
              key={question.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">질문 {index + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold leading-7 text-slate-950">
                    {question.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {question.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:max-w-md">
                {question.choices.map((choice) => {
                  const isSelected = answers[question.id] === choice.value;

                  return (
                    <button
                      key={choice.value}
                      type="button"
                      onClick={() =>
                        setAnswers((currentAnswers) => ({
                          ...currentAnswers,
                          [question.id]: choice.value,
                        }))
                      }
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        isSelected
                          ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-white"
                      }`}
                    >
                      {choice.label}
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">점검 결과</h2>

          {isComplete ? (
            <div className="mt-5 grid gap-6 lg:grid-cols-[220px_1fr]">
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
                    <h3 className="font-semibold text-slate-950">강점으로 볼 수 있는 항목</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {strengths.length > 0
                        ? strengths.join(" / ")
                        : "뚜렷한 강점 항목이 아직 선택되지 않았습니다."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-950">주의해서 볼 항목</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {cautions.length > 0
                        ? cautions.join(" / ")
                        : "현재 답변 기준으로 큰 주의 항목은 적습니다. 그래도 추가 확인은 필요합니다."}
                    </p>
                  </div>
                </div>

                <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 ring-1 ring-amber-200">
                  {disclaimer}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
              종목명을 입력하고 체크리스트에 답하면 점수가 표시됩니다.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-slate-950">중요 안내</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{disclaimer}</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-3">
            <li className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
              실시간 주가 데이터를 사용하지 않습니다.
            </li>
            <li className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
              미래 수익률을 예측하지 않습니다.
            </li>
            <li className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
              매매 판단은 사용자가 직접 해야 합니다.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
