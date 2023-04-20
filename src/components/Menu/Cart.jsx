import React, { useState } from "react";
import Backdrop from "./modals/Backdrop";
import "./Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
// import burger from "../../assets/menuItems/combo.PNG";
// import burgers from "./Menu";

const Cart = ({
  onClose,
  burgers,
  increase,
  decrease,
  remove,
  totalPrice,
  minusTotalPrice,
  plusTotalPrice,
  totalPriceItem,
  updateTotalPrice,
}) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const handleError = (event) => {
    event.preventDefault();
    setIsError(name && mail && phone ? false : true);
    setIsSuccess(name && mail && phone ? true : false);
  };

  return (
    <>
      <Backdrop onClose={onClose} />
      {isSuccess ? (
        <div className="success-container">
          <h3 className="success-name">Ваш заказ:</h3>
          <hr />
          <p className="sentForm">Спасибо! Данные успешно отправлены.</p>
        </div>
      ) : (
        <div className="cartItem-container">
          <h3>Ваш заказ:</h3>
          <hr />
          {burgers.map((burger, index) => (
            <>
              <div className="item-container" key={burger.id}>
                <img src={burger.img} alt="asas" />
                <p className="name">{burger.name}</p>
                <div className="amount">
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    onClick={() => {
                      decrease(burger.id);
                      minusTotalPrice(burger.price);
                    }}
                    className="btn"
                  >
                    -
                  </FontAwesomeIcon>
                  <p>{burger.amount}</p>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    onClick={() => {
                      increase(burger.id);
                      plusTotalPrice(burger.price);
                    }}
                    className="btn"
                  />
                </div>
                <p className="price">{`${burger.price * burger.amount} тг.`}</p>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => {
                    remove(burger.id);
                    updateTotalPrice(burger.price);
                  }}
                  className="btn-remove"
                />
              </div>
              <hr />
            </>
          ))}

          <p className="totalPrice">Сумма: {totalPriceItem + totalPrice} тг.</p>
          <form onSubmit={handleError}>
            <label htmlFor="name" className="label">
              Имя
            </label>
            <br />
            <input
              type="text"
              id="name"
              autoComplete="off"
              onChange={(event) => {
                setName(event.target.value);
                setIsName(event.target.value ? false : true);
              }}
            />
            {isError && <p className="error">Обязательное поле</p>}
            <br />
            <label htmlFor="mail" className="label">
              Почта
            </label>
            <br />
            <input
              type="mail"
              id="mail"
              autoComplete="off"
              onChange={(event) => setMail(event.target.value)}
            />
            {isError && (
              <p className="error">
                Пожалуйста, заполните все обязательные поля
              </p>
            )}
            <br />
            <label htmlFor="name" className="label">
              Телефон
            </label>
            <br />
            <input
              type="number"
              id="name"
              autoComplete="off"
              onChange={(event) => setPhone(event.target.value)}
            />
            {isError && (
              <p className="error">
                Пожалуйста, заполните все обязательные поля
              </p>
            )}
            {isError && (
              <p className="main-error">
                Пожалуйста, заполните все обязательные поля
              </p>
            )}
            <button type="submit">Оформить заказ</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Cart;
