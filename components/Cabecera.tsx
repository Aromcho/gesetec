"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navegacion } from "@/lib/sitio";
import { linkTelefono, negocio } from "@/content/negocio";
import { Icono } from "./Icono";
import { abrirPedido } from "./pedido-evento";

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const [solido, setSolido] = useState(false);

  useEffect(() => {
    const f = () => setSolido(window.scrollY > 12);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solido || abierto ? "border-b border-linea/70 bg-noche/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 md:h-[4.5rem] md:px-6">
        <Link href="/" className="mr-auto shrink-0" aria-label={`${negocio.nombre} – inicio`} onClick={() => setAbierto(false)}>
          <img src="/brand/gesetec-logo.svg" alt={negocio.nombre} width={658} height={205} className="h-9 w-auto md:h-11" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacion.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-full px-3.5 py-2 text-[0.95rem] text-celeste transition hover:bg-white/5 hover:text-white">
                  {n.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={linkTelefono}
          data-ubicacion="cabecera"
          className="grid h-11 w-11 place-items-center rounded-full border border-linea text-white transition hover:border-azul hover:bg-azul/10 md:w-auto md:gap-2 md:px-4 md:[display:inline-flex] md:items-center"
          aria-label={`Llamar al ${negocio.telefono.visible}`}
        >
          <Icono nombre="telefono" className="h-[1.15rem] w-[1.15rem]" />
          <span className="hidden text-sm font-medium md:inline">{negocio.telefono.visible}</span>
        </a>
        <button
          type="button"
          onClick={() => abrirPedido()}
          className="hidden h-11 items-center rounded-full bg-rojo px-5 text-[1.1875rem] font-bold text-white transition hover:bg-rojo-hover sm:inline-flex"
        >
          Pedí tu service
        </button>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-linea lg:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((v) => !v)}
        >
          <Icono nombre={abierto ? "cerrar" : "menu"} />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
          abierto ? "visible max-h-[85dvh] opacity-100" : "pointer-events-none invisible max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Menú" className="mx-auto max-w-6xl px-4 pb-6 pt-2">
          <ul className="divide-y divide-linea/70 border-y border-linea/70">
            {navegacion.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setAbierto(false)}
                  className="titular-medio flex items-center justify-between py-4 text-2xl"
                  tabIndex={abierto ? 0 : -1}
                >
                  {n.texto}
                  <Icono nombre="flecha" className="h-5 w-5 text-humo" />
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            tabIndex={abierto ? 0 : -1}
            onClick={() => {
              setAbierto(false);
              abrirPedido();
            }}
            className="mt-5 flex h-13 w-full items-center justify-center rounded-2xl bg-rojo text-[1.1875rem] font-bold"
          >
            Pedí tu service
          </button>
        </nav>
      </div>
    </header>
  );
}
