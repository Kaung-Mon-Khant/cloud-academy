import type { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { notFound, parse, unauthorized } from '../../lib/http.js';
import { INITIAL_STATE, schedule } from '../../lib/sm2.js';
import { providerSchema } from '../topics/routes.js';

const listQuery = z.object({
  provider: providerSchema,
  topic: z.string().max(80).optional(),
  mode: z.enum(['all', 'due']).default('all'),
  limit: z.coerce.number().int().min(1).max(200).default(100),
});

const reviewBody = z.object({ rating: z.enum(['again', 'hard', 'good', 'easy']) });

export const flashcardRoutes: FastifyPluginAsync = async (app) => {
  app.get('/', { preHandler: app.optionalAuth }, async (req) => {
    const q = parse(listQuery, req.query);
    if (q.mode === 'due' && !req.userId) throw unauthorized('Sign in to review due cards');
    const now = new Date();

    const cards = await app.prisma.flashcard.findMany({
      where: {
        topic: { provider: q.provider, ...(q.topic ? { slug: q.topic } : {}) },
        ...(q.mode === 'due' && req.userId
          ? {
              OR: [
                { reviews: { none: { userId: req.userId } } },
                { reviews: { some: { userId: req.userId, dueAt: { lte: now } } } },
              ],
            }
          : {}),
      },
      include: {
        topic: { select: { slug: true, name: true, order: true } },
        // Guests get an empty array (no user can have an empty id).
        reviews: {
          where: { userId: req.userId ?? '' },
          select: { ease: true, interval: true, repetitions: true, dueAt: true },
        },
      },
      orderBy: [{ topic: { order: 'asc' } }, { key: 'asc' }],
      take: q.limit,
    });

    return {
      cards: cards.map(({ reviews, ...c }) => ({
        ...c,
        review: reviews[0] ?? null,
      })),
    };
  });

  app.post<{ Params: { id: string } }>('/:id/review', { preHandler: app.authenticate }, async (req) => {
    const { rating } = parse(reviewBody, req.body);
    const userId = req.userId!;
    const card = await app.prisma.flashcard.findUnique({ where: { id: req.params.id }, select: { id: true } });
    if (!card) throw notFound('Flashcard not found');

    const where = { userId_flashcardId: { userId, flashcardId: card.id } };
    const prev = await app.prisma.flashcardReview.findUnique({ where });
    const next = schedule(prev ?? INITIAL_STATE, rating);
    const data = {
      ease: next.ease,
      interval: next.interval,
      repetitions: next.repetitions,
      dueAt: next.dueAt,
      lastGrade: next.quality,
      reviewedAt: new Date(),
    };
    const review = await app.prisma.flashcardReview.upsert({
      where,
      create: { userId, flashcardId: card.id, ...data },
      update: data,
      select: { ease: true, interval: true, repetitions: true, dueAt: true },
    });
    return { review };
  });
};
