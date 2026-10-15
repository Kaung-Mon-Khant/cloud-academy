import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff } from 'lucide-react';
import { ApiError } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
  autoComplete,
  hint,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete: string;
  hint?: string;
  error?: string;
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isPassword && show ? 'text' : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={hint || error ? `${id}-hint` : undefined}
          className="h-11 w-full rounded-xl border border-line bg-surface px-3 pr-10 text-sm transition outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 aria-[invalid=true]:border-bad"
        />
        {isPassword && (
          <button type="button" onClick={() => setShow((s) => !s)} className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md p-1.5 text-ink-3 hover:text-ink" aria-label={show ? 'Hide password' : 'Show password'}>
            {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        )}
      </div>
      {(error || hint) && (
        <p id={`${id}-hint`} className={error ? 'text-xs text-bad' : 'text-xs text-ink-3'}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

export function AuthPage({ mode }: { mode: 'login' | 'register' }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = mode === 'login' ? login : register;
  const err = mutation.error instanceof ApiError ? mutation.error : null;
  const fieldError = (path: string) => err?.details?.find((d) => d.path === path)?.message;
  const from = (location.state as { from?: string } | null)?.from ?? '/dashboard';

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const onSuccess = () => navigate(from, { replace: true });
    if (mode === 'login') login.mutate({ email, password }, { onSuccess });
    else register.mutate({ email, password, name }, { onSuccess });
  };

  return (
    <div className="mx-auto grid max-w-md gap-8 py-6">
      <header className="grid gap-2 text-center">
        <p className="eyebrow">{mode === 'login' ? 'az login' : 'aws iam create-user'}</p>
        <h1 className="text-3xl font-extrabold">{mode === 'login' ? t('auth.signInTitle') : t('auth.signUpTitle')}</h1>
        <p className="text-sm text-ink-2">{t('auth.subtitle')}</p>
      </header>

      <form onSubmit={onSubmit} className="panel grid gap-5 p-6 sm:p-8" noValidate>
        {mode === 'register' && <Field id="auth-name" label={t('auth.name')} value={name} onChange={setName} autoComplete="name" error={fieldError('name')} />}
        <Field id="auth-email" label={t('auth.email')} type="email" value={email} onChange={setEmail} autoComplete="email" error={fieldError('email')} />
        <Field
          id="auth-password"
          label={t('auth.password')}
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          hint={mode === 'register' ? t('auth.passwordHint') : undefined}
          error={fieldError('password')}
        />

        {err && !err.details && (
          <p role="alert" className="rounded-lg bg-bad-soft px-3 py-2 text-sm text-bad">
            {err.status === 401 ? t('auth.invalid') : err.status === 409 ? t('auth.exists') : err.message}
          </p>
        )}

        <Button type="submit" size="lg" loading={mutation.isPending}>
          {mode === 'login' ? t('auth.submitSignIn') : t('auth.submitSignUp')}
        </Button>

        <p className="text-center text-sm text-ink-2">
          {mode === 'login' ? t('auth.noAccount') : t('auth.haveAccount')}{' '}
          <Link to={mode === 'login' ? '/register' : '/login'} state={location.state} className="font-semibold text-accent underline-offset-4 hover:underline">
            {mode === 'login' ? t('auth.createAccount') : t('nav.signIn')}
          </Link>
        </p>
      </form>
    </div>
  );
}
