#!/bin/sh
set -e

echo "→ Applying database migrations"
prisma migrate deploy --schema prisma/schema.prisma

if [ "${SEED_ON_START:-true}" = "true" ]; then
  echo "→ Seeding learning content (idempotent)"
  node dist-seed/prisma/seed.js
fi

echo "→ Starting API"
exec node dist/server.js
