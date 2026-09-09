import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TopNav } from "@/components/topnav";
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
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-ink`}>
        <TopNav />
        {usingMockData && (
          <div className="bg-neutral-50 border-b border-line text-ink-muted text-xs text-center px-6 py-2">
            Demo mode — showing sample data. Set <code className="font-mono">MYPROSPERITY_TOKEN</code> to connect to the
            myprosperity API.
          </div>
        )}
        <main className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-10">{children}</main>
        <footer className="border-t border-line mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-ink-muted flex flex-wrap gap-x-4 gap-y-2 justify-between">
            <span>© 2026 myprosperity · Harbour Wealth Advisers</span>
            <span className="flex gap-4">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Support</span>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
