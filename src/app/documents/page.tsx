import { FileText } from "lucide-react";
import { api, shortDate } from "@/lib/api";
import { DocumentSigningStatus } from "@/lib/types";
import { Badge, Button, Card, PageHeader, Table } from "@/components/ui";

const signing: Record<DocumentSigningStatus, { label: string; tone: "slate" | "amber" | "green" }> = {
  [DocumentSigningStatus.None]: { label: "No signature required", tone: "slate" },
  [DocumentSigningStatus.Pending]: { label: "Awaiting signature", tone: "amber" },
  [DocumentSigningStatus.Signed]: { label: "Signed", tone: "green" },
};

const fmtSize = (b: number) => (b > 1_000_000 ? `${(b / 1_000_000).toFixed(1)} MB` : `${Math.round(b / 1000)} KB`);

export default async function DocumentsPage() {
  const { Results: docs } = await api.documents();
  return (
    <>
      <PageHeader
        title="Documents"
        subtitle="Shared securely between you and your advisers"
        action={<Button>Upload</Button>}
      />
      <Card>
        <Table head={["Document", "From", "Updated", "Size", "Status", ""]}>
          {docs.map((d) => {
            const s = signing[d.DocumentSigningStatus];
            return (
              <tr key={d.ID}>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-neutral-100 text-ink-muted">
                      <FileText size={18} />
                    </span>
                    <div>
                      <div className="font-medium">{d.Description}</div>
                      <div className="text-xs text-ink-muted">{d.File.FileName}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 pr-4 text-ink">{d.CreatedBy}</td>
                <td className="py-3 pr-4 text-ink-muted whitespace-nowrap">{shortDate(d.LastUpdated)}</td>
                <td className="py-3 pr-4 text-ink-muted tabular-nums">{fmtSize(d.File.SizeBytes)}</td>
                <td className="py-3 pr-4">
                  <Badge tone={s.tone}>{s.label}</Badge>
                </td>
                <td className="py-3 text-right">
                  {d.DocumentSigningStatus === DocumentSigningStatus.Pending ? (
                    <button className="text-sm font-medium text-ink font-semibold underline hover:text-brand">Sign</button>
                  ) : (
                    <button className="text-sm text-ink-muted hover:underline">Download</button>
                  )}
                </td>
              </tr>
            );
          })}
        </Table>
      </Card>
    </>
  );
}
