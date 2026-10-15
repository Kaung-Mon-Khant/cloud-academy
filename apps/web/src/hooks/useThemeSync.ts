import { useEffect } from 'react';
import { usePreferences } from '@/stores/preferences';

/** Keeps <html class="dark"> and data-provider in sync with preferences and the OS setting. */
export function useThemeSync() {
  const theme = usePreferences((s) => s.theme);
  const provider = usePreferences((s) => s.provider);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = theme === 'dark' || (theme === 'system' && media.matches);
      document.documentElement.classList.toggle('dark', dark);
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0f1a' : '#f4f6fa');
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.provider = provider.toLowerCase();
  }, [provider]);
}
