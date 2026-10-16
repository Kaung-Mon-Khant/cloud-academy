import { Fragment, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Brain, Check, Copy, GraduationCap, Lightbulb, type LucideIcon } from 'lucide-react';
import { useLocalized } from '@/lib/content';
import { cn } from '@/lib/cn';
import type { LessonBlock } from '@/lib/types';

/** Inline formatting used in lesson text: **bold** and `code`. No HTML is ever injected. */
export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    parts.push(tok.startsWith('**') ? <strong key={i++}>{tok.slice(2, -2)}</strong> : <code key={i++}>{tok.slice(1, -1)}</code>);
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, k) => (typeof p === 'string' ? <Fragment key={`t${k}`}>{p}</Fragment> : p))}</>;
}

const CALLOUTS: Record<'tip' | 'exam' | 'warn' | 'memory', { icon: LucideIcon; cls: string; label: string }> = {
  tip: { icon: Lightbulb, cls: 'border-accent/40 bg-accent-soft', label: 'learn.tip' },
  exam: { icon: GraduationCap, cls: 'border-warn/40 bg-warn-soft', label: 'learn.exam' },
  warn: { icon: AlertTriangle, cls: 'border-bad/40 bg-bad-soft', label: 'learn.warn' },
  memory: { icon: Brain, cls: 'border-good/40 bg-good-soft', label: 'learn.memory' },
};
const CALLOUT_TEXT = { tip: 'text-accent', exam: 'text-warn', warn: 'text-bad', memory: 'text-good' } as const;

function CodeBlock({ code, lang, caption }: { code: string; lang: string; caption?: string }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable (http / permissions) */
    }
  };
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-terminal text-[13px]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <span className="font-mono text-[11px] tracking-wider text-white/50 uppercase">{lang}</span>
        <button type="button" onClick={copy} className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] text-white/60 transition hover:bg-white/10 hover:text-white">
          {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
          {copied ? t('learn.copied') : t('learn.copy')}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 leading-relaxed text-[#d7e3f4]">
        <code className="font-mono">{code}</code>
      </pre>
      {caption && <figcaption className="border-t border-white/10 px-3 py-1.5 text-xs text-white/60">{caption}</figcaption>}
    </figure>
  );
}

export function LessonBlockView({ block }: { block: LessonBlock }) {
  const { t } = useTranslation();
  const loc = useLocalized();

  switch (block.type) {
    case 'p':
      return (
        <p>
          <RichText text={loc(block.text)} />
        </p>
      );
    case 'list':
      return (
        <ul className="grid gap-1.5 pl-1">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                <RichText text={loc(it)} />
              </span>
            </li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <ol className="grid gap-2 rounded-xl border border-line bg-surface-2/50 p-4">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-accent-ink">{i + 1}</span>
              <span className="pt-px">
                <RichText text={loc(it)} />
              </span>
            </li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead className="bg-surface-2 text-left">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="border-b border-line px-3 py-2 font-semibold">
                    <RichText text={loc(h)} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="align-top even:bg-surface-2/40">
                  {row.map((c, i) => (
                    <td key={i} className={cn('border-b border-line/70 px-3 py-2', i === 0 && 'font-medium')}>
                      <RichText text={loc(c)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'code':
      return <CodeBlock code={block.code} lang={block.lang} caption={block.caption ? loc(block.caption) : undefined} />;
    case 'diagram':
      return (
        <figure className="grid gap-2">
          <pre className="overflow-x-auto rounded-xl border border-dashed border-line bg-surface-2/60 p-4 font-mono text-[12.5px] leading-snug text-ink">{block.text}</pre>
          {block.caption && <figcaption className="text-center text-xs text-ink-3">{loc(block.caption)}</figcaption>}
        </figure>
      );
    case 'callout': {
      const c = CALLOUTS[block.tone];
      return (
        <aside className={cn('rounded-xl border-l-4 p-4', c.cls)}>
          <p className={cn('mb-1 flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase', CALLOUT_TEXT[block.tone])}>
            <c.icon className="size-4" aria-hidden /> {t(c.label)}
          </p>
          <p className="text-[14.5px]">
            <RichText text={loc(block.text)} />
          </p>
        </aside>
      );
    }
    default:
      return null;
  }
}
