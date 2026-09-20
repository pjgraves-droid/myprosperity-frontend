import { ReactNode } from "react";

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-[26px] font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-ink-muted mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Button({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "outline" }) {
  const cls =
    variant === "primary"
      ? "bg-gradient-to-r from-[#E61E4D] via-brand to-[#D70466] text-white hover:brightness-95"
      : "border border-ink text-ink hover:bg-neutral-50";
  return <button className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${cls}`}>{children}</button>;
}

export function Card({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`bg-white rounded-2xl border border-line hover:shadow-card transition-shadow ${className}`}>
      {title && <h2 className="px-6 pt-6 text-base font-semibold">{title}</h2>}
      <div className="p-6">{children}</div>
    </section>
  );
}

export function Stat({ label, value, delta, tone = "neutral" }: { label: string; value: string; delta?: string; tone?: "up" | "down" | "neutral" }) {
  const toneCls = tone === "up" ? "text-emerald-700" : tone === "down" ? "text-brand-dark" : "text-ink-muted";
  return (
    <div className="rounded-2xl border border-line p-6 hover:shadow-card transition-shadow">
      <div className="text-sm text-ink-muted">{label}</div>
      <div className="text-[28px] font-semibold mt-1 tabular-nums tracking-tight">{value}</div>
      {delta && <div className={`text-xs mt-1 ${toneCls}`}>{delta}</div>}
    </div>
  );
}

export function Badge({ children, tone = "slate" }: { children: ReactNode; tone?: "slate" | "green" | "amber" | "rose" | "blue" }) {
  const map = {
    slate: "bg-neutral-100 text-ink",
    green: "bg-emerald-50 text-emerald-800",
    amber: "bg-amber-50 text-amber-800",
    rose: "bg-brand-soft text-brand-dark",
    blue: "bg-sky-50 text-sky-800",
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${map[tone]}`}>{children}</span>;
}

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-ink-muted border-b border-line">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">{children}</tbody>
      </table>
    </div>
  );
}
