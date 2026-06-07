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
