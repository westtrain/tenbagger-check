# 07. Current Task

## Task Name

Add AI draft feature interest buttons.

## Purpose

Users are viewing shared reports, but they are not yet creating their own reports.

One likely reason is that manually answering seven checklist items and writing memos feels difficult or time-consuming.

The goal is to test interest in a future AI report draft feature without implementing AI generation or payment.

## Must Do

1. Add a small AI draft feature section on the main report creation page after a stock is selected and before the checklist begins.
2. Add a similar small AI draft feature section on the shared report page near the bottom CTA / feedback area.
3. Use this title:

AI로 리포트 초안 만들기

4. Use this supporting copy:

종목 분석이 어렵다면, AI가 7가지 기준의 리포트 초안을 만들어주는 기능을 준비 중입니다.

5. Add a button with this text:

AI 리포트 초안 만들기

6. Add small helper text near the button:

아직 준비 중인 기능입니다. 사용 의향을 알려주세요.

7. Link the button to this Google Form:

https://forms.gle/bjUHGUjcFecCzH7r8

8. Open the Google Form in a new tab.
9. Keep the section visually small and low-distraction.
10. Do not make it look like the AI feature is already available inside the app.

## Main Page Placement

On the main report creation page:

- Show the section only after a stock has been selected.
- Place it before the seven checklist cards.
- Do not show it above the stock search area.

## Share Page Placement

On the shared report page:

- Place the section near the lower CTA / feedback area.
- Do not place it above the main shared report content.
- Keep the existing top CTA and bottom CTA unchanged.

## Must Preserve

- Existing report creation flow
- Existing shared report CTA
- Existing feedback link
- Existing short `/r/[id]` share links
- Existing share preview metadata and OG image
- Existing Supabase report save/load flow
- Existing scoring logic
- Existing stock search and direct input behavior
- Required investment disclaimer text

## Must Not Do

- Do not implement AI report generation.
- Do not add OpenAI or any AI API.
- Do not add payment.
- Do not add checkout.
- Do not add a feedback database table.
- Do not add authentication.
- Do not add user accounts.
- Do not add custom event tracking.
- Do not change scoring logic.
- Do not change report save/load behavior.
- Do not change required disclaimer text.

## Definition of Done

- Main page shows the AI draft interest section after stock selection and before checklist.
- Shared report page shows the AI draft interest section near the bottom CTA / feedback area.
- Buttons link to the Google Form in a new tab.
- Sections clearly say the feature is being prepared, not already available.
- Existing report/share flows still work.