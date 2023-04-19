import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Menu.scss";
import items from "./menuItems";
import DeliveryModal from "./modals/DeliveryModal";
import MeniItem from "./MeniItem";
import ItemModal from "./ItemModal";

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
  return (
    <main className="menu-container">
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
      {open && <ItemModal name={nameModal} onClose={handleCloseItemModal}/>}
    </main>
  );
};

export default Menu;
