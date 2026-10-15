import { useEffect, useState } from 'react';
import type { Provider } from '@/lib/types';

const SCRIPTS: Record<Provider, { cmd: string; out: string }[]> = {
  AZURE: [
    { cmd: 'az group create -n rg-lab -l japaneast', out: '"provisioningState": "Succeeded"' },
    { cmd: 'az vm create -g rg-lab -n vm-web01 --image Ubuntu2404 --size Standard_B2s --zone 1', out: '"powerState": "VM running"' },
    { cmd: 'az vm deallocate -g rg-lab -n vm-web01', out: 'compute billing stopped ✓' },
  ],
  AWS: [
    { cmd: 'aws ec2 create-vpc --cidr-block 10.0.0.0/16', out: '"State": "available"' },
    { cmd: 'aws ec2 run-instances --image-id ami-0abc… --instance-type t3.micro', out: '"State": { "Name": "running" }' },
    { cmd: 'aws ec2 stop-instances --instance-ids i-0a1b2c3d', out: 'instance stopped — EBS still billed' },
  ],
};

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** A small fake shell that types real CLI commands for the selected cloud. */
export function Terminal({ provider }: { provider: Provider }) {
  const lines = SCRIPTS[provider];
  const [step, setStep] = useState(0); // index of the line being typed
  const [chars, setChars] = useState(0);

  useEffect(() => {
    setStep(0);
    setChars(0);
  }, [provider]);

  useEffect(() => {
    if (reduced()) {
      setStep(lines.length);
      return;
    }
    const line = lines[step];
    if (!line) {
      const restart = setTimeout(() => {
        setStep(0);
        setChars(0);
      }, 4000);
      return () => clearTimeout(restart);
    }
    if (chars < line.cmd.length) {
      const id = setTimeout(() => setChars((c) => c + 1), 24 + Math.random() * 40);
      return () => clearTimeout(id);
    }
    const next = setTimeout(() => {
      setStep((s) => s + 1);
      setChars(0);
    }, 700);
    return () => clearTimeout(next);
  }, [chars, step, lines]);

  const prompt = provider === 'AZURE' ? 'kaung@cloudshell:~$' : 'kaung@cloudshell ~ %';

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-terminal text-[13px] text-slate-200 shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-slate-400">{provider === 'AZURE' ? 'Azure Cloud Shell — bash' : 'AWS CloudShell — bash'}</span>
      </div>
      <div className="grid min-h-56 content-start gap-2 p-5 font-mono leading-relaxed" aria-label="CLI example" role="img">
        {lines.map((l, i) => {
          if (i > step) return null;
          const typing = i === step;
          return (
            <div key={`${provider}-${i}`} className="grid gap-1">
              <p className="break-all">
                <span className="text-[var(--accent)]">{prompt}</span> {typing ? l.cmd.slice(0, chars) : l.cmd}
                {typing && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-slate-300" />}
              </p>
              {!typing && <p className="text-emerald-400/90">{l.out}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
