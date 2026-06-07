import type { Metadata } from "next";
import {
  Header,
  Hero,
  JoinTicker,
  SocialProof,
  Resultados,
  Benefits,
  Plans,
  PlansComparison,
  Faq,
  CtaFinal,
  Footer,
  PageViewTracker,
} from "@/components/sections";
import { ContextualStickyCta } from "@/components/layout/contextual-sticky-cta";
import { SectionDivider } from "@/components/ui";
import { ScrollProgress } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import {
  productSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Comunidade VIP da RFP Sports",
  description:
    "Entre no grupo VIP da Comunidade RFP Sports. Método Zero Risco com critério, gestão de banca, entradas sinalizadas e suporte diário no Telegram. Mais de 1.200 operadores ativos.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <JsonLd id="ld-product" data={productSchema()} />
      <JsonLd id="ld-faq" data={faqSchema()} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema()} />
      <Header />
      <main id="main" className="flex flex-col">
        <Hero />
        <JoinTicker />
        <SocialProof />
        <SectionDivider className="bg-black-950" />
        <Resultados />
        <Benefits />
        <Plans />
        <PlansComparison />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <ContextualStickyCta />
      <PageViewTracker />
    </>
  );
}
