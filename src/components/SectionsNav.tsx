import { SECTION_NAMES, SECTIONS, type Section } from "../data/config";
import { createElement } from "react";

export default function SectionsNav({ selected }: { selected: string }) {
  return (
    <div className="fixed z-100 top-4 left-1/2 transform -translate-x-1/2 md:hidden flex gap-2 rounded-full justify-center bg-white/70 px-4 py-2">
      {SECTION_NAMES.map((name: string) => (
        <SectionIcon
          key={`section-tag-${name}`}
          name={name}
          selected={selected === name}
        />
      ))}
      <hr className="border-emerald-50/50" />
    </div>
  );
}

function SectionIcon({ name, selected }: { name: string; selected: boolean }) {
  return (
    <a
      href={`#${name.toLowerCase()}`}
      className="transition-all duration-100 ease-linear"
    >
      <h3
        className={`px-2 tracking-[.2em] text-xl flex justify-end ${
          selected ? "text-emerald-600/80" : "text-emerald-950/20"
        } transition-colors duration-200 ease-linear`}
      >
        {SECTIONS.filter((section: Section) => section.name === name).map(
          (section: Section) => (
            <div key={`${section.name}-icon`}>
              {createElement(section.icon)}
            </div>
          )
        )}
      </h3>
    </a>
  );
}
