import type { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { parse } from '../../lib/http.js';

const statsQuery = z.object({
  tz: z
    .string()
    .max(64)
    .default('UTC')
    .refine((tz) => {
      try {
        new Intl.DateTimeFormat('en-CA', { timeZone: tz });
        return true;
      } catch {
        return false;
      }
    }, 'Unknown time zone'),
});

type StoredAnswer = { questionId: string; correct: boolean };

/** Consecutive days (ending today or yesterday) with at least one activity. */
export function computeStreak(days: Set<string>, today: string): number {
  const toDate = (s: string) => new Date(`${s}T00:00:00Z`);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  let cursor = toDate(today);
  if (!days.has(today)) {
    cursor = new Date(cursor.getTime() - 86_400_000);
    if (!days.has(fmt(cursor))) return 0;
  }
  let streak = 0;
  while (days.has(fmt(cursor))) {
    streak++;
    cursor = new Date(cursor.getTime() - 86_400_000);
  }
  return streak;
}

export const statsRoutes: FastifyPluginAsync = async (app) => {
  app.get('/stats', { preHandler: app.authenticate }, async (req) => {
    const { tz } = parse(statsQuery, req.query);
    const userId = req.userId!;
    const now = new Date();
    const dayOf = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' });

    const [attempts, reviewCount, dueCount, mastered, reviewDates] = await Promise.all([
      app.prisma.quizAttempt.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 200,
        select: { id: true, provider: true, topicSlug: true, score: true, total: true, durationS: true, answers: true, createdAt: true },
      }),
      app.prisma.flashcardReview.count({ where: { userId } }),
      app.prisma.flashcardReview.count({ where: { userId, dueAt: { lte: now } } }),
      app.prisma.flashcardReview.count({ where: { userId, interval: { gte: 21 } } }),
      app.prisma.flashcardReview.findMany({
        where: { userId, reviewedAt: { gte: new Date(now.getTime() - 400 * 86_400_000) } },
        select: { reviewedAt: true },
      }),
    ]);

    // Per-topic accuracy from individual answers
    const answers = attempts.flatMap((a) => (a.answers as StoredAnswer[] | null) ?? []);
    const questionTopics = await app.prisma.question.findMany({
      where: { id: { in: [...new Set(answers.map((a) => a.questionId))] } },
      select: { id: true, topic: { select: { slug: true, provider: true, name: true } } },
    });
    const topicOf = new Map(questionTopics.map((q) => [q.id, q.topic]));
    const perTopic = new Map<string, { slug: string; provider: string; name: unknown; correct: number; total: number }>();
    for (const a of answers) {
      const t = topicOf.get(a.questionId);
      if (!t) continue;
      const row = perTopic.get(t.slug) ?? { slug: t.slug, provider: t.provider, name: t.name, correct: 0, total: 0 };
      row.total++;
      if (a.correct) row.correct++;
      perTopic.set(t.slug, row);
    }

    const activeDays = new Set<string>([
      ...attempts.map((a) => dayOf.format(a.createdAt)),
      ...reviewDates.map((r) => dayOf.format(r.reviewedAt)),
    ]);
    const totalQuestions = attempts.reduce((s, a) => s + a.total, 0);
    const totalCorrect = attempts.reduce((s, a) => s + a.score, 0);

    return {
      quizzes: {
        attempts: attempts.length,
        questionsAnswered: totalQuestions,
        accuracy: totalQuestions ? totalCorrect / totalQuestions : 0,
        bestScore: attempts.reduce((best, a) => Math.max(best, a.total ? a.score / a.total : 0), 0),
      },
      flashcards: { reviewed: reviewCount, due: dueCount, mastered },
      streak: computeStreak(activeDays, dayOf.format(now)),
      activity: [...activeDays].sort(),
      topics: [...perTopic.values()].sort((a, b) => a.correct / a.total - b.correct / b.total),
      recent: attempts.slice(0, 8).map(({ answers: _a, ...rest }) => rest),
    };
  });
};
