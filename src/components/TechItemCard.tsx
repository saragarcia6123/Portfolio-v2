import type { TechType } from "../data/tech";

export function TechItemCard({ tech }: { tech: TechType }) {
  const Icon = tech.icon;
  return (
    <div className="flex gap-2 items-center border-1 border-emerald-50/50 rounded-full px-3 py-1">
      <Icon size={16} />
      <p className="text-nowrap">{tech.name}</p>
    </div>
  );
}
