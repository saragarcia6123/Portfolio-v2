import { bottom_socials, type TypeSocialLink } from "../data/socials";

export default function SocialsBottom() {
    return <div className="flex gap-8 justify-center md:hidden">
        {bottom_socials.map((social: TypeSocialLink) => (
            <a href={social.url} target="_blank">
                <social.icon size={32} className="hover:cursor-pointer hover:text-[var(--primary)]"/>
            </a>
        ))}
    </div>
}