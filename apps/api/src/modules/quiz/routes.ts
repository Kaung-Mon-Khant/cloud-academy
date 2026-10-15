import type { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { badRequest, parse } from '../../lib/http.js';
import { grade, shuffle } from '../../lib/grading.js';
import { providerSchema } from '../topics/routes.js';

const questionsQuery = z.object({
  provider: providerSchema,
  topic: z.string().max(80).optional(),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']).optional(),
  limit: z.coerce.number().int().min(1).max(50).default(10),
});

const submitBody = z.object({
  provider: providerSchema,
  topicSlug: z.string().max(80).nullish(),
  durationS: z.number().int().min(0).max(24 * 3600),
  answers: z
    .array(
      z.object({
        questionId: z.string().min(1).max(40),
        optionIds: z.array(z.string().min(1).max(40)).max(10),
      }),
    )
    .min(1)
    .max(50),
});

const checkBody = z.object({
  questionId: z.string().min(1).max(40),
  optionIds: z.array(z.string().min(1).max(40)).max(10),
});

export const quizRoutes: FastifyPluginAsync = async (app) => {
  /** Random set of questions. Correct answers are never sent to the client. */
  app.get('/questions', async (req) => {
    const q = parse(questionsQuery, req.query);
    const where: Prisma.QuestionWhereInput = {
      topic: { provider: q.provider, ...(q.topic ? { slug: q.topic } : {}) },
      ...(q.difficulty ? { difficulty: q.difficulty } : {}),
    };
    const ids = await app.prisma.question.findMany({ where, select: { id: true } });
    const picked = shuffle(ids.map((r) => r.id)).slice(0, q.limit);

    const rows = await app.prisma.question.findMany({
      where: { id: { in: picked } },
      include: {
        topic: { select: { slug: true, name: true } },
        options: { select: { id: true, text: true }, orderBy: { order: 'asc' } },
      },
    });
    const byId = new Map(rows.map((r) => [r.id, r]));
    return {
      questions: picked
        .map((id) => byId.get(id))
        .filter((r): r is NonNullable<typeof r> => Boolean(r))
        .map((r) => ({
          id: r.id,
          difficulty: r.difficulty,
          multiple: r.multiple,
          prompt: r.prompt,
          topic: r.topic,
          options: shuffle(r.options),
        })),
    };
  });

  /** Instant feedback for one answered question (nothing is saved). */
  app.post('/check', async (req) => {
    const body = parse(checkBody, req.body);
    const question = await app.prisma.question.findUnique({
      where: { id: body.questionId },
      select: { id: true, explanation: true, options: { select: { id: true, isCorrect: true } } },
    });
    if (!question) throw badRequest('Unknown question');
    const [result] = grade([question], [body]).results;
    return { result };
  });

  /** Server-side grading of the whole quiz. Saves the attempt when the learner is signed in. */
  app.post('/submit', { preHandler: app.optionalAuth }, async (req) => {
    const body = parse(submitBody, req.body);
    const ids = [...new Set(body.answers.map((a) => a.questionId))];
    if (ids.length !== body.answers.length) throw badRequest('Duplicate question in answers');

    const questions = await app.prisma.question.findMany({
      where: { id: { in: ids }, topic: { provider: body.provider } },
      select: { id: true, explanation: true, options: { select: { id: true, isCorrect: true } } },
    });
    if (questions.length !== ids.length) throw badRequest('Answers contain unknown questions');

    const result = grade(questions, body.answers);

    let attemptId: string | null = null;
    if (req.userId) {
      const attempt = await app.prisma.quizAttempt.create({
        data: {
          userId: req.userId,
          provider: body.provider,
          topicSlug: body.topicSlug ?? null,
          score: result.score,
          total: result.total,
          durationS: body.durationS,
          answers: result.results.map((r) => ({
            questionId: r.questionId,
            optionIds: r.selectedOptionIds,
            correct: r.correct,
          })),
        },
        select: { id: true },
      });
      attemptId = attempt.id;
    }

    return { ...result, attemptId, saved: attemptId !== null };
  });
};
