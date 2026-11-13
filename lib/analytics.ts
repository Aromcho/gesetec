/** Eventos de GA4. Si no hay NEXT_PUBLIC_GA_ID, no hace nada. */
type Evento = "click_whatsapp" | "click_llamar" | "pedido_service";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function evento(nombre: Evento, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", nombre, params);
}
