"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { negocio, linkWhatsApp } from "@/content/negocio";
import { evento } from "@/lib/analytics";
import { Icono } from "./Icono";
import { Llama } from "./Llama";
import { EVENTO_PEDIDO, type DetallePedido } from "./pedido-evento";

/**
 * "Pedí tu service" en 3 pasos: marca → qué necesitás → zona y nombre.
 * Arma el mensaje y abre WhatsApp. No guarda nada (sitio estático, sin backend).
 * Se abre desde cualquier botón con abrirPedido({ marca, servicio }) (components/pedido-evento.ts).
 * Lo carga components/PedidoCarga.tsx la primera vez que se necesita.
 */


const MARCAS = ["PEISA", "Baxi", "Tameco", "Ferroli", "Euterma", "Rinnai", "Bowman", "Rowa", "Otra / no sé"];
const PROBLEMAS = [
  "No enciende / no calienta",
  "Pierde presión",
  "Muestra un código de error",
  "Gotea / pierde agua",
  "No sale agua caliente",
  "Hace ruido",
];
const SERVICIOS = [
  "Service / mantenimiento anual",
  "Puesta en marcha de temporada",
  "Instalar una caldera nueva",
  "Climatizar mi piscina",
  "Calefacción central / radiadores",
  "Bomba presurizadora",
];
const ZONAS = [...negocio.zonas.map((z) => z.nombre), "Otra zona"];
const PASOS = ["Equipo", "Qué necesitás", "Tus datos"];

export function PedidoService({ inicial }: { inicial?: DetallePedido }) {
  const ref = useRef<HTMLDialogElement>(null);
  const reducir = useReducedMotion();
  const [paso, setPaso] = useState(0);
  const [dir, setDir] = useState(1);
  const [marca, setMarca] = useState("");
  const [servicio, setServicio] = useState("");
  const [codigo, setCodigo] = useState("");
  const [zona, setZona] = useState("");
  const [nombre, setNombre] = useState("");
  const [detalle, setDetalle] = useState("");

  const ir = useCallback((p: number) => {
    setDir(p > paso ? 1 : -1);
    setPaso(p);
  }, [paso]);

  useEffect(() => {
    const abrirCon = (d: DetallePedido) => {
      if (d.marca) setMarca(d.marca);
      if (d.servicio) setServicio(d.servicio);
      setDir(1);
      setPaso(d.marca ? 1 : 0);
      if (!ref.current?.open) ref.current?.showModal();
    };
    const abrir = (e: Event) => abrirCon((e as CustomEvent<DetallePedido>).detail ?? {});
    // Primera apertura: el evento llegó antes de que se cargara este componente.
    if (inicial) abrirCon(inicial);
    window.addEventListener(EVENTO_PEDIDO, abrir);
    return () => window.removeEventListener(EVENTO_PEDIDO, abrir);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cerrar = () => ref.current?.close();

  const mensaje = useMemo(() => {
    const lineas = [
      `Hola Gesetec${nombre.trim() ? `, soy ${nombre.trim()}` : ""}. Quiero pedir un service.`,
      `• Equipo: ${marca || "a confirmar"}`,
      `• Necesito: ${servicio || "a confirmar"}${servicio === "Muestra un código de error" && codigo.trim() ? ` (código ${codigo.trim()})` : ""}`,
      `• Zona: ${zona || "a confirmar"}`,
    ];
    if (detalle.trim()) lineas.push(`• Detalle: ${detalle.trim()}`);
    return lineas.join("\n");
  }, [nombre, marca, servicio, codigo, zona, detalle]);

  const listo = Boolean(marca && servicio && zona && nombre.trim());
  const progreso = (paso + (listo ? 1 : 0.5)) / PASOS.length;

  const enviar = () => {
    evento("pedido_service", { marca, servicio, zona });
  };

  const variantes = {
    entra: (d: number) => ({ x: reducir ? 0 : d * 40, opacity: 0 }),
    centro: { x: 0, opacity: 1 },
    sale: (d: number) => ({ x: reducir ? 0 : d * -40, opacity: 0 }),
  };

  const chip = (activo: boolean) =>
    `min-h-12 rounded-xl border px-3 py-2.5 text-left text-[0.95rem] leading-tight transition-all duration-200 active:scale-[0.98] ${
      activo
        ? "border-rojo bg-rojo/15 text-white shadow-[0_0_0_1px_var(--color-rojo)]"
        : "border-linea bg-marino-2/60 text-celeste hover:border-celeste/50 hover:text-white"
    }`;

  return (
    <dialog
      ref={ref}
      className="hoja m-0 mt-auto max-h-[94dvh] w-full max-w-none overflow-hidden rounded-t-3xl border border-linea bg-marino p-0 text-white sm:m-auto sm:max-w-lg sm:rounded-3xl"
      aria-labelledby="pedido-titulo"
      onClick={(e) => {
        if (e.target === ref.current) cerrar();
      }}
    >
      <LazyMotion features={domAnimation} strict>
        <div className="flex max-h-[94dvh] flex-col">
          {/* Cabecera */}
          <div className="relative border-b border-linea px-5 pb-4 pt-5">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-linea sm:hidden" aria-hidden="true" />
            <div className="flex items-start gap-3">
              <Llama className="h-10 w-auto shrink-0" circulo={false} modo="viva" />
              <div className="min-w-0 flex-1">
                <p className="etiqueta text-celeste">Paso {paso + 1} de 3 · {PASOS[paso]}</p>
                <h2 id="pedido-titulo" className="titular-medio mt-1 text-2xl">
                  Pedí tu service
                </h2>
              </div>
              <button
                type="button"
                onClick={cerrar}
                className="-mr-1 -mt-1 grid h-11 w-11 place-items-center rounded-full text-celeste hover:bg-white/5 hover:text-white"
                aria-label="Cerrar"
              >
                <Icono nombre="cerrar" />
              </button>
            </div>
            {/* Progreso frío → calor */}
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-noche" aria-hidden="true">
              <div
                className="h-full rounded-full bg-gradient-to-r from-azul via-[#8a4fa0] to-rojo transition-[width] duration-500 ease-out"
                style={{ width: `${Math.max(12, progreso * 100)}%` }}
              />
            </div>
          </div>

          {/* Pasos */}
          <div className="relative flex-1 overflow-y-auto overflow-x-hidden px-5 py-5">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              {paso === 0 && (
                <m.fieldset key="p1" custom={dir} variants={variantes} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.28 }}>
                  <legend className="text-lg font-semibold">¿De qué marca es tu equipo?</legend>
                  <div className="mt-4 grid grid-cols-2 gap-2.5 xs:grid-cols-3">
                    {MARCAS.map((mm) => (
                      <button
                        key={mm}
                        type="button"
                        className={`${chip(marca === mm)} ${mm === "PEISA" ? "font-bold" : ""} ${mm.startsWith("Otra") ? "col-span-2 xs:col-span-3" : ""}`}
                        aria-pressed={marca === mm}
                        onClick={() => {
                          setMarca(mm);
                          ir(1);
                        }}
                      >
                        {mm}
                      </button>
                    ))}
                  </div>
                </m.fieldset>
              )}

              {paso === 1 && (
                <m.fieldset key="p2" custom={dir} variants={variantes} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.28 }}>
                  <legend className="text-lg font-semibold">¿Qué le pasa o qué servicio necesitás?</legend>
                  <p className="etiqueta mt-4 text-humo">Tiene un problema</p>
                  <div className="mt-2 grid grid-cols-2 gap-2.5">
                    {PROBLEMAS.map((p) => (
                      <button key={p} type="button" className={chip(servicio === p)} aria-pressed={servicio === p} onClick={() => setServicio(p)}>
                        {p}
                      </button>
                    ))}
                  </div>
                  {servicio === "Muestra un código de error" && (
                    <label className="mt-3 block">
                      <span className="text-sm text-celeste">Código que aparece en la pantalla (opcional)</span>
                      <input
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        maxLength={12}
                        className="mt-1.5 h-12 w-full rounded-xl border border-linea bg-noche px-4 text-white uppercase placeholder:text-humo/60 focus:border-azul focus:outline-none"
                        placeholder="Ej.: E01"
                        autoComplete="off"
                      />
                    </label>
                  )}
                  <p className="etiqueta mt-5 text-humo">Necesito un servicio</p>
                  <div className="mt-2 grid grid-cols-2 gap-2.5">
                    {SERVICIOS.map((s) => (
                      <button key={s} type="button" className={chip(servicio === s)} aria-pressed={servicio === s} onClick={() => setServicio(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                </m.fieldset>
              )}

              {paso === 2 && (
                <m.fieldset key="p3" custom={dir} variants={variantes} initial="entra" animate="centro" exit="sale" transition={{ duration: 0.28 }}>
                  <legend className="text-lg font-semibold">¿Dónde está el equipo?</legend>
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    {ZONAS.map((z) => (
                      <button key={z} type="button" className={chip(zona === z)} aria-pressed={zona === z} onClick={() => setZona(z)}>
                        {z}
                      </button>
                    ))}
                  </div>
                  <label className="mt-5 block">
                    <span className="font-semibold">Tu nombre</span>
                    <input
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      maxLength={60}
                      autoComplete="given-name"
                      className="mt-2 h-12 w-full rounded-xl border border-linea bg-noche px-4 text-white placeholder:text-humo/60 focus:border-azul focus:outline-none"
                      placeholder="Nombre y apellido"
                    />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-sm text-celeste">¿Algo más? (opcional)</span>
                    <textarea
                      value={detalle}
                      onChange={(e) => setDetalle(e.target.value)}
                      maxLength={300}
                      rows={2}
                      className="mt-1.5 w-full resize-none rounded-xl border border-linea bg-noche px-4 py-3 text-white placeholder:text-humo/60 focus:border-azul focus:outline-none"
                      placeholder="Modelo, barrio, horario que te queda cómodo…"
                    />
                  </label>
                  <div className="mt-4 rounded-xl border border-dashed border-linea bg-noche/60 p-3.5">
                    <p className="etiqueta text-humo">Mensaje que vas a enviar</p>
                    <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-celeste">{mensaje}</pre>
                  </div>
                </m.fieldset>
              )}
            </AnimatePresence>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-3 border-t border-linea bg-marino px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {paso > 0 ? (
              <button
                type="button"
                onClick={() => ir(paso - 1)}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-linea text-celeste hover:text-white"
                aria-label="Volver al paso anterior"
              >
                <Icono nombre="atras" />
              </button>
            ) : null}
            {paso < 2 ? (
              <button
                type="button"
                disabled={paso === 0 ? !marca : !servicio}
                onClick={() => ir(paso + 1)}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-rojo text-[1.1875rem] font-bold text-white transition hover:bg-rojo-hover disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente <Icono nombre="flecha" className="h-5 w-5" />
              </button>
            ) : (
              <a
                href={listo ? linkWhatsApp(mensaje) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!listo}
                data-ubicacion="pedido_service"
                onClick={(e) => {
                  if (!listo) {
                    e.preventDefault();
                    return;
                  }
                  enviar();
                }}
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl font-semibold text-white transition ${
                  listo ? "bg-whatsapp text-[#05341a] hover:brightness-110" : "cursor-not-allowed bg-whatsapp/30"
                }`}
              >
                <Icono nombre="whatsapp" className="h-5 w-5" />
                {listo ? "Enviar por WhatsApp" : "Completá zona y nombre"}
              </a>
            )}
          </div>
        </div>
      </LazyMotion>
    </dialog>
  );
}
