import { useId } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { usePreferences } from '@/stores/preferences';
import { cn } from '@/lib/cn';
import type { Provider } from '@/lib/types';

const OPTIONS: { value: Provider; label: string; region: string }[] = [
  { value: 'AZURE', label: 'Azure', region: 'japaneast' },
  { value: 'AWS', label: 'AWS', region: 'ap-northeast-1' },
];

/** Segmented control — switching cloud re-themes the accent colour across the app. */
export function ProviderSwitch({ className }: { className?: string }) {
  const { t } = useTranslation();
  const provider = usePreferences((s) => s.provider);
  const setProvider = usePreferences((s) => s.setProvider);
  // The switch is rendered twice (header + mobile bar); a shared layoutId would make
  // the pill jump into whichever copy rendered last — even when that copy is hidden.
  const pillId = `provider-pill-${useId()}`;

  return (
    <div role="radiogroup" aria-label={t('provider.label')} className={cn('flex rounded-xl border border-line bg-surface p-0.5', className)}>
      {OPTIONS.map((o) => {
        const active = o.value === provider;
        return (
          <button
            key={o.value}
            role="radio"
            aria-checked={active}
            title={o.region}
            onClick={() => setProvider(o.value)}
            className={cn('relative h-8 rounded-[10px] px-3 text-sm font-semibold transition-colors', active ? 'text-accent-ink' : 'text-ink-2 hover:text-ink')}
          >
            {active && <motion.span layoutId={pillId} className="absolute inset-0 rounded-[10px] bg-accent" transition={{ type: 'spring', stiffness: 520, damping: 40 }} />}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
