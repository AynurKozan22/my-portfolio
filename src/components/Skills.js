import React from "react";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";

const skills = [
  { name: "HTML, CSS/SCSS", value: 95 },
  { name: "JavaScript, React", value: 85 },
  { name: "SFCC", value: 90 },
  { name: "Bootstrap, TailwindCSS", value: 90 },
];
const techskills = [
  { name: "Git, REST APIs, JSON, XML", value: 95 },
  { name: "ESLint, Webpack,NPM", value: 85 },
  { name: "Chrome DevTools, Jira", value: 90 },
  { name: "SFCC Cloud Platform, VS Code", value: 90 },
];

const designskills = [
  { name: "Figma, Zeplin, Miro", value: 95 },
  { name: "Adobe XD, Photoshop", value: 95 },
  { name: "Illustrator, After Effects", value: 90 },
];

function MySkills() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Professional Skills</h2>

      <Row className="grid-item mb-4">
        <h3 className="p-3">Programming</h3>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <div className="d-flex">
              <p className="col-6 justify-content-start d-flex ">
                {skill.name}
              </p>
              <div className="col-6 justify-content-end d-flex ">
                {`${skill.value}%`}
              </div>
            </div>

            <ProgressBar
              now={skill.value}
              label={`${skill.value}%`}
              variant="primary"
              visuallyHidden="true"
              className="custom-progress-bar"
            />
          </Col>
        ))}
      </Row>

      <Row className="grid-item mb-4">
        <h3 className="p-3">Tech</h3>
        {techskills.map((techskill, index) => (
          <Col md={6} key={index} className="mb-3">
            <div className="d-flex">
              <p className="col-6 justify-content-start d-flex ">
                {techskill.name}
              </p>
              <div className="col-6 justify-content-end d-flex">{`${techskill.value}%`}</div>
            </div>

            <ProgressBar
              now={techskill.value}
              label={`${techskill.value}%`}
              variant="success"
              visuallyHidden="true"
              className="custom-progress-bar"
            />
          </Col>
        ))}
      </Row>

      <Row className="grid-item">
        <h3 className="p-3">Design</h3>
        {designskills.map((designskill, index) => (
          <Col md={6} key={index} className="mb-3">
            <div className="d-flex">
              <p className="col-6 justify-content-start d-flex ">
                {designskill.name}
              </p>
              <div className="col-6 justify-content-end d-flex ">
                {`${designskill.value}%`}
              </div>
            </div>
            <ProgressBar
              now={designskill.value}
              label={`${designskill.value}%`}
              variant="primary"
              visuallyHidden="true"
              className="custom-progress-bar"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MySkills;
