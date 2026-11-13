import { negocio, direccionCompleta, linkComoLlegar, linkTelefono, linkWhatsApp } from "@/content/negocio";
import { horariosAgrupados } from "@/lib/horarios";
import { AbiertoAhora } from "../AbiertoAhora";
import { BotonPedido } from "../BotonPedido";
import { Encabezado } from "../Encabezado";
import { Icono } from "../Icono";
import { Mapa } from "../Mapa";

/** Contacto: datos, horarios con "Abierto ahora" y mapa. */
export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="mx-auto max-w-6xl px-5 md:px-6">
      <Encabezado
        etiqueta="Contacto"
        id="contacto-titulo"
        titulo="Escribinos y coordinamos la visita"
        bajada="La forma más rápida es WhatsApp: contanos la marca de tu caldera, qué le pasa y en qué zona estás."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
        <div className="rounded-3xl border border-linea bg-marino/80 p-6 md:p-8">
          <AbiertoAhora />
          <dl className="mt-6 space-y-5">
            <div className="flex gap-4">
              <dt className="mt-0.5 text-azul">
                <Icono nombre="ubicacion" className="h-6 w-6" />
                <span className="sr-only">Dirección</span>
              </dt>
              <dd>
                <p className="font-semibold">{direccionCompleta}</p>
                <a href={linkComoLlegar} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm text-celeste underline-offset-4 hover:underline">
                  Cómo llegar <Icono nombre="externo" className="h-3.5 w-3.5" />
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5 text-azul">
                <Icono nombre="telefono" className="h-6 w-6" />
                <span className="sr-only">Teléfono y WhatsApp</span>
              </dt>
              <dd>
                <a href={linkTelefono} data-ubicacion="contacto" className="text-xl font-semibold hover:text-celeste">
                  {negocio.telefono.visible}
                </a>
                <p className="text-sm text-celeste">Teléfono y WhatsApp · consultas y urgencias</p>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5 text-azul">
                <Icono nombre="reloj" className="h-6 w-6" />
                <span className="sr-only">Horarios</span>
              </dt>
              <dd className="w-full">
                <ul className="space-y-1.5">
                  {horariosAgrupados().map((h) => (
                    <li key={h.dias} className="flex justify-between gap-4 border-b border-linea/60 pb-1.5 text-[0.95rem] last:border-0">
                      <span className="text-celeste">{h.dias}</span>
                      <span className="font-medium">{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="mt-0.5 text-azul">
                <Icono nombre="escudo" className="h-6 w-6" />
                <span className="sr-only">Técnico matriculado</span>
              </dt>
              <dd className="text-[0.95rem]">
                <p className="font-semibold">Técnico oficial matriculado</p>
                <p className="text-celeste">
                  {negocio.tecnico.nombre} · {negocio.tecnico.matricula}
                </p>
              </dd>
            </div>
          </dl>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <BotonPedido className="w-full" />
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              data-ubicacion="contacto"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 font-semibold text-[#05341a] transition hover:brightness-110"
            >
              <Icono nombre="whatsapp" className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
        <Mapa className="min-h-[22rem] lg:min-h-full" />
      </div>
    </section>
  );
}
