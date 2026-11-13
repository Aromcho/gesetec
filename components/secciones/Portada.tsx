import Link from "next/link";
import { negocio, linkWhatsApp } from "@/content/negocio";
import { peisa } from "@/content/marcas";
import { AbiertoAhora } from "../AbiertoAhora";
import { BotonPedido } from "../BotonPedido";
import { Icono } from "../Icono";
import { LlamaPortada } from "../LlamaPortada";

/** Portada: la llama se enciende, H1 con la búsqueda principal y sello Service Oficial PEISA. */
export function Portada() {
  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-28" aria-labelledby="h1">
      {/* Fondo: frío a la izquierda, calor a la derecha */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(51_113_209/0.28),transparent_65%)]" />
        <div className="absolute -right-32 top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(227_50_42/0.22),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#b9c8f0_1px,transparent_1px),linear-gradient(90deg,#b9c8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_30%,#000_20%,transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-noche" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-2 px-5 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <LlamaPortada className="order-first mx-auto -mb-4 h-[17rem] w-[15rem] xs:h-[19rem] xs:w-[17rem] lg:order-last lg:mb-0 lg:h-[34rem] lg:w-[30rem]" />

        <div className="relative pb-10 lg:pb-24">
          <AbiertoAhora />
          <h1 id="h1" className="titular mt-5 text-[2.35rem] xs:text-[2.6rem] sm:text-5xl lg:text-[4.1rem]">
            Venta y service oficial de calderas en <span className="degrade-llama">Villa Gesell</span>
          </h1>
          <p className="mt-5 max-w-xl text-[1.08rem] leading-relaxed text-celeste md:text-lg">
            Reparación, mantenimiento e instalación de calderas y calefacción central en Villa Gesell, Cariló, Pinamar y Costa Esmeralda.
            Técnicos oficiales y repuestos originales.
          </p>

          {/* Sello Service Oficial PEISA */}
          <Link
            href="/service-oficial-peisa"
            className="group mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-2 pr-4 transition hover:border-white/30"
          >
            <span className="rounded-xl bg-white px-3 py-2">
              <img src={peisa.logo.src} alt="PEISA" width={peisa.logo.ancho} height={peisa.logo.alto} className="h-5 w-auto" fetchPriority="low" />
            </span>
            <span className="leading-tight">
              <span className="etiqueta block text-[0.68rem] text-celeste">Sello</span>
              <span className="font-bold [font-stretch:112%]">Service Oficial PEISA</span>
            </span>
            <Icono nombre="flecha" className="h-4 w-4 text-celeste transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BotonPedido className="w-full sm:w-auto" />
            <a
              href={linkWhatsApp("Hola Gesetec, necesito service para mi caldera.")}
              target="_blank"
              rel="noopener noreferrer"
              data-ubicacion="portada"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-6 font-semibold transition hover:border-white/40 hover:bg-white/10"
            >
              <Icono nombre="whatsapp" className="h-5 w-5 text-whatsapp" />
              Escribinos por WhatsApp
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-celeste">
            <li className="flex items-center gap-2">
              <span className="flex text-[#f7b733]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icono key={i} nombre="estrella" className="h-4 w-4" />
                ))}
              </span>
              <span>
                <strong className="text-white">{negocio.resenasGoogle.promedio}</strong> · {negocio.resenasGoogle.cantidad} reseñas en Google
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Icono nombre="escudo" className="h-5 w-5 text-azul" />
              Técnico matriculado
            </li>
            <li className="flex items-center gap-2">
              <Icono nombre="reloj" className="h-5 w-5 text-azul" />
              Visita técnica en el día
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
