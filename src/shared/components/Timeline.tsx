import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  type TimelineItem,
  type TimelineProject,
} from "../data/timeline";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="card-section">
      {items.map((item: TimelineItem) => (
        <TimelineCard
          key={`timeline-project-card-${item.title.toLowerCase()}`}
          item={item}
        />
      ))}
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="card">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl tracking-widest font-extrabold">
          {item.title}
        </h2>
        <h4 className="flex items-center gap-2 font-extrabold text-lg tracking-widest">
          <span>{item.location}</span>
        </h4>
        <p className="italic">
          {item.from.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })} - {item.to.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {item.projects.map((project: TimelineProject) => (
          <TimelineProjectContent
            key={`timeline-project-item-${project.title}`}
            project={project}
          />
        ))}
      </div>
      {
        item.link && <div className="w-full flex justify-center mt-4">
          <a target="_blank" href={item.link} className="link-badge badge">
            <p className="text-nowrap">More Info</p>
            <FaArrowUpRightFromSquare size={16} />
          </a>
        </div>
      }
    </div>
  );
}

function TimelineProjectContent({ project }: { project: TimelineProject }) {
  return (
    <div className="p-4 bg-white/10">
      <h4 className="mb-2 font-bold tracking-wide">{project.title}</h4>
      <p
        dangerouslySetInnerHTML={{
          __html: project.description.replace(/\n/g, "<br>"),
        }}
      />
    </div>
  );
}
