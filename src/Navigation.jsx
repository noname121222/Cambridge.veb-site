import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Branches from "./components/Branches";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
const Navigation = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () =>{
      document.body.style.overflow = "auto"
    }
  },[open])
  return (
    <>
      <button className=" navigation-button " onClick={() => setOpen(!open)}>
     {open ?  <IoIosClose className="menu-logo" /> : <IoIosMenu  className="navigation-logo"/>}   
      </button>
      {open && (
        <div className="menu-container">
          
            <nav className="menu">
            
             <div className="menu-box">
             <button className="box-btn">
                <a href="/certificate">Курсы </a>
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
