# 02. Design Spec

## Design Goal

The design should make the app feel simple, trustworthy, and beginner-friendly.

The user should immediately understand that this is a stock idea self-check tool, not a stock recommendation service.

## Overall Tone

The UI should feel:

- Clean
- Calm
- Trustworthy
- Easy to understand
- Not sensational
- Not like a gambling or hype service

Avoid aggressive investment language or flashy visuals that make the app feel like a profit prediction tool.

## Page Structure

The first MVP is a single-page app.

The page should include:

1. Header section
2. Stock input section
3. Checklist section
4. Result section
5. Disclaimer section

## Header Section

The header should include:

- Product name: 텐버거 체크
- Main headline:
  - "이 종목, 장기 성장 후보일까?"
- Short description:
  - "관심 종목을 입력하고 5가지 기준으로 성장 가능성과 리스크를 점검해보세요."

The header should clearly communicate that the app helps users think, not that it predicts returns.

## Stock Input Section

The input section should include:

- A label:
  - "관심 종목"
- A text input placeholder:
  - "예: 삼성전자, SK하이닉스, NVIDIA"
- A short helper text:
  - "실제 주가 데이터는 사용하지 않으며, 입력한 종목명은 결과 제목에만 사용됩니다."

## Checklist Section

The checklist should show five question cards.

Each question should have three answer choices.

Answer choices:

- 높음
- 보통
- 낮음

For entry risk, the labels may be:

- 낮음
- 보통
- 높음

Each question card should include:

- Question title
- Short explanation
- Three selectable buttons

The selected option should be visually distinct.

## Checklist Questions

### 1. Market Growth

Question:
- "이 회사가 속한 시장은 앞으로 크게 성장할 가능성이 있나요?"

Description:
- "시장 자체가 커지고 있는지 점검합니다."

### 2. Company Growth

Question:
- "이 회사의 매출이나 이익이 앞으로 성장할 가능성이 높나요?"

Description:
- "회사의 실적 성장 가능성을 점검합니다."

### 3. Competitive Advantage

Question:
- "이 회사는 경쟁사 대비 뚜렷한 강점이 있나요?"

Description:
- "기술력, 브랜드, 점유율, 원가 경쟁력 등을 생각해봅니다."

### 4. Financial Quality

Question:
- "이 회사의 재무 상태는 안정적이라고 볼 수 있나요?"

Description:
- "부채, 현금흐름, 수익성 등을 간단히 생각해봅니다."

### 5. Entry Risk

Question:
- "현재 가격에 이미 기대감이 많이 반영되어 있다고 느끼나요?"

Description:
- "좋은 회사라도 너무 비싸게 사면 수익률이 낮아질 수 있습니다."

Note:
- Entry risk should be reverse-scored.
- Lower entry risk should give a higher score.
- Higher entry risk should give a lower score.

## Result Section

The result section should appear after the user has entered a stock name and answered the checklist.

It should include:

- Stock name
- Score out of 100
- Score label
- Short interpretation
- Strengths
- Risks
- Reminder that this is not investment advice

## Score Labels

Use these labels:

- 80 to 100: "강한 검토 후보"
- 60 to 79: "관심 후보"
- 40 to 59: "추가 근거 필요"
- 0 to 39: "신중 검토 필요"

## Visual Style

Use Tailwind CSS.

Recommended style:

- Light background
- Centered max-width layout
- Rounded cards
- Soft borders
- Clear spacing
- Large readable headline
- Mobile-friendly layout
- Buttons with clear selected state

Avoid:

- Red/green trading signal style
- Overly flashy gradients
- Rocket emojis
- Money bag emojis
- Casino-like visuals
- Urgent or hype-driven wording

## Disclaimer Section

The disclaimer should be visible near the result and/or bottom of the page.

Required Korean disclaimer:

"이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다."

## Empty State

Before the user completes the checklist, the result section can show a calm guide message:

"종목명을 입력하고 체크리스트에 답하면 점수가 표시됩니다."

## No Data Notice

The app should explain that:

- It does not use real-time stock data.
- It does not predict future returns.
- It does not provide buy or sell recommendations.