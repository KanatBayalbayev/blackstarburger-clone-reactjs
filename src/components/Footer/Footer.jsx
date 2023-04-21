import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import mainLogo from "../../assets/Frame.png";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first-footer-section">
        <a href="*">
          {" "}
          <img src={mainLogo} alt="mainLogo" />
        </a>

        <div>
          <ul>
            <Link className="li-footer" to="/*">
              <h3>Главная</h3>
            </Link>
            <NavLink className="li-footer" to="/menu">
              <li>Меню</li>
            </NavLink>
            <NavLink className="li-footer" to="/aboutUS">
              <li>О нас</li>
            </NavLink>
            <NavLink className="li-footer" to="/contacts">
              <li>Адреса</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <ul>
            <NavLink className="li-footer" to="/franchising">
              <h3>ФРАНЧАЙЗИНГ</h3>
            </NavLink>
            <NavLink className="li-footer" to="/franchising">
              <li>Узнать о франшизе</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <ul>
            <h3>РАБОТА</h3>
            <NavLink className="li-footer" to="/vacancies">
              <li>Вакансии</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="second-footer-section">
        <a
          href="https://www.facebook.com/profile.php?id=100066956527283&paipv=0&eav=AfYVnNDSXVldrXJbBZbIrPblRZg_fIKAsC1vyDrLxprdW4yIvneQLp-s2FhVSazW2YE"
          target="blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="facebookIcon"
            style={{ color: "#dee2e8" }}
          />
        </a>
        <a href="https://www.instagram.com/kaz_blackstarburger/" target="blank">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="instagramIcon"
            style={{ color: "#dee2e8" }}
          />
        </a>
      </div>
      <div className="third-footer-section">
        <div>
          <p>
            <FontAwesomeIcon
              icon={faCopyright}
              style={{ color: "#818283" }}
              className="copyright"
              size="xl"
            />{" "}
            2023 Black Star Burger KZ
          </p>
          <p>
            Юридический адрес: Казахстан, город Алматы, 050051, район Медеуский,
          </p>
          <p>ул.Фонвизина, дом 30/8, БИН: 190140030597</p>
        </div>
      </div>
      <div className="forth-footer-section">
        <h1>Приложение Black Star Burger KZ</h1>
        <p>Скачивай наше приложение для смартфонов и получай бонусы!</p>
        <p>Уже доступно для iOS и Android</p>
        <div className="links-to-download">
          <a
            href="https://apps.apple.com/ru/app/black-star-burger/id1347263928"
            target="blank"
          >
            <img
              src={appStore}
              alt="appStore"
              className="appStore link-to-download"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.loyaltyplant.partner.blackstarburger&hl=ru&gl=US&pli=1"
            target="blank"
          >
            <img
              src={googlePlay}
              alt="appStore"
              className="googlePlay link-to-download"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
