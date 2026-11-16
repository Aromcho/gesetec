import { resenas, resenasRelevadas, type Resena } from "@/content/resenas";
import { negocio } from "@/content/negocio";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";

function Estrellas({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5 text-[#f7b733]" aria-label={`${n} de 5 estrellas`} role="img">
      {Array.from({ length: n }).map((_, i) => (
        <Icono key={i} nombre="estrella" className="h-4 w-4" />
      ))}
    </span>
  );
}

const slug = (t: string) =>
  t
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function Tarjeta({ r }: { r: Resena }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-linea bg-marino/80 p-6">
      <div className="flex items-center justify-between gap-3">
        <Estrellas n={r.estrellas} />
        <span className="text-xs text-humo">{r.fecha}</span>
      </div>
      {r.texto.length > 240 ? (
        <div className="relative mt-4 flex-1">
          <input type="checkbox" id={`resena-${slug(r.autor)}`} className="peer sr-only" />
          <blockquote className="line-clamp-5 whitespace-pre-line text-[1.02rem] leading-relaxed text-white/90 peer-checked:line-clamp-none">“{r.texto}”</blockquote>
          <label
            htmlFor={`resena-${slug(r.autor)}`}
            className="mt-2 inline-block cursor-pointer text-sm font-semibold text-celeste underline-offset-4 hover:underline peer-checked:hidden peer-focus-visible:outline"
          >
            Leer más
          </label>
        </div>
      ) : (
        <blockquote className="mt-4 flex-1 whitespace-pre-line text-[1.02rem] leading-relaxed text-white/90">“{r.texto}”</blockquote>
      )}
      <figcaption className="mt-5 flex items-center gap-3 border-t border-linea pt-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-marino-2 text-sm font-bold text-celeste ring-1 ring-linea">
          {r.autor.trim().charAt(0).toUpperCase()}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold">{r.autor}</span>
          <span className="block text-xs text-humo">Reseña en Google</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Reseñas reales de Google (texto, nombre y fecha tal cual). */
export function Resenas({ cantidad = 6 }: { cantidad?: number }) {
  const orden = [...resenas.filter((r) => r.destacada), ...resenas.filter((r) => !r.destacada)];
  const primeras = orden.slice(0, cantidad);
  const resto = orden.slice(cantidad);
  return (
    <section id="resenas" aria-labelledby="resenas-titulo" className="mx-auto max-w-6xl px-5 md:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Encabezado
          etiqueta="Lo que dicen en Google"
          id="resenas-titulo"
          titulo={
            <>
              {negocio.resenasGoogle.promedio} <span className="text-[#f7b733]">★</span> en {negocio.resenasGoogle.cantidad} reseñas
            </>
          }
          bajada="Todas de 5 estrellas. Estas son algunas, copiadas tal cual de nuestra ficha de Google."
        />
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href={negocio.googleResenas}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold transition hover:border-white/40"
          >
            Ver todas en Google <Icono nombre="externo" className="h-4 w-4" />
          </a>
          <a
            href={negocio.googleEscribirResena}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm text-celeste underline-offset-4 hover:underline"
          >
            Dejá tu reseña
          </a>
        </div>
      </div>

      <ul className="carrusel -mx-5 mt-8 flex gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {primeras.map((r) => (
          <li key={r.autor} className="w-[84%] shrink-0 xs:w-[78%] md:w-auto">
            <Tarjeta r={r} />
          </li>
        ))}
      </ul>

      {resto.length > 0 && (
        <details className="group mt-4">
          <summary className="mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-full border border-linea px-5 py-3 text-sm text-celeste transition hover:text-white">
            <span className="group-open:hidden">Ver más reseñas</span>
            <span className="hidden group-open:inline">Ver menos</span>
          </summary>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resto.map((r) => (
              <li key={r.autor}>
                <Tarjeta r={r} />
              </li>
            ))}
          </ul>
        </details>
      )}
      <p className="mt-6 text-center text-xs text-humo">Reseñas de Google relevadas el {resenasRelevadas}. Fechas relativas a ese día.</p>
    </section>
  );
}
