import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { LOCALES, currentLocale } from '@/lib/content';
import { cn } from '@/lib/cn';
import { useAuth } from '@/hooks/useAuth';
import type { Locale } from '@/lib/types';

/**
 * Popover with a sliding highlight. Each language is written in its own script
 * and font, with a live sample line so learners can see the change before picking.
 */
export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active = currentLocale(i18n.resolvedLanguage);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = async (code: Locale) => {
    setOpen(false);
    await i18n.changeLanguage(code);
    if (user && user.locale !== code) {
      // Remember the choice on the account too (best effort).
      api.updateMe({ locale: code }).then(({ user: u }) => qc.setQueryData(['me'], u)).catch(() => undefined);
    }
  };

  const samples: Record<Locale, string> = {
    en: 'Deploy your first VM',
    ja: '最初の VM をデプロイ',
    my: 'ပထမဆုံး VM ကို ဆောက်ပါ',
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t('lang.label')}
        className="flex h-9 items-center gap-2 rounded-xl border border-line bg-surface px-2.5 text-sm text-ink-2 transition hover:border-accent hover:text-ink"
      >
        <Languages className="size-4" aria-hidden />
        <span className="font-medium" lang={active}>
          {LOCALES.find((l) => l.code === active)?.short}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.2, 0.9, 0.25, 1] }}
            className="absolute right-0 z-50 mt-2 w-64 origin-top-right overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-2xl shadow-black/20"
          >
            <p className="eyebrow px-3 pt-2 pb-1.5">{t('lang.label')}</p>
            {LOCALES.map((l) => {
              const selected = l.code === active;
              return (
                <button
                  key={l.code}
                  role="menuitemradio"
                  aria-checked={selected}
                  lang={l.code}
                  onClick={() => void choose(l.code)}
                  className="relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left"
                >
                  {selected && (
                    <motion.span layoutId="lang-highlight" className="absolute inset-0 rounded-xl bg-accent-soft" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />
                  )}
                  <span
                    className={cn(
                      'relative grid size-9 shrink-0 place-items-center rounded-lg border text-xs font-bold',
                      selected ? 'border-accent bg-accent text-accent-ink' : 'border-line text-ink-2',
                    )}
                  >
                    {l.code.toUpperCase()}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="block font-medium">{l.label}</span>
                    <span className="block truncate text-xs text-ink-3">{samples[l.code]}</span>
                  </span>
                  {selected && <Check className="relative size-4 text-accent" aria-hidden />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
