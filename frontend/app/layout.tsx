import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { FreighterProvider } from "./context/FreighterContext";
import { ToastProvider } from "./components/Toast";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://florax.stellarvhibes.org"),
  title: { template: "%s | Florax", default: "Florax — Liquidity Identity Layer on Stellar" },
  description:
    "Florax turns any wallet into a real-time financial identity. Analyze liquidity, assess risk, and build financial trust on Stellar.",
  keywords: ["Florax", "Liquidity Identity", "Stellar", "Soroban", "financial identity", "risk assessment", "DeFi"],
  authors: [{ name: "Florax" }],
  creator: "Florax",
  openGraph: {
    type: "website",
    title: "Florax — Liquidity Identity Layer",
    description: "Turn any wallet into a real-time financial identity on Stellar.",
    siteName: "Florax",
    images: [{ url: "/header_assets/logo.svg", width: 44, height: 44, alt: "Florax Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Florax",
    description: "Liquidity Identity Layer on Stellar",
    images: ["/header_assets/logo.svg"],
  },
  icons: {
    icon: "/metadata_assets/favicon.svg",
    shortcut: "/metadata_assets/favicon.svg",
    apple: "/header_assets/logo.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#090A06" }],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning on body: password-manager / form-filler extensions
          inject attributes like `fdprocessedid` before React hydrates. Without this
          suppression those extensions trigger a spurious hydration mismatch. */}
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <ToastProvider>
            <FreighterProvider>
              <ClientLayout>{children}</ClientLayout>
            </FreighterProvider>
          </ToastProvider>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
