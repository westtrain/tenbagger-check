# 07. Current Task

## Task Name

Add short share links with Supabase stored reports.

## Purpose

The current URL-based share link is too long because the full report data is stored in the query string.

This causes sharing problems in apps such as KakaoTalk.

The goal is to store share reports in Supabase and generate short share links.

Old format:

/share?data=...

New format:

/r/[id]

Example:

/r/a8f3k2

## Must Do

1. Add Supabase client setup for the app.
2. Add an API route to create a stored share report.
3. When the user clicks "공유 링크 만들기", save the current share report data to Supabase.
4. Generate a short random id for the report.
5. Copy a short link using the new route:
   /r/[id]
6. Add a new share report page route:
   /r/[id]
7. The /r/[id] page should load the report data from Supabase and render the same share report UI.
8. Keep the existing /share?data=... route as legacy fallback.
9. If the report id is missing or not found, show a friendly error page.
10. Do not store user name, email, IP address, or login information.
11. Do not require login.

## Data Model

Supabase table:

share_reports

Fields:

- id: text primary key
- data: jsonb not null
- created_at: timestamptz default now()

## Must Preserve

- Stock search and selection
- Direct input fallback
- 40-character custom stock name limit
- Seven checklist cards
- Scoring logic
- Evidence memos
- 200-character memo limit
- Author summary
- 300-character author summary limit
- Existing /share?data=... legacy share page
- Invalid share link error handling
- Required investment disclaimer
- Share-specific disclaimer

## Must Not Do

- Do not change scoring logic.
- Do not change stock search or direct input behavior.
- Do not change required disclaimer text.
- Do not add authentication.
- Do not add payment.
- Do not add user accounts.
- Do not store personal identifiers.

## Environment Variables

Use:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

Do not hardcode keys.

## Definition of Done

- Clicking "공유 링크 만들기" creates a short /r/[id] link.
- The copied link is short enough to work in KakaoTalk.
- /r/[id] loads the stored report and displays the share page.
- /share?data=... still works for legacy links.
- Not found report ids show a friendly error.
- Existing report UI and share page UI remain consistent.