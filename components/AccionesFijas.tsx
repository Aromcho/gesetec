"use client";

import { useEffect, useState } from "react";
import { linkTelefono, linkWhatsApp, negocio } from "@/content/negocio";
import { Icono } from "./Icono";

/**
 * Contacto fijo en todas las páginas.
 * - Celular: barra inferior con "Llamar" y "WhatsApp" (no tapa contenido: el pie deja el espacio).
 * - Escritorio: un solo botón de WhatsApp, que aparece después de la portada.
 */
export function AccionesFijas() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const f = () => setVisible(window.scrollY > 560);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      {/* Celular: barra inferior */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-linea bg-noche/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={linkTelefono}
            data-ubicacion="barra_fija"
            aria-label={`Llamar a ${negocio.nombre}: ${negocio.telefono.visible}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-linea bg-marino text-[1rem] font-semibold text-white"
          >
            <Icono nombre="telefono" className="h-5 w-5 text-celeste" />
            Llamar
          </a>
          <a
            href={linkWhatsApp("Hola Gesetec, quiero hacer una consulta sobre mi caldera.")}
            target="_blank"
            rel="noopener noreferrer"
            data-ubicacion="barra_fija"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-whatsapp text-[1rem] font-bold text-[#05341a]"
          >
            <Icono nombre="whatsapp" className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Escritorio: un solo botón */}
      <a
        href={linkWhatsApp("Hola Gesetec, quiero hacer una consulta sobre mi caldera.")}
        target="_blank"
        rel="noopener noreferrer"
        data-ubicacion="boton_fijo"
        aria-label="Escribinos por WhatsApp"
        className={`fixed bottom-6 right-6 z-40 hidden h-15 w-15 place-items-center rounded-full bg-whatsapp text-[#05341a] shadow-[0_10px_34px_-6px_rgb(37_211_102/0.55)] transition-all duration-500 hover:scale-105 md:grid ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <Icono nombre="whatsapp" className="h-8 w-8" />
      </a>
    </>
  );
}
