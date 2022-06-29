import { FormType } from "../../types";
import { useState } from "react";
import { ContactFormProps } from "../../components/Home/ContactForm";

//! l.21 pblm type event
//TODO handleSubmit

const useContactForm = (props: ContactFormProps) => {
  const [formData, setFormData] = useState<FormType>({
    emailInput: "",
    subjectInput: "Projet web",
    informationInput: "",
  });
  console.log(
    "🚀 ~ file: Contact.tsx ~ line 16 ~ Contact ~ formData",
    formData
  );
  // const { onSubmit } = props;

  const handleChange = (input: string) => (event: any) => {
    setFormData((formData) => ({ ...formData, [input]: event.target.value }));
  };

  //   const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
  //     e.preventDefault();
  //     if (formData) {
  //     }
  //     onSubmit(formData);
  //     setFormData("");
  //   };
  return {
    formData,
    setFormData,
    handleChange,
    // handleSubmit
  };
};

export default useContactForm;
