import "./App.css";
import Dev from "./apps/dev/Dev";

import { useEffect, useState } from "react";
import Linktree from "./apps/Linktree.tsx/Linktree";

export default function App() {
  const [subdomain, setSubdomain] = useState<string | null>(null);
  useEffect(() => {
    const host = window.location.host;
    const arr = host
      .split(".")
      .slice(0, host.includes("localhost") ? -1 : -2);

    if (arr.length > 0) setSubdomain(arr[0]);
  }, []);

  let content = <></>;

  if (subdomain === null) content = <Linktree />;
  else if (subdomain === "dev") content = <Dev />;

  return (<>
    {content}

    {/* Tint Overlay */}
    <div className="fixed top-0 left-0 bottom-0 right-0 -z-10 size-full bg-[var(--bg)]" />
  </>)
}
