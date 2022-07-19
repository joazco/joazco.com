import { useState, useEffect, FormEvent } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../components/Page";
import { ProjectFromProps } from "../../components/Admin/ProjectForm";

const useProjectForm = (props: ProjectFromProps) => {
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");
  const [linkInput, setLinkInput] = useState<string>("");
  const [imageInput, setImageInput] = useState<string>("");
  const [order, setOrder] = useState<number>();

  const { onSaved, defaultValue } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (defaultValue === undefined) {
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
        .finally(() => {
          onSaved();
        });
    } else {
      updateDoc(doc(db, "projects", defaultValue.id), {
        title: titleInput,
        content: contentInput,
        order: order,
        image: imageInput,
        link: linkInput,
      }).finally(() => {
        onSaved();
      });
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setTitleInput(defaultValue.title);
      setContentInput(defaultValue.content);
      setLinkInput(defaultValue.link);
      setImageInput(defaultValue.image);
      setOrder(defaultValue.order);
    }
  }, [defaultValue]);

  return {
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
    handleSubmit,
  };
};

export default useProjectForm;
