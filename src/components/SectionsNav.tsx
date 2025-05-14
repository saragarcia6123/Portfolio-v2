import { SECTION_NAMES, SECTIONS, type Section } from "../data/config";
import { createElement, useEffect, useRef, useState } from "react";

export default function SectionsNav({ selected }: { selected: string }) {
  const [visible, setVisible] = useState(true);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(() => {
        setVisible(false);
      }, 1000);
    };

    // Debounce the scroll event
    const debouncedHandleScroll = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        opacity: visible ? "100%" : "0%",
        transition: "opacity 0.5s ease-out",
      }}
      className="fixed z-100 top-4 left-1/2 transform -translate-x-1/2 md:hidden flex gap-2 rounded-full justify-center bg-white/80 p-4"
    >
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
            <div>{createElement(section.icon)}</div>
          )
        )}
      </h3>
    </a>
  );
}
