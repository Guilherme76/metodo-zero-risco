export type AnalyticsEvent =
  | "view_section"
  | "cta_click"
  | "lead_submit"
  | "checkout_start"
  | "checkout_complete";

export type AnalyticsParams = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(
  event: AnalyticsEvent,
  params: AnalyticsParams = {},
): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...params, ts: Date.now() };

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", payload);
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", event, params);
  }
}
