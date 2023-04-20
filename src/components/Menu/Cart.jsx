import React from "react";
import Backdrop from "./modals/Backdrop";
import "./Cart.scss";
// import burger from "../../assets/menuItems/combo.PNG";
// import burgers from "./Menu";

const Cart = ({ onClose, burgers, increase, decrease, remove, totalPrice }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="cartItem-container">
        <h3>Ваш заказ:</h3>
        <hr />
        {burgers.map((burger, index) => (
          <div className="item-container" key={burger.id}>
            <img src={burger.img} alt="asas" />
            <p className="name">{burger.name}</p>
            <div className="amount">
              <button onClick={() => decrease(burger.id)}>-</button>
              <p>{burger.amount}</p>

              <button onClick={() => increase(burger.id)}>+</button>
            </div>
            <p className="price">{burger.price}</p>
            <button onClick={() => remove(burger.id)}>remove</button>
          </div>
        ))}
        {/* <div className="item-container">
          <img src={burger} alt="asas" />
          <p className="name">Название</p>
          <div className="amount">
            <button>-</button>
            <p>2</p>
            <button>+</button>
          </div>
          <p className="price">price</p>
          <button>remove</button>
        </div> */}
        <hr />
        <p>Total price: {totalPrice}</p>
        <form>
          <label htmlFor="name">Имя</label>
          <br />
          <input type="text" id="name" autoComplete="off" />
          <br />
          <label htmlFor="mail">Почта</label>
          <br />
          <input type="mail" id="mail" autoComplete="off" />
          <br />
          <label htmlFor="name">Телефон</label>
          <br />
          <input type="number" id="name" autoComplete="off" />
        </form>
      </div>
    </>
  );
};

export default Cart;
