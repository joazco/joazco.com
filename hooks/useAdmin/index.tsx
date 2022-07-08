import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../components/Page";
import { Project } from "../../types";

const useAdmin = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [connected, setConnected] = useState<boolean | undefined>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");
  const [linkInput, setLinkInput] = useState<string>("");
  const [imageInput, setImageInput] = useState<string>("");
  const [order, setOrder] = useState<number>();

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
        _projects.filter((data) => data.order !== p.order);
      });
    });
  };


  const addProject = async (
    title: string,
    content: string,
    link: string,
    image: string,
    order: number
  ) => {
    await addDoc(collection(db, "projects"), {
      title,
      content,
      link,
      image,
      order,
    })
      .then((docRef) => {
        updateDoc(doc(db, "projects", docRef.id), {
          id: docRef.id,
        });
      })
      .then(() => {
        setShowForm(false);
      });
  };

  // useEffect(() => {
  //   if(defaultValue){
  //   setTitle(defaultValue.title);
  //   setContent(defaultValue.content)
  //  ....
  //  }
  //  }, [defaultValue]);

  const editProject = async (
    title: string,
    content: string,
    link: string,
    image: string,
    order: number, 
    id: number
  ) => {
    await updateDoc(doc(db, "projects" /* ,__ID__ */), {
      // ...valuesFromForm,
    }).then(() => {
      setShowForm(false);
    });
  };

  return {
    connected,
    emailInput,
    passwordInput,
    projects,
    showForm,
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
    addProject,
    editProject,
    setPasswordInput,
    logIn,
    logOut,
    setShowForm,
    deleteProject,
  };
};

export default useAdmin;
