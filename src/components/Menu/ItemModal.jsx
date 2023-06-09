import React from "react";
import "./ItemModal.scss";
import menu from "./menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";
const ItemModal = ({ name, onClose, onGetItemObject, handleTotalPrice }) => {
  const handleCartItem = (items, id) => {
    onGetItemObject(items);
    onClose();
  };
  return (
    <>
      {menu
        .filter((item) => item.name === name)
        .map((itemModal) => (
          <div className="item-modal" key={itemModal.id}>
            <div className="buttons">
              <span className="btn" onClick={onClose}>
                <FontAwesomeIcon icon={faArrowLeftLong} /> Вернуться назад{" "}
              </span>
              <FontAwesomeIcon
                icon={faXmark}
                className="btn icon"
                onClick={onClose}
              />
            </div>
            <div className="item-container">
              <img src={itemModal.img} alt={`${itemModal.name}Img`} />
              <div className="info">
                <h2>{itemModal.name}</h2>
                <p>{`${itemModal.price} тг.`}</p>
                <button onClick={() => {handleCartItem(itemModal); handleTotalPrice(itemModal.price)}}>
                  Buy Now
                </button>
                <p className="description">{itemModal.description}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ItemModal;
