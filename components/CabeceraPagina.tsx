import { linkWhatsApp } from "@/content/negocio";
import { AbiertoAhora } from "./AbiertoAhora";
import { BotonPedido } from "./BotonPedido";
import { Icono } from "./Icono";
import { Llama } from "./Llama";
import { Migas } from "./Migas";

interface Props {
  migas: { nombre: string; ruta: string }[];
  etiqueta: string;
  h1: string;
  bajada: string;
  /** Preselección para "Pedí tu service". */
  pedido?: { marca?: string; servicio?: string };
  mensajeWhatsApp?: string;
  /** Contenido a la derecha (logo de marca, foto…). */
  aparte?: React.ReactNode;
}

/**
 * Tamaño del H1 que nunca desborda en el celular: se achica si la palabra más larga
 * no entra en el ancho de la pantalla (Archivo Expanded Black ≈ 0,75 em por letra).
 */
function tamanoTitular(texto: string) {
  const largo = Math.max(...texto.split(/\s+/).map((p) => p.replace(/[^\p{L}]/gu, "").length));
  return `min(var(--h1-max), calc((100vw - 2.75rem) / ${(largo * 0.75).toFixed(2)}))`;
}

/** Cabecera de las páginas internas (servicios, marcas, PEISA). */
export function CabeceraPagina({ migas, etiqueta, h1, bajada, pedido, mensajeWhatsApp, aparte }: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-24 md:pb-16 md:pt-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(51_113_209/0.22),transparent_65%)]" />
        <div className="absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(227_50_42/0.16),transparent_65%)]" />
        <Llama className="absolute -right-16 top-16 h-[22rem] w-auto opacity-[0.07] md:right-[8%]" circulo={false} modo="quieta" />
      </div>
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <Migas items={migas} />
        <div className={`mt-6 grid gap-10 ${aparte ? "lg:grid-cols-[1.25fr_0.75fr] lg:items-center" : ""}`}>
          <div>
            <p className="etiqueta texto-acento flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-acento" aria-hidden="true" />
              {etiqueta}
            </p>
            <h1
              className="titular mt-4 [--h1-max:2.45rem] sm:[--h1-max:3rem] lg:[--h1-max:3.6rem]"
              style={{ fontSize: tamanoTitular(h1) }}
            >
              {h1}
            </h1>
            <p className="mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-celeste md:text-lg">{bajada}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BotonPedido marca={pedido?.marca} servicio={pedido?.servicio} className="w-full sm:w-auto" />
              <a
                href={linkWhatsApp(mensajeWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                data-ubicacion="cabecera_pagina"
                className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-6 font-semibold transition hover:border-white/40"
              >
                <Icono nombre="whatsapp" className="h-5 w-5 text-whatsapp" /> WhatsApp
              </a>
            </div>
            <AbiertoAhora className="mt-6" />
          </div>
          {aparte}
        </div>
      </div>
    </section>
  );
}
