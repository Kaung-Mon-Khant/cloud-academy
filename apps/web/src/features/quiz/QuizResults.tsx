import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Cloud, RotateCcw, Settings2, XCircle } from 'lucide-react';
import { useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import type { QuizQuestion, SubmitResult } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { formatDuration } from './QuizPlayer';

export function QuizResults({
  questions,
  result,
  durationS,
  onRetry,
  onNew,
}: {
  questions: QuizQuestion[];
  result: SubmitResult;
  durationS: number;
  onRetry: () => void;
  onNew: () => void;
}) {
  const { t } = useTranslation();
  const loc = useLocalized();
  const ratio = result.total ? result.score / result.total : 0;
  const byId = new Map(questions.map((q) => [q.id, q]));
  const verdict = ratio >= 0.8 ? 'great' : ratio >= 0.5 ? 'good' : 'keepGoing';

  return (
    <div className="grid gap-8">
      <section className="panel grid items-center gap-8 p-6 sm:grid-cols-[auto_1fr] sm:p-10">
        <ProgressRing value={ratio} size={148} stroke={12} />
        <div className="grid gap-3">
          <p className="eyebrow">{t('quiz.resultsTitle')}</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t(`quiz.verdict.${verdict}`)}</h2>
          <p className="text-ink-2">{t('quiz.score', { score: result.score, total: result.total })}</p>
          <div className="flex flex-wrap gap-4 text-sm text-ink-2">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden /> {formatDuration(durationS)}
            </span>
            <span className={cn('flex items-center gap-1.5', result.saved ? 'text-good' : 'text-ink-3')}>
              <Cloud className="size-4" aria-hidden />
              {result.saved ? t('quiz.saved') : (
                <>
                  {t('quiz.notSaved')}{' '}
                  <Link to="/register" className="font-medium text-accent underline-offset-4 hover:underline">
                    {t('auth.createAccount')}
                  </Link>
                </>
              )}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button onClick={onRetry}>
              <RotateCcw className="size-4" aria-hidden /> {t('quiz.retry')}
            </Button>
            <Button variant="outline" onClick={onNew}>
              <Settings2 className="size-4" aria-hidden /> {t('quiz.newQuiz')}
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        <h3 className="text-lg font-bold">{t('quiz.review')}</h3>
        {result.results.map((r, i) => {
          const q = byId.get(r.questionId);
          if (!q) return null;
          const text = (ids: string[]) => q.options.filter((o) => ids.includes(o.id)).map((o) => o.text).join(', ') || '—';
          return (
            <motion.details
              key={r.questionId}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.04, 0.4) }}
              className="panel group p-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3">
                {r.correct ? <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-good" aria-label={t('quiz.correct')} /> : <XCircle className="mt-0.5 size-5 shrink-0 text-bad" aria-label={t('quiz.incorrect')} />}
                <span className="flex-1 font-medium">{loc(q.prompt)}</span>
              </summary>
              <div className="mt-3 grid gap-2 pl-8 text-sm">
                <p>
                  <span className="text-ink-3">{t('quiz.yourAnswer')}: </span>
                  <span className={r.correct ? 'text-good' : 'text-bad'}>{text(r.selectedOptionIds)}</span>
                </p>
                {!r.correct && (
                  <p>
                    <span className="text-ink-3">{t('quiz.correctAnswer')}: </span>
                    <span className="text-good">{text(r.correctOptionIds)}</span>
                  </p>
                )}
                <p className="text-ink-2">{loc(r.explanation)}</p>
              </div>
            </motion.details>
          );
        })}
      </section>
    </div>
  );
}
