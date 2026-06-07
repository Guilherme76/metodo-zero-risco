# Guia de Deploy — Vercel

Este documento descreve o deploy de produção do **Método Zero Risco** na Vercel, do zero ao monitoramento.

## Pré-requisitos

- Conta na [Vercel](https://vercel.com).
- Repositório Git (GitHub, GitLab ou Bitbucket) com o código.
- Domínio próprio (opcional, mas recomendado).
- IDs de produção (Hotmart/Kiwify, GA4, Meta Pixel) em mãos.

## Passo 1 — Conectar o repositório

1. Acesse [vercel.com/new](https://vercel.com/new).
2. Importe o repositório `metodo-zero-risco`.
3. **Framework Preset**: Next.js (auto-detectado).
4. **Build Command**: `npm run build` (default).
5. **Output Directory**: `.next` (default).
6. **Install Command**: `npm ci` (recomendado para builds reproduzíveis).
7. **Root Directory**: `./` (default).

Clique em **Deploy**. O primeiro build pode demorar ~2min.

## Passo 2 — Configurar variáveis de ambiente

Em **Project Settings → Environment Variables**, adicione (escolhendo Production):

| Name | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://seu-dominio.com.br` | Production, Preview |
| `NEXT_PUBLIC_CHECKOUT_URL` | URL real do gateway (Hotmart/Kiwify/Stripe) | Production, Preview* |
| `NEXT_PUBLIC_CHECKOUT_DEADLINE` | ISO datetime do fim da oferta (opcional) | Production |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production |
| `NEXT_PUBLIC_META_PIXEL_ID` | Pixel ID da Meta | Production |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token do Search Console | Production |

> \* Use uma URL de checkout de teste em **Preview** para validar o fluxo antes de produção.

Após adicionar, **redeploy** para aplicar.

## Passo 3 — Configurar domínio

1. **Project Settings → Domains**.
2. Adicione o domínio apex (ex: `metodo-zero-risco.com.br`).
3. Adicione também o subdomínio `www` (a Vercel redireciona `www` → apex automaticamente).
4. Configure os DNS no seu provedor:
   - **Apex** (`metodo-zero-risco.com.br`): registro `A` apontando para `76.76.21.21`.
   - **WWW** (`www.metodo-zero-risco.com.br`): CNAME para `cname.vercel-dns.com`.
5. Aguarde a propagação (até 48h, geralmente <1h).
6. SSL é provisionado automaticamente.

## Passo 4 — Smoke test pós-deploy

Teste em 3 viewports (DevTools do navegador):

### Mobile (375×667)
- [ ] Hero exibe título, subtítulo e CTA primário.
- [ ] Sticky CTA aparece no rodapé ao rolar.
- [ ] TrustBar mostra 4 stats e 4 badges.
- [ ] LeadForm: nome, e-mail, WhatsApp com máscara.
- [ ] CountdownBanner atualiza a cada segundo.
- [ ] Offer: preço riscado, economia, botão "Garantir minha vaga".
- [ ] FAQ: accordion abre/fecha.

### Tablet (768×1024)
- [ ] Layout intermediário (1 col → 2 colunas).
- [ ] Nav aparece com âncoras.

### Desktop (1440×900)
- [ ] Hero 2 colunas (copy + visual mockup).
- [ ] Todas as seções em largura completa.
- [ ] Sticky CTA oculto.

### Funcional
- [ ] CTA primário abre o checkout em nova aba.
- [ ] Submit do LeadForm redireciona para checkout.
- [ ] Validações disparam mensagens de erro.
- [ ] `view_section` aparece no console (devTools).
- [ ] `cta_click` dispara ao clicar.

## Passo 5 — Teste de velocidade

### PageSpeed Insights

Acesse [pagespeed.web.dev](https://pagespeed.web.dev) e rode com a URL de produção. **Metas**:

- **Performance** ≥ 90
- **SEO** = 100
- **Accessibility** ≥ 95
- **Best Practices** ≥ 95

### WebPageTest

Acesse [webpagetest.org](https://webpagetest.org) e rode com:
- **Location**: São Paulo, Brasil
- **Connection**: 4G (9 Mbps / 170ms RTT)
- **Runs**: 3 (pegue a mediana)

**Metas**:
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- TTFB < 600ms

## Passo 6 — Indexação (Search Console)

1. Acesse [Google Search Console](https://search.google.com/search-console).
2. Adicione a property (domínio ou URL prefix).
3. Verifique via DNS TXT (recomendado) — copie o token para `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` na Vercel e redeploy.
4. Em **Sitemaps**, envie `https://seu-dominio.com.br/sitemap.xml`.
5. Em **URL Inspection**, teste a URL principal e solicite indexação.

## Passo 7 — Tracking

### Meta Pixel + Google Ads

1. **Meta Events Manager** → Pixels → seu pixel → Install code → confirme que está disparando `PageView`.
2. **Google Ads** → Tools → Conversions → New conversion → Website → instale via tag (ou use a integração GA4 → Google Ads).
3. Valide usando:
   - [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) (extensão Chrome).
   - [Google Tag Assistant](https://tagmanager.google.com/) (extensão Chrome).

### UTM tracking em campanhas

Use UTMs em todas as URLs de campanha para rastrear origem no GA4:

```
https://seu-dominio.com.br/?utm_source=meta&utm_medium=cpc&utm_campaign=vip-junho&utm_content=video-a
```

## Passo 8 — Monitoramento

### Vercel Analytics (recomendado)

1. **Project → Analytics → Enable**.
2. Métricas automáticas: Web Vitals, top pages, referrers.

### Sentry (opcional, recomendado para longo prazo)

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

Configure `SENTRY_DSN` e `SENTRY_AUTH_TOKEN` na Vercel.

### Uptime monitoring (opcional)

- [Better Uptime](https://betteruptime.com) (free tier)
- [UptimeRobot](https://uptimerobot.com) (free tier)

Configure para monitorar `https://seu-dominio.com.br` a cada 5min.

## Rollback

Se um deploy quebrar produção:

```bash
# Via CLI
vercel rollback

# Ou no dashboard: Deployments → click no anterior → Promote to Production
```

## Checklist final

- [ ] Domínio configurado e SSL ativo
- [ ] Env vars de produção aplicadas
- [ ] Smoke test mobile + tablet + desktop
- [ ] Lighthouse ≥ 90 / SEO = 100
- [ ] Search Console verificado + sitemap enviado
- [ ] Meta Pixel + GA4 disparando
- [ ] Vercel Analytics ativo
- [ ] Equipe notificada (Slack/email)
