import React from "react";
import { logoUrl, socials } from "./brand";

const links = [
  { name: "LinkedIn", url: socials.linkedin },
  { name: "YouTube", url: socials.youtube },
  { name: "X.com", url: socials.x },
  { name: "TikTok", url: socials.tiktok },
];

type FooterProps = {
  paused: boolean;
  onToggleMotion: () => void;
};

const Footer = ({ paused, onToggleMotion }: FooterProps) => {
  return (
    <footer className="joazco--footer wrap">
      <img className="footer-logo" src={logoUrl} alt="Joazco" width={780} height={137} />
      <div className="footer-line">
        <span>© 2026 joazco.com - No tracking cookies used</span>
        <div className="footer-links">
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name} ↗
            </a>
          ))}
          <button type="button" onClick={onToggleMotion}>
            {paused ? "Play animations" : "Pause animations"}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
