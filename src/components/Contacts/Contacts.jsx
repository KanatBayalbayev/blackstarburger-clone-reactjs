import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import contactImg from "../../assets/contactSection.PNG";
import almatyMap from "../../assets/almatyMap.PNG";
import astanaMap from "../../assets/astanaMap.PNG";
import "./Contacts.scss";
import { useLocation } from "react-router-dom";

const Contacts = (props) => {
  let location = useLocation();
  let changedPath = location.pathname.slice(1);
  props.getPage(changedPath);
  const [city, setCity] = useState("almaty");
  const cityHandler = (city) => {
    setCity(city);
  };
  return (
    <main>
      <img src={contactImg} alt="contactImg" />
      <div className="cities">
        <li
          className={`cityCon ${city === 'almaty' && "active"}`}
          onClick={() => cityHandler("almaty")}
        >
          <span className="city">Алматы</span>
        </li>
        <li className={`cityCon ${city === 'astana'  && "active"}`} onClick={() => cityHandler("astana")}>
          <span className="city">Астана</span>
        </li>
      </div>
      {city === "almaty" && (
        <div className="city-container almaty">
          <div className="city-info">
            <h1>Контакты</h1>
            <p>г. Алматы</p>
            <ol>
              <li>ТРЦ "MEGA ALMA-ATA"</li>
              <li>ТРЦ "SPUTNIK MALL"</li>
              <li>ТРЦ "FORUM"</li>
            </ol>
            <a
              href="https://www.instagram.com/kaz_blackstarburger/"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="instagramIcon"
              />
            </a>
          </div>
          <a
            target="blank"
            className="map almatyMap"
            href="https://yandex.kz/maps/162/almaty/chain/black_star_burger/57363451668/?ll=76.899558%2C43.224005&sll=76.945465%2C43.238293&sspn=0.273285%2C0.122743&z=13"
          >
            <img src={almatyMap} alt="almatyMap" />
          </a>
        </div>
      )}
      {city === "astana" && (
        <div className="city-container astana">
          <div className="city-info">
            <h1>Контакты</h1>
            <p>г. Астана</p>
            <ol>
              <li>ТРЦ "KERUEN"</li>
              <li>ТРЦ "MEGA SILK WAY"</li>
              <li>ТРЦ "ЕВРАЗИЯ"</li>
              <li>ТРЦ "ХАН-ШАТЫР"</li>
            </ol>
            <a
              href="https://www.instagram.com/kaz_blackstarburger/"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="instagramIcon"
              />
            </a>
          </div>
          <a
            target="blank"
            className="map astanaMap"
            href="https://yandex.kz/maps/163/astana/chain/black_star_burger/57363451668/?ll=71.438176%2C51.119265&sll=71.459407%2C51.148483&sspn=1.043701%2C0.844758&z=12"
          >
            <img src={astanaMap} alt="astanaMap" />
          </a>
        </div>
      )}
    </main>
  );
};

export default Contacts;
