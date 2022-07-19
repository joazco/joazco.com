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
        <h2>Nos projets</h2>
        <div className="joazco--block-3-content">
          {_projects.map((project, i) => (
            <div
              key={`project-${project.order}`}
              className="joazco--block-3-content-project"
              data-aos={i % 2 ? "fade-left" : "fade-right"}
            >
              <div key={project.title}>
                <h3>{project.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.content }}></p>
                <div className="joazco--block-3-content-link-content">
                  <a href={project.link}>
                    <img
                      src={project.image}
                      alt={`L'image du projet ${project.title}`}
                    />
                    <div>
                      <span>
                        Lien vers {project.link.replace(/(^\w+:|^)\/\//, "")}
                        <i className="fas fa-external-link-alt"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ProjectsComponent;
