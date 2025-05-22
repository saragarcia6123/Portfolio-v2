import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import Projects from "./Projects";
import TechCard from "./TechCard";
import Timeline from "./Timeline";

export default function MainPanel() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 md:ml-64 pb-8 max-w-[1100px]">
      <div id={"about"} className="flex flex-col gap-8">
        <InfoCard />
        <TechCard />
      </div>
      <Section name={"projects"}>
        <Projects />
      </Section>
      <Section name={"experience"}>
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
