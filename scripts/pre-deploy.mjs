#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const errors = [];

function ok(message) {
  console.log(`\x1b[32m✓\x1b[0m ${message}`);
}

function fail(message) {
  errors.push(message);
  console.log(`\x1b[31m✗\x1b[0m ${message}`);
}

function header(title) {
  console.log(`\n\x1b[1m\x1b[36m${title}\x1b[0m`);
}

header("1. Arquivos obrigatórios");
const requiredFiles = [
  "package.json",
  "tsconfig.json",
  "next.config.ts",
  "vercel.json",
  ".env.example",
  ".gitignore",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/opengraph-image.tsx",
  "src/app/icon.tsx",
];
for (const file of requiredFiles) {
  if (existsSync(resolve(file))) {
    ok(file);
  } else {
    fail(`Arquivo ausente: ${file}`);
  }
}

header("2. Env vars documentadas");
const envExample = existsSync(resolve(".env.example"))
  ? readFileSync(resolve(".env.example"), "utf8")
  : "";
const envKeys = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_CHECKOUT_URL",
  "NEXT_PUBLIC_CHECKOUT_DEADLINE",
  "NEXT_PUBLIC_GA_ID",
  "NEXT_PUBLIC_META_PIXEL_ID",
  "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION",
];
for (const key of envKeys) {
  if (envExample.includes(key)) {
    ok(`documentada: ${key}`);
  } else {
    fail(`env var não documentada em .env.example: ${key}`);
  }
}

header("3. Validação de placeholders em código");
const pagePath = resolve("src/app/page.tsx");
if (existsSync(pagePath)) {
  const pageContent = readFileSync(pagePath, "utf8");
  if (pageContent.includes("Lorem ipsum")) {
    fail("page.tsx contém 'Lorem ipsum' — substituir por copy real.");
  } else {
    ok("Sem 'Lorem ipsum' em page.tsx");
  }
}

const heroPath = resolve("src/data/hero.ts");
if (existsSync(heroPath)) {
  ok(`hero.ts (${heroPath})`);
}

header("4. Build output esperado");
ok("Execute 'npm run build' para validar bundle e typecheck.");

header("Resumo");
if (errors.length === 0) {
  console.log(`\n\x1b[32m✓ Pré-deploy OK\x1b[0m\n`);
  process.exit(0);
} else {
  console.error(`\n\x1b[31m✗ Pré-deploy falhou\x1b[0m — ${errors.length} erro(s)\n`);
  process.exit(1);
}
