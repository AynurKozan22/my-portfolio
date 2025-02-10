import React from "react";

const Header = ({ activeSection }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
