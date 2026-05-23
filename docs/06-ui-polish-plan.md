# 06. UI Polish Plan

## Goal

This document defines the next product polish round for Tenbagger Check.

The project is no longer treated as only a Codex practice app.

It should now be treated as a real MVP that may be publicly launched.

The goal of this polish round is to improve:

- First impression
- Stock selection accuracy
- Result readability
- Shared report readability
- Viral loop through shared reports
- Future extensibility

This round should not add unnecessary complexity.

---

## Product Direction

Tenbagger Check is an educational self-check tool.

It helps users review a stock idea through a structured framework before making emotional investment decisions.

It is not:

- A stock recommendation service
- A buy/sell signal tool
- A target price service
- A return prediction tool
- A personalized investment advisory service

It is:

- A self-check tool
- A thinking framework
- A personal stock idea report generator
- A shareable investment reasoning report

---

## Core UX Problems to Improve

### 1. Stock Name Input Is Too Loose

Currently, users manually type a stock name.

This can cause:

- Typos
- Inconsistent names
- Unclear shared reports
- Lower trust
- Harder future API integration

Examples:

- 삼성전자
- 삼성 전자
- 삼성전저
- 005930
- Samsung Electronics
- SK하이닉스
- 하이닉스
- 000660

The app should move toward a search-and-select experience.

---

### 2. Shared Report Must Be More Readable

The share page is a core viral loop surface.

It should not feel like a raw checklist output.

It should feel like a clean, readable report.

The viewer should understand the report quickly and feel curious enough to try the service.

The shared page should answer:

- What stock is this about?
- What was the score?
- What are the strongest areas?
- What needs more checking?
- What did the author think?
- How can I try this with my own stock?

---

### 3. Main Page Needs Stronger First Impression

The first screen should quickly explain:

- What this service does
- Why the user should use it
- How it is different from a stock recommendation
- What the user will get after completing the checklist

---

### 4. Result Page Should Feel Like a Report

The result should not feel like only a score calculator.

It should feel like a structured self-check report.

Important elements:

- Score and label
- Strengths
- Weak areas
- Evidence memos
- Suggested next research points
- Clear limitations
- Share link action

---

## Polish Round Scope

This polish round should include:

1. Stock search and selection UX
2. Structured stock data model
3. Direct input fallback
4. Main page copy improvement
5. Result section readability improvement
6. Shared report readability improvement
7. CTA improvement
8. Safety and limitation copy improvement

This polish round should not include:

- Backend API
- Database
- Authentication
- Payment
- External stock API
- Real-time stock prices
- Financial statement integration
- AI analysis
- Complex charting
- User accounts

---

## 1. Stock Search and Selection UX

### Goal

Replace loose stock name input with a more structured search-and-select experience.

The app should allow users to search by:

- Korean stock name
- English stock name
- Ticker
- Market

### MVP Approach

Use local static stock data for now.

Do not use an external API in this round.

The local stock data should be structured so that it can later be replaced by an API.

### Stock Data Structure

Use a clear TypeScript type.

Suggested type:

StockOption:
- id: string
- name: string
- ticker: string
- market: string
- aliases?: string[]

Example stock options:
- id: KRX-005930
  name: 삼성전자
  ticker: 005930
  market: KOSPI
  aliases: Samsung Electronics, 삼성 전자, 삼전

- id: KRX-000660
  name: SK하이닉스
  ticker: 000660
  market: KOSPI
  aliases: SK Hynix, 하이닉스

- id: NASDAQ-NVDA
  name: NVIDIA
  ticker: NVDA
  market: NASDAQ
  aliases: 엔비디아

### UI Requirements

The stock input section should include:

- Search input
- Search result dropdown/list
- Selected stock display
- Direct input fallback

Suggested label:

관심 종목 검색

Suggested placeholder:

종목명 또는 티커를 입력하세요. 예: 삼성전자, 005930, NVIDIA, NVDA

Search results should show:

삼성전자  
005930 · KOSPI

Selected stock display should show:

선택된 종목  
삼성전자 · 005930 · KOSPI

### Direct Input Fallback

If the user cannot find a stock, allow direct input.

Suggested copy:

찾는 종목이 없나요? 직접 입력한 이름으로 계속할 수 있습니다.

Button:

직접 입력으로 계속하기

Direct input should create a stock-like object:

- id: CUSTOM-{value}
- name: {value}
- ticker: empty string
- market: 직접 입력
- aliases: empty array

### Future Extension

The local stock list should later be replaceable with:

- Static JSON file
- Remote stock search API
- Server-side stock search
- Cached stock database

Do not hardcode stock search logic in a way that blocks future API integration.

---

## 2. Main Page Copy Improvement

### Goal

Make the service value clear within a few seconds.

### Recommended Hero Copy

Product name:

텐버거 체크

Headline:

관심 종목을 감정적으로 판단하기 전에, 7가지 기준으로 먼저 점검해보세요.

Description:

시장 기회, 성장 증거, 이익 레버리지, 경쟁 우위, 밸류에이션 부담, 촉매, 리스크를 차분히 확인하고 나만의 종목 판단 리포트를 만들어보세요.

Safety note:

이 서비스는 투자 추천이 아니라, 스스로 판단 근거를 정리하기 위한 자기 점검 도구입니다.

### Avoid

Avoid:

- 다음 10배 주식 찾기
- 지금 사야 할 종목
- 수익 기회
- 확실한 텐버거
- 매수 타이밍

---

## 3. Result Section Readability Improvement

### Goal

Make the result section feel like a report, not only a score output.

### Recommended Result Structure

1. Result summary card
2. Strengths and weak areas
3. Evidence memos
4. Suggested next research points
5. Share report action
6. Limitation and disclaimer

### Result Summary Should Show

- Selected stock name
- Ticker and market if available
- Score
- Score label
- Cautious interpretation

Example:

SK하이닉스 · 000660 · KOSPI  
72점 · 관심 후보

### Limitation Copy

Add or reinforce:

이 결과는 사용자가 직접 선택하고 작성한 내용을 바탕으로 계산됩니다. 실제 주가, 재무제표, 뉴스, 공시 데이터는 자동 반영되지 않습니다.

---

## 4. Shared Report Readability Improvement

### Goal

Make the shared report readable, calm, and interesting.

The shared page is a viral loop surface.

It should encourage viewers to create their own report.

### Recommended Share Page Structure

1. Hero summary
2. At-a-glance summary
3. Author evidence memos
4. Detailed checklist results
5. Suggested next research points
6. Disclaimers
7. CTA

### Hero Summary

Show:

- 텐버거 체크 공유 리포트
- Stock name
- Ticker and market if available
- Score
- Score label
- User-generated report notice

Suggested copy:

이 리포트는 사용자가 직접 선택하고 작성한 자기 점검 결과입니다. 투자 추천이 아닙니다.

### At-a-Glance Summary

Show:

- 강점 영역
- 추가 확인 필요

This should appear before detailed checklist results.

### Author Evidence Memos

Section title:

작성자의 판단 근거

Notice:

아래 내용은 사용자가 직접 작성한 메모이며, 텐버거 체크가 검증하거나 추천하는 내용이 아닙니다.

### CTA

Button:

나도 내 관심 종목 체크하기

Link:

/

### Design Requirements

The share page should:

- Be readable at a glance
- Avoid clutter
- Use clear section hierarchy
- Work well on mobile
- Avoid excessive cards
- Avoid flashy trading colors
- Keep memos easy to scan

---

## 5. Safety and Limitation Copy

### Required Investment Disclaimer

Use this exact disclaimer:

이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.

### Share-Specific Disclaimer

Use:

이 공유 리포트는 사용자가 직접 선택하고 작성한 내용을 바탕으로 생성되었습니다. 텐버거 체크는 해당 종목을 추천하거나 사용자 메모를 검증하지 않습니다.

### Data Limitation Notice

Use:

이 결과는 사용자가 직접 선택하고 작성한 내용을 바탕으로 계산됩니다. 실제 주가, 재무제표, 뉴스, 공시 데이터는 자동 반영되지 않습니다.

---

## 6. Extensibility Requirements

Codex should implement this round with future extension in mind.

Important:

- Stock data should be structured.
- Selected stock should not be stored only as a plain string if avoidable.
- Share report data should include stock metadata.
- Search logic should be simple but replaceable.
- UI should not be tightly coupled to hardcoded stock examples.
- Score logic and share logic should remain reusable.
- Avoid over-engineering.

Future extension possibilities:

- Replace local stock data with API
- Add more stock options
- Add ETF support
- Add market filters
- Add saved reports
- Store share reports in DB
- Add Open Graph support for shared reports

---

## 7. Definition of Done

This polish round is complete when:

- Users can search and select a stock from local options.
- Users can continue with direct input if a stock is not found.
- Selected stock shows name, ticker, and market where available.
- Result page shows selected stock metadata.
- Share report includes selected stock metadata.
- Main hero copy is clearer and more compelling.
- Result section is easier to scan.
- Share page is easier to understand at a glance.
- Existing scoring, memo, and share link behavior still works.
- Required disclaimers remain visible.
- No backend, DB, or external API is added.
- Codex does not run git commit or git push.