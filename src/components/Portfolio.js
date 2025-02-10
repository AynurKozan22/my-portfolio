import React, { useState } from "react";
import "../css/Portfolio.css";
import SephoraSymbol from "../images/SephoraSymbol.jpg";
import tissotlogo from "../images/tissotlogo.jpg";
import baccarat from "../images/baccarat.png";
import gifi from "../images/gifi.png";
import ericbompard from "../images/ericbompard.png";
import chandon from "../images/chandon.png";
import blackanddecker from "../images/blackanddecker.png";
import gosport from "../images/gosport.png";
import moleskine from "../images/moleskine.png";
import twitter from "../images/twitter.png";
import babolat from "../images/babolat.png";
import gpstakip from "../images/gpstakip.png";

const portfolioItems = [
  { id: 1, category: "all", image: SephoraSymbol, title: "Sephora" },
  { id: 2, category: "ecommerce", image: tissotlogo, title: "Tissot" },
  { id: 3, category: "all", image: baccarat, title: "Baccarat" },
  {
    id: 4,
    category: "ecommerce",
    image: blackanddecker,
    title: "Black And Decker",
  },
  { id: 5, category: "all", image: chandon, title: "Chandon" },
  { id: 6, category: "ecommerce", image: ericbompard, title: "Eric Bompard" },
  { id: 7, category: "all", image: gifi, title: "GIFI" },
  { id: 8, category: "ecommerce", image: moleskine, title: "Moleskine" },
  { id: 9, category: "ecommerce", image: gosport, title: "Go Sport" },
  { id: 10, category: "all", image: babolat, title: "Babolat" },
  {
    id: 11,
    category: "other",
    image: gpstakip,
    title: "GPS Takip Portalı",
  },
  { id: 12, category: "other", image: twitter, title: "React Twitter Clone" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <div className="portfolio-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("ecommerce")}>
          E-Commerce Projects
        </button>
        <button onClick={() => setFilter("other")}>Other Projects</button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid">
        {filteredItems.map((item) => (
          <div className="grid-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
