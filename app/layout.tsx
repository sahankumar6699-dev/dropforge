import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dropforge.vercel.app"),
  title: {
    default: "DropForge - Drop. Convert. Create.",
    template: "%s | DropForge"
  },
  description:
    "DropForge is a futuristic toolkit for video downloads, PDF utilities, image compression, OCR, and file conversion workflows.",
  keywords: [
    "DropForge",
    "video tools",
    "PDF tools",
    "image tools",
    "file converter",
    "YouTube downloader",
    "OCR scanner"
  ],
  openGraph: {
    title: "DropForge - Drop. Convert. Create.",
    description: "A cyberpunk SaaS frontend for fast creator conversion tools.",
    url: "https://dropforge.vercel.app",
    siteName: "DropForge",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DropForge",
    description: "Drop. Convert. Create."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
