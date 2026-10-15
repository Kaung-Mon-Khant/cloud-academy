import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { RefreshCw } from 'lucide-react';
import { useLocalized } from '@/lib/content';
import type { Flashcard } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';

export function FlipCard({ card, flipped, onFlip }: { card: Flashcard; flipped: boolean; onFlip: () => void }) {
  const { t } = useTranslation();
  const loc = useLocalized();

  const face = 'flip-face absolute inset-0 grid content-between gap-4 rounded-3xl border p-7 sm:p-10';

  return (
    <div className="flip-scene">
      <motion.button
        type="button"
        onClick={onFlip}
        aria-label={flipped ? t('flashcards.showTerm') : t('flashcards.showAnswer')}
        className="relative block h-[22rem] w-full text-left [transform-style:preserve-3d] sm:h-80"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        {/* Front */}
        <div className={`${face} border-line bg-surface shadow-xl shadow-black/5`}>
          <div className="flex items-center justify-between">
            <Badge tone="accent">{loc(card.topic.name)}</Badge>
            <span className="eyebrow">{t('flashcards.term')}</span>
          </div>
          <h2 className="text-center text-3xl font-extrabold break-words sm:text-4xl">{card.term}</h2>
          <p className="flex items-center justify-center gap-2 text-sm text-ink-3">
            <RefreshCw className="size-3.5" aria-hidden /> {t('flashcards.tapToFlip')}
          </p>
        </div>

        {/* Back */}
        <div className={`${face} [transform:rotateY(180deg)] border-accent/40 bg-[linear-gradient(160deg,var(--accent-soft),var(--surface)_60%)]`}>
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold">{card.term}</span>
            <span className="eyebrow">{t('flashcards.definition')}</span>
          </div>
          <p className="text-lg leading-relaxed sm:text-xl">{loc(card.definition)}</p>
          {card.example ? (
            <p className="rounded-xl bg-surface/80 px-4 py-3 font-mono text-sm text-ink-2">
              <span className="text-ink-3">{t('flashcards.example')}: </span>
              {loc(card.example)}
            </p>
          ) : (
            <span />
          )}
        </div>
      </motion.button>
    </div>
  );
}
