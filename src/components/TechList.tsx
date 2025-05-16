import type { TechType } from "../data/tech";
import { TechItemCard } from "./TechItemCard";

export function TechList({ techsFiltered }: { techsFiltered: TechType[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
      {techsFiltered.map((tech: TechType) => (
        <TechItemCard key={tech.name} tech={tech} />
      ))}
    </div>
  );
}
