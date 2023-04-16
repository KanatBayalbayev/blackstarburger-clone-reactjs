import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUS/AboutUs";
import Menu from "./components/Menu/Menu";
import Franchising from "./components/Franchising/Franchising";
import Vacancies from "./components/Vacancies/Vacancies";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
