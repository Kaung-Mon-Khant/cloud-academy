import type { ReactNode } from 'react';
import { AlertTriangle, Inbox } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/cn';
import { Button } from './Button';

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-xl bg-surface-2', className)} aria-hidden />;
}

export function EmptyState({ title, body, action }: { title: string; body?: string; action?: ReactNode }) {
  return (
    <div className="panel grid place-items-center gap-3 px-6 py-14 text-center">
      <Inbox className="size-8 text-ink-3" aria-hidden />
      <h3 className="text-lg font-semibold">{title}</h3>
      {body && <p className="max-w-md text-sm text-ink-2">{body}</p>}
      {action}
    </div>
  );
}

export function ErrorState({ error, onRetry }: { error: unknown; onRetry?: () => void }) {
  const { t } = useTranslation();
  const message = error instanceof Error ? error.message : t('common.error');
  return (
    <div className="panel grid place-items-center gap-3 border-bad/40 px-6 py-12 text-center" role="alert">
      <AlertTriangle className="size-7 text-bad" aria-hidden />
      <p className="font-medium">{t('common.error')}</p>
      <p className="max-w-md text-sm text-ink-2">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          {t('common.retry')}
        </Button>
      )}
    </div>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex min-w-6 items-center justify-center rounded-md border border-line bg-surface px-1.5 font-mono text-[11px] text-ink-2 shadow-[0_1px_0_var(--line)]">
      {children}
    </kbd>
  );
}
