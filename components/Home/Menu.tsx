import React from "react";
import { useMenu } from "../../hooks";
import { logoUrl } from "./brand";
import Icon from "./Icon";

const Menu = ({ projectCount }: { projectCount: number }) => {
  const { isOpen, buttonRef, toggle, close } = useMenu();

  return (
    <header className="joazco--header wrap">
      <a href="#top" className="brand">
        <img src={logoUrl} alt="Joazco, back to top" width={780} height={137} />
      </a>
      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="main-nav"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        <Icon name={isOpen ? "close" : "menu"} />
      </button>
      <nav id="main-nav" className={isOpen ? "open" : undefined} aria-label="Main navigation">
        <a href="#projects" onClick={close}>
          Projects <span className="count">{String(projectCount).padStart(2, "0")}</span>
        </a>
        <a href="#who" onClick={close}>
          Approach
        </a>
        <a href="#universe" onClick={close}>
          News
        </a>
        <a href="#contact" className="nav-contact" onClick={close}>
          Let’s talk <Icon name="arrow" />
        </a>
      </nav>
    </header>
  );
};

export default Menu;
