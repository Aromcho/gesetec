import Link from "next/link";
import { negocio, linkWhatsApp } from "@/content/negocio";
import { peisa } from "@/content/marcas";
import { AbiertoAhora } from "../AbiertoAhora";
import { BotonPedido } from "../BotonPedido";
import { Foto } from "../Foto";
import { LlamaPortada } from "../LlamaPortada";
import { Icono } from "../Icono";

/**
 * Portada: H1 con la búsqueda principal, sello Service Oficial PEISA y una foto real de un service.
 * En el celular la foto va después de los botones: lo primero que se ve es qué hacemos y cómo pedirlo.
 */
export function Portada() {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-24 md:pb-20 md:pt-32" aria-labelledby="h1">
      {/* Fondo: un solo degradé marino, sin adornos */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[linear-gradient(180deg,#0b1a38_0%,rgb(11_26_56/0.55)_45%,transparent_100%)]" />
      {/* Celular: la llama con el sello de fondo, detrás del título, con los bordes difuminados */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-[22rem] w-[19.5rem] opacity-40 [mask-image:radial-gradient(closest-side,#000_50%,transparent_100%)] lg:hidden"
      >
        <LlamaPortada className="h-full w-full" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-x-14 gap-y-9 px-5 md:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="lg:col-start-1 lg:row-start-1">
          <AbiertoAhora />
          <h1 id="h1" className="titular mt-5 text-[2.2rem] xs:text-[2.45rem] sm:text-[2.9rem] lg:text-[3.5rem]">
            Venta y service oficial de calderas en <span className="text-rojo">Villa Gesell</span>
          </h1>
          <p className="mt-4 max-w-[60ch] text-[0.9rem] leading-[1.6] text-celeste/85 md:mt-5 md:text-[1.1rem] md:leading-relaxed md:text-celeste">
            Reparación, mantenimiento e instalación de calderas, calefacción central y climatización de piscinas en Villa Gesell, Mar de las
            Pampas, Mar Azul, Cariló, Valeria del Mar, Pinamar, Costa Esmeralda, los barrios privados de la zona y Madariaga. Técnico de calderas
            matriculado y repuestos originales.
          </p>

          {/* Sello Service Oficial PEISA */}
          <Link
            href="/service-oficial-peisa"
            className="group mt-6 inline-flex items-center gap-3 rounded-xl border border-linea bg-marino p-2 pr-4 transition hover:border-celeste/40"
          >
            <span className="rounded-lg bg-white px-3 py-2">
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
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold transition hover:border-white/40 hover:bg-white/10"
            >
              <Icono nombre="whatsapp" className="h-5 w-5 text-whatsapp" />
              Escribinos por WhatsApp
            </a>
          </div>
        </div>

        {/* Foto real: en el celular, debajo de los botones */}
        <figure className="relative lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-linea bg-marino sm:aspect-[16/10] lg:aspect-[4/5]">
            <Foto
              nombre="service-caldera-mural-abierta-villa-gesell"
              alt="Técnico de Gesetec haciendo el service de una caldera mural abierta en Villa Gesell"
              sizes="(min-width: 1024px) 34vw, 92vw"
              prioridad
            />
          </div>
          <span aria-hidden="true" className="absolute -bottom-px left-6 right-6 h-[3px] rounded-full bg-rojo" />
        </figure>

        <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-linea pt-6 text-sm text-celeste lg:col-start-1 lg:row-start-2 lg:self-start lg:border-t-0 lg:pt-0">
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
    </section>
  );
}
