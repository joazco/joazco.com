import React from "react";
import { FormType } from "../../types";
import { useContactForm } from "../../hooks";

//? Séparer partie focntionnel
//? Vérification des inputs en backend
//? un seul formulaire donc bloquer après handleSubmit
//? Type Globaux 


export type ContactFormProps = {
  onSubmit: (Form: FormType) => void;
};

const ContactForm = (props: ContactFormProps) => {
  const { handleChange, formData } = useContactForm(props);

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

export default ContactForm;
