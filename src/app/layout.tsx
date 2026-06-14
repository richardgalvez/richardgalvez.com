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
  title: "Richard Galvez | Home",
  description: "Website for Richard Galvez.",
  keywords: "richard galvez, galvez, richard alberto galvez, richardgalvez, richardalbertogalvez, richard galvez software engineer, richard galvez sre, richard galvez swe, richard galvez engineer, who is richard galvez, richard galvez linkedin, richard galvez information technology, software engineer, senior software engineer, site reliability engineer, senior site reliability engineer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
