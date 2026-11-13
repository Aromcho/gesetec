import Link from "next/link";
import { notFound } from "next/navigation";
import { marcas, getMarca } from "@/content/marcas";
import { getServicio } from "@/content/servicios";
import { getFaqs } from "@/content/faqs";
import { getTrabajos } from "@/content/trabajos";
import { equipos, type Equipo } from "@/content/calderas";
import { metaPagina } from "@/lib/seo";
import { productoSchema, servicioSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { CabeceraPagina } from "@/components/CabeceraPagina";
import { Encabezado } from "@/components/Encabezado";
import { Icono } from "@/components/Icono";
import { Separador } from "@/components/Separador";
import { Trabajos } from "@/components/secciones/Trabajos";
import { Preguntas } from "@/components/secciones/Preguntas";
import { Contacto } from "@/components/secciones/Contacto";

export const dynamicParams = false;
export function generateStaticParams() {
  return marcas.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const m = getMarca((await params).slug);
  if (!m) return {};
  return metaPagina({ titulo: m.seoTitulo, descripcion: m.seoDescripcion, ruta: `/marcas/${m.slug}` });
}

export default async function PaginaMarca({ params }: { params: Promise<{ slug: string }> }) {
  const m = getMarca((await params).slug);
  if (!m) notFound();
  const ruta = `/marcas/${m.slug}`;
  const serviciosRel = m.serviciosRelacionados.map(getServicio).filter((s) => s !== undefined);
  const productos: Equipo[] = equipos.filter((e) => e.marca.toLowerCase() === m.nombre.toLowerCase());

  return (
    <>
      <CabeceraPagina
        migas={[{ nombre: `Service ${m.nombre}`, ruta }]}
        etiqueta={m.rol}
        h1={m.h1}
        bajada={m.bajada}
        pedido={{ marca: m.nombre }}
        mensajeWhatsApp={`Hola Gesetec, necesito service para mi equipo ${m.nombre}.`}
        aparte={
          <div className="mx-auto grid aspect-[4/3] w-full max-w-sm place-items-center rounded-[2rem] border border-linea bg-[radial-gradient(circle_at_50%_40%,#12234a,#0b1a38_70%)] p-10">
            {m.logo ? (
              <img src={m.logo.src} alt={m.nombre} width={m.logo.ancho} height={m.logo.alto} className="h-auto max-h-24 w-auto max-w-[80%]" />
            ) : (
              <span className="text-4xl font-black tracking-[0.14em] [font-stretch:120%]">{m.nombre.toUpperCase()}</span>
            )}
          </div>
        }
      />

      <section aria-labelledby="marca-detalle" className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Encabezado etiqueta={`${m.nombre} en Villa Gesell`} titulo={`Qué hacemos con tu ${m.nombre}`} id="marca-detalle" />
            <div className="prosa mt-6 text-[1.05rem] leading-relaxed text-celeste">
              {m.parrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-linea bg-marino/70 p-6">
              <h3 className="titular-medio text-xl">Servicios {m.nombre}</h3>
              <ul className="mt-4 space-y-2.5">
                {m.servicios.map((i) => (
                  <li key={i} className="flex gap-3 text-[0.98rem]">
                    <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-azul" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-linea bg-marino/40 p-6">
              <h3 className="titular-medio text-xl">Equipos</h3>
              <ul className="mt-4 space-y-2">
                {m.equipos.map((e) => (
                  <li key={e} className="text-[0.98rem] text-celeste">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="servicios-marca" className="mx-auto mt-16 max-w-6xl px-5 md:px-6">
        <h2 id="servicios-marca" className="etiqueta text-humo">
          Servicios relacionados
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviciosRel.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-linea bg-marino/60 p-4 transition hover:border-celeste/50"
              >
                <span className="font-semibold">{s.nombre}</span>
                <Icono nombre="flecha" className="h-5 w-5 shrink-0 text-celeste transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
          <li>
            <Link href="/service-oficial-peisa" className="group flex h-full items-center justify-between gap-3 rounded-2xl bg-white p-4 text-[#9B1C24]">
              <span className="font-bold">Service oficial PEISA</span>
              <Icono nombre="flecha" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        </ul>
      </section>

      {m.trabajos.length > 0 && (
        <div className="mt-24">
          <Trabajos lista={getTrabajos(m.trabajos)} titulo={`Trabajos con ${m.nombre}`} etiqueta="Trabajos reales" id="trabajos-marca" />
        </div>
      )}

      <Separador className="my-20 md:my-24" />
      <Preguntas lista={getFaqs(m.faqs)} />
      <Separador className="my-20 md:my-24" />
      <Contacto />

      <JsonLd
        datos={[
          servicioSchema({ nombre: m.h1, seoDescripcion: m.seoDescripcion, ruta, tipo: `Servicio técnico ${m.nombre}` }),
          ...productos.map(productoSchema),
        ]}
      />
    </>
  );
}
