import Sections from "./Sections";
import Socials from "./Socials";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 flex flex-col h-[100vh] p-8 justify-between items-end border-r-1 border-emerald-50/60">
      <div className="h-64 w-full">
        <Sections sidebar={true} />
      </div>
      <Socials />
    </div>
  );
}
