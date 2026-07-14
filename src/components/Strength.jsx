import React from "react";
import "./style.css";
import educat from "../assets/education.svg";
import safia from "../assets/safia.svg";
import mars from "../assets/mars.svg";
import Cambridgelogo from "../assets/Cambridgelogo.svg";
import banner from "../assets/banner.png";
import amity from "../assets/amity.svg";
import london from "../assets/london.svg";
import hertfordshire from "../assets/hertfordshire.svg";

const   Strength = () => {
  return (
    <>
      <section>
        <div className="section-box text-center my-20">
          <p className="section-text text-5xl font-bold">Сила Сертификата</p>
          <p className="section-p my-6 max-w-3xl mx-72 text-xl text-gray-500">
            Откройте свое будущее – наши сертификаты открывают двери в
            университеты и карьеру!
          </p>
        </div>

        <div className="strength-container">
          <div className="strength-box">
            <div className="strength1">
              <img className="strength-logo" src={educat} alt="foto" />
              <p>
                Наши сертификаты признаны ведущими работодателями, что поможет
                вам найти работу. Кроме того, мы предлагаем услугу CV builder
                для создания профессионального резюме
              </p>
            </div>

            <div className="strength">
              <div className="foto-box">
                <img className="str-foto" src={Cambridgelogo} alt="" />
              </div>
              <div className="foto-box">
                <img className="str-foto2" src={safia} alt="" />
              </div>
              <div className="foto-box">
                <img className="str-foto1" src={mars} alt="" />
              </div>
              <div className="foto-box1">
                <h3 className="text-4xl font-bold">15+</h3>
                <p className="text-gray-400">компании доверяют нам</p>
              </div>
            </div>
          </div>

          <div className="str-box1">
            <img className="str-foto3" src={banner} alt="" />
          </div>
          <div className="strength-box">
            <div className="strength1">
              <img className="strength-logo" src={educat} alt="foto" />
              <p>
              Наши сертификаты признаны ведущими университетами страны. С ними вы можете поступить в университет без необходимости получения сертификата IELTS
              </p>
            </div>
            <div className="strength">
              <div className="foto-box">
                <img className="str-foto" src={amity} alt="" />
              </div>
              <div className="foto-box">
                <img className="str-foto4" src={london} alt="" />
              </div>
              <div className="foto-box">
                <img className="str-foto1" src={hertfordshire} alt="" />
              </div>
              <div className="foto-box1">
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="text-gray-400">университеты признают</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strength;
