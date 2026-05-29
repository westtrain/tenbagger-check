# 07. Current Task

## Task Name

Add lightweight click event logging.

## Purpose

Shared reports are getting views, but users are not yet creating new reports.

The goal is to track whether users click key buttons without adding paid analytics or user tracking.

Use Supabase `event_logs` to record simple click events.

## Must Do

1. Add a lightweight event logging API route.
2. Record only these event names:
   - share_cta_click
   - ai_draft_interest_click
   - feedback_click
3. Track clicks on shared report CTA buttons:
   - "내 관심 종목은 몇 점일까?"
4. Track clicks on AI draft interest buttons:
   - "AI 리포트 초안 만들기"
5. Track clicks on feedback links:
   - "의견 보내기"
6. Store only:
   - event_name
   - page_path
   - report_id if available
   - created_at via Supabase default
7. Do not store IP address, user name, email, browser fingerprint, or personal identifiers.
8. If event logging fails, the button/link should still work normally.
9. Keep the implementation small.

## Supabase Table

event_logs

Fields:

- id: uuid primary key default gen_random_uuid()
- event_name: text not null
- page_path: text
- report_id: text
- created_at: timestamptz default now()

## Must Preserve

- Existing report creation flow
- Existing shared report CTA
- Existing AI draft interest buttons
- Existing feedback links
- Existing short `/r/[id]` share links
- Existing share preview metadata and OG image
- Existing Supabase report save/load flow
- Existing scoring logic
- Existing stock search and direct input behavior
- Required investment disclaimer text

## Must Not Do

- Do not add paid analytics.
- Do not add Vercel custom events.
- Do not add Google Analytics.
- Do not add cookies.
- Do not add authentication.
- Do not add user accounts.
- Do not store personal identifiers.
- Do not change scoring logic.
- Do not change report save/load behavior.
- Do not change required disclaimer text.

## Definition of Done

- Clicking shared report CTA logs `share_cta_click`.
- Clicking AI draft interest button logs `ai_draft_interest_click`.
- Clicking feedback link logs `feedback_click`.
- Button/link behavior still works even if logging fails.
- Supabase `event_logs` receives rows.
- Existing report/share flows still work.