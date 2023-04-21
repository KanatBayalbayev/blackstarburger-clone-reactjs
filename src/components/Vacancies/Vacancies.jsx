import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import vacancyImg from "../../assets/vacancySection.PNG";
import "./Vacancies.scss";
import { useLocation } from "react-router-dom";

const Vacancies = (props) => {
  let location = useLocation();
  let changedPath = location.pathname.slice(1);
  props.getPage(changedPath);
  return (
    <main>
      <img src={vacancyImg} alt="vacancyImg" />
      <p className="title">
        О доступных вакансиях Вы можете узнать по номеру телефона +7 777 689
        1010 или же отправьте Ваше резюме на почту{" "}
        <a href="mailto:cv@bsbkz.kz" className="span">
          cv@bsbkz.kz
        </a>
      </p>
      <div className="grid-container">
        <div className="card">
          <h3>Бухгалтер-калькулятор</h3>
          <p>г. Алматы</p>
          <ul>
            <li>Опыт работы от 1-3 года;</li>
            <li>Расчет технологических и калькуляционных карт;</li>
            <li>Полный документооборот производственного учета.</li>
          </ul>
          <a href="https://hh.kz/vacancy/44973782" target="blank">
            Оставить заявку{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: "#f96f49" }}
            />
          </a>
        </div>
        <div className="card">
          <h3>Менеджер по развитию бизнеса</h3>
          <p>г. Алматы</p>
          <ul>
            <li>Наличие успешного опыта работы в продажах услуг;</li>
            <li>Наличие опыта продаж в области франчайзинга, желательно;</li>
            <li>Опыт работы в B2B ОБЯЗАТЕЛЕН.</li>
          </ul>
          <a href="https://hh.kz/vacancy/44973357" target="blank">
            Оставить заявку{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: "#e76208" }}
            />
          </a>
        </div>
        <div className="card">
          <h3>Менеджер ресторана</h3>
          <p>г. Алматы</p>
          <ul>
            <li>Оформление по ТК РК;</li>
            <li>График работы: 5/2 с 08.00 до 17.00;</li>
            <li>Требуемый опыт работы: 1-3 года.</li>
          </ul>
          <a href="https://hh.kz/vacancy/44832025" target="blank">
            Оставить заявку{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: "#e76208" }}
            />
          </a>
        </div>
        <div className="card">
          <h3>Сотрудник ресторана BLACK STAR BURGER</h3>
          <p>г. Алматы</p>
          <ul>
            <li>График 2/2 с 10:00 до 22:00;</li>
            <li>Корпоративные обеды;</li>
            <li>Ночная развозка по городу;</li>
            <li>Карьерный рост.</li>
          </ul>
          <a href="https://hh.kz/vacancy/44739492" target="blank">
            Оставить заявку{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: "#e76208" }}
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Vacancies;
