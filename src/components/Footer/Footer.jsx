import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import mainLogo from "../../assets/Frame.png";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first-footer-section">
        <img src={mainLogo} alt="mainLogo" />
        <div>
          <ul>
            <h3>Главная</h3>
            <li>Меню</li>
            <li>О нас</li>
            <li>Адреса</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>ФРАНЧАЙЗИНГ</h3>
            <li>Узнать о франшизе</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>РАБОТА</h3>
            <li>Вакансии</li>
          </ul>
        </div>
      </div>
      <div className="second-footer-section">
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className="facebookIcon"
          style={{ color: "#dee2e8" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="instagramIcon"
          style={{ color: "#dee2e8" }}
        />
      </div>
      <div className="third-footer-section">
        <div>
          <p>
            <FontAwesomeIcon icon={faCopyright} style={{ color: "#818283" }} className="copyright" size="xl"/>{" "}
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
          <img src={appStore} alt="appStore" className="appStore link-to-download"/>
          <img src={googlePlay} alt="appStore" className="googlePlay link-to-download"/>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
