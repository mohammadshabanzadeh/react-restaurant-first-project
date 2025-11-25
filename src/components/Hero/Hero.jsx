import React, { useState } from "react";
import image_1 from "../../assets/images/hero-1.png";
import image_2 from "../../assets/images/hero-2.png";
import image_3 from "../../assets/images/hero-3.png";
import "../../index.css";

const imageList = [
  {
    id: 1,
    img: image_1,
  },
  {
    id: 2,
    img: image_2,
  },
  {
    id: 3,
    img: image_3,
  },
];

function Hero() {
  const [imageId, setImageId] = useState(image_1);

  return (
    <div className="bgImage min-h-[550px] sm:min-h-screen lg:min-h-screen bg-gray-100 flex  justify-center items-center duration-200">
      <div className="container pb-8 sm:pb0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text section*/}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center p-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold pb-10">
              به اژدر <span className="text-yellow-400">خوش آمدید</span>
            </h1>
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز،.
            </p>
            <div>
              <button
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 duration-200
            text-white py-2 px-4 mt-5 rounded-full cursor-pointer"
              >
                ثبت سفارش
              </button>
            </div>
          </div>

          {/*image section*/}
          <div className="min-h-[450px] sm:min-h-[500] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                src={imageId}
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-5 lg:px-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/35 rounded-full sm:mr-14">
              {imageList.map((item) => (
                <img
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer "
                  src={item.img}
                  onClick={() => {
                    setImageId(
                      item.id === 1
                        ? image_1
                        : item.id === 2
                        ? image_2
                        : image_3
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
