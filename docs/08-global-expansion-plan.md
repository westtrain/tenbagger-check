# 08. Global Expansion Plan

## Goal

Prepare "나만의 종목 분석" for future global expansion without over-engineering the current MVP.

The current priority is still to launch and validate the Korean MVP first.

---

## Initial Scope

For now, the service should focus on:

- Korean language
- Future English support
- Korean stock market
- US stock market

Other languages and markets should be added only if actual user demand appears.

---

## Current MVP

The current MVP uses:

- Korean UI
- Local stock data
- Korean and US stock examples
- URL-based share reports
- No backend
- No database
- No authentication
- No payment
- No external stock API

This lightweight structure is useful for early validation.

---

## Future Language Support

Planned initial languages:

- Korean
- English

Do not implement full i18n yet unless explicitly requested.

However, future code should avoid making global expansion unnecessarily difficult.

Future language support may include:

- `locale` field in shared report data
- Separate Korean and English UI copy
- Translated score labels
- Translated checklist descriptions
- Translated disclaimers
- Language-specific share report metadata
- Language-specific Open Graph metadata

---

## Future Market Support

Initial target markets:

- Korea
- United States

Future possible markets:

- Japan
- Hong Kong
- Europe
- Australia
- Canada

Market expansion should be based on actual user demand, not assumption.

---

## Stock Data Direction

Current local stock data is acceptable for the MVP.

Future stock data may include:

- ticker
- company name
- exchange
- market
- country
- currency
- aliases
- asset type

Suggested future structure:

```ts
type StockOption = {
  id: string;
  name: string;
  ticker: string;
  market: string;
  country?: string;
  currency?: string;
  exchange?: string;
  aliases?: string[];
  assetType?: "stock" | "etf" | "index" | "crypto";
};
```

This structure should make it easier to support:

- Korean stocks
- US stocks
- ETFs
- Other exchanges
- Future stock search APIs

---

## Share Report Direction

Future share reports may include:

- locale
- market
- currency
- country
- translated labels
- translated disclaimers
- translated score interpretations

The current URL-based share format should remain extensible.

Suggested future fields:

```ts
type ShareReport = {
  locale?: "ko" | "en";
  stock: StockOption;
  score: number;
  scoreLabel: string;
  interpretation: string;
  authorSummary?: string;
  memos: Record<string, string>;
  createdAt: string;
};
```

The current URL-safe share payload approach should support future fields as long as backward compatibility is preserved.

---

## Legal and Safety Direction

The service must remain a self-check and education tool.

It must not present itself as:

- Investment advice
- Buy/sell signal
- Target price service
- Guaranteed return service
- Personalized investment advisory service
- Official financial analysis

English copy should avoid:

- Buy
- Sell
- Strong Buy
- Price Target
- Guaranteed Return
- This stock will 10x
- Must buy
- Next tenbagger guaranteed
- Financial advice
- Personalized advice

Recommended English safety copy:

```text
This is not investment advice. This report is based on user-selected answers and user-written notes. We do not verify, endorse, or recommend any stock.
```

---

## Privacy and Data Direction

The current MVP does not use:

- Login
- Database storage
- Email collection
- Payment
- Tracking accounts

This reduces privacy and compliance complexity.

If future versions add analytics, advertising, saved reports, login, or email collection, the project will need:

- Privacy policy
- Cookie policy if cookies are used
- Data retention policy
- User deletion policy if accounts are added
- Clear disclosure of what data is stored

Do not add these until needed.

---

## Do Not Do Yet

Do not add these before launch unless explicitly requested:

- Full i18n routing
- Global stock API
- User accounts
- Database report storage
- Payment
- Country-specific legal documents
- Cookie banner
- Multi-market screener
- Real-time stock prices
- AI investment analysis

---

## Recommended Sequence

1. Launch Korean MVP.
2. Validate user interest.
3. Improve share preview and Open Graph metadata.
4. Add English copy if there is demand.
5. Expand Korea and US stock coverage.
6. Add English share reports.
7. Add other markets only based on real usage.
8. Consider data/API integration after validation.

---

## Current Principle

The product should stay simple until real user demand proves the need for expansion.

Global readiness should be planned, but not overbuilt.