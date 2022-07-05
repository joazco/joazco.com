import { useState, FormEvent } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const useAdmin = () => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

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
    const connectionWithEmailPassword = (emailInput: string, passwordInput: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailInput, passwordInput).catch((err) => {
          if (err.message.includes("auth/user-not-found")) {
            createUserWithEmailAndPassword(auth, emailInput, passwordInput);
          }
        });
      };

  return {
    // user,
    emailInput,
    setEmailInput,
    passwordInput,
    setPasswordInput,
    // signInWithEmailAndPassword,
    connectionWithEmailPassword
  };
};

export default useAdmin;
