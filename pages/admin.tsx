import { Button, TextField, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Page } from "../components";

const Admin = () => {
  // if (!connected) {
  //     return <Page>Connexion</Page>
  // }
  return (
    <Page>
      <div className="admin">
        <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fjoazco_logo_blank_72x72.png?alt=media&token=00e5c472-469e-4683-8653-9205d0417fe5" />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Login"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
          />
          <Button variant="contained" /* endIcon={<SendIcon />} */>
            ok
          </Button>
        </Box>
      </div>
    </Page>
  );
};

export default Admin;
