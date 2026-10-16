import type { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { notFound, parse } from '../../lib/http.js';

export const providerSchema = z.enum(['AZURE', 'AWS']);

const listQuery = z.object({ provider: providerSchema.optional() });

type LessonMeta = { minutes?: number; sections?: { id: string; title: unknown }[] };

/** Lightweight lesson info for lists — the full lesson body is only sent by GET /:slug/lesson. */
function lessonMeta(lesson: unknown) {
  const l = (lesson ?? null) as LessonMeta | null;
  return l?.sections?.length ? { minutes: l.minutes ?? 0, sections: l.sections.length } : null;
}

export const topicRoutes: FastifyPluginAsync = async (app) => {
  app.get('/', { preHandler: app.optionalAuth }, async (req) => {
    const { provider } = parse(listQuery, req.query);
    const [topics, done] = await Promise.all([
      app.prisma.topic.findMany({
        where: provider ? { provider } : undefined,
        orderBy: [{ provider: 'asc' }, { order: 'asc' }],
        include: { _count: { select: { questions: true, flashcards: true } } },
      }),
      req.userId
        ? app.prisma.lessonProgress.findMany({ where: { userId: req.userId }, select: { topicId: true, completedAt: true } })
        : Promise.resolve([]),
    ]);
    const completed = new Map(done.map((d) => [d.topicId, d.completedAt]));
    return {
      topics: topics.map(({ _count, lesson, ...t }) => ({
        ...t,
        lesson: lessonMeta(lesson),
        lessonCompletedAt: completed.get(t.id) ?? null,
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
    const { _count, lesson, ...t } = topic;
    return {
      topic: { ...t, lesson: lessonMeta(lesson), questionCount: _count.questions, flashcardCount: _count.flashcards },
    };
  });

  /** Full lesson body + neighbours in the learning path for prev/next navigation. */
  app.get<{ Params: { slug: string } }>('/:slug/lesson', { preHandler: app.optionalAuth }, async (req) => {
    const topic = await app.prisma.topic.findUnique({
      where: { slug: req.params.slug },
      include: { _count: { select: { questions: true, flashcards: true } } },
    });
    if (!topic || !topic.lesson) throw notFound('Lesson not found');

    const [siblings, progress] = await Promise.all([
      app.prisma.topic.findMany({
        where: { provider: topic.provider },
        orderBy: { order: 'asc' },
        select: { slug: true, name: true, order: true },
      }),
      req.userId
        ? app.prisma.lessonProgress.findUnique({ where: { userId_topicId: { userId: req.userId, topicId: topic.id } } })
        : Promise.resolve(null),
    ]);
    const idx = siblings.findIndex((s) => s.slug === topic.slug);
    const { _count, ...t } = topic;
    return {
      topic: { ...t, questionCount: _count.questions, flashcardCount: _count.flashcards },
      completedAt: progress?.completedAt ?? null,
      prev: idx > 0 ? siblings[idx - 1] : null,
      next: idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null,
    };
  });

  /** Mark / unmark a lesson as read (signed-in learners). */
  app.put<{ Params: { slug: string } }>('/:slug/progress', { preHandler: app.authenticate }, async (req) => {
    const topic = await app.prisma.topic.findUnique({ where: { slug: req.params.slug }, select: { id: true } });
    if (!topic) throw notFound('Topic not found');
    const row = await app.prisma.lessonProgress.upsert({
      where: { userId_topicId: { userId: req.userId!, topicId: topic.id } },
      create: { userId: req.userId!, topicId: topic.id },
      update: {},
    });
    return { completedAt: row.completedAt };
  });

  app.delete<{ Params: { slug: string } }>('/:slug/progress', { preHandler: app.authenticate }, async (req, reply) => {
    const topic = await app.prisma.topic.findUnique({ where: { slug: req.params.slug }, select: { id: true } });
    if (!topic) throw notFound('Topic not found');
    await app.prisma.lessonProgress.deleteMany({ where: { userId: req.userId!, topicId: topic.id } });
    return reply.status(204).send();
  });
};
