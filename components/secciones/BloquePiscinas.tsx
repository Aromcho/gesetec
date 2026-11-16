import Link from "next/link";
import { equipos } from "@/content/calderas";
import { Foto } from "../Foto";
import { Icono } from "../Icono";
import { BotonPedido } from "../BotonPedido";

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
        <Foto nombre={fondo} alt="" sizes="100vw" className="opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040B1D_0%,rgb(4_11_29/0.25)_14%,rgb(4_11_29/0.55)_38%,rgb(6_24_60/0.82)_62%,#040B1D_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_40%,rgb(51_113_209/0.35),transparent_70%)]" />
      </div>
      {/* En el celular la foto va arriba, entera, como portada del bloque */}
      <div className="relative aspect-[16/10] md:hidden" aria-hidden="true">
        <Foto nombre={fondo} alt="" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040B1D_0%,transparent_22%,transparent_60%,#040B1D_100%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-2 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="etiqueta flex items-center gap-2 text-celeste">
              <Icono nombre="piscina" className="h-4 w-4" /> Climatización de piscinas
            </p>
            <h2 id="piscinas-titulo" className="titular mt-3 max-w-[18ch] text-[2.1rem] xs:text-[2.35rem] md:text-[2.75rem]">
              Tu pileta a la temperatura ideal, más meses al año
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Vendemos, instalamos y hacemos el service oficial de climatizadores Tameco para piscinas y spa en Villa Gesell, Cariló, Pinamar y
              Costa Esmeralda. También climatizamos piscinas con la caldera de la casa o del hotel, con intercambiadores Bowman.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PUNTOS.map((p) => (
              <li key={p} className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-white/15 bg-noche/50 p-4 backdrop-blur-sm">
                <Icono nombre="check" className="h-5 w-5 shrink-0 text-[#7fb2ff]" />
                <span className="text-[0.98rem] leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparativa Tameco */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/15 bg-noche/70 backdrop-blur-sm">
          <table className="w-full text-left">
            <caption className="sr-only">Climatizadores Tameco: potencia y tamaño de pileta</caption>
            <thead>
              <tr className="dato border-b border-white/10 text-humo">
                <th scope="col" className="px-4 py-3 font-semibold md:px-6">Modelo</th>
                <th scope="col" className="px-4 py-3 font-semibold md:px-6">Potencia</th>
                <th scope="col" className="px-4 py-3 font-semibold md:px-6">Pileta hasta</th>
              </tr>
            </thead>
            <tbody>
              {tameco.map((e) => {
                const litros = e.datos.find((d) => d.includes("litros"))?.match(/hasta ([\d.]+) litros/)?.[1];
                return (
                  <tr key={e.id} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="px-4 py-3.5 md:px-6">
                      <span className="dato block text-[#9fc3ff]">Tameco</span>
                      <span className="titular-medio whitespace-nowrap text-lg md:text-xl">{e.modelo}</span>
                    </th>
                    <td className="dato px-4 py-3.5 text-[0.8rem] text-white md:px-6 md:text-sm">{e.datos[0]}</td>
                    <td className="dato px-4 py-3.5 text-[0.8rem] text-white md:px-6 md:text-sm">{litros ? `${litros} L` : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-col gap-2 border-t border-white/10 px-4 py-3 text-xs text-humo sm:flex-row sm:items-center sm:justify-between md:px-6">
            <span>Capacidades de pileta según Tameco.</span>
            <a href="#equipos" className="inline-flex items-center gap-1 font-semibold text-white underline-offset-4 hover:underline">
              Ver precios <Icono nombre="flecha" className="h-3.5 w-3.5 rotate-90" />
            </a>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-[1.4fr_1fr]">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 md:aspect-auto md:min-h-[18rem]">
            <Foto nombre="piscina-climatizada-costa-esmeralda" alt="Piscina climatizada por Gesetec en Costa Esmeralda" sizes="(min-width: 768px) 55vw, 50vw" />
            <figcaption className="etiqueta absolute bottom-3 left-3 rounded-full bg-noche/70 px-2.5 py-1 text-celeste backdrop-blur">Costa Esmeralda</figcaption>
          </figure>
          <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 md:aspect-auto">
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
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold transition hover:border-white/40"
          >
            Todo sobre climatización de piscinas
            <Icono nombre="flecha" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
