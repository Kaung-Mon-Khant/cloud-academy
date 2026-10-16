import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, Globe2, Layers, ListChecks, Repeat } from 'lucide-react';
import { useTopics } from '@/hooks/useTopics';
import { useLocalized } from '@/lib/content';
import { usePreferences } from '@/stores/preferences';
import { Terminal } from '@/features/dashboard/Terminal';
import { buttonStyles } from '@/components/ui/Button';
import { ErrorState, Skeleton } from '@/components/ui/States';
import { TopicIcon } from '@/components/ui/TopicIcon';

export function HomePage() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const provider = usePreferences((s) => s.provider);
  const topics = useTopics();
  const totals = (topics.data ?? []).reduce((a, tp) => ({ q: a.q + tp.questionCount, c: a.c + tp.flashcardCount }), { q: 0, c: 0 });
  const cloud = provider === 'AZURE' ? 'Azure' : 'AWS';

  return (
    <div className="grid gap-12">
      {/* Hero */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="grid gap-6">
          <p className="eyebrow flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" /> {t('home.eyebrow', { cloud })}
          </p>
          <h1 className="text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            {t('home.titleA')} <span className="text-accent">{cloud}</span> {t('home.titleB')}
          </h1>
          <p className="max-w-xl text-base text-ink-2 sm:text-lg">{t('home.subtitle')}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/learn" className={buttonStyles('primary', 'lg')}>
              <BookOpen className="size-5" aria-hidden /> {t('home.startLearning')}
            </Link>
            <Link to="/quiz" className={buttonStyles('outline', 'lg')}>
              <ListChecks className="size-5" aria-hidden /> {t('home.startQuiz')}
            </Link>
            <Link to="/flashcards" className={buttonStyles('ghost', 'lg')}>
              <Layers className="size-5" aria-hidden /> {t('home.reviewCards')}
            </Link>
          </div>
          <dl className="mt-2 flex flex-wrap gap-8">
            {[
              { k: t('home.statLessons'), v: topics.data?.filter((tp) => tp.lesson).length },
              { k: t('home.statQuestions'), v: totals.q },
              { k: t('home.statCards'), v: totals.c },
              { k: t('home.statLanguages'), v: 3 },
            ].map((s) => (
              <div key={s.k}>
                <dt className="eyebrow">{s.k}</dt>
                <dd className="font-display text-2xl font-extrabold tabular-nums">{topics.isLoading ? '–' : s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.div initial={{ opacity: 0, y: 16, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.5, ease: [0.2, 0.9, 0.25, 1] }}>
          <Terminal provider={provider} />
        </motion.div>
      </section>

      {/* How it works */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Brain, title: t('home.f1Title'), body: t('home.f1Body') },
          { icon: Repeat, title: t('home.f2Title'), body: t('home.f2Body') },
          { icon: Globe2, title: t('home.f3Title'), body: t('home.f3Body') },
        ].map((f) => (
          <div key={f.title} className="panel grid gap-2 p-5">
            <f.icon className="size-5 text-accent" aria-hidden />
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-ink-2">{f.body}</p>
          </div>
        ))}
      </section>

      {/* Topics */}
      <section className="grid gap-6" aria-labelledby="topics-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t('home.topicsEyebrow', { cloud })}</p>
            <h2 id="topics-heading" className="text-2xl font-extrabold sm:text-3xl">
              {t('home.topicsTitle')}
            </h2>
          </div>
        </div>

        {topics.isLoading ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <Skeleton key={i} className="h-44" />
            ))}
          </div>
        ) : topics.isError ? (
          <ErrorState error={topics.error} onRetry={() => void topics.refetch()} />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topics.data?.map((tp, i) => (
              <motion.article
                key={tp.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="panel group grid content-between gap-4 p-4 transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                      <TopicIcon name={tp.icon} className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-base font-bold">{loc(tp.name)}</h3>
                  <p className="line-clamp-3 text-sm text-ink-2">{loc(tp.description)}</p>
                </div>
                <div className="flex items-center justify-between border-t border-line pt-4 text-sm">
                  <span className="text-ink-3">
                    {t('home.counts', { q: tp.questionCount, c: tp.flashcardCount })}
                  </span>
                  <div className="flex gap-1">
                    <Link to={`/flashcards?topic=${tp.slug}`} className={buttonStyles('ghost', 'sm')} aria-label={`${t('nav.flashcards')}: ${loc(tp.name)}`}>
                      <Layers className="size-4" aria-hidden />
                    </Link>
                    <Link to={`/learn/${tp.slug}`} className={buttonStyles('ghost', 'sm')} aria-label={`${t('nav.learn')}: ${loc(tp.name)}`}>
                      <BookOpen className="size-4" aria-hidden />
                    </Link>
                    <Link to={`/quiz?topic=${tp.slug}`} className={buttonStyles('secondary', 'sm')}>
                      {t('home.practice')} <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
