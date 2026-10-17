import { useState } from "react";

export function TechHeader({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    backgroundColor:
      selected || isHovered ? "rgba(220, 245, 240, 0.15)" : "transparent",
    borderColor: selected ? "rgba(255, 255, 255, 0.5)" : "transparent",
  };
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="uppercase tracking-wide hover:cursor-pointer border-1 hover:bg-emerald-50/20 px-3.5 py-2 rounded-sm hidden"
      style={style}
    >
      <h3>{name}</h3>
    </div>
  );
}
