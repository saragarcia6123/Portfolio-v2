import type { TechType } from "../data/tech";
import { TechItemCard } from "./TechItemCard";

export function TechList({ techsFiltered }: { techsFiltered: TechType[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Object.values(techsFiltered).map((tech: TechType) => (
        <TechItemCard key={tech.name} tech={tech} />
      ))}
    </div>
  );
}
