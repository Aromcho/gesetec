#!/usr/bin/env bash
# Publica solo los cambios: revisa GitHub y, si main tiene commits nuevos, corre actualizar.sh.
# Pensado para cron cada 5 minutos (ver README, "Actualizar el sitio"). Si no hay nada nuevo, no hace nada.
set -euo pipefail

# cron arranca sin el PATH de la sesión: cargar nvm si está instalado.
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$NVM_DIR/nvm.sh"
  nvm use --silent default >/dev/null 2>&1 || true
fi

cd /var/www/gesetec

# Una sola actualización a la vez.
exec 9>/tmp/gesetec-actualizar.lock
flock -n 9 || exit 0

git fetch -q origin main
if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ]; then
  exit 0
fi

echo "$(date '+%F %T') actualizando $(git rev-parse --short HEAD) → $(git rev-parse --short origin/main)"
bash deploy/actualizar.sh
echo "$(date '+%F %T') listo"
