# 07. Current Task

## Task Name

Add Vercel Web Analytics.

## Purpose

Enable basic traffic tracking after deployment.

The goal is to check whether users visit:

- Main page
- Shared report pages
- Short share links

## Must Do

1. Add Vercel Web Analytics to the Next.js App Router project.
2. Install the required package if it is not already installed.
3. Add the Analytics component to the root layout.
4. Do not add custom event tracking yet.
5. Do not add third-party analytics tools.
6. Do not add cookies or user tracking.
7. Do not change app UI or app behavior.

## Must Preserve

- Existing app routes
- Existing share links
- Existing OG image and metadata
- Existing scoring and report logic

## Definition of Done

- Vercel Web Analytics package is installed.
- Analytics component is mounted globally.
- The app builds successfully.
- After deployment, Vercel Analytics should start showing page visits.