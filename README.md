<<<<<<< HEAD
# 🎯 Método Zero Risco — Landing Page

Landing page de vendas de alta conversão para o produto digital **Método Zero Risco** da **Comunidade RFP Sports**.

## 📌 Sobre o Projeto

Esta landing page apresenta o Método Zero Risco, uma metodologia que explora vantagens matemáticas em casas de apostas por meio de:

- **Promoções** — cashback, odds aumentadas, apostas protegidas
- **Missões** — bônus diários e semanais
- **Freebets** — apostas grátis convertidas em dinheiro real (60–80% de eficiência)
- **Duplo Green** — arbitragem entre duas casas de apostas

A comunidade possui parceria exclusiva com a **BETBRA**, reduzindo a comissão de 4,5% para **2,8%** para membros.

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Motivo |
|---|---|---|
| Next.js | 15+ | SSR, App Router, SEO nativo |
| React | 19 | UI reativa e moderna |
| TypeScript | 5+ | Tipagem estática, menos bugs |
| Tailwind CSS | 4 | Estilização utilitária rápida |
| Vercel | — | Deploy automático via CI/CD |

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Problems.tsx
│       ├── Solution.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       └── LeadForm.tsx
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## 🚀 Como Rodar Localmente

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy

Projeto hospedado na **Vercel** com deploy automático a cada push na branch `main`.

## 📊 Funcionalidades

- [x] Hero section com CTA principal
- [x] Seção de problemas e solução
- [x] Como funciona (passo a passo)
- [x] Depoimentos de membros
- [x] Tabela de preços
- [x] FAQ com accordion
- [x] Formulário de captura de leads
- [x] SEO completo (Open Graph, Schema.org)
- [x] Responsivo (mobile-first)

## 📝 Workflow de Desenvolvimento

- Branch principal: `main` (protegida)
- Feature branches: `feat/nome-da-feature`
- Commits semânticos: `feat:`, `fix:`, `chore:`, `docs:`
- Pull Requests obrigatórios para merge na `main`
=======
# Método Zero Risco — Landing Page

Landing page de vendas do **Método Zero Risco** da Comunidade RFP Sports. Conversão de visitantes em assinantes pagantes do grupo VIP.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 4** (tokens via `@theme`)
- **lucide-react** (ícones, tree-shaken)
- **react-hook-form** (lead capture)
- **Vercel** (deploy)

## Estrutura

```
src/
├── app/             # Rotas, layout, metadata, JSON-LD, robots, sitemap
├── components/
│   ├── ui/          # Primitivos: Button, Card, Section, Heading, Accordion, ...
│   ├── sections/    # Blocos da landing (Hero, Problem, Solution, ...)
│   ├── layout/      # StickyCtaMobile
│   ├── cta/         # TrackedButtonLink (client wrapper com tracking)
│   ├── seo/         # JsonLd
│   ├── analytics/   # AnalyticsScripts (GA4 + Meta Pixel via next/script)
│   └── forms/       # LeadForm
├── lib/             # cn, seo, env, analytics, structured-data
├── hooks/           # useCountdown
├── types/           # Tipagens compartilhadas
├── constants/       # site, checkout
├── data/            # Copy e dados estáticos das seções
└── utils/           # format (BRL, datas)
```

## Primeiros passos

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste conforme necessário:

```bash
cp .env.example .env.local
```

| Variável | Obrigatório | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | sim | URL canônica do site (ex: `https://metodo-zero-risco.com.br`) |
| `NEXT_PUBLIC_CHECKOUT_URL` | sim | URL do gateway externo (Hotmart, Kiwify, Stripe Link) |
| `NEXT_PUBLIC_CHECKOUT_DEADLINE` | não | ISO datetime do fim da oferta (afeta o `CountdownBanner`) |
| `NEXT_PUBLIC_GA_ID` | não | Google Analytics 4 Measurement ID (ex: `G-XXXXXXX`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | não | Meta Pixel ID |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | não | Token do Google Search Console |

> Sem `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_META_PIXEL_ID`, os scripts de analytics **não carregam** (no-op).

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção (pós-build) |
| `npm run lint` | ESLint (Next + TS) |
| `npm run typecheck` | TypeScript (sem emit) |
| `npm run check` | Lint + typecheck + build (roda antes de `build` automaticamente) |

## Fluxos internos

### Atualizar copy de uma seção

A copy fica em `src/data/*.ts`. Edite o arquivo correspondente e o hot-reload aplica.

Exemplo — alterar o H1 do Hero: `src/data/hero.ts`.

### Atualizar preço da oferta

`src/data/offer.ts` — campos `price`, `originalPrice`, `installments`.

### Trocar a URL de checkout

`.env.local` (e nas envs da Vercel) — `NEXT_PUBLIC_CHECKOUT_URL`.

### Trocar o deadline do Countdown

`.env.local` (e nas envs da Vercel) — `NEXT_PUBLIC_CHECKOUT_DEADLINE` em ISO 8601.

### Adicionar uma nova seção

1. Crie `src/components/sections/minha-secao.tsx` (server component por padrão).
2. Crie `src/data/minha-secao.ts` com a copy.
3. Importe e adicione em `src/app/page.tsx`.
4. Se a seção deve ser rastreada, adicione `id="minha-secao"` na tag `<section>` — o `PageViewTracker` cuida do resto.

### Adicionar um campo ao LeadForm

1. Adicione o id em `LeadFormValues` em `src/types/lead.ts`.
2. Adicione a config em `src/data/lead.ts` (`fields[]`).
3. Adicione a regra de validação em `getFieldOptions()` em `src/components/forms/lead-form.tsx`.

## SEO

- **Metadata API** centralizada em `src/lib/seo.ts`.
- **JSON-LD** (`Organization`, `Product/Offer`, `FAQPage`, `BreadcrumbList`) em `src/lib/structured-data.ts`, renderizado via `<script type="application/ld+json">`.
- **Open Graph image** dinâmica via `src/app/opengraph-image.tsx` (1200×630, `next/og`).
- **Favicon** dinâmico via `src/app/icon.tsx` (32×32).
- **robots.txt** e **sitemap.xml** gerados estaticamente em `src/app/`.

## Performance

- Server Components por padrão. Apenas `LeadForm`, `CountdownBanner`, `PageViewTracker`, `TrackedButtonLink` e `AnalyticsScripts` são client islands.
- `next/image` para imagens (quando assets reais forem adicionados).
- `next/font/google` (Inter) com `display: swap` e preload.
- `optimizePackageImports: ["lucide-react"]` para tree-shaking de ícones.
- `prefers-reduced-motion` desabilita animações.

## Acessibilidade

- Skip link "Pular para o conteúdo" no topo.
- Foco visível global (ring accent-500).
- Headings hierárquicos: 1× `<h1>` (Hero) + `<h2>` por seção + `<h3>` em cards.
- `aria-labelledby` em todas as seções.
- `aria-invalid` + `aria-describedby` em campos de formulário.
- `aria-live="polite"` em estados de sucesso.
- Contraste AA em todos os textos.

## Deploy

Veja [`DEPLOY.md`](./DEPLOY.md) para o passo a passo completo na Vercel.

## Licença

Proprietário — Comunidade RFP Sports.
>>>>>>> 992cace (feat: implementa landing completa da Comunidade VIP RFP Sports)
