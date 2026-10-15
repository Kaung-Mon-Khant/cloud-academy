/**
 * SM-2 spaced repetition (SuperMemo 2) with Anki-style ratings.
 *   again → card failed, show again in 10 minutes
 *   hard / good / easy → interval grows by the ease factor
 */
export type Rating = 'again' | 'hard' | 'good' | 'easy';

export type ReviewState = {
  ease: number;
  interval: number; // days
  repetitions: number;
};

export type NextReview = ReviewState & { dueAt: Date; quality: number };

const QUALITY: Record<Rating, number> = { again: 1, hard: 3, good: 4, easy: 5 };
const MIN_EASE = 1.3;
const DAY_MS = 86_400_000;

export const INITIAL_STATE: ReviewState = { ease: 2.5, interval: 0, repetitions: 0 };

export function schedule(prev: ReviewState, rating: Rating, now: Date = new Date()): NextReview {
  const q = QUALITY[rating];
  const raw = prev.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  const ease = Math.round(Math.max(MIN_EASE, raw) * 100) / 100;

  if (q < 3) {
    return { ease, interval: 0, repetitions: 0, quality: q, dueAt: new Date(now.getTime() + 10 * 60_000) };
  }

  const repetitions = prev.repetitions + 1;
  let interval: number;
  if (repetitions === 1) interval = 1;
  else if (repetitions === 2) interval = 6;
  else interval = Math.round(prev.interval * ease);

  if (rating === 'hard') interval = Math.max(1, Math.round(interval * 0.6));
  if (rating === 'easy') interval = Math.round(interval * 1.3) + 1;

  return { ease, interval, repetitions, quality: q, dueAt: new Date(now.getTime() + interval * DAY_MS) };
}
