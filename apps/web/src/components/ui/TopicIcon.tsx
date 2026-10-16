import {
  Activity,
  BookOpen,
  Cloud,
  Database,
  FileCode2,
  HardDrive,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

// Only the icons referenced by the seed data are bundled.
const ICONS: Record<string, LucideIcon> = { Activity, Cloud, Database, FileCode2, HardDrive, Layers, Network, Server, ShieldCheck, Wallet };

export function TopicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? BookOpen;
  return <Icon className={className} aria-hidden />;
}
