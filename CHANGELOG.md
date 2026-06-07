# Changelog

Todas as mudanças notáveis neste projeto são documentadas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e este projeto adere a [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] — 2026-06-07

### Adicionado

#### Fundação
- Stack Next.js 16 + React 19 + TypeScript strict + Tailwind CSS 4.
- Estrutura de pastas `src/{app,components,lib,hooks,types,constants,data,utils}`.
- Tokens de design system (cores, tipografia fluida, raios, sombras) em `globals.css`.
- `lib/cn.ts`, `lib/seo.ts`, `lib/env.ts` (validação de env), `lib/analytics.ts` (gtag/fbq/dataLayer).
- `utils/format.ts` (BRL, números, datas, parcelamento).
- `next.config.ts` (compress, AVIF/WebP, headers de segurança, optimizePackageImports).
- `vercel.json` (build, regions gru1, cache de OG/icon, redirect www→apex).
- `src/app/icon.tsx` e `src/app/opengraph-image.tsx` via `next/og`.
- `src/app/robots.ts` e `src/app/sitemap.ts`.
- `.env.example`, `.gitignore` ajustado (permite `.env.example`).

#### Design System
- Primitivos: `Button`, `ButtonLink`, `Badge`, `Card`, `Container`, `Section`, `Heading`, `Accordion`, `Avatar`, `Icon`.
- Foco visível global, `aria-*` consistentes, navegação por teclado.

#### Landing (9 seções)
- Header sticky com backdrop blur.
- Hero com mockup visual do grupo VIP (sinais GREEN/RED, banca +12.4%).
- TrustBar com 4 stats + 4 selos.
- Problem (5 dores), Solution (3 pilares), HowItWorks (4 passos).
- Benefits (8 cards), Testimonials (6 depoimentos).
- LeadCapture (formulário com LGPD + validação + máscara de WhatsApp).
- Offer com CountdownBanner, garantia de 7 dias integrada, parcelamento.
- FAQ (8 perguntas) via `<details>/<summary>` nativo.
- CtaFinal (reforço de fechamento), Footer institucional.
- StickyCtaMobile (fixed bottom, mobile only).

#### Conversão
- `lib/analytics.ts`: abstração de tracking (view_section, cta_click, lead_submit, checkout_start).
- `TrackedButtonLink` (client wrapper) disparando eventos em todos os CTAs.
- `PageViewTracker` com IntersectionObserver (1 cliente para todas as seções).
- `CountdownBanner` com `useCountdown` (atualização 1s, `tabular-nums`).
- Hierarquia de CTA: 1 primário por dobra, accent-500 reservado.

#### SEO
- Metadata API completa: title template, description, keywords, robots, alternates.canonical, openGraph, twitter, verification, geo.
- JSON-LD: `Organization` (layout), `Product`/`Offer` (com AggregateRating), `FAQPage`, `BreadcrumbList` (página).
- HTML semântico: 1× `<h1>`, hierarquia de headings correta, `aria-labelledby` em todas as seções.
- `lang="pt-BR"`, `dir="ltr"`, skip link.
- `prefers-reduced-motion` desabilita animações.

#### Performance
- Server Components por padrão; 5 client islands mínimas.
- `next/font/google` (Inter) com `display: swap` e preload.
- `optimizePackageImports: ["lucide-react"]` para tree-shaking.
- Headers: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`.

#### DevOps
- `package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `check` (lint+typecheck+build).
- `prebuild` e `predeploy` rodam `scripts/pre-deploy.mjs` (checklist automático).
- `.github/workflows/ci.yml` (CI com lint + typecheck + build).
- README.md + DEPLOY.md completos.

### Notas técnicas
- Tailwind 4 com `@theme` + `@theme inline` para tokens.
- `lucide-react@1.17.0` (versão estável atual).
- `experimental.optimizePackageImports` ativo (recomendação Next para ícones).
- `react-hook-form@7.77.0` para o LeadForm.
- Build de produção: 8 rotas estáticas (incluindo `/icon`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`).
