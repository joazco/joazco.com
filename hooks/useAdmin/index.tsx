import { useState, FormEvent } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const useAdmin = () => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

const login = e => {
    e.preventDefault();
    const auth = getAuth();
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ handleSubmit ~ auth ", auth )
    
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

  return {
    user,
    emailInput,
    setEmailInput,
    passwordInput,
    setPasswordInput,
    signInWithEmailAndPassword,
  };
};

export default useAdmin;
