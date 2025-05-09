import type { Route } from "./+types/home";
import Sidebar from "~/components/Sidebar";
import MainPanel from "~/components/MainPanel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      {/* Background layer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <Sidebar />
      <div className="ml-64">
        <MainPanel />
      </div>
      <footer className="pl-48 w-full p-8 flex justify-center">
        © 2025 saragarcia.dev
      </footer>
    </>
  );
}
