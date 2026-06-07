import { siteConfig } from "@/constants/site";
import { plansData } from "@/data/plans";
import { faqData } from "@/data/faq";
import { checkout } from "@/constants/checkout";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.creator,
    alternateName: "RFP Sports",
    url: siteConfig.url,
    logo: new URL("/icon", siteConfig.url).toString(),
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    sameAs: [siteConfig.telegramUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Portuguese", "pt-BR"],
      url: siteConfig.telegramUrl,
    },
  };
}

export function productSchema(): JsonLd {
  const priceValidUntil = new Date();
  priceValidUntil.setMonth(priceValidUntil.getMonth() + 1);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Comunidade VIP RFP Sports",
    description: siteConfig.description,
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    brand: {
      "@type": "Brand",
      name: siteConfig.creator,
    },
    offers: {
      "@type": "AggregateOffer",
      url: checkout.baseUrl,
      lowPrice: Math.min(...plansData.map((p) => p.total)).toFixed(2),
      highPrice: Math.max(...plansData.map((p) => p.total)).toFixed(2),
      priceCurrency: "BRL",
      offerCount: plansData.length,
      priceValidUntil: priceValidUntil.toISOString().slice(0, 10),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.creator,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function faqSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Planos",
        item: new URL("#planos", siteConfig.url).toString(),
      },
    ],
  };
}

export const offerDeadlineIso = checkout.deadline;
