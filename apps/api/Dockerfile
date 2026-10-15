# syntax=docker/dockerfile:1
# Build context: repository root (see docker-compose.yml)

FROM node:22-alpine AS build
RUN apk add --no-cache openssl
WORKDIR /repo
COPY package.json package-lock.json* ./
COPY apps/api/package.json apps/api/
RUN if [ -f package-lock.json ]; then npm ci -w apps/api; else npm install -w apps/api; fi
COPY apps/api apps/api
RUN npm run build -w apps/api

FROM node:22-alpine AS runtime
RUN apk add --no-cache openssl
ENV NODE_ENV=production
WORKDIR /repo
# Keep dev deps: the Prisma CLI runs migrations and tsx runs the idempotent seed at start-up.
COPY --from=build --chown=node:node /repo /repo
WORKDIR /repo/apps/api
RUN chmod +x docker-entrypoint.sh
USER node
EXPOSE 4000
ENTRYPOINT ["./docker-entrypoint.sh"]
