import { Button, Grid, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  NavBar,
  Page,
  ProjectForm,
  SigninForm,
  ProjectsTable,
} from "../components";
import { useAdmin } from "../hooks";

const Admin = () => {
  const {
    connected,
    showForm,
    projectEdit,
    logIn,
    logOut,
    setShowForm,
    setProjectEdit,
  } = useAdmin();

  if (connected === undefined) {
    return (
      <Page>
        <p>Loading...</p>
      </Page>
    );
  }

  if (connected) {
    return (
      <Page>
        <Grid>
          <Grid item xs={12}>
            <NavBar onClickLogout={() => logOut()} />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}></Grid>
            {!showForm && (
              <Container>
                <Grid>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                    <h2>Tableau des projets</h2>
                    <Button
                      variant="contained"
                      endIcon={<AddIcon />}
                      color="success"
                      onClick={() => setShowForm(true)}
                    >
                      Nouveau projet
                    </Button>
                    <ProjectsTable
                      onEdit={(project) => {
                        setProjectEdit(project);
                        setShowForm(true);
                      }}
                    />
                  </Grid>
                </Grid>
              </Container>
            )}
            {showForm && (
              <Container>
                <Grid>
                  <Grid>
                    <ProjectForm
                      defaultValue={projectEdit}
                      onCancel={() => {
                        setProjectEdit(undefined);
                        setShowForm(false);
                      }}
                      onSaved={() => {
                        setProjectEdit(undefined);
                        setShowForm(false);
                      }}
                    />
                  </Grid>
                </Grid>
              </Container>
            )}
          </Grid>
        </Grid>
      </Page>
    );
  }

  return (
    <Page>
      <SigninForm onSubmit={(email, password) => logIn(email, password)} />
    </Page>
  );
};

export default Admin;
