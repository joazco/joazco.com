import React from "react";

const Menu = () => {
  return (
    <header className="joazco--header">
      <nav className="joazco--header-navbar" aria-label="Main navigation">
        <div
          className="joazco--header-navbar-left"
          role="button"
          tabIndex={0}
          aria-label="Back to top"
        >
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/favicon.svg?alt=media&token=8254d33e-4665-45c5-8f5d-1a3fa9eb9675"
              alt="Logo Joazco"
            />
          </div>
          <div>JOAZCO</div>
        </div>
        <div className="joazco--header-navbar-right">
          <ul id="joazco--header-navbar-right-links">
            <li>
              <button type="button" data-target="who">
                Expertise
              </button>
            </li>
            <li>
              <button type="button" data-target="projects">
                Projects
              </button>
            </li>
            <li>
              <button type="button" data-target="contact">
                Contact
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="joazco--header-navbar-right-menu"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars icon-default"></i>
            <i className="fa-solid fa-xmark icon-hover"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
