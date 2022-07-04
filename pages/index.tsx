import {
  Page,
  ProjectsComponent,
  Menu,
  Bloc1,
  Bloc2,
  Footer,
  ContactForm,
} from "../components";
import { fetchProjects } from "../components/Page";
import { Project } from "../types";

type HomeProps = {
  projects: Project[];
};

function Home(props: HomeProps) {
  const { projects } = props;
  return (
    <Page>
      <Menu />
      <Bloc1 />
      <Bloc2 />
      <ProjectsComponent projects={projects} />
      <ContactForm />
      <Footer />
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
