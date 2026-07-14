import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import Logo from "../assets/white.svg";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="  footer-container3">
          <div className="footer-logo2">
            <img src={Logo} alt="" className="text-white" />
          </div>
          <div className="footer-container2 ">
            <div className="footer-logo">
              <img src={Logo} alt="" className="text-white" />
            </div>

            <div className="footer-box">
              <p className="text-white text-3xl font-bold">
                Cambridge Learning Center
              </p>
              <div className="footer-item">
                <a
                  className="flex  gap-1  text-gray-500 cursor-pointer"
                  href="/teacher"
                >
                  <p className="text-xl">Учителя</p>
                  <GoArrowUpRight className="w-5 h-5 text-gray-500" />
                </a>
                <a
                  className="flex  gap-1 text-gray-500  cursor-pointer"
                  href="/courses"
                >
                  <p className="text-xl">Курсы</p>
                  <GoArrowUpRight className="w-5 h-5 text-gray-500" />
                </a>
              </div>
              <div className="footer-item2">
                <a
                  className="flex  gap-1 text-gray-500 cursor-pointer"
                  href="/branches"
                >
                  <p className="text-xl ">Филиалы</p>
                  <GoArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  className="flex  gap-1  text-gray-500 cursor-pointer"
                  href="certificate"
                >
                  <p className="text-xl">Сертификат</p>
                  <GoArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="footer-box2">
              <p className="text-white text-3xl  font-bold">Контакты</p>
              <div className="flex items-center gap-1 text-gray-500 ">
                <FaPhone />
                <p className="text-xl">+998 78 777 77 74</p>
              </div>
            </div>
            <div className="footer-box3 ">
              <p className="text-white text-3xl  font-bold max-w-32">
                Социальные сети
              </p>
              <div className="flex items-center gap-2   text-gray-500">
                <FaYoutube className="w-7 h-7" />
                <FaInstagram className="w-7 h-7" />
                <LiaTelegramPlane className="w-7 h-7" />
              </div>
              <button
                onClick={() =>
                  alert("Простите,этот способ оплаты временно недоступен !")
                }
                className="footer-btn py-4 px-10 rounded-2xl text-xl cursor-pointer"
              >
                Оплатить онлайн
              </button>
            </div>
          </div>

          <div className="footer-bottom border-t border-white pb-3">
            <p className="footer-item3 text-xl mt-6 ml-12 text-gray-500">
              Copyright © 2024 Cambridge LLC. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
