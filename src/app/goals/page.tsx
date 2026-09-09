import { api, aud, shortDate } from "@/lib/api";
import { GoalStatus } from "@/lib/types";
import { Badge, PageHeader } from "@/components/ui";

const statusMeta: Record<GoalStatus, { label: string; tone: "green" | "amber" | "blue"; bar: string }> = {
  [GoalStatus.OnTrack]: { label: "On track", tone: "green", bar: "bg-emerald-500" },
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
        action={<button className="rounded-md bg-emerald-600 text-white text-sm px-4 py-2 hover:bg-emerald-700">New goal</button>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {goals.map((g) => {
          const m = statusMeta[g.Status];
          const saved = g.GoalTarget * g.Progress;
          return (
            <article key={g.ID} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="font-medium leading-snug">{g.Name}</h2>
                <Badge tone={m.tone}>{m.label}</Badge>
              </div>
              <div className="text-3xl font-semibold tabular-nums">{Math.round(g.Progress * 100)}%</div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden my-3">
                <div className={`h-full rounded-full ${m.bar}`} style={{ width: `${Math.min(100, g.Progress * 100)}%` }} />
              </div>
              <dl className="grid grid-cols-2 gap-y-1 text-xs text-slate-500 mt-auto">
                <dt>Target</dt>
                <dd className="text-right tabular-nums text-slate-800">{aud(g.GoalTarget)}</dd>
                <dt>Progress</dt>
                <dd className="text-right tabular-nums text-slate-800">{aud(saved)}</dd>
                <dt>Due</dt>
                <dd className="text-right text-slate-800">{shortDate(g.Due)}</dd>
              </dl>
            </article>
          );
        })}
      </div>
    </>
  );
}
