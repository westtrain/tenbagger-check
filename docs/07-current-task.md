# 07. Current Task

## Task Name

Improve shared report CTA placement.

## Purpose

Shared report pages are getting views, but users are not yet creating their own reports.

The goal is to make the CTA more visible and easier to understand by adding an additional CTA near the top of the shared report page.

## Must Do

1. Add an additional CTA section near the top of the shared report page.
2. Place it after the main hero/summary area or near the first score summary area.
3. Keep the existing bottom CTA.
4. Use this CTA button text:

내 관심 종목은 몇 점일까?

5. Use this supporting copy:

종목명만 입력하면 7가지 기준으로 나만의 종목 판단 리포트를 만들 수 있습니다.

6. The CTA should link to `/`.
7. The CTA should be visually noticeable but not too aggressive.
8. The CTA should look good on mobile.

## Must Preserve

- Existing bottom CTA
- Existing feedback link
- Existing short `/r/[id]` share links
- Existing share preview metadata and OG image
- Existing Supabase report save/load flow
- Existing scoring logic
- Existing stock search and direct input behavior
- Required investment disclaimer text

## Must Not Do

- Do not change scoring logic.
- Do not change report save/load behavior.
- Do not change OG image or metadata.
- Do not change stock search or direct input behavior.
- Do not add authentication.
- Do not add user accounts.
- Do not add custom event tracking.
- Do not add new dependencies.

## Definition of Done

- Shared report page has a CTA near the top.
- Existing bottom CTA remains.
- CTA button text is "내 관심 종목은 몇 점일까?"
- CTA links to `/`.
- Mobile layout looks balanced.
- Existing report/share flows still work.