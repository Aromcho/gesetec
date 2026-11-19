/**
 * EQUIPOS EN VENTA — listado corto de la portada (sección "Equipos en venta") con precio.
 *
 * Precios de lista de referencia relevados el 16/11/2026:
 * - Tameco: tienda oficial (shop.tamecosrl.com.ar), precios + IVA.
 * - PEISA Prima Tec Smart: PEISA no publica precio; referencia de mercado (IVA incluido). CONFIRMAR CON EL CLIENTE.
 *
 * Para actualizar: cambiá `precio` (y `ivaIncluido` si corresponde) y la fecha de `preciosActualizados`.
 * Cada producto genera un JSON-LD Product con su oferta (precio en pesos).
 */

export type LineaVenta = "Calderas" | "Piscinas";

export interface ProductoVenta {
  /** Si coincide con un id de content/calderas.ts, ese equipo también usa este precio en su JSON-LD. */
  id: string;
  marca: string;
  modelo: string;
  linea: LineaVenta;
  categoria: string;
  descripcion: string;
  /** Datos técnicos cortos (van en monoespaciada). */
  datos: string[];
  /** Foto del equipo (assets/fotos). */
  foto: string;
  /** Precio en pesos argentinos. */
  precio: number;
  ivaIncluido: boolean;
}

export const preciosActualizados = "16/11/2026";
/** Hasta cuándo se informa el precio a Google (priceValidUntil). */
export const preciosValidosHasta = "2026-12-31";

export const productosVenta: ProductoVenta[] = [
  {
    id: "peisa-prima-tec-smart-24",
    marca: "PEISA",
    modelo: "Prima Tec Smart 24",
    linea: "Calderas",
    categoria: "Caldera mural doble servicio",
    descripcion: "Caldera mural de doble servicio y tiro forzado, con control Wi-Fi desde el celular: calefacción central y agua caliente en un solo equipo.",
    datos: ["Doble servicio", "Tiro forzado", "Wi-Fi"],
    foto: "equipo-peisa-prima-tec-smart-24",
    precio: 2407670,
    ivaIncluido: true,
  },
  {
    id: "tameco-cp-30",
    marca: "Tameco",
    modelo: "CP-30",
    linea: "Piscinas",
    categoria: "Climatizador de piscina",
    descripcion: "Climatizador a gas de calentamiento indirecto para piscinas y spa, apto para exterior.",
    datos: ["30.000 kcal/h", "Hasta 45.000 L"],
    foto: "equipo-tameco-cp-30",
    precio: 3599500,
    ivaIncluido: false,
  },
  {
    id: "tameco-cp-70",
    marca: "Tameco",
    modelo: "CP-70",
    linea: "Piscinas",
    categoria: "Climatizador de piscina",
    descripcion: "Climatizador a gas de calentamiento indirecto para piscinas medianas y grandes.",
    datos: ["70.000 kcal/h", "Hasta 100.000 L"],
    foto: "equipo-tameco-cp-70",
    precio: 5222100,
    ivaIncluido: false,
  },
  {
    id: "tameco-cp-80",
    marca: "Tameco",
    modelo: "CP-80",
    linea: "Piscinas",
    categoria: "Climatizador de piscina",
    descripcion: "Climatizador a gas de calentamiento indirecto para piscinas grandes y spa.",
    datos: ["80.000 kcal/h", "Hasta 130.000 L"],
    foto: "equipo-tameco-cp-80",
    precio: 5759200,
    ivaIncluido: false,
  },
  {
    id: "tameco-cp-100",
    marca: "Tameco",
    modelo: "CP-100",
    linea: "Piscinas",
    categoria: "Climatizador de piscina",
    descripcion: "El climatizador de mayor potencia de la línea, de calentamiento indirecto, para piscinas grandes.",
    datos: ["98.500 kcal/h", "Hasta 200.000 L"],
    foto: "equipo-tameco-cp-100",
    precio: 9859500,
    ivaIncluido: false,
  },
];

export const lineasVenta: LineaVenta[] = ["Calderas", "Piscinas"];

export const getProductoVenta = (id: string) => productosVenta.find((p) => p.id === id);

/** $ 3.599.500 */
export const formatoPrecio = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);
