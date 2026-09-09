import Link from "next/link";
import { api, aud, shortDate } from "@/lib/api";
import { GoalStatus } from "@/lib/types";
import { Badge, Card, PageHeader, Stat } from "@/components/ui";
import { NetWorthChart } from "@/components/charts";

export default async function Dashboard() {
  const [items, snaps, txPage, goalsPage, docsPage] = await Promise.all([
    api.wealthItems(),
    api.monthlySnapshots(),
    api.cashflowTransactions(1, 6),
    api.goals(),
    api.documents(),
  ]);

  const assets = items.filter((i) => i.Category.IsAssetWealthItem).reduce((s, i) => s + i.Value, 0);
  const liabilities = items.filter((i) => !i.Category.IsAssetWealthItem).reduce((s, i) => s + i.Value, 0);
  const netWorth = assets - liabilities;
  const prev = snaps[snaps.length - 2]?.NetWorth ?? netWorth;
  const change = netWorth - prev;

  const income = txPage.Results.filter((t) => t.AmountWithSign > 0).reduce((s, t) => s + t.AmountWithSign, 0);
  const spend = txPage.Results.filter((t) => t.AmountWithSign < 0).reduce((s, t) => s - t.AmountWithSign, 0);
  const pendingSign = docsPage.Results.filter((d) => d.DocumentSigningStatus === 1).length;

  const series = snaps.map((s) => ({
    label: new Date(s.Period).toLocaleDateString("en-AU", { month: "short", year: "2-digit" }),
    value: s.NetWorth,
  }));

  return (
    <>
      <PageHeader title="Welcome back, Sarah" subtitle={`Your whole-of-wealth picture as at ${shortDate(new Date().toISOString())}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <Stat label="Net worth" value={aud(netWorth)} delta={`${change >= 0 ? "+" : ""}${aud(change)} this month`} tone={change >= 0 ? "up" : "down"} />
        <Stat label="Total assets" value={aud(assets)} delta={`${items.filter((i) => i.Category.IsAssetWealthItem).length} items`} />
        <Stat label="Total liabilities" value={aud(liabilities)} delta={`${items.filter((i) => !i.Category.IsAssetWealthItem).length} items`} tone="down" />
        <Stat label="Recent cashflow" value={aud(income - spend)} delta={`${aud(income)} in · ${aud(spend)} out`} tone={income - spend >= 0 ? "up" : "down"} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        <Card title="Net worth — last 24 months" className="xl:col-span-2">
          <NetWorthChart data={series} />
        </Card>
        <Card title="Goals">
          <ul className="space-y-4">
            {goalsPage.Results.slice(0, 4).map((g) => (
              <li key={g.ID}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium truncate">{g.Name}</span>
                  <span className="text-ink-muted tabular-nums">{Math.round(g.Progress * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${g.Status === GoalStatus.Behind ? "bg-amber-400" : "bg-brand"}`}
                    style={{ width: `${Math.min(100, g.Progress * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <Link href="/goals" className="block mt-4 text-sm text-ink font-semibold underline hover:text-brand">
            View all goals →
          </Link>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card title="Recent transactions" className="xl:col-span-2">
          <ul className="divide-y divide-neutral-100">
            {txPage.Results.map((t) => (
              <li key={t.ID} className="flex items-center justify-between py-2.5 text-sm">
                <div className="min-w-0">
                  <div className="font-medium truncate">{t.Description}</div>
                  <div className="text-xs text-ink-muted">
                    {shortDate(t.Date)} · {t.AccountName} · {t.Category.Description}
                  </div>
                </div>
                <div className={`tabular-nums font-medium ${t.AmountWithSign > 0 ? "text-emerald-600" : ""}`}>
                  {t.AmountWithSign > 0 ? "+" : "−"}
                  {aud(Math.abs(t.AmountWithSign))}
                </div>
              </li>
            ))}
          </ul>
          <Link href="/cashflow" className="block mt-4 text-sm text-ink font-semibold underline hover:text-brand">
            All transactions →
          </Link>
        </Card>
        <Card title="Action items">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Badge tone="amber">{pendingSign}</Badge>
              <span>
                document{pendingSign === 1 ? "" : "s"} awaiting your signature.{" "}
                <Link href="/documents" className="text-ink font-semibold underline hover:text-brand">
                  Review
                </Link>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Badge tone="blue">{txPage.Results.filter((t) => !t.Reviewed).length}</Badge>
              <span>uncategorised transactions to review.</span>
            </li>
            <li className="flex items-start gap-3">
              <Badge tone="rose">{goalsPage.Results.filter((g) => g.Status === GoalStatus.Behind).length}</Badge>
              <span>goal behind schedule.</span>
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
}
