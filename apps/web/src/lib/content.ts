import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { Exam, Locale, LocalizedText, Provider } from './types';

export const EXAMS_BY_PROVIDER: Record<Provider, Exam[]> = {
  AZURE: ['AZ-900', 'AZ-104'],
  AWS: ['CLF-C02', 'SAA-C03'],
};

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ja', label: '日本語', short: '日本' },
  { code: 'my', label: 'မြန်မာ', short: 'မြန်' },
];

export const currentLocale = (lng: string | undefined): Locale =>
  lng === 'ja' || lng === 'my' ? lng : 'en';

/** Returns a picker for database content: current language → English fallback. */
export function useLocalized() {
  const { i18n } = useTranslation();
  const locale = currentLocale(i18n.resolvedLanguage);
  return useCallback((text: LocalizedText | null | undefined) => (text ? (text[locale] ?? text.en) : ''), [locale]);
}
