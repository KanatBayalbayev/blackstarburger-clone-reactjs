import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import mainLogo from "../../assets/Frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="main">
          <div className="social-icons">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="facebookIcon"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="instagramIcon"
            />
          </div>
          <img src={mainLogo} alt="main logo" className="imgLogo" />
          <p className="contact-number">+7 700 555 05 55</p>
        </div>
        <hr className="line" />
        <nav className="navbar">
          <ul className="list">
            <NavLink className="li" to="/*">
              Главная
            </NavLink>

            <NavLink className="li" to="/aboutUS">
              О нас
            </NavLink>

            <NavLink className="li" to="/menu">
              Меню
            </NavLink>

            <NavLink className="li" to="/franchising">
              Франчайзинг
            </NavLink>

            <NavLink className="li" to="/vacancies">
              Вакансии
            </NavLink>

            <NavLink className="li" to="/contacts">
              Контакты
            </NavLink>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
