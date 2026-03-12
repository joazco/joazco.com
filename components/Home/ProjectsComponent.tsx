import { useMemo } from "react";
import { Project } from "../../types";

type ProjectsComponentProps = {
  projects: Project[];
};

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
  const _projects = useMemo(() => {
    return projects.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      if (b.order > a.order) {
        return -1;
      }

      return 0;
    });
  }, [projects]);

  return (
    <section className="joazco--block-3" id="projects">
      <article>
        <h2>Our projects</h2>
        <div className="joazco--block-3-content" data-aos="fade-up">
          {_projects.map((project) => (
            <div
              key={`project-${project.order}`}
              className="joazco--block-3-content-project"
            >
              <a
                href={project.link}
                className="project-flip-card"
                aria-label={`Open project ${project.title}`}
              >
                <div className="project-flip-card-inner">
                  <div className="project-flip-card-face project-flip-card-front">
                    <img src={project.image} alt={`Project image: ${project.title}`} />
                    <div className="project-flip-card-front-overlay">
                      <h3>{project.title}</h3>
                      <span>{project.link.replace(/(^\w+:|^)\/\//, "")}</span>
                    </div>
                  </div>
                  <div className="project-flip-card-face project-flip-card-back">
                    <h3>{project.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: project.content }}></p>
                    <span className="project-flip-card-cta">
                      Visit project <i className="fas fa-external-link-alt"></i>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ProjectsComponent;
