import Link from "next/link";
import { negocio, direccionCompleta, linkTelefono, linkWhatsApp, linkComoLlegar } from "@/content/negocio";
import { servicios } from "@/content/servicios";
import { marcas } from "@/content/marcas";
import { horariosAgrupados } from "@/lib/horarios";
import { Icono } from "./Icono";
import { Llama } from "./Llama";

/** Pie: nombre, dirección y teléfono idénticos en todas las páginas (NAP). */
export function Pie() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-linea bg-[#030816] pb-28 pt-16 md:pb-16">
      <Llama className="pointer-events-none absolute -right-24 -top-10 h-[26rem] w-auto opacity-[0.06]" circulo={false} modo="quieta" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
        <div>
          <img src="/brand/gesetec-logo.svg" alt={negocio.nombre} width={658} height={205} loading="lazy" className="h-14 w-auto" />
          <div className="mt-6 space-y-1.5 text-[0.95rem] leading-relaxed text-celeste">
            <p className="font-semibold text-white">
              {negocio.nombre}
            </p>
            <p>{direccionCompleta}</p>
            <p>
              <a href={linkTelefono} data-ubicacion="pie" className="hover:text-white">
                Tel. y WhatsApp: {negocio.telefono.visible}
              </a>
            </p>
            <p>
              <a href={`mailto:${negocio.email}`} className="hover:text-white">
                {negocio.email}
              </a>
            </p>
            <p className="pt-1 text-sm text-humo">
              {negocio.tecnico.nombre} · Técnico oficial · {negocio.tecnico.matricula}
            </p>
          </div>
          <ul className="mt-5 space-y-1 text-sm text-humo">
            {horariosAgrupados().map((h) => (
              <li key={h.dias}>
                <span className="text-celeste">{h.dias}:</span> {h.horas}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" data-ubicacion="pie" className="inline-flex h-11 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-[#05341a]">
              <Icono nombre="whatsapp" className="h-5 w-5" /> WhatsApp
            </a>
            <a href={negocio.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-linea px-4 text-sm hover:border-celeste">
              <Icono nombre="instagram" className="h-5 w-5" /> @{negocio.instagram.usuario}
            </a>
            <a href={linkComoLlegar} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-linea px-4 text-sm hover:border-celeste">
              <Icono nombre="ubicacion" className="h-5 w-5" /> Cómo llegar
            </a>
          </div>
        </div>

        <nav aria-label="Servicios">
          <p className="etiqueta text-humo">Servicios</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/service-oficial-peisa" className="font-semibold text-white hover:text-celeste">
                Service oficial PEISA
              </Link>
            </li>
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="text-celeste hover:text-white">
                  {s.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Marcas">
          <p className="etiqueta text-humo">Marcas · service oficial</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/service-oficial-peisa" className="text-celeste hover:text-white">
                PEISA
              </Link>
            </li>
            {marcas.map((m) => (
              <li key={m.slug}>
                <Link href={`/marcas/${m.slug}`} className="text-celeste hover:text-white">
                  {m.nombre}
                </Link>
              </li>
            ))}
          </ul>
          <p className="etiqueta mt-8 text-humo">Zonas</p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
            {negocio.zonas.map((z) => (
              <li key={z.slug}>
                <Link href={`/zonas/${z.pagina}`} className="text-celeste hover:text-white">
                  {z.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-linea px-5 pt-6 text-xs text-humo md:flex-row md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} {negocio.nombre} · {negocio.lema}. Villa Gesell, Buenos Aires.
        </p>
        <p>Las marcas y logos pertenecen a sus respectivos dueños.</p>
      </div>
    </footer>
  );
}
