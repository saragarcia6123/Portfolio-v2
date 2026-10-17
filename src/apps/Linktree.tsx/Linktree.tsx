import Footer from "../../shared/components/Footer";
import InfoCard from "../../shared/components/InfoCard";
import SocialBadge from "../../shared/components/SocialBadge";
import { page_links, social_links } from "../../shared/data/socials";

const getSubdomainURL = (subdomain: string): string => `https://${subdomain}.${window.location.hostname}`;

export default function Linktree() {
    return (
        <div className="flex flex-col min-h-[100vh] items-center justify-center gap-4 text-center p-4">

            <InfoCard />
            <hr className="my-4 w-[30rem] border-t-2 border-gray-300 dark:border-gray-700" />

            <h1 className="text-xl text-center">SITES</h1>
            <div className="flex flex-col w-[30rem] gap-4 items-center text-center">
                {page_links.map((link) => (
                    <SocialBadge
                        key={link.name}
                        social={link}
                    />
                ))}
            </div>
            
            <br className="my-2" />

            <h1 className="text-xl text-center">SOCIALS</h1>
            <div className="flex flex-col w-[30rem] gap-4 items-center text-center">
                {social_links.filter((link) => link.linktree).map((link) => (
                    <SocialBadge
                        key={link.name}
                        social={link}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}