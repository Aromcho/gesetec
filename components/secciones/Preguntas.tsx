import type { Faq } from "@/content/faqs";
import { faqSchema } from "@/lib/jsonld";
import { JsonLd } from "../JsonLd";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";

/** Preguntas frecuentes en acordeón + FAQPage JSON-LD. */
export function Preguntas({ lista, titulo = "Preguntas frecuentes", etiqueta = "Dudas comunes" }: { lista: Faq[]; titulo?: string; etiqueta?: string }) {
  if (!lista.length) return null;
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className="mx-auto max-w-4xl px-5 md:px-6">
      <Encabezado etiqueta={etiqueta} titulo={titulo} id="preguntas-titulo" />
      <div className="mt-8 divide-y divide-linea border-y border-linea">
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
