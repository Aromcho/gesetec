import type { Trabajo } from "@/content/trabajos";
import { infoImagen, srcImagen } from "@/lib/imagenes";
import { Foto } from "../Foto";
import { Encabezado } from "../Encabezado";
import { VisorTrabajos, type TrabajoVisor } from "./VisorTrabajos";
import { Icono } from "../Icono";

function aVisor(t: Trabajo): TrabajoVisor {
  return {
    id: t.id,
    titulo: t.titulo,
    lugar: t.lugar,
    descripcion: t.descripcion,
    equipos: t.equipos,
    instagram: t.instagram,
    fotos: t.fotos.map((f) => {
      const i = infoImagen(f.src);
      return {
        src: srcImagen(f.src, i.anchos[i.anchos.length - 1]),
        srcSet: i.anchos.map((w) => `${srcImagen(f.src, w)} ${w}w`).join(", "),
        alt: f.alt,
        ancho: i.ancho,
        alto: i.alto,
      };
    }),
  };
}

/** Galería de trabajos reales. En el celular se desliza; en escritorio es una grilla. */
export function Trabajos({
  lista,
  titulo = "Trabajos reales en la costa",
  etiqueta = "Trabajos",
  bajada = "Instalaciones hechas por nuestro equipo. Tocá cada una para ver el detalle y las fotos.",
  id = "trabajos",
}: {
  lista: Trabajo[];
  titulo?: string;
  etiqueta?: string;
  bajada?: string;
  id?: string;
}) {
  if (!lista.length) return null;
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="mx-auto max-w-6xl px-5 md:px-6">
      <Encabezado etiqueta={etiqueta} titulo={titulo} bajada={bajada} id={`${id}-titulo`} />
      <VisorTrabajos trabajos={lista.map(aVisor)}>
        <ul className="carrusel -mx-5 mt-8 flex gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-6 md:gap-5 md:overflow-visible md:px-0">
          {lista.map((t, i) => (
            <li
              key={t.id}
              className={`w-[82%] shrink-0 xs:w-[74%] md:w-auto ${
                i === 0 ? "md:col-span-4 md:row-span-2" : i < 3 ? "md:col-span-2" : "md:col-span-2"
              }`}
            >
              <button
                type="button"
                data-trabajo={t.id}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-linea bg-marino text-left md:aspect-auto md:h-full md:min-h-[17rem]"
              >
                <Foto
                  nombre={t.fotos[0].src}
                  alt={t.fotos[0].alt}
                  sizes={i === 0 ? "(min-width: 768px) 60vw, 80vw" : "(min-width: 768px) 30vw, 80vw"}
                  className="absolute inset-0 transition duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-noche via-noche/30 to-transparent" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 block p-5">
                  <span className="etiqueta inline-flex items-center gap-1.5 rounded-full bg-noche/70 px-2.5 py-1 text-celeste backdrop-blur">
                    <Icono nombre="ubicacion" className="h-3.5 w-3.5" />
                    {t.lugar}
                  </span>
                  <span className={`titular-medio mt-3 block ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>{t.titulo}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-celeste">
                    {t.fotos.length} {t.fotos.length === 1 ? "foto" : "fotos"} · ver detalle
                    <Icono nombre="flecha" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </VisorTrabajos>
    </section>
  );
}
