import Link from "next/link";
import { gruposZona, zonas, zonasEnTexto } from "@/content/zonas";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";
import { MapaCosta } from "../MapaCosta";

/** Zonas de atención: mapa ilustrativo de la costa + lista agrupada con enlace a cada página (SEO local). */
export function Zonas() {
  return (
    <section id="zonas" aria-labelledby="zonas-titulo" className="mx-auto max-w-6xl px-5 md:px-6">
      <Encabezado
        etiqueta="Zonas de atención"
        id="zonas-titulo"
        titulo={
          <>
            De Villa Gesell <span className="text-humo">a toda la costa</span>
          </>
        }
        bajada={`Service, reparación e instalación de calderas y climatización de piscinas en ${zonasEnTexto()}.`}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <figure className="rounded-2xl border border-linea bg-marino p-4 md:p-6">
          <MapaCosta className="mx-auto h-auto w-full max-w-[22rem]" />
          <figcaption className="dato mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-humo">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rojo" /> Base
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-celeste" /> Localidad
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-celeste" /> Barrio privado
            </span>
            <span>Mapa ilustrativo</span>
          </figcaption>
        </figure>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {gruposZona.map((g) => (
            <div key={g}>
              <h3 className="etiqueta border-b border-linea pb-3 text-humo">{g}</h3>
              <ul className="mt-2">
                {zonas
                  .filter((z) => z.grupo === g)
                  .map((z) => {
                    const base = z.slug === "villa-gesell";
                    return (
                      <li key={z.slug}>
                        <Link
                          href={`/zonas/${z.pagina}`}
                          className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2.5 transition hover:bg-white/5"
                        >
                          <span
                            aria-hidden="true"
                            className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                              base ? "bg-rojo" : z.tipo === "barrio privado" ? "border-[1.5px] border-celeste" : "bg-celeste"
                            }`}
                          />
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold leading-tight [font-stretch:110%]">{z.nombre}</span>
                            <span className="block text-xs text-humo">{base ? "Nuestra base" : z.tipo === "barrio privado" ? "Barrio privado" : "Localidad"}</span>
                          </span>
                          <Icono nombre="flecha" className="h-4 w-4 shrink-0 text-humo transition group-hover:translate-x-0.5 group-hover:text-white" />
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
