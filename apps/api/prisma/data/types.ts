export type Locale = 'en' | 'ja' | 'my';
export type LocalizedText = { en: string; ja?: string; my?: string };

/** L(en, ja, my) — compact constructor for localized strings in seed files. */
export const L = (en: string, ja?: string, my?: string): LocalizedText => ({ en, ja, my });

/** Certification exams a topic/question maps to. */
export type Exam = 'AZ-900' | 'AZ-104' | 'CLF-C02' | 'SAA-C03';

export type SeedQuestion = {
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  /** Which exams this question is typical for (at least one). */
  exams: Exam[];
  prompt: LocalizedText;
  /** Options are kept in English — they are service names / technical values. */
  options: string[];
  /** Zero-based indexes of the correct options. More than one = multi-select. */
  correct: number[];
  explanation: LocalizedText;
};

export type SeedFlashcard = {
  term: string;
  definition: LocalizedText;
  example?: LocalizedText;
};

/**
 * Lesson content blocks. Inline formatting inside any LocalizedText:
 *   **bold**   `code`
 */
export type LessonBlock =
  | { type: 'p'; text: LocalizedText }
  | { type: 'list'; items: LocalizedText[] }
  | { type: 'steps'; items: LocalizedText[] } // numbered procedure
  | { type: 'table'; head: LocalizedText[]; rows: LocalizedText[][] }
  | { type: 'code'; lang: 'bash' | 'powershell' | 'json' | 'yaml' | 'bicep' | 'kql'; code: string; caption?: LocalizedText }
  | { type: 'callout'; tone: 'tip' | 'exam' | 'warn' | 'memory'; text: LocalizedText }
  | { type: 'diagram'; text: string; caption?: LocalizedText }; // monospace ASCII diagram (English labels)

export type LessonSection = {
  id: string; // kebab-case anchor, unique within the lesson
  title: LocalizedText;
  blocks: LessonBlock[];
};

export type SeedLesson = {
  minutes: number; // estimated reading time
  objectives: LocalizedText[]; // "After this lesson you can…"
  sections: LessonSection[];
  summary: LocalizedText[]; // key takeaways
};

export type SeedTopic = {
  slug: string;
  icon: string; // lucide-react icon name
  level: 'FOUNDATIONAL' | 'ASSOCIATE';
  exams: Exam[];
  name: LocalizedText;
  description: LocalizedText;
  lesson: SeedLesson;
  questions: SeedQuestion[];
  flashcards: SeedFlashcard[];
};
