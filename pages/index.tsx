import {
  Page,
  ProjectsComponent,
  Menu,
  Bloc1,
  Bloc2,
  Footer,
  ContactForm
} from "../components";
import { useContactForm } from "../hooks";
import { fetchProjects } from "../components/Page";
import { Project } from "../types";
import { FormEvent } from "react";

type HomeProps = {
  projects: Project[];
  handleSubmit: (e:FormEvent<HTMLButtonElement>) => void;
};

function Home(props: HomeProps) {
  const { projects, handleSubmit } = props;
  return (
    <Page>
      <Menu />
      <Bloc1 />
      <Bloc2 />
      <ProjectsComponent projects={projects} />
      <ContactForm handleSubmit={handleSubmit} />
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
