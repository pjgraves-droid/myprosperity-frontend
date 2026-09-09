"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftRight, FileText, LayoutDashboard, Target, Users, Wallet } from "lucide-react";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/net-worth", label: "Net worth", icon: Wallet },
  { href: "/cashflow", label: "Cashflow", icon: ArrowLeftRight },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/clients", label: "Clients", icon: Users },
];

export function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-60 shrink-0 bg-slate-900 text-slate-200 flex flex-col">
      <div className="px-6 py-6 border-b border-slate-800">
        <div className="text-xl font-semibold tracking-tight text-white">
          my<span className="text-emerald-400">prosperity</span>
        </div>
        <div className="text-xs text-slate-400 mt-1">Harbour Wealth Advisers</div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? path === "/" : path.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                active ? "bg-emerald-500/15 text-emerald-300 font-medium" : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 py-4 border-t border-slate-800 text-xs text-slate-400">
        <div className="font-medium text-slate-200">Sarah Whitfield</div>
        <div>Pro plan</div>
      </div>
    </aside>
  );
}
