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
    <div className="size-full grid grid-cols-[max(25%,240px)_1fr]">
      <Sidebar />
      <MainPanel />
    </div>
  );
}
