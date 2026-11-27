import { useMemo } from "react";
import { Project } from "../../types";
import Icon from "./Icon";

type ProjectsComponentProps = {
  projects: Project[];
};

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
  const sortedProjects = useMemo(() => [...projects].sort((a, b) => a.order - b.order), [projects]);

  return (
    <section className="joazco--block-3 wrap" id="projects" aria-labelledby="projects-title">
      <p className="eyebrow">01 / Selected work</p>
      <h2 id="projects-title">
        Real work,
        <br />
        ready to explore.
      </h2>

      <div className="joazco--block-3-content">
        {sortedProjects.map((project) => (
          <article key={`project-${project.order}`}>
            <a href={project.link} className="project-card">
              <div className="project-card-media">
                <img src={project.image} alt="" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <div
                  className="project-card-content"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
                <span className="project-card-cta">
                  View project <Icon name="arrow" />
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>

      <a
        className="github-link"
        href="https://github.com/joazco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Also: open source code and experiments.</span>
        <strong>
          On GitHub <Icon name="arrow" />
        </strong>
      </a>
    </section>
  );
};

export default ProjectsComponent;
