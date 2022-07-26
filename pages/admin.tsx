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
        <div className="icone-container">
        <img className="turn-icone" src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.ico?alt=media&token=3548ef6e-8dd7-47b2-aaf6-5d27d3c242f0"/>
        </div>
      </Page>
    );
  }

  if (connected) {
    return (
      <Page >
        <Grid>
          <Grid item xs={12}>
            <NavBar onClickLogout={() => logOut()} />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}></Grid>
            {!showForm && (
              <Container className="admin-table-wrapper">
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
