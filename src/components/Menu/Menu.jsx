import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Menu.scss";
import items from "./menuItems";

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
  const categoryHandler = (category) => {
    setCategory(category);
    console.log(category);
  };
  const text = (event) => {
    setName(event.target.value);
  };

  const all = items.map((item) => (
    <div key={item.id} className="item-container">
      <img src={item.img} alt={`${item.name}`} />
      <h3>{item.name}</h3>
      <p>{`${item.price} тг.`}</p>
    </div>
  ));
  const particularCategory = items
    .filter((item) => item.category === categoryName)
    .map((item) => (
      <div key={item.id} className="item-container">
        <img src={item.img} alt={`${item.name}`} />
        <h3>{item.name}</h3>
        <p>{`${item.price} тг.`}</p>
      </div>
    ));

  const particularName = items
    .filter((item) => item.name.includes(name.toUpperCase()))
    .map((item) => (
      <div key={item.id} className="item-container">
        <img src={item.img} alt={`${item.name}`} />
        <h3>{item.name}</h3>
        <p>{`${item.price} тг.`}</p>
      </div>
    ));

  return (
    <main>
      <div className="links">
        <button>glovo</button>
        <button>chocofood</button>
        <button>wolt</button>
      </div>
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
    </main>
  );
};

export default Menu;
