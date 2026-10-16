import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, CheckCircle2, Clock, Lightbulb, XCircle } from 'lucide-react';
import { api } from '@/lib/api';
import { useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import type { GradedAnswer, QuizQuestion } from '@/lib/types';
import { useHotkeys } from '@/hooks/useHotkeys';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Kbd } from '@/components/ui/States';

export type QuizAnswers = Record<string, string[]>;

const LETTERS = 'ABCDEFGHIJ';
const difficultyTone = { EASY: 'good', MEDIUM: 'warn', HARD: 'bad' } as const;

export function formatDuration(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function QuizPlayer({
  questions,
  onFinish,
  finishing,
}: {
  questions: QuizQuestion[];
  onFinish: (answers: QuizAnswers, durationS: number) => void;
  finishing: boolean;
}) {
  const { t } = useTranslation();
  const loc = useLocalized();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [graded, setGraded] = useState<Record<string, GradedAnswer>>({});
  const [startedAt] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 1000);
    return () => clearInterval(id);
  }, [startedAt]);

  const q = questions[index]!;
  const selected = answers[q.id] ?? [];
  const result = graded[q.id];
  const isLast = index === questions.length - 1;

  const check = useMutation({
    mutationFn: () => api.checkAnswer({ questionId: q.id, optionIds: selected }),
    onSuccess: ({ result: r }) => setGraded((g) => ({ ...g, [q.id]: r })),
  });

  const toggle = (optionId: string) => {
    if (result) return;
    setAnswers((a) => {
      const cur = a[q.id] ?? [];
      const next = q.multiple
        ? cur.includes(optionId)
          ? cur.filter((id) => id !== optionId)
          : [...cur, optionId]
        : [optionId];
      return { ...a, [q.id]: next };
    });
  };

  const advance = () => {
    if (!result) {
      if (selected.length) check.mutate();
      return;
    }
    if (isLast) onFinish(answers, Math.floor((Date.now() - startedAt) / 1000));
    else setIndex((i) => i + 1);
  };

  useHotkeys({
    ...Object.fromEntries(q.options.map((o, i) => [String(i + 1), () => toggle(o.id)])),
    Enter: advance,
  });

  const correctCount = Object.values(graded).filter((g) => g.correct).length;

  return (
    <div className="grid gap-6">
      {/* Progress */}
      <div className="flex items-center gap-4">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={index + 1}>
          <motion.div className="h-full rounded-full bg-accent" animate={{ width: `${((index + (result ? 1 : 0)) / questions.length) * 100}%` }} transition={{ ease: [0.2, 0.9, 0.25, 1] }} />
        </div>
        <span className="font-mono text-sm text-ink-2 tabular-nums">
          {index + 1}/{questions.length}
        </span>
        <span className="flex items-center gap-1 font-mono text-sm text-ink-2 tabular-nums">
          <Clock className="size-3.5" aria-hidden />
          {formatDuration(elapsed)}
        </span>
        <span className="flex items-center gap-1 font-mono text-sm text-good tabular-nums" title={t('quiz.correct')}>
          <CheckCircle2 className="size-3.5" aria-hidden />
          {correctCount}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={q.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.22, ease: [0.2, 0.9, 0.25, 1] }}
          className="panel grid gap-5 p-5 sm:p-6"
        >
          <header className="grid gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">{loc(q.topic.name)}</Badge>
              <Badge tone={difficultyTone[q.difficulty]}>{t(`quiz.${q.difficulty.toLowerCase()}`)}</Badge>
              {q.multiple && <Badge>{t('quiz.selectAll')}</Badge>}
              {q.exams.map((e) => (
                <Badge key={e} className="font-mono text-[10.5px]">
                  {e}
                </Badge>
              ))}
            </div>
            <h2 className="text-lg leading-snug font-bold sm:text-xl">{loc(q.prompt)}</h2>
          </header>

          <div className="grid gap-3" role={q.multiple ? 'group' : 'radiogroup'}>
            {q.options.map((o, i) => {
              const isSel = selected.includes(o.id);
              const isRight = result?.correctOptionIds.includes(o.id);
              const state = result ? (isRight ? 'right' : isSel ? 'wrong' : 'idle') : isSel ? 'selected' : 'idle';
              return (
                <motion.button
                  key={o.id}
                  type="button"
                  role={q.multiple ? 'checkbox' : 'radio'}
                  aria-checked={isSel}
                  disabled={Boolean(result)}
                  onClick={() => toggle(o.id)}
                  whileTap={result ? undefined : { scale: 0.985 }}
                  animate={state === 'wrong' ? { x: [0, -6, 6, -3, 0] } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'group flex items-center gap-4 rounded-xl border-2 px-4 py-3 text-left transition-colors',
                    state === 'idle' && 'border-line bg-surface hover:border-ink-3',
                    state === 'selected' && 'border-accent bg-accent-soft',
                    state === 'right' && 'border-good bg-good-soft',
                    state === 'wrong' && 'border-bad bg-bad-soft',
                    result && state === 'idle' && 'opacity-60',
                  )}
                >
                  <span
                    className={cn(
                      'grid size-8 shrink-0 place-items-center font-mono text-sm font-semibold',
                      q.multiple ? 'rounded-md' : 'rounded-full',
                      state === 'selected' ? 'bg-accent text-accent-ink' : state === 'right' ? 'bg-good text-white' : state === 'wrong' ? 'bg-bad text-white' : 'bg-surface-2 text-ink-2',
                    )}
                  >
                    {state === 'right' ? <CheckCircle2 className="size-4" /> : state === 'wrong' ? <XCircle className="size-4" /> : LETTERS[i]}
                  </span>
                  <span className="flex-1 font-medium">{o.text}</span>
                  <span className="hidden sm:block">
                    <Kbd>{i + 1}</Kbd>
                  </span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={cn('overflow-hidden rounded-xl border-l-4 p-4', result.correct ? 'border-good bg-good-soft' : 'border-bad bg-bad-soft')}
                role="status"
              >
                <p className={cn('mb-1 flex items-center gap-2 font-semibold', result.correct ? 'text-good' : 'text-bad')}>
                  {result.correct ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
                  {result.correct ? t('quiz.correct') : t('quiz.incorrect')}
                </p>
                <p className="flex gap-2 text-sm leading-relaxed text-ink">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-warn" aria-hidden />
                  {loc(result.explanation)}
                </p>
                {!result.correct && (
                  <Link to={`/learn/${q.topic.slug}`} target="_blank" className="mt-2 ml-6 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline">
                    <BookOpen className="size-3.5" aria-hidden /> {t('quiz.reviewLesson')}
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {check.isError && <p className="text-sm text-bad">{(check.error as Error).message}</p>}

          <footer className="flex flex-wrap items-center justify-between gap-3">
            <p className="hidden items-center gap-2 text-xs text-ink-3 sm:flex">
              <Kbd>1</Kbd>–<Kbd>{q.options.length}</Kbd> {t('quiz.keySelect')} · <Kbd>Enter</Kbd> {t('quiz.keyNext')}
            </p>
            <Button size="lg" onClick={advance} disabled={!result && selected.length === 0} loading={check.isPending || finishing} className="ml-auto">
              {!result ? t('quiz.check') : isLast ? t('quiz.finish') : t('quiz.next')}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </footer>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
