import { Project } from "../../../types";

type ProjectsComponentProps = {
  projects: Project[];
};

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.title}>
          <h1>{project.title}</h1>
          <p>{project.content}</p>
          <a href={project.link}>
            <img src={project.image} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsComponent;
