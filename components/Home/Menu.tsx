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
              src="https://firebasestorage.googleapis.com/v0/b/joazco-1fd73.appspot.com/o/images%2Fjoazco_logo_blank_72x72.png?alt=media&token=00e5c472-469e-4683-8653-9205d0417fe5"
              alt="Joazco logo"
            />
          </div>
          <div>JOAZCO</div>
        </div>
        <div className="joazco--header-navbar-right">
          <ul id="joazco--header-navbar-right-links">
            <li>
              <button type="button" data-target="who">
                Who are we?
              </button>
            </li>
            <li>
              <button type="button" data-target="projects">
                Our projects
              </button>
            </li>
            <li>
              <button type="button" data-target="contact">
                Contact us
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
