import Link from "next/link";
import { equipos } from "@/content/calderas";
import { Foto } from "../Foto";
import { Icono } from "../Icono";
import { BotonPedido } from "../BotonPedido";
import { Aparecer } from "../Aparecer";

const PUNTOS = [
  "Service oficial Tameco",
  "Instalación y puesta en marcha, muchas veces en un solo día",
  "Base de cemento e instalación completa",
  "Logística a domicilio bonificada (según zona)",
];

/** Bloque destacado de climatización de piscinas: una de las principales líneas de trabajo de Gesetec. */
export function BloquePiscinas({ fondo = "piscina-climatizada-costa-esmeralda" }: { fondo?: string }) {
  const tameco = equipos.filter((e) => e.marca === "Tameco");
  return (
    <section aria-labelledby="piscinas-titulo" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_50%_at_30%_30%,rgb(51_113_209/0.18),transparent_70%)] md:bg-none" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hidden md:block" aria-hidden="true">
        <Foto nombre={fondo} alt="" sizes="100vw" className="opacity-75 parallax-suave" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040B1D_0%,rgb(4_11_29/0.25)_14%,rgb(4_11_29/0.55)_38%,rgb(6_24_60/0.82)_62%,#040B1D_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_40%,rgb(51_113_209/0.35),transparent_70%)]" />
      </div>
      {/* En el celular la foto va arriba, entera, como portada del bloque */}
      <div className="relative aspect-[16/10] md:hidden" aria-hidden="true">
        <Foto nombre={fondo} alt="" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040B1D_0%,transparent_22%,transparent_60%,#040B1D_100%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-2 md:px-6 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="etiqueta flex items-center gap-2 text-[#9fc3ff]">
              <Icono nombre="piscina" className="h-4 w-4" /> Climatización de piscinas
            </p>
            <h2 id="piscinas-titulo" className="titular mt-3 text-[2.3rem] xs:text-[2.6rem] md:text-6xl">
              Tu pileta a la temperatura ideal, más meses al año
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Vendemos, instalamos y hacemos el service oficial de climatizadores Tameco para piscinas y spa en Villa Gesell, Cariló, Pinamar y
              Costa Esmeralda. También climatizamos piscinas con la caldera de la casa o del hotel, con intercambiadores Bowman.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PUNTOS.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-noche/40 p-4 backdrop-blur-sm">
                <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#7fb2ff]" />
                <span className="text-[0.98rem] leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {tameco.map((e, i) => (
            <Aparecer key={e.id} como="li" retraso={i * 0.06}>
              <div className="flex h-full items-center justify-between gap-4 rounded-3xl border border-white/15 bg-noche/55 p-5 backdrop-blur-sm">
                <div>
                  <p className="etiqueta text-[#9fc3ff]">Tameco</p>
                  <p className="titular-medio mt-1 text-2xl">{e.modelo}</p>
                  <p className="mt-1 text-sm text-celeste">{e.datos.join(" · ")}</p>
                </div>
                <Icono nombre="piscina" className="h-9 w-9 shrink-0 text-azul" />
              </div>
            </Aparecer>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-[1.4fr_1fr]">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 md:aspect-auto md:min-h-[18rem]">
            <Foto nombre="piscina-climatizada-costa-esmeralda" alt="Piscina climatizada por Gesetec en Costa Esmeralda" sizes="(min-width: 768px) 55vw, 50vw" />
            <figcaption className="etiqueta absolute bottom-3 left-3 rounded-full bg-noche/70 px-2.5 py-1 text-celeste backdrop-blur">Costa Esmeralda</figcaption>
          </figure>
          <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 md:aspect-auto">
            <Foto nombre="climatizador-piscina-tameco-cp-30-costa-esmeralda" alt="Climatizador Tameco CP-30 instalado por Gesetec" sizes="(min-width: 768px) 40vw, 50vw" />
            <figcaption className="etiqueta absolute bottom-3 left-3 rounded-full bg-noche/70 px-2.5 py-1 text-celeste backdrop-blur">Tameco CP-30</figcaption>
          </figure>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BotonPedido marca="Tameco" servicio="Climatizar mi piscina">
            Cotizá tu piscina
          </BotonPedido>
          <Link
            href="/servicios/climatizacion-de-piscinas"
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 font-semibold transition hover:border-white/40"
          >
            Todo sobre climatización de piscinas
            <Icono nombre="flecha" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
