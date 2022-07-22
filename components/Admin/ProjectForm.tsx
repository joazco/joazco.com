import { Button, TextField, Box, Grid } from "@mui/material";
import { useProjectForm } from "../../hooks";
import { Project } from "../../types";

export type ProjectFromProps = {
  defaultValue?: Project;
  onSaved: () => void;
  onCancel: () => void;
};

const ProjectForm = (props: ProjectFromProps) => {
  const {
    titleInput,
    contentInput,
    linkInput,
    imageInput,
    order,
    setTitleInput,
    setContentInput,
    setLinkInput,
    setImageInput,
    setOrder,
    handleSubmit,
  } = useProjectForm(props);

  const { defaultValue, onCancel } = props;

  return (
    <div className="admin-login">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Grid container spacing={2} className="input-zone-project">
        {defaultValue === undefined ? (
          <h1>Ajouter un nouveau projet</h1>
              ) : (
          <h1>Modifier un projet</h1>
              )}
          <Grid item xs={12}>
            <label>Titre</label>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type=""
              required
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Contenu</label>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type=""
              required
              value={contentInput}
              onChange={(e) => setContentInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Lien</label>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type=""
              required
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Image</label>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type=""
              required
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Ordre</label>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              type="number"
              required
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} className="button-zone">
            <Button variant="contained" type="submit">
              {defaultValue === undefined ? (
                <span>Ajouter</span>
              ) : (
                <span>Modifier</span>
              )}
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={() => onCancel()}
            >
              Annuler
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProjectForm;
