import { useState, useEffect, FormEvent } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../components/Page";
import { Project } from "../../types";
import useAdmin from "../useAdmin";

export type ProjectFromProps = {
  defaultValue?: Project;
  onSaved: () => void;
  onCancel: () => void;
};

const useProjectForm = (props: ProjectFromProps) => {
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");
  const [linkInput, setLinkInput] = useState<string>("");
  const [imageInput, setImageInput] = useState<string>("");
  const [order, setOrder] = useState<number>();

  const { onCancel, onSaved, defaultValue } = props;
  console.log("🚀 ~ file: index.tsx ~ line 29 ~ useProjectForm ~ defaultValue", defaultValue)
  const { setShowForm } = useAdmin();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    if (defaultValue != undefined) {
      console.log("🚀 ~ file: index.tsx ~ line 35 ~ handleSubmit ~ defaultValue", defaultValue)
      e.preventDefault();
      addDoc(collection(db, "projects"), {
        title: titleInput,
        content: contentInput,
        order: order,
        image: imageInput,
        link: linkInput,
      })
        .then((docRef) => {
          updateDoc(doc(db, "projects", docRef.id), {
            id: docRef.id,
          });
        })
        .then(() => {
          setShowForm(false);
        });
    }
  };

  // useEffect(() => {
  //   if (defaultValue) {
  //     setTitleInput(defaultValue.title);
  //     setContentInput(defaultValue.content);
  //     setLinkInput(defaultValue.link);
  //     setImageInput(defaultValue.image);
  //     setOrder(defaultValue.order);
  //   }
  // }, [defaultValue]);

  return {
    handleSubmit,
    titleInput,
    contentInput,
    linkInput,
    imageInput,
    order,
    setTitleInput,
    setContentInput,
    setLinkInput,
    setImageInput,
    setOrder,
  };
};

export default useProjectForm;
