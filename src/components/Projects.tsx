import { projects, type Project } from "../data/projects";
import { technologies, type TechType } from "../data/tech";
import { TechItemCard } from "./TechItemCard";
import { FaGithub } from "react-icons/fa";
import ImageGrid from "./ImageGrid";

export default function Projects() {
  return (
    <div className="card-section">
      {projects.map((project: Project) => (
        <ProjectCard key={`${project.id}-card`} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <h2 className="text-2xl tracking-wider">{project.title.toUpperCase()}</h2>
      <p className="text-lg">{project.description}</p>
      <ProjectTechs project={project} />
      <ImageGrid images={project.images} />
      <div className="w-full flex justify-center mt-8 mb-4">
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

function ProjectTechs({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 text-sm mt-2">
      <div className="flex gap-2 flex-wrap">
        {project.technologies.map((techName) => (
          <TechItemCard
            key={`${project}-${techName}-badge`}
            tech={
              technologies.filter((tech: TechType) => techName === tech.name)[0]
            }
          />
        ))}
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-4 md:text-xl text-nowrap">
      {project.liveLink && <LiveLink link={project.liveLink} />}
      <RepoLink link={project.repoLink} />
    </div>
  );
}

function LiveLink({ link }: { link: string }) {
  return (
    <a className="badge link-badge" href={link} target="_blank">
      <span className="relative flex items-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-200 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-300"></span>
      </span>
      <span>Live Site</span>
    </a>
  );
}

function RepoLink({ link }: { link: string }) {
  return (
    <a className="badge link-badge" href={link} target="_blank">
      <span className="relative flex items-center">
        <FaGithub />
      </span>
      Source Code
    </a>
  );
}
