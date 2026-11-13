// Genera las imágenes del sitio antes de `dev` y `build`.
//
// Entrada:  assets/fotos/*.{jpg,jpeg,png,webp}   (fotos reales de trabajos)
//           assets/fondos/*.{jpg,jpeg,png,webp}  (fondos y texturas)
// Salida:   public/img/<nombre>-<ancho>.webp      (varios tamaños)
//           content/generated/images.json         (medidas + placeholder borroso en base64)
//
// El nombre del archivo es el que se usa en el sitio (y en el alt/SEO): usá nombres descriptivos,
// por ejemplo "caldera-peisa-prima-tec-24-dsf-villa-gesell.jpg".
// Funciona igual en Windows, macOS y Linux. Si una imagen ya está procesada y no cambió, la saltea.

import { readdir, mkdir, stat, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const carpetas = ["assets/fotos", "assets/fondos"];
const salida = path.join(root, "public", "img");
const manifiesto = path.join(root, "content", "generated", "images.json");
const ANCHOS = [400, 640, 960, 1280, 1920];
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

await mkdir(salida, { recursive: true });
await mkdir(path.dirname(manifiesto), { recursive: true });

let previo = {};
if (existsSync(manifiesto)) {
  try {
    previo = JSON.parse(await readFile(manifiesto, "utf8"));
  } catch {
    previo = {};
  }
}

const resultado = {};
let procesadas = 0;
let salteadas = 0;

for (const carpeta of carpetas) {
  const dir = path.join(root, carpeta);
  if (!existsSync(dir)) continue;
  const archivos = (await readdir(dir)).filter((f) => EXT.has(path.extname(f).toLowerCase())).sort();

  for (const archivo of archivos) {
    const nombre = path.basename(archivo, path.extname(archivo));
    const origen = path.join(dir, archivo);
    const info = await stat(origen);
    const anterior = previo[nombre];
    // Huella del contenido: va en la URL (?v=) para que, si cambia la foto, el navegador no use la vieja de su caché.
    const v = createHash("sha1").update(await readFile(origen)).digest("hex").slice(0, 8);

    // Ya procesada y sin cambios: reutilizar.
    if (
      anterior &&
      anterior.mtime === info.mtimeMs &&
      anterior.anchos.every((w) => existsSync(path.join(salida, `${nombre}-${w}.webp`)))
    ) {
      resultado[nombre] = { ...anterior, v };
      salteadas++;
      continue;
    }

    const img = sharp(origen, { failOn: "none" }).rotate();
    const meta = await img.metadata();
    const anchoOriginal = meta.width ?? 1280;
    const altoOriginal = meta.height ?? 960;
    const esFondo = carpeta.endsWith("fondos");

    // Tamaños: los estándar menores al original + el original (sin agrandar).
    const anchos = ANCHOS.filter((w) => w < anchoOriginal);
    if (!anchos.length || anchoOriginal <= ANCHOS[ANCHOS.length - 1]) anchos.push(Math.min(anchoOriginal, 1920));
    const unicos = [...new Set(anchos)].sort((a, b) => a - b);

    for (const w of unicos) {
      await sharp(origen, { failOn: "none" })
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        // Fotos de reels: un toque de nitidez y color parejo.
        .sharpen(esFondo ? undefined : { sigma: 0.6 })
        .webp({ quality: esFondo ? 72 : 78, effort: 5 })
        .toFile(path.join(salida, `${nombre}-${w}.webp`));
    }

    const mini = await sharp(origen, { failOn: "none" })
      .rotate()
      .resize({ width: 24 })
      .blur(1.2)
      .webp({ quality: 40 })
      .toBuffer();

    resultado[nombre] = {
      ancho: anchoOriginal,
      alto: altoOriginal,
      anchos: unicos,
      blur: `data:image/webp;base64,${mini.toString("base64")}`,
      mtime: info.mtimeMs,
      v,
    };
    procesadas++;
  }
}

await writeFile(manifiesto, JSON.stringify(resultado, null, 2));
console.log(`[imágenes] ${procesadas} procesadas, ${salteadas} sin cambios → public/img`);
