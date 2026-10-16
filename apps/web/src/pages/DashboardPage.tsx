import { Link, Navigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { BookOpen, Award, Flame, Layers, ListChecks, Target, type LucideIcon } from 'lucide-react';
import { api } from '@/lib/api';
import { useLocalized } from '@/lib/content';
import { useAuth } from '@/hooks/useAuth';
import { ActivityGrid } from '@/features/dashboard/ActivityGrid';
import { formatDuration } from '@/features/quiz/QuizPlayer';
import { buttonStyles } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { EmptyState, ErrorState, Skeleton } from '@/components/ui/States';

function StatTile({ icon: Icon, label, value, hint }: { icon: LucideIcon; label: string; value: string; hint?: string }) {
  return (
    <div className="panel grid gap-1 p-4">
      <div className="flex items-center justify-between">
        <span className="eyebrow">{label}</span>
        <Icon className="size-4 text-accent" aria-hidden />
      </div>
      <span className="font-display text-2xl font-extrabold tabular-nums">{value}</span>
      {hint && <span className="text-xs text-ink-3">{hint}</span>}
    </div>
  );
}

const pct = (v: number) => `${Math.round(v * 100)}%`;

export function DashboardPage() {
  const { t, i18n } = useTranslation();
  const loc = useLocalized();
  const { user, isLoading: authLoading } = useAuth();
  const stats = useQuery({ queryKey: ['stats', user?.id], queryFn: api.stats, enabled: Boolean(user) });

  if (authLoading) return <Skeleton className="h-96" />;
  if (!user) return <Navigate to="/login" replace state={{ from: '/dashboard' }} />;

  const s = stats.data;
  const dateFmt = new Intl.DateTimeFormat(i18n.resolvedLanguage, { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="grid gap-8">
      <header className="grid gap-2">
        <p className="eyebrow">{t('dashboard.eyebrow')}</p>
        <h1 className="text-2xl font-extrabold sm:text-3xl">{t('dashboard.title', { name: user.name })}</h1>
      </header>

      {stats.isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-28" />
          ))}
        </div>
      ) : stats.isError ? (
        <ErrorState error={stats.error} onRetry={() => void stats.refetch()} />
      ) : s ? (
        <>
          <section className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            <StatTile icon={BookOpen} label={t('dashboard.lessons')} value={`${s.lessons?.completed ?? 0}/${s.lessons?.total ?? 0}`} hint={t('dashboard.lessonsHint', { done: s.lessons?.completed ?? 0, total: s.lessons?.total ?? 0 })} />
            <StatTile icon={Flame} label={t('dashboard.streak')} value={t('dashboard.days', { count: s.streak })} />
            <StatTile icon={Target} label={t('dashboard.accuracy')} value={pct(s.quizzes.accuracy)} hint={t('dashboard.answered', { count: s.quizzes.questionsAnswered })} />
            <StatTile icon={Layers} label={t('dashboard.due')} value={String(s.flashcards.due)} hint={t('dashboard.reviewedCards', { count: s.flashcards.reviewed })} />
            <StatTile icon={Award} label={t('dashboard.mastered')} value={String(s.flashcards.mastered)} hint={t('dashboard.masteredHint')} />
          </section>

          <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="panel grid content-start gap-4 p-6">
              <h2 className="text-lg font-bold">{t('dashboard.activity')}</h2>
              <ActivityGrid activeDays={s.activity} />
            </div>

            <div className="panel grid content-start gap-4 p-6">
              <h2 className="text-lg font-bold">{t('dashboard.weakTopics')}</h2>
              {s.topics.length === 0 ? (
                <p className="text-sm text-ink-3">{t('dashboard.noTopicData')}</p>
              ) : (
                <ul className="grid gap-3">
                  {s.topics.slice(0, 6).map((tp, i) => {
                    const v = tp.correct / tp.total;
                    return (
                      <li key={tp.slug} className="group grid gap-1.5" title={`${tp.correct} / ${tp.total}`}>
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="flex min-w-0 items-center gap-2">
                            <Badge>{tp.provider === 'AZURE' ? 'Azure' : 'AWS'}</Badge>
                            <span className="truncate">{loc(tp.name)}</span>
                          </span>
                          <span className="font-mono text-ink-2 tabular-nums">
                            {pct(v)} <span className="text-ink-3">({tp.correct}/{tp.total})</span>
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                          <motion.div
                            className="h-full rounded-full bg-accent group-hover:brightness-110"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.max(v * 100, 2)}%` }}
                            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.2, 0.9, 0.25, 1] }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>

          <section className="panel grid gap-4 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">{t('dashboard.recent')}</h2>
              <Link to="/quiz" className={buttonStyles('secondary', 'sm')}>
                <ListChecks className="size-4" aria-hidden /> {t('home.startQuiz')}
              </Link>
            </div>
            {s.recent.length === 0 ? (
              <EmptyState title={t('dashboard.noAttempts')} body={t('dashboard.noAttemptsBody')} />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[32rem] text-sm">
                  <thead>
                    <tr className="border-b border-line text-left text-ink-3">
                      <th className="py-2 font-medium">{t('dashboard.date')}</th>
                      <th className="py-2 font-medium">{t('dashboard.cloud')}</th>
                      <th className="py-2 font-medium">{t('quiz.topic')}</th>
                      <th className="py-2 text-right font-medium">{t('dashboard.score')}</th>
                      <th className="py-2 text-right font-medium">{t('dashboard.time')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.recent.map((a) => (
                      <tr key={a.id} className="border-b border-line/60 last:border-0">
                        <td className="py-2.5 text-ink-2">{dateFmt.format(new Date(a.createdAt))}</td>
                        <td className="py-2.5">{a.provider === 'AZURE' ? 'Azure' : 'AWS'}</td>
                        <td className="py-2.5 font-mono text-xs text-ink-2">{a.topicSlug ?? t('quiz.allTopics')}</td>
                        <td className="py-2.5 text-right font-mono tabular-nums">
                          {a.score}/{a.total}
                        </td>
                        <td className="py-2.5 text-right font-mono text-ink-2 tabular-nums">{formatDuration(a.durationS)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      ) : null}
    </div>
  );
}
