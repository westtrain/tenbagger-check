# 04. QA Checklist

## QA Goal

Check whether version 2 of "Tenbagger Check" matches the updated product direction, design spec, and frontend task.

The app should feel like an educational self-check tool that helps beginner investors think through a stock idea using a structured framework.

The app must not feel like a stock recommendation service, trading signal tool, or profit prediction service.

## Documents to Review

Before QA, review:

- AGENTS.md
- docs/01-product-brief.md
- docs/02-design-spec.md
- docs/03-frontend-task.md

## Functional Checklist

### Page Structure

- [ ] The page has a clear header section.
- [ ] The page has a stock input section.
- [ ] The page has a framework introduction section.
- [ ] The page has exactly seven educational checklist cards.
- [ ] The page has a result section.
- [ ] The page has a visible disclaimer section.

### Header

- [ ] The product name "텐버거 체크" is visible.
- [ ] The headline says "이 종목, 장기 성장 후보일까?"
- [ ] The description explains that the app uses seven criteria.
- [ ] The header does not imply guaranteed returns.
- [ ] The header does not sound like a stock recommendation.

### Stock Input

- [ ] The stock input is visible.
- [ ] The stock input label says "관심 종목".
- [ ] The placeholder gives examples such as 삼성전자, SK하이닉스, NVIDIA.
- [ ] The helper text explains that real stock data is not used.
- [ ] The entered stock name appears in the result.

### Framework Introduction

- [ ] The app explains that a tenbagger candidate is not just a popular theme.
- [ ] The introduction mentions several review factors such as market size, growth evidence, profit leverage, competitive advantage, valuation, catalysts, and risks.
- [ ] The introduction is educational and calm.
- [ ] The introduction does not promise future returns.

## Seven Educational Checklist Cards

### Required Cards

Check that all seven categories are present:

- [ ] 시장 기회
- [ ] 성장 증거
- [ ] 이익 레버리지
- [ ] 경쟁 우위
- [ ] 밸류에이션 부담
- [ ] 촉매
- [ ] 리스크와 반증 조건

### Card Structure

Each card should include:

- [ ] Korean category title
- [ ] Short explanation
- [ ] "고수들이 보는 포인트" section
- [ ] "확인 힌트" bullet list
- [ ] Three selectable judgment buttons

### User Interaction

- [ ] Each card has three selectable options.
- [ ] The selected option is visually distinct.
- [ ] The user can change an answer after selecting it.
- [ ] The score updates when answers change.
- [ ] The result does not appear until all seven cards are answered and a stock name is entered.

## Scoring Checklist

### Total Score

- [ ] The total score is out of 100.
- [ ] The score is based only on the user's self-assessment.
- [ ] The score is not presented as a return prediction.
- [ ] The score is not presented as a buy/sell signal.

### Category Weights

Check that the category weights match:

- [ ] Market Opportunity: 15 points
- [ ] Growth Evidence: 20 points
- [ ] Profit Leverage: 15 points
- [ ] Competitive Advantage: 15 points
- [ ] Valuation Risk: 15 points
- [ ] Catalysts: 10 points
- [ ] Risks and Disconfirming Evidence: 10 points

Total:

- [ ] Weights add up to 100 points.

### Option Scores

For most categories:

- [ ] 강하게 확인됨 gives full points.
- [ ] 일부 확인됨 gives about half points.
- [ ] 아직 불확실함 gives 0 points.

For Valuation Risk:

- [ ] 부담 낮음 gives 15 points.
- [ ] 보통 gives 8 points.
- [ ] 부담 높음 gives 0 points.

For Risks and Disconfirming Evidence:

- [ ] 리스크를 명확히 이해함 gives 10 points.
- [ ] 일부만 이해함 gives 5 points.
- [ ] 거의 점검하지 못함 gives 0 points.

## Result Display Checklist

### Result Visibility

- [ ] Before completion, the empty state message is shown.
- [ ] The result appears only after the user enters a stock name and answers all seven cards.

### Result Content

The result should include:

- [ ] Stock name
- [ ] Score out of 100
- [ ] Score label
- [ ] Cautious interpretation
- [ ] Strongest areas
- [ ] Weakest areas
- [ ] Suggested next research points
- [ ] Not-investment-advice reminder

### Score Labels

- [ ] 80 to 100 shows "강한 검토 후보".
- [ ] 60 to 79 shows "관심 후보".
- [ ] 40 to 59 shows "추가 근거 필요".
- [ ] 0 to 39 shows "신중 검토 필요".

### Strongest and Weakest Areas

- [ ] Strongest areas are based on relatively high category scores.
- [ ] Weakest areas are based on low category scores.
- [ ] Category names are shown in Korean.
- [ ] If no strong areas exist, the app shows a gentle fallback message.
- [ ] If no weak areas exist, the app still reminds users to verify facts externally.

### Research Suggestions

- [ ] Weak categories generate relevant next research suggestions.
- [ ] If no weak categories exist, a general research suggestion is shown.
- [ ] Suggestions encourage further research, not buying or selling.

## Safety and Compliance Checklist

### Investment Advice Safety

The app must not include phrases that sound like investment advice.

Check that the app does not say:

- [ ] "매수 추천"
- [ ] "매도 추천"
- [ ] "지금 사야 합니다"
- [ ] "이 종목은 10배 오릅니다"
- [ ] "수익 보장"
- [ ] "목표가"
- [ ] "강력 매수"
- [ ] "다음 텐버거 확정"
- [ ] "Buy"
- [ ] "Sell"
- [ ] "Strong buy"
- [ ] "Guaranteed return"
- [ ] "Target price"

### Required Positioning

Check that the app clearly communicates:

- [ ] This is not investment advice.
- [ ] The score is only a self-check result.
- [ ] The app does not use real stock data.
- [ ] The app does not automatically analyze financial statements.
- [ ] The app does not predict future returns.
- [ ] The app does not provide buy or sell recommendations.
- [ ] The user is responsible for investment decisions.

### Required Disclaimer

The app must show this exact Korean disclaimer:

"이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다."

- [ ] The disclaimer is visible.
- [ ] The disclaimer is easy to read.
- [ ] The disclaimer is shown near the result or bottom of the page.

## Design Checklist

### Visual Tone

- [ ] The design feels clean.
- [ ] The design feels calm.
- [ ] The design feels educational.
- [ ] The design feels beginner-friendly.
- [ ] The design does not feel like a gambling or hype service.
- [ ] The design avoids urgent profit-driven language.

### Layout

- [ ] The layout is centered and readable.
- [ ] The content has enough spacing.
- [ ] Cards have rounded corners or clear boundaries.
- [ ] The input is easy to find.
- [ ] Educational sections are easy to scan.
- [ ] The result section is easy to understand.

### Mobile Usability

- [ ] The page works on a narrow mobile-sized screen.
- [ ] Buttons are easy to tap.
- [ ] Text remains readable.
- [ ] Cards do not overflow horizontally.
- [ ] The seven-card checklist remains usable on mobile.

## Technical Checklist

### Project Scope

- [ ] No backend API was added.
- [ ] No database was added.
- [ ] No authentication was added.
- [ ] No payment feature was added.
- [ ] No external stock API was added.
- [ ] No AI API was added.
- [ ] No unnecessary dependency was installed.
- [ ] No `git commit` was run by Codex.
- [ ] No `git push` was run by Codex.

### Code Quality

- [ ] The implementation is easy for a beginner to understand.
- [ ] Variable names are clear.
- [ ] React state is used simply.
- [ ] The code is not over-engineered.
- [ ] The code does not create unnecessary files.
- [ ] The app runs with `npm run dev`.

## Manual Test Cases

### Test Case 1: Empty State

Steps:

1. Open the app.
2. Do not enter a stock name.
3. Do not answer the checklist.

Expected result:

- The app shows the empty state message.
- No score result is shown yet.

### Test Case 2: Complete Strong Case

Steps:

1. Enter "NVIDIA".
2. Choose the strongest/most positive answer for all seven categories:
   - Market Opportunity: 강하게 확인됨
   - Growth Evidence: 강하게 확인됨
   - Profit Leverage: 강하게 확인됨
   - Competitive Advantage: 강하게 확인됨
   - Valuation Risk: 부담 낮음
   - Catalysts: 강하게 확인됨
   - Risks and Disconfirming Evidence: 리스크를 명확히 이해함

Expected result:

- Score should be 100.
- Label should be "강한 검토 후보".
- Result should still include a cautious disclaimer.
- Result should not say the stock will rise.

### Test Case 3: Medium Case

Steps:

1. Enter "삼성전자".
2. Choose:
   - Market Opportunity: 강하게 확인됨
   - Growth Evidence: 일부 확인됨
   - Profit Leverage: 일부 확인됨
   - Competitive Advantage: 강하게 확인됨
   - Valuation Risk: 보통
   - Catalysts: 일부 확인됨
   - Risks and Disconfirming Evidence: 일부만 이해함

Expected result:

- Score should be 66.
- Label should be "관심 후보".

### Test Case 4: Weak Case

Steps:

1. Enter "테스트종목".
2. Choose:
   - Market Opportunity: 아직 불확실함
   - Growth Evidence: 아직 불확실함
   - Profit Leverage: 일부 확인됨
   - Competitive Advantage: 아직 불확실함
   - Valuation Risk: 부담 높음
   - Catalysts: 아직 불확실함
   - Risks and Disconfirming Evidence: 거의 점검하지 못함

Expected result:

- Score should be 8.
- Label should be "신중 검토 필요".

### Test Case 5: Result Does Not Appear Too Early

Steps:

1. Enter a stock name.
2. Answer only six out of seven cards.

Expected result:

- The full result should not appear yet.
- The empty or incomplete state message should remain visible.

### Test Case 6: Change Answer

Steps:

1. Complete the checklist.
2. Change one answer.

Expected result:

- The score updates immediately.
- The score label updates if the score range changes.
- Strongest and weakest areas update if needed.

### Test Case 7: Safety Language Check

Steps:

1. Search the visible UI text.
2. Check result text and labels.

Expected result:

- No forbidden investment recommendation wording is visible.
- The disclaimer is visible.
- The app clearly says it is not investment advice.

## QA Output Format

When QA is performed, summarize results in this format:

### Passed

- List items that passed.

### Issues Found

- List issues found.
- Explain why each issue matters.
- Suggest a minimal fix.

### Final Verdict

Use one of:

- Pass
- Pass with minor issues
- Needs fixes