# 07. Current Task

## Task Name

Add share preview metadata and dynamic OG image.

## Purpose

Short share links now work with `/r/[id]`.

The next goal is to make shared links more attractive on KakaoTalk, X, Threads, and other platforms by showing a meaningful preview.

The preview should help users understand what is inside the link before clicking.

## Must Do

1. Add dynamic metadata for `/r/[id]`.
2. Metadata should use stored report data from Supabase.
3. Metadata title should include stock name.
4. Metadata description should include score and score label.
5. Add Open Graph metadata.
6. Add Twitter card metadata.
7. Add a dynamic OG image route for shared reports.
8. The OG image should show:
   - Service name: 나만의 종목 분석
   - Stock name
   - Ticker and market if available
   - Score
   - Score label
9. Use a safe fallback preview if report data cannot be loaded.
10. Keep `/share?data=...` legacy route working.
11. Do not change report creation or scoring logic.

## Suggested Preview Copy

For `/r/[id]`:

Title:

`{stockName} 종목 분석 리포트`

Description:

`{score}점 · {scoreLabel} | 나만의 종목 분석에서 작성된 자기 점검 리포트입니다.`

Fallback title:

`나만의 종목 분석 공유 리포트`

Fallback description:

`7가지 기준으로 작성한 종목 판단 리포트입니다.`

## Suggested OG Image Layout

Image size:

- 1200 x 630

Content:

- Top: 나만의 종목 분석
- Main: stock name
- Sub: ticker · market
- Score: 85점
- Label: 강한 검토 후보
- Footer: 혹시 이 종목, 텐버거 후보일까?

## Must Preserve

- `/r/[id]` short link behavior
- Supabase report loading
- Existing share report UI
- Existing `/share?data=...` legacy route
- Score calculation
- Stock search and direct input behavior
- Author summary
- Evidence memos
- Required disclaimer text
- Share-specific disclaimer text

## Must Not Do

- Do not change scoring logic.
- Do not change report save/load behavior unless needed for metadata.
- Do not change stock search or direct input behavior.
- Do not add authentication.
- Do not add payment.
- Do not store personal identifiers.
- Do not add new dependencies unless absolutely necessary.

## Definition of Done

- `/r/[id]` has dynamic title and description metadata.
- `/r/[id]` has Open Graph metadata.
- `/r/[id]` has Twitter card metadata.
- Shared preview includes stock name, score, and score label.
- A dynamic OG image is generated for `/r/[id]`.
- Missing or invalid report ids use fallback metadata.
- Existing short share links still open normally.
- Existing legacy share links still open normally.