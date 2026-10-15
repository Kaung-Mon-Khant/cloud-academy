import { Activity, BookOpen, Cloud, HardDrive, Network, Server, ShieldCheck, type LucideIcon } from 'lucide-react';

// Only the icons referenced by the seed data are bundled.
const ICONS: Record<string, LucideIcon> = { Activity, Cloud, HardDrive, Network, Server, ShieldCheck };

export function TopicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? BookOpen;
  return <Icon className={className} aria-hidden />;
}
