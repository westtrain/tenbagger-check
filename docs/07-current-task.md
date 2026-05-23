# 07. Current Task

## Task Name

Pre-launch UX polish: stock search, result readability, and share report readability.

## Purpose

This task improves the current MVP before public release.

Do not add random experimental features.

Focus only on:

- Stock search and selection
- Main page copy improvement
- Result section readability
- Share report readability
- Preserving existing scoring, memo, and share link behavior

## Documents to Read

For implementation, read:

- AGENTS.md
- docs/07-current-task.md

If more detail is needed, refer to:

- docs/06-ui-polish-plan.md

Do not read all project documents unless necessary.

## Must Do

### 1. Stock Search and Selection

Replace loose stock name input with a simple local search-and-select UX.

Requirements:

- Use local static stock data.
- Allow search by stock name, ticker, market, or alias.
- Show search results with name, ticker, and market.
- Store selected stock as structured data, not only a plain string.
- Allow direct input fallback if the stock is not found.
- Direct input should create a structured custom stock object.
- Do not use an external stock API.

Suggested initial stocks:

- 삼성전자 / 005930 / KOSPI
- SK하이닉스 / 000660 / KOSPI
- 삼성전기 / 009150 / KOSPI
- 삼성SDI / 006400 / KOSPI
- NAVER / 035420 / KOSPI
- 카카오 / 035720 / KOSPI
- 현대차 / 005380 / KOSPI
- 한화에어로스페이스 / 012450 / KOSPI
- NVIDIA / NVDA / NASDAQ
- Apple / AAPL / NASDAQ
- Tesla / TSLA / NASDAQ
- Microsoft / MSFT / NASDAQ
- Alphabet / GOOGL / NASDAQ
- Amazon / AMZN / NASDAQ
- Meta Platforms / META / NASDAQ

### 2. Main Page Copy

Improve the hero copy.

Use this direction:

- 관심 종목을 감정적으로 판단하기 전에, 7가지 기준으로 먼저 점검해보세요.
- 시장 기회, 성장 증거, 이익 레버리지, 경쟁 우위, 밸류에이션 부담, 촉매, 리스크를 차분히 확인하고 나만의 종목 판단 리포트를 만들어보세요.
- 이 서비스는 투자 추천이 아니라, 스스로 판단 근거를 정리하기 위한 자기 점검 도구입니다.

### 3. Result Readability

Make the result section feel more like a structured report.

Show:

- Selected stock name
- Ticker and market if available
- Score
- Score label
- Strengths
- Weak areas
- Evidence memos
- Research suggestions
- Share link action
- Limitation and disclaimer

Add or preserve this limitation copy:

이 결과는 사용자가 직접 선택하고 작성한 내용을 바탕으로 계산됩니다. 실제 주가, 재무제표, 뉴스, 공시 데이터는 자동 반영되지 않습니다.

### 4. Share Report Readability

Improve the shared report page so it is easy to understand at a glance.

Preserve:

- Hero summary
- At-a-glance summary
- Author evidence memos
- Detailed checklist results
- Suggested next research points
- Disclaimers
- CTA button

The share report should include selected stock metadata.

CTA button:

나도 내 관심 종목 체크하기

CTA link:

/

## Must Preserve

Do not break:

- Seven checklist cards
- Scoring
- Score labels
- Evidence memo fields
- 200-character memo limit
- Share link creation
- Share report decoding
- Invalid share link error handling
- Clipboard copy behavior
- Required investment disclaimer
- Share-specific disclaimer

## Must Not Do

Do not add:

- Backend API
- Database
- Authentication
- Payment
- External stock API
- Real-time price data
- Financial statement integration
- AI API
- New dependency unless explicitly approved

Do not run:

- git commit
- git push

## Extensibility Notes

Keep the implementation simple but extensible.

Important:

- Stock data should be structured.
- Stock search logic should be replaceable later with an API.
- Share report data should include stock metadata.
- Scoring logic should remain reusable.
- Share encode/decode logic should remain isolated from UI.
- Do not over-engineer.

## Definition of Done

This task is complete when:

- Users can search and select a stock from local options.
- Users can continue with direct input if a stock is not found.
- Selected stock shows name, ticker, and market.
- Result page shows selected stock metadata.
- Share report includes selected stock metadata.
- Main hero copy is clearer.
- Result section is easier to scan.
- Share page is easier to understand.
- Existing scoring, memo, and share link behavior still works.
- Required disclaimers remain visible.
- npm run lint passes.
- npm run build passes.
- Codex does not run git commit or git push.