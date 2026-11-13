#!/usr/bin/env bash
# Actualiza el sitio en el VPS: trae los cambios del repo y regenera out/.
# Uso (en el VPS):  bash /var/www/gesetec/deploy/actualizar.sh
set -euo pipefail
cd /var/www/gesetec
git pull --ff-only
npm ci --no-audit --no-fund
npm run build
echo "Listo: Nginx ya sirve la versión nueva desde /var/www/gesetec/out (no hace falta reiniciar nada)."
