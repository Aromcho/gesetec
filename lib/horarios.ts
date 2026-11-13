import { negocio, type Dia, type Franja } from "@/content/negocio";

export const DIAS: Dia[] = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
export const NOMBRE_DIA: Record<Dia, string> = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado",
  domingo: "Domingo",
};
const ORDEN: Dia[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const aMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
/** "08:00" → "8", "13:30" → "13:30" */
export const horaCorta = (hhmm: string) => {
  const [h, m] = hhmm.split(":");
  return m === "00" ? String(Number(h)) : `${Number(h)}:${m}`;
};

/** Fecha y hora actual en Villa Gesell (independiente de la zona horaria del visitante). */
function ahoraEnArgentina(fecha: Date) {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(fecha);
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? "";
  const indice = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const hora = Number(get("hour")) % 24;
  return { dia: DIAS[indice], minutos: hora * 60 + Number(get("minute")) };
}

export interface Estado {
  abierto: boolean;
  /** "Abierto ahora · cierra a las 18 h" / "Cerrado · abre el lunes a las 8 h" */
  texto: string;
  hoy: Dia;
}

export function estadoAhora(fecha = new Date()): Estado {
  const { dia, minutos } = ahoraEnArgentina(fecha);
  const franjas: readonly Franja[] = negocio.horarios[dia];
  const actual = franjas.find((f) => minutos >= aMin(f.abre) && minutos < aMin(f.cierra));
  if (actual) return { abierto: true, texto: `Abierto ahora · cierra a las ${horaCorta(actual.cierra)} h`, hoy: dia };

  // Próxima apertura: hoy más tarde o en los próximos días.
  const despues = franjas.find((f) => aMin(f.abre) > minutos);
  if (despues) return { abierto: false, texto: `Cerrado · abre hoy a las ${horaCorta(despues.abre)} h`, hoy: dia };
  for (let i = 1; i <= 7; i++) {
    const d = DIAS[(DIAS.indexOf(dia) + i) % 7];
    const f = negocio.horarios[d][0];
    if (f) {
      const cuando = i === 1 ? "mañana" : `el ${NOMBRE_DIA[d].toLowerCase()}`;
      return { abierto: false, texto: `Cerrado · abre ${cuando} a las ${horaCorta(f.abre)} h`, hoy: dia };
    }
  }
  return { abierto: false, texto: "Cerrado", hoy: dia };
}

/** Horarios agrupados para mostrar: "Lunes a viernes 8 a 18 h", "Sábado 8 a 13 h", "Domingo cerrado". */
export function horariosAgrupados(): { dias: string; horas: string; incluye: Dia[] }[] {
  const texto = (d: Dia) =>
    negocio.horarios[d].length
      ? negocio.horarios[d].map((f) => `${horaCorta(f.abre)} a ${horaCorta(f.cierra)} h`).join(" y ")
      : "Cerrado";
  const grupos: { dias: Dia[]; horas: string }[] = [];
  for (const d of ORDEN) {
    const h = texto(d);
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.horas === h) ultimo.dias.push(d);
    else grupos.push({ dias: [d], horas: h });
  }
  return grupos.map((g) => ({
    dias:
      g.dias.length === 1
        ? NOMBRE_DIA[g.dias[0]]
        : `${NOMBRE_DIA[g.dias[0]]} a ${NOMBRE_DIA[g.dias[g.dias.length - 1]].toLowerCase()}`,
    horas: g.horas,
    incluye: g.dias,
  }));
}

/** Para JSON-LD: openingHoursSpecification. */
export function horariosSchema() {
  const map: Record<Dia, string> = {
    lunes: "Monday",
    martes: "Tuesday",
    miercoles: "Wednesday",
    jueves: "Thursday",
    viernes: "Friday",
    sabado: "Saturday",
    domingo: "Sunday",
  };
  return ORDEN.flatMap((d) =>
    negocio.horarios[d].map((f) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${map[d]}`,
      opens: f.abre,
      closes: f.cierra,
    })),
  );
}
