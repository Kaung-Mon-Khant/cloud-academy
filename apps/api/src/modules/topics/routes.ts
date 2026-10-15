import type { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { notFound, parse } from '../../lib/http.js';

export const providerSchema = z.enum(['AZURE', 'AWS']);

const listQuery = z.object({ provider: providerSchema.optional() });

export const topicRoutes: FastifyPluginAsync = async (app) => {
  app.get('/', async (req) => {
    const { provider } = parse(listQuery, req.query);
    const topics = await app.prisma.topic.findMany({
      where: provider ? { provider } : undefined,
      orderBy: [{ provider: 'asc' }, { order: 'asc' }],
      include: { _count: { select: { questions: true, flashcards: true } } },
    });
    return {
      topics: topics.map(({ _count, ...t }) => ({
        ...t,
        questionCount: _count.questions,
        flashcardCount: _count.flashcards,
      })),
    };
  });

  app.get<{ Params: { slug: string } }>('/:slug', async (req) => {
    const topic = await app.prisma.topic.findUnique({
      where: { slug: req.params.slug },
      include: { _count: { select: { questions: true, flashcards: true } } },
    });
    if (!topic) throw notFound('Topic not found');
    const { _count, ...t } = topic;
    return { topic: { ...t, questionCount: _count.questions, flashcardCount: _count.flashcards } };
  });
};
