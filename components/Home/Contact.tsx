import React from "react";
import { useState, FormEvent } from "react";

//? Séparer partie focntionnel
//? Vérification des inputs en backend
//? un seul formulaire donc bloquer après handleSubmit
//? Type Globaux ?
//! l.25 pblm type event

export type formInputType = {
  emailInput: string;
  subjectInput: string;
  informationInput: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<formInputType>({
    emailInput: "",
    subjectInput: "Projet web",
    informationInput: "",
  });
  console.log(
    "🚀 ~ file: Contact.tsx ~ line 16 ~ Contact ~ formData",
    formData
  );

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

  return (
    <section className="joazco--block-4" id="contact">
      <article>
        <h2>Nous contacter</h2>

        <form id="formContact">
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              id="email-input"
              required
              placeholder="nom@domain.com"
              value={formData.emailInput}
              onChange={handleChange("emailInput")}
            />
          </div>
          <div className="form-field">
            <select
              id="reason-input"
              value={formData.subjectInput}
              onChange={handleChange("subjectInput")}
            >
              <option value="Projet web" selected>
                Projet web
              </option>
              <option value="Projet mobile">Projet mobile</option>
              <option value="autre">autre</option>
            </select>
          </div>
          <div className="form-field">
            <textarea
              id="information-input"
              required
              value={formData.informationInput}
              onChange={handleChange("informationInput")}
            ></textarea>
          </div>
          <div className="form-field">
            <button type="submit" id="btn-submit">
              Envoyer <i className="far fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Contact;
