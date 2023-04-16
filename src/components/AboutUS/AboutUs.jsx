import React, { useState } from "react";
import accordionData from "./accordion-content";
import mainPage from "../../assets/aboutUsMain.PNG";
import "./AboutUs.scss";
const AboutUs = () => {
  const [indexItem, setIndexItem] = useState(null);

  const toggle = (i) => {
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
              <div className="accordion-title" onClick={() => toggle(index)}>
                <div className="accordion-title-name">{data.title}</div>
                <div className="accordion-title-sign">
                  {indexItem === index ? "-" : "+"}
                </div>
              </div>

              {indexItem === index && (
                <p className="accordion-content">{data.description}</p>
              )}
              <hr className="hrItem" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
