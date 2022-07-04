import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Page } from "../components";

const Admin = () => {
  // if (!connected) {
  //     return <Page>Connexion</Page>
  // }
  return (
    <Page>
      <Button variant="contained" endIcon={<SendIcon />}>
        Test
      </Button>
    </Page>
  );
};

export default Admin;
