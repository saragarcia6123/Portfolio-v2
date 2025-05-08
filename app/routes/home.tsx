import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="size-full flex items-center justify-center">
      <h1 className="text-5xl">Under Construction</h1>
    </div>
  );
}
