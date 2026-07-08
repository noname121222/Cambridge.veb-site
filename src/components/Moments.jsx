import React from "react";
import Video from '../assets/tugad.mp4'
import Man from '../assets/Man.mp4'
import Play from '../assets/Play.mp4'
import Mafia from '../assets/mafia.jpg'
import Mafia2 from '../assets/Mafia2.jpg'
import Chess from '../assets/Chess.jpg'
import Ori from '../assets/Ori.jpg'
import Grant from '../assets/Grant.jpg'
import Kahoot from '../assets/Kahoot.jpg'
import "./style.css";




const Moments = () => {
  return (
    <>
      <section>
        <div>
          <div className="flex  items-center gap-6 carousel mx-4">
            <div className="carousel-item">
              <video
                className="moments-video"
                src={Video}
                controls
              ></video>
            </div>
            <div className="carousel-item">
              <div className="moments-box">
                <div>
                  <div>
                    <img
                      src={Mafia}
                      alt=""
                      className="moments-foto "
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Mafia2}
                      alt=""
                      className="moments-foto   "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <video
                className="moments-video "
                src={Man}
                controls
              ></video>
            </div>
            <div className="carousel-item">
              <div>
                <div>
                  <div>
                    <img
                      src={Chess}
                      alt=""
                      className="moments-foto"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Ori}
                      alt=""
                      className="moments-foto "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <video
                className="moments-video"
                src={Play}
                controls
              ></video>
            </div>
            <div className="carousel-item">
              <div>
                <div>
                  <div>
                    <img
                      className="moments-foto "
                      src={Grant}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      className="moments-foto"
                      src={Kahoot}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moments;
