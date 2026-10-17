
import Footer from "./../../shared/components/Footer";
import MainPanel from "./../../shared/components/MainPanel";
import Sections from "./../../shared/components/Sections";
import Sidebar from "./../../shared/components/Sidebar";

export default function Dev() {
    return (
        <>
      {/* Show Sidebar only on md and up (desktop) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="block md:hidden">
        <Sections sidebar={false} />
      </div>

      <div className="flex flex-col justify-between min-h-[100vh] items-center">
        <MainPanel />
        <Footer />
      </div>
    </>
    )
}