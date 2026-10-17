import { useState, useEffect } from "react";
import SectionsList from "./SectionsList";
import { SECTION_NAMES } from "../data/config";
import SectionsNav from "./SectionsNav";

export default function Sections({ sidebar }: { sidebar: boolean }) {
  const [selectedSection, setSelectedSection] = useState(SECTION_NAMES[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_NAMES.map((name) => {
        const element = document.getElementById(name);
        return {
          name,
          top: element?.offsetTop || 0,
          height: element?.offsetHeight || 0,
        };
      });

      const currentSection = sections.find((section) => {
        const leeway = 200;
        const scrollTop = window.pageYOffset;
        return (
          scrollTop >= section.top - leeway &&
          scrollTop + leeway < section.top + section.height
        );
      });

      if (currentSection) {
        setSelectedSection(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sidebar ? (
        <SectionsList selected={selectedSection} />
      ) : (
        <SectionsNav selected={selectedSection} />
      )}
    </>
  );
}
