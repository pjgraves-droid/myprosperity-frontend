"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftRight, FileText, LayoutDashboard, Menu, Search, Target, Users, Wallet } from "lucide-react";

const nav = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/net-worth", label: "Net worth", icon: Wallet },
  { href: "/cashflow", label: "Cashflow", icon: ArrowLeftRight },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/clients", label: "Clients", icon: Users },
];

export function TopNav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-brand font-bold text-2xl tracking-tight shrink-0">
            <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
              <path d="M16 3c3.4 0 6 2.6 6 6 0 2.7-2.1 6.5-6 11.7C12.1 15.5 10 11.7 10 9c0-3.4 2.6-6 6-6Zm0 3.6A2.4 2.4 0 1 0 16 11.4 2.4 2.4 0 1 0 16 6.6ZM16 24c5.5 0 10 1.6 10 3.5S21.5 31 16 31 6 29.4 6 27.5 10.5 24 16 24Z" />
            </svg>
            <span className="hidden sm:inline">myprosperity</span>
          </Link>

          <div className="hidden md:flex items-center rounded-full border border-line shadow-pill hover:shadow-card transition-shadow pl-6 pr-2 py-2 text-sm">
            <span className="font-medium text-ink pr-4 border-r border-line">Whitfield household</span>
            <span className="px-4 text-ink border-r border-line">FY26</span>
            <span className="pl-4 pr-3 text-ink-muted">Search anything</span>
            <span className="grid place-items-center w-8 h-8 rounded-full bg-brand text-white">
              <Search size={14} />
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-sm font-medium px-3 py-2 rounded-full hover:bg-neutral-100">Talk to your adviser</span>
            <button className="flex items-center gap-2 rounded-full border border-line pl-3 pr-1.5 py-1.5 hover:shadow-pill">
              <Menu size={16} />
              <span className="grid place-items-center w-8 h-8 rounded-full bg-ink text-white text-xs font-semibold">SW</span>
            </button>
          </div>
        </div>

        <nav className="flex gap-8 overflow-x-auto -mb-px">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-1.5 pb-3 pt-1 text-xs whitespace-nowrap border-b-2 transition-colors ${
                  active ? "border-ink text-ink font-semibold" : "border-transparent text-ink-muted hover:text-ink hover:border-line"
                }`}
              >
                <Icon size={22} strokeWidth={1.5} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
