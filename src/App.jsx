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
import { Helmet } from "react-helmet";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState("");
  const getPage = (page) => {
    setPage(page);
  };
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
      <Helmet>
        <title>{page}</title>
      </Helmet>
      <BrowserRouter>
        <FontAwesomeIcon
          icon={faCircleArrowUp}
          className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={handleClick}
        />

        <Header />
        <Routes>
          <Route index path="*" element={<Main getPage={getPage}/>} />
          <Route path="/aboutUS" element={<AboutUs getPage={getPage}/>} />
          <Route path="/menu" element={<Menu getPage={getPage}/>} />
          <Route path="/franchising" element={<Franchising getPage={getPage}/>} />
          <Route path="/vacancies" element={<Vacancies getPage={getPage}/>} />
          <Route path="/contacts" element={<Contacts getPage={getPage}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
