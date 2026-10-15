export type GradableQuestion = {
  id: string;
  explanation: unknown;
  options: { id: string; isCorrect: boolean }[];
};

export type SubmittedAnswer = { questionId: string; optionIds: string[] };

export type GradedAnswer = {
  questionId: string;
  correct: boolean;
  selectedOptionIds: string[];
  correctOptionIds: string[];
  explanation: unknown;
};

/**
 * Exact-match grading: an answer is correct only when the selected set equals the
 * correct set (no partial credit for multi-select). Unknown option IDs count as wrong.
 */
export function grade(questions: GradableQuestion[], answers: SubmittedAnswer[]) {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const results: GradedAnswer[] = answers.map((a) => {
    const q = byId.get(a.questionId);
    if (!q) throw new Error(`Unknown question ${a.questionId}`);
    const correctIds = q.options.filter((o) => o.isCorrect).map((o) => o.id);
    const selected = [...new Set(a.optionIds)];
    const correct =
      selected.length === correctIds.length && selected.every((id) => correctIds.includes(id));
    return {
      questionId: q.id,
      correct,
      selectedOptionIds: selected,
      correctOptionIds: correctIds,
      explanation: q.explanation,
    };
  });
  return { score: results.filter((r) => r.correct).length, total: results.length, results };
}

export function shuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}
