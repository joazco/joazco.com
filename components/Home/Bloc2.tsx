import React from "react";

const Bloc2 = () => {
  return (
    <section className="joazco--block-2" id="who">
      <div className="joazco--block-2-header">
        <h2>Qui sommes-nous?</h2>
      </div>
      <div>
        <p>
          Née de la passion et de l’expertise de Jordan Azoulay, l’entreprise
          Joazco vous offre ses talents pour concrétiser vos projets de sites
          web et d’applications mobiles.
          <br />
          Proche de nos clients, nous vous accompagnons et conseillons tout au
          long du développement de votre projet. Au fait des dernières
          technologies, Joazco vous permet de créer une application mobile sur
          les différentes plateformes à coûts réduits.
        </p>
      </div>
      <div className="joazco--block-2-content" /* data-aos="zoom-in" */>
        <div>
          <h3>Créateur de sites web</h3>
          <p>
            Expert dans les domaines du front end, du back end, de l’hébergement
            de sites web et du serverless, Joazco vous accompagne tout au long
            de votre projet de création de site web.
            <br />
            Bénéficiez des technologies web les plus adaptées à votre marché, à
            votre demande. Quels que soient vos projets web, Joazco les
            concrétisent.
          </p>
        </div>
        <div className="joazco--block-2-content-img" /* data-aos="zoom-in" */>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fbrowser.png?alt=media&token=024482f8-8dd4-4bcf-8444-509d35947005"
            alt="browser icon"
          />
        </div>
        <div className="joazco--block-2-content-2" /* data-aos="zoom-in" */>
          <h3>Créateur d'application mobile</h3>
          <p>
            Donnez vie à vos projets mobile avec notre expertise.
            <br />
            Grâce aux technologies hybrides et PWA, nous développons vos
            applications mobiles Androïd et Ios à moindre coût tout en
            conservant la qualité garantie par l’expérience de Joazco.
          </p>
        </div>
        <div
          className="joazco--block-2-content-2 joazco--block-2-content-img"
          /* data-aos="zoom-in" */
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fmobile-app.png?alt=media&token=47f4bba9-e637-4fe8-a5e4-ccb1c98802ed"
            alt="mobile icon"
          />
        </div>
      </div>
      <div>
        <br />
        <p>
          Parcourez nos projets pour en savoir plus sur nos réalisations.
          Contactez-nous pour nous présenter vos projets et les estimer.
        </p>
      </div>
    </section>
  );
};

export default Bloc2;
