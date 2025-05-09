import { useRef, type RefObject } from "react";
import { EMAIL, SOCIAL_LINKS, type TypeSocialLink } from "~/config";

export default function Socials() {
  const hireTextRef: RefObject<HTMLHeadingElement | null> = useRef(null);

  const onHireHover = () => (hireTextRef.current!.innerText = "Hire me!");
  const onHireExit = () => (hireTextRef.current!.innerText = "Hire me.");
  return (
    <div className="flex flex-col w-full gap-4">
      {SOCIAL_LINKS.map((social) => SocialBadge({ social }))}
      <a
        onMouseEnter={onHireHover}
        onMouseLeave={onHireExit}
        href={`mailto:${EMAIL}`}
        className="bg-[#a1e2f4] hover:bg-[#99FFC7] text-gray-900 flex py-1 h-14 items-center justify-center rounded-xs"
      >
        <h3 ref={hireTextRef} className="tracking-wide">
          Hire me.
        </h3>
      </a>
    </div>
  );
}

function SocialBadge({ social }: { social: TypeSocialLink }) {
  return (
    <a
      key={`social-link-${social}`}
      target="_blank"
      href={social.url}
      className="flex py-2 h-16 items-center border-[rgb(255,255,255,0.5)] border-1 align-middle justify-around px-5 rounded-md hover:bg-[rgb(255,255,255,0.1)] tracking-widest"
    >
      <social.icon className="size-8" />
      <h4>{social.name}</h4>
    </a>
  );
}
