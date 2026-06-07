type EnvConfig = {
  siteUrl: string;
  checkoutUrl: string;
  telegramUrl: string;
  checkoutDeadline: string | undefined;
  gaId: string | undefined;
  metaPixelId: string | undefined;
  googleSiteVerification: string | undefined;
};

function read(key: string): string | undefined {
  const v = process.env[key];
  if (v === undefined || v === "") return undefined;
  return v.trim();
}

function withDefault(value: string | undefined, fallback: string): string {
  return value && value.length > 0 ? value : fallback;
}

const DEFAULT_SITE_URL = "https://metodo-zero-risco.vercel.app";
const DEFAULT_CHECKOUT_URL = "https://pay.hotmart.com/RFP-SPORTS-VIP";
const DEFAULT_TELEGRAM_URL = "https://t.me/rfppagamentos_bot";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validateUrl(key: string, value: string): void {
  if (!isValidUrl(value)) {
    throw new Error(
      `[env] ${key} inválida: "${value}". Esperado URL absoluta (https://...).`,
    );
  }
}

const siteUrl = normalizeSiteUrl(
  withDefault(read("NEXT_PUBLIC_SITE_URL"), DEFAULT_SITE_URL),
);
const checkoutUrl = withDefault(
  read("NEXT_PUBLIC_CHECKOUT_URL"),
  DEFAULT_CHECKOUT_URL,
);
const telegramUrl = withDefault(
  read("NEXT_PUBLIC_TELEGRAM_URL"),
  DEFAULT_TELEGRAM_URL,
);

validateUrl("NEXT_PUBLIC_SITE_URL", siteUrl);
validateUrl("NEXT_PUBLIC_CHECKOUT_URL", checkoutUrl);
validateUrl("NEXT_PUBLIC_TELEGRAM_URL", telegramUrl);

export const env: EnvConfig = {
  siteUrl,
  checkoutUrl,
  telegramUrl,
  checkoutDeadline: read("NEXT_PUBLIC_CHECKOUT_DEADLINE"),
  gaId: read("NEXT_PUBLIC_GA_ID"),
  metaPixelId: read("NEXT_PUBLIC_META_PIXEL_ID"),
  googleSiteVerification: read("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
};
