import {
  Page,
  ProjectsComponent,
  Menu,
  Bloc1,
  Bloc2,
  Footer,
  ContactForm,
  Universe,
} from "../components";
import { fetchProjects } from "../components/Page";
import { useAccent } from "../hooks";
import { Project } from "../types";

type HomeProps = {
  projects: Project[];
};

function Home(props: HomeProps) {
  const { projects } = props;
  const { accent, changing, tick, paused, togglePaused } = useAccent();
  const accentClass = changing ? `accent-word changing-${tick}` : "accent-word";

  return (
    <Page>
      <div className={`joazco--home${paused ? " no-motion" : ""}`} data-accent={accent}>
        <Menu projectCount={projects.length} />
        <Bloc1 projects={projects} accentClass={accentClass} />
        <ProjectsComponent projects={projects} />
        <Bloc2 />
        <Universe />
        <ContactForm accentClass={accentClass} />
        <Footer paused={paused} onToggleMotion={togglePaused} />
      </div>
    </Page>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const projects = await fetchProjects();

  return {
    props: {
      projects,
    },
  };
}
export default Home;
