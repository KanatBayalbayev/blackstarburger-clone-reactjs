import React from "react";

const MeniItem = ({ key, name, price, img, onOpen }) => {
  return (
    <>
      <div key={key} className="item-container" onClick={() => onOpen(name)}>
        <img src={img} alt={`${name}`} />
        <h3>{name}</h3>
        <p>{`${price} тг.`}</p>
      </div>
    </>
  );
};

export default MeniItem;
