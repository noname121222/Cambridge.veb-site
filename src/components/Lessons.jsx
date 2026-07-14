import React from "react";
import educat from "../assets/education.svg";
import check from "../assets/check.svg";
import check1 from "../assets/orangecheck.svg";
import educat1 from "../assets/ielts2.svg";
import educat2 from "../assets/ielts3.svg";
import check2 from "../assets/greencheck.svg";
import check3 from "../assets/blackcheck.svg";
import educat3 from "../assets/ielts4.svg";
import "./style.css";
import { BsStars } from "react-icons/bs";

const Lessons = () => {
  return (
    <>
      <section>
        <div className="section-box text-center my-20">
          <p className="section-text text-5xl font-bold">Наши курсы</p>
          <p className="section-p my-6 max-w-3xl mx-72 text-xl text-gray-500">
            Узнайте о доступных курсах в Cambridge Learning и выберите тот,
            который вам больше всего подходит
          </p>
        </div>

        <div className="lessons-container">
          <div className="lessons">
            <div className="lessons-item">
              <img className="strength-logo" src={educat} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                5 уровней (от Beginner до Upper-Intermediate / Pre-IELTS),
                каждый по 3 месяца. По окончании программы формируется прочная
                база английского языка.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю, по 80 минут. На основе системы Prepare
                от Cambridge University Press.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                Воскресные мероприятия: Movie Day, Speaking Club, дебаты и
                семинары с гостями.
              </p>
            </div>
            <div className="lessons-item1 mb-1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                При пропуске занятий предусмотрена помощь ассистента
                преподавателя.
              </p>
            </div>
            <div className="lessons-box2">
              <a
                className="lessons-btn mt-56"
                href="https://cambridge-registration.vercel.app/"
               
              >
         
              <button className=" cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
     
              </a>
            </div>
          </div>
          <div className="lessons">
            <div className="lessons-item">
              <img className="lessons-orange" src={educat1} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю по 80 минут. Upper-Intermediate —
                академический английский язык и начальный этап подготовки к
                IELTS.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Сложная грамматика, академическая лексика и официальный стиль —
                прочная база для Speaking и Writing.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Преподаются все разделы IELTS (Listening, Reading, Writing,
                Speaking), критерии оценивания и экзаменационные стратегии.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Регулярные IELTS mock exam в реальном формате и индивидуальный
                разбор.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Структура Writing Task 1 & 2, фразы для высокого балла и техники
                построения аргументации.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Практика Speaking Part 1–2–3 в реальном формате экзамена с
                профессиональной обратной связью.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Постоянный мониторинг прогресса и дополнительные академические
                материалы.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn1 mt-2"
                href="https://cambridge-registration.vercel.app/"
              
              >
                <button className=" cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="lessons">
            <div className="lessons-item">
              <img className="lessons-green" src={educat2} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю по 80 минут. Углублённая и системная
                подготовка к IELTS
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Listening, Reading, Writing, Speaking — изучаются в полном
                экзаменационном формате на основе официальных band
                descriptor’ов.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Writing Task 1 & 2: чёткая структура, развитие аргументации и
                техники, ориентированные на band 5.5+.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Speaking в реальном формате экзамена с индивидуальной обратной
                связью и стратегиями повышения band.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Listening и Reading: интенсивная работа над управлением временем
                и сложными типами вопросов.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Большее количество полноформатных IELTS mock exam и
                индивидуальный мониторинг прогресса.
              </p>
            </div>
            <div className="lessons-item1 mb-2">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                По окончании курса студенты достигают уровня уверенной сдачи
                официального экзамена.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn2 mt-12"
                href="https://cambridge-registration.vercel.app/"
                
              >
                <button className=" cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="lessons">
            <div className="lessons-item">
              <img className="lessons-black" src={educat3} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю по 80 минут. Интенсивная подготовка,
                ориентированная на высокий band результат.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Listening, Reading, Writing, Speaking — прорабатываются сложные
                типы вопросов на уровне реального экзамена.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Writing: сложная аргументация, безупречная структура, advanced
                grammar и collocations, профессиональная обратная связь.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Speaking: навыки глубоких и логичных ответов на основе критериев
                высокого band.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Listening и Reading: максимальная точность, скорость и идеальное
                управление временем.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Регулярные полноформатные IELTS mock exam и индивидуальный
                стратегический разбор
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Индивидуальный мониторинг прогресса и подготовка по
                экзаменационной психологии.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                По окончании курса студенты достигают уровня готовности к
                получению высокого band.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn3 "
                href="https://cambridge-registration.vercel.app/"
                
              >
                <button className=" cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="lessons-container2 carousel">
          <div className="lessons carousel-item">
            <div className="lessons-item">
              <img className="strength-logo" src={educat} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                5 уровней (от Beginner до Upper-Intermediate / Pre-IELTS),
                каждый по 3 месяца. По окончании программы формируется прочная
                база английского языка.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю, по 80 минут. На основе системы Prepare
                от Cambridge University Press.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                Воскресные мероприятия: Movie Day, Speaking Club, дебаты и
                семинары с гостями.
              </p>
            </div>
            <div className="lessons-item1 mb-1">
              <img className="w-8 h-8" src={check} alt="" />
              <p className="text-gray-500">
                При пропуске занятий предусмотрена помощь ассистента
                преподавателя.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn mt-56"
                href="https://cambridge-registration.vercel.app/"
               
              >
                <button className="lessons-bt ml-14 cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="lessons carousel-item">
            <div className="lessons-item">
              <img className="lessons-orange" src={educat1} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю по 80 минут. Upper-Intermediate —
                академический английский язык и начальный этап подготовки к
                IELTS.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Сложная грамматика, академическая лексика и официальный стиль —
                прочная база для Speaking и Writing.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Преподаются все разделы IELTS (Listening, Reading, Writing,
                Speaking), критерии оценивания и экзаменационные стратегии.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Регулярные IELTS mock exam в реальном формате и индивидуальный
                разбор.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Структура Writing Task 1 & 2, фразы для высокого балла и техники
                построения аргументации.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Практика Speaking Part 1–2–3 в реальном формате экзамена с
                профессиональной обратной связью.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check1} alt="" />
              <p className="text-gray-500">
                Постоянный мониторинг прогресса и дополнительные академические
                материалы.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn1 mt-2"
                href="https://cambridge-registration.vercel.app/"
              
              >
                <button className="lessons-bt ml-14 cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className=" lessons-icon cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="lessons carousel-item">
            <div className="lessons-item">
              <img className="lessons-green" src={educat2} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю по 80 минут. Углублённая и системная
                подготовка к IELTS
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Listening, Reading, Writing, Speaking — изучаются в полном
                экзаменационном формате на основе официальных band
                descriptor’ов.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Writing Task 1 & 2: чёткая структура, развитие аргументации и
                техники, ориентированные на band 5.5+.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Speaking в реальном формате экзамена с индивидуальной обратной
                связью и стратегиями повышения band.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Listening и Reading: интенсивная работа над управлением временем
                и сложными типами вопросов.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                Большее количество полноформатных IELTS mock exam и
                индивидуальный мониторинг прогресса.
              </p>
            </div>
            <div className="lessons-item1 mb-2">
              <img className="w-8 h-8" src={check2} alt="" />
              <p className="text-gray-500">
                По окончании курса студенты достигают уровня уверенной сдачи
                официального экзамена.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn2 mt-12"
                href="https://cambridge-registration.vercel.app/"
                
              >
                <button className="lessons-bt ml-14 cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="lessons carousel-item">
            <div className="lessons-item">
              <img className="lessons-black" src={educat3} alt="foto" />
              <h3 className="text-3xl">General English</h3>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Занятия 3 раза в неделю по 80 минут. Интенсивная подготовка,
                ориентированная на высокий band результат.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Listening, Reading, Writing, Speaking — прорабатываются сложные
                типы вопросов на уровне реального экзамена.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Writing: сложная аргументация, безупречная структура, advanced
                grammar и collocations, профессиональная обратная связь.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Speaking: навыки глубоких и логичных ответов на основе критериев
                высокого band.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Listening и Reading: максимальная точность, скорость и идеальное
                управление временем.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Регулярные полноформатные IELTS mock exam и индивидуальный
                стратегический разбор
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                Индивидуальный мониторинг прогресса и подготовка по
                экзаменационной психологии.
              </p>
            </div>
            <div className="lessons-item1">
              <img className="w-8 h-8" src={check3} alt="" />
              <p className="text-gray-500">
                По окончании курса студенты достигают уровня готовности к
                получению высокого band.
              </p>
            </div>
            <div>
              <a
                className="lessons-btn3 "
                href="https://cambridge-registration.vercel.app/"
                
              >
                <button className="lessons-bt ml-14 cursor-pointer">
                  Запишитесь на первый урок
                </button>
                <BsStars className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lessons;
