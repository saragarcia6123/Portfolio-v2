import "./App.css";
import Footer from "./components/Footer";
import MainPanel from "./components/MainPanel";
import Sections from "./components/Sections";
import Sidebar from "./components/Sidebar";

function App() {
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
      {/* Tint Overlay */}
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-10 size-full bg-[var(--bg)]" />
    </>
  );
}

export default App;
