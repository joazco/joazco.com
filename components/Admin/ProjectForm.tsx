import { Button, TextField, Box, Grid } from "@mui/material";
import { useAdmin } from "../../hooks";

type ProjectFromProps = {
  onSubmit: (
    title: string,
    content: string,
    link: string,
    image: string,
    order: number
  ) => void;
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
  } = useAdmin();

  const { onSubmit } = props;

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
          e.preventDefault();
          onSubmit(titleInput, contentInput, linkInput, imageInput, order);
          return false;
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
              onChange={(e) => setOrder(0)}
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
              onCancel ={() => setShowForm(false)}
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
