import React from "react";
import "./style.css";

const Result = () => {
  return (
    <>
      <div className="result-container flex items-center  mx-16 gap-8 ">
        <div className="result-box bg-slate-100 w-64 py-6 px-6 rounded-3xl  ">
          <div className="result-white "></div>
          <p className="result-text text-5xl my-2 ">11+</p>
          <p className="result-text1 text-gray-500">многолетний опыт нашей компании</p>
        </div>
        <div className="result-box1 bg-slate-100 w-64 py-6 px-6 rounded-3xl ">
        <div className="result-orange "></div>
          <p className=" result-text text-5xl my-2">100 000+</p>
          <p className="result-text1 text-gray-500">
            молодые люди, выучившие английский язык
          </p>
        </div>
        <div className="result-box2 bg-slate-100 w-64 py-6 px-6 rounded-3xl">
        <div className="result-yellow "></div>
          <p className=" result-text text-5xl my-2">16</p>
          <p className="result-text1 text-gray-500">Количество филиалов по Узбекистану</p>
        </div>
        <div className="result-box3 bg-slate-100 w-64 py-6 px-6 rounded-3xl">
        <div className="result-green "></div>
          <p className=" result-text text-5xl my-2">500+</p>
          <p className="result-text1 text-gray-500 ">Количество сотрудников в Кембридже</p>
        </div>
      </div>
    </>
  );
};

export default Result;
