import { useRef, useState, type RefObject } from "react";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { EMAIL, SOCIAL_LINKS, type TypeSocialLink } from "../data/socials";

export default function Socials() {
  return (
    <div className="w-full md: mt-4">
      <p className="text-center mb-4 md:mb-2">Let's connect.</p>
      <div className="flex flex-col w-full gap-4 items-center">
        {SOCIAL_LINKS.map((social) => SocialBadge({ social }))}
        <HighlightBadge text={"Email"} href={`mailto:${EMAIL}`} />
      </div>
    </div>
  );
}

function SocialBadge({ social }: { social: TypeSocialLink }) {
  return (
    <a
      key={`social-link-${social.name}`}
      target="_blank"
      href={social.url}
      className="social-badge border-emerald-50/75 rounded-md hover:rounded-lg border-1 text-2xl md:text-lg md:px-4 hover:bg-white/10 md:tracking-[.15em] hover:border-emerald-100 hover:text-emerald-50"
    >
      <social.icon className="badge-icon" aria-label={`${social.name} Icon`} />
      <h4 className="social-name">{social.name}</h4>
    </a>
  );
}

interface HighlightBadgeProps {
  text: string;
  href: string;
}

function HighlightBadge({ text, href }: HighlightBadgeProps) {
  const textRef: RefObject<HTMLHeadingElement | null> = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
      target="_blank"
      className="social-badge md:px-4 md:tracking-[.15em] border-3 border-emerald-200 hover:border-green-300 bg-cyan-200 hover:bg-emerald-200 text-emerald-900 justify-between rounded-xs hover:rounded-xl"
    >
      {isHovered ? (
        <FaEnvelopeOpen
          className="badge-icon mb-2"
          aria-label="Open Envelope Icon"
        />
      ) : (
        <FaEnvelope className="badge-icon" aria-label="Envelope Icon" />
      )}
      <h3
        ref={textRef}
        className="social-name tracking-wide text-2xl md:text-xl"
      >
        {text}
      </h3>
    </a>
  );
}
