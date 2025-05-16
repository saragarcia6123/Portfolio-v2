import { SECTION_NAMES } from "../data/config";
import { SectionTag } from "./SectionTag";

export default function SectionsList({ selected }: { selected: string }) {
  return (
    <div className="md:flex hidden flex-col justify-center gap-8 h-full pl-4">
      {SECTION_NAMES.map((name: string) => (
        <SectionTag
          name={name}
          key={`section-tag-${name}`}
          selected={selected === name}
        />
      ))}
      <hr className="badge" />
    </div>
  );
}
