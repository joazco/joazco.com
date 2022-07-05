import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db, fetchProjects } from "../../components/Page";
import { Project } from "../../types";

const useAdmin = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [connected, setConnected] = useState<boolean | undefined>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const logIn = (emailInput: string, passwordInput: string) => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput).catch(
      (err) => {}
    );
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setConnected(true);
      } else {
        setConnected(false);
      }
    });
  }, []);

  useEffect(() => {
    if (connected) {
      onSnapshot(collection(db, "projects"), (snapshot) => {
        const _projects: Project[] = [];
        snapshot.docs.forEach((doc) => {
          const data = doc.data() as Project;
          _projects.push(data);
        });
        setProjects(
          _projects.sort((a, b) => {
            if (a.order > b.order) {
              return 1;
            }
            if (b.order > a.order) {
              return -1;
            }

            return 0;
          })
        );
      });
    }
  }, [connected]);

  return {
    connected,
    emailInput,
    passwordInput,
    projects,
    showForm,
    setEmailInput,
    setPasswordInput,
    logIn,
    logOut,
    setShowForm,
  };
};

export default useAdmin;
