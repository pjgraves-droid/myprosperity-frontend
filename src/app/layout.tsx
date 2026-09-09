import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { usingMockData } from "@/lib/api";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "myprosperity — Client Portal",
  description: "Whole-of-wealth client portal built on the myprosperity API",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 min-w-0">
            {usingMockData && (
              <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-xs px-6 py-2">
                Demo mode — showing sample data. Set <code className="font-mono">MYPROSPERITY_TOKEN</code> to connect
                to the myprosperity API.
              </div>
            )}
            <div className="p-6 lg:p-10 max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
