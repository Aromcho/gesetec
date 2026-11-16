import Link from "next/link";
import { servicios, type Servicio } from "@/content/servicios";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";
import { Foto } from "../Foto";

/**
 * Servicios como índice numerado (01–07): se lee de un vistazo y cada fila lleva a su página.
 * Cada fila lleva la foto de un trabajo real como miniatura.
 */
export function Servicios({
  lista = servicios,
  titulo = "Todo lo que tu calefacción necesita",
  etiqueta = "Servicios",
  bajada = "Desde el service de una caldera mural hasta proyectos completos de calefacción central y piscinas climatizadas.",
  destacado = false,
}: {
  lista?: Servicio[];
  titulo?: string;
  etiqueta?: string;
  bajada?: string;
  /** Portada: la fila 01 abre con la foto grande al costado del encabezado. */
  destacado?: boolean;
}) {
  const primera = lista[0]?.fotos[1] ?? lista[0]?.fotos[0];
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="mx-auto max-w-6xl px-5 md:px-6">
      <div className={destacado && primera ? "grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end" : ""}>
        <Encabezado etiqueta={etiqueta} titulo={titulo} bajada={bajada || undefined} id="servicios-titulo" />
        {destacado && primera && (
          <div className="hidden aspect-[4/3] overflow-hidden rounded-2xl border border-linea lg:block">
            <Foto nombre={primera} alt={`${lista[0].nombre} – trabajo de Gesetec`} sizes="20rem" />
          </div>
        )}
      </div>

      <ol className="mt-10 border-b border-linea">
        {lista.map((s, i) => (
          <li key={s.slug} className="border-t border-linea">
            <Link
              href={`/servicios/${s.slug}`}
              className="group grid grid-cols-[4rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-[3.5rem_7rem_minmax(0,1fr)_minmax(0,1.15fr)_auto] md:gap-7 md:py-6"
            >
              <span className="dato hidden text-humo transition-colors group-hover:text-rojo md:block md:text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span className="relative aspect-square w-16 overflow-hidden rounded-xl border border-linea bg-marino md:aspect-[4/3] md:w-28">
                {s.fotos[0] ? (
                  <Foto
                    nombre={s.fotos[0]}
                    alt=""
                    sizes="(min-width: 768px) 112px, 64px"
                    className="transition duration-500 md:opacity-75 md:grayscale-[35%] md:group-hover:scale-105 md:group-hover:opacity-100 md:group-hover:grayscale-0"
                  />
                ) : (
                  <span className="grid h-full place-items-center text-azul">
                    <Icono nombre={s.icono} className="h-6 w-6" />
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="dato text-humo md:hidden">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="titular-medio text-[1.2rem] leading-tight md:text-[1.5rem]">{s.nombre}</h3>
                <p className="mt-1.5 line-clamp-2 text-[0.92rem] leading-relaxed text-celeste md:hidden">{s.resumen}</p>
              </span>
              <p className="hidden text-[0.97rem] leading-relaxed text-celeste md:block">{s.resumen}</p>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-linea text-celeste transition group-hover:border-rojo group-hover:bg-rojo group-hover:text-white">
                <Icono nombre="flecha" className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
