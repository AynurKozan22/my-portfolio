import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© 2022 Aynur Kozan. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/aynur-kozan-1279b419a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://github.com/AynurKozan22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon github" />
          </a>
        </div>

        <p className="developer">Designed & Developed by Aynur Kozan</p>
      </div>
    </footer>
  );
};

export default Footer;
