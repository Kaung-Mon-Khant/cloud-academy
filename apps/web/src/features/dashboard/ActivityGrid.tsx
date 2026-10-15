import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/cn';

const WEEKS = 16;
const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/** GitHub-style study calendar: one cell per day, last 16 weeks, filled when you studied. */
export function ActivityGrid({ activeDays }: { activeDays: string[] }) {
  const { t, i18n } = useTranslation();
  const [hover, setHover] = useState<string | null>(null);
  const active = useMemo(() => new Set(activeDays), [activeDays]);

  const columns = useMemo(() => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay() - (WEEKS - 1) * 7); // Sunday, 16 weeks ago
    return Array.from({ length: WEEKS }, (_, w) =>
      Array.from({ length: 7 }, (_, d) => {
        const day = new Date(start);
        day.setDate(start.getDate() + w * 7 + d);
        return day > today ? null : iso(day);
      }),
    );
  }, []);

  const fmt = new Intl.DateTimeFormat(i18n.resolvedLanguage, { month: 'short', day: 'numeric', weekday: 'short' });
  const count = columns.flat().filter((d) => d && active.has(d)).length;

  return (
    <div className="grid gap-3">
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-[3px]" role="grid" aria-label={t('dashboard.activity')}>
          {columns.map((col, w) => (
            <div key={w} className="grid gap-[3px]" role="row">
              {col.map((day, d) =>
                day ? (
                  <button
                    key={day}
                    type="button"
                    role="gridcell"
                    aria-label={`${fmt.format(new Date(`${day}T12:00:00`))}: ${active.has(day) ? t('dashboard.studied') : t('dashboard.notStudied')}`}
                    onMouseEnter={() => setHover(day)}
                    onFocus={() => setHover(day)}
                    onMouseLeave={() => setHover(null)}
                    className={cn(
                      'size-3.5 rounded-[4px] transition-transform hover:scale-125 sm:size-4',
                      active.has(day) ? 'bg-accent' : 'bg-surface-2 ring-1 ring-line ring-inset',
                      hover === day && 'ring-2 ring-ink',
                    )}
                  />
                ) : (
                  <span key={`empty-${w}-${d}`} className="size-3.5 sm:size-4" />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="min-h-5 text-xs text-ink-2" aria-live="polite">
        {hover
          ? `${fmt.format(new Date(`${hover}T12:00:00`))} — ${active.has(hover) ? t('dashboard.studied') : t('dashboard.notStudied')}`
          : t('dashboard.activeDays', { count, weeks: WEEKS })}
      </p>
    </div>
  );
}
