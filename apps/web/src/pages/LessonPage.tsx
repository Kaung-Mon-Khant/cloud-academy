import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Layers, ListChecks, Sparkles, Target } from 'lucide-react';
import { api, ApiError } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import { useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import { usePreferences } from '@/stores/preferences';
import { LessonBlockView, RichText } from '@/features/learn/LessonBlocks';
import { Badge } from '@/components/ui/Badge';
import { Button, buttonStyles } from '@/components/ui/Button';
import { EmptyState, ErrorState, Skeleton } from '@/components/ui/States';
import { TopicIcon } from '@/components/ui/TopicIcon';

/** Highlights the section currently in view in the table of contents. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!ids.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -65% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function LessonPage() {
  const { slug = '' } = useParams();
  const { t } = useTranslation();
  const loc = useLocalized();
  const qc = useQueryClient();
  const { user } = useAuth();
  const setProvider = usePreferences((s) => s.setProvider);

  const lesson = useQuery({
    queryKey: ['lesson', slug, user?.id ?? null],
    queryFn: () => api.lesson(slug),
    staleTime: 5 * 60_000,
  });

  // Opening an AWS lesson while Azure is selected (e.g. from a shared link) switches the theme.
  const provider = lesson.data?.topic.provider;
  useEffect(() => {
    if (provider) setProvider(provider);
  }, [provider, setProvider]);

  useEffect(() => {
    // Braces matter: newer Chromium returns a Promise from scrollTo(), and React would
    // try to call that Promise as the effect's cleanup ("destroy is not a function").
    window.scrollTo({ top: 0 });
  }, [slug]);

  const toggle = useMutation({
    mutationFn: async (done: boolean) => {
      if (done) await api.uncompleteLesson(slug);
      else await api.completeLesson(slug);
    },
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ['lesson', slug] });
      void qc.invalidateQueries({ queryKey: ['topics'] });
      void qc.invalidateQueries({ queryKey: ['stats'] });
    },
  });

  const sections = lesson.data?.topic.lesson.sections ?? [];
  const active = useActiveSection(sections.map((s) => s.id));

  if (lesson.isLoading) return <Skeleton className="h-[40rem]" />;
  if (lesson.isError) {
    return lesson.error instanceof ApiError && lesson.error.status === 404 ? (
      <EmptyState title={t('learn.notFound')} action={<Link to="/learn" className={buttonStyles('outline', 'sm')}>{t('learn.all')}</Link>} />
    ) : (
      <ErrorState error={lesson.error} onRetry={() => void lesson.refetch()} />
    );
  }

  const { topic, completedAt, prev, next } = lesson.data!;
  const body = topic.lesson;
  const done = Boolean(completedAt);

  return (
    <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
      {/* Table of contents */}
      <aside className="hidden lg:block">
        <nav className="sticky top-24 grid gap-3" aria-label={t('learn.contents')}>
          <Link to="/learn" className="flex items-center gap-1.5 text-sm text-ink-3 hover:text-accent">
            <ArrowLeft className="size-4" aria-hidden /> {t('learn.all')}
          </Link>
          <p className="eyebrow mt-2">{t('learn.contents')}</p>
          <ol className="grid gap-0.5 border-l border-line">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    '-ml-px block border-l-2 py-1.5 pr-2 pl-3 text-[13px] leading-snug transition',
                    active === s.id ? 'border-accent font-medium text-accent' : 'border-transparent text-ink-2 hover:text-ink',
                  )}
                >
                  <span className="mr-1.5 font-mono text-[11px] text-ink-3">{i + 1}.</span>
                  {loc(s.title)}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      <article className="grid min-w-0 gap-8">
        {/* Header */}
        <header className="grid gap-4">
          <Link to="/learn" className="flex items-center gap-1.5 text-sm text-ink-3 hover:text-accent lg:hidden">
            <ArrowLeft className="size-4" aria-hidden /> {t('learn.all')}
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="grid size-9 place-items-center rounded-lg bg-accent-soft text-accent">
              <TopicIcon name={topic.icon} className="size-[18px]" />
            </span>
            <Badge tone={topic.level === 'FOUNDATIONAL' ? 'good' : 'warn'}>{t(`learn.${topic.level}`)}</Badge>
            {topic.exams.map((e) => (
              <Badge key={e} className="font-mono">
                {e}
              </Badge>
            ))}
            <span className="flex items-center gap-1 text-xs text-ink-3">
              <Clock className="size-3.5" aria-hidden /> {t('learn.minutes', { count: body.minutes })}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold sm:text-3xl">{loc(topic.name)}</h1>
          <p className="max-w-3xl text-ink-2">{loc(topic.description)}</p>
        </header>

        {/* Objectives */}
        <section className="panel grid gap-3 p-5">
          <h2 className="flex items-center gap-2 text-sm font-bold">
            <Target className="size-4 text-accent" aria-hidden /> {t('learn.objectives')}
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {body.objectives.map((o, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-good" aria-hidden />
                <span>
                  <RichText text={loc(o)} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sections */}
        {sections.map((s, i) => (
          <motion.section
            key={s.id}
            id={s.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="scroll-mt-24"
          >
            <h2 className="mb-4 flex items-baseline gap-3 text-xl font-bold">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
              {loc(s.title)}
            </h2>
            <div className="lesson-prose">
              {s.blocks.map((b, k) => (
                <LessonBlockView key={k} block={b} />
              ))}
            </div>
          </motion.section>
        ))}

        {/* Summary */}
        <section className="panel grid gap-3 border-accent/30 bg-accent-soft/40 p-5">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <Sparkles className="size-4 text-accent" aria-hidden /> {t('learn.summary')}
          </h2>
          <ol className="grid gap-2">
            {body.summary.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="font-mono text-xs font-bold text-accent">{i + 1}</span>
                <span>
                  <RichText text={loc(s)} />
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Next steps */}
        <section className="panel grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="grid gap-1">
            <h2 className="text-base font-bold">{t('learn.whatNext')}</h2>
            <p className="text-sm text-ink-2">{t('learn.whatNextBody', { count: topic.questionCount })}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {user ? (
              <Button variant={done ? 'outline' : 'secondary'} onClick={() => toggle.mutate(done)} loading={toggle.isPending}>
                {done ? <CheckCircle2 className="size-4 text-good" aria-hidden /> : <Circle className="size-4" aria-hidden />}
                {done ? t('learn.done') : t('learn.markDone')}
              </Button>
            ) : (
              <Link to="/login" state={{ from: `/learn/${slug}` }} className={buttonStyles('ghost')}>
                {t('learn.signInToTrack')}
              </Link>
            )}
            <Link to={`/flashcards?topic=${topic.slug}`} className={buttonStyles('outline')}>
              <Layers className="size-4" aria-hidden /> {t('learn.cards')}
            </Link>
            <Link to={`/quiz?topic=${topic.slug}`} className={buttonStyles('primary')}>
              <ListChecks className="size-4" aria-hidden /> {t('learn.practice')}
            </Link>
          </div>
        </section>

        {/* Prev / next */}
        <nav className="grid gap-3 sm:grid-cols-2" aria-label="Lessons">
          {prev ? (
            <Link to={`/learn/${prev.slug}`} className="panel grid gap-1 p-4 transition hover:border-accent/60">
              <span className="flex items-center gap-1 text-xs text-ink-3">
                <ArrowLeft className="size-3.5" aria-hidden /> {t('learn.prev')}
              </span>
              <span className="font-semibold">{loc(prev.name)}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={`/learn/${next.slug}`} className="panel grid gap-1 p-4 text-right transition hover:border-accent/60">
              <span className="flex items-center justify-end gap-1 text-xs text-ink-3">
                {t('learn.next')} <ArrowRight className="size-3.5" aria-hidden />
              </span>
              <span className="font-semibold">{loc(next.name)}</span>
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}
