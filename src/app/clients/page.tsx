import { api, aud, shortDate } from "@/lib/api";
import { Badge, Card, PageHeader, Stat, Table } from "@/components/ui";

export default async function ClientsPage() {
  const { Results: clients, TotalNumberOfRecords } = await api.clients();
  const fum = clients.reduce((s, c) => s + c.NetWorth, 0);
  const people = clients.filter((c) => c.PersonDetails).length;

  return (
    <>
      <PageHeader
        title="Clients"
        subtitle="Adviser view — households, individuals and entities in your firm"
        action={<button className="rounded-md bg-emerald-600 text-white text-sm px-4 py-2 hover:bg-emerald-700">Add client</button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Stat label="Clients" value={String(TotalNumberOfRecords)} delta={`${people} people · ${clients.length - people} entities`} />
        <Stat label="Combined net worth" value={aud(fum)} />
        <Stat label="Active this week" value={String(clients.filter((c) => Date.now() - new Date(c.LastActive).getTime() < 7 * 864e5).length)} tone="up" />
      </div>
      <Card>
        <Table head={["Client", "Type", "Contact", "Net worth", "Last active"]}>
          {clients.map((c) => (
            <tr key={c.ID}>
              <td className="py-3 pr-4">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    {c.Name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("")}
                  </span>
                  <span className="font-medium">{c.Name}</span>
                </div>
              </td>
              <td className="py-3 pr-4">{c.PersonDetails ? <Badge tone="blue">Individual</Badge> : <Badge>Entity</Badge>}</td>
              <td className="py-3 pr-4 text-slate-600 text-xs">
                {c.PersonDetails ? (
                  <>
                    <div>{c.PersonDetails.Email}</div>
                    <div className="text-slate-400">{c.PersonDetails.Mobile}</div>
                  </>
                ) : (
                  <div>ABN {c.CompanyDetails?.Abn}</div>
                )}
              </td>
              <td className="py-3 pr-4 tabular-nums font-medium">{aud(c.NetWorth)}</td>
              <td className="py-3 text-slate-500 whitespace-nowrap">{shortDate(c.LastActive)}</td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
