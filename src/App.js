import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutContent from "./components/Image";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/Skills";
import Section from "./Framer";

import "typeface-open-sans";

function App() {
  // Sayfa kaydırıldıkça aktif olacak bölümler
  const [activeSection, setActiveSection] = useState(null);
  const [showBackground, setShowBackground] = useState(true); // Arka planı gösterme durumu

  // Scroll event handler
  const handleScroll = () => {
    const sections = ["about", "skills", "portfolio", "experience"];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const offset = sectionElement.offsetTop - 100; // kaydırma mesafesi
        const height = sectionElement.offsetHeight;

        // Eğer scroll pozisyonu, bölümün başlangıcından başlıyorsa, o bölümü aktif yap
        if (scrollPosition >= offset && scrollPosition < offset + height) {
          setActiveSection(section);
        }
      }
    });

    // Scroll pozisyonuna göre arka planın görünürlüğünü kontrol et
    if (scrollPosition > 215) {
      setShowBackground(false); // Scroll 515px'i geçtiğinde background kaybolacak
    } else {
      setShowBackground(true); // Scroll en üste geldiğinde tekrar background görünecek
    }
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App content">
      {/* Arka plan resmi */}
      {showBackground && <div className="header-background"></div>}

      <Header activeSection={activeSection} />
      <div id="about" className="section container">
        <div className="box-container">
          <AboutContent />
        </div>
      </div>
      <div>
        <AboutMe />
      </div>
      <div id="skills" className="section container">
        <MySkills />
      </div>
      <div id="portfolio" className="section container">
        <h2>Portfolio </h2>

        <Portfolio />
      </div>
      <div id="experience" className="section container">
        <h2> Work Experience</h2>
        <Experience />
      </div>
    </div>
  );
}

export default App;
