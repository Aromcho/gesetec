import type { Faq } from "@/content/faqs";
import { linkWhatsApp } from "@/content/negocio";
import { faqSchema } from "@/lib/jsonld";
import { JsonLd } from "../JsonLd";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";

/** Preguntas frecuentes en acordeón + FAQPage JSON-LD. */
export function Preguntas({ lista, titulo = "Preguntas frecuentes", etiqueta = "Dudas comunes" }: { lista: Faq[]; titulo?: string; etiqueta?: string }) {
  if (!lista.length) return null;
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className="mx-auto grid max-w-6xl gap-8 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Encabezado etiqueta={etiqueta} titulo={titulo} id="preguntas-titulo" />
        <div className="mt-8 hidden rounded-2xl border border-linea bg-marino p-6 lg:block">
          <p className="font-semibold">¿No encontrás tu respuesta?</p>
          <p className="mt-1 text-sm leading-relaxed text-celeste">Contanos la marca de tu caldera y qué le pasa. Te respondemos por WhatsApp.</p>
          <a
            href={linkWhatsApp("Hola Gesetec, tengo una consulta sobre mi caldera.")}
            target="_blank"
            rel="noopener noreferrer"
            data-ubicacion="preguntas"
            className="mt-5 inline-flex h-12 items-center gap-2 rounded-xl bg-whatsapp px-5 font-semibold text-[#05341a] transition hover:brightness-110"
          >
            <Icono nombre="whatsapp" className="h-5 w-5" /> Preguntar por WhatsApp
          </a>
        </div>
      </div>
      <div className="divide-y divide-linea border-y border-linea">
        {lista.map((f) => (
          <details key={f.id} className="group">
            <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 text-left text-[1.06rem] font-semibold leading-snug transition hover:text-celeste md:text-lg">
              <h3>{f.pregunta}</h3>
              <span className="faq-icono mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-linea transition duration-300">
                <Icono nombre="mas" className="h-4 w-4" />
              </span>
            </summary>
            <p className="pb-6 pr-10 leading-relaxed text-celeste">{f.respuesta}</p>
          </details>
        ))}
      </div>
      <JsonLd datos={faqSchema(lista)} />
    </section>
  );
}
