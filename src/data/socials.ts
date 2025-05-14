import type { IconType } from "react-icons";
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

export type TypeSocialLink = { name: string; url: string; icon: IconType }

export const SOCIAL_LINKS: TypeSocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/saragarcia6123",
    icon: FaGithub
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saragarcia6123",
    icon: FaLinkedin,
  },

  {
    name: "Resume",
    url: "https://docs.google.com/document/d/13ALIqmRljg4p3YDpuC-jxVU1Qs_gaHpLRMIvZeUYVtY/edit?usp=sharing",
    icon: FaFile,
  },
];

export const EMAIL = "saragarcia6123@gmail.com"