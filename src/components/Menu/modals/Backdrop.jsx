import React from "react";
import "./Backdrop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Backdrop = ({ onClose }) => {
  return (
    <div className="backdrop" onClick={onClose}>
      <FontAwesomeIcon icon={faXmark} className="icon" />
    </div>
  );
};
export default Backdrop;
