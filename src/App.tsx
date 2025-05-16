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

      <div className="flex flex-col justify-between min-h-[100vh]">
        <MainPanel />
        <Footer />
      </div>
      {/* Tint Overlay */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(40, 50, 80), rgba(10, 20, 70))",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
        }}
      />
    </>
  );
}

export default App;
