# 07. Current Task

## Task Name

Small mobile copy and layout polish.

## Purpose

Improve the mobile first impression and result share button layout without changing core app logic.

## Must Do

1. Change the visible service name from "텐버거 체크" to "나만의 종목 분석" where it appears as product/service branding.

2. Change the main hero headline to:

혹시 이 종목, 텐버거 후보일까?

3. Change the hero description to:

시장 기회, 성장 증거, 밸류에이션 부담, 리스크까지 7가지 기준으로 차분히 점검하고 나만의 종목 판단 리포트를 만들어보세요.

4. Change the share page title to:

나만의 종목 분석 공유 리포트

5. Fix the mobile layout of the "공유 링크 만들기" button on the main result page so it feels centered or full-width on a 390px mobile viewport.

## Must Preserve

- Stock search and selection
- Direct input fallback
- 40-character custom stock name limit
- Seven checklist cards
- Scoring
- Evidence memos
- 200-character memo limit
- Share link generation
- Share report decoding
- Invalid share link error handling
- Required investment disclaimer
- Share-specific disclaimer

## Must Not Do

- Do not add new features.
- Do not change scoring logic.
- Do not change share encode/decode logic.
- Do not change stock search or direct input behavior.
- Do not change required disclaimer text.

## Definition of Done

- Mobile hero headline is shorter and clearer.
- Service name appears as "나만의 종목 분석".
- Share page title is updated.
- Mobile share button alignment looks balanced.
- Existing core flows still work.