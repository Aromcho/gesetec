import Link from "next/link";
import { marcas, peisa } from "@/content/marcas";
import { Aparecer } from "../Aparecer";

/** Tira de marcas: PEISA primero y más grande (logo oficial en color), el resto en blanco. */
export function TiraMarcas() {
  return (
    <section aria-labelledby="marcas-titulo" className="mx-auto max-w-6xl px-5 md:px-6">
      <h2 id="marcas-titulo" className="etiqueta text-center text-humo">
        Servicio técnico oficial de las marcas que tenés en casa
      </h2>
      <div className="mt-6 grid gap-3 md:grid-cols-[1.25fr_2fr] md:items-stretch">
        <Aparecer>
          <Link
            href="/service-oficial-peisa"
            className="group relative flex h-full min-h-36 flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-white px-6 py-7 shadow-[0_20px_60px_-25px_rgb(227_50_42/0.55)] transition duration-500 hover:-translate-y-0.5"
          >
            <img
              src={peisa.logo.src}
              alt="PEISA – service oficial"
              width={peisa.logo.ancho}
              height={peisa.logo.alto}
              className="h-auto w-[78%] max-w-[300px]"
            />
            <span className="etiqueta flex items-center gap-1.5 text-[#9B1C24]">
              Service oficial · ver más
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </Aparecer>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {marcas.map((m, i) => (
            <Aparecer key={m.slug} como="li" retraso={0.04 * i} className="odd:last:col-span-2">
              <Link
                href={`/marcas/${m.slug}`}
                className="group flex h-full min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-linea bg-marino/70 px-4 py-4 transition duration-300 hover:border-celeste/40 hover:bg-marino"
              >
                {m.logo ? (
                  <img
                    src={m.logo.src}
                    alt={m.nombre}
                    width={m.logo.ancho}
                    height={m.logo.alto}
                    loading="lazy"
                    className="h-auto max-h-10 w-auto max-w-[78%] opacity-85 transition group-hover:opacity-100"
                  />
                ) : (
                  <span className="text-[1.35rem] font-black tracking-[0.12em] text-white/85 [font-stretch:115%] group-hover:text-white">
                    {m.nombre.toUpperCase()}
                  </span>
                )}
                <span className="text-center text-[0.7rem] leading-tight text-humo">{m.rol}</span>
              </Link>
            </Aparecer>
          ))}
        </ul>
      </div>
    </section>
  );
}
