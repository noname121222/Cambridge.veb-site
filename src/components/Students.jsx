import React from "react";
import People1 from "../assets/Oltiboev.webp";
import People2 from "../assets/Odilov.webp";
import People3 from "../assets/Safarova.webp";
import People4 from "../assets/Boltayeva.webp";
import People5 from "../assets/Yunusova.webp";
import People6 from "../assets/Yuldoshov.webp";
import "./style.css";

const Students = () => {
  return (
    <>
      <section>
        <div className="section-box text-center my-12">
          <p className="section-text text-5xl font-bold">Наши студенты</p>
          <p className="section-p my-4 text-gray-500">
            Ознакомьтесь с результатами наших студентов и получите мотивацию
          </p>
        </div>
        <div className=" students-container flex carousel gap-5">
          <div className="students-box   flex w-1/2 gap-6  px-5 py-6 rounded-2xl carousel-item ">
            <div>
              <img src={People1} className="students-foto h-96 " alt="" />
            </div>
            <div className="w-80 ">
              <p className="text-4xl">Oltiboev Asilbek</p>
              <p className="my-4">
                Ассаламу алейкум! Обучаясь в учебном центре Cambridge в течение
                3 месяцев, я добился результата 8.5 баллов. Человек, который
                больше всего внес вклад в этот результат, был мой учитель, мисс
                Сандра. Её индивидуальный подход, не только строгость, но и
                пример трудолюбия, помогли мне достичь этого результата.
              </p>
              <div className=" flex items-center gap-4 my-6">
                <div className="students-box2 bg-black w-36 h-32 px-3 py-3 rounded-2xl ">
                  <div className="students-gradient"></div>
                  <p className="text-white text-3xl">8.5</p>
                  <p className="text-white">Overall IELTS Score</p>
                </div>
                <div className="students-box2 bg-black w-36 h-32 px-3 py-3 rounded-2xl">
                <div className="students-gradient"></div>
                  <p className="text-4xl text-white">C2</p>
                  <p className="text-white">CEFR Level</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" students-box flex w-1/2 gap-6 bg-slate-50 px-5 py-6 rounded-2xl carousel-item">
            <div>
              <img src={People2} className="h-96 " alt="" />
            </div>
            <div className="w-80 ">
              <p className="text-4xl">Odilov Eldor</p>
              <p className="my-4">
                Cambridge Learning Center оставил во мне очень глубокое
                впечатление. За три месяца обучения здесь я получил 8.0 баллов
                на экзамене IELTS. В этом успехе большую роль сыграл мистер
                Сардор. Его занятия очень эффективны и интересны, он умеет
                учитывать потребности каждого студента.
              </p>
              <div className="students-box1 flex items-center gap-4 my-6">
                <div className="students-box2 bg-cyan-400 w-36 h-32 px-3 py-3 rounded-2xl ">
                <div className="students-gradient"></div>
                  <p className="text-white text-4xl">8.0</p>
                  <p className="text-white">Overall IELTS Score</p>
                </div>
                <div className="students-box2 bg-cyan-400 w-36 h-32 px-3 py-3 rounded-2xl">
                <div className="students-gradient"></div>
                  <p className="text-4xl text-white">C1</p>
                  <p className="text-white">CEFR Level</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" students-box flex w-1/2 gap-6 bg-slate-50 px-5 py-6 rounded-2xl carousel-item">
            <div>
              <img src={People3} className="h-96 " alt="" />
            </div>
            <div className="w-80 ">
              <p className="text-4xl">Safarova Oysha</p>
              <p className="my-4">
                Всевышний сделал Cambridge LC причиной моего высокого балла.
                Мистер Ахмаджон, один из самых преданных учителей, которых я
                когда-либо видела, который значительно способствовал этому,
                очевидно.Его хорошо спланированные уроки, направленные
                непосредственно на требования IELTS.
              </p>
              <div className="  flex items-center gap-4 my-6">
                <div className="students-box2 bg-orange-500 w-36 h-32 px-3 py-3 rounded-2xl ">
                <div className="students-gradient"></div>
                  <p className="text-white text-4xl">8.0</p>
                  <p className="text-white">Overall IELTS Score</p>
                </div>
                <div className="students-box2 bg-orange-500 w-36 h-32 px-3 py-3 rounded-2xl">
                <div className="students-gradient"></div>
                  <p className="text-4xl text-white">C1</p>
                  <p className="text-white">CEFR Level</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" students-box flex w-1/2 gap-6 bg-slate-50 px-5 py-6 rounded-2xl carousel-item">
            <div>
              <img src={People4} className="h-96 " alt="" />
            </div>
            <div className="w-80 ">
              <p className="text-4xl">Boltayeva Lola</p>
              <p className="my-4">
                Ассалому алейкум, я обучалась на курсе IELTS level 2 в Cambridge
                в течение 3 месяцев и достигла результата 8.0 по IELTS. Хочу
                выразить благодарность своим учителям мисс Индире и мистеру
                Сардору за их усилия и помощь в нашем обучении. Также благодарю
                Cambridge за создание отличных условий для обучения.
              </p>
              <div className="flex items-center gap-4 my-6">
                <div className="students-box2 bg-amber-500 w-36 h-32 px-3 py-3 rounded-2xl ">
                <div className="students-gradient"></div>
                  <p className="text-white text-4xl">8.0</p>
                  <p className="text-white">Overall IELTS Score</p>
                </div>
                <div className="students-box2 bg-amber-500 w-36 h-32 px-3 py-3 rounded-2xl">
                <div className="students-gradient"></div>
                  <p className="text-4xl text-white">C1</p>
                  <p className="text-white">CEFR Level</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" students-box flex w-1/2 gap-6 bg-slate-50 px-5 py-6 rounded-2xl carousel-item">
            <div>
              <img src={People5} className="h-96 " alt="" />
            </div>
            <div className="w-80 ">
              <p className="text-4xl">Yunusova Safiya</p>
              <p className="my-4">
                Курс по подготовке к IELTS в учебном центре Cambridge просто
                потрясающий! Я достигла желаемого результата благодаря
                невероятному преподавателю и отличному учебному центру. Их
                поддержка, ресурсы и руководство сыграли решающую роль в моей
                подготовке и успехе.
              </p>
              <div className="flex items-center gap-4 my-6">
                <div className="students-box2 bg-lime-500 w-36 h-32 px-3 py-3 rounded-2xl ">
                <div className="students-gradient"></div>
                  <p className="text-white text-4xl">8.0</p>
                  <p className="text-white">Overall IELTS Score</p>
                </div>
                <div className="students-box2 bg-lime-500 w-36 h-32 px-3 py-3 rounded-2xl">
                <div className="students-gradient"></div>
                  <p className="text-4xl text-white">C1</p>
                  <p className="text-white">CEFR Level</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" students-box flex w-1/2 gap-6 bg-slate-50 px-5 py-6 rounded-2xl carousel-item">
            <div>
              <img src={People6} className="h-96 " alt="" />
            </div>
            <div className="w-80 ">
              <p className="text-4xl">Yuldoshev Firdavs</p>
              <p className="my-4">
                Мой интерес к преподаванию английского языка возник еще в
                школьные годы, и я решил посвятить свою жизнь этой сфере. Моя
                главная цель в работе - раскрыть потенциал студентов и
                заинтересовать их не только к английскому языку, но и к другими
                областям.
              </p>
              <div className="flex items-center gap-4 my-6">
                <div className="students-box2 bg-red-500 w-36 h-32 px-3 py-3 rounded-2xl ">
                <div className="students-gradient"></div>
                  <p className="text-white text-4xl">8.0</p>
                  <p className="text-white">Overall IELTS Score</p>
                </div>
                <div className="students-box2 bg-red-500 w-36 h-32 px-3 py-3 rounded-2xl">
                <div className="students-gradient"></div>
                  <p className="text-4xl text-white">C1</p>
                  <p className="text-white">CEFR Level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
