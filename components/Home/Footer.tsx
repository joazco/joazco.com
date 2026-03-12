import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        <div>Joazco - Independent digital development</div>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/jordan-azoulay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See Joazco on LinkedIn"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://x.com/Joazco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See Joazco on X.com"
          >
            <i className="fab fa-x-twitter"></i> X.com
          </a>
          <a
            href="https://www.tiktok.com/@joazco_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See Joazco on TikTok"
          >
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </div>
      </div>
      <div className="footer-cookies">
        © 2026 joazco.com - No tracking cookies used
      </div>
    </footer>
  );
};

export default Footer;
