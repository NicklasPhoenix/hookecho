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
  title: "HookEcho — Webhook Replay + Contract Tests",
  description:
    "Capture real webhook payloads, replay them safely, diff versions, and auto-generate contract tests.",
  metadataBase: new URL("https://hookecho.dev"),
  openGraph: {
    title: "HookEcho — Webhook Replay + Contract Tests",
    description:
      "Capture real webhook payloads, replay them safely, diff versions, and auto-generate contract tests.",
    url: "https://hookecho.dev",
    siteName: "HookEcho",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HookEcho — Webhook Replay + Contract Tests",
    description:
      "Capture real webhook payloads, replay them safely, diff versions, and auto-generate contract tests.",
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
