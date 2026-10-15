import { Suspense } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { BarChart3, Home, Layers, ListChecks, LogIn, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { useThemeSync } from '@/hooks/useThemeSync';
import { cn } from '@/lib/cn';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ProviderSwitch } from './ProviderSwitch';
import { ThemeToggle } from './ThemeToggle';
import { Skeleton } from '../ui/States';

const NAV = [
  { to: '/', key: 'nav.home', icon: Home, end: true },
  { to: '/quiz', key: 'nav.quiz', icon: ListChecks },
  { to: '/flashcards', key: 'nav.flashcards', icon: Layers },
  { to: '/dashboard', key: 'nav.dashboard', icon: BarChart3 },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Cloud Academy">
      <svg viewBox="0 0 64 64" className="size-8" aria-hidden>
        <rect width="64" height="64" rx="16" fill="var(--terminal)" />
        <path d="M20 42h25a9 9 0 0 0 0-18 13 13 0 0 0-25 3 7.5 7.5 0 0 0 0 15z" fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="44" cy="42" r="5" fill="var(--accent)" />
      </svg>
      <span className="font-display text-lg font-extrabold tracking-tight">
        Cloud<span className="text-accent">Academy</span>
      </span>
    </Link>
  );
}

export function AppShell() {
  useThemeSync();
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh pb-20 md:pb-0">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">
        {t('common.skip')}
      </a>

      <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-xl" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <Logo />
          <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Main">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  cn('relative rounded-lg px-3 py-2 text-sm font-medium transition-colors', isActive ? 'text-ink' : 'text-ink-3 hover:text-ink')
                }
              >
                {({ isActive }) => (
                  <>
                    {t(n.key)}
                    {isActive && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-accent" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <ProviderSwitch className="hidden sm:flex" />
            <LanguageSwitcher />
            <ThemeToggle />
            {user ? (
              <button
                onClick={() => logout.mutate(undefined, { onSuccess: () => navigate('/') })}
                className="flex h-9 items-center gap-2 rounded-xl border border-line bg-surface pr-3 pl-1 text-sm transition hover:border-accent"
                title={t('nav.signOut')}
              >
                <span className="grid size-7 place-items-center rounded-lg bg-accent text-xs font-bold text-accent-ink">
                  {user.name.slice(0, 1).toUpperCase()}
                </span>
                <LogOut className="size-4 text-ink-3" aria-hidden />
                <span className="sr-only">{t('nav.signOut')}</span>
              </button>
            ) : (
              <Link to="/login" state={{ from: location.pathname }} className="flex h-9 items-center gap-2 rounded-xl bg-ink px-3 text-sm font-medium text-bg transition hover:opacity-90">
                <LogIn className="size-4" aria-hidden />
                <span className="hidden sm:inline">{t('nav.signIn')}</span>
              </Link>
            )}
          </div>
        </div>
        <div className="border-t border-line/60 px-4 py-2 sm:hidden">
          <ProviderSwitch className="w-full [&>button]:flex-1" />
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22, ease: [0.2, 0.9, 0.25, 1] }}
          >
            <Suspense fallback={<Skeleton className="h-96" />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile tab bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-line bg-surface/95 backdrop-blur-xl md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        aria-label="Main"
      >
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => cn('flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium', isActive ? 'text-accent' : 'text-ink-3')}>
            <n.icon className="size-5" aria-hidden />
            {t(n.key)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
