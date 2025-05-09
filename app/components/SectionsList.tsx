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
    <div className="flex flex-col gap-4 p-2">
      {sections.map((name: string) => (
        <SectionTag
          name={name}
          key={`section-tag-${name}`}
          selected={currentSection === name}
        />
      ))}
      <hr className="mt-1 opacity-25" />
    </div>
  );
}

function SectionTag({ name, selected }: { name: string; selected: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={`#${name.toLowerCase()}`}>
      <h3
        className="pl-2 tracking-widest font-light hover:opacity-100"
        style={{
          opacity: selected ? "100%" : hover ? "75%" : "25%",
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {name.toUpperCase()}
      </h3>
    </a>
  );
}
