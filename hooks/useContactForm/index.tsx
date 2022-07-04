import { useState, FormEvent, useEffect, useMemo } from "react";

const useContactForm = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [subjectInput, setSubjectInput] = useState<string>("Projet web");
  const [informationInput, setInformationInput] = useState<string>("");
  const [blockForm, setBlockForm] = useState<boolean>(false);
  const showAlert = useMemo(() => {
    return blockForm;
  }, [blockForm]);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (emailInput && subjectInput && informationInput) {
      fetch(
        `https://us-central1-sprint-1bda4.cloudfunctions.net/sendMail?email=${emailInput}&subject=${subjectInput}&information=${informationInput}`
      ).then((response) => response.json());
      localStorage.setItem(
        "inputs",
        JSON.stringify({ emailInput, subjectInput, informationInput })
      );
      setBlockForm(true);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("inputs");
    if (data) {
      const _data = JSON.parse(data);
      setEmailInput(_data["emailInput"]);
      setSubjectInput(_data["subjectInput"]);
      setInformationInput(_data["informationInput"]);
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
    showAlert,
  };
};

export default useContactForm;
