import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/core/components/Navbar";
import { Footer } from "@/core/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The favicon is automatically loaded from src/app/favicon.ico
// To use a PNG/SVG/JPEG as a favicon, you can:
// 1. Rename your image to 'icon.png', 'icon.svg', etc. and place it in src/app/
// 2. Or add an 'icons' property to the metadata object below.
export const metadata: Metadata = {
  title: "F-Union Africa Summit 2026",
  description: "F-Union rassemble talents, entreprises et institutions pour construire l'Afrique de 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
