import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/Footer.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container d-flex">
        <div className="col-6">
          {" "}
          <Contact />
        </div>
        <div className="col-6 footer-autor-content">
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
      </div>
    </footer>
  );
};

export default Footer;
