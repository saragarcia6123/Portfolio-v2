import type { IconType } from "react-icons";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";

export const SECTIONS: Section[] = [
  {
    name: "about",
    icon: FaHome,
  },
  {
    name: "projects",
    icon: FaBriefcase,
  },
  {
    name: "experience",
    icon: FaTimeline,
  },
];

export type Section = {
  name: string;
  icon: IconType;
};

export const SECTION_NAMES = SECTIONS.map((section: Section) => section.name);
