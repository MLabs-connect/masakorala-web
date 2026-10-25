import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://masakoralagroup.lk"),
  title: "Masakorala Holdings | Premier Paving & Infrastructure Solutions",
  description:
    "Sri Lanka's leading CS1-graded manufacturer of heavy-duty interlocking pavers, grass pavers, washed pavers, and precast concrete solutions. Engineered to SLS & ISO 9001 standards.",
  keywords: [
    "Masakorala Holdings",
    "paving blocks Sri Lanka",
    "interlock paving",
    "heavy duty pavers",
    "grass pavers",
    "precast concrete",
    "construction materials",
    "Kurunegala",
    "Pannala",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Masakorala Holdings | Engineered Paving Excellence",
    description:
      "Durable, precision-manufactured interlock pavers and infrastructure solutions with over 35 years of industry legacy.",
    images: [{ url: "/images/hero.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#189842" />
      </head>
      <body>{children}</body>
    </html>
  );
}
