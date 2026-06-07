import type { SiteConfig } from "@/types/site";
import { telegramConfig } from "./checkout";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://metodo-zero-risco.vercel.app";

export const siteConfig: SiteConfig = {
  name: "Comunidade RFP Sports",
  shortName: "RFP Sports",
  tagline:
    "O método definitivo para quem quer operar com critério, gestão e lucro consistente.",
  description:
    "Comunidade VIP de apostas esportivas com método, critério, gestão de banca e suporte diário no Telegram. Mais de 1.200 operadores ativos.",
  url: siteUrl,
  locale: "pt-BR",
  ogImage: "/og/og-image.png",
  twitterHandle: "@rfpsports",
  creator: "Comunidade RFP Sports",
  telegramUrl: telegramConfig.url,
  telegramHandle: telegramConfig.handle,
  keywords: [
    "comunidade rfp sports",
    "método zero risco",
    "grupo vip apostas",
    "gestão de banca",
    "operação esportiva",
    "método esportivo",
    "comunidade de apostadores",
    "telegram apostas",
  ],
};
