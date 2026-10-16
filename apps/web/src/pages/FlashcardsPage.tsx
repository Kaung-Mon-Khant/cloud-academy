import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, PartyPopper, RotateCcw, Sparkles } from 'lucide-react';
import { api } from '@/lib/api';
import { useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import type { Rating } from '@/lib/types';
import { usePreferences } from '@/stores/preferences';
import { useAuth } from '@/hooks/useAuth';
import { useTopics } from '@/hooks/useTopics';
import { useHotkeys } from '@/hooks/useHotkeys';
import { FlipCard } from '@/features/flashcards/FlipCard';
import { Button, buttonStyles } from '@/components/ui/Button';
import { EmptyState, ErrorState, Kbd, Skeleton } from '@/components/ui/States';

const RATINGS: { rating: Rating; key: string; cls: string }[] = [
  { rating: 'again', key: '1', cls: 'hover:border-bad hover:text-bad' },
  { rating: 'hard', key: '2', cls: 'hover:border-warn hover:text-warn' },
  { rating: 'good', key: '3', cls: 'hover:border-good hover:text-good' },
  { rating: 'easy', key: '4', cls: 'hover:border-accent hover:text-accent' },
];

export function FlashcardsPage() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const qc = useQueryClient();
  const { user } = useAuth();
  const provider = usePreferences((s) => s.provider);
  const topics = useTopics();
  const [params, setParams] = useSearchParams();
  const topic = params.get('topic') ?? '';
  const mode = user && params.get('mode') === 'due' ? 'due' : 'all';

  const cards = useQuery({
    queryKey: ['flashcards', provider, topic, mode, user?.id ?? 'guest'],
    queryFn: async () => (await api.flashcards({ provider, topic: topic || undefined, mode })).cards,
  });

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const deck = useMemo(() => cards.data ?? [], [cards.data]);
  const card = deck[index];
  const finished = deck.length > 0 && index >= deck.length;

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
    setReviewed(0);
  }, [provider, topic, mode, cards.dataUpdatedAt]);

  const review = useMutation({
    mutationFn: (v: { id: string; rating: Rating }) => api.review(v.id, v.rating),
    onSuccess: () => void qc.invalidateQueries({ queryKey: ['stats'] }),
  });

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => Math.min(Math.max(0, i + delta), deck.length));
  };

  const rate = (rating: Rating) => {
    if (!card || !flipped) return;
    if (user) review.mutate({ id: card.id, rating });
    setReviewed((n) => n + 1);
    go(1);
  };

  useHotkeys(
    {
      Space: () => card && setFlipped((f) => !f),
      ArrowRight: () => go(1),
      ArrowLeft: () => go(-1),
      ...(user ? Object.fromEntries(RATINGS.map((r) => [r.key, () => rate(r.rating)])) : {}),
    },
    !finished,
  );

  const setFilter = (key: 'topic' | 'mode', value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  return (
    <div className="mx-auto grid max-w-3xl gap-8">
      <header className="grid gap-2">
        <p className="eyebrow">{t('flashcards.eyebrow')}</p>
        <h1 className="text-2xl font-extrabold sm:text-3xl">{t('flashcards.title')}</h1>
        <p className="text-ink-2">{t('flashcards.subtitle')}</p>
      </header>

      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="fc-topic" className="sr-only">
          {t('quiz.topic')}
        </label>
        <select id="fc-topic" value={topic} onChange={(e) => setFilter('topic', e.target.value)} className="h-10 min-w-0 flex-1 rounded-xl border border-line bg-surface px-3 text-sm sm:flex-none">
          <option value="">{t('quiz.allTopics')}</option>
          {topics.data?.map((tp) => (
            <option key={tp.slug} value={tp.slug}>
              {loc(tp.name)}
            </option>
          ))}
        </select>
        <div className="flex rounded-xl border border-line bg-surface p-0.5" role="radiogroup" aria-label={t('flashcards.mode')}>
          {(['all', 'due'] as const).map((m) => (
            <button
              key={m}
              role="radio"
              aria-checked={mode === m}
              disabled={m === 'due' && !user}
              title={m === 'due' && !user ? t('flashcards.signInForDue') : undefined}
              onClick={() => setFilter('mode', m === 'all' ? '' : m)}
              className={cn('h-8 rounded-[10px] px-3 text-sm font-medium transition disabled:opacity-40', mode === m ? 'bg-ink text-bg' : 'text-ink-2 hover:text-ink')}
            >
              {t(`flashcards.${m}`)}
            </button>
          ))}
        </div>
        {deck.length > 0 && !finished && (
          <span className="ml-auto font-mono text-sm text-ink-2 tabular-nums">
            {index + 1} / {deck.length}
          </span>
        )}
      </div>

      {!user && (
        <p className="flex items-center gap-2 rounded-xl bg-accent-soft px-4 py-3 text-sm">
          <Sparkles className="size-4 shrink-0 text-accent" aria-hidden />
          <span>
            {t('flashcards.guestHint')}{' '}
            <Link to="/register" className="font-semibold text-accent underline-offset-4 hover:underline">
              {t('auth.createAccount')}
            </Link>
          </span>
        </p>
      )}

      {cards.isLoading ? (
        <Skeleton className="h-80" />
      ) : cards.isError ? (
        <ErrorState error={cards.error} onRetry={() => void cards.refetch()} />
      ) : deck.length === 0 ? (
        <EmptyState title={mode === 'due' ? t('flashcards.emptyDue') : t('flashcards.empty')} />
      ) : finished ? (
        <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="panel grid place-items-center gap-4 px-6 py-14 text-center">
          <PartyPopper className="size-10 text-accent" aria-hidden />
          <h2 className="text-2xl font-extrabold">{t('flashcards.doneTitle')}</h2>
          <p className="text-ink-2">{t('flashcards.doneBody', { count: reviewed })}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => (mode === 'due' ? void cards.refetch() : go(-deck.length))}>
              <RotateCcw className="size-4" aria-hidden /> {t('flashcards.restart')}
            </Button>
            <Link to="/quiz" className={buttonStyles('outline')}>
              {t('home.startQuiz')}
            </Link>
          </div>
        </motion.div>
      ) : (
        card && (
          <div className="grid gap-6">
            <AnimatePresence mode="wait">
              <motion.div key={card.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }}>
                <FlipCard card={card} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />
              </motion.div>
            </AnimatePresence>

            {user ? (
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {RATINGS.map((r) => (
                  <button
                    key={r.rating}
                    disabled={!flipped || review.isPending}
                    onClick={() => rate(r.rating)}
                    className={cn('grid gap-1 rounded-xl border border-line bg-surface px-2 py-3 text-center transition disabled:opacity-40', r.cls)}
                  >
                    <span className="text-sm font-semibold">{t(`flashcards.${r.rating}`)}</span>
                    <span className="hidden justify-center sm:flex">
                      <Kbd>{r.key}</Kbd>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex justify-between gap-3">
                <Button variant="outline" onClick={() => go(-1)} disabled={index === 0}>
                  <ChevronLeft className="size-4" aria-hidden /> {t('flashcards.prev')}
                </Button>
                <Button onClick={() => go(1)}>
                  {t('flashcards.next')} <ChevronRight className="size-4" aria-hidden />
                </Button>
              </div>
            )}

            <p className="hidden items-center justify-center gap-2 text-xs text-ink-3 sm:flex">
              <Kbd>Space</Kbd> {t('flashcards.flip')} · <Kbd>←</Kbd>
              <Kbd>→</Kbd> {t('flashcards.navigate')}
              {user && (
                <>
                  {' '}
                  · <Kbd>1</Kbd>–<Kbd>4</Kbd> {t('flashcards.rate')}
                </>
              )}
            </p>
            {user && !flipped && <p className="text-center text-xs text-ink-3">{t('flashcards.flipFirst')}</p>}
          </div>
        )
      )}
    </div>
  );
}
