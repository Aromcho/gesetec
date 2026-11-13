"use client";

import { useEffect, useState } from "react";
import { linkTelefono, linkWhatsApp, negocio } from "@/content/negocio";
import { Icono } from "./Icono";

/**
 * Botones fijos de WhatsApp y llamar, en todas las páginas.
 * En el celular aparecen apenas se baja un poco (así no tapan los botones de la portada).
 */
export function AccionesFijas() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const f = () => setVisible(window.scrollY > 380 || window.innerWidth >= 768);
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-end gap-3 transition-all duration-500 md:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={linkTelefono}
        data-ubicacion="boton_fijo"
        aria-label={`Llamar a ${negocio.nombre}: ${negocio.telefono.visible}`}
        className="grid h-12 w-12 place-items-center rounded-full border border-linea bg-marino/95 text-white shadow-[0_8px_30px_-8px_rgb(0_0_0/0.8)] backdrop-blur transition hover:border-azul hover:text-celeste"
      >
        <Icono nombre="telefono" className="h-5 w-5" />
      </a>
      <a
        href={linkWhatsApp("Hola Gesetec, quiero hacer una consulta sobre mi caldera.")}
        target="_blank"
        rel="noopener noreferrer"
        data-ubicacion="boton_fijo"
        aria-label="Escribinos por WhatsApp"
        className="grid h-15 w-15 place-items-center rounded-full bg-whatsapp text-[#05341a] shadow-[0_10px_34px_-6px_rgb(37_211_102/0.6)] transition hover:scale-105"
      >
        <Icono nombre="whatsapp" className="h-8 w-8" />
      </a>
    </div>
  );
}
