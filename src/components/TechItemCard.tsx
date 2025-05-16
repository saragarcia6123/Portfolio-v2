import type { TechType } from "../data/tech";

export function TechItemCard({ tech }: { tech: TechType }) {
  const Icon = tech.icon;
  return (
    <div className="flex gap-2 items-center border-1 pl-4 border-emerald-50/50 rounded-lg px-4 py-2">
      <Icon size={16} aria-label={`${tech.name} Icon`} />
      <p className="text-nowrap text-lg tracking-wide">{tech.name}</p>
    </div>
  );
}
