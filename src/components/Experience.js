import React, { useState, useRef, useEffect } from "react";
import "../css/Experience.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (openIndex === index) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndex]);

  const experiences = [
    {
      company: "OSF DIGITAL",
      role: "Certificated SFCC Developer",
      duration: "Sept 2020 – Sept 2024",
      details:
        "Frontend Development Expertise: Proficient in JavaScript (ES6+), with extensive experience in CSS3 (including SASS/SCSS), React.js, and developing responsive, mobile- first designs.• E-Commerce and Project Experience: 5+ years of experience in high-end e- commerce projects using Salesforce Commerce Cloud (SFCC), delivering scalable and optimized solutions for global brands, with Agile methodologies.• Tools and Best Practices: Skilled in version control systems (Git), frontend tools (npm, Webpack, Chrome DevTools), and project management platforms (Jira, Trello). Committed to writing clean, maintainable, and scalable code.",
    },
    {
      company: "Horizont GPS Tracking System",
      role: "Senior Frontend Developer",
      duration: "2013-2020",
      details:
        "• Website Development and Optimization: Single-handedly developed over 20 websites using JavaScript, focusing on creating dynamic, responsive, and user-friendly interfaces. I’ve worked with modern frameworks to build scalable front-end solutions, ensuring high performance and seamless user experiences across various industries.",
    },
    {
      company: "Netport Creative Agency",
      role: "Web Designer / Developer",
      duration: "Summer 2013",
      details:
        "• Innovative Web Development: Crafted visually striking and maintainable websites, balancing functionality and aesthetics.\n• User-First Interface Solutions: Delivered responsive, intuitive interfaces for seamless usability across platforms.",
    },
    {
      company: "HITACHI – Kurt & KURT A.Ş",
      role: "Web Designer",
      duration: "2009-2011",
      details:
        "• User-Centered Website Design: Successfully maintained UX/UI principles to create visually appealing, user-friendly websites.\n• Custom Graphics and Visual Elements: Developed custom graphics and icons using Photoshop, Illustrator, and Figma to enhance website aesthetics.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="experience-accordion">
      {experiences.map((exp, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-title">
              <h4>{exp.company}</h4>
              <div className="work-title">
                <h5 className="fs-16">{exp.role}</h5>
                <h6 className="fs-12">{exp.duration}</h6>
              </div>
            </div>
            <div className="accordion-icon">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="accordion-content"
          >
            <p className="p-4">{exp.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
