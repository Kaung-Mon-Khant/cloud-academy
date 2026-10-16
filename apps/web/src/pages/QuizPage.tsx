import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { api } from '@/lib/api';
import type { QuizQuestion, SubmitResult } from '@/lib/types';
import { usePreferences } from '@/stores/preferences';
import { QuizSetup, type QuizConfig } from '@/features/quiz/QuizSetup';
import { QuizPlayer, type QuizAnswers } from '@/features/quiz/QuizPlayer';
import { QuizResults } from '@/features/quiz/QuizResults';
import { EmptyState, ErrorState, Skeleton } from '@/components/ui/States';
import { Button } from '@/components/ui/Button';

type Phase =
  | { name: 'setup' }
  | { name: 'loading'; config: QuizConfig }
  | { name: 'playing'; config: QuizConfig; questions: QuizQuestion[]; round: number }
  | { name: 'done'; config: QuizConfig; questions: QuizQuestion[]; result: SubmitResult; durationS: number };

export function QuizPage() {
  const { t } = useTranslation();
  const qc = useQueryClient();
  const provider = usePreferences((s) => s.provider);
  const [params] = useSearchParams();
  const [phase, setPhase] = useState<Phase>({ name: 'setup' });

  // Switching cloud mid-quiz would mix providers — go back to setup.
  useEffect(() => {
    setPhase({ name: 'setup' });
  }, [provider]);

  const load = useMutation({
    mutationFn: (config: QuizConfig) => api.quizQuestions({ provider, ...config }),
    onSuccess: ({ questions }, config) => setPhase({ name: 'playing', config, questions, round: Date.now() }),
  });

  const submit = useMutation({
    mutationFn: (v: { config: QuizConfig; questions: QuizQuestion[]; answers: QuizAnswers; durationS: number }) =>
      api.submitQuiz({
        provider,
        topicSlug: v.config.topic ?? null,
        durationS: v.durationS,
        answers: v.questions.map((q) => ({ questionId: q.id, optionIds: v.answers[q.id] ?? [] })),
      }),
    onSuccess: (result, v) => {
      setPhase({ name: 'done', config: v.config, questions: v.questions, result, durationS: v.durationS });
      if (result.saved) void qc.invalidateQueries({ queryKey: ['stats'] });
    },
  });

  const start = (config: QuizConfig) => {
    setPhase({ name: 'loading', config });
    load.mutate(config);
  };

  return (
    <div className="mx-auto grid max-w-3xl gap-8">
      <header className="grid gap-2">
        <p className="eyebrow">{provider === 'AZURE' ? 'az quiz start' : 'aws quiz start'}</p>
        <h1 className="text-2xl font-extrabold sm:text-3xl">{t('quiz.title')}</h1>
        <p className="text-ink-2">{t('quiz.subtitle')}</p>
      </header>

      {phase.name === 'setup' && <QuizSetup initialTopic={params.get('topic') ?? undefined} onStart={start} />}

      {phase.name === 'loading' &&
        (load.isError ? (
          <ErrorState error={load.error} onRetry={() => load.mutate(phase.config)} />
        ) : (
          <Skeleton className="h-[28rem]" />
        ))}

      {phase.name === 'playing' &&
        (phase.questions.length === 0 ? (
          <EmptyState
            title={t('quiz.noQuestions')}
            action={
              <Button variant="outline" onClick={() => setPhase({ name: 'setup' })}>
                {t('quiz.newQuiz')}
              </Button>
            }
          />
        ) : (
          <>
            <QuizPlayer
              key={phase.round}
              questions={phase.questions}
              finishing={submit.isPending}
              onFinish={(answers, durationS) => submit.mutate({ config: phase.config, questions: phase.questions, answers, durationS })}
            />
            {submit.isError && <ErrorState error={submit.error} />}
          </>
        ))}

      {phase.name === 'done' && (
        <QuizResults
          questions={phase.questions}
          result={phase.result}
          durationS={phase.durationS}
          onRetry={() => start(phase.config)}
          onNew={() => setPhase({ name: 'setup' })}
        />
      )}
    </div>
  );
}
