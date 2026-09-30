import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { PrototypeBanner } from "@/components/prototype-banner";
import { PrototypeWatermark } from "@/components/prototype-watermark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteEnvironment =
  process.env.NEXT_PUBLIC_VITE_SITE_ENV ?? process.env.VITE_SITE_ENV ?? "prototype";
const isPrototypeEnvironment = siteEnvironment !== "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keletsoprototype.com"),
  title: {
    default: "Keletso | Mining Pumps & Pumping Solutions Across Africa",
    template: "%s | Keletso",
  },
  description:
    "Keletso supplies reliable mining pumps, dewatering pumps, slurry pumps and industrial pumping solutions across Africa.",
  applicationName: "Keletso",
  keywords: [
    "mining pumps",
    "pumping solutions",
    "slurry pumps",
    "dewatering pumps",
    "African mining equipment",
  ],
  robots: isPrototypeEnvironment
    ? {
        index: false,
        follow: false,
        noarchive: true,
      }
    : {
        index: true,
        follow: true,
      },
  openGraph: {
    title: "Keletso | Mining Pumps & Pumping Solutions Across Africa",
    description:
      "Keletso supplies reliable mining pumps, dewatering pumps, slurry pumps and industrial pumping solutions across Africa.",
    type: "website",
    url: "https://www.keletsoprototype.com",
    siteName: "Keletso",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F4F5F6] text-[#17191C]">
        <PrototypeBanner />
        <SiteHeader />
        {children}
        <SiteFooter />
        <PrototypeWatermark />
      </body>
    </html>
  );
}
