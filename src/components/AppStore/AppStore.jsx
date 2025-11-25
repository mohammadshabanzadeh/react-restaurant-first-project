import React from "react";
import AppStoreImg from "../../assets/images/app_store.png";
import PlayStoreImg from "../../assets/images/play_store.png";
import Gif from "../../assets/images/mobile_bike.gif";


function AppStore() {
  return (
    <div className="bg-gray-200 py-14" data-aos="fade-up" data-aos-duration="300">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl text-gray-500 ">
              IOS , Android اپلیکیشن اژدر برای
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-center items-center">
              <img
                src={AppStoreImg}
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
              <img
                src={PlayStoreImg}
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </div>
          </div>
          <div className="bg-white max-w-[600px] rounded-md mx-7">
            <img src={Gif} className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
