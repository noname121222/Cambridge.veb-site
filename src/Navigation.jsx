import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Branches from "./components/Branches";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className=" navigation-button " onClick={() => setOpen(!open)}>
        <IoIosMenu  className="navigation-logo"/>
      </button>
      {open && (
        <div className="menu-container">
          
            <nav className="menu">
              <div className="menu-header">

                {/* Кнопка закрытия */}
                <button className="menu-item" onClick={() => setOpen(false)}>
                <IoClose className="menu-logo" />
                </button>
              </div>
             <div className="menu-box">
             <button className="box-btn">
                <a href="/certificate">Курсы</a>
              </button>
              <button className="box-btn">
                <a href="/branches">Филиалы</a>
              </button>
              <button className="box-btn">
                <a href="/teacher">Учителя</a>
              </button>
              <button className="box-btn">
                <a href="/courses">Сертификат</a>
              </button>
             </div>
            </nav>
          </div>
       
      )}
    </>
  );
};

export default Navigation;
