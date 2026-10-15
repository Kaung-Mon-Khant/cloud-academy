import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export default fp<{ client?: PrismaClient }>(
  async (app, opts) => {
    const prisma = opts.client ?? new PrismaClient();
    if (!opts.client) await prisma.$connect();
    app.decorate('prisma', prisma);
    app.addHook('onClose', async () => {
      if (!opts.client) await prisma.$disconnect();
    });
  },
  { name: 'prisma' },
);
