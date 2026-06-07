export const telegramConfig = {
  url: process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || "https://t.me/rfppagamentos_bot",
  handle: "@rfppagamentos_bot",
  displayName: "Telegram",
};

export const checkout = {
  baseUrl:
    process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() ||
    "https://pay.hotmart.com/RFP-SPORTS-VIP",
  cta: "Quero entrar no grupo VIP",
  deadline:
    process.env.NEXT_PUBLIC_CHECKOUT_DEADLINE?.trim() || getDefaultDeadline(),
  planParam: "plan",
} as const;

function getDefaultDeadline(): string {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  d.setHours(23, 59, 59, 0);
  return d.toISOString();
}

export function planCheckoutUrl(planId: "mensal" | "trimestral" | "semestral" | "anual"): string {
  const sep = checkout.baseUrl.includes("?") ? "&" : "?";
  return `${checkout.baseUrl}${sep}${checkout.planParam}=${planId}`;
}
