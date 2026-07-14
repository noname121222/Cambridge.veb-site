import React from "react";
import "./style.css";
import { SiGooglemaps } from "react-icons/si";

const branches = [
  {
    name: "Cambridge Sergeli",
    img: "https://avatars.mds.yandex.net/get-altay/897342/2a000001876025109058f6fa5aad8e0a43c8/XXXL",
  },
  {
    name: "Cambridge Drujba",
    img: "https://avatars.mds.yandex.net/get-altay/760153/2a000001875679778a4415d203736c2d9bd2/XXXL",
  },
  {
    name: "Cambridge Darxon",
    img: "https://avatars.mds.yandex.net/get-altay/1359533/2a000001875b7bc44e7d55b6b6c1878ead2d/XXXL",
  },
  {
    name: "Cambridge Tinchlik",
    img: "https://avatars.mds.yandex.net/get-altay/934739/2a000001875b970e752264ea216e3f2131b6/XXXL",
  },
  {
    name: "Cambridge Yunusobod",
    img: "https://avatars.mds.yandex.net/get-altay/10767436/2a00000190fd5a5507bc9c8b03399f452b35/XXXL",
  },
  {
    name: "Cambridge Novza",
    img: "https://avatars.mds.yandex.net/get-altay/916509/2a00000187565da8433a3adfaaa567d21b30/XXXL",
  },
  {
    name: "Cambridge Ferghana",
    img: "https://avatars.mds.yandex.net/get-altay/758957/2a000001875679ef01cc497fa075623f26ce/XXXL",
  },
  {
    name: "Cambridge Oybek",
    img: "https://avatars.mds.yandex.net/get-altay/5534173/2a000001875bbcdbe81ed0e6e9b8bd89bb32/XXXL",
  },
  {
    name: "Cambridge Inyaz",
    img: "https://avatars.mds.yandex.net/get-altay/5534173/2a00000187565e7157fdc43547387fe8c94a/XXXL",
  },
];

const Location = () => {
  return (
    <>
     <div className="section-box text-center my-16 mt-24">
          <p className="section-text text-5xl font-bold">Наши филиалы</p>
          <p className="section-p my-6 max-w-3xl mx-72 text-xl text-gray-500">
          Узнайте о всех наших филиалах, расположенных в различных локациях Узбекистана и выберите тот, который вам больше всего подходит
          </p>
        </div>

      <div className="  flex carousel gap-3 mx-3 ">
        {branches.map((branch, idx) => (
          <div
            key={idx}
            className="location-container w-3/6 h-96 rounded-2xl bg-cover carousel-item pb-4"
            style={{ backgroundImage: `url(${branch.img})` }}
          >
            <div className="location-box3">
              <p className="location-text text-white text-4xl font-bold pt-64 pl-5">
                {branch.name}
              </p>

              <div className="location-box flex items-center justify-around mt-3 pl-6 ">
                <p className="text-gray-300">Узнайте о всех наших филиалах</p>

                <div className="location-item flex items-center gap-2 ml-14 ">
                  <button className="rounded-xl flex items-center gap-2 backdrop-blur-sm bg-white/30 py-4 px-3">
                    <SiGooglemaps className="w-6 h-6" />
                    <p className="text-white">Google Maps</p>
                  </button>
                  <button className="rounded-xl flex items-center gap-2 backdrop-blur-sm bg-white/30 py-4 px-3">
                    <SiGooglemaps className="w-6 h-6" />
                    <p className="text-white">Yandex Maps</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Location;
