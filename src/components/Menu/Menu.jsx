import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.scss";
import items from "./menuItems";
import DeliveryModal from "./modals/DeliveryModal";
import MeniItem from "./MeniItem";
import ItemModal from "./ItemModal";
import Cart from "./Cart";

const categories = [
  "Все",
  "КОМБО",
  "DOUBLE БУРГЕРЫ",
  "PRIME БУРГЕРЫ",
  "ORIGINAL БУРГЕРЫ",
  "РОЛЛЫ",
  "ЗАКУСКИ",
  "САЛАТЫ",
  "FUN BOX",
  "ДЕСЕРТЫ",
  "НАПИТКИ",
  "СОУСЫ",
];

const Menu = () => {
  const [categoryName, setCategory] = useState("Все");
  const [name, setName] = useState("");
  const [deliveryName, setDeliveryName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [nameModal, setNameModal] = useState("");

  const categoryHandler = (category) => {
    setCategory(category);
    console.log(category);
  };
  const text = (event) => {
    setName(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpenModalItem = (name) => {
    setOpen(true);
    setNameModal(name);
  };

  const all = items.map((item) => (
    <MeniItem
      key={item.id}
      img={item.img}
      name={item.name}
      price={item.price}
      onOpen={handleOpenModalItem}
    />
  ));

  const particularCategory = items
    .filter((item) => item.category === categoryName)
    .map((item) => (
      <MeniItem
        key={item.id}
        img={item.img}
        name={item.name}
        price={item.price}
        onOpen={handleOpenModalItem}
      />
    ));

  const particularName = items
    .filter((item) => item.name.includes(name.toUpperCase()))
    .map((item) => (
      <MeniItem
        key={item.id}
        img={item.img}
        name={item.name}
        price={item.price}
        onOpen={handleOpenModalItem}
      />
    ));

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeliveryName = (name) => {
    setDeliveryName(name);
    setShowModal(true);
  };
  const handleCloseItemModal = () => {
    setOpen(false);
  };
  const [cart, setCart] = useState(false);
  const handleOpenCart = () => {
    setCart(true);
  };
  const handleCloseCart = () => {
    setCart(false);
  };
  // cart state
  /////////////////////////////////////////////////
  const [cartArray, setCartArray] = useState([]);

  const getItemObject = (object) => {
    if (!cartArray.some((item) => item.id === object.id)) {
      setCartArray((cartArray) => [...cartArray, object]);
      console.log(cartArray.some((item) => item.id === object.id));
    }
  };

  const handleIncreaseItems = (id) => {
    const updatedList = cartArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
          price: item.amount * item.price,
        };
      }
      return item;
    });
    setCartArray(updatedList);
  };
  const handleDecreaseItems = (id) => {
    const updatedList = cartArray
      .map((item) => {
        if (item.id === id && item.amount > 0) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    setCartArray(updatedList);
  };
  const handleRemoveItem = (id) => {
    const updatedList = cartArray.filter((item) => item.id !== id);
    setCartArray(updatedList);
  };

  console.log(cartArray);

  return (
    <main className="menu-container">
      <div className="cart-container">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="cart"
          onClick={handleOpenCart}
        />
      </div>
      {cart && (
        <Cart
          onClose={handleCloseCart}
          burgers={cartArray}
          increase={handleIncreaseItems}
          decrease={handleDecreaseItems}
          remove={handleRemoveItem}
        />
      )}
      <div className="links">
        <button onClick={() => handleDeliveryName("Glovo")}>glovo</button>
        <button onClick={() => handleDeliveryName("Chocofood")}>
          chocofood
        </button>
        <button onClick={() => handleDeliveryName("Wolt")}>wolt</button>
      </div>
      {showModal && (
        <DeliveryModal onClose={handleCloseModal} name={deliveryName} />
      )}
      <div className="categories-container">
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => categoryHandler(category)}
              className={category === categoryName && "active"}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Поиск" onChange={text} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </div>
      </div>
      <div className="items-container">
        {name
          ? particularName
          : categoryName === "Все"
          ? all
          : particularCategory}
      </div>
      {open && (
        <ItemModal
          name={nameModal}
          onClose={handleCloseItemModal}
          onGetItemObject={getItemObject}
        />
      )}
    </main>
  );
};

export default Menu;
