"use client";

import { useEffect } from "react";
import Script from "next/script";
import { evento } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 (solo si NEXT_PUBLIC_GA_ID está definido) + eventos de conversión:
 *  - click_whatsapp: cualquier enlace a wa.me
 *  - click_llamar: cualquier enlace tel:
 *  - pedido_service: se envía desde components/PedidoService.tsx
 */
export function Analytics() {
  useEffect(() => {
    const alClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const ubicacion = a.dataset.ubicacion ?? "sitio";
      if (ubicacion === "pedido_service") return; // ya se mide como pedido_service
      if (href.startsWith("https://wa.me/")) evento("click_whatsapp", { ubicacion, pagina: location.pathname });
      else if (href.startsWith("tel:")) evento("click_llamar", { ubicacion, pagina: location.pathname });
    };
    document.addEventListener("click", alClick, { capture: true });
    return () => document.removeEventListener("click", alClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="ga4" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
