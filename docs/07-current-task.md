# 07. Current Task

## Task Name

Add author summary to stock report.

## Purpose

Add an optional author summary field so users can explain their overall view of the stock after completing the checklist.

This makes the report more readable and more valuable when shared.

## Must Do

1. Add an optional textarea for "작성자의 총평".
2. The summary should not affect scoring.
3. Limit the summary to 300 characters.
4. Show character count, for example 120 / 300.
5. Preserve user line breaks.
6. Prevent long text or long URLs from overflowing the layout.
7. Show the summary in the main result report.
8. Include the summary in the shared report data.
9. Show the summary on the share page.
10. Place the summary before detailed evidence memos on the share page.

## Copy

Label:

작성자의 총평

Placeholder:

이 종목을 종합적으로 어떻게 보고 있는지 적어보세요. 예: 강점은 크지만 밸류에이션 부담이 있어 추가 확인이 필요함.

Share page notice:

아래 총평은 사용자가 직접 작성한 의견이며, 나만의 종목 분석이 검증하거나 추천하는 내용이 아닙니다.

Empty state:

작성된 총평이 없습니다.

## Must Preserve

- Stock search and selection
- Direct input fallback
- 40-character custom stock name limit
- Seven checklist cards
- Scoring logic
- Evidence memos
- 200-character memo limit
- Share link generation
- Share report decoding
- Invalid share link error handling
- Required investment disclaimer
- Share-specific disclaimer

## Must Not Do

- Do not change scoring logic.
- Do not change stock search or direct input behavior.
- Do not change required disclaimer text.
- Do not add backend, database, API, authentication, payment, or new dependencies.

## Definition of Done

- Users can write an optional author summary.
- The summary has a 300-character limit.
- The summary does not affect score.
- The result page displays the summary.
- The share page displays the summary.
- Shared report data includes the summary.
- Existing share links still work.
- Long summary text does not break layout.