#!/bin/sh
set -e

echo "→ Applying database migrations"
npx prisma migrate deploy

if [ "${SEED_ON_START:-true}" = "true" ]; then
  echo "→ Seeding learning content (idempotent)"
  npx tsx prisma/seed.ts
fi

echo "→ Starting API"
exec node dist/server.js
