type Nombre =
  | "whatsapp"
  | "telefono"
  | "flecha"
  | "instalacion"
  | "reparacion"
  | "mantenimiento"
  | "presion"
  | "temporada"
  | "piscina"
  | "radiador"
  | "ubicacion"
  | "reloj"
  | "instagram"
  | "estrella"
  | "check"
  | "cerrar"
  | "menu"
  | "mail"
  | "mas"
  | "atras"
  | "externo"
  | "escudo";

const trazos: Record<Exclude<Nombre, "whatsapp" | "estrella" | "instagram">, React.ReactNode> = {
  telefono: (
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 5.2 5.2l1.4-2.1 4.2 1.6V17a2.5 2.5 0 0 1-2.7 2.5C9.5 19 5 14.5 4.5 6.2A2.5 2.5 0 0 1 5 3.5Z" />
  ),
  flecha: <path d="M4 12h15m-6-6 6 6-6 6" />,
  atras: <path d="M20 12H5m6-6-6 6 6 6" />,
  externo: <path d="M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  instalacion: (
    <>
      <rect x="6" y="3" width="12" height="15" rx="2" />
      <path d="M9 7h6M9 10.5h3M9 21v-3m6 3v-3" />
      <circle cx="14.5" cy="13.5" r="1.3" />
    </>
  ),
  reparacion: (
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6 12.6 21a2.1 2.1 0 0 1-3-3l8.4-8.4-1.3-1.3M14.7 6.3 17 4a5 5 0 0 0-6.8 6.6L3.6 17.2a2.1 2.1 0 0 0 3 3l6.6-6.6" />
  ),
  mantenimiento: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4m8-4v4M8.5 14.5l2.2 2.2 4.8-4.7" />
    </>
  ),
  presion: (
    <>
      <path d="M4.5 16a7.5 7.5 0 1 1 15 0" />
      <path d="m12 16 3.5-4.5M4 19.5h16" />
      <circle cx="12" cy="16" r="1.2" />
    </>
  ),
  temporada: (
    <>
      <path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5" />
      <path d="M12 12.5v5m-2.2-3.7 4.4 2.4m0-2.4-4.4 2.4" />
    </>
  ),
  piscina: (
    <>
      <path d="M2.5 16c1.6 0 1.6 1.2 3.2 1.2s1.6-1.2 3.2-1.2 1.6 1.2 3.1 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.1-1.2M2.5 20c1.6 0 1.6 1.2 3.2 1.2s1.6-1.2 3.2-1.2 1.6 1.2 3.1 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.1-1.2" />
      <path d="M8 13V5.5a2 2 0 0 1 4 0M16 13V5.5a2 2 0 0 0-4 0M8 9h8" />
    </>
  ),
  radiador: (
    <>
      <path d="M5 6.5v11M9 5v14m4-14v14m4-14v14m2-12.5v11" />
      <path d="M3 8.5h18M3 15.5h18" />
    </>
  ),
  ubicacion: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4.2L19 7" />,
  cerrar: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  mas: <path d="M12 5v14M5 12h14" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-3Z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </>
  ),
};

export function Icono({ nombre, className = "h-5 w-5", titulo }: { nombre: Nombre; className?: string; titulo?: string }) {
  const comun = {
    className,
    viewBox: "0 0 24 24",
    "aria-hidden": titulo ? undefined : true,
    role: titulo ? "img" : undefined,
    "aria-label": titulo,
    focusable: "false" as const,
  };
  if (nombre === "whatsapp")
    return (
      <svg {...comun} fill="currentColor">
        <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.3Z" />
      </svg>
    );
  if (nombre === "estrella")
    return (
      <svg {...comun} fill="currentColor">
        <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9L12 2.8Z" />
      </svg>
    );
  if (nombre === "instagram")
    return (
      <svg {...comun} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg {...comun} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {trazos[nombre]}
    </svg>
  );
}
