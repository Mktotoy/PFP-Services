import type { Metadata } from "next";
import Script from "next/script";
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
import { LocalBusinessSchema } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XZ3EYCZMVT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZ3EYCZMVT');
          `}
        </Script>
      </head>
      <body className={inter.variable}>
        <LocalBusinessSchema region="77" />
        <Header />
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
        <StickyMobileBar />
        <Footer />
        <KonamiEasterEgg />
      </body>
    </html>
  );
}
