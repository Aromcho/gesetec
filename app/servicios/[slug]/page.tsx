import Link from "next/link";
import { notFound } from "next/navigation";
import { servicios, getServicio } from "@/content/servicios";
import { getMarca } from "@/content/marcas";
import { getFaqs } from "@/content/faqs";
import { getTrabajos } from "@/content/trabajos";
import { metaPagina } from "@/lib/seo";
import { servicioSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { CabeceraPagina } from "@/components/CabeceraPagina";
import { Encabezado } from "@/components/Encabezado";
import { Foto } from "@/components/Foto";
import { Icono } from "@/components/Icono";
import { Separador } from "@/components/Separador";
import { Trabajos } from "@/components/secciones/Trabajos";
import { Preguntas } from "@/components/secciones/Preguntas";
import { Contacto } from "@/components/secciones/Contacto";
import { Servicios } from "@/components/secciones/Servicios";
import { Resenas } from "@/components/secciones/Resenas";

export const dynamicParams = false;
export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getServicio((await params).slug);
  if (!s) return {};
  return metaPagina({ titulo: s.seoTitulo, descripcion: s.seoDescripcion, ruta: `/servicios/${s.slug}` });
}

export default async function PaginaServicio({ params }: { params: Promise<{ slug: string }> }) {
  const s = getServicio((await params).slug);
  if (!s) notFound();
  const ruta = `/servicios/${s.slug}`;
  const otros = servicios.filter((x) => x.slug !== s.slug);
  const marcasRel = s.marcas.map(getMarca).filter((m) => m !== undefined);

  return (
    <>
      <CabeceraPagina
        migas={[{ nombre: s.nombre, ruta }]}
        etiqueta="Servicio"
        h1={s.h1}
        bajada={s.bajada}
        pedido={{ servicio: s.pedido }}
        mensajeWhatsApp={`Hola Gesetec, quiero consultar por: ${s.nombre.toLowerCase()}.`}
        aparte={
          s.fotos[0] ? (
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-linea shadow-[0_30px_80px_-30px_rgb(51_113_209/0.5)]">
              <Foto nombre={s.fotos[0]} alt={`${s.nombre} en Villa Gesell – Gesetec Calderas`} sizes="(min-width: 1024px) 26rem, 90vw" prioridad />
            </div>
          ) : undefined
        }
      />

      <section aria-labelledby="detalle" className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Encabezado etiqueta="En detalle" titulo={`${s.nombre} en la costa`} id="detalle" />
            <div className="prosa mt-6 text-[1.05rem] leading-relaxed text-celeste">
              {s.parrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-linea bg-marino/70 p-6">
              <h3 className="titular-medio text-xl">Qué incluye</h3>
              <ul className="mt-4 space-y-2.5">
                {s.incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-[0.98rem]">
                    <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-azul" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-rojo/25 bg-[linear-gradient(135deg,rgb(155_28_36/0.25),rgb(11_26_56/0.6))] p-6">
              <h3 className="titular-medio text-xl">{s.senales.titulo}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.senales.items.map((i) => (
                  <li key={i} className="flex gap-3 text-[0.98rem]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rojo" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {s.fotos.length > 1 && (
        <section aria-label="Fotos de trabajos" className="mx-auto mt-16 max-w-6xl px-5 md:px-6">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {s.fotos.slice(1).map((f) => (
              <li key={f} className="aspect-square overflow-hidden rounded-3xl border border-linea">
                <Foto nombre={f} alt={`${s.nombre}: ${f.replace(/-/g, " ")}`} sizes="(min-width: 768px) 30vw, 46vw" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Marcas relacionadas: enlaces internos */}
      <section aria-labelledby="marcas-rel" className="mx-auto mt-16 max-w-6xl px-5 md:px-6">
        <h2 id="marcas-rel" className="etiqueta text-humo">
          {s.nombre} por marca
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          <li>
            <Link href="/service-oficial-peisa" className="inline-flex h-11 items-center rounded-full bg-white px-4 text-sm font-bold text-[#9B1C24]">
              PEISA · service oficial
            </Link>
          </li>
          {marcasRel.map((m) => (
            <li key={m.slug}>
              <Link href={`/marcas/${m.slug}`} className="inline-flex h-11 items-center rounded-full border border-linea px-4 text-sm text-celeste transition hover:border-celeste hover:text-white">
                {m.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {s.trabajos.length > 0 && (
        <div className="mt-24">
          <Trabajos lista={getTrabajos(s.trabajos)} titulo="Trabajos relacionados" etiqueta="Trabajos reales" id="trabajos-servicio" />
        </div>
      )}

      <Separador className="my-20 md:my-24" />
      <Preguntas lista={getFaqs(s.faqs)} />
      <Separador className="my-20 md:my-24" />
      <Resenas cantidad={3} />
      <Separador className="my-20 md:my-24" />
      <Servicios lista={otros} titulo="Otros servicios" etiqueta="También hacemos" bajada="" />
      <Separador className="my-20 md:my-24" />
      <Contacto />

      <JsonLd datos={servicioSchema({ nombre: s.nombre, seoDescripcion: s.seoDescripcion, ruta })} />
    </>
  );
}
