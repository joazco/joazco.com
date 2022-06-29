import { FormType } from "../../types";
import { useState, FormEvent } from "react";
import { ContactFormProps } from "../../components/Home/ContactForm";

//! l.21 pblm type event
//TODO handleSubmit

const useContactForm = (props: ContactFormProps) => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [subjectInput, setSubjectInput] = useState<string>("Projet web");
  const [informationInput, setInformationInput] = useState<string>("");
  // const [formData, setFormData] = useState<FormType>({
  //   emailInput: "",
  //   subjectInput: "Projet web",
  //   informationInput: "",
  // });

  // console.log(
  //   "🚀 ~ file: Contact.tsx ~ line 16 ~ Contact ~ formData",
  //   formData
  // );
  // const { onSubmit } = props;

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (emailInput && subjectInput && informationInput) {
      const formData2: FormType = {
        emailInput,
        subjectInput,
        informationInput,
      };
      console.log(
        "🚀 ~ file: index.tsx ~ line 45 ~ handleSubmit ~ formData2",
        formData2
      );
    }
  };

  // const handleChange = (input: string, event: any) => {
  //   setFormData((_formData) => ({ ..._formData, [input]: event.target.value }));
  // };

  //   const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
  //     e.preventDefault();
  //     if (formData) {
  //     }
  //     onSubmit(formData);
  //     setFormData("");
  //   };
  return {
    // handleChange,
    setEmailInput,
    emailInput,
    setSubjectInput,
    subjectInput,
    setInformationInput,
    informationInput,
    handleSubmit,
    // handleSubmit
  };
};

export default useContactForm;
