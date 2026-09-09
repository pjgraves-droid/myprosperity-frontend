import { api, aud, shortDate } from "@/lib/api";
import { Badge, Button, Card, PageHeader, Stat, Table } from "@/components/ui";
import { CashflowBars } from "@/components/charts";

export default async function CashflowPage() {
  const page = await api.cashflowTransactions(1, 100);
  const tx = page.Results;
  const income = tx.filter((t) => t.AmountWithSign > 0).reduce((s, t) => s + t.AmountWithSign, 0);
  const spend = tx.filter((t) => t.AmountWithSign < 0).reduce((s, t) => s - t.AmountWithSign, 0);

  const byCategory = Object.values(
    tx
      .filter((t) => t.AmountWithSign < 0)
      .reduce<Record<string, { name: string; value: number }>>((acc, t) => {
        const k = t.Category.Description;
        acc[k] ??= { name: k, value: 0 };
        acc[k].value += -t.AmountWithSign;
        return acc;
      }, {}),
  )
    .sort((a, b) => b.value - a.value)
    .slice(0, 7);

  return (
    <>
      <PageHeader
        title="Cashflow"
        subtitle="Transactions from linked bank and card accounts"
        action={<Button>Add transaction</Button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Stat label="Money in" value={aud(income)} tone="up" />
        <Stat label="Money out" value={aud(spend)} tone="down" />
        <Stat label="Net" value={aud(income - spend)} tone={income - spend >= 0 ? "up" : "down"} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card title="Top spending categories">
          <CashflowBars data={byCategory} />
        </Card>
        <Card title="Transactions" className="xl:col-span-2">
          <Table head={["Date", "Description", "Account", "Category", "Amount"]}>
            {tx.map((t) => (
              <tr key={t.ID} className={t.Reviewed ? "" : "bg-neutral-50"}>
                <td className="py-2.5 pr-4 whitespace-nowrap text-ink-muted">{shortDate(t.Date)}</td>
                <td className="py-2.5 pr-4 font-medium">
                  {t.Description}
                  {!t.Reviewed && (
                    <span className="ml-2">
                      <Badge tone="amber">Review</Badge>
                    </span>
                  )}
                </td>
                <td className="py-2.5 pr-4 text-ink-muted">{t.AccountName}</td>
                <td className="py-2.5 pr-4">
                  <Badge>{t.Category.Description}</Badge>
                </td>
                <td className={`py-2.5 tabular-nums text-right font-medium ${t.AmountWithSign > 0 ? "text-emerald-600" : ""}`}>
                  {t.AmountWithSign > 0 ? "+" : "−"}
                  {aud(Math.abs(t.AmountWithSign))}
                </td>
              </tr>
            ))}
          </Table>
          <p className="text-xs text-ink-muted mt-3">
            Showing {tx.length} of {page.TotalNumberOfRecords}
          </p>
        </Card>
      </div>
    </>
  );
}
