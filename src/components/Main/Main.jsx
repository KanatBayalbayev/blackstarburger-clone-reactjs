import React from "react";
import menuGlav from "../../assets/menuGlav.PNG";
import franchiseGlav from "../../assets/franchiseGlav.PNG";
import vacancyGlav from "../../assets/vacancyGlav.PNG";
import "./Main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <Link to="/menu">
        <img src={menuGlav} alt="menuGlav" className="menuGlav" />
      </Link>
      <Link to="/franchising">
        <img
          src={franchiseGlav}
          alt="franchiseGlav"
          className="franchiseGlav"
        />
      </Link>
      <Link to="/vacancies">
        <img src={vacancyGlav} alt="vacancyGlav" className="vacancyGlav" />
      </Link>
    </main>
  );
};

export default Main;
