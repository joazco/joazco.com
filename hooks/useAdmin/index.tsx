import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../components/Page";
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


  const deleteProject = (p: Project) => {
    onSnapshot(collection(db, "projects"), (snapshot) => {
      const _projects: Project[] = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as Project;
        console.log("🚀 ~ file: index.tsx ~ line 68 ~ snapshot.docs.forEach ~ data ", data )
        console.log(p, '<<<<<<')
       _projects.filter((data:Project) => data.order !== p.order)  ;
       console.log("🚀 ~ file: index.tsx ~ line 71 ~ snapshot.docs.forEach ~ p.order", p.order)
       console.log("🚀 ~ file: index.tsx ~ line 71 ~ snapshot.docs.forEach ~ data.order", data.order)

    // setProjects((_projects: Project[]) => {
    //   const pp = _projects.filter((_p: Project) => _p.title !== p.title);
    //   // localStorage.setItem("tasks", JSON.stringify(Array.from(_tasks)));
    //   return Array.from(pp);

    });
  })};

  const editProject = (p: Project, c: string) => {
    const ppp = projects.find((_p: Project) => _p.title === p.title);

    if (typeof ppp === "undefined") return;
    ppp.title = c;
    localStorage.setItem("tasks", JSON.stringify(Array.from(projects)));
    setProjects(Array.from(projects));
  }


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
    deleteProject,
  };
};

export default useAdmin;
