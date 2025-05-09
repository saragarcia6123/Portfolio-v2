import SectionsList from "./SectionsList";
import Socials from "./Socials";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-[100vh] p-4 justify-between">
      <SectionsList />
      <Socials />
    </div>
  );
}
