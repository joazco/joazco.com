import React from "react";
import { useContactForm } from "../../hooks";

const ContactForm = () => {
  const {
    handleSubmit,
    setEmailInput,
    emailInput,
    setSubjectInput,
    subjectInput,
    setInformationInput,
    informationInput,
    blockForm,
    showAlert,
  } = useContactForm();

  return (
    <section className="joazco--block-4" id="contact">
      <article>
        <h2>Nous contacter</h2>
        <p>
          Pour nous contacter pour la création d'une application web et/ou
          mobile, envoyez un mail à l'adresse{" "}
          <a href="mailto:jazoulay@joazco.com">jazoulay@joazco.com</a> en
          indiquant le sujet dans l'objet du mail.
        </p>
        {/* <div data-aos="flip-left">
          <form id="formContact">
            {showAlert && (
              <div className="form-field alert active">
                <div>
                  <i className="fas fa-check"></i>
                </div>
                <p>
                  Votre message a bien été envoyé et reçu, vous aurez un retour
                  d'ici peu.
                </p>
              </div>
            )}
            <div className="form-field">
              <label>Email</label>
              <input
                disabled={blockForm}
                type="email"
                id="email-input"
                required
                placeholder="nom@domain.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-field">
              <select
                disabled={blockForm}
                id="reason-input"
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
              >
                <option value="Projet web">Projet web</option>
                <option value="Projet mobile">Projet mobile</option>
                <option value="autre">autre</option>
              </select>
            </div>
            <div className="form-field">
              <textarea
                disabled={blockForm}
                id="information-input"
                required
                value={informationInput}
                onChange={(e) => setInformationInput(e.target.value)}
              ></textarea>
            </div>
            <div className="form-field">
              <button
                type="submit"
                id="btn-submit"
                onClick={(e) => handleSubmit(e)}
              >
                Envoyer <i className="far fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div> */}
      </article>
    </section>
  );
};

export default ContactForm;
