import { useState } from "react";

export default function SectionsList() {
  const sections: string[] = ["about", "experience", "education", "projects"];
  const currentSection =
    typeof window !== "undefined"
      ? sections.includes(window.location.hash.substring(1))
        ? window.location.hash.substring(1)
        : "about"
      : "about";
  return (
    <div className="flex flex-col justify-end gap-8 h-full pl-4">
      {sections.map((name: string) => (
        <SectionTag
          name={name}
          key={`section-tag-${name}`}
          selected={currentSection === name}
        />
      ))}

      <hr className="opacity-25" />
    </div>
  );
}

function SectionTag({ name, selected }: { name: string; selected: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={`#${name.toLowerCase()}`}>
      <h3
        className="pl-2 tracking-[.2em] hover:opacity-100 text-xl flex justify-end"
        style={{
          opacity: selected ? "100%" : hover ? "80%" : "50%",
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {name.toUpperCase()}
      </h3>
    </a>
  );
}
