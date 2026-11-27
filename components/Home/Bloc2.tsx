import React from "react";
import Icon from "./Icon";

const services = [
  {
    title: "Web development",
    text: "Showcase websites, business platforms and custom interfaces. A web presence that truly serves your activity.",
    tags: ["Front & back-end", "API & serverless", "SEO & performance"],
  },
  {
    title: "Mobile applications",
    text: "Experiences designed for mobile, from the prototype to publication on the Android and iOS stores.",
    tags: ["Android & iOS", "Hybrid & PWA", "Publishing"],
  },
  {
    title: "Games & experiences",
    text: "Gameplay, interactive stories and prototypes that make you want to keep playing.",
    tags: ["Game design", "Prototyping", "Optimization"],
  },
];

const Bloc2 = () => {
  return (
    <section className="joazco--block-2" id="who" aria-labelledby="who-title">
      <div className="wrap inner">
        <div className="approach-copy">
          <p className="eyebrow">02 / The approach</p>
          <h2 id="who-title">
            The right idea.
            <br />
            The right code.
          </h2>
          <p>
            I’m Jordan, an independent developer based in the South of France (PACA). I turn your
            ideas into digital products that are useful, fast and easy to grow.
          </p>
          <p>
            From the first prototype to launch, I keep the same course: a clear experience and a
            solid technical foundation.
          </p>
          <a href="#contact" className="text-link">
            Let’s get to know each other <Icon name="arrow" />
          </a>
        </div>
        <div className="services">
          {services.map((service, i) => (
            <details key={service.title} open={i === 0}>
              <summary>
                <span className="service-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{service.title}</h3>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="service-body">
                <p>{service.text}</p>
                <ul className="service-tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bloc2;
