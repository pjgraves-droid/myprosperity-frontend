import { api, aud, shortDate } from "@/lib/api";
import { GoalStatus } from "@/lib/types";
import { Badge, Button, PageHeader } from "@/components/ui";

const statusMeta: Record<GoalStatus, { label: string; tone: "green" | "amber" | "blue"; bar: string }> = {
  [GoalStatus.OnTrack]: { label: "On track", tone: "green", bar: "bg-brand" },
  [GoalStatus.Behind]: { label: "Behind", tone: "amber", bar: "bg-amber-400" },
  [GoalStatus.Achieved]: { label: "Achieved", tone: "blue", bar: "bg-sky-500" },
};

export default async function GoalsPage() {
  const { Results: goals } = await api.goals();
  return (
    <>
      <PageHeader
        title="Goals"
        subtitle={`${goals.filter((g) => g.Status === GoalStatus.Achieved).length} of ${goals.length} achieved`}
        action={<Button>New goal</Button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {goals.map((g) => {
          const m = statusMeta[g.Status];
          const saved = g.GoalTarget * g.Progress;
          return (
            <article key={g.ID} className="rounded-2xl border border-line p-6 hover:shadow-card transition-shadow flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="font-medium leading-snug">{g.Name}</h2>
                <Badge tone={m.tone}>{m.label}</Badge>
              </div>
              <div className="text-3xl font-semibold tabular-nums">{Math.round(g.Progress * 100)}%</div>
              <div className="h-2 rounded-full bg-neutral-100 overflow-hidden my-3">
                <div className={`h-full rounded-full ${m.bar}`} style={{ width: `${Math.min(100, g.Progress * 100)}%` }} />
              </div>
              <dl className="grid grid-cols-2 gap-y-1 text-xs text-ink-muted mt-auto">
                <dt>Target</dt>
                <dd className="text-right tabular-nums text-ink">{aud(g.GoalTarget)}</dd>
                <dt>Progress</dt>
                <dd className="text-right tabular-nums text-ink">{aud(saved)}</dd>
                <dt>Due</dt>
                <dd className="text-right text-ink">{shortDate(g.Due)}</dd>
              </dl>
            </article>
          );
        })}
      </div>
    </>
  );
}
