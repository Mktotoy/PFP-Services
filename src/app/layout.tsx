import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StickyMobileBar from "@/components/StickyMobileBar";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PFP Services | Dératisation & Nuisibles 77 | Melun & Fontainebleau",
  description: "Expert en dératisation et lutte contre les nuisibles dans le 77 (Seine-et-Marne), Melun, Fontainebleau. Rats, souris, guêpes, frelons, punaises. Intervention rapide.",
  icons: {
    icon: '/images/favicon-pfp.jpeg',
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.variable}>
        <JsonLd />
        <Header />
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
        <StickyMobileBar />
        <Footer />
        <FloatingCallButton />
        <KonamiEasterEgg />
      </body>
    </html>
  );
}
