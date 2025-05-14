import type { IconType } from "react-icons";
import { FaBriefcase, FaHome } from "react-icons/fa";

export const SECTIONS: Section[] = [
  {
    name: "about",
    icon: FaHome,
  },
  {
    name: "projects",
    icon: FaBriefcase,
  },
];

export type Section = {
  name: string;
  icon: IconType;
};

export const SECTION_NAMES = SECTIONS.map((section: Section) => section.name);
