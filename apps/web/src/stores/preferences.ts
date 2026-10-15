import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Provider } from '@/lib/types';

export type Theme = 'system' | 'light' | 'dark';

type Preferences = {
  provider: Provider;
  theme: Theme;
  setProvider: (p: Provider) => void;
  setTheme: (t: Theme) => void;
};

/** Read by an inline script in index.html before first paint — keep the storage key in sync. */
export const usePreferences = create<Preferences>()(
  persist(
    (set) => ({
      provider: 'AZURE',
      theme: 'system',
      setProvider: (provider) => set({ provider }),
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'ca-preferences', partialize: ({ provider, theme }) => ({ provider, theme }) },
  ),
);
