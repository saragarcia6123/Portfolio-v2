import type { IconType } from "react-icons";
import { FaFile, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export type TypeSocialLink = {
  name: string;
  url: string;
  icon: IconType,
  top: boolean,
  bottom: boolean,
  linktree: boolean
};

export const email = "hello@saragarcia.dev";

export const social_links: TypeSocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/saragarcia6123",
    icon: FaGithub,
    top: true,
    bottom: true,
    linktree: true
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saragarcia6123",
    icon: FaLinkedin,
    top: true,
    bottom: true,
    linktree: true
  },
  {
    name: "Resume",
    url: "https://drive.proton.me/urls/FMYHA86YY0#09TfNrTfVE9a",
    icon: FaFile,
    top: true,
    bottom: false,
    linktree: false
  },
  {
    name: "Email",
    url: `mailto:${email}`,
    icon: FaEnvelope,
    top: false,
    bottom: true,
    linktree: false
  },
];

const getSubdomainURL = (subdomain: string): string => `http${window.location.protocol === "https:" ? "s" : ""}://${subdomain}.${window.location.hostname}:${window.location.port}`;

export const page_links: TypeSocialLink[] = [
  {
    name: "Dev Portfolio",
    url: getSubdomainURL("dev"),
    icon: FaCode,
    top: false,
    bottom: false,
    linktree: true
  }
];

export const top_socials = social_links.filter((link) => link.top);
export const bottom_socials = social_links.filter((link) => link.bottom);
