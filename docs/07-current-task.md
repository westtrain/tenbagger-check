# 07. Current Task

## Task Name

Improve share page CTA and add feedback link.

## Purpose

The shared report page gets views, but users are not yet creating new reports.

The goal is to improve the CTA from the shared report page and add a lightweight feedback link for early users.

## Must Do

1. Change the shared report CTA button text to:

내 관심 종목은 몇 점일까?

2. Add supporting CTA copy near the button:

이 리포트처럼 내가 보고 있는 종목도 7가지 기준으로 점검해볼 수 있습니다.

3. Add a lightweight feedback link using the Google Form URL:

https://forms.gle/MavbYnwLNidVtzQF9

4. Feedback link text:

의견 보내기

5. Feedback supporting copy:

서비스를 써보며 불편한 점이나 추가되면 좋을 기능이 있다면 알려주세요.

6. Open the feedback link in a new tab.
7. Add the feedback link in a low-distraction area, preferably near the bottom of the main page and shared report page.
8. Do not build a custom feedback system.

## Must Preserve

- Existing report creation flow
- Short `/r/[id]` share links
- Share preview metadata and OG image
- Supabase report save/load flow
- Existing scoring logic
- Existing stock search and direct input behavior
- Required investment disclaimer text

## Must Not Do

- Do not add a feedback database table.
- Do not add authentication.
- Do not add user accounts.
- Do not add custom event tracking.
- Do not change scoring logic.
- Do not change report save/load behavior.
- Do not change required disclaimer text.

## Definition of Done

- Shared report CTA is more curiosity-driven.
- Feedback link is visible but not distracting.
- Feedback link opens the Google Form in a new tab.
- Existing share/report flows still work.