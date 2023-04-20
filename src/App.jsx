import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUS/AboutUs";
import Menu from "./components/Menu/Menu";
import Franchising from "./components/Franchising/Franchising";
import Vacancies from "./components/Vacancies/Vacancies";
import Contacts from "./components/Contacts/Contacts";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isVisible = currentScrollY > 300;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <FontAwesomeIcon
          icon={faCircleArrowUp}
          className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={handleClick}
        />

        <Header />
        <Routes>
          <Route index path="*" element={<Main />} />
          <Route path="/aboutUS" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/franchising" element={<Franchising />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
