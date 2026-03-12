import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        <div>Copyright © 2021 joazco.com</div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/jordan-azoulay/">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <span className="footer-separator">|</span>
          <a href="https://x.com/Joazco">
            <i className="fab fa-x-twitter"></i> X.com
          </a>
          <span className="footer-separator">|</span>
          <a href="https://www.tiktok.com/@joazco_official">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </div>
      </div>
      <div className="footer-cookies">Joazco.com does not use any cookies</div>
    </footer>
  );
};

export default Footer;
