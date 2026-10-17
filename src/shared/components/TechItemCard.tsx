import type { TechType } from "../data/tech";

export function TechItemCard({ tech }: { tech: TechType }) {
  const Icon = tech.icon;
  return (
    <div className="badge flex gap-2 items-center pl-4 px-4 py-2 border-1">
      <Icon size={20} aria-label={`${tech.name} Icon`} />
      <p className="text-nowrap text-md tracking-wide">{tech.name}</p>
    </div>
  );
}
