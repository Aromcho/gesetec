/**
 * DATOS DEL NEGOCIO — fuente única de nombre, dirección, teléfono, horarios y zonas.
 *
 * Todo el sitio (pie de página, contacto, mapa, JSON-LD, sitemap) lee de acá.
 * Cuando el local se mude: cambiá `direccion` y `geo`, guardá y corré `npm run build`.
 *
 * Fuentes: Instagram @gesetec.calderas, ficha de Google Maps y datos confirmados por el cliente (13/11/2026).
 */

export type Dia = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado" | "domingo";

export interface Franja {
  /** Hora de apertura en formato 24 h "HH:MM" (hora de Argentina). */
  abre: string;
  /** Hora de cierre en formato 24 h "HH:MM". */
  cierra: string;
}

export const negocio = {
  nombre: "Gesetec Calderas",
  /** Nombre corto para el header, el manifest y el reel. */
  nombreCorto: "Gesetec",
  lema: "Climatización eficiente",
  descripcion:
    "Venta, instalación y service oficial de calderas en Villa Gesell, Cariló, Pinamar y Costa Esmeralda. Service oficial PEISA, Baxi, Tameco, Ferroli, Euterma, Rinnai, Bowman y bombas Rowa.",

  /** Dominio de producción, sin barra final. Se usa en canonical, sitemap y JSON-LD. */
  url: "https://gesetecalderas.com",

  /**
   * DIRECCIÓN — un solo lugar para cambiarla (pie, contacto, mapa y JSON-LD la leen de acá).
   * Confirmada por el cliente el 13/11/2026; coincide con la ficha de Google (clave para el SEO local).
   * Si se mudan: cambiar calle, geo y avisar el mismo día en la ficha de Google.
   */
  direccion: {
    calle: "Av. Buenos Aires 737",
    localidad: "Villa Gesell",
    provincia: "Buenos Aires",
    codigoPostal: "B7165",
    pais: "AR",
  },
  /** Coordenadas del pin de la ficha de Google. */
  geo: { lat: -37.2486997, lng: -56.9676813 },

  telefono: {
    /** Como se muestra en la web. */
    visible: "2255 48-5539",
    /** Para enlaces tel: (formato internacional). */
    tel: "+5492255485539",
    /** Para enlaces de WhatsApp (sin + ni espacios). */
    whatsapp: "5492255485539",
  },
  /** Mail actual (historia destacada de Instagram). Cuando tengan mail con dominio propio, cambiarlo acá. */
  email: "geseteccalderas@gmail.com",

  instagram: { usuario: "gesetec.calderas", url: "https://www.instagram.com/gesetec.calderas/" },
  /** Ficha de Google Maps (CID de la ficha "GESETEC CALDERAS"). */
  googleMaps: "https://maps.google.com/?cid=16685614718240728018",
  /** Botón "Ver reseñas en Google" (abre el panel de reseñas de la ficha). */
  googleResenas:
    "https://www.google.com/search?q=GESETEC+CALDERAS+Villa+Gesell#lrd=0x959b619c05f648a3:0xe78f362e9bc4a3d2,1,,,",
  /** Botón "Dejá tu reseña". */
  googleEscribirResena:
    "https://www.google.com/search?q=GESETEC+CALDERAS+Villa+Gesell#lrd=0x959b619c05f648a3:0xe78f362e9bc4a3d2,3,,,",

  /** Técnico responsable y matrícula (confirmado por el cliente el 13/11/2026 para mostrar en la web). */
  tecnico: { nombre: "Martín Alleva", matricula: "Mat. 2928 · 2da categoría" },

  /** Datos de la ficha de Google al 13/11/2026 (se muestran tal cual, sin calificación propia en JSON-LD). */
  resenasGoogle: { cantidad: 56, promedio: "5,0" },

  /**
   * HORARIOS (ficha de Google, confirmados por el cliente el 13/11/2026). Hora de Argentina.
   * Día sin franjas = cerrado. Se pueden poner dos franjas por día (ej. mañana y tarde).
   */
  horarios: {
    lunes: [{ abre: "08:00", cierra: "18:00" }],
    martes: [{ abre: "08:00", cierra: "18:00" }],
    miercoles: [{ abre: "08:00", cierra: "18:00" }],
    jueves: [{ abre: "08:00", cierra: "18:00" }],
    viernes: [{ abre: "08:00", cierra: "18:00" }],
    sabado: [{ abre: "08:00", cierra: "13:00" }],
    domingo: [],
  } satisfies Record<Dia, Franja[]>,

  /** Zonas de atención (bio de Instagram). El orden es el que se muestra. */
  zonas: [
    {
      slug: "villa-gesell",
      nombre: "Villa Gesell",
      texto:
        "Desde acá salimos todos los días. Atendemos casas, departamentos, hoteles y comercios de toda la ciudad, del centro a los barrios del norte y del sur.",
    },
    {
      slug: "carilo",
      nombre: "Cariló",
      texto:
        "Casas entre pinos y apart hoteles: instalamos el sistema de calefacción completo de un apart hotel de 10 departamentos con dos calderas PEISA.",
    },
    {
      slug: "pinamar",
      nombre: "Pinamar",
      texto:
        "Service, reparación e instalación de calderas y climatización de piscinas en Pinamar, Valeria del Mar y alrededores.",
    },
    {
      slug: "costa-esmeralda",
      nombre: "Costa Esmeralda",
      texto:
        "Puesta en marcha de calderas de casas de temporada y climatizadores de piscina TAMECO instalados en el día.",
    },
  ],
  /** Otras localidades que el negocio nombra en sus publicaciones ("trabajamos en toda la Costa"). */
  zonasExtra: ["Mar de las Pampas", "Valeria del Mar", "Villa Robles", "North Beach"],
} as const;

export type Negocio = typeof negocio;

/** Dirección en una línea, idéntica en todo el sitio (NAP). */
export const direccionCompleta = `${negocio.direccion.calle}, ${negocio.direccion.localidad} (${negocio.direccion.codigoPostal}), ${negocio.direccion.provincia}`;

/** Link a WhatsApp con un mensaje armado. */
export function linkWhatsApp(mensaje = "Hola Gesetec, quiero hacer una consulta."): string {
  return `https://wa.me/${negocio.telefono.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const linkTelefono = `tel:${negocio.telefono.tel}`;

/** Link para abrir la dirección en Google Maps (cómo llegar). */
export const linkComoLlegar = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${negocio.direccion.calle}, ${negocio.direccion.localidad}, Buenos Aires, Argentina`,
)}`;
