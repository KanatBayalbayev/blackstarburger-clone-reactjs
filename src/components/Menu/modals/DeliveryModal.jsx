import React from "react";
import "./DeliveryModal.scss";
import Backdrop from "./Backdrop";
import glovo from "../../../assets/glovo.PNG";
import choco from "../../../assets/choco.PNG";
import wolt from "../../../assets/wolt.PNG";

const deliveryDetails = [
  {
    id: (Math.random() * 10 + 1).toFixed(5),
    name: "Glovo",
    img: glovo,
    link: "https://glovoapp.com/kz/ru/almaty/black-star-burger-ala/",
  },
  {
    id: (Math.random() * 10 + 1).toFixed(5),
    name: "Chocofood",
    img: choco,
    link: "https://glovoapp.com/kz/ru/almaty/black-star-burger-ala/",
  },
  {
    id: (Math.random() * 10 + 1).toFixed(5),
    name: "Wolt",
    img: wolt,
    link: "https://wolt.com/ru/kaz/almaty/restaurant/black-star-burger-dostyk",
  },
];
const DeliveryModal = ({ name, onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      {deliveryDetails
        .filter((modal) => modal.name === name)
        .map((modalItem) => (
          <div className="modal">
            <img src={modalItem.img} alt={`${modalItem.name}Img`} />
            <div className="info-modal">
              <h1>{modalItem.name}</h1>
              <p>Доставка на дом</p>
              <a href={`${modalItem.link}`} target="blank">
                <button onClick={onClose}>перейти</button>
              </a>
            </div>
          </div>
        ))}
    </>
  );
};

export default DeliveryModal;
