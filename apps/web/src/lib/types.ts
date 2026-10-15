export type Provider = 'AZURE' | 'AWS';
export type Locale = 'en' | 'ja' | 'my';
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type LocalizedText = { en: string; ja?: string; my?: string };

export type User = { id: string; email: string; name: string; locale: Locale; createdAt: string };

export type Topic = {
  id: string;
  slug: string;
  provider: Provider;
  order: number;
  icon: string;
  name: LocalizedText;
  description: LocalizedText;
  questionCount: number;
  flashcardCount: number;
};

export type QuizQuestion = {
  id: string;
  difficulty: Difficulty;
  multiple: boolean;
  prompt: LocalizedText;
  topic: { slug: string; name: LocalizedText };
  options: { id: string; text: string }[];
};

export type GradedAnswer = {
  questionId: string;
  correct: boolean;
  selectedOptionIds: string[];
  correctOptionIds: string[];
  explanation: LocalizedText;
};

export type SubmitResult = {
  score: number;
  total: number;
  results: GradedAnswer[];
  attemptId: string | null;
  saved: boolean;
};

export type Rating = 'again' | 'hard' | 'good' | 'easy';

export type Flashcard = {
  id: string;
  term: string;
  definition: LocalizedText;
  example: LocalizedText | null;
  topic: { slug: string; name: LocalizedText; order: number };
  review: { ease: number; interval: number; repetitions: number; dueAt: string } | null;
};

export type Stats = {
  quizzes: { attempts: number; questionsAnswered: number; accuracy: number; bestScore: number };
  flashcards: { reviewed: number; due: number; mastered: number };
  streak: number;
  activity: string[];
  topics: { slug: string; provider: Provider; name: LocalizedText; correct: number; total: number }[];
  recent: { id: string; provider: Provider; topicSlug: string | null; score: number; total: number; durationS: number; createdAt: string }[];
};
