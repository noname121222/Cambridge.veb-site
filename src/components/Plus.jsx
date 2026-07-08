import React from "react";
import first from "../assets/first.svg";
import second from "../assets/second.svg";
import thirthty from "../assets/thirthty.png";
import fourthty from "../assets/forthty.svg";
import fivethty from "../assets/fivethty.svg";
import "./style.css";

const Plus = () => {
  return (
    <>
      <section>
        <div className="section-box text-center my-20">
          <p className="section-text text-5xl font-bold">Почему люди выбирают нас?</p>
          <p className="section-p my-6 max-w-3xl mx-48 text-xl text-gray-500">
            Центр изучения английского языка Cambridge занимается обучением
            молодежи английскому языку с 2014 года и на данный момент имеет 14
            филиалов
          </p>
        </div>

        <div className="plus-container">
          <div className="plus-box">
            <div className="plus">
              <img className="plus-img1" src={first} alt="foto" />
              <h2 className=" text-3xl my-4">Бесплатный второй учитель</h2>
              <p className="text-gray-500">
                Если вы не смогли хорошо усвоить тему, вторые учителя всегда
                будут рядом и помогут вам с любыми вопросами.
              </p>
            </div>
            <div className="plus">
              <img className="plus-img" src={second} alt="foto" />
              <h2 className=" text-3xl my-4 mt-6">Тестовый Центр</h2>
              <p className="text-gray-500">
                У нас есть отдельный тестовый центр, где вы можете сдать как
                'MOCK' экзамены, так и настоящий экзамен IELTS. Вы правильно
                прочитали, вы будете сдавать настоящий экзамен IELTS в
                Cambridge.
              </p>
            </div>
          </div>
          <div className="plus1">
            <img src={thirthty} alt="foto" />
            <h2 className=" text-3xl my-5 mt-20"> Опытные преподаватели</h2>
            <p className="text-gray-500">
              Каждый преподаватель прошел специальные курсы повышения
              квалификации. Наши уважаемые преподаватели имеют результаты IELTS
              до 9.0.
            </p>
          </div>
          <div className="plus-box">
            <div className="plus">
              <img className="plus-img" src={fourthty} alt="foto" />
              <h2 className=" text-3xl my-4">Бесплатные мероприятия</h2>
              <p className="text-gray-500">
                Теннис, гольф, мафия, кино, общение со знаменитостями и
                незабываемые поездки – все это совершенно бесплатно для
                студентов Cambridge.
              </p>
            </div>
            <div className="plus">
              <img className="plus-img" src={fivethty} alt="foto" />
              <h2 className=" text-3xl my-4">Co-working зоны</h2>
              <p className="text-gray-500">
                В каждом филиале нашего учебного центра есть специальные
                co-working зоны для наших учеников. Здесь вы можете свободно
                заниматься английским вне уроков или проходить занятия с
                дополнительным преподавателем.
              </p>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Plus;
