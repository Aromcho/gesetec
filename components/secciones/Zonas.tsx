import Link from "next/link";
import { gruposZona, zonas, zonasEnTexto } from "@/content/zonas";
import { Encabezado } from "../Encabezado";
import { Llama } from "../Llama";
import { Aparecer } from "../Aparecer";
import { Foto } from "../Foto";
import { Icono } from "../Icono";

/** Zonas de atención agrupadas, cada una con enlace a su página (SEO local por localidad y barrio). */
export function Zonas() {
  return (
    <section id="zonas" aria-labelledby="zonas-titulo" className="relative isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <Foto
          nombre="casa-de-veraneo-entre-pinos-costa-atlantica"
          alt=""
          sizes="100vw"
          className="opacity-25 [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noche via-noche/80 to-noche/40" />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-6">
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gruposZona.map((g, i) => (
            <Aparecer key={g} className="h-full" retraso={i * 0.06}>
              <div className="h-full rounded-3xl border border-linea bg-noche/60 p-5 backdrop-blur-sm">
                <h3 className="etiqueta text-humo">{g}</h3>
                <ul className="mt-4 space-y-1">
                  {zonas
                    .filter((z) => z.grupo === g)
                    .map((z) => {
                      const base = z.slug === "villa-gesell";
                      return (
                        <li key={z.slug}>
                          <Link
                            href={`/zonas/${z.pagina}`}
                            className="group -mx-2 flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-white/5"
                          >
                            <span
                              aria-hidden="true"
                              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${base ? "border-rojo" : "border-celeste/40"}`}
                            >
                              {base ? <Llama className="h-4 w-auto" circulo={false} modo="viva" /> : <span className="h-1.5 w-1.5 rounded-full bg-celeste" />}
                            </span>
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
            </Aparecer>
          ))}
        </div>
      </div>
    </section>
  );
}
