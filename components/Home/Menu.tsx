import React from "react";

const Menu = () => {
  return (
    <header className="joazco--header">
      <nav className="joazco--header-navbar">
        <div className="joazco--header-navbar-left">
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fjoazco_logo_blank_72x72.png?alt=media&token=00e5c472-469e-4683-8653-9205d0417fe5" />
          </div>
          <div>JOAZCO</div>
        </div>
        <div className="joazco--header-navbar-right">
          <ul id="joazco--header-navbar-right-links">
            <li data-target="who">Qui sommes-nous?</li>
            <li data-target="projects">Nos projets</li>
            <li data-target="contact">Nous contacter</li>
          </ul>
          <div className="joazco--header-navbar-right-menu">
            <i className="fa-solid fa-bars icon-default"></i>
            <i className="fa-solid fa-xmark icon-hover"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
