"use client";

import { useState } from "react";
import { negocio, linkComoLlegar } from "@/content/negocio";
import { Icono } from "./Icono";

/**
 * Mapa liviano: primero un plano estático con el pin y "Cómo llegar".
 * El mapa de Google (pesado) se carga sólo si la persona toca "Ver mapa".
 */
export function Mapa({ className = "" }: { className?: string }) {
  const [abierto, setAbierto] = useState(false);
  const q = encodeURIComponent(`${negocio.nombre}, ${negocio.direccion.calle}, ${negocio.direccion.localidad}`);
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-linea bg-marino ${className}`}>
      {abierto ? (
        <iframe
          title={`Mapa: ${negocio.nombre}, ${negocio.direccion.calle}, ${negocio.direccion.localidad}`}
          src={`https://www.google.com/maps?q=${q}&ll=${negocio.geo.lat},${negocio.geo.lng}&z=16&output=embed`}
          className="absolute inset-0 h-full w-full [filter:invert(.92)_hue-rotate(180deg)_saturate(.75)_brightness(.95)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0">
          {/* Plano de calles dibujado: no carga nada de afuera */}
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 300">
            <rect width="400" height="300" fill="#0b1a38" />
            <g stroke="#1c2c52" strokeWidth="10" fill="none">
              <path d="M-20 70 L420 40" />
              <path d="M-20 170 L420 150" />
              <path d="M-20 260 L420 245" />
              <path d="M70 -20 L95 320" />
              <path d="M290 -20 L310 320" />
            </g>
            <path d="M190 -20 L205 320" stroke="#22355f" strokeWidth="18" fill="none" />
            <g stroke="#162650" strokeWidth="4" fill="none">
              <path d="M-20 120 L420 96" />
              <path d="M-20 215 L420 198" />
              <path d="M140 -20 L152 320" />
              <path d="M245 -20 L258 320" />
              <path d="M350 -20 L362 320" />
            </g>
          </svg>
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-full">
            <span className="grid h-12 w-12 place-items-center rounded-full rounded-br-none bg-rojo shadow-[0_8px_24px_-6px_rgb(227_50_42/0.8)] [transform:rotate(45deg)]">
              <span className="h-3.5 w-3.5 rounded-full bg-white" />
            </span>
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-xl border border-linea bg-noche/90 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-snug">
              <strong className="block text-white">{negocio.direccion.calle}</strong>
              <span className="text-celeste">{negocio.direccion.localidad}</span>
            </p>
            <div className="flex gap-2">
              <a
                href={linkComoLlegar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-white px-4 text-sm font-semibold text-noche transition hover:bg-celeste sm:flex-none"
              >
                <Icono nombre="ubicacion" className="h-4 w-4" />
                Cómo llegar
              </a>
              <button
                type="button"
                onClick={() => setAbierto(true)}
                className="inline-flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-[10px] border border-white/20 px-4 text-sm font-semibold transition hover:border-white/40 sm:flex-none"
              >
                Ver mapa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
