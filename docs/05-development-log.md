# 05. Development Log

## Project Name

Tenbagger Check

## Project Goal

Tenbagger Check는 관심 있는 종목이 장기 성장 후보인지 스스로 점검할 수 있게 도와주는 교육형 웹앱이다.

이 프로젝트는 투자 추천 서비스가 아니라, 사용자가 투자 아이디어를 더 신중하게 검토하도록 돕는 자기 점검 도구다.

---

## Current Version

### v1: Basic Checklist MVP

초기 버전에서는 다음 기능을 구현했다.

- 종목명 입력
- 5개 기본 체크리스트 질문
- 100점 만점 점수 계산
- 점수 구간별 라벨 표시
- 투자 추천이 아니라는 고지 표시

### v2: Advanced Investor Framework

v2에서는 단순 체크리스트를 더 고급 판단 프레임으로 개선했다.

기존 5개 질문을 제거하고, 경험 많은 투자자들이 종목을 볼 때 자주 확인하는 7가지 기준으로 바꿨다.

7가지 기준:

1. 시장 기회
2. 성장 증거
3. 이익 레버리지
4. 경쟁 우위
5. 밸류에이션 부담
6. 촉매
7. 리스크와 반증 조건

각 기준은 단순 질문이 아니라 다음 구조를 가진 교육 카드로 구성된다.

- 카테고리 제목
- 짧은 설명
- 고수들이 보는 포인트
- 확인 힌트
- 사용자의 판단 선택지

---

## Important Product Direction

이 서비스는 다음을 하지 않는다.

- 종목 추천
- 매수/매도 추천
- 목표가 제시
- 수익 보장
- 실시간 주가 분석
- 재무제표 자동 분석
- AI 기반 종목 추천

이 서비스는 다음을 한다.

- 사용자가 종목 아이디어를 스스로 점검하도록 돕는다.
- 투자 전 확인해야 할 기준을 알려준다.
- 강점과 약점을 정리한다.
- 추가로 조사해야 할 내용을 제안한다.
- 감정적 투자 결정을 줄이도록 돕는다.

---

## Current MVP Features

현재 구현된 기능:

- 관심 종목명 입력
- 7개 교육형 체크리스트 카드
- 각 항목별 선택 버튼
- 가중치 기반 100점 만점 점수 계산
- 점수 구간별 라벨 표시
- 조심스러운 해석 표시
- 강점 영역 표시
- 약점 영역 표시
- 약점 기반 추가 조사 제안
- 투자 추천이 아니라는 필수 고지 표시
- 실시간 데이터와 자동 분석을 사용하지 않는다는 안내 표시

---

## Scoring System

총점은 100점이다.

| 기준 | 배점 |
|---|---:|
| 시장 기회 | 15 |
| 성장 증거 | 20 |
| 이익 레버리지 | 15 |
| 경쟁 우위 | 15 |
| 밸류에이션 부담 | 15 |
| 촉매 | 10 |
| 리스크와 반증 조건 | 10 |

점수 라벨:

| 점수 | 라벨 |
|---:|---|
| 80 ~ 100 | 강한 검토 후보 |
| 60 ~ 79 | 관심 후보 |
| 40 ~ 59 | 추가 근거 필요 |
| 0 ~ 39 | 신중 검토 필요 |

---

## Safety Rules

앱에서는 다음 표현을 사용하지 않는다.

- 매수 추천
- 매도 추천
- 지금 사야 합니다
- 이 종목은 10배 오릅니다
- 수익 보장
- 목표가
- 강력 매수
- 다음 텐버거 확정
- Buy
- Sell
- Strong buy
- Guaranteed return
- Target price

필수 고지 문구:

"이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다."

---

## Development Workflow

기본 개발 흐름:

1. 아이디어를 먼저 문서로 정리한다.
2. docs 문서를 업데이트한다.
3. Codex에게 문서를 읽게 한다.
4. Codex에게 한 번에 하나의 작업만 맡긴다.
5. Codex는 코드 수정까지만 한다.
6. 사용자가 브라우저에서 직접 확인한다.
7. QA 체크리스트 기준으로 검토한다.
8. 문제가 없으면 사용자가 직접 commit/push 한다.

Codex에게 금지할 것:

- 임의로 git commit 실행
- 임의로 git push 실행
- 새 라이브러리 설치
- 백엔드/API/DB 추가
- 투자 추천처럼 보이는 문구 사용

---

## Git History Summary

현재까지 주요 커밋 흐름:

1. Initial tenbagger check MVP
2. Update docs for advanced tenbagger framework
3. Upgrade app to advanced tenbagger framework
4. Fix required investment disclaimer wording
5. Update README for tenbagger check project

---

## Next Improvement Ideas

다음 개선 후보:

### 1. 사용자 입력형 근거 메모

각 항목에서 사용자가 왜 그렇게 판단했는지 메모를 남길 수 있게 한다.

예:

- 성장 증거 메모
- 밸류에이션 부담 메모
- 리스크 메모

### 2. 점수 결과 저장

브라우저 localStorage를 사용해 최근 분석 결과를 저장한다.

처음에는 서버나 DB 없이 로컬 저장만 고려한다.

### 3. 결과 공유용 텍스트 생성

분석 결과를 복사할 수 있는 요약 문구를 만든다.

단, 투자 추천처럼 보이지 않게 주의한다.

### 4. 숫자 입력 기반 v3

사용자가 직접 다음 숫자를 입력하게 한다.

- 최근 매출 성장률
- 영업이익률 변화
- 부채비율
- PER 또는 PSR
- 최근 주가 상승률

이후 점수 계산을 조금 더 객관적으로 만든다.

### 5. 실제 데이터 연동

향후 가능하지만 지금은 제외한다.

- 실시간 주가
- 재무제표
- 뉴스
- 공시
- AI 분석

실제 데이터 연동은 비용, 정확성, 규제 리스크를 고려한 뒤 진행한다.

---

## Current Recommended Next Step

바로 실제 데이터 연동으로 가지 않는다.

다음 단계는 먼저:

1. 사용자가 각 항목별 판단 근거를 메모할 수 있게 만들기
2. 결과에 "내가 추가로 확인해야 할 것"을 더 잘 보여주기
3. 결과 공유용 요약 텍스트 만들기

이 세 가지 중 하나를 선택하는 것이 좋다.

---

## Latest MVP Update

### Product Name Update

The product name was changed from "Tenbagger Check" / "텐버거 체크" to:

**나만의 종목 분석**

The updated positioning is:

- A personal stock analysis report tool
- A self-check tool for reviewing stock ideas
- A shareable reasoning report generator

The main hero headline is now:

**혹시 이 종목, 텐버거 후보일까?**

The hero description is:

**시장 기회, 성장 증거, 밸류에이션 부담, 리스크까지 7가지 기준으로 차분히 평가하고 나만의 종목 판단 리포트를 만들어보세요.**

---

### Stock Search and Direct Input

The app now supports local stock search and selection.

Implemented behavior:

- Search by stock name
- Search by ticker
- Search by alias
- Search by market
- Show stock name, ticker, and market in search results
- Store selected stock as structured metadata
- Allow direct input fallback when no stock is found
- Limit custom stock names to 40 characters
- Prevent empty or whitespace-only custom stock names
- Hide ticker and market metadata for custom direct-input stocks

The current implementation uses local static stock data.

Future extension:

- Replace local stock data with a real stock search API
- Add more markets
- Add ETF support
- Add cached stock search data

---

### Evidence Memo Improvements

Each checklist category includes an evidence memo field.

Current behavior:

- Memo is optional
- Memo does not affect score
- Memo has a 200-character limit
- Memo is shown in the result report
- Memo is included in the shared report
- Long URLs and long unbroken strings are forced to wrap
- User-entered line breaks are preserved

A key UI bug was fixed:

- Long memo text could overflow outside report cards.
- The root cause was not only missing text wrapping, but also CSS grid min-width behavior.
- The fix included minmax(0, 1fr), min-w-0, max-w-full, overflow-hidden, break-all, and overflow-wrap:anywhere.

---

### URL-Based Share Report

The app now supports URL-based shared reports.

Current behavior:

- The user completes a report.
- The user clicks "공유 링크 만들기".
- The report is encoded into a URL-safe share payload.
- The shared page renders the report from /share?data=...
- The shared page includes a CTA back to /.
- The shared page explains that the report is user-generated and not investment advice.

The share data includes:

- Stock metadata
- Score
- Score label
- Score interpretation
- Strongest areas
- Weakest areas
- Research suggestions
- Category judgments
- User evidence memos
- Created date

Encoding update:

- New share links use a v2. prefix with URL-safe base64 payloads.
- Legacy encodeURIComponent(JSON.stringify(...)) links are still supported for backward compatibility.
- This reduces risk from query parameter decoding/re-encoding across browsers or messaging apps.

---

### Viral Loop Flow

The core viral loop is:

1. User creates a report.
2. User shares the report link.
3. Viewer opens the shared report.
4. Viewer clicks "나도 내 관심 종목 체크하기".
5. Viewer creates their own report.
6. Viewer shares a new report link.

This flow has been tested and stabilized.

Important fixes:

- Shared page CTA returns to /.
- New reports created after entering from a shared page work normally.
- Custom stock name limits still apply after CTA re-entry.
- Memo wrapping still works after CTA re-entry.
- New shared links work after CTA re-entry.

---

### Current Development Workflow

To reduce Codex usage:

- Codex should read only AGENTS.md and docs/07-current-task.md for most tasks.
- Codex should not run npm run lint, npm run build, or npm run dev unless explicitly asked.
- Codex should not run git commit or git push.
- The user runs lint/build/dev/git commands manually.
- Codex should focus on minimal code changes and concise change summaries.

---

### Current MVP Status

The current MVP includes:

- Product name and mobile hero copy polish
- Local stock search and selection
- Direct input fallback
- 40-character direct input name limit
- Seven-category self-check framework
- Evidence memo fields
- 200-character memo limit
- Weighted 100-point score
- Strength and weak-area summary
- Suggested next research points
- URL-based share report
- User memo sharing
- Shared report CTA
- Invalid share link friendly error
- Required investment disclaimers

The next recommended steps are:

1. Manual mobile UX review
2. README and documentation cleanup
3. Pre-launch checklist
4. Vercel deployment preparation
5. Open Graph metadata planning

---

## Short Share Links and Share Preview Update

The app now supports short share links using Supabase stored reports.

Previous share format:

/share?data=...

New share format:

/r/[id]

This change was added because long URL-based share links could fail to become clickable in KakaoTalk.

Current behavior:

- Report data is stored in the Supabase `share_reports` table.
- The app generates a short `/r/[id]` share link.
- `/r/[id]` loads the stored report and renders the shared report page.
- Existing `/share?data=...` legacy links are still supported.
- Missing or invalid report ids show a friendly error page.

Share preview support was also added:

- `/r/[id]` generates dynamic metadata.
- Open Graph metadata is generated from stored report data.
- Twitter card metadata is generated from stored report data.
- Dynamic OG image is generated for shared reports.
- The preview image shows service name, stock name, ticker/market when available, score, and score label.

Manual platform testing confirmed that previews appear correctly on:

- X
- Threads
- KakaoTalk

This completes the core viral sharing loop for the MVP.