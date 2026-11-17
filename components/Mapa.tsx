"use client";

import { useEffect, useRef, useState } from "react";
import { negocio } from "@/content/negocio";

/** Mapa de Google que se carga recién cuando está por entrar en pantalla (no frena la carga inicial). */
export function Mapa({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const q = encodeURIComponent(`${negocio.nombre}, ${negocio.direccion.calle}, ${negocio.direccion.localidad}`);
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-3xl border border-linea bg-marino ${className}`}>
      {visible ? (
        <iframe
          title={`Mapa: ${negocio.nombre}, ${negocio.direccion.calle}, ${negocio.direccion.localidad}`}
          src={`https://www.google.com/maps?q=${q}&ll=${negocio.geo.lat},${negocio.geo.lng}&z=16&output=embed`}
          className="absolute inset-0 h-full w-full [filter:invert(.92)_hue-rotate(180deg)_saturate(.75)_brightness(.95)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-sm text-humo">Cargando mapa…</div>
      )}
    </div>
  );
}
