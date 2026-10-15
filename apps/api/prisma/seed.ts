/**
 * Idempotent seed: upserts topics, questions (with options) and flashcards by stable keys.
 * Safe to run on every deploy — user data (attempts, reviews) is never touched.
 */
import { PrismaClient, type Provider } from '@prisma/client';
import { azureTopics } from './data/azure.js';
import { awsTopics } from './data/aws.js';
import type { SeedTopic } from './data/types.js';

const prisma = new PrismaClient();

function validate(topic: SeedTopic) {
  topic.questions.forEach((q, i) => {
    if (q.options.length < 2) throw new Error(`${topic.slug}#${i}: needs ≥2 options`);
    if (q.correct.length === 0) throw new Error(`${topic.slug}#${i}: needs a correct option`);
    if (q.correct.some((c) => c < 0 || c >= q.options.length))
      throw new Error(`${topic.slug}#${i}: correct index out of range`);
  });
}

async function seedProvider(provider: Provider, topics: SeedTopic[]) {
  for (const [order, t] of topics.entries()) {
    validate(t);
    const topic = await prisma.topic.upsert({
      where: { slug: t.slug },
      create: { slug: t.slug, provider, order, icon: t.icon, name: t.name, description: t.description },
      update: { provider, order, icon: t.icon, name: t.name, description: t.description },
    });

    for (const [i, q] of t.questions.entries()) {
      const key = `${t.slug}-q${String(i + 1).padStart(2, '0')}`;
      const data = {
        topicId: topic.id,
        difficulty: q.difficulty,
        multiple: q.correct.length > 1,
        prompt: q.prompt,
        explanation: q.explanation,
      };
      // Sync options by position so option IDs stay stable across re-seeds
      // (saved quiz attempts reference them).
      await prisma.$transaction(async (tx) => {
        const question = await tx.question.upsert({
          where: { key },
          create: { key, ...data },
          update: data,
        });
        const existing = await tx.option.findMany({
          where: { questionId: question.id },
          orderBy: { order: 'asc' },
        });
        for (const [order, text] of q.options.entries()) {
          const isCorrect = q.correct.includes(order);
          const current = existing[order];
          if (current) {
            await tx.option.update({ where: { id: current.id }, data: { order, text, isCorrect } });
          } else {
            await tx.option.create({ data: { questionId: question.id, order, text, isCorrect } });
          }
        }
        const extra = existing.slice(q.options.length).map((o) => o.id);
        if (extra.length) await tx.option.deleteMany({ where: { id: { in: extra } } });
      });
    }

    for (const [i, f] of t.flashcards.entries()) {
      const key = `${t.slug}-f${String(i + 1).padStart(2, '0')}`;
      const data = { topicId: topic.id, term: f.term, definition: f.definition, example: f.example ?? undefined };
      await prisma.flashcard.upsert({ where: { key }, create: { key, ...data }, update: data });
    }
  }
}

async function main() {
  await seedProvider('AZURE', azureTopics);
  await seedProvider('AWS', awsTopics);
  const [topics, questions, cards] = await Promise.all([
    prisma.topic.count(),
    prisma.question.count(),
    prisma.flashcard.count(),
  ]);
  console.log(`✔ Seeded ${topics} topics, ${questions} questions, ${cards} flashcards`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
