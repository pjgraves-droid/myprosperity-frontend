import { api, aud } from "@/lib/api";
import { Badge, Card, PageHeader, Stat, Table } from "@/components/ui";
import { AllocationChart, NetWorthChart } from "@/components/charts";
import { COLORS } from "@/lib/colors";

export default async function NetWorthPage() {
  const [items, snaps] = await Promise.all([api.wealthItems(), api.monthlySnapshots()]);
  const assets = items.filter((i) => i.Category.IsAssetWealthItem);
  const liabilities = items.filter((i) => !i.Category.IsAssetWealthItem);
  const sum = (xs: typeof items) => xs.reduce((s, i) => s + i.Value, 0);

  const byCategory = Object.values(
    assets.reduce<Record<string, { name: string; value: number }>>((acc, i) => {
      acc[i.Category.Name] ??= { name: i.Category.Name, value: 0 };
      acc[i.Category.Name].value += i.Value;
      return acc;
    }, {}),
  ).sort((a, b) => b.value - a.value);

  const series = snaps.map((s) => ({
    label: new Date(s.Period).toLocaleDateString("en-AU", { month: "short", year: "2-digit" }),
    value: s.NetWorth,
  }));
  const yoy = snaps.length >= 13 ? snaps[snaps.length - 1].NetWorth - snaps[snaps.length - 13].NetWorth : 0;

  return (
    <>
      <PageHeader
        title="Net worth"
        subtitle="Assets and liabilities across all owners"
        action={<button className="rounded-md bg-emerald-600 text-white text-sm px-4 py-2 hover:bg-emerald-700">Add item</button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Stat label="Net worth" value={aud(sum(assets) - sum(liabilities))} delta={`${yoy >= 0 ? "+" : ""}${aud(yoy)} year on year`} tone={yoy >= 0 ? "up" : "down"} />
        <Stat label="Assets" value={aud(sum(assets))} />
        <Stat label="Liabilities" value={aud(sum(liabilities))} tone="down" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        <Card title="History" className="xl:col-span-2">
          <NetWorthChart data={series} />
        </Card>
        <Card title="Asset allocation">
          <AllocationChart data={byCategory} />
          <ul className="mt-2 space-y-1 text-xs">
            {byCategory.map((c, i) => (
              <li key={c.name} className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: COLORS[i % COLORS.length] }} />
                  {c.name}
                </span>
                <span className="tabular-nums text-slate-600">{aud(c.value)}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card title="Assets">
          <Table head={["Item", "Category", "Value"]}>
            {assets.map((i) => (
              <tr key={i.ID}>
                <td className="py-2.5 pr-4 font-medium">{i.Name}</td>
                <td className="py-2.5 pr-4">
                  <Badge tone="green">{i.Category.Name}</Badge>
                </td>
                <td className="py-2.5 tabular-nums text-right">{aud(i.Value)}</td>
              </tr>
            ))}
          </Table>
        </Card>
        <Card title="Liabilities">
          <Table head={["Item", "Category", "Balance"]}>
            {liabilities.map((i) => (
              <tr key={i.ID}>
                <td className="py-2.5 pr-4 font-medium">{i.Name}</td>
                <td className="py-2.5 pr-4">
                  <Badge tone="rose">{i.Category.Name}</Badge>
                </td>
                <td className="py-2.5 tabular-nums text-right text-rose-600">−{aud(i.Value)}</td>
              </tr>
            ))}
          </Table>
        </Card>
      </div>
    </>
  );
}
