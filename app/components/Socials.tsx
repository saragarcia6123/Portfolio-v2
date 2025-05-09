import { useRef, type RefObject } from "react";
import { EMAIL, SOCIAL_LINKS, type TypeSocialLink } from "~/config";

export default function Socials() {
  const hireTextRef: RefObject<HTMLHeadingElement | null> = useRef(null);

  const onHireHover = () => (hireTextRef.current!.innerText = "Hire me!");
  const onHireExit = () => (hireTextRef.current!.innerText = "Hire me.");
  return (
    <div className="flex flex-col w-full gap-4">
      <p className="text-center">Let's connect.</p>
      {SOCIAL_LINKS.map((social) => SocialBadge({ social }))}
      <a
        onMouseEnter={onHireHover}
        onMouseLeave={onHireExit}
        href={`mailto:${EMAIL}`}
        className="bg-cyan-200 hover:bg-emerald-300 text-gray-900 flex py-1 h-14 items-center justify-center rounded-xs"
      >
        <h3 ref={hireTextRef} className="tracking-wide text-2xl">
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
      className="flex py-2 h-16 items-center border-[rgb(255,255,255,0.5)] border-2 text-xl align-middle justify-around px-5 rounded-md hover:bg-[rgb(255,255,255,0.1)] tracking-[.15em] hover:border-emerald-100"
    >
      <social.icon className="size-8 mr-1" />
      <h4 className="ml-1">{social.name}</h4>
    </a>
  );
}
