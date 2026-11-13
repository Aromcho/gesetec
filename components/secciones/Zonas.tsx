import { negocio } from "@/content/negocio";
import { Encabezado } from "../Encabezado";
import { Llama } from "../Llama";
import { Aparecer } from "../Aparecer";
import { Foto } from "../Foto";

// De norte a sur sobre la costa.
const RECORRIDO = ["costa-esmeralda", "pinamar", "carilo", "villa-gesell"];

/** Zonas de atención sobre una "ruta" de la costa, de norte a sur. */
export function Zonas() {
  const zonas = RECORRIDO.map((s) => negocio.zonas.find((z) => z.slug === s)!).filter(Boolean);
  return (
    <section id="zonas" aria-labelledby="zonas-titulo" className="relative isolate">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <Foto nombre="casa-de-veraneo-entre-pinos-costa-atlantica" alt="" sizes="100vw" className="opacity-25 [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-noche via-noche/80 to-noche/40" />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-6">
      <Encabezado
        etiqueta="Zonas de atención"
        id="zonas-titulo"
        titulo={
          <>
            De Costa Esmeralda <span className="text-humo">a</span> Villa Gesell
          </>
        }
        bajada={`Calderas y calefacción en ${negocio.zonas.map((z) => z.nombre).join(", ")}. También llegamos a ${negocio.zonasExtra.join(", ")}.`}
      />
      <ol className="relative mt-10 grid gap-0 md:grid-cols-4 md:gap-5">
        {/* Línea de la costa */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[11px] top-6 w-px bg-gradient-to-b from-azul via-celeste/40 to-rojo md:bottom-auto md:left-6 md:right-6 md:top-[11px] md:h-px md:w-auto md:bg-gradient-to-r"
        />
        {zonas.map((z, i) => {
          const base = z.slug === "villa-gesell";
          return (
            <Aparecer key={z.slug} como="li" retraso={i * 0.08} className="relative pb-8 pl-10 md:pb-0 md:pl-0 md:pt-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border md:top-0 ${
                  base ? "border-rojo bg-noche" : "border-celeste/50 bg-noche"
                }`}
              >
                {base ? <Llama className="h-4 w-auto" circulo={false} modo="viva" /> : <span className="h-2 w-2 rounded-full bg-celeste" />}
              </span>
              <h3 className="titular-medio text-[1.6rem] md:text-2xl">{z.nombre}</h3>
              {base && <p className="etiqueta mt-1 text-[#ff7a70]">Nuestra base</p>}
              <p className="mt-2 text-[0.95rem] leading-relaxed text-celeste">{z.texto}</p>
            </Aparecer>
          );
        })}
      </ol>
      </div>
    </section>
  );
}
