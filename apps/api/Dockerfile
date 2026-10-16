# syntax=docker/dockerfile:1
# Build context: repository root (see docker-compose.yml)

# ── 1. Build: all deps, generate Prisma client, compile API + seed to JS ───────
FROM node:22-alpine AS build
RUN apk add --no-cache openssl
WORKDIR /repo
COPY package.json package-lock.json* ./
COPY apps/api/package.json apps/api/
RUN if [ -f package-lock.json ]; then npm ci -w apps/api; else npm install -w apps/api; fi
COPY apps/api apps/api
RUN npm run build -w apps/api

# ── 2. Production deps only (no TypeScript, Vitest, tsx …) ────────────────────
FROM node:22-alpine AS deps
WORKDIR /repo
COPY package.json package-lock.json* ./
COPY apps/api/package.json apps/api/
RUN if [ -f package-lock.json ]; then npm ci -w apps/api --omit=dev --ignore-scripts; else npm install -w apps/api --omit=dev --ignore-scripts; fi \
 && npm cache clean --force

# ── 3. Runtime ────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runtime
RUN apk add --no-cache openssl
ENV NODE_ENV=production
WORKDIR /repo
COPY --from=deps /repo/node_modules ./node_modules
# Generated Prisma client (built for linux-musl in stage 1)
COPY --from=build /repo/node_modules/.prisma ./node_modules/.prisma
# Prisma CLI only for `migrate deploy` — same version as @prisma/client
RUN npm install -g "prisma@$(node -p "require('./node_modules/@prisma/client/package.json').version")" \
 && npm cache clean --force
WORKDIR /repo/apps/api
COPY apps/api/package.json ./
COPY apps/api/prisma ./prisma
COPY apps/api/docker-entrypoint.sh ./
COPY --from=build /repo/apps/api/dist ./dist
COPY --from=build /repo/apps/api/dist-seed ./dist-seed
RUN chmod +x docker-entrypoint.sh && chown -R node:node /repo/apps/api
USER node
EXPOSE 4000
ENTRYPOINT ["./docker-entrypoint.sh"]
