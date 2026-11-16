#!/usr/bin/env bash
# Actualiza el sitio en el VPS: trae los cambios del repo, regenera out/ y lo publica
# en la carpeta que sirve Nginx (el código vive en /root/gesetec; Nginx no puede leer /root).
# Uso (en el VPS):  bash /root/gesetec/deploy/actualizar.sh
set -euo pipefail
cd "$(dirname "$0")/.."
PUBLICO="${GESETEC_PUBLICO:-/var/www/gesetecalderas.com}"
git pull --ff-only
npm ci --no-audit --no-fund
npm run build
[ -f out/index.html ] || { echo "El build no generó out/index.html; no se publica nada." >&2; exit 1; }
mkdir -p "$PUBLICO"
rsync -a --delete out/ "$PUBLICO/"
echo "Listo: Nginx ya sirve la versión nueva desde $PUBLICO (no hace falta reiniciar nada)."
