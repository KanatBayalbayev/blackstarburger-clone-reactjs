import React from "react";
import mainLogo from "../../assets/Frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="main">
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="facebookIcon"/>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="instagramIcon"/>
        </div>
        <img src={mainLogo} alt="main logo" className="imgLogo"/>
        <p className="contact-number">+7 700 555 05 55</p>
      </div>
      <hr className="line"/>
      <nav className="navbar">
        <ul className="list">
          <li>Главная</li>
          <li>О нас</li>
          <li>Меню</li>
          <li>Франчайзинг</li>
          <li>Вакансии</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
