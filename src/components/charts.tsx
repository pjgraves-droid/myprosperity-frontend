"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { aud } from "@/lib/api";
import { COLORS } from "@/lib/colors";

const fmt = (v: unknown) => (typeof v === "number" ? aud(v) : String(v ?? ""));

export function NetWorthChart({ data }: { data: { label: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="nw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF385C" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#FF385C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#EBEBEB" vertical={false} />
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#717171" }} tickLine={false} axisLine={false} interval={3} />
        <YAxis tick={{ fontSize: 11, fill: "#717171" }} tickLine={false} axisLine={false} tickFormatter={(v) => aud(v, true)} width={64} />
        <Tooltip formatter={fmt} contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid #DDDDDD", boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }} />
        <Area type="monotone" dataKey="value" stroke="#FF385C" strokeWidth={2} fill="url(#nw)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function AllocationChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={62} outerRadius={100} paddingAngle={2}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={fmt} contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid #DDDDDD", boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function CashflowBars({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#EBEBEB" horizontal={false} />
        <XAxis type="number" tick={{ fontSize: 11, fill: "#717171" }} tickFormatter={(v) => aud(v, true)} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11, fill: "#717171" }} axisLine={false} tickLine={false} />
        <Tooltip formatter={fmt} contentStyle={{ fontSize: 12, borderRadius: 12, border: "1px solid #DDDDDD", boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }} />
        <Bar dataKey="value" radius={[0, 6, 6, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

