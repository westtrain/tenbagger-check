# 02. Design Spec

## Design Goal

The design should make "Tenbagger Check" feel like a calm, educational stock idea review tool.

The app should not feel like a stock recommendation service, trading signal tool, gambling product, or hype-driven investment app.

The design should help beginner investors understand how experienced investors think about long-term growth candidates.

## Overall Product Feel

The UI should feel:

- Calm
- Trustworthy
- Educational
- Beginner-friendly
- Structured
- Thoughtful
- Not sensational

The user should feel:

- "This helps me think more clearly."
- "This teaches me what to check."
- "This is not telling me what to buy."
- "This helps me avoid emotional investing."

## Page Structure

The MVP is a single-page app.

The page should include:

1. Header section
2. Stock input section
3. Framework introduction section
4. Seven educational checklist cards
5. Result section
6. Disclaimer section

## Header Section

The header should include:

### Product Name

텐버거 체크

### Main Headline

이 종목, 장기 성장 후보일까?

### Short Description

관심 종목을 입력하고, 경험 많은 투자자들이 보는 7가지 기준으로 성장 가능성과 리스크를 점검해보세요.

### Tone

The headline should be interesting but not sensational.

Avoid phrases such as:

- 10배 오를 종목 찾기
- 다음 텐버거 추천
- 지금 사야 할 주식
- 수익 보장

## Stock Input Section

The stock input section should include:

### Label

관심 종목

### Placeholder

예: 삼성전자, SK하이닉스, NVIDIA

### Helper Text

실제 주가 데이터는 사용하지 않으며, 입력한 종목명은 결과 제목에만 사용됩니다.

The input should be easy to find and placed near the top of the page.

## Framework Introduction Section

Add a short section before the checklist.

Purpose:

Explain that the app uses a structured framework based on common factors that experienced investors often review.

Suggested Korean copy:

"텐버거 후보는 단순히 인기 있는 테마에 속해 있다고 만들어지지 않습니다. 큰 시장, 실제 성장 증거, 이익 확장성, 경쟁 우위, 적정한 진입 가격, 촉매, 그리고 리스크 점검이 함께 필요합니다."

This section should be short and readable.

## Educational Checklist Cards

Each checklist item should be displayed as an educational card.

Each card should include:

1. Category title
2. Short explanation of why this matters
3. "고수들이 보는 포인트" section
4. "확인 힌트" bullet list
5. User judgment buttons

The goal is not just to collect answers.

The goal is to teach the user what to look for.

## Judgment Buttons

For each card, use three selectable options:

- 강하게 확인됨
- 일부 확인됨
- 아직 불확실함

For Valuation Risk, use:

- 부담 낮음
- 보통
- 부담 높음

For Risks and Disconfirming Evidence, use:

- 리스크를 명확히 이해함
- 일부만 이해함
- 거의 점검하지 못함

The selected option should be visually distinct.

The options should feel like self-assessment, not a buy/sell signal.

## Seven Checklist Cards

### 1. Market Opportunity

Korean title:

시장 기회

Short explanation:

큰 수익률은 대개 회사가 큰 시장에서 성장할 때 가능성이 높아집니다.

고수들이 보는 포인트:

텐버거 후보는 단순히 유행하는 테마가 아니라, 5~10년 동안 구조적으로 커질 수 있는 시장 안에서 나올 가능성이 높습니다.

확인 힌트:

- 이 시장은 앞으로 몇 년 동안 커질 가능성이 있나요?
- 단기 유행이 아니라 구조적 변화인가요?
- 회사 매출이 아직 시장 전체에 비해 작아 성장 여지가 있나요?
- AI, 반도체, 전력망, 로봇, 보안, 바이오처럼 장기 변화와 연결되어 있나요?

### 2. Growth Evidence

Korean title:

성장 증거

Short explanation:

좋은 이야기가 아니라 실제 숫자나 사건으로 성장 근거가 확인되는지 봅니다.

고수들이 보는 포인트:

성장주는 스토리만으로는 부족합니다. 매출, 수주, 고객사, 신제품, 해외 진출처럼 확인 가능한 증거가 필요합니다.

확인 힌트:

- 최근 매출이 꾸준히 증가하고 있나요?
- 신규 고객이나 대형 계약이 있나요?
- 수주잔고나 판매량 증가가 확인되나요?
- 신제품이나 신사업이 실제 매출로 이어지고 있나요?

### 3. Profit Leverage

Korean title:

이익 레버리지

Short explanation:

매출이 늘어날 때 이익이 더 빠르게 늘어날 수 있는 구조인지 봅니다.

고수들이 보는 포인트:

텐버거급 상승은 매출 증가만으로는 부족한 경우가 많습니다. 매출이 늘면서 영업이익률도 함께 좋아지는 구조가 중요합니다.

확인 힌트:

- 매출 증가와 함께 영업이익률이 개선되고 있나요?
- 고정비 부담이 줄면서 이익률이 좋아질 수 있나요?
- 규모의 경제가 작동하는 사업인가요?
- 가격 결정력이 있나요?

### 4. Competitive Advantage

Korean title:

경쟁 우위

Short explanation:

경쟁사가 쉽게 따라오기 어려운 강점이 있는지 봅니다.

고수들이 보는 포인트:

좋은 산업에 있어도 모든 회사가 승자가 되는 것은 아닙니다. 시간이 지나도 유지될 수 있는 우위가 중요합니다.

확인 힌트:

- 기술 장벽이나 특허가 있나요?
- 고객이 쉽게 다른 회사로 옮기기 어렵나요?
- 브랜드, 원가 경쟁력, 점유율 우위가 있나요?
- 공급망에서 중요한 위치를 차지하고 있나요?

### 5. Valuation Risk

Korean title:

밸류에이션 부담

Short explanation:

좋은 회사라도 이미 너무 비싸게 사면 투자 성과가 낮아질 수 있습니다.

고수들이 보는 포인트:

좋은 회사와 좋은 투자는 다릅니다. 시장의 기대가 이미 가격에 많이 반영되어 있는지 점검해야 합니다.

확인 힌트:

- 최근 주가가 이미 크게 올랐나요?
- PER, PSR, PBR 같은 지표가 과거보다 높아졌나요?
- 동종업계와 비교해 과하게 비싼가요?
- 실적이 조금만 실망스러워도 크게 하락할 위험이 있나요?

### 6. Catalysts

Korean title:

촉매

Short explanation:

시장이 이 회사를 다시 평가하게 만들 사건이 있는지 봅니다.

고수들이 보는 포인트:

좋은 회사라도 시장이 알아보지 못하면 오래 기다려야 할 수 있습니다. 실적 변화나 신제품, 대형 고객 확보 같은 촉매가 중요합니다.

확인 힌트:

- 신제품 출시가 예정되어 있나요?
- 대형 고객사 확보 가능성이 있나요?
- 흑자전환이나 이익 급증 가능성이 있나요?
- 산업 사이클 회복이나 공급 부족 수혜가 있나요?

### 7. Risks and Disconfirming Evidence

Korean title:

리스크와 반증 조건

Short explanation:

내 생각이 틀렸다는 신호가 무엇인지 미리 정해봅니다.

고수들이 보는 포인트:

좋은 분석은 장점만 보는 것이 아니라, 어떤 일이 생기면 이 아이디어가 틀렸다고 판단할지도 함께 정합니다.

확인 힌트:

- 매출 성장이 둔화되면 어떻게 판단할 건가요?
- 마진이 악화되면 투자 아이디어가 약해지나요?
- 주요 고객 이탈 가능성은 없나요?
- 경쟁 심화나 기술 변화 위험은 없나요?
- 내가 틀렸다는 신호를 명확히 말할 수 있나요?

## Result Section

The result section should appear only after:

- The user enters a stock name
- The user answers all seven checklist cards

The result should include:

1. Stock name
2. Total score out of 100
3. Score label
4. Cautious interpretation
5. Strongest areas
6. Weakest areas
7. Suggested next research points
8. Not-investment-advice reminder

## Score Labels

Use these labels:

- 80 to 100: 강한 검토 후보
- 60 to 79: 관심 후보
- 40 to 59: 추가 근거 필요
- 0 to 39: 신중 검토 필요

## Result Tone

The result should not sound like:

- A recommendation
- A prediction
- A buy signal
- A price target
- A guarantee

The result should sound like:

- A self-check summary
- A research guide
- A cautious interpretation
- A learning tool

## Suggested Next Research Points

The result should suggest research areas based on weak categories.

Examples:

- 시장 기회 점수가 낮으면: 시장 규모와 장기 성장성을 추가로 확인해보세요.
- 성장 증거 점수가 낮으면: 최근 매출, 수주, 신규 고객, 실적 발표 자료를 확인해보세요.
- 이익 레버리지 점수가 낮으면: 영업이익률과 원가 구조 변화를 확인해보세요.
- 경쟁 우위 점수가 낮으면: 경쟁사와의 차별점이 실제로 지속 가능한지 확인해보세요.
- 밸류에이션 부담 점수가 낮으면: 현재 가격에 기대감이 얼마나 반영되어 있는지 확인해보세요.
- 촉매 점수가 낮으면: 시장이 재평가할 만한 구체적 사건이 있는지 확인해보세요.
- 리스크 점검 점수가 낮으면: 이 투자 아이디어가 틀렸다는 신호를 먼저 정리해보세요.

## Visual Style

Use Tailwind CSS.

Recommended style:

- Light background
- Centered max-width layout
- Card-based sections
- Rounded corners
- Soft borders
- Clear spacing
- Readable typography
- Calm accent colors
- Mobile-friendly layout
- Buttons with clear selected state

Avoid:

- Red/green trading signal style
- Overly flashy gradients
- Rocket emojis
- Money bag emojis
- Casino-like visuals
- Urgent or hype-driven wording
- Excessive animation

## Empty State

Before the user completes the checklist, the result section can show:

"종목명을 입력하고 7가지 기준을 모두 점검하면 결과가 표시됩니다."

## Required Disclaimer

The disclaimer should be visible near the result and/or bottom of the page.

Required Korean disclaimer:

"이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다."

## No Data Notice

The app should clearly explain that:

- It does not use real-time stock data.
- It does not automatically analyze financial statements.
- It does not predict future returns.
- It does not provide buy or sell recommendations.
- The score is based only on the user's self-assessment.