import type { IconType } from "react-icons";
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export type TypeSocialLink = {
  name: string;
  url: string;
  icon: IconType,
  top: boolean,
  bottom: boolean,
};

export const email = "hello@saragarcia.dev";

const social_links: TypeSocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/saragarcia6123",
    icon: FaGithub,
    top: true,
    bottom: true
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saragarcia6123",
    icon: FaLinkedin,
    top: true,
    bottom: true
  },
  {
    name: "Resume",
    url: "https://docs.google.com/document/d/13ALIqmRljg4p3YDpuC-jxVU1Qs_gaHpLRMIvZeUYVtY/edit?usp=sharing",
    icon: FaFile,
    top: true,
    bottom: false
  },
  {
    name: "Email",
    url: `mailto:${email}`,
    icon: FaEnvelope,
    top: false,
    bottom: true
  },
];

export const top_socials = social_links.filter((link) => link.top);
export const bottom_socials = social_links.filter((link) => link.bottom);