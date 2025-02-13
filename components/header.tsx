import React, { useEffect } from "react";
import { smoothDropAnimate } from "../utils/animations";
import { YAnimAxis } from "../enums/anims";

const Header: React.FC = () => {
  useEffect(() => {
    smoothDropAnimate("#name", 1000, YAnimAxis.bottom);
    smoothDropAnimate(".animated-text", 1200, YAnimAxis.bottom);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <p id="name" className="header__name">
          DHEERAJ R S
        </p>
      </div>
      <div className="header__container">
        <p 
          className="header__link header__link--semibold animated-text"
          onClick={() => window.open("#/")}
        >
          WIP 🛠️
        </p>
        <p 
          className="header__link animated-text"
          onClick={() => window.open("https://dheerajrs.com/", "_blank")}
        >
          Works
        </p>
        <p 
          className="header__link animated-text"
          onClick={() => window.open("https://dheerajrs.com/blog/", "_blank")}
        >
          Blog
        </p>
        <p 
          className="header__link animated-text"
          onClick={() => window.open("https://dheerajrs.com/contact/", "_blank")}
        >
          Contact
        </p>
      </div>
    </header>
  );
};

export default Header;
