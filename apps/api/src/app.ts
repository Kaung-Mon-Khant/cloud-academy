import Fastify, { type FastifyServerOptions } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import type { PrismaClient } from '@prisma/client';
import type { Env } from './config/env.js';
import prismaPlugin from './plugins/prisma.js';
import authPlugin from './plugins/auth.js';
import errorsPlugin from './plugins/errors.js';
import { authRoutes } from './modules/auth/routes.js';
import { topicRoutes } from './modules/topics/routes.js';
import { quizRoutes } from './modules/quiz/routes.js';
import { flashcardRoutes } from './modules/flashcards/routes.js';
import { statsRoutes } from './modules/stats/routes.js';

export type BuildOptions = { env: Env; prisma?: PrismaClient; logger?: FastifyServerOptions['logger'] };

export async function buildApp({ env, prisma, logger }: BuildOptions) {
  const app = Fastify({
    logger:
      logger ??
      (env.NODE_ENV === 'development'
        ? { level: 'info', transport: { target: 'pino-pretty', options: { translateTime: 'HH:MM:ss' } } }
        : { level: env.NODE_ENV === 'test' ? 'silent' : 'info' }),
    trustProxy: true, // behind nginx — use X-Forwarded-For for rate limiting
    bodyLimit: 64 * 1024,
  });

  await app.register(errorsPlugin);
  await app.register(helmet, { contentSecurityPolicy: false }); // JSON API; the web server sets CSP
  if (env.CORS_ORIGINS.length) {
    await app.register(cors, { origin: env.CORS_ORIGINS, credentials: true });
  }
  await app.register(rateLimit, { max: 300, timeWindow: '1 minute' });
  await app.register(prismaPlugin, { client: prisma });
  await app.register(authPlugin, { env });

  app.get('/health', async () => ({ status: 'ok' }));
  app.get('/health/ready', async (_req, reply) => {
    try {
      await app.prisma.$queryRaw`SELECT 1`;
      return { status: 'ready' };
    } catch {
      return reply.status(503).send({ status: 'database unavailable' });
    }
  });

  await app.register(
    async (api) => {
      await api.register(authRoutes, { prefix: '/auth' });
      await api.register(topicRoutes, { prefix: '/topics' });
      await api.register(quizRoutes, { prefix: '/quiz' });
      await api.register(flashcardRoutes, { prefix: '/flashcards' });
      await api.register(statsRoutes, { prefix: '/me' });
    },
    { prefix: '/api' },
  );

  return app;
}
