import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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
];

export const EMAIL = "saragarcia6123@gmail.com"