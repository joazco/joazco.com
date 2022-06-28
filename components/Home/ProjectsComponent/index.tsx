import { Project } from "../../../types";

type ProjectsComponentProps = {
  projects: Project[];
};

const ProjectsComponent = ({ projects }: ProjectsComponentProps) => {
  projects.sort((a: any, b: any) => parseFloat(a.order) - parseFloat(b.order));

  return (
    <section className="joazco--block-3" id="projects">
      <article>
        <h2>Nos projets</h2>
        <div className="joazco--block-3-content">
          {projects.map((project) => (
            <div className="joazco--block-3-content-project">
              <div key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.content}</p>
                <div className="joazco--block-3-content-link-content">
                <a href={project.link}>
                  {/* attribut alt ? */}
                  <img src={project.image} />
                  <div>
                      <span>
                        Lien vers {project.link.replace(/(^\w+:|^)\/\//, '')}
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
