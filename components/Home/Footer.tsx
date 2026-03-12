import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        <div>Copyright © 2021 joazco.com</div>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/jordan-azoulay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Joazco on LinkedIn"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://x.com/Joazco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Joazco on X.com"
          >
            <i className="fab fa-x-twitter"></i> X.com
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://www.tiktok.com/@joazco_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Joazco on TikTok"
          >
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </div>
      </div>
      <div className="footer-cookies">Joazco.com does not use any cookies</div>
    </footer>
  );
};

export default Footer;
