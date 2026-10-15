export type Locale = 'en' | 'ja' | 'my';
export type LocalizedText = { en: string; ja?: string; my?: string };

/** L(en, ja, my) — compact constructor for localized strings in seed files. */
export const L = (en: string, ja?: string, my?: string): LocalizedText => ({ en, ja, my });

export type SeedQuestion = {
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
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

export type SeedTopic = {
  slug: string;
  icon: string; // lucide-react icon name
  name: LocalizedText;
  description: LocalizedText;
  questions: SeedQuestion[];
  flashcards: SeedFlashcard[];
};
