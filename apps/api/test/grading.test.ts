import { describe, expect, it } from 'vitest';
import { grade, shuffle } from '../src/lib/grading.js';
import { computeStreak } from '../src/modules/stats/routes.js';

const questions = [
  { id: 'q1', explanation: { en: 'x' }, options: [{ id: 'a', isCorrect: true }, { id: 'b', isCorrect: false }] },
  {
    id: 'q2',
    explanation: { en: 'y' },
    options: [
      { id: 'c', isCorrect: true },
      { id: 'd', isCorrect: true },
      { id: 'e', isCorrect: false },
    ],
  },
];

describe('grade', () => {
  it('scores single and multi-select answers by exact match', () => {
    const r = grade(questions, [
      { questionId: 'q1', optionIds: ['a'] },
      { questionId: 'q2', optionIds: ['d', 'c'] },
    ]);
    expect(r.score).toBe(2);
    expect(r.total).toBe(2);
  });

  it('gives no partial credit for multi-select', () => {
    const r = grade(questions, [{ questionId: 'q2', optionIds: ['c'] }]);
    expect(r.score).toBe(0);
    expect(r.results[0]?.correctOptionIds.sort()).toEqual(['c', 'd']);
  });

  it('treats duplicate selections as one', () => {
    expect(grade(questions, [{ questionId: 'q1', optionIds: ['a', 'a'] }]).score).toBe(1);
  });

  it('rejects unknown questions', () => {
    expect(() => grade(questions, [{ questionId: 'nope', optionIds: [] }])).toThrow();
  });
});

describe('shuffle', () => {
  it('keeps every element', () => {
    const input = [1, 2, 3, 4, 5, 6];
    expect(shuffle(input).sort()).toEqual(input);
  });
});

describe('computeStreak', () => {
  it('counts consecutive days ending today', () => {
    expect(computeStreak(new Set(['2026-10-13', '2026-10-14', '2026-10-15']), '2026-10-15')).toBe(3);
  });
  it('keeps the streak alive when today has no activity yet', () => {
    expect(computeStreak(new Set(['2026-10-13', '2026-10-14']), '2026-10-15')).toBe(2);
  });
  it('is zero after a missed day', () => {
    expect(computeStreak(new Set(['2026-10-12']), '2026-10-15')).toBe(0);
  });
});
