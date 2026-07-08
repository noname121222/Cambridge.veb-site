import React from "react";
import { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import Logo from "./assets/Logo.svg";
import "./App.css";
import Navigation from "./Navigation";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav-container">
        <div className="box-nav">
          <Link to={"/"}>
            <img className="logo-nav" src={Logo} alt="" />
          </Link>
          <div className="item-nav ">
            <Link to={"/courses"}>Курсы</Link>
            <Link to={"/branches"}>Филиалы</Link>
            <Link to={"/teacher"}>Учителя</Link>
            <Link to={"/certificate"}>Сертификат</Link>
          </div>
        </div>

        <div className="nav-box">
        <div className="nav-btn   text-white cursor-pointer">
          <a href="https://cambridge-registration.vercel.app/">
          <button className="nav-button">Войти</button>
          </a>
          
        </div>

        <Navigation/>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
