import { Button, TextField, Box, Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useAdmin } from "../../hooks";

type SigninFormProps = {
  onSubmit: (email: string, password: string) => void;
};

const SigninForm = (props: SigninFormProps) => {
  const { passwordInput, emailInput, setEmailInput, setPasswordInput } =
    useAdmin();
  const { onSubmit } = props;

  return (
    <div className="admin-login">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(emailInput, passwordInput);
          return false;
        }}
      >

        <Grid container spacing={2}>
        <div className="input-zone">
        <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fjoazco_logo_blank_72x72.png?alt=media&token=00e5c472-469e-4683-8653-9205d0417fe5"/>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              required
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" endIcon={<LoginIcon />} type="submit">
              Connexion
            </Button>
          </Grid>
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default SigninForm;
