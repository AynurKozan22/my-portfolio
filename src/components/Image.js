import React from "react";
import AynurKozan from "../images/AynurKozan.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function AboutContent() {
  return <AppContents />;
}

function AppContents() {
  const welcome = "Hello, my name is ";
  const title = "Aynur Kozan";
  const work =
    "I'm Web Developer, from Izmir, Turkey. I have rich experience in web design.  I love minimalism and I create stunning websites. Feel free to contact me for any projects you might have in mind.";

  const author = (
    <div className="author">
      <img className="author-image" src={AynurKozan} alt="aynur kozan image" />
    </div>
  );

  const header = (
    <div>
      <h2>{welcome}</h2>
      <h1>{title}</h1>
      <h3 className="header-description">{work}</h3>
      <hr />
      <div style={{ textAlign: "left" }}>
        <p>
          <FaMapMarkerAlt size={20} className="custom-icon " />
          <span className="pl-4 fw-bold">Address: </span>
          <span>Izmir, Turkey</span>
        </p>
        <p>
          <FaEnvelope size={20} className="custom-icon" />
          <span className="fw-bold">E-mail: </span>
          <span>aynurkozan22@gmail.com</span>
        </p>
        <p>
          <FaPhone size={20} className="custom-icon" />
          <span className="fw-bold">Phone: </span>
          <span>+905375670880</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="d-flex col-sm-12 col-md-6"> {author}</div>
      <div className="d-flex col-sm-12 col-md-6">{header}</div>
    </div>
  );
}

export default AboutContent;
