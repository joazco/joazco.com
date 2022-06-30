import { useState, FormEvent, useEffect } from "react";
import { ContactFormProps } from "../../components/Home/ContactForm";

//TODO handleSubmit

const useContactForm = (props: ContactFormProps) => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [subjectInput, setSubjectInput] = useState<string>("Projet web");
  const [informationInput, setInformationInput] = useState<string>("");
  const [blockForm, setBlockForm] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (emailInput && subjectInput && informationInput) {
      fetch(
        `https://us-central1-sprint-1bda4.cloudfunctions.net/sendMail?email=${emailInput}&subject=${subjectInput}&information=${informationInput}`
      ).then((response) => response.json());
      localStorage.setItem("email", JSON.stringify(emailInput));
      localStorage.setItem("subject", JSON.stringify(subjectInput));
      localStorage.setItem("information", JSON.stringify(informationInput));
      setBlockForm(true);
    }
  };

  useEffect(() => {
    console.log("use effect useApp called");
    const dataEmail = localStorage.getItem("email");
    const dataSubject = localStorage.getItem("subject");
    const dataInformation = localStorage.getItem("information");
    if (dataEmail && dataSubject && dataInformation) {
      setEmailInput(JSON.parse(dataEmail));
      setSubjectInput(JSON.parse(dataSubject));
      setInformationInput(JSON.parse(dataInformation));
      setBlockForm(true);
    } else {
      setEmailInput("");
      setSubjectInput("Projet web");
      setInformationInput("");
    }
  }, []);

  return {
    setEmailInput,
    emailInput,
    setSubjectInput,
    subjectInput,
    setInformationInput,
    informationInput,
    handleSubmit,
    blockForm,
  };
};

export default useContactForm;
