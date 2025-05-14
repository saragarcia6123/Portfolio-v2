import { FaArrowUpRightFromSquare, FaLocationDot } from "react-icons/fa6";
import {
  timeline,
  type TimelineItem,
  type TimelineProject,
} from "../data/timeline";

export default function Timeline() {
  return (
    <div className="card-section">
      {timeline.map((item: TimelineItem) => (
        <TimelineCard item={item} />
      ))}
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="card">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl tracking-widest font-extrabold">
            {item.title}
          </h2>
          <h4 className="flex items-center gap-2 font-extrabold text-lg tracking-widest">
            <FaLocationDot />
            <span>{item.location}</span>
          </h4>
          <p className="italic">
            {item.from} - {item.to}
          </p>
        </div>
        <a
          target="_blank"
          href={item.link}
          className="flex items-center gap-2 px-4 border-1 h-12 rounded-md hover:bg-white/10 border-white/80"
        >
          <p className="text-nowrap">More Info</p>
          <FaArrowUpRightFromSquare size={16} />
        </a>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {item.projects.map((project: TimelineProject) => (
          <TimelineProjectContent project={project} />
        ))}
      </div>
    </div>
  );
}

function TimelineProjectContent({ project }: { project: TimelineProject }) {
  return (
    <div className="p-4 bg-white/10 rounded-lg">
      <h4 className="mb-2 font-bold tracking-wide">{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
}
