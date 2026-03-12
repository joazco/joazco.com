import React from "react";

const Bloc1 = () => {
  return (
    <section className="joazco--block-1" id="top">
      <div className="hero-grid" data-aos="fade-up">
        <article className="hero-copy">
          <p className="section-tag">Independent developer</p>
          <h1>I build clear, fast, and durable digital products.</h1>
          <p>
            Based in the South of France (PACA), I help companies create
            websites, mobile applications, and video game experiences. The goal
            is simple: deliver efficient, maintainable, and elegant products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              Explore my projects
            </a>
            <a href="#contact" className="hero-btn hero-btn-ghost">
              Discuss your project
            </a>
          </div>
        </article>

        <aside className="hero-card" data-aos="fade-left">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fprincipal_img.jpg?alt=media&token=33973961-cf43-4f25-8fce-50ac29ee90dd"
            alt="Preview of Joazco digital services"
          />
          <div className="hero-card-meta">
            <strong>Joazco</strong>
            <span>#Web, #Mobile, #GameDev</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Bloc1;
