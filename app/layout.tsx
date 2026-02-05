import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warranty Wallet — Keep every warranty in one place",
  description:
    "Store receipts, track warranty expiry dates, and generate claim-ready exports in seconds.",
  metadataBase: new URL("https://warrantywallet.vercel.app"),
  openGraph: {
    title: "Warranty Wallet — Keep every warranty in one place",
    description:
      "Store receipts, track warranty expiry dates, and generate claim-ready exports in seconds.",
    url: "https://warrantywallet.vercel.app",
    siteName: "Warranty Wallet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warranty Wallet — Keep every warranty in one place",
    description:
      "Store receipts, track warranty expiry dates, and generate claim-ready exports in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
