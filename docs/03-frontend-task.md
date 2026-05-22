# 03. Frontend Task

## Task Goal

Build the first MVP screen for "Tenbagger Check" based on:

- AGENTS.md
- docs/01-product-brief.md
- docs/02-design-spec.md

The goal is to create a simple single-page checklist app.

## Implementation Scope

Implement the app mainly in:

- src/app/page.tsx

Only edit other files if necessary.

Do not create many extra files for the first MVP.

## Main User Flow

The user should be able to:

1. Open the page.
2. See the product title and explanation.
3. Enter a stock name or ticker.
4. Answer five checklist questions.
5. See a score out of 100.
6. Read a cautious interpretation.
7. See a clear disclaimer that this is not investment advice.

## Required UI Sections

The page should include:

1. Header section
2. Stock input section
3. Checklist section
4. Result section
5. Disclaimer section

## Header Requirements

Show:

- Product name: 텐버거 체크
- Main headline: 이 종목, 장기 성장 후보일까?
- Description: 관심 종목을 입력하고 5가지 기준으로 성장 가능성과 리스크를 점검해보세요.

The tone must be calm and educational.

Do not make the app look like a guaranteed profit tool.

## Stock Input Requirements

Add a text input for the stock name.

Label:

- 관심 종목

Placeholder:

- 예: 삼성전자, SK하이닉스, NVIDIA

Helper text:

- 실제 주가 데이터는 사용하지 않으며, 입력한 종목명은 결과 제목에만 사용됩니다.

## Checklist Requirements

Create five checklist questions.

Each question should have three selectable choices.

For the first four questions, use:

- 높음
- 보통
- 낮음

Scoring:

- 높음: 20 points
- 보통: 10 points
- 낮음: 0 points

For the fifth question, entry risk, use:

- 낮음
- 보통
- 높음

Reverse scoring:

- 낮음: 20 points
- 보통: 10 points
- 높음: 0 points

## Checklist Questions

### 1. Market Growth

Question:

이 회사가 속한 시장은 앞으로 크게 성장할 가능성이 있나요?

Description:

시장 자체가 커지고 있는지 점검합니다.

### 2. Company Growth

Question:

이 회사의 매출이나 이익이 앞으로 성장할 가능성이 높나요?

Description:

회사의 실적 성장 가능성을 점검합니다.

### 3. Competitive Advantage

Question:

이 회사는 경쟁사 대비 뚜렷한 강점이 있나요?

Description:

기술력, 브랜드, 점유율, 원가 경쟁력 등을 생각해봅니다.

### 4. Financial Quality

Question:

이 회사의 재무 상태는 안정적이라고 볼 수 있나요?

Description:

부채, 현금흐름, 수익성 등을 간단히 생각해봅니다.

### 5. Entry Risk

Question:

현재 가격에 이미 기대감이 많이 반영되어 있다고 느끼나요?

Description:

좋은 회사라도 너무 비싸게 사면 수익률이 낮아질 수 있습니다.

## Result Requirements

Show the result after the user enters a stock name and answers all five questions.

The result should include:

- Stock name
- Score out of 100
- Score label
- Short interpretation
- Strength summary
- Risk summary
- Not-investment-advice reminder

## Score Labels and Interpretations

### 80 to 100

Label:

강한 검토 후보

Interpretation:

성장성, 경쟁력, 재무 안정성 측면에서 긍정적인 답변이 많습니다. 다만 높은 점수는 투자 추천이 아니라 추가 조사할 만한 후보라는 뜻입니다.

### 60 to 79

Label:

관심 후보

Interpretation:

일부 긍정적인 요소가 있지만 아직 확인해야 할 부분이 남아 있습니다. 실제 투자 전에는 재무제표, 산업 전망, 가격 부담을 추가로 점검해야 합니다.

### 40 to 59

Label:

추가 근거 필요

Interpretation:

텐버거 후보로 보기에는 근거가 부족할 수 있습니다. 성장성이나 경쟁 우위가 충분한지 더 신중하게 확인해야 합니다.

### 0 to 39

Label:

신중 검토 필요

Interpretation:

현재 답변만 기준으로는 장기 성장 후보로 보기 어렵습니다. 관심을 가지더라도 투자 결정 전 더 많은 근거가 필요합니다.

## Empty State

Before the user completes the checklist, show:

종목명을 입력하고 체크리스트에 답하면 점수가 표시됩니다.

## Disclaimer

Show this disclaimer clearly:

이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.

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
- Written in a single main page if possible
- Not over-engineered
- Clearly named
- Safe from investment recommendation wording

## Final Check

After implementation, verify:

- The app runs with npm run dev.
- The score changes when answers change.
- Result appears only after stock name and all answers are completed.
- No buy/sell recommendation wording is used.
- The disclaimer is visible.