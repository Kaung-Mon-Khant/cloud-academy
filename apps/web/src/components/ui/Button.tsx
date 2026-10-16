import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink hover:brightness-110 shadow-[0_1px_0_rgb(255_255_255/0.2)_inset,0_8px_24px_-12px_var(--accent)]',
  secondary: 'bg-surface-2 text-ink hover:bg-line/70',
  outline: 'border border-line bg-surface text-ink hover:border-accent hover:text-accent',
  ghost: 'text-ink-2 hover:bg-surface-2 hover:text-ink',
};
const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5 rounded-lg',
  md: 'h-10 px-4 text-sm gap-2 rounded-xl',
  lg: 'h-11 px-5 text-[15px] gap-2 rounded-xl',
};

/** Same look for <Link> elements (avoids nesting a <button> inside an <a>). */
export const buttonStyles = (variant: Variant = 'primary', size: Size = 'md', className?: string) =>
  cn(
    'inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-snap active:scale-[0.98]',
    variants[variant],
    sizes[size],
    className,
  );

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', loading, disabled, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 ease-snap',
        'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {children}
    </button>
  );
});
