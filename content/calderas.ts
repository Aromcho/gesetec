/**
 * EQUIPOS — modelos que Gesetec vende, instala o atiende y que aparecen en sus publicaciones.
 * Se muestran en /service-oficial-peisa y generan el JSON-LD Product (sin precios).
 * Pendiente de confirmar con el cliente: lista completa de modelos PEISA que vende hoy.
 */

export interface Equipo {
  id: string;
  marca: string;
  modelo: string;
  categoria: "Caldera mural" | "Caldera de alta potencia" | "Climatizador de piscina" | "Radiador" | "Toallero" | "Termostato" | "Calefón";
  descripcion: string;
  /** Datos técnicos publicados por Gesetec. */
  datos: string[];
  /** Foto real (assets/fotos), opcional. */
  foto?: string;
  /** Publicación de Instagram donde aparece. */
  instagram?: string;
}

export const equipos: Equipo[] = [
  {
    id: "peisa-prima-tec-24-dsf",
    marca: "PEISA",
    modelo: "Prima Tec 24 DSF",
    categoria: "Caldera mural",
    descripcion:
      "Caldera mural de doble servicio y tiro forzado: calefacción central y agua caliente sanitaria en un solo equipo, con panel digital.",
    datos: ["Doble servicio", "Tiro forzado", "Panel digital"],
    foto: "caldera-peisa-prima-tec-24-dsf-instalada",
    instagram: "https://www.instagram.com/reel/DT-b7DCArTD/",
  },
  {
    id: "peisa-prima-tec-32-dsf",
    marca: "PEISA",
    modelo: "Prima Tec 32 DSF",
    categoria: "Caldera mural",
    descripcion:
      "La versión de mayor potencia de la línea Prima Tec. La instalamos, entre otros trabajos, para alimentar un sistema de piso radiante.",
    datos: ["Doble servicio", "Ideal para piso radiante y casas grandes"],
    foto: "caldera-peisa-prima-tec-32-dsf-piso-radiante",
    instagram: "https://www.instagram.com/reel/De4MQbBiTut/",
  },
  {
    id: "peisa-diva-tecno-smart",
    marca: "PEISA",
    modelo: "Diva Tecno Smart",
    categoria: "Caldera mural",
    descripcion:
      "Caldera mural de doble servicio con termostato Wi-Fi Zentraly incluido, para controlar la temperatura de la casa desde el celular.",
    datos: ["Doble servicio", "Termostato Zentraly Wi-Fi incluido", "Diseño mural compacto"],
    foto: "caldera-peisa-diva-tecno-smart-negra",
    instagram: "https://www.instagram.com/reel/C9kFPzTuwfy/",
  },
  {
    id: "peisa-xp-100",
    marca: "PEISA",
    modelo: "XP 100",
    categoria: "Caldera de alta potencia",
    descripcion:
      "Caldera de alta potencia para hoteles, apart hoteles y edificios. La combinamos con un intercambiador Bowman para calefacción central y piscina.",
    datos: ["Alta potencia", "Calefacción central + piscina con intercambiador"],
    foto: "entrega-caldera-peisa-xp-100-apart-hotel",
    instagram: "https://www.instagram.com/reel/CiK2m3jgd3c/",
  },
  {
    id: "peisa-gamma-500",
    marca: "PEISA",
    modelo: "Gamma 500",
    categoria: "Radiador",
    descripcion: "Radiador de aluminio para calefacción central, en blanco. Lo instalamos en casas y en apart hoteles.",
    datos: ["Aluminio", "Blanco"],
    foto: "radiador-peisa-gamma-500-blanco",
    instagram: "https://www.instagram.com/reel/DJ9pQN1NUDj/",
  },
  {
    id: "peisa-tropical-500",
    marca: "PEISA",
    modelo: "Tropical 500",
    categoria: "Radiador",
    descripcion:
      "Radiador de aluminio inyectado de aleteado simple, con difusión pareja del calor y apto para válvula termostática.",
    datos: ["Aluminio inyectado", "Apto válvula termostática", "Sistema multivía"],
    foto: "radiador-peisa-tropical-500-negro-carilo",
    instagram: "https://www.instagram.com/p/C_N0eiFx191/",
  },
  {
    id: "peisa-domino",
    marca: "PEISA",
    modelo: "Dominó",
    categoria: "Toallero",
    descripcion: "Toallero calefaccionado para baños, en blanco y negro, conectado al sistema de calefacción central.",
    datos: ["Blanco y negro"],
    foto: "toallero-peisa-domino-negro-carilo",
    instagram: "https://www.instagram.com/reel/DeuwkQVibAc/",
  },
  {
    id: "peisa-zentraly",
    marca: "PEISA",
    modelo: "Termostato Zentraly Wi-Fi",
    categoria: "Termostato",
    descripcion: "Termostato de ambiente Wi-Fi para controlar la calefacción desde una app. Venta, instalación y servicio técnico.",
    datos: ["Wi-Fi", "Control desde el celular"],
    instagram: "https://www.instagram.com/reel/C8Hzs6SM-X3/",
  },
  {
    id: "peisa-calefon-tiro-forzado",
    marca: "PEISA",
    modelo: "Calefón digital de tiro forzado",
    categoria: "Calefón",
    descripcion:
      "Calefón a gas sin llama piloto, de cámara estanca y tiro forzado, con pantalla digital. Solo consume cuando abrís el agua caliente.",
    datos: ["15 L/min", "Sin llama piloto", "Eficiencia energética clase A", "16,6 cm de profundidad", "Apto solar"],
    instagram: "https://www.instagram.com/reel/C840nFTJOLt/",
  },
  {
    id: "tameco-cp-30",
    marca: "Tameco",
    modelo: "CP-30",
    categoria: "Climatizador de piscina",
    descripcion: "Climatizador a gas para piscinas y spa, apto para exterior.",
    datos: ["30.000 kcal/h"],
    foto: "climatizador-piscina-tameco-cp-30-costa-esmeralda",
    instagram: "https://www.instagram.com/reel/DfRxDnhifTs/",
  },
  {
    id: "tameco-cp-70",
    marca: "Tameco",
    modelo: "CP-70",
    categoria: "Climatizador de piscina",
    descripcion: "Climatizador a gas para piscinas medianas y grandes.",
    datos: ["70.000 kcal/h", "Referencia: piscinas de hasta 80.000 litros (según instalación y uso)"],
    instagram: "https://www.instagram.com/reel/DKcL-YRtVaX/",
  },
  {
    id: "tameco-cp-100",
    marca: "Tameco",
    modelo: "CP-100",
    categoria: "Climatizador de piscina",
    descripcion: "El climatizador de mayor potencia de la línea, para piscinas grandes.",
    datos: ["100.000 kcal/h"],
    instagram: "https://www.instagram.com/reel/DTsi199gphg/",
  },
  {
    id: "rinnai-serie-comfort",
    marca: "Rinnai",
    modelo: "Calefón Serie Comfort",
    categoria: "Calefón",
    descripcion:
      "Calefón de paso compacto y seguro, con agua caliente sin variaciones de temperatura para casas con varios baños.",
    datos: ["Hasta 4 servicios simultáneos"],
    instagram: "https://www.instagram.com/reel/C9PvmvDsxU8/",
  },
];

export const equiposPeisa = equipos.filter((e) => e.marca === "PEISA");
