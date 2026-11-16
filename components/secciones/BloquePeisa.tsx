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
    <section aria-labelledby="peisa-titulo" className="relative overflow-hidden bg-bordo">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgb(255_255_255/0.06),transparent_40%,rgb(0_0_0/0.22))]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-xl bg-white px-4 py-3">
              <img src={peisa.logo.src} alt="PEISA" width={peisa.logo.ancho} height={peisa.logo.alto} loading="lazy" className="h-7 w-auto md:h-9" />
            </span>
            <p className="etiqueta mt-6 text-white/75">Service Peisa en Villa Gesell y la costa</p>
            <h2 id="peisa-titulo" className="titular mt-3 max-w-[16ch] text-[2.1rem] xs:text-[2.35rem] md:text-[2.75rem]">
              Tu PEISA, en manos de su service oficial
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Es la marca con la que más trabajamos. Reparamos, mantenemos e instalamos calderas, radiadores, toalleros y termostatos PEISA
              en Villa Gesell y toda la zona: de Costa Esmeralda a Mar Azul, y hasta Madariaga.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PUNTOS.map((p) => (
              <li key={p} className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/15 bg-black/15 p-4">
                <Icono nombre="check" className="h-5 w-5 shrink-0 text-white" />
                <span className="text-[0.98rem] leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="carrusel -mx-5 mt-12 flex gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:px-0">
          {conFoto.map((e, i) => (
            <Aparecer key={e.id} como="li" retraso={i * 0.06} className="w-[64%] shrink-0 xs:w-[56%] md:w-auto">
              <figure className="group h-full overflow-hidden rounded-xl border border-white/15 bg-black/20">
                <div className="aspect-[4/5] overflow-hidden">
                  <Foto
                    nombre={e.foto!}
                    alt={`Caldera ${e.marca} ${e.modelo} instalada por Gesetec`}
                    sizes="(min-width: 768px) 24vw, 60vw"
                    className="transition duration-[1.2s] group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="dato text-white/70">{e.categoria}</p>
                  <p className="titular-medio mt-1 text-lg">PEISA {e.modelo}</p>
                </figcaption>
              </figure>
            </Aparecer>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/service-oficial-peisa"
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-bordo transition hover:bg-white/90"
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
