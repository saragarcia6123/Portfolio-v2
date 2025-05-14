import Sections from "./Sections";
import Socials from "./Socials";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 flex flex-col h-[100vh] p-8 pr-0 justify-between items-end">
      <div className="h-64 w-full">
        <Sections sidebar={true} />
      </div>
      <Socials />
    </div>
  );
}
