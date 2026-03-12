import { useMemo } from "react";
import { Project } from "../../types";

type ProjectsComponentProps = {
  projects: Project[];
};

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
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
        <p className="section-tag">Projects</p>
        <h2>Concrete projects built to last</h2>
        <p className="section-intro">
          A selection of deliverables focused on performance, user experience,
          and business impact.
        </p>

        <div className="joazco--block-3-content" data-aos="fade-up">
          {sortedProjects.map((project) => (
            <article
              key={`project-${project.order}`}
              className="joazco--block-3-content-project"
            >
              <a
                href={project.link}
                className="project-card"
                aria-label={`Open project ${project.title}`}
              >
                <div className="project-card-media">
                  <img src={project.image} alt={`Preview of project ${project.title}`} />
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: project.content }}></p>
                  <span className="project-card-cta">
                    View project
                    <i className="fas fa-up-right-from-square"></i>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ProjectsComponent;
