import React, { useState } from "react";
import franImg from "../../assets/franImg.PNG";
import foodCord from "../../assets/franchisingImgs/foodCord.png";
import streetFood from "../../assets/franchisingImgs/streetFood.jpg";
import restaurant from "../../assets/franchisingImgs/restaurant.jpeg";
import foodTruck from "../../assets/franchisingImgs/foodTruck.png";
//
import place from "../../assets/franchisingImgs/place.PNG";
import design from "../../assets/franchisingImgs/design.PNG";
import dogovor from "../../assets/franchisingImgs/dogovor.PNG";
import opening from "../../assets/franchisingImgs/opening.PNG";
import remont from "../../assets/franchisingImgs/remont.PNG";
import staff from "../../assets/franchisingImgs/staff.PNG";
import "./Franchising.scss";

const Franchising = () => {
  const [isValid, setIsValid] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const inputHandler = (event) => {
    setIsValid(event.target.value);
  };
  
  const formHandler = (event) => {
    if (isValid.trim() === "") {
      setIsSent(false);
    } else {
      setIsSent(true);
    }
    setIsInputEmpty(false);
    event.preventDefault();
  };
  
  return (
    <main className="franchising-container">
      <img src={franImg} alt="franImg" />
      <h1>ФОРМАТЫ РЕСТОРАНОВ</h1>
      <div className="grid-container">
        <div className="franchPlace">
          <img src={foodCord} alt="foodCord" />
          <h2>ФУД КОРТ</h2>
          <p>
            ЗОНА ПИТАНИЯ ПРЕИМУЩЕСТВЕННО В ТОРГОВЫХ ЦЕНТРАХ, ГДЕ ПОСЕТИТЕЛЯМ
            ПРЕДЛАГАЮТ УСЛУГИ СРАЗУ НЕСКОЛЬКО ПРЕДПРИЯТИЙ ПИТАНИЯ, ИМЕЮЩИХ ОБЩИЙ
            ПОСАДОЧНЫЙ ЗАЛ
          </p>
        </div>
        <div className="franchPlace">
          <img src={streetFood} alt="foodCord" />
          <h2>СТРИТ ФУД</h2>
          <p>
            СТРИТ ФУД РЕСТОРАНЫ, ВСТРОЕННЫЕ В ЖИЛЫЕ ДОМА И ЛЮБЫЕ ДРУГИЕ ЗДАНИЯ С
            ОТДЕЛЬНЫМ ВХОДОМ И ЛЕТНЕЙ ТЕРРАСОЙ количество посадочных мест - до
            50
          </p>
        </div>
        <div className="franchPlace">
          <img src={restaurant} alt="foodCord" />
          <h2>ОТДЕЛЬНО СТОЯЩИЙ РЕСТОРАН</h2>
          <p>
            ОТДЕЛЬНО СТОЯЩИЕ РЕСТОРАНЫ С ЛЕТНЕЙ ТЕРРАСОЙ количество посадочных
            мест - выше 50
          </p>
        </div>
        <div className="franchPlace">
          <img src={foodTruck} alt="foodCord" />
          <h2>ФУД ТРАК</h2>
          <p>СПЕЦИАЛИЗИРОВАННЫЙ АВТОТРАНСПОРТ С КУХОННЫМ ОБОРУДОВАНИЕМ</p>
        </div>
      </div>
      <div className="second-container">
        <h1>НАШИ ПЛЮСЫ</h1>
        <p>
          Первый ресторан Black Star Burger открылся 16 сентября 2016 года и
          моментально стал центром притяжения москвичей и гостей столицы. Перед
          культовым заведением выстраивались многометровые очереди, и по сей
          день вокруг соччных мощщных бургеров от Тимати сохраняется неутихающий
          ажиотаж.
        </p>
        <p>
          Слагаемые успеха Black Star Burger — это премиальные ингредиенты,
          авторская технология приготовления блюд, уникальная идеология бренда,
          детально продуманная концепция и выверенная стратегия продвижения. Ни
          один ресторан в мире не может представить себе возможность
          реализовывать конечный продукт подобного качества по столь низким
          ценам. Благодаря силе бренда и дружбе с партнерами Black Star Burger
          разрушил стереотип о том, что хорошее качество - то всегда дорого, и
          предложил премиум-бургеры по критически низкой цене.
        </p>
        <p>
          Сегодня динамично развивающаяся сесть Black Star Burger насчитывает
          более 100 фастфуд-ресторанов, фуд-кортов и фуд-траков. Соччные мощщные
          бургеры можно отведать в 60 городах России и 7 странах мира! И это
          только начало!
        </p>
      </div>
      <div className="third-container">
        <h1>Как мы работаем</h1>
        <div className="third-grid-container">
          <div className="franchType">
            <img src={place} alt="" />
            <h1>Выбор помещения</h1>
          </div>
          <div className="franchType">
            <img src={dogovor} alt="" />
            <h1>Заключение договора</h1>
          </div>
          <div className="franchType">
            <img src={design} alt="" />
            <h1>Дизайн и технологический проект</h1>
          </div>
          <div className="franchType">
            <img src={remont} alt="" />
            <h1>Строительно-монтажные работы</h1>
          </div>
          <div className="franchType">
            <img src={staff} alt="" />
            <h1>Обучение директора и сотрудников</h1>
          </div>
          <div className="franchType">
            <img src={opening} alt="" />
            <h1>Сопровождение открытия ресторана</h1>
          </div>
        </div>
      </div>
      <form onSubmit={formHandler}>
        <h1>ОСТАВЬ ЗАЯВКУ</h1>
        {isSent && isValid ? (
          <p className="sentForm">Спасибо! Данные успешно отправлены.</p>
        ) : (
          <div>
            <label htmlFor="name">Имя</label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Ваше имя"
              autoComplete="off"
              onChange={inputHandler}
              
            />
            {!isInputEmpty && (
              <p className="restrictedField">Обязательное поле</p>
            )}
            <br />
            <label htmlFor="phone">Номер телефона</label>
            <br />
            <input
              type="number"
              id="phone"
              placeholder="Ваш номер телефона"
              autoComplete="off"
            />
            <br />
            <label htmlFor="city">Город</label>
            <br />
            <input
              type="text"
              id="city"
              placeholder="Ваш город"
              autoComplete="off"
            />
            {!isInputEmpty  && (
              <p className="error-container">
                Пожалуйста, заполните все обязательные поля
              </p>
            )}
          </div>
        )}
        {isSent && isValid ? "" : <button type="submit">Отправить</button>}
      </form>
    </main>
  );
};

export default Franchising;
