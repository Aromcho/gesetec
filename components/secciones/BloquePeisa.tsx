import Link from "next/link";
import { peisa } from "@/content/marcas";
import { equiposPeisa } from "@/content/calderas";
import { Foto } from "../Foto";
import { Icono } from "../Icono";
import { BotonPedido } from "../BotonPedido";
import { Aparecer } from "../Aparecer";

const PUNTOS = [
  "Service y reparación de calderas PEISA",
  "Mantenimiento anual y puesta en marcha",
  "Repuestos originales",
  "Venta e instalación con garantía oficial",
];

/** Bloque PEISA de la portada: la marca principal, con sus equipos reales. */
export function BloquePeisa() {
  const conFoto = equiposPeisa.filter((e) => e.foto && e.categoria.startsWith("Caldera"));
  return (
    <section aria-labelledby="peisa-titulo" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_0%,#9B1C24_0%,#4a0d14_38%,#0B1A38_78%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-noche to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noche to-transparent" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(90deg,#fff_0_1px,transparent_1px_64px)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-2xl bg-white px-4 py-3 shadow-xl">
              <img src={peisa.logo.src} alt="PEISA" width={peisa.logo.ancho} height={peisa.logo.alto} loading="lazy" className="h-7 w-auto md:h-9" />
            </span>
            <p className="etiqueta mt-6 text-[#ffb3ad]">Service oficial PEISA en la costa</p>
            <h2 id="peisa-titulo" className="titular mt-3 text-[2.3rem] xs:text-[2.6rem] md:text-6xl">
              Tu PEISA, en manos de su service oficial
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Es la marca con la que más trabajamos. Reparamos, mantenemos e instalamos calderas, radiadores, toalleros y termostatos PEISA
              en Villa Gesell, Cariló, Pinamar y Costa Esmeralda.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PUNTOS.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
                <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8a80]" />
                <span className="text-[0.98rem] leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="carrusel -mx-5 mt-12 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:px-0">
          {conFoto.map((e, i) => (
            <Aparecer key={e.id} como="li" retraso={i * 0.06} className="w-[64%] shrink-0 xs:w-[56%] md:w-auto">
              <figure className="group overflow-hidden rounded-3xl border border-white/15 bg-noche/50">
                <div className="aspect-[4/5] overflow-hidden">
                  <Foto
                    nombre={e.foto!}
                    alt={`Caldera ${e.marca} ${e.modelo} instalada por Gesetec`}
                    sizes="(min-width: 768px) 24vw, 60vw"
                    className="transition duration-[1.2s] group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="etiqueta text-[#ffb3ad]">{e.categoria}</p>
                  <p className="titular-medio mt-1 text-lg">PEISA {e.modelo}</p>
                </figcaption>
              </figure>
            </Aparecer>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/service-oficial-peisa"
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-semibold text-[#9B1C24] transition hover:bg-white/90"
          >
            Todo sobre el service oficial PEISA
            <Icono nombre="flecha" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <BotonPedido marca="PEISA" variante="secundario">
            Pedí tu service PEISA
          </BotonPedido>
        </div>
      </div>
    </section>
  );
}
