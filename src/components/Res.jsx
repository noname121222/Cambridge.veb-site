import React from "react";
import "./style.css";
import educat from "../assets/education.svg";

const Res = () => {
  return (
    <>
      <section className="res-con">
        <div className="res-box ml-96 my-5 mt-8">
          <img className="res-logo" src={educat} alt="foto" />
        </div>
        <div className="text-center">
         <div className="res-box4">
         <p className=" res-text text-7xl font-bold">Проверьте</p>
          <p className=" res-text text-7xl  font-bold"> Сертификат</p>
         </div>
          <div className="res-box3 ml-8">
            <p className="res-item my-10 text-xl  w-1/2 ml-80 text-gray-500">
              Найдите сертификаты, выданные студентам нашим учебным центром, и
              проверьте их подлинность.
            </p>
          </div>
        </div>

        <div className="res-box2 flex items-center gap-2 ml-80">
          <input
            type="text"
            className="res-item2 border border-inherit w-[550px] py-4 px-4 rounded-2xl text-xl "
            placeholder="Введите ID"
          />

          <button className=" res-btn   rounded-2xl bg-sky-950 text-white py-4 text-xl px-12">
            Найти
          </button>
        </div>
      </section>
    </>
  );
};

export default Res;
