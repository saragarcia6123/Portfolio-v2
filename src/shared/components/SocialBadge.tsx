import type { TypeSocialLink } from "../data/socials";

export default function SocialBadge({ social }: { social: TypeSocialLink; }) {
  return (
    <a
      key={`social-link-${social.name}`}
      target="_blank"
      href={social.url}
      className="badge social-badge md:px-0 md:tracking-[.15em] hover:bg-white/10 border-2"
    >
      <social.icon className="badge-icon" aria-label={`${social.name} Icon`} />
      <h4 className="social-name">{social.name}</h4>
    </a>
  );
}
