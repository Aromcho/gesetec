# Gesetec Calderas — sitio web

Sitio de **Gesetec Calderas** (Villa Gesell): venta, instalación y service oficial de calderas.
Es **100 % estático**: no tiene backend, base de datos ni panel. El contenido vive en archivos de `content/` y `npm run build` genera el sitio en `out/`, que Nginx sirve directamente.

- Next.js 16 (App Router, `output: 'export'`) · Tailwind CSS 4 · motion
- Imágenes: `scripts/optimize-images.mjs` (sharp) genera WebP en varios tamaños + placeholder borroso
- SEO local: JSON-LD (HVACBusiness, Service, Product, BreadcrumbList, FAQPage), sitemap, robots, canonical, Open Graph, manifest
- Lighthouse mobile: Performance 96 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100

---

## Requisitos

- Node.js 20 o superior (probado con Node 22). Funciona en Windows, macOS y Linux.

## Comandos

```bash
npm install        # la primera vez
npm run dev        # http://localhost:3000 (genera las imágenes antes de arrancar)
npm run build      # deja el sitio listo en out/
npm start          # sirve out/ en http://localhost:3000 para revisarlo
npm run images     # solo regenera las imágenes
```

En Windows se usan exactamente los mismos comandos (PowerShell o CMD).

---

## Cómo cambiar el contenido

Todo está en `content/`, tipado y comentado. Cambiá el dato, guardá y corré `npm run build`.

| Archivo | Qué tiene |
|---|---|
| `content/negocio.ts` | **Nombre, dirección, teléfono, WhatsApp, mail, horarios, zonas, matrícula.** Fuente única: el pie, el contacto, el mapa y el JSON-LD leen de acá. |
| `content/servicios.ts` | Los 7 servicios (portada y páginas `/servicios/...`). |
| `content/marcas.ts` | Las marcas (tira de logos y páginas `/marcas/...`). PEISA tiene su página propia. |
| `content/peisa.ts` | Textos de `/service-oficial-peisa`. |
| `content/calderas.ts` | Modelos y equipos (también generan el JSON-LD `Product`). |
| `content/trabajos.ts` | Galería de trabajos reales. |
| `content/resenas.ts` | Reseñas reales de Google, copiadas tal cual. |
| `content/faqs.ts` | Preguntas frecuentes (se marca en cuáles páginas aparece cada una). |

### Cambiar la dirección (mudanza)

1. En `content/negocio.ts` cambiá `direccion.calle` y `geo` (las coordenadas: en Google Maps, clic derecho sobre el local → copiar coordenadas).
2. `npm run build` y subí los cambios.
3. **El mismo día** cambiá la dirección en la ficha de Google, Instagram y los directorios. La dirección tiene que ser idéntica en todos lados.

### Cambiar el mail

En `content/negocio.ts` → `email` (por ejemplo cuando esté listo `info@gesetecalderas.com`).

### Sumar un trabajo con fotos

1. Copiá las fotos a `assets/fotos/` con un nombre descriptivo: marca + modelo + zona, por ejemplo `caldera-peisa-prima-tec-24-dsf-pinamar.jpg`. Sin caras de clientes ni textos encima.
2. Agregá el trabajo en `content/trabajos.ts` (título, lugar, equipos, descripción y las fotos con su `alt`).
3. `npm run build`: las fotos se convierten solas a WebP en varios tamaños.

### Imágenes de Kling

- `assets/fotos/`: fotos reales de trabajos (sacadas de los reels). Varias fueron **mejoradas con Kling** (más nitidez, sin cambiar lo que muestran); las originales quedaron en `assets/originales/` como referencia.
- `assets/fondos/`: imágenes **generadas con Kling** para ambientar (piscina al atardecer, casa de veraneo, living con radiador, bomba presurizadora, manos de un técnico). Son decorativas: no se usan como "trabajos reales".

### Sumar reseñas

Copiá la reseña de Google **tal cual** (texto, nombre y fecha) en `content/resenas.ts`. Actualizá `resenasGoogle` en `negocio.ts` con el nuevo total.

---

## Analytics y Search Console

Copiá `.env.example` como `.env.local` (en el VPS también) y completá:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Eventos de GA4 que ya se envían:

| Evento | Cuándo |
|---|---|
| `click_whatsapp` | Clic en cualquier enlace de WhatsApp (con `ubicacion`: portada, boton_fijo, pie, contacto…). |
| `click_llamar` | Clic en cualquier enlace para llamar. |
| `pedido_service` | Se envía el formulario "Pedí tu service" (con `marca`, `servicio`, `zona`). |

Marcá los tres como **eventos clave** en GA4.

**Search Console:** verificación por DNS (registro TXT en el dominio). No hace falta tocar el sitio. Si alguna vez preferís la etiqueta HTML, poné el valor en `NEXT_PUBLIC_GSC_VERIFICATION`. Después de verificar, enviá `https://gesetecalderas.com/sitemap.xml`.

---

## Deploy en el VPS (Hostinger, Nginx, sin Node corriendo)

El VPS clona el repo, hace el build y Nginx sirve `out/`. No hay proceso de Node en producción.

### 1. Primera vez

```bash
# Clonar (deploy key de solo lectura ya configurada con el alias github-gesetec)
sudo mkdir -p /var/www/gesetec && sudo chown "$USER":"$USER" /var/www/gesetec
git clone git@github-gesetec:Aromcho/gesetec.git /var/www/gesetec
cd /var/www/gesetec
cp .env.example .env.local   # y completá NEXT_PUBLIC_GA_ID
npm ci && npm run build

# Nginx (no toca los otros sitios: es un archivo nuevo)
sudo cp deploy/nginx-gesetecalderas.com.conf /etc/nginx/sites-available/gesetecalderas.com
sudo ln -s /etc/nginx/sites-available/gesetecalderas.com /etc/nginx/sites-enabled/
sudo mkdir -p /var/www/certbot
sudo nginx -t && sudo systemctl reload nginx
```

> El archivo trae los bloques `listen 443 ssl` con las líneas del certificado comentadas. Si `nginx -t` falla porque todavía no hay certificado, sacá temporalmente los dos bloques 443, recargá Nginx, corré Certbot y volvé a ponerlos (Certbot completa las rutas).

### 2. DNS (lo hacés vos)

En el panel de DNS del dominio (hoy en Canva → Configuración de dominios → gesetecalderas.com):

- Desactivá **"Conectado a Canva"**.
- Registro **A** `@` → IP del VPS.
- Registro **A** `www` → IP del VPS (o CNAME `www` → `gesetecalderas.com`).
- **No borres** los registros MX/TXT de Google Workspace si ya configuraron el mail.

### 3. HTTPS con Certbot

```bash
sudo certbot --nginx -d gesetecalderas.com -d www.gesetecalderas.com
sudo nginx -t && sudo systemctl reload nginx
```

Certbot deja la renovación automática programada.

### 4. Actualizar el sitio

```bash
bash /var/www/gesetec/deploy/actualizar.sh
```

Para que se publique solo cada vez que se sube algo a GitHub, en el VPS (con el usuario dueño de `/var/www/gesetec`) se agrega a `crontab -e`:

```
*/5 * * * * bash /var/www/gesetec/deploy/auto-actualizar.sh >> $HOME/gesetec-deploy.log 2>&1
```

Cada 5 minutos revisa `main`; si hay commits nuevos, actualiza y regenera `out/`. Si no hay nada nuevo, no hace nada.

### Qué hace la configuración de Nginx

- `http://` y `www` → `https://gesetecalderas.com` (301).
- URLs limpias: `/service-oficial-peisa` sirve `service-oficial-peisa.html`. Las barras finales redirigen a la versión sin barra.
- Caché: `/_next/static` 1 año inmutable; imágenes, fuentes y logos 30 días; HTML siempre fresco.
- gzip, HTTP/2 y encabezados de seguridad (`deploy/encabezados.conf`).
- 301 de las URLs de la web vieja de Canva (`deploy/redirecciones.conf`).
- 404 propia (`404.html`).

---

## Estructura

```
app/                 páginas (/, /service-oficial-peisa, /servicios/[slug], /marcas/[slug]), sitemap, robots, manifest
components/          componentes (Llama = elemento firma, PedidoService = "Pedí tu service")
components/secciones secciones de la portada reutilizables
content/             TODO el contenido editable
assets/fotos/        fotos de trabajos (entrada del script de imágenes)
assets/fondos/       imágenes de ambientación generadas con Kling
assets/originales/   fotos originales antes de mejorarlas (no se publican)
public/              logos, íconos, Open Graph; public/img/ se genera solo (no se versiona)
scripts/             optimize-images.mjs
deploy/              Nginx, redirecciones, encabezados y script de actualización
```
