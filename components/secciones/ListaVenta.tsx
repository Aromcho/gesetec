"use client";

import { useState } from "react";
import { formatoPrecio, lineasVenta, type LineaVenta, type ProductoVenta } from "@/content/venta";
import { linkWhatsApp } from "@/content/negocio";
import { Foto } from "../Foto";
import { Icono } from "../Icono";

type Filtro = "Todos" | LineaVenta;

export function ListaVenta({ productos }: { productos: ProductoVenta[] }) {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const filtros: Filtro[] = ["Todos", ...lineasVenta];
  const visibles = filtro === "Todos" ? productos : productos.filter((p) => p.linea === filtro);
  return (
    <div className="mt-8">
      <div role="group" aria-label="Filtrar equipos" className="flex gap-2">
        {filtros.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filtro === f}
            onClick={() => setFiltro(f)}
            className={`h-10 rounded-full border px-4 text-sm font-semibold transition ${
              filtro === f ? "border-white bg-white text-noche" : "border-linea text-celeste hover:border-celeste/50 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-5 divide-y divide-linea overflow-hidden rounded-2xl border border-linea bg-marino/60">
        {visibles.map((p) => (
          <li key={p.id} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 p-3 pr-4 md:grid-cols-[5.5rem_minmax(0,1fr)_auto_auto] md:gap-6 md:p-4 md:pr-5">
            <span className="aspect-square overflow-hidden rounded-xl border border-linea bg-noche">
              <Foto nombre={p.foto} alt={`${p.marca} ${p.modelo}`} sizes="88px" />
            </span>
            <div className="min-w-0">
              <p className="dato text-humo">
                {p.marca} · {p.categoria}
              </p>
              <h3 className="titular-medio mt-1 text-[1.15rem] leading-tight md:text-[1.35rem]">
                {p.marca} {p.modelo}
              </h3>
              <p className="dato mt-1.5 hidden text-celeste sm:block">{p.datos.join(" · ")}</p>
              <p className="mt-1.5 md:hidden">
                <span className="text-[1.05rem] font-bold tabular-nums">{formatoPrecio(p.precio)}</span>{" "}
                <span className="text-xs text-humo">{p.ivaIncluido ? "IVA incl." : "+ IVA"}</span>
              </p>
            </div>
            <p className="hidden text-right md:block">
              <span className="block text-[1.35rem] font-bold tabular-nums [font-stretch:110%]">{formatoPrecio(p.precio)}</span>
              <span className="text-xs text-humo">{p.ivaIncluido ? "IVA incluido" : "+ IVA"}</span>
            </p>
            <a
              href={linkWhatsApp(`Hola Gesetec, quiero consultar por ${p.marca} ${p.modelo} (${formatoPrecio(p.precio)}${p.ivaIncluido ? "" : " + IVA"}).`)}
              target="_blank"
              rel="noopener noreferrer"
              data-ubicacion="equipos_venta"
              aria-label={`Consultar por ${p.marca} ${p.modelo} por WhatsApp`}
              className="grid h-11 w-11 place-items-center rounded-full bg-rojo text-white transition hover:bg-rojo-hover"
            >
              <Icono nombre="mas" className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-humo">Precios de lista sujetos a cambios sin aviso. La instalación y el envío se cotizan aparte según la zona.</p>
    </div>
  );
}
