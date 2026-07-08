import React, { useState } from "react";
import AB from "../assets/Teacher1.png";
import AC from "../assets/Teacher2.png";
import AS from "../assets/Teacher3.png";
import video2 from "../assets/video.mp4";
import video3 from "../assets/video2.mp4";
import video4 from "../assets/video3.mp4";
import "./style.css";

const Teachers = () => {
  const items = [
    {
      id: 1,
      image: AB,
      title: "Sardor Erkinov",
      bal: "IELTS 8.5",
      video: video2,
      info: "Mr. Sardor - я выиграл награду 'Инструктор IELTS 2023 года'. Моя главная цель - помочь как можно большему количеству студентов получить высокие баллы (7.0+). Если вы хотите улучшить свои навыки writing и reading, вы не ошибетесь, выбрав меня.",
      exp: "6+",
      studens: "2000+",
    },

    {
      id: 2,
      image: AC,
      title: "Jakhongir Abbasov",
      bal: "IELTS 8",
      video: video3,
      info: "Будучи ведущим преподавателем с 8-летним опытом работы в престижных академических учреждениях, я успешно обучаю студентов из различных социальных и культурных слоев. Говорят, что я отличный собеседник и искренний человек . Люблю путешествовать и проводить время со своими студентами.",
      exp: "8+",
      studens: "3000+",
    },

    {
      id: 3,
      image: AS,
      title: "Alijon Rakhmatov",
      bal: "IELTS 8",
      video: video4,
      info: "Я целеустремленный человек, который постоянно стремится к самосовершенствованию и старается поддерживать у своих студентов позитивный настрой. Я делюсь со своими студентами опытом, приобретенным за 10 лет за границей. Настроение 24/7 позитивное.",
      exp: "5+",
      studens: "2500+",
    },
  ];
  const [team, setTeam] = useState(items[0]);
  return (
    <>
      <section>
        <div className="section-box text-center my-20">
          <p className="section-text text-5xl font-bold">Наши учителя</p>
          <p className="section-p my-6 max-w-3xl mx-72 text-xl text-gray-500">
            Настоящие герои, вы можете познакомиться с ними ниже
          </p>
        </div>
        <div className="teachers-container">
          <div className="teacher-big">
            {items.map((item, index) => (
              <div
                onClick={() => setTeam(items[item.id - 1])}
                key={item.id}
                className={` teachers-box ${team.id === item.id ? "active" : ""} `}
              >
                <img
                  className="teachers-foto"
                  src={item.image}
                  alt={item.title}
                />
                <div className="teachers">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-500">{item.bal}</p>
                </div>
              </div>
              

              
            ))}
          </div>

          <div className="teacher-big2 carousel">
            {items.map((item, index) => (
              <div
                onClick={() => setTeam(items[item.id - 1])}
                key={item.id}
                className={` teachers-box carousel-item ${team.id === item.id ? "active" : ""} `}
              >
                <img
                  className="teachers-foto"
                  src={item.image}
                  alt={item.title}
                />
                <div className="teachers carousel-item">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-500">{item.bal}</p>
                </div>
              </div>
              

              
            ))}
          </div>

          <div className="teachers-box1">
            <div className="video-box">
              <video
                preload="auto"
                className="teachers-video"
                src={team.video}
                controls
              ></video>
            </div>
            <div className="teacher-box3">
              <h2 className="teacher-te">{team.info}</h2>
              <div className="teacher-box2">
                <div className="teacher-item bg-slate-100 w-64 py-6 px-6 rounded-3xl ">
                <div className="result-white "></div>
                  <button className="text-4xl font-bold">{team.exp}</button>
                  <p className="teacher-p text-gray-500">years of experience</p>
                </div>
                <div className=" teacher-item1 bg-slate-100 w-64 py-6 px-6 rounded-3xl ">
                <div className="result-orange "></div>
                  <button className="text-4xl font-bold">{team.studens}</button>
                  <p className="teacher-p text-gray-500">students studied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teachers;
