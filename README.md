# myprosperity — Client Portal front end

Next.js 14 (App Router) front end shaped on the [myprosperity API v1](https://sandbox.api.myprosperity.com.au/Help).

Pages: Dashboard, Net worth, Cashflow, Goals, Documents, Clients (adviser view).

## Run

```bash
npm install
npm run dev
```

Runs in demo mode with sample data by default. To use the real API, set:

```
MYPROSPERITY_TOKEN=...            # partner credential from myprosperity
MYPROSPERITY_BASE_URL=https://api.myprosperity.com.au   # optional, defaults to sandbox
```

`src/lib/api.ts` maps each page to the corresponding endpoints (`/api/WealthItems`,
`/api/Snapshots/MonthlySnapshots`, `/api/Cashflow/CashflowTransactions`, `/api/Goals/GoalsList`,
`/api/Documents`, `/api/Clients`). `src/lib/types.ts` mirrors the Swagger models.
