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
        <hr className="w-full opacity-50 text-blue-100 md:hidden" />
        <Footer />
      </div>

      {/* Background layer */}
      <div
        className="blur-md"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: -20,
          width: "100%",
          height: "100%",
        }}
      />
      {/* Tint Overlay */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(40, 70, 120, 0.5), rgba(20, 40, 80, 0.9))",
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
