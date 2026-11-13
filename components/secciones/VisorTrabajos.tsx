"use client";

import { useEffect, useRef, useState } from "react";
import { Icono } from "../Icono";

export interface FotoVisor {
  src: string;
  srcSet: string;
  alt: string;
  ancho: number;
  alto: number;
}
export interface TrabajoVisor {
  id: string;
  titulo: string;
  lugar: string;
  descripcion: string;
  equipos: string[];
  instagram: string;
  fotos: FotoVisor[];
}

/** Abre un trabajo en grande (todas sus fotos + detalle). Los botones con data-trabajo lo disparan. */
export function VisorTrabajos({ trabajos, children }: { trabajos: TrabajoVisor[]; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [actual, setActual] = useState<TrabajoVisor | null>(null);
  const [foto, setFoto] = useState(0);

  useEffect(() => {
    if (actual) ref.current?.showModal();
  }, [actual]);

  return (
    <div
      onClick={(e) => {
        const b = (e.target as HTMLElement).closest<HTMLElement>("[data-trabajo]");
        if (!b) return;
        const t = trabajos.find((x) => x.id === b.dataset.trabajo);
        if (t) {
          setFoto(0);
          setActual(t);
        }
      }}
    >
      {children}
      <dialog
        ref={ref}
        className="hoja m-0 mt-auto max-h-[96dvh] w-full max-w-none overflow-y-auto rounded-t-3xl border border-linea bg-marino p-0 text-white md:m-auto md:max-w-4xl md:rounded-3xl"
        aria-label={actual?.titulo ?? "Trabajo"}
        onClose={() => setActual(null)}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        {actual && (
          <div className="md:grid md:grid-cols-[1.25fr_1fr]">
            <div className="relative bg-noche">
              <img
                key={actual.fotos[foto].src}
                src={actual.fotos[foto].src}
                srcSet={actual.fotos[foto].srcSet}
                sizes="(min-width: 768px) 55vw, 100vw"
                alt={actual.fotos[foto].alt}
                width={actual.fotos[foto].ancho}
                height={actual.fotos[foto].alto}
                className="max-h-[58dvh] w-full object-contain md:h-full md:max-h-[80dvh]"
              />
              {actual.fotos.length > 1 && (
                <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                  {actual.fotos.map((f, i) => (
                    <button
                      key={f.src}
                      type="button"
                      onClick={() => setFoto(i)}
                      aria-label={`Ver foto ${i + 1} de ${actual.fotos.length}`}
                      aria-current={i === foto}
                      className={`h-2.5 rounded-full transition-all ${i === foto ? "w-7 bg-white" : "w-2.5 bg-white/40"}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="etiqueta text-celeste">{actual.lugar}</p>
                <button
                  type="button"
                  onClick={() => ref.current?.close()}
                  className="-mr-2 -mt-2 grid h-11 w-11 place-items-center rounded-full text-celeste hover:bg-white/5"
                  aria-label="Cerrar"
                >
                  <Icono nombre="cerrar" />
                </button>
              </div>
              <h3 className="titular-medio mt-2 text-2xl">{actual.titulo}</h3>
              <p className="mt-4 leading-relaxed text-celeste">{actual.descripcion}</p>
              <ul className="mt-5 space-y-2">
                {actual.equipos.map((e) => (
                  <li key={e} className="flex gap-2.5 text-[0.95rem]">
                    <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-azul" />
                    {e}
                  </li>
                ))}
              </ul>
              <a
                href={actual.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-linea px-4 text-sm hover:border-celeste"
              >
                <Icono nombre="instagram" className="h-5 w-5" /> Ver el video en Instagram
              </a>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
