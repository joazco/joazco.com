import { Button, TextField, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Page } from "../components";
import { useAdmin } from "../hooks";
import { useState, FormEvent } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Admin = () => {
  // if (!connected) {
  //     return <Page>Connexion</Page>
  // }

  // const {
  //   // setEmailInput,
  //   // setPasswordInput,
  //   // passwordInput,
  //   // emailInput,
  //   // signInWithEmailAndPassword,
  //   connectionWithEmailPassword
  // } = useAdmin();
  // const [user, setUser] = useState<User | null | undefined>(undefined);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const connectionWithEmailPassword = (emailInput: string, passwordInput: string) => {
  console.log("🚀 ~ file: admin.tsx ~ line 27 ~ connectionWithEmailPassword ~ passwordInput", passwordInput)
  console.log("🚀 ~ file: admin.tsx ~ line 27 ~ connectionWithEmailPassword ~ emailInput", emailInput)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailInput, passwordInput).catch((err) => {
      if (err.message.includes("auth/user-not-found")) {
        createUserWithEmailAndPassword(auth, emailInput, passwordInput);
      }
    });
  };

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
            label="Email"
            variant="outlined"
            required
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <Button
            variant="contained"
            /* endIcon={<SendIcon />} */ onClick={() => connectionWithEmailPassword(emailInput, passwordInput)}
          >
            Log In
          </Button>
        </Box>
      </div>
    </Page>
  );
};

export default Admin;
