import { useRef, useState, type RefObject } from "react";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { email, top_socials, type TypeSocialLink } from "../data/socials";

export default function SocialsTop() {
  return (
    <div className="w-full md: mt-4">
      <p className="text-center mb-4 md:mb-2">Let's connect.</p>
      <div className="flex flex-col w-full gap-4 items-center">
        {top_socials.map((social: TypeSocialLink) => SocialBadge({ social }))}
        <HighlightBadge text={"Email"} href={`mailto:${email}`} />
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
      className="badge social-badge md:px-0 md:tracking-[.15em] hover:bg-white/10 border-2"
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
      className="social-badge md:px-4 hover:border-green-300 bg-[var(--primary)] hover:bg-[var(--tertiary)] justify-between hover:rounded-xl"
    >
      {isHovered ? (
        <FaEnvelopeOpen
          className="badge-icon mb-2"
          aria-label="Open Envelope Icon"
        />
      ) : (
        <FaEnvelope className="badge-icon" aria-label="Envelope Icon" />
      )}
      <h3 ref={textRef} className="social-name tracking-widest">
        {text}
      </h3>
    </a>
  );
}
