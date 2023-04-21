import React, { useState } from "react";
import accordionData from "./accordion-content";
import mainPage from "../../assets/aboutUsMain.PNG";
import "./AboutUs.scss";
import { useLocation} from "react-router-dom";
const AboutUs = (props) => {
  let location = useLocation();
  let changedPath = location.pathname.slice(1);
  props.getPage(changedPath);
  const [indexItem, setIndexItem] = useState(null);
  const handleClick = (i) => {
    setIndexItem(indexItem === i ? null : i);
  };
  return (
    <main className="aboutUS-container">
      <img src={mainPage} alt="mainPage" />

      <hr className="hrAboutUS" />
      <div className="accordion-container">
        <div className="accordion">
          {accordionData.map((data, index) => (
            <div className="accordion-item" key={data.title}>
              <div
                className="accordion-title"
                onClick={() => handleClick(index)}
              >
                <div className="accordion-title-name">{data.title}</div>
                <div className={`plus ${indexItem === index ? "open" : ""}`}>
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                </div>
              </div>

              <div
                className={`accordion-content ${
                  indexItem === index ? "visible" : ""
                }`}
              >
                <p>{data.description}</p>
              </div>

              <hr className="hrItem" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
