import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Branches from "./components/Branches";
import { IoIosMenu } from "react-icons/io";
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
                <h2 className="">Navigation</h2>

                {/* Кнопка закрытия */}
                <button className="text-3xl" onClick={() => setOpen(false)}>
                  ×
                </button>
              </div>
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
            </nav>
          </div>
       
      )}
    </>
  );
};

export default Navigation;
