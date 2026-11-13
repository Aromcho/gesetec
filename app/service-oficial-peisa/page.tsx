import Link from "next/link";
import { metaPagina } from "@/lib/seo";
import { paginaPeisa } from "@/content/peisa";
import { peisa, marcas } from "@/content/marcas";
import { equiposPeisa } from "@/content/calderas";
import { trabajos } from "@/content/trabajos";
import { faqs } from "@/content/faqs";
import { servicios } from "@/content/servicios";
import { productoSchema, servicioSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { CabeceraPagina } from "@/components/CabeceraPagina";
import { Encabezado } from "@/components/Encabezado";
import { Foto } from "@/components/Foto";
import { Icono } from "@/components/Icono";
import { Llama } from "@/components/Llama";
import { Separador } from "@/components/Separador";
import { Aparecer } from "@/components/Aparecer";
import { Trabajos } from "@/components/secciones/Trabajos";
import { Resenas } from "@/components/secciones/Resenas";
import { Preguntas } from "@/components/secciones/Preguntas";
import { Contacto } from "@/components/secciones/Contacto";

const RUTA = "/service-oficial-peisa";

export const metadata = metaPagina({
  titulo: paginaPeisa.seoTitulo,
  descripcion: paginaPeisa.seoDescripcion,
  ruta: RUTA,
  imagen: "/og/service-oficial-peisa.jpg",
});

export default function ServicePeisa() {
  return (
    <>
      <CabeceraPagina
        migas={[{ nombre: "Service oficial PEISA", ruta: RUTA }]}
        etiqueta="Servicio técnico oficial"
        h1={paginaPeisa.h1}
        bajada={paginaPeisa.bajada}
        pedido={{ marca: "PEISA" }}
        mensajeWhatsApp="Hola Gesetec, necesito service para mi caldera PEISA."
        aparte={
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 shadow-[0_30px_80px_-30px_rgb(227_50_42/0.6)]">
              <img src={peisa.logo.src} alt="PEISA" width={peisa.logo.ancho} height={peisa.logo.alto} className="mx-auto h-auto w-4/5" />
              <p className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#9B1C24]">Service oficial</p>
              <p className="mt-1 text-center text-sm text-[#40475a]">Villa Gesell · Cariló · Pinamar · Costa Esmeralda</p>
            </div>
            <Llama className="absolute -bottom-8 -right-2 h-24 w-auto drop-shadow-2xl md:-right-6" modo="viva" />
          </div>
        }
      />

      {/* Intro + qué hacemos */}
      <section aria-labelledby="que-hacemos" className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Encabezado etiqueta="PEISA en la costa" titulo="Por qué elegir un service oficial" id="que-hacemos" />
            <div className="prosa mt-6 text-[1.05rem] leading-relaxed text-celeste">
              {paginaPeisa.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {paginaPeisa.bloques.map((b, i) => (
              <Aparecer key={b.titulo} como="li" retraso={i * 0.05}>
                <div className="h-full rounded-3xl border border-linea bg-marino/70 p-6">
                  <h3 className="titular-medio text-xl">{b.titulo}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-celeste">{b.texto}</p>
                </div>
              </Aparecer>
            ))}
          </ul>
        </div>
      </section>

      <Separador className="my-20 md:my-24" />

      {/* Cómo trabajamos */}
      <section aria-labelledby="pasos" className="mx-auto max-w-6xl px-5 md:px-6">
        <Encabezado etiqueta="Cómo pedir el service PEISA" titulo="De tu mensaje a la caldera funcionando" id="pasos" />
        <ol className="mt-8 grid gap-3 md:grid-cols-4">
          {paginaPeisa.pasos.map((p, i) => (
            <Aparecer key={p.titulo} como="li" retraso={i * 0.07}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-linea bg-marino/60 p-6">
                <span className="titular block text-5xl text-white/10">{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-celeste">{p.texto}</p>
              </div>
            </Aparecer>
          ))}
        </ol>
      </section>

      <Separador className="my-20 md:my-24" />

      {/* Modelos */}
      <section aria-labelledby="modelos" className="mx-auto max-w-6xl px-5 md:px-6">
        <Encabezado
          etiqueta="Equipos PEISA"
          titulo="Modelos que vendemos, instalamos y atendemos"
          bajada="Equipos que instalamos en trabajos reales. Consultanos por disponibilidad y por otros modelos de la marca."
          id="modelos"
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equiposPeisa.map((e) => (
            <li key={e.id} className="flex flex-col overflow-hidden rounded-3xl border border-linea bg-marino/70">
              {e.foto ? (
                <div className="aspect-[16/11] overflow-hidden">
                  <Foto nombre={e.foto} alt={`PEISA ${e.modelo} instalado por Gesetec en la costa`} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" />
                </div>
              ) : (
                <div className="grid aspect-[16/11] place-items-center bg-[radial-gradient(circle_at_50%_60%,#12234a,#0b1a38)]">
                  <img src={peisa.logo.src} alt="" width={peisa.logo.ancho} height={peisa.logo.alto} loading="lazy" className="h-8 w-auto opacity-90 [filter:brightness(0)_invert(1)]" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="etiqueta text-humo">{e.categoria}</p>
                <h3 className="titular-medio mt-1 text-xl">PEISA {e.modelo}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-celeste">{e.descripcion}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {e.datos.map((d) => (
                    <li key={d} className="rounded-full border border-linea px-2.5 py-1 text-xs text-celeste">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <JsonLd datos={equiposPeisa.map(productoSchema)} />
      </section>

      <div className="mt-24 md:mt-28">
        <Trabajos
          lista={trabajos.filter((t) => t.peisa)}
          etiqueta="Trabajos PEISA"
          titulo="Instalaciones PEISA hechas por Gesetec"
          bajada="Calderas, radiadores y toalleros PEISA en casas y apart hoteles de la costa."
          id="trabajos-peisa"
        />
      </div>

      <Separador className="my-20 md:my-24" />
      <Resenas cantidad={3} />
      <Separador className="my-20 md:my-24" />
      <Preguntas lista={faqs.filter((f) => f.peisa)} titulo="Preguntas sobre el service PEISA" />

      {/* Enlaces internos */}
      <section aria-labelledby="mas-servicios" className="mx-auto mt-20 max-w-6xl px-5 md:px-6">
        <h2 id="mas-servicios" className="etiqueta text-humo">
          Servicios para tu PEISA
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {servicios.map((s) => (
            <li key={s.slug}>
              <Link href={`/servicios/${s.slug}`} className="inline-flex h-11 items-center gap-2 rounded-full border border-linea px-4 text-sm text-celeste transition hover:border-celeste hover:text-white">
                {s.nombre} <Icono nombre="flecha" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="etiqueta mt-8 text-humo">Otras marcas con service oficial</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {marcas.map((m) => (
            <li key={m.slug}>
              <Link href={`/marcas/${m.slug}`} className="inline-flex h-11 items-center rounded-full border border-linea px-4 text-sm text-celeste transition hover:border-celeste hover:text-white">
                Service {m.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Separador className="my-20 md:my-24" />
      <Contacto />

      <JsonLd
        datos={servicioSchema({
          nombre: "Service oficial PEISA",
          seoDescripcion: paginaPeisa.seoDescripcion,
          ruta: RUTA,
          tipo: "Servicio técnico oficial de calderas PEISA",
        })}
      />
    </>
  );
}
