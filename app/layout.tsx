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
  title: "Artyom Hovhannisyan — Full-Stack & Mobile Developer",
  description:
    "Portfolio of Artyom Hovhannisyan, a full-stack and mobile developer specializing in React, React Native, Next.js, Node.js, and AI-assisted development.",
  keywords: ["developer", "portfolio", "react", "react native", "nextjs", "typescript", "full stack", "mobile", "AI"],
  authors: [{ name: "Artyom Hovhannisyan" }],
  openGraph: {
    title: "Artyom Hovhannisyan — Full-Stack & Mobile Developer",
    description:
      "Portfolio of Artyom Hovhannisyan, a full-stack and mobile developer specializing in React, React Native, Next.js, Node.js, and AI-assisted development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="noise">{children}</body>
    </html>
  );
}
