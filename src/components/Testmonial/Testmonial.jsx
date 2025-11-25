import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonImg1 from "../../assets/images/pr-1.jpg";
import PersonImg2 from "../../assets/images/pr-2.jpg";
import PersonImg3 from "../../assets/images/pr-3.jpg";
const testmonialData = [
  {
    id: 1,
    name: "کوروش",
    text: " استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد  نیاز،. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گراف",
    img: { PersonImg1 },
  },
  {
    id: 2,
    name: "محمد",
    text: " استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد  نیاز،. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گراف",
    img: { PersonImg2 },
  },
  {
    id: 3,
    name: "علیرضا",
    text: " استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد  نیاز،. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گراف",
    img: { PersonImg3 },
  },
];

function Testmonial() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="p-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">نظرات شما</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            
            <Slider {...settings}>
              {testmonialData.map((data) => {
                return (
                  <div className="my-6 relative">
                    <div
                      key={data.id}
                      className=" flex flex-col justify-center items-center gap-4 text-center bg-black/70 rounded-xl p-2 mx-2"
                    >
                      <img
                        className="rounded-full block mx-auto max-w-[200px] "
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-200 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                      <p className="text-gray-100 text-sm">{data.text}</p>
                      <h1 className="text-xl text-primary font-bold  text-yellow-400">
                        {data.name}
                      </h1>
                      
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonial;
