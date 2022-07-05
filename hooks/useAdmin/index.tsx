import { useState, FormEvent } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../components/Page";

const useAdmin = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [connected, setConnected] = useState<Boolean>(false);

  // const login = e => {
  //     e.preventDefault();
  //     const auth = getAuth();
  //     console.log("🚀 ~ file: index.tsx ~ line 13 ~ handleSubmit ~ auth ", auth )

  // signInWithEmailAndPassword(auth, emailInput, passwordInput)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  // }
  const connectionWithEmailPassword = (
    emailInput: string,
    passwordInput: string
  ) => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput).catch((err) => {
    });
  };

  // const checkAuth = () => {
  //   onAuthStateChanged(auth, (u) => {
  //     setUser(u);
  //   });
  // };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return {
    // user,
    emailInput,
    setEmailInput,
    passwordInput,
    setPasswordInput,
    // signInWithEmailAndPassword,
    connectionWithEmailPassword,
  };
};

export default useAdmin;
