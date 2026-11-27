import React from "react";
import { useCopyText } from "../../hooks";
import { email } from "./brand";
import Icon from "./Icon";

const ContactForm = ({ accentClass }: { accentClass: string }) => {
  const { status, copy } = useCopyText(email);

  return (
    <section className="joazco--block-4 wrap" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Your turn</p>
      <div className="contact-top">
        <h2 id="contact-title">
          Shall we build
          <br />
          <span className={accentClass}>what’s next?</span>
        </h2>
        <div className="contact-right">
          <p>A well-defined project or an idea to explore? Let’s start by talking about it.</p>
          <a className="button" href={`mailto:${email}`}>
            Tell me about your project <Icon name="arrow" />
          </a>
          <button type="button" className="copy-email" aria-label={`Copy ${email}`} onClick={copy}>
            {email} <Icon name="copy" />
          </button>
          <span className="copy-status" role="status">
            {status}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
