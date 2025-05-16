import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import Projects from "./Projects";
import TechCard from "./TechCard";
import Timeline from "./Timeline";

export default function MainPanel() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 md:ml-62 pb-8 bg-white/5">
      <div id={"about"} className="flex flex-col gap-8">
        <InfoCard />
        <TechCard />
      </div>
      <Section name={"projects"}>
        <Projects />
      </Section>
      <Section name={"timeline"}>
        <Timeline />
      </Section>
    </div>
  );
}

function Section({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div id={name} className="flex flex-col gap-8 justify-center">
      <h3 className="text-xl tracking-widest text-center">
        {name.toUpperCase()}
      </h3>
      {children}
    </div>
  );
}
