import Link from "next/link";

import {
  dataLimitationNotice,
  investmentDisclaimer,
  shareSpecificDisclaimer,
  type ShareReport,
} from "./share-report";

const defaultErrorMessage =
  "공유 리포트를 불러올 수 없습니다. 링크가 잘못되었거나 데이터가 손상되었을 수 있습니다.";

const memoTextClassName =
  "whitespace-pre-wrap break-words break-all text-sm leading-6 text-slate-600 [overflow-wrap:anywhere]";
const stockNameTextClassName = "break-words break-all [overflow-wrap:anywhere]";
const authorSummaryNotice =
  "아래 총평은 사용자가 직접 작성한 의견이며, 나만의 종목 분석이 검증하거나 추천하는 내용이 아닙니다.";
const authorSummaryEmptyText = "작성된 총평이 없습니다.";

function CtaButton() {
  return (
    <Link
      href="/"
      className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
    >
      나도 내 관심 종목 체크하기
    </Link>
  );
}

export function ShareReportError({ message = defaultErrorMessage }: { message?: string }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-slate-500">나만의 종목 분석 공유 리포트</p>
        <h1 className="mt-3 text-2xl font-bold text-slate-950">리포트를 열 수 없습니다</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">{message}</p>
        <div className="mt-6">
          <CtaButton />
        </div>
      </div>
    </main>
  );
}

export function ShareReportView({ report }: { report: ShareReport }) {
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(report.createdAt));

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <section className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-slate-500">나만의 종목 분석 공유 리포트</p>
          <div className="mt-5 grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
            <div className="min-w-0">
              <h1
                className={`text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl ${stockNameTextClassName}`}
              >
                {report.stock.name}
              </h1>
              {!report.stock.isCustom ? (
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200">
                    {report.stock.ticker}
                  </span>
                  <span className="rounded-full bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200">
                    {report.stock.market}
                  </span>
                </div>
              ) : null}
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                이 리포트는 작성자가 직접 선택하고 작성한 자기 점검 요약입니다.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">생성일 {formattedDate}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                평가 점수
              </p>
              <p className="mt-2 text-5xl font-bold tracking-tight text-slate-950">
                {report.score}
                <span className="text-xl font-semibold text-slate-500">/100</span>
              </p>
              <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 ring-1 ring-slate-200">
                {report.scoreLabel}
              </p>
            </div>
          </div>
          <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-200">
            {report.interpretation}
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">한눈에 보는 강점</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {report.strongestAreas.length > 0
                ? report.strongestAreas.join(" / ")
                : "뚜렷한 강점 영역은 아직 확인되지 않았습니다."}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">추가 확인 필요</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {report.weakestAreas.length > 0
                ? report.weakestAreas.join(" / ")
                : "현재 응답 기준으로 큰 약점은 적어 보입니다. 외부 자료 확인은 여전히 필요합니다."}
            </p>
          </div>
        </section>

        <section className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">작성자의 총평</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{authorSummaryNotice}</p>
          {report.authorSummary.trim() ? (
            <p
              className={`mt-4 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200 ${memoTextClassName}`}
            >
              {report.authorSummary}
            </p>
          ) : (
            <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
              {authorSummaryEmptyText}
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">작성자의 판단 근거 메모</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            아래 내용은 작성자가 직접 남긴 메모이며, 자동 검증된 정보가 아닙니다.
          </p>
          {report.evidenceMemos.length > 0 ? (
            <div className="mt-5 min-w-0 max-w-full divide-y divide-slate-200">
              {report.evidenceMemos.map((memo) => (
                <div
                  key={memo.id}
                  className="min-w-0 max-w-full overflow-hidden py-4 first:pt-0 last:pb-0"
                >
                  <p className="text-sm font-semibold text-slate-900">{memo.title}</p>
                  <p className={`mt-2 ${memoTextClassName}`}>{memo.memo}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
              작성된 판단 근거 메모가 없습니다.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">상세 체크리스트 결과</h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            {report.categoryJudgments.map((judgment) => (
              <div
                key={judgment.id}
                className="grid gap-2 border-b border-slate-200 p-4 last:border-b-0 sm:grid-cols-[1fr_1fr_90px] sm:items-center"
              >
                <p className="font-semibold text-slate-900">{judgment.title}</p>
                <p className="text-sm text-slate-600">{judgment.selectedLabel}</p>
                <p className="text-sm font-semibold text-slate-700 sm:text-right">
                  {judgment.score}/{judgment.weight}점
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">다음 조사 포인트</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            {report.researchSuggestions.map((suggestion) => (
              <li key={suggestion} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-amber-950">한계 및 고지</h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-amber-900">
            <p>{dataLimitationNotice}</p>
            <p>{investmentDisclaimer}</p>
            <p>{shareSpecificDisclaimer}</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">내 관심 종목도 점검해보기</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            같은 7가지 기준으로 직접 판단을 남기고 교육용 자기 점검 리포트를 만들어볼 수
            있습니다.
          </p>
          <div className="mt-5">
            <CtaButton />
          </div>
        </section>
      </div>
    </main>
  );
}
