import type {
  Flashcard,
  GradedAnswer,
  Provider,
  QuizQuestion,
  Rating,
  Stats,
  SubmitResult,
  Topic,
  User,
  Locale,
  Difficulty,
} from './types';

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly details?: { path: string; message: string }[],
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type Query = Record<string, string | number | undefined | null>;

async function request<T>(method: string, path: string, opts: { body?: unknown; query?: Query } = {}): Promise<T> {
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(opts.query ?? {})) if (v !== undefined && v !== null && v !== '') qs.set(k, String(v));
  const search = qs.toString();
  const url = `/api${path}${search ? `?${search}` : ''}`;

  let res: Response;
  try {
    res = await fetch(url, {
      method,
      credentials: 'include',
      headers: opts.body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
    });
  } catch {
    throw new ApiError(0, 'NETWORK', 'Cannot reach the server. Check your connection.');
  }

  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const err = data?.error ?? {};
    throw new ApiError(res.status, err.code ?? 'ERROR', err.message ?? res.statusText, err.details);
  }
  return data as T;
}

export const api = {
  me: () => request<{ user: User }>('GET', '/auth/me'),
  login: (body: { email: string; password: string }) => request<{ user: User }>('POST', '/auth/login', { body }),
  register: (body: { email: string; password: string; name: string }) =>
    request<{ user: User }>('POST', '/auth/register', { body }),
  logout: () => request<void>('POST', '/auth/logout'),
  updateMe: (body: Partial<{ name: string; locale: Locale }>) => request<{ user: User }>('PATCH', '/auth/me', { body }),

  topics: (provider: Provider) => request<{ topics: Topic[] }>('GET', '/topics', { query: { provider } }),

  quizQuestions: (q: { provider: Provider; topic?: string; difficulty?: Difficulty; limit: number }) =>
    request<{ questions: QuizQuestion[] }>('GET', '/quiz/questions', { query: q }),
  checkAnswer: (body: { questionId: string; optionIds: string[] }) =>
    request<{ result: GradedAnswer }>('POST', '/quiz/check', { body }),
  submitQuiz: (body: {
    provider: Provider;
    topicSlug?: string | null;
    durationS: number;
    answers: { questionId: string; optionIds: string[] }[];
  }) => request<SubmitResult>('POST', '/quiz/submit', { body }),

  flashcards: (q: { provider: Provider; topic?: string; mode: 'all' | 'due' }) =>
    request<{ cards: Flashcard[] }>('GET', '/flashcards', { query: q }),
  review: (id: string, rating: Rating) =>
    request<{ review: NonNullable<Flashcard['review']> }>('POST', `/flashcards/${id}/review`, { body: { rating } }),

  stats: () =>
    request<Stats>('GET', '/me/stats', { query: { tz: Intl.DateTimeFormat().resolvedOptions().timeZone } }),
};
