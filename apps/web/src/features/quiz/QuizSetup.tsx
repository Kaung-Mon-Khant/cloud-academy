import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { useTopics } from '@/hooks/useTopics';
import { useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import type { Difficulty } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export type QuizConfig = { topic?: string; difficulty?: Difficulty; limit: number };

function Segmented<T extends string | number>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <fieldset>
      <legend className="eyebrow mb-2">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            aria-pressed={o.value === value}
            onClick={() => onChange(o.value)}
            className={cn(
              'h-10 rounded-xl border px-4 text-sm font-medium transition',
              o.value === value ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-surface text-ink-2 hover:border-ink-3',
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function QuizSetup({ initialTopic, onStart }: { initialTopic?: string; onStart: (c: QuizConfig) => void }) {
  const { t } = useTranslation();
  const loc = useLocalized();
  const topics = useTopics();
  const [topic, setTopic] = useState(initialTopic ?? '');
  const [limit, setLimit] = useState(10);
  const [difficulty, setDifficulty] = useState<Difficulty | ''>('');

  return (
    <form
      className="panel grid gap-7 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        onStart({ topic: topic || undefined, difficulty: difficulty || undefined, limit });
      }}
    >
      <div>
        <label htmlFor="quiz-topic" className="eyebrow mb-2 block">
          {t('quiz.topic')}
        </label>
        <select
          id="quiz-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="h-11 w-full rounded-xl border border-line bg-surface px-3 text-sm"
        >
          <option value="">{t('quiz.allTopics')}</option>
          {topics.data?.map((tp) => (
            <option key={tp.slug} value={tp.slug}>
              {loc(tp.name)} ({tp.questionCount})
            </option>
          ))}
        </select>
      </div>

      <Segmented
        label={t('quiz.count')}
        value={limit}
        onChange={setLimit}
        options={[5, 10, 20].map((n) => ({ value: n, label: String(n) }))}
      />
      <Segmented
        label={t('quiz.difficulty')}
        value={difficulty}
        onChange={setDifficulty}
        options={[
          { value: '', label: t('quiz.any') },
          { value: 'EASY', label: t('quiz.easy') },
          { value: 'MEDIUM', label: t('quiz.medium') },
          { value: 'HARD', label: t('quiz.hard') },
        ]}
      />

      <Button type="submit" size="lg" className="justify-self-start">
        <Play className="size-4" aria-hidden />
        {t('quiz.start')}
      </Button>
    </form>
  );
}
