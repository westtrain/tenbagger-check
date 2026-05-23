# AGENTS.md

## Project Overview

This project is called "Tenbagger Check".

It is a small MVP web app for practicing vibe coding with Codex.

The app helps users check whether a stock idea may be worth further research as a long-term growth candidate.

This app must be positioned as an educational self-check tool, not as a stock recommendation service.

## Core Product Direction

The app should help users:
- Enter a stock name or ticker.
- Answer a short checklist about growth potential, market size, competitive advantage, financial quality, and entry risk.
- Receive a simple score out of 100.
- Read a cautious interpretation of the result.
- Understand that the result is not investment advice.

## Important Safety Positioning

Do not present the app as:
- A stock recommendation service.
- A service that finds guaranteed tenbagger stocks.
- A buy/sell signal generator.
- A price target tool.
- A profit prediction tool.

Avoid phrases such as:
- Buy this stock.
- This stock will rise 10x.
- Guaranteed return.
- Next tenbagger confirmed.
- Strong buy.
- Target price.

Use safer phrases such as:
- Self-check.
- Candidate review.
- Growth potential checklist.
- Risk check.
- Research support.
- Educational tool.
- Not investment advice.

## Tech Stack

Use:
- Next.js
- TypeScript
- Tailwind CSS
- App Router

For the first MVP, do not use:
- Backend API
- Database
- Authentication
- Payment
- External stock API
- Real-time price data
- News crawling
- X/Twitter data
- AI model API

## Working Rules

Before changing files:
- Briefly explain the plan.
- Mention which files will be changed.

When changing files:
- Keep the implementation simple.
- Prefer editing existing files over creating many new files.
- Do not add unnecessary abstractions.
- Do not install new dependencies unless explicitly requested.
- Do not delete important project files without asking.
- Do not overwrite unrelated files.

After changing files:
- Summarize what changed.
- List changed files.
- Explain how to run the app.
- Mention any remaining limitations.

## Code Style

- Use TypeScript.
- Use functional React components.
- Use clear variable names.
- Keep components readable for a beginner.
- Use simple state management with React hooks.
- Prefer simple arrays, map, filter, and reduce where appropriate.
- Keep comments minimal but helpful.
- Avoid over-engineering.

## MVP Scope

The first version should include only:
- Stock name input.
- Checklist questions.
- Score calculation.
- Result interpretation.
- Risk reminder.
- Not-investment-advice notice.

The first version should not include:
- Real stock recommendations.
- Actual financial data.
- User accounts.
- Saved history.
- Sharing features.
- Charts.
- Admin page.
- Backend server.

## Language

- Explain work to the user in Korean.
- UI text may be Korean.
- Code can use English variable names.

## Git Rules

- Do not run `git commit` unless the user explicitly asks.
- Do not run `git push` unless the user explicitly asks.
- After making code changes, only summarize the changed files and suggest a commit message.
- The user will review the changes and decide whether to commit.

## Scalability and Future Extension Rules

This project is no longer just a coding practice app.

Treat it as a real MVP that may be publicly launched.

When implementing features, keep the current scope small but design the code so it can be extended later.

Important principles:

- Prefer simple but extensible structures.
- Avoid hardcoding business logic directly inside UI markup when it is likely to grow.
- Keep reusable data structures separate from rendering code when reasonable.
- Use clear TypeScript types for important data such as stocks, checklist cards, answers, scores, memos, and share reports.
- Keep scoring logic easy to test and change later.
- Keep share report encode/decode logic isolated from UI components.
- Keep stock search data structured so it can later be replaced by an API.
- Do not over-engineer the app with unnecessary architecture.
- Do not add backend, database, authentication, or external APIs unless explicitly requested.
- When adding a feature, briefly explain how the implementation can be extended in the future.
- If a quick implementation would block future expansion, mention the tradeoff before implementing.

## Command Execution Rules

- Do not run `npm run lint` unless the user explicitly asks.
- Do not run `npm run build` unless the user explicitly asks.
- Do not run `npm run dev` unless the user explicitly asks.
- Do not run long-running commands unless the user explicitly asks.
- After making changes, explain which commands the user should run manually.
- If a command is necessary to verify a fix, suggest the command instead of running it.