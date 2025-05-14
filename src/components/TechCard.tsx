import { useRef, useState } from "react";
import { technologies, TechSectionEnum, type TechType } from "../data/tech";
import { TechHeader } from "./TechHeader";
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

  function updateSelected(item: TechSectionEnum): void {
    if (selected.includes(item)) {
      setSelected(
        selected.filter((itemInner: TechSectionEnum) => itemInner !== item)
      );
    } else {
      setSelected((prev) => [...prev, item]);
    }
  }

  function switchTab(item: TechSectionEnum) {
    setAll(false);
    if (toggleRef.current) {
      toggleRef.current.innerText = toggleText[0];
    }
    updateSelected(item);
  }

  function toggleAll() {
    setAll((prev) => !prev);
    if (toggleRef.current) {
      toggleRef.current.innerText = toggleText[all ? 0 : 1];
    }
  }

  return (
    <div className="flex flex-col items-center md:gap-2 gap-6 p-4 md:mx-24 mx-3">
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.values(TechSectionEnum).map((item: TechSectionEnum) => (
          <TechHeader
            key={`tech-card-${item}`}
            name={item}
            selected={selected.includes(item)}
            onClick={() => {
              switchTab(item);
            }}
          />
        ))}
      </div>
      <hr className="opacity-20" />
      <TechList techsFiltered={filteredTechs()} />
      {selected.length === 0 ? (
        <p
          ref={toggleRef}
          onClick={() => toggleAll()}
          className="hover:underline hover:cursor-pointer"
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
  );
}
