# 03. Frontend Task

## Task Goal

Build version 2 of the first MVP screen for "Tenbagger Check" based on:

- AGENTS.md
- docs/01-product-brief.md
- docs/02-design-spec.md
- docs/04-qa-checklist.md

The goal is to upgrade the app from a simple checklist into an educational self-check tool based on a more experienced investor-style framework.

## Implementation Scope

Implement the app mainly in:

- src/app/page.tsx

Only edit other files if necessary.

Do not create many extra files for this MVP.

Do not run `git commit` or `git push`.

## Main User Flow

The user should be able to:

1. Open the page.
2. See the product title and explanation.
3. Enter a stock name or ticker.
4. Read a short introduction to the seven-part framework.
5. Review seven educational checklist cards.
6. Select one judgment option for each card.
7. See a score out of 100 after completing all seven cards.
8. Read a cautious interpretation.
9. See strongest areas, weakest areas, and suggested next research points.
10. See a clear disclaimer that this is not investment advice.

## Required UI Sections

The page should include:

1. Header section
2. Stock input section
3. Framework introduction section
4. Seven educational checklist cards
5. Result section
6. Disclaimer section

## Header Requirements

Show:

- Product name: 텐버거 체크
- Main headline: 이 종목, 장기 성장 후보일까?
- Description: 관심 종목을 입력하고, 경험 많은 투자자들이 보는 7가지 기준으로 성장 가능성과 리스크를 점검해보세요.

The tone must be calm and educational.

Do not make the app look like a guaranteed profit tool.

Do not use buy/sell recommendation wording.

## Stock Input Requirements

Add a text input for the stock name.

Label:

- 관심 종목

Placeholder:

- 예: 삼성전자, SK하이닉스, NVIDIA

Helper text:

- 실제 주가 데이터는 사용하지 않으며, 입력한 종목명은 결과 제목에만 사용됩니다.

## Framework Introduction Requirements

Add a short introduction before the checklist.

Suggested copy:

"텐버거 후보는 단순히 인기 있는 테마에 속해 있다고 만들어지지 않습니다. 큰 시장, 실제 성장 증거, 이익 확장성, 경쟁 우위, 적정한 진입 가격, 촉매, 그리고 리스크 점검이 함께 필요합니다."

## Educational Checklist Card Requirements

Create seven checklist cards.

Each card should include:

1. Category title
2. Short explanation
3. "고수들이 보는 포인트"
4. "확인 힌트" bullet list
5. Three selectable judgment buttons

The card should teach the user what to think about before selecting an answer.

The design should feel educational, not like a quiz or trading signal.

## Scoring System

Total score: 100 points

Category weights:

1. Market Opportunity: 15 points
2. Growth Evidence: 20 points
3. Profit Leverage: 15 points
4. Competitive Advantage: 15 points
5. Valuation Risk: 15 points
6. Catalysts: 10 points
7. Risks and Disconfirming Evidence: 10 points

For most categories:

- Strong / confirmed option = full points
- Partial option = about half points
- Unclear / weak option = 0 points

For Valuation Risk:

- 부담 낮음 = 15 points
- 보통 = 8 points
- 부담 높음 = 0 points

For Risks and Disconfirming Evidence:

- 리스크를 명확히 이해함 = 10 points
- 일부만 이해함 = 5 points
- 거의 점검하지 못함 = 0 points

## Seven Checklist Cards

### 1. Market Opportunity

Internal key:

marketOpportunity

Korean title:

시장 기회

Weight:

15

Short explanation:

큰 수익률은 대개 회사가 큰 시장에서 성장할 때 가능성이 높아집니다.

Expert point:

텐버거 후보는 단순히 유행하는 테마가 아니라, 5~10년 동안 구조적으로 커질 수 있는 시장 안에서 나올 가능성이 높습니다.

Hints:

- 이 시장은 앞으로 몇 년 동안 커질 가능성이 있나요?
- 단기 유행이 아니라 구조적 변화인가요?
- 회사 매출이 아직 시장 전체에 비해 작아 성장 여지가 있나요?
- AI, 반도체, 전력망, 로봇, 보안, 바이오처럼 장기 변화와 연결되어 있나요?

Options:

- 강하게 확인됨: 15
- 일부 확인됨: 8
- 아직 불확실함: 0

Research suggestion if weak:

시장 규모, 장기 성장률, 산업 리포트, 주요 수요처를 추가로 확인해보세요.

### 2. Growth Evidence

Internal key:

growthEvidence

Korean title:

성장 증거

Weight:

20

Short explanation:

좋은 이야기가 아니라 실제 숫자나 사건으로 성장 근거가 확인되는지 봅니다.

Expert point:

성장주는 스토리만으로는 부족합니다. 매출, 수주, 고객사, 신제품, 해외 진출처럼 확인 가능한 증거가 필요합니다.

Hints:

- 최근 매출이 꾸준히 증가하고 있나요?
- 신규 고객이나 대형 계약이 있나요?
- 수주잔고나 판매량 증가가 확인되나요?
- 신제품이나 신사업이 실제 매출로 이어지고 있나요?

Options:

- 강하게 확인됨: 20
- 일부 확인됨: 10
- 아직 불확실함: 0

Research suggestion if weak:

최근 매출 추이, 수주잔고, 신규 고객, 실적 발표 자료를 확인해보세요.

### 3. Profit Leverage

Internal key:

profitLeverage

Korean title:

이익 레버리지

Weight:

15

Short explanation:

매출이 늘어날 때 이익이 더 빠르게 늘어날 수 있는 구조인지 봅니다.

Expert point:

텐버거급 상승은 매출 증가만으로는 부족한 경우가 많습니다. 매출이 늘면서 영업이익률도 함께 좋아지는 구조가 중요합니다.

Hints:

- 매출 증가와 함께 영업이익률이 개선되고 있나요?
- 고정비 부담이 줄면서 이익률이 좋아질 수 있나요?
- 규모의 경제가 작동하는 사업인가요?
- 가격 결정력이 있나요?

Options:

- 강하게 확인됨: 15
- 일부 확인됨: 8
- 아직 불확실함: 0

Research suggestion if weak:

영업이익률 변화, 원가 구조, 고정비 비중, 가격 결정력을 확인해보세요.

### 4. Competitive Advantage

Internal key:

competitiveAdvantage

Korean title:

경쟁 우위

Weight:

15

Short explanation:

경쟁사가 쉽게 따라오기 어려운 강점이 있는지 봅니다.

Expert point:

좋은 산업에 있어도 모든 회사가 승자가 되는 것은 아닙니다. 시간이 지나도 유지될 수 있는 우위가 중요합니다.

Hints:

- 기술 장벽이나 특허가 있나요?
- 고객이 쉽게 다른 회사로 옮기기 어렵나요?
- 브랜드, 원가 경쟁력, 점유율 우위가 있나요?
- 공급망에서 중요한 위치를 차지하고 있나요?

Options:

- 강하게 확인됨: 15
- 일부 확인됨: 8
- 아직 불확실함: 0

Research suggestion if weak:

경쟁사 비교, 기술 장벽, 고객 락인, 시장 점유율을 확인해보세요.

### 5. Valuation Risk

Internal key:

valuationRisk

Korean title:

밸류에이션 부담

Weight:

15

Short explanation:

좋은 회사라도 이미 너무 비싸게 사면 투자 성과가 낮아질 수 있습니다.

Expert point:

좋은 회사와 좋은 투자는 다릅니다. 시장의 기대가 이미 가격에 많이 반영되어 있는지 점검해야 합니다.

Hints:

- 최근 주가가 이미 크게 올랐나요?
- PER, PSR, PBR 같은 지표가 과거보다 높아졌나요?
- 동종업계와 비교해 과하게 비싼가요?
- 실적이 조금만 실망스러워도 크게 하락할 위험이 있나요?

Options:

- 부담 낮음: 15
- 보통: 8
- 부담 높음: 0

Research suggestion if weak:

현재 밸류에이션, 과거 평균, 동종업계 비교, 기대감 반영 정도를 확인해보세요.

### 6. Catalysts

Internal key:

catalysts

Korean title:

촉매

Weight:

10

Short explanation:

시장이 이 회사를 다시 평가하게 만들 사건이 있는지 봅니다.

Expert point:

좋은 회사라도 시장이 알아보지 못하면 오래 기다려야 할 수 있습니다. 실적 변화나 신제품, 대형 고객 확보 같은 촉매가 중요합니다.

Hints:

- 신제품 출시가 예정되어 있나요?
- 대형 고객사 확보 가능성이 있나요?
- 흑자전환이나 이익 급증 가능성이 있나요?
- 산업 사이클 회복이나 공급 부족 수혜가 있나요?

Options:

- 강하게 확인됨: 10
- 일부 확인됨: 5
- 아직 불확실함: 0

Research suggestion if weak:

신제품, 실적 변곡점, 대형 고객, 산업 사이클 회복 가능성을 확인해보세요.

### 7. Risks and Disconfirming Evidence

Internal key:

riskCheck

Korean title:

리스크와 반증 조건

Weight:

10

Short explanation:

내 생각이 틀렸다는 신호가 무엇인지 미리 정해봅니다.

Expert point:

좋은 분석은 장점만 보는 것이 아니라, 어떤 일이 생기면 이 아이디어가 틀렸다고 판단할지도 함께 정합니다.

Hints:

- 매출 성장이 둔화되면 어떻게 판단할 건가요?
- 마진이 악화되면 투자 아이디어가 약해지나요?
- 주요 고객 이탈 가능성은 없나요?
- 경쟁 심화나 기술 변화 위험은 없나요?
- 내가 틀렸다는 신호를 명확히 말할 수 있나요?

Options:

- 리스크를 명확히 이해함: 10
- 일부만 이해함: 5
- 거의 점검하지 못함: 0

Research suggestion if weak:

투자 아이디어가 틀렸다고 볼 수 있는 경고 신호를 먼저 정리해보세요.

## Evidence Memo Feature

Add a simple evidence memo field to each of the seven checklist cards.

Purpose:

The memo feature should help users explain why they selected a certain judgment option.

This makes the app more useful as a thinking tool, not just a button-based score calculator.

Each checklist card should include:

- A textarea for the user's reasoning or evidence
- A short label: 판단 근거 메모
- A placeholder that helps the user write useful evidence

Suggested placeholder:

이 항목에서 그렇게 판단한 이유를 간단히 적어보세요. 예: 최근 매출 성장, 신규 고객, 밸류에이션 부담, 리스크 요인 등

Requirements:

- The memo field should be optional.
- The score should not depend on the memo text.
- The result should still appear when stock name and all seven option selections are completed, even if memos are empty.
- Memo state should be stored separately for each checklist category.
- The user should be able to edit memos after writing them.
- Do not save memos to a database.
- Do not use localStorage in this step.
- Do not add backend API.
- Do not add new dependencies.

Result display:

In the result section, show a short "내 판단 근거" area.

If the user wrote memos, display the written memos grouped by category.

If the user did not write any memos, show:

아직 작성한 판단 근거 메모가 없습니다.

The memo display should be clearly separated from the score interpretation.

Safety:

Memo text is written by the user. The app should not transform user memo text into investment advice.

Do not summarize the memo as a buy/sell recommendation.

## Result Requirements

Show the result only after:

- Stock name is entered
- All seven checklist cards are answered

The result should include:

- Stock name
- Score out of 100
- Score label
- Cautious interpretation
- Strongest areas
- Weakest areas
- Suggested next research points
- Not-investment-advice reminder

## URL-Based Share Report Feature

Add a URL-based share report feature for the MVP.

This is a core product feature, not an experimental feature.

## Purpose

The share report feature should allow users to share their Tenbagger Check result with others.

The shared page should not be a dead-end result page.

It should:

- Show the shared report clearly.
- Make the user's reasoning interesting and readable.
- Clearly state that the report is user-generated and not investment advice.
- Encourage viewers to create their own report.

## Share Flow

The user flow should be:

1. User enters a stock name.
2. User completes all seven checklist cards.
3. User writes evidence memos for each category.
4. User sees the result.
5. User clicks a "공유 링크 만들기" button.
6. The app creates a URL-based share link.
7. The share link is copied to the clipboard.
8. A confirmation message is shown.
9. Another person opens the share link.
10. The share page displays a readable report.
11. The share page includes a CTA button: "나도 내 관심 종목 체크하기".

## Share Link Approach

Use a database-free MVP approach.

The first version should use URL data instead of a backend database.

Suggested route:

- `/share?data=...`

The `data` query parameter should contain encoded report data.

Do not add:

- Backend API
- Database
- Authentication
- Payment
- External service
- New dependency unless absolutely necessary

## Shared Report Data

The shared report should include:

- Stock name
- Total score
- Score label
- Score interpretation
- Strongest areas
- Weakest areas
- Suggested next research points
- Seven category judgments
- User evidence memos
- Created date or created timestamp
- Required investment disclaimer

The shared report must not include:

- User name
- Email
- IP address
- Login information
- Any personal identifier

## Evidence Memo Sharing

Evidence memos should be included in the shared report.

The value of the shared report comes not only from the score, but from the user's reasoning.

However, the app must clearly label these memos as user-written content.

Use labels such as:

- 작성자의 판단 근거
- 사용자가 직접 작성한 메모

Avoid labels such as:

- 공식 분석
- 검증된 분석
- 추천 사유
- 매수 근거
- 서비스 분석 의견

The app must not present user memos as verified analysis, investment advice, or recommendations from Tenbagger Check.

## Memo Length Limit

Each evidence memo should have a reasonable length limit.

Recommended limit:

- 200 characters per category

If the user reaches the limit, the UI should make the limit understandable.

The purpose of this limit is to:

- Keep the shared report readable.
- Prevent excessively long URLs.
- Avoid cluttered shared pages.
- Encourage concise reasoning.

## Main Result Page Share Button

When the result is visible, show a share button.

Button text:

공유 링크 만들기

Near the button, show a short notice:

공유 링크에는 작성한 판단 근거 메모가 함께 포함됩니다.

Also show a caution:

개인정보, 민감한 정보, 타인에게 매수·매도를 권유하는 표현은 메모에 적지 않는 것이 좋습니다.

## Share Link Creation

When the user clicks the share button:

1. Build a share report object from the current result.
2. Encode it into a URL-safe format.
3. Generate a `/share?data=...` URL.
4. Copy the URL to the clipboard.
5. Show a short success message.

Suggested success message:

공유 링크가 복사되었습니다.

If copying fails, show a fallback message and allow the user to manually copy the link.

## Share Report Page

Create a share report page.

Suggested path:

- `src/app/share/page.tsx`

The share page should read the `data` query parameter, decode it, and render the report.

If the data is missing or invalid, show a friendly error message:

공유 리포트를 불러올 수 없습니다. 링크가 잘못되었거나 손상되었을 수 있습니다.

Also show a CTA button:

나도 내 관심 종목 체크하기

The CTA should link to:

- `/`

## Share Page Layout

The shared page should be optimized for readability.

The page should be calm, clear, and easy to understand at a glance.

The share page should have this structure:

1. Hero summary
2. At-a-glance summary
3. Author evidence memos
4. Detailed checklist results
5. Suggested next research points
6. Investment disclaimer
7. CTA button

## 1. Hero Summary

Show:

- 텐버거 체크 공유 리포트
- Stock name
- Score
- Score label
- Short user-generated report notice

Suggested notice:

이 리포트는 사용자가 직접 선택하고 작성한 자기 점검 결과입니다. 투자 추천이 아닙니다.

## 2. At-a-Glance Summary

Show two compact sections:

### 강점 영역

Show the strongest areas.

### 추가 확인 필요

Show the weakest areas.

The goal is to help viewers understand the report in a few seconds.

## 3. Author Evidence Memos

Show the user's evidence memos.

Section title:

작성자의 판단 근거

Short notice:

아래 내용은 사용자가 직접 작성한 메모이며, 텐버거 체크가 검증하거나 추천하는 내용이 아닙니다.

Display only categories that have memo text.

If no memos exist, show:

작성된 판단 근거 메모가 없습니다.

## 4. Detailed Checklist Results

Show all seven category judgments.

Each item should include:

- Category title
- Selected judgment label
- Category score

This section should be visually secondary to the summary and memo sections.

## 5. Suggested Next Research Points

Show research suggestions based on weak categories.

This should help the viewer learn what to check next.

## 6. Investment Disclaimer

Show the required disclaimer:

이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.

Also show this share-specific disclaimer:

이 공유 리포트는 사용자가 직접 선택하고 작성한 내용을 바탕으로 생성되었습니다. 텐버거 체크는 해당 종목을 추천하거나 사용자 메모를 검증하지 않습니다.

## 7. CTA Button

At the bottom of the share page, show a clear CTA button.

Button text:

나도 내 관심 종목 체크하기

This button should link to `/`.

The share page should encourage viewers to create their own report.

## Readability Requirements

The share page must be readable and not cluttered.

Design principles:

- Important summary first.
- User memos should be easy to scan.
- Avoid too many small cards.
- Use clear section headings.
- Use enough spacing.
- Keep the design mobile-friendly.
- Avoid flashy trading-style colors.
- Avoid urgent or hype-driven wording.

## Safety Requirements

The app itself must not add or generate investment recommendation wording.

Do not add phrases such as:

- 매수 추천
- 매도 추천
- 지금 사야 합니다
- 이 종목은 10배 오릅니다
- 수익 보장
- 목표가
- 강력 매수
- 다음 텐버거 확정
- Buy
- Sell
- Strong buy
- Guaranteed return
- Target price

User-written memos may contain user text, but the app must clearly label it as user-written content and not verified by Tenbagger Check.

## Technical Requirements

Prefer simple implementation.

Use:

- TypeScript
- React
- Next.js App Router
- Browser clipboard API
- URL-safe encoding/decoding

Do not use:

- Backend API
- Database
- Authentication
- External stock API
- AI API
- New dependencies unless clearly necessary

## Final Check

After implementation, verify:

- Share button appears only after a complete result is available.
- Share link includes score, label, category judgments, research suggestions, and memos.
- Shared page loads correctly from `/share?data=...`.
- Shared page is readable on mobile.
- Shared page includes CTA back to `/`.
- Shared page clearly says the report is user-generated and not investment advice.
- Invalid or missing share data shows a friendly error.
- No git commit or git push is run by Codex.

## Score Labels and Interpretations

### 80 to 100

Label:

강한 검토 후보

Interpretation:

여러 핵심 기준에서 긍정적인 답변이 많습니다. 다만 이 결과는 투자 추천이 아니라 추가 조사할 만한 후보라는 뜻입니다.

### 60 to 79

Label:

관심 후보

Interpretation:

일부 매력적인 요소가 있지만 아직 확인해야 할 부분이 남아 있습니다. 약한 항목을 중심으로 추가 조사가 필요합니다.

### 40 to 59

Label:

추가 근거 필요

Interpretation:

아이디어는 흥미로울 수 있지만 현재 답변만으로는 근거가 충분하지 않습니다. 테마나 기대감만으로 판단하지 않도록 주의해야 합니다.

### 0 to 39

Label:

신중 검토 필요

Interpretation:

현재 답변만 기준으로는 장기 성장 후보로 보기 어렵습니다. 관심을 가지더라도 더 많은 근거와 리스크 점검이 필요합니다.

## Strongest and Weakest Areas

The result should identify:

- Strongest areas: categories with relatively high scores
- Weakest areas: categories with low scores

Use category titles in Korean.

If there are no strong areas, show a gentle message.

If there are no weak areas, still remind users to verify facts with external research.

## Suggested Next Research Points

Show research suggestions based on weak categories.

If weak categories exist, show their research suggestion text.

If no weak categories exist, show a general suggestion:

추가로 재무제표, 산업 리포트, 실적 발표 자료, 경쟁사 비교를 확인해보세요.

## Empty State

Before the user completes the form, show:

종목명을 입력하고 7가지 기준을 모두 점검하면 결과가 표시됩니다.

## Required Disclaimer

Show this disclaimer clearly:

이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.

## No Data Notice

Show a notice that:

- The app does not use real-time stock data.
- The app does not automatically analyze financial statements.
- The app does not predict future returns.
- The score is based only on the user's self-assessment.

## Technical Requirements

Use:

- React state
- TypeScript
- Tailwind CSS
- Simple arrays and map
- Simple score calculation

Do not use:

- Backend API
- Database
- External stock API
- AI API
- Authentication
- Payment
- New dependencies

## Code Quality Requirements

The code should be:

- Easy for a beginner to understand
- Mostly implemented in src/app/page.tsx
- Not over-engineered
- Clearly named
- Safe from investment recommendation wording
- Structured enough to make the seven categories readable

## Safety Requirements

Do not include phrases such as:

- 매수 추천
- 매도 추천
- 지금 사야 합니다
- 이 종목은 10배 오릅니다
- 수익 보장
- 목표가
- 강력 매수
- 다음 텐버거 확정

## Final Check

After implementation, verify:

- The app runs with `npm run dev`.
- The score changes when answers change.
- Result appears only after stock name and all seven answers are completed.
- Strongest areas and weakest areas are shown.
- Research suggestions are shown.
- No buy/sell recommendation wording is used.
- The disclaimer is visible.
- Do not run `git commit` or `git push`.