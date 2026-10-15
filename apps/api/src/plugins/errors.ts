import fp from 'fastify-plugin';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import { HttpError } from '../lib/http.js';

/** Consistent JSON error shape: { error: { code, message, details? } } */
export default fp(
  async (app) => {
    app.setErrorHandler((err, req, reply) => {
      if (err instanceof ZodError) {
        return reply.status(400).send({
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid request',
            details: err.issues.map((i) => ({ path: i.path.join('.'), message: i.message })),
          },
        });
      }
      if (err instanceof HttpError) {
        return reply.status(err.statusCode).send({ error: { code: err.code, message: err.message } });
      }
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
        return reply.status(404).send({ error: { code: 'NOT_FOUND', message: 'Not found' } });
      }
      const status = (err as { statusCode?: number }).statusCode;
      if (status && status >= 400 && status < 500) {
        // Fastify / plugin errors (rate limit, bad JSON body, …)
        return reply.status(status).send({ error: { code: 'REQUEST_ERROR', message: err.message } });
      }
      req.log.error({ err }, 'Unhandled error');
      return reply.status(500).send({ error: { code: 'INTERNAL', message: 'Something went wrong' } });
    });

    app.setNotFoundHandler((req, reply) => {
      reply.status(404).send({ error: { code: 'NOT_FOUND', message: `Route ${req.method} ${req.url} not found` } });
    });
  },
  { name: 'errors' },
);
