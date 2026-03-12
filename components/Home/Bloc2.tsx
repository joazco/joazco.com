import React from "react";

const Bloc2 = () => {
  return (
    <section className="joazco--block-2" id="who">
      <div className="joazco--block-2-header" data-aos="fade-up">
        <p className="section-tag">Expertise</p>
        <h2>A pragmatic approach focused on results</h2>
        <p className="section-intro">
          Every project starts with a clear understanding of your needs,
          followed by a structured execution plan. You move forward with solid
          technical direction, justified decisions, and a product built to
          evolve.
        </p>
      </div>

      <div className="joazco--block-2-content" data-aos="fade-up">
        <article className="service-card">
          <h3>Web development</h3>
          <p>
            Corporate websites, business interfaces, custom platforms, APIs,
            and high-performance architecture built for SEO and conversion.
          </p>
          <span>Front-end, Back-end, Serverless</span>
        </article>

        <article className="service-card">
          <h3>Mobile applications</h3>
          <p>
            Reliable Android/iOS apps with UX designed for real-world usage and
            controlled maintenance costs.
          </p>
          <span>Hybrid, PWA, store publishing</span>
        </article>

        <article className="service-card">
          <h3>Video games</h3>
          <p>
            Gameplay design, fast prototyping, interactive storytelling, and
            technical optimization for a polished final result.
          </p>
          <span>Prototype, gameplay, iterations</span>
        </article>
      </div>

      <p className="joazco--block-2-outro" data-aos="fade-up">
        One technical point of contact to scope, build, and continuously
        improve your product quality.
      </p>
    </section>
  );
};

export default Bloc2;
