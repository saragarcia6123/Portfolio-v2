import { useState } from "react";

export function SectionTag({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={`#${name.toLowerCase()}`}
      className="transition-all duration-100 ease-linear"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3
        className={`px-2 tracking-[.2em] text-xl flex justify-end ${
          selected ? "text-white" : hover ? "text-white/80" : "text-white/50"
        } transition-colors duration-200 ease-linear`}
      >
        {name.toUpperCase()}
      </h3>
    </a>
  );
}
