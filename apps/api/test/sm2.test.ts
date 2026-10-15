import { describe, expect, it } from 'vitest';
import { INITIAL_STATE, schedule } from '../src/lib/sm2.js';

const now = new Date('2026-01-01T00:00:00Z');
const days = (d: Date) => Math.round((d.getTime() - now.getTime()) / 86_400_000);

describe('SM-2 scheduler', () => {
  it('first "good" review is due tomorrow', () => {
    const r = schedule(INITIAL_STATE, 'good', now);
    expect(r.repetitions).toBe(1);
    expect(r.interval).toBe(1);
    expect(days(r.dueAt)).toBe(1);
  });

  it('second "good" review is due in 6 days, then grows by ease', () => {
    const first = schedule(INITIAL_STATE, 'good', now);
    const second = schedule(first, 'good', now);
    expect(second.interval).toBe(6);
    const third = schedule(second, 'good', now);
    expect(third.interval).toBe(Math.round(6 * third.ease));
  });

  it('"again" resets progress and shows the card in 10 minutes', () => {
    const learned = schedule(schedule(INITIAL_STATE, 'good', now), 'good', now);
    const failed = schedule(learned, 'again', now);
    expect(failed.repetitions).toBe(0);
    expect(failed.interval).toBe(0);
    expect(failed.dueAt.getTime() - now.getTime()).toBe(10 * 60_000);
    expect(failed.ease).toBeLessThan(learned.ease);
  });

  it('never lets ease drop below 1.3', () => {
    let s = { ...INITIAL_STATE };
    for (let i = 0; i < 20; i++) s = schedule(s, 'again', now);
    expect(s.ease).toBeGreaterThanOrEqual(1.3);
  });

  it('"easy" schedules further out than "good"', () => {
    const base = schedule(schedule(INITIAL_STATE, 'good', now), 'good', now);
    expect(schedule(base, 'easy', now).interval).toBeGreaterThan(schedule(base, 'good', now).interval);
  });
});
