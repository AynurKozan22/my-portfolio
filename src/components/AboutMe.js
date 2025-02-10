import React from "react";
import "../css/AboutMe.css"; // Stil dosyası

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="overlay"></div>
      <div className="about-me-content">
        <h2 className="fw-bold text-white">About Me </h2>
        <p className="text-white text-center">
          As a Frontend Developer with over <strong>6+ years</strong> of
          experience creating responsive and high-performance web applications.
          I specialize in modern technologies like React, JavaScript, HTML5, and
          CSS3 to build intuitive user interfaces and scalable solutions. Feel
          free to explore my work and reach out for collaboration or
          opportunities. Thanks for visiting!
        </p>
        <div className="scrollable-content">
          <div className="d-flex flex-wrap justify-content-center text-white mt-4">
            <div className="m-3 text-center">
              <h3 className="fw-bold">10+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="m-3 text-center">
              <h3 className="fw-bold">5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="m-3 text-center">
              <h3 className="fw-bold">3</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
