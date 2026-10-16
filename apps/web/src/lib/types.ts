export type Provider = 'AZURE' | 'AWS';
export type Locale = 'en' | 'ja' | 'my';
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type LocalizedText = { en: string; ja?: string; my?: string };

export type User = { id: string; email: string; name: string; locale: Locale; createdAt: string };

export type Exam = 'AZ-900' | 'AZ-104' | 'CLF-C02' | 'SAA-C03';
export type Level = 'FOUNDATIONAL' | 'ASSOCIATE';

export type Topic = {
  id: string;
  slug: string;
  provider: Provider;
  order: number;
  icon: string;
  level: Level;
  exams: Exam[];
  name: LocalizedText;
  description: LocalizedText;
  lesson: { minutes: number; sections: number } | null;
  lessonCompletedAt: string | null;
  questionCount: number;
  flashcardCount: number;
};

export type LessonBlock =
  | { type: 'p'; text: LocalizedText }
  | { type: 'list'; items: LocalizedText[] }
  | { type: 'steps'; items: LocalizedText[] }
  | { type: 'table'; head: LocalizedText[]; rows: LocalizedText[][] }
  | { type: 'code'; lang: string; code: string; caption?: LocalizedText }
  | { type: 'callout'; tone: 'tip' | 'exam' | 'warn' | 'memory'; text: LocalizedText }
  | { type: 'diagram'; text: string; caption?: LocalizedText };

export type LessonSection = { id: string; title: LocalizedText; blocks: LessonBlock[] };

export type Lesson = {
  minutes: number;
  objectives: LocalizedText[];
  sections: LessonSection[];
  summary: LocalizedText[];
};

export type TopicRef = { slug: string; name: LocalizedText; order: number };

export type LessonResponse = {
  topic: Omit<Topic, 'lesson' | 'lessonCompletedAt'> & { lesson: Lesson };
  completedAt: string | null;
  prev: TopicRef | null;
  next: TopicRef | null;
};

export type QuizQuestion = {
  id: string;
  difficulty: Difficulty;
  multiple: boolean;
  exams: Exam[];
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
  lessons: { completed: number; total: number };
  streak: number;
  activity: string[];
  topics: { slug: string; provider: Provider; name: LocalizedText; correct: number; total: number }[];
  recent: { id: string; provider: Provider; topicSlug: string | null; score: number; total: number; durationS: number; createdAt: string }[];
};
