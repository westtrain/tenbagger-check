# 09. Pre-launch Checklist

## Goal

This checklist is used before deploying "나만의 종목 분석".

The goal is to verify that the MVP is stable enough for public testing.

---

## 1. Core App

- [ ] Main page loads correctly.
- [ ] Product name is shown as "나만의 종목 분석".
- [ ] Hero headline is clear on mobile.
- [ ] Hero description is readable on mobile.
- [ ] Required disclaimer is visible.
- [ ] The app does not present itself as investment advice.

---

## 2. Stock Search

- [ ] Samsung Electronics can be found by "삼성전자".
- [ ] Samsung Electronics can be found by "005930".
- [ ] Samsung Electronics can be found by "삼전".
- [ ] NVIDIA can be found by "NVIDIA".
- [ ] NVIDIA can be found by "NVDA".
- [ ] NASDAQ search returns expected local US stock options.
- [ ] Search results show name, ticker, and market.
- [ ] Selecting a search result works correctly.

---

## 3. Direct Input

- [ ] Direct input fallback is available when no search result is found.
- [ ] Direct input stock name is limited to 40 characters.
- [ ] Empty or whitespace-only direct input is rejected.
- [ ] Direct input stock is stored as a structured custom stock object.
- [ ] Direct input stock displays only the stock name in result page.
- [ ] Direct input stock displays only the stock name in share page.

---

## 4. Checklist and Memos

- [ ] All seven checklist cards are visible.
- [ ] Each checklist option can be selected.
- [ ] Scoring works after all seven answers are selected.
- [ ] Evidence memo fields are visible.
- [ ] Evidence memo fields are optional.
- [ ] Evidence memo limit is 200 characters.
- [ ] Long URLs or long unbroken strings in memos do not overflow.
- [ ] User-entered line breaks are preserved.

---

## 5. Author Summary

- [ ] Author summary field is visible.
- [ ] Author summary is optional.
- [ ] Author summary limit is 300 characters.
- [ ] Author summary does not affect score.
- [ ] Author summary is shown in the result page.
- [ ] Author summary is shown in the share page.
- [ ] Long URLs or long unbroken strings in author summary do not overflow.
- [ ] User-entered line breaks are preserved.

---

## 6. Result Report

- [ ] Result report appears only after a stock is selected and all seven cards are answered.
- [ ] Score is displayed.
- [ ] Score label is displayed.
- [ ] Strength areas are displayed.
- [ ] Areas needing more checking are displayed.
- [ ] Suggested next research points are displayed.
- [ ] Evidence memos are displayed.
- [ ] Author summary is displayed if provided.
- [ ] Limitation notice is visible.
- [ ] Required investment disclaimer is visible.
- [ ] Share link button appears only after result is complete.
- [ ] Share link button looks balanced on mobile.

---

## 7. Share Link

- [ ] Share link can be generated.
- [ ] Share link is copied to clipboard.
- [ ] Success message is shown after copy.
- [ ] Manual copy fallback is available if clipboard copy fails.
- [ ] Share link opens correctly in a new tab.
- [ ] Share payload uses the current URL-safe format.
- [ ] Legacy share payload still opens if available.
- [ ] Long URLs and special characters in memo/summary do not break share link.

---

## 8. Share Page

- [ ] Share page title is "나만의 종목 분석 공유 리포트".
- [ ] Stock name is visible.
- [ ] Score and score label are visible.
- [ ] At-a-glance strengths and weak areas are visible.
- [ ] Author summary is visible if provided.
- [ ] Evidence memos are visible.
- [ ] Detailed checklist results are visible.
- [ ] Suggested next research points are visible.
- [ ] Share-specific disclaimer is visible.
- [ ] CTA button "나도 내 관심 종목 체크하기" is visible.
- [ ] CTA button links to `/`.

---

## 9. Viral Loop

- [ ] Open a shared report link.
- [ ] Click "나도 내 관심 종목 체크하기".
- [ ] Return to main page.
- [ ] Create a new report.
- [ ] Generate a new share link.
- [ ] Open the new share link.
- [ ] New shared report displays correctly.
- [ ] Direct input 40-character limit still works after CTA re-entry.
- [ ] Memo 200-character limit still works after CTA re-entry.
- [ ] Author summary 300-character limit still works after CTA re-entry.
- [ ] Long text wrapping still works after CTA re-entry.

---

## 10. Error States

- [ ] `/share` shows a friendly error page.
- [ ] `/share?data=invalid` shows a friendly error page.
- [ ] Error page includes CTA back to `/`.
- [ ] Error page does not crash.

---

## 11. Mobile Review

Test at around 390px width.

- [ ] Main hero is readable.
- [ ] Stock search is usable.
- [ ] Search results are readable.
- [ ] Checklist cards are readable.
- [ ] Memo fields are usable.
- [ ] Author summary field is usable.
- [ ] Result report does not overflow horizontally.
- [ ] Share page does not overflow horizontally.
- [ ] Share CTA is easy to tap.

---

## 12. Safety Copy

App-generated copy must not include:

- [ ] 매수 추천
- [ ] 매도 추천
- [ ] 지금 사야 합니다
- [ ] 이 종목은 10배 오릅니다
- [ ] 수익 보장
- [ ] 목표가
- [ ] 강력 매수
- [ ] 다음 텐버거 확정
- [ ] Buy
- [ ] Sell
- [ ] Strong Buy
- [ ] Guaranteed Return
- [ ] Price Target

Required disclaimer must remain visible:

이 서비스는 투자 추천이 아닙니다. 제공되는 점수와 해석은 사용자의 자기 점검을 돕기 위한 참고 정보입니다. 모든 투자 판단과 책임은 투자자 본인에게 있습니다.

---

## 13. Technical Check

Run manually:

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `git status` shows clean working tree before deployment.
- [ ] No unnecessary dependency was added.
- [ ] No backend/API/DB/auth/payment feature was added.