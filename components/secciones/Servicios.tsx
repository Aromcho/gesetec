import Link from "next/link";
import { servicios, type Servicio } from "@/content/servicios";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";
import { Aparecer } from "../Aparecer";
import { Foto } from "../Foto";

/** Grilla de servicios con enlace a cada página. */
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
  /** El primer servicio ocupa dos filas con foto (grilla de 4 columnas en escritorio). */
  destacado?: boolean;
}) {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="mx-auto max-w-6xl px-5 md:px-6">
      <Encabezado etiqueta={etiqueta} titulo={titulo} bajada={bajada} id="servicios-titulo" />
      <ul className={`mt-8 grid gap-3 sm:grid-cols-2 ${destacado ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {lista.map((s, i) => (
          <Aparecer key={s.slug} como="li" retraso={(i % 3) * 0.06} className={destacado && i === 0 ? "lg:row-span-2" : ""}>
            <Link
              href={`/servicios/${s.slug}`}
              className="group relative flex h-full gap-4 overflow-hidden rounded-3xl border border-linea bg-marino/70 p-5 transition duration-500 hover:-translate-y-0.5 hover:border-[color:var(--acento)] hover:bg-marino md:flex-col md:p-7"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--acento-suave),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-linea bg-noche text-azul transition-colors duration-500 group-hover:border-rojo/40 group-hover:text-rojo">
                <Icono nombre={s.icono} className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="etiqueta text-humo">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="titular-medio mt-1 text-xl md:text-[1.4rem]">{s.nombre}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-celeste">{s.resumen}</p>
                {destacado && i === 0 && s.fotos[0] && (
                  <span className="mt-5 hidden aspect-[4/3] overflow-hidden rounded-2xl border border-linea lg:block">
                    <Foto nombre={s.fotos[0]} alt={`${s.nombre} – trabajo de Gesetec`} sizes="22vw" />
                  </span>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Ver servicio <Icono nombre="flecha" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          </Aparecer>
        ))}
      </ul>
    </section>
  );
}
