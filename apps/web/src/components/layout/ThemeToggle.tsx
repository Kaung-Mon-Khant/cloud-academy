import { Monitor, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePreferences, type Theme } from '@/stores/preferences';

const ORDER: Theme[] = ['system', 'light', 'dark'];
const ICON = { system: Monitor, light: Sun, dark: Moon } as const;

/** Cycles system → light → dark. */
export function ThemeToggle() {
  const { t } = useTranslation();
  const theme = usePreferences((s) => s.theme);
  const setTheme = usePreferences((s) => s.setTheme);
  const Icon = ICON[theme];
  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length] ?? 'system';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`${t('theme.label')}: ${t(`theme.${theme}`)}`}
      title={t(`theme.${theme}`)}
      className="grid size-9 place-items-center rounded-xl border border-line bg-surface text-ink-2 transition hover:border-accent hover:text-ink"
    >
      <Icon className="size-4" aria-hidden />
    </button>
  );
}
