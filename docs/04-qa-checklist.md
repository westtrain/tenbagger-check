# 04. QA Checklist

## QA Goal

Check whether the first MVP of "Tenbagger Check" matches the product direction, design spec, and frontend task.

The QA process should verify that the app works correctly and does not look like a stock recommendation or profit prediction service.

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
- [ ] The page has five checklist questions.
- [ ] The page has a result section.
- [ ] The page has a visible disclaimer section.

### Stock Input

- [ ] The stock input is visible.
- [ ] The stock input label says "관심 종목".
- [ ] The placeholder gives examples such as 삼성전자, SK하이닉스, NVIDIA.
- [ ] The helper text explains that real stock data is not used.
- [ ] The entered stock name appears in the result title.

### Checklist Questions

- [ ] There are exactly five checklist questions.
- [ ] Each question has three selectable options.
- [ ] The first four questions use 높음 / 보통 / 낮음.
- [ ] The fifth question uses 낮음 / 보통 / 높음 for entry risk.
- [ ] The selected option is visually distinct.
- [ ] The user can change an answer after selecting it.

### Score Calculation

- [ ] The total score is out of 100.
- [ ] Each of the five categories contributes up to 20 points.
- [ ] For the first four questions:
  - 높음 gives 20 points.
  - 보통 gives 10 points.
  - 낮음 gives 0 points.
- [ ] For entry risk:
  - 낮음 gives 20 points.
  - 보통 gives 10 points.
  - 높음 gives 0 points.
- [ ] The score updates when the user changes an answer.

### Result Display

- [ ] The result appears only after the user enters a stock name and answers all five questions.
- [ ] Before completion, the empty state message is shown.
- [ ] The result shows the stock name.
- [ ] The result shows the score out of 100.
- [ ] The result shows a score label.
- [ ] The result shows a cautious interpretation.
- [ ] The result includes strengths or positive factors.
- [ ] The result includes risks or caution points.
- [ ] The result includes a not-investment-advice reminder.

### Score Labels

- [ ] 80 to 100 shows "강한 검토 후보".
- [ ] 60 to 79 shows "관심 후보".
- [ ] 40 to 59 shows "추가 근거 필요".
- [ ] 0 to 39 shows "신중 검토 필요".

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

### Required Positioning

Check that the app clearly communicates:

- [ ] This is not investment advice.
- [ ] The score is only a self-check result.
- [ ] The app does not use real stock data.
- [ ] The app does not predict future returns.
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
- [ ] The design feels beginner-friendly.
- [ ] The design does not feel like a gambling or hype service.
- [ ] The design avoids urgent profit-driven language.

### Layout

- [ ] The layout is centered and readable.
- [ ] The content has enough spacing.
- [ ] Cards have rounded corners or clear boundaries.
- [ ] The input is easy to find.
- [ ] The result section is easy to understand.

### Mobile Usability

- [ ] The page works on a narrow mobile-sized screen.
- [ ] Buttons are easy to tap.
- [ ] Text remains readable.
- [ ] Cards do not overflow horizontally.

## Technical Checklist

### Project Scope

- [ ] No backend API was added.
- [ ] No database was added.
- [ ] No authentication was added.
- [ ] No payment feature was added.
- [ ] No external stock API was added.
- [ ] No AI API was added.
- [ ] No unnecessary dependency was installed.

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

### Test Case 2: Complete High Score

Steps:

1. Enter "NVIDIA".
2. Choose high-positive answers:
   - Market Growth: 높음
   - Company Growth: 높음
   - Competitive Advantage: 높음
   - Financial Quality: 높음
   - Entry Risk: 낮음

Expected result:

- Score should be 100.
- Label should be "강한 검토 후보".

### Test Case 3: Medium Score

Steps:

1. Enter "삼성전자".
2. Choose:
   - Market Growth: 높음
   - Company Growth: 보통
   - Competitive Advantage: 보통
   - Financial Quality: 높음
   - Entry Risk: 보통

Expected result:

- Score should be 70.
- Label should be "관심 후보".

### Test Case 4: Low Score

Steps:

1. Enter "테스트종목".
2. Choose:
   - Market Growth: 낮음
   - Company Growth: 낮음
   - Competitive Advantage: 보통
   - Financial Quality: 낮음
   - Entry Risk: 높음

Expected result:

- Score should be 10.
- Label should be "신중 검토 필요".

### Test Case 5: Change Answer

Steps:

1. Complete the checklist.
2. Change one answer.

Expected result:

- The score updates immediately.
- The label updates if the score range changes.

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