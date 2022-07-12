import { HealthAndSafetyTwoTone } from "@mui/icons-material";
import { Button, TextField, Box, Grid } from "@mui/material";
import { useAdmin } from "../../hooks";
import { Project } from "../../types";

type ProjectFromProps = {
  onEdit: (defaultValue?: Project, id?:string) => void;
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
    setEmailInput,
    setOrder,
    handleSubmit,
  } = useAdmin();

  const { onEdit /* onCancel */ } = props;

  return (
    <div className="admin">
      <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fjoazco_logo_blank_72x72.png?alt=media&token=00e5c472-469e-4683-8653-9205d0417fe5" />
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
        <Grid container spacing={2}>
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
              type=""
              required
              value={order}
              onChange={(e) => setOrder(3)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              /* endIcon={<LoginIcon />}  */ type="submit"
            >
              Ajouter
            </Button>
            <Button
              variant="contained"
              /* endIcon={<LoginIcon />}  */ type="submit"
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
