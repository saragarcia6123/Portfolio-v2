import { useRef, useState } from "react";
import { technologies, TechSectionEnum, type TechType } from "../data/tech";
import { TechList } from "./TechList";

export default function TechCard() {
  const [selected, setSelected] = useState<TechSectionEnum[]>([]);
  const [all, setAll] = useState<boolean>(false);
  const toggleRef = useRef<HTMLParagraphElement>(null);
  const toggleText = ["more...", "less..."];

  function filteredTechs(): TechType[] {
    if (selected.length === 0) {
      if (all) {
        return technologies;
      }
      return technologies.filter((tech: TechType) => tech.main);
    }

    const techs: TechType[] = [];

    selected.forEach((section: TechSectionEnum) => {
      technologies.forEach((tech: TechType) => {
        if (tech.groups.includes(section)) {
          techs.push(tech);
        }
      });
    });

    return [...new Set(techs)];
  }

  function toggleAll() {
    setAll((prev) => !prev);
    if (toggleRef.current) {
      toggleRef.current.innerText = toggleText[all ? 0 : 1];
    }
  }

  return (
    <div className="card-section">
      <h3 className="text-xl tracking-widest text-center uppercase">
        Tech Stack
      </h3>
      <div className="p-4">
        <TechList techsFiltered={filteredTechs()} />
        {selected.length === 0 ? (
          <p
            ref={toggleRef}
            onClick={() => toggleAll()}
            className="hover:underline hover:cursor-pointer hidden"
          >
            {toggleText[0]}
          </p>
        ) : (
          <p
            onClick={() => setSelected([])}
            className="hover:underline hover:cursor-pointer"
          >
            Clear
          </p>
        )}
      </div>
    </div>
  );
}
