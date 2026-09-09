import * as mock from "./mock";
import {
  CashflowTransactionSummary,
  ClientDetailsLite,
  Document,
  GoalSummary,
  PagedResults,
  Snapshot,
  WealthItemSummary,
} from "./types";

// Set MYPROSPERITY_TOKEN (and optionally MYPROSPERITY_BASE_URL) to hit the real
// API; otherwise the mock data layer is used. Requires partner credentials from
// myprosperity — see https://sandbox.api.myprosperity.com.au/Help
const BASE = process.env.MYPROSPERITY_BASE_URL ?? "https://sandbox.api.myprosperity.com.au";
const TOKEN = process.env.MYPROSPERITY_TOKEN;

async function get<T>(path: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = new URL(path, BASE);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: "application/json" },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`myprosperity API ${res.status} for ${path}`);
  return res.json() as Promise<T>;
}

export const usingMockData = !TOKEN;

export const api = {
  wealthItems: (): Promise<WealthItemSummary[]> =>
    TOKEN ? get("/api/WealthItems") : Promise.resolve(mock.wealthItems),

  monthlySnapshots: (): Promise<Snapshot[]> =>
    TOKEN ? get("/api/Snapshots/MonthlySnapshots") : Promise.resolve(mock.snapshots),

  cashflowTransactions: (page = 1, pageSize = 50): Promise<PagedResults<CashflowTransactionSummary>> =>
    TOKEN
      ? get("/api/Cashflow/CashflowTransactions", { page, pageSize })
      : Promise.resolve(mock.paged(mock.transactions, page, pageSize)),

  goals: (page = 1, pageSize = 50): Promise<PagedResults<GoalSummary>> =>
    TOKEN ? get("/api/Goals/GoalsList", { page, pageSize }) : Promise.resolve(mock.paged(mock.goals, page, pageSize)),

  clients: (page = 1, pageSize = 50): Promise<PagedResults<ClientDetailsLite>> =>
    TOKEN ? get("/api/Clients", { page, pageSize }) : Promise.resolve(mock.paged(mock.clients, page, pageSize)),

  documents: (page = 1, pageSize = 50): Promise<PagedResults<Document>> =>
    TOKEN ? get("/api/Documents", { page, pageSize }) : Promise.resolve(mock.paged(mock.documents, page, pageSize)),
};

export const aud = (n: number, compact = false) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: compact ? 1 : 0,
    notation: compact ? "compact" : "standard",
  }).format(n);

export const shortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
