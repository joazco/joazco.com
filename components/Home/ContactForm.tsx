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
        <h2>Contact us</h2>
        <p>
          To contact us about building a web and/or mobile application, send an
          email to <a href="mailto:jazoulay@joazco.com">jazoulay@joazco.com</a>{" "}
          and include the subject in your email title.
        </p>
        {/* <div data-aos="flip-left">
          <form id="formContact">
            {showAlert && (
              <div className="form-field alert active">
                <div>
                  <i className="fas fa-check"></i>
                </div>
                <p>
                  Your message has been sent and received. We will get back to
                  you shortly.
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
                placeholder="name@domain.com"
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
                <option value="Web project">Web project</option>
                <option value="Web project">Web project</option>
                <option value="Mobile project">Mobile project</option>
                <option value="other">other</option>
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
                Send <i className="far fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div> */}
      </article>
    </section>
  );
};

export default ContactForm;
