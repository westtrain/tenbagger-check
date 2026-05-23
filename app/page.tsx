"use client";

import { useMemo, useState } from "react";
import {
  type AnswerKey,
  type CategoryJudgment,
  type ShareReport,
  authorSummaryMaxLength,
  checklistCards,
  dataLimitationNotice,
  encodeShareReport,
  getScoreResult,
  investmentDisclaimer,
  memoMaxLength,
} from "./share-report";
import {
  type StockMetadata,
  createCustomStock,
  customStockNameMaxLength,
  searchStocks,
} from "./stocks";

const noDataNotices = [
  "실시간 주가 데이터는 사용하지 않습니다.",
  "재무제표를 자동 분석하지 않습니다.",
  "미래 수익률을 예측하지 않습니다.",
  "점수는 사용자의 자기 평가에만 기반합니다.",
];

const memoPlaceholder =
  "이 항목에서 그렇게 판단한 이유를 간단히 적어보세요. 예: 최근 매출 성장, 신규 고객, 밸류에이션 부담, 주요 리스크 요인";

const memoTextClassName =
  "whitespace-pre-wrap break-words break-all text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]";
const stockNameTextClassName = "break-words break-all [overflow-wrap:anywhere]";
const authorSummaryPlaceholder =
  "이 종목을 종합적으로 어떻게 보고 있는지 적어보세요. 예: 강점은 있지만 밸류에이션 부담이 있어 추가 확인이 필요함";
const authorSummaryEmptyText = "작성된 총평이 없습니다.";

function StockBadge({ stock }: { stock: StockMetadata }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">선택된 종목</p>
      <p className={`mt-2 text-lg font-bold text-slate-950 ${stockNameTextClassName}`}>
        {stock.name}
      </p>
      {!stock.isCustom ? (
        <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
          <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
            {stock.ticker}
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
            {stock.market}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStock, setSelectedStock] = useState<StockMetadata | null>(null);
  const [answers, setAnswers] = useState<Record<string, AnswerKey>>({});
  const [memos, setMemos] = useState<Record<string, string>>({});
  const [authorSummary, setAuthorSummary] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [manualShareLink, setManualShareLink] = useState("");

  const stockResults = useMemo(() => searchStocks(searchQuery), [searchQuery]);
  const trimmedSearchQuery = searchQuery.trim();
  const customStockNameLength = trimmedSearchQuery.length;
  const canUseCustomStock =
    customStockNameLength > 0 && customStockNameLength <= customStockNameMaxLength;
  const customStockNameIsTooLong = customStockNameLength > customStockNameMaxLength;

  const answeredCards = checklistCards
    .map((card) => {
      const selectedKey = answers[card.id];
      const selectedOption = card.options.find((option) => option.key === selectedKey);

      return selectedOption ? { card, selectedOption } : undefined;
    })
    .filter((answer): answer is NonNullable<typeof answer> => Boolean(answer));

  const score = useMemo(
    () => answeredCards.reduce((total, answer) => total + answer.selectedOption.score, 0),
    [answeredCards],
  );

  const isComplete = selectedStock !== null && answeredCards.length === checklistCards.length;
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

  const displayedResearchSuggestions =
    researchSuggestions.length > 0
      ? researchSuggestions
      : [
          "재무제표, 산업 리포트, 실적 발표 자료, 경쟁사 비교를 통해 직접 작성한 판단을 다시 확인해보세요.",
        ];

  const writtenMemos = checklistCards
    .map((card) => {
      const memo = memos[card.id]?.trim();

      return memo ? { id: card.id, title: card.title, memo } : undefined;
    })
    .filter((memo): memo is NonNullable<typeof memo> => Boolean(memo));
  const trimmedAuthorSummary = authorSummary.trim();

  function handleSelectStock(stock: StockMetadata) {
    setSelectedStock(stock);
    setSearchQuery(`${stock.name} ${stock.ticker}`);
  }

  function handleUseCustomStock() {
    if (!canUseCustomStock) {
      return;
    }

    const customStock = createCustomStock(searchQuery);
    if (!customStock) {
      return;
    }

    setSelectedStock(customStock);
    setSearchQuery(customStock.name);
  }

  function buildShareReport(): ShareReport {
    const categoryJudgments: CategoryJudgment[] = checklistCards.map((card) => {
      const selectedOption = card.options.find((option) => option.key === answers[card.id]);

      return {
        id: card.id,
        title: card.title,
        selectedLabel: selectedOption?.label ?? "선택 없음",
        score: selectedOption?.score ?? 0,
        weight: card.weight,
      };
    });

    if (!selectedStock) {
      throw new Error("Share report requires a selected stock.");
    }

    const stock = selectedStock;

    return {
      stock,
      stockName: stock.name,
      score,
      scoreLabel: result.label,
      interpretation: result.interpretation,
      authorSummary: trimmedAuthorSummary,
      strongestAreas,
      weakestAreas,
      researchSuggestions: displayedResearchSuggestions,
      categoryJudgments,
      evidenceMemos: writtenMemos,
      createdAt: new Date().toISOString(),
    };
  }

  async function handleCreateShareLink() {
    if (!isComplete) {
      return;
    }

    const encodedData = encodeShareReport(buildShareReport());
    const shareLink = `${window.location.origin}/share?data=${encodedData}`;

    setManualShareLink("");
    setShareMessage("");

    try {
      await navigator.clipboard.writeText(shareLink);
      setShareMessage("공유 링크가 클립보드에 복사되었습니다.");
    } catch {
      setManualShareLink(shareLink);
      setShareMessage("클립보드 복사에 실패했습니다. 아래 링크를 직접 복사해 주세요.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <p className="text-sm font-semibold text-slate-500">나만의 종목 분석</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            혹시 이 종목, 텐버거 후보일까?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            시장 기회, 성장 증거, 밸류에이션 부담, 리스크까지 7가지 기준으로 차분히
            평가하고 나만의 종목 판단 리포트를 만들어보세요.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
            <div>
              <label htmlFor="stockSearch" className="text-base font-semibold text-slate-900">
                관심 종목 검색
              </label>
              <input
                id="stockSearch"
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setSelectedStock(null);
                }}
                placeholder="예: 삼성전자, 005930, NASDAQ, 엔비디아"
                className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-slate-700 focus:ring-4 focus:ring-slate-200"
              />
              <p className="mt-3 text-sm leading-6 text-slate-500">
                종목명, 티커, 시장, 별칭으로 검색할 수 있습니다. 목록에 없으면 직접 입력으로
                계속할 수 있습니다.
              </p>

              {searchQuery.trim() ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  {stockResults.length > 0 ? (
                    stockResults.map((stock) => (
                      <button
                        key={stock.id}
                        type="button"
                        onClick={() => handleSelectStock(stock)}
                        className="flex w-full items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-3 text-left transition last:border-b-0 hover:bg-slate-50"
                      >
                        <span>
                          <span className="block font-semibold text-slate-950">{stock.name}</span>
                          <span className="text-sm text-slate-500">
                            {stock.ticker} · {stock.market}
                          </span>
                        </span>
                        <span className="text-sm font-semibold text-slate-600">선택</span>
                      </button>
                    ))
                  ) : (
                    <div className="bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                      일치하는 로컬 종목이 없습니다.
                    </div>
                  )}
                </div>
              ) : null}

              {trimmedSearchQuery ? (
                <button
                  type="button"
                  disabled={!canUseCustomStock}
                  onClick={handleUseCustomStock}
                  className="mt-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400"
                >
                  &quot;{trimmedSearchQuery}&quot; 직접 입력으로 계속
                </button>
              ) : null}
              {trimmedSearchQuery ? (
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs leading-5">
                  <span
                    className={
                      customStockNameIsTooLong ? "font-semibold text-rose-700" : "text-slate-500"
                    }
                  >
                    직접 입력 종목명 {customStockNameLength} / {customStockNameMaxLength}
                  </span>
                  {customStockNameIsTooLong ? (
                    <span className="text-rose-700">
                      직접 입력은 {customStockNameMaxLength}자 이하로 줄여주세요.
                    </span>
                  ) : null}
                </div>
              ) : null}
            </div>

            {selectedStock ? (
              <StockBadge stock={selectedStock} />
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-6 text-slate-500">
                검색 결과에서 종목을 선택하거나 직접 입력을 선택하면 여기에 종목 정보가
                표시됩니다.
              </div>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">
            7가지 성장 후보 자기 점검 프레임워크
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            장기 성장 후보는 단순히 인기 있는 테마에 속해 있다고 만들어지지 않습니다. 시장
            기회, 실제 성장 증거, 이익 구조, 경쟁 우위, 진입 리스크, 촉매, 반증 조건을 함께
            살펴봐야 합니다.
          </p>
        </section>

        <section className="grid gap-4">
          {checklistCards.map((card, index) => {
            const memoLength = memos[card.id]?.length ?? 0;

            return (
              <article
                key={card.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    기준 {index + 1} · {card.weight}점
                  </p>
                  <h3 className="mt-1 text-xl font-bold leading-7 text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <h4 className="text-sm font-semibold text-slate-900">
                      점검할 핵심 관점
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
                  <div className="flex items-center justify-between gap-3">
                    <label
                      htmlFor={`memo-${card.id}`}
                      className="text-sm font-semibold text-slate-900"
                    >
                      판단 근거 메모
                    </label>
                    <span className="text-xs font-medium text-slate-500">
                      {memoLength}/{memoMaxLength}자
                    </span>
                  </div>
                  <textarea
                    id={`memo-${card.id}`}
                    value={memos[card.id] ?? ""}
                    maxLength={memoMaxLength}
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
            );
          })}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="authorSummary" className="text-xl font-bold text-slate-950">
              작성자의 총평
            </label>
            <span className="text-xs font-medium text-slate-500">
              {authorSummary.length}/{authorSummaryMaxLength}자
            </span>
          </div>
          <textarea
            id="authorSummary"
            value={authorSummary}
            maxLength={authorSummaryMaxLength}
            onChange={(event) => setAuthorSummary(event.target.value)}
            placeholder={authorSummaryPlaceholder}
            rows={4}
            className="mt-3 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-700 focus:ring-4 focus:ring-slate-200"
          />
          <p className="mt-2 text-sm leading-6 text-slate-500">
            총평은 점수에 반영되지 않으며, 결과 리포트와 공유 리포트에 함께 표시됩니다.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">자기 점검 리포트</h2>

          {isComplete && selectedStock ? (
            <div className="mt-5 grid min-w-0 gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
              <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">검토 종목</p>
                <p className={`mt-2 text-xl font-bold text-slate-950 ${stockNameTextClassName}`}>
                  {selectedStock.name}
                </p>
                {!selectedStock.isCustom ? (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
                      {selectedStock.ticker}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
                      {selectedStock.market}
                    </span>
                  </div>
                ) : null}
                <p className="mt-6 text-5xl font-bold tracking-tight text-slate-950">
                  {score}
                  <span className="text-xl font-semibold text-slate-500">/100</span>
                </p>
                <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 ring-1 ring-slate-200">
                  {result.label}
                </p>
              </aside>

              <div className="min-w-0 space-y-5">
                <div className="min-w-0 max-w-full overflow-hidden rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">조심스러운 해석</h3>
                  <p className="mt-2 leading-7 text-slate-700">{result.interpretation}</p>
                </div>

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
                    <h3 className="font-semibold text-slate-950">추가 확인 필요 영역</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {weakestAreas.length > 0
                        ? weakestAreas.join(" / ")
                        : "현재 응답 기준으로 큰 약점은 적어 보입니다. 그래도 외부 자료로 다시 확인해보세요."}
                    </p>
                  </div>
                </div>

                <div className="min-w-0 max-w-full overflow-hidden rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">작성자의 총평</h3>
                  {trimmedAuthorSummary ? (
                    <p className={`mt-2 ${memoTextClassName}`}>{trimmedAuthorSummary}</p>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {authorSummaryEmptyText}
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">판단 근거 메모</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    아래 메모는 사용자가 직접 작성한 내용입니다.
                  </p>
                  {writtenMemos.length > 0 ? (
                    <div className="mt-3 min-w-0 max-w-full space-y-3">
                      {writtenMemos.map(({ title, memo }) => (
                        <div
                          key={title}
                          className="min-w-0 max-w-full overflow-hidden rounded-lg bg-slate-50 p-3"
                        >
                          <p className="text-sm font-semibold text-slate-900">{title}</p>
                          <p className={`mt-1 ${memoTextClassName}`}>{memo}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      아직 작성된 판단 근거 메모가 없습니다.
                    </p>
                  )}
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-950">추가 조사 제안</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    {displayedResearchSuggestions.map((suggestion) => (
                      <li key={suggestion} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-950">공유 리포트</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    공유 링크에는 선택한 종목 정보, 점수, 체크리스트 결과, 작성한 메모가
                    포함됩니다.
                  </p>
                  <button
                    type="button"
                    onClick={handleCreateShareLink}
                    className="mt-4 w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto"
                  >
                    공유 링크 만들기
                  </button>
                  {shareMessage ? (
                    <p className="mt-3 text-sm font-medium text-slate-700">{shareMessage}</p>
                  ) : null}
                  {manualShareLink ? (
                    <textarea
                      readOnly
                      value={manualShareLink}
                      rows={3}
                      wrap="soft"
                      className="mt-3 w-full max-w-full overflow-x-hidden whitespace-pre-wrap break-all rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs leading-5 text-slate-700 [overflow-wrap:anywhere]"
                    />
                  ) : null}
                </div>

                <div className="space-y-3">
                  <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 ring-1 ring-amber-200">
                    {dataLimitationNotice}
                  </p>
                  <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 ring-1 ring-amber-200">
                    {investmentDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
              종목을 선택하거나 직접 입력하고 7가지 기준을 모두 평가하면 리포트가 표시됩니다.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-slate-950">중요 안내</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{investmentDisclaimer}</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
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
