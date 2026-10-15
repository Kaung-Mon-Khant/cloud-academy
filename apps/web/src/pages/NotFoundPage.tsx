import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { buttonStyles } from '@/components/ui/Button';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="grid place-items-center gap-4 py-20 text-center">
      <p className="font-mono text-sm text-ink-3">HTTP 404 · ResourceNotFound</p>
      <h1 className="text-4xl font-extrabold">{t('common.notFound')}</h1>
      <Link to="/" className={buttonStyles('primary')}>
        {t('common.backHome')}
      </Link>
    </div>
  );
}
