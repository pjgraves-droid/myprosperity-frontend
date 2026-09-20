---
name: testing-myprosperity-demo
description: Run and visually verify the myprosperity Next.js client portal in local demo mode.
---

# Local portal testing

- From the repository root, use `source ~/.nvm/nvm.sh && nvm use 24` before Node/npm commands in each new shell. Install dependencies if absent, then run `npm run dev`; default URL is http://localhost:3000.
- With `MYPROSPERITY_TOKEN` unset the application uses `src/lib/mock.ts` and displays an amber Demo mode banner; no login is needed.
- Use the six sidebar routes: `/`, `/net-worth`, `/cashflow`, `/goals`, `/documents`, `/clients`. Verify the selected item changes with the route.
- Dashboard shortcuts are View all goals, All transactions (may require scrolling), and Review in Action items.
- Allow Recharts entrance animations to settle before screenshots. Hover plotted areas, donut segments, and bars to verify currency tooltips.
- Amounts use en-AU AUD formatting rounded to whole dollars; derive expectations from current fixtures rather than assuming cents will display.
- Fixture transaction dates and some relative activity counts depend on the current date; avoid hardcoding those assertions.
- Scope demo display/navigation separately from real API integration and mutation controls.

## Devin Secrets Needed

None for demo mode. Real API testing requires `MYPROSPERITY_TOKEN` partner credentials and optionally `MYPROSPERITY_BASE_URL`.
