import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/constants/site";
import { organizationSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/json-ld";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} dir="ltr" className={inter.variable}>
      <body className="bg-black-950 text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black-950"
        >
          Pular para o conteúdo
        </a>
        {children}
        <JsonLd id="ld-organization" data={organizationSchema()} />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
