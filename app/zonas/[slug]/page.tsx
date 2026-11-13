import Link from "next/link";
import { notFound } from "next/navigation";
import { paginasZona, getPaginaZona, zonasDePagina, zonas } from "@/content/zonas";
import { negocio, direccionCompleta } from "@/content/negocio";
import { getTrabajos } from "@/content/trabajos";
import { resenas } from "@/content/resenas";
import { metaPagina } from "@/lib/seo";
import { horariosAgrupados } from "@/lib/horarios";
import { servicioSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { CabeceraPagina } from "@/components/CabeceraPagina";
import { Encabezado } from "@/components/Encabezado";
import { Foto } from "@/components/Foto";
import { Icono } from "@/components/Icono";
import { Separador } from "@/components/Separador";
import { Servicios } from "@/components/secciones/Servicios";
import { Trabajos } from "@/components/secciones/Trabajos";
import { Preguntas } from "@/components/secciones/Preguntas";
import { Contacto } from "@/components/secciones/Contacto";

export const dynamicParams = false;
export function generateStaticParams() {
  return paginasZona.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPaginaZona((await params).slug);
  if (!p) return {};
  return metaPagina({ titulo: p.seoTitulo, descripcion: p.seoDescripcion, ruta: `/zonas/${p.slug}` });
}

/** Completa {direccion} y {horarios} con los datos de content/negocio.ts. */
const completar = (t: string) =>
  t
    .replace("{direccion}", direccionCompleta)
    .replace(
      "{horarios}",
      horariosAgrupados()
        .filter((h) => h.horas !== "Cerrado")
        .map((h) => `${h.dias.toLowerCase()} de ${h.horas}`)
        .join(" y "),
    );

export default async function PaginaZona({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPaginaZona((await params).slug);
  if (!p) notFound();
  const ruta = `/zonas/${p.slug}`;
  const incluidas = zonasDePagina(p.slug);
  const resena = p.resena ? resenas.find((r) => r.autor === p.resena) : undefined;
  const otras = paginasZona.filter((x) => x.slug !== p.slug);
  const faqs = p.faqs.map((f, i) => ({ id: `${p.slug}-${i}`, pregunta: f.pregunta, respuesta: completar(f.respuesta) }));

  return (
    <>
      <CabeceraPagina
        migas={[{ nombre: p.nombre, ruta }]}
        etiqueta={incluidas.some((z) => z.tipo === "barrio privado") ? "Zona de atención · barrios privados" : "Zona de atención"}
        h1={p.h1}
        bajada={p.bajada}
        pedido={{ zona: incluidas[0]?.nombre }}
        mensajeWhatsApp={`Hola Gesetec, necesito service para mi caldera en ${incluidas[0]?.nombre ?? p.nombre}.`}
        aparte={
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-linea shadow-[0_30px_80px_-30px_rgb(51_113_209/0.5)]">
            <Foto nombre={p.foto} alt={`Calderas y calefacción en ${p.nombre}`} sizes="(min-width: 1024px) 26rem, 90vw" prioridad />
            <span className="etiqueta absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-noche/75 px-3 py-1.5 text-celeste backdrop-blur">
              <Icono nombre="ubicacion" className="h-3.5 w-3.5" /> {p.nombre}
            </span>
          </div>
        }
      />

      <section aria-labelledby="zona-detalle" className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Encabezado etiqueta={`Gesetec en ${p.nombre}`} titulo={`Calefacción y piscinas en ${p.nombre}`} id="zona-detalle" />
            <div className="prosa mt-6 text-[1.05rem] leading-relaxed text-celeste">
              {p.parrafos.map((t) => (
                <p key={t.slice(0, 24)}>{completar(t)}</p>
              ))}
            </div>
            {p.secciones && (
              <div className="mt-8 grid gap-3">
                {p.secciones.map((s) => (
                  <div key={s.titulo} className="rounded-3xl border border-linea bg-marino/60 p-5">
                    <h3 className="titular-medio text-xl">{s.titulo}</h3>
                    <p className="mt-2 text-[0.97rem] leading-relaxed text-celeste">{s.texto}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-linea bg-marino/70 p-6">
              <h3 className="titular-medio text-xl">Lo que más nos piden en {p.nombre}</h3>
              <ul className="mt-4 space-y-2.5">
                {p.destacados.map((d) => (
                  <li key={d} className="flex gap-3 text-[0.98rem]">
                    <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-azul" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-linea bg-marino/40 p-6 text-[0.95rem] text-celeste">
              <p className="font-semibold text-white">Salimos desde Villa Gesell</p>
              <p className="mt-1">
                {direccionCompleta} · Tel. y WhatsApp {negocio.telefono.visible}
              </p>
              {incluidas.length > 1 && (
                <p className="mt-3">
                  Esta página incluye: <strong className="text-white">{incluidas.map((z) => z.nombre).join(", ")}</strong>.
                </p>
              )}
            </div>
            {resena && (
              <figure className="rounded-3xl border border-linea bg-marino/70 p-6">
                <div className="flex gap-0.5 text-[#f7b733]" aria-label={`${resena.estrellas} de 5 estrellas`} role="img">
                  {Array.from({ length: resena.estrellas }).map((_, i) => (
                    <Icono key={i} nombre="estrella" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-3 whitespace-pre-line leading-relaxed">“{resena.texto}”</blockquote>
                <figcaption className="mt-3 text-sm text-humo">
                  {resena.autor} · Reseña en Google · {resena.fecha}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      {p.trabajos.length > 0 && (
        <div className="mt-24">
          <Trabajos lista={getTrabajos(p.trabajos)} titulo={`Trabajos en ${p.nombre}`} etiqueta="Trabajos reales" id="trabajos-zona" />
        </div>
      )}

      <Separador className="my-20 md:my-24" />
      <Servicios titulo={`Servicios en ${p.nombre}`} etiqueta="Qué hacemos" bajada="" />
      <Separador className="my-20 md:my-24" />
      <Preguntas lista={faqs} titulo={`Preguntas sobre ${p.nombre}`} />

      <section aria-labelledby="otras-zonas" className="mx-auto mt-20 max-w-6xl px-5 md:px-6">
        <h2 id="otras-zonas" className="etiqueta text-humo">
          También trabajamos en
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {otras.map((o) => (
            <li key={o.slug}>
              <Link href={`/zonas/${o.slug}`} className="inline-flex h-11 items-center rounded-full border border-linea px-4 text-sm text-celeste transition hover:border-celeste hover:text-white">
                {o.nombre}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/service-oficial-peisa" className="inline-flex h-11 items-center rounded-full bg-white px-4 text-sm font-bold text-[#9B1C24]">
              Service oficial PEISA
            </Link>
          </li>
        </ul>
      </section>

      <Separador className="my-20 md:my-24" />
      <Contacto />

      <JsonLd
        datos={servicioSchema({
          nombre: `Service de calderas en ${p.nombre}`,
          seoDescripcion: p.seoDescripcion,
          ruta,
          tipo: "Service, reparación e instalación de calderas",
          zonas: incluidas.map((z) => z.nombre),
        })}
      />
    </>
  );
}
