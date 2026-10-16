import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, CheckCircle2, Clock, ListChecks } from 'lucide-react';
import { useTopics } from '@/hooks/useTopics';
import { useAuth } from '@/hooks/useAuth';
import { EXAMS_BY_PROVIDER, useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import type { Exam, Level, Topic } from '@/lib/types';
import { usePreferences } from '@/stores/preferences';
import { Badge } from '@/components/ui/Badge';
import { buttonStyles } from '@/components/ui/Button';
import { ErrorState, Skeleton } from '@/components/ui/States';
import { TopicIcon } from '@/components/ui/TopicIcon';

const LEVELS: Level[] = ['FOUNDATIONAL', 'ASSOCIATE'];

function LessonCard({ topic, index }: { topic: Topic; index: number }) {
  const { t } = useTranslation();
  const loc = useLocalized();
  const done = Boolean(topic.lessonCompletedAt);
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.3) }}
      className={cn('panel group relative grid content-between gap-4 p-4 transition hover:-translate-y-0.5 hover:border-accent/60', done && 'border-good/40')}
    >
      <div className="grid gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-accent-soft text-accent">
            <TopicIcon name={topic.icon} className="size-[18px]" />
          </span>
          <div className="flex flex-wrap justify-end gap-1">
            {topic.exams.map((e) => (
              <Badge key={e} className="font-mono text-[10.5px]">
                {e}
              </Badge>
            ))}
          </div>
        </div>
        <h3 className="text-base leading-snug font-bold">
          <Link to={`/learn/${topic.slug}`} className="after:absolute after:inset-0">
            <span className="mr-1.5 font-mono text-xs text-ink-3">{String(index + 1).padStart(2, '0')}</span>
            {loc(topic.name)}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-ink-2">{loc(topic.description)}</p>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-3 text-xs text-ink-3">
        {topic.lesson && (
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden /> {t('learn.minutes', { count: topic.lesson.minutes })}
          </span>
        )}
        <span className="flex items-center gap-1">
          <ListChecks className="size-3.5" aria-hidden /> {t('learn.questions', { count: topic.questionCount })}
        </span>
        {done ? (
          <span className="ml-auto flex items-center gap-1 font-medium text-good">
            <CheckCircle2 className="size-3.5" aria-hidden /> {t('learn.completed')}
          </span>
        ) : (
          <span className="ml-auto flex items-center gap-1 font-medium text-accent">
            {t('learn.start')} <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden />
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function LearnPage() {
  const { t } = useTranslation();
  const provider = usePreferences((s) => s.provider);
  const topics = useTopics();
  const { user } = useAuth();
  const [exam, setExam] = useState<Exam | ''>('');
  const cloud = provider === 'AZURE' ? 'Azure' : 'AWS';

  const list = useMemo(() => (topics.data ?? []).filter((tp) => !exam || tp.exams.includes(exam)), [topics.data, exam]);
  const withLesson = (topics.data ?? []).filter((tp) => tp.lesson);
  const done = withLesson.filter((tp) => tp.lessonCompletedAt).length;
  const next = withLesson.find((tp) => !tp.lessonCompletedAt) ?? withLesson[0];

  return (
    <div className="grid gap-8">
      <header className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="grid gap-2">
          <p className="eyebrow">{t('learn.eyebrow', { cloud })}</p>
          <h1 className="text-2xl font-extrabold sm:text-3xl">{t('learn.title')}</h1>
          <p className="max-w-2xl text-ink-2">{t('learn.subtitle')}</p>
        </div>
        {withLesson.length > 0 && (
          <div className="panel grid min-w-64 gap-2 p-4">
            <p className="text-sm font-medium">
              {user ? t('learn.progress', { done, total: withLesson.length }) : t('learn.signInToTrack')}
            </p>
            <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
              <motion.div className="h-full rounded-full bg-accent" initial={{ width: 0 }} animate={{ width: `${(done / withLesson.length) * 100}%` }} />
            </div>
            {next && (
              <Link to={`/learn/${next.slug}`} className={buttonStyles('primary', 'sm', 'mt-1 justify-self-start')}>
                <BookOpen className="size-4" aria-hidden /> {t('home.startLearning')}
              </Link>
            )}
          </div>
        )}
      </header>

      <div className="flex flex-wrap gap-2" role="group" aria-label={t('quiz.exam')}>
        {(['', ...EXAMS_BY_PROVIDER[provider]] as const).map((e) => (
          <button
            key={e || 'all'}
            type="button"
            aria-pressed={exam === e}
            onClick={() => setExam(e)}
            className={cn(
              'h-8 rounded-lg border px-3 font-mono text-xs font-medium transition',
              exam === e ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-surface text-ink-2 hover:border-ink-3',
            )}
          >
            {e || t('learn.allExams')}
          </button>
        ))}
      </div>

      {topics.isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      ) : topics.isError ? (
        <ErrorState error={topics.error} onRetry={() => void topics.refetch()} />
      ) : (
        LEVELS.map((level) => {
          const items = list.filter((tp) => tp.level === level);
          if (!items.length) return null;
          return (
            <section key={level} className="grid gap-3" aria-labelledby={`lvl-${level}`}>
              <h2 id={`lvl-${level}`} className="flex items-center gap-2 text-sm font-bold tracking-wide text-ink-2 uppercase">
                <span className={cn('size-2 rounded-full', level === 'FOUNDATIONAL' ? 'bg-good' : 'bg-warn')} />
                {t(`learn.${level}`)}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((tp) => (
                  <LessonCard key={tp.slug} topic={tp} index={(topics.data ?? []).indexOf(tp)} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
