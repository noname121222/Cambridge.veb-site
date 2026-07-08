import React from "react";
import "./style.css";
import Books from "../assets/books.webp";
import Result from "./Result";
import { BsStars } from "react-icons/bs";

const  About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-item">
          <h1 className="about-font">
            Мы не просто обучаем английскому, мы меняем жизни людей!
          </h1>
          <p className="about-text">
            За 11 лет Cambridge способствовал изменению жизни более 100 000
            молодых людей
          </p>
         
            <a  href="https://cambridge-registration.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="about-btn">
            Запишитесь на первый урок<BsStars />
          </button>
          </a>
        </div>
        <div className="about">
          <img className="about-image" src={Books} alt="foto" />
        </div>
      </section>

      <Result />
    </>
  );
};

export default About;
