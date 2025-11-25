import React from "react";
import Img from "../../assets/images/cheese.png";
import Img2 from "../../assets/images/image-2.png";
import Img3 from "../../assets/images/image-2.png";
import { IoStarSharp } from "react-icons/io5";

const servicesData = [
  {
    id: 1,
    img: Img,
    name: "چیز برگر",
    desc: "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با  استفاده از طراحان گرافیک است",
  },
  {
    id: 2,
    img: Img2,
    name: "مرغ با برنج",
    desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    id: 3,
    img: Img3,
    name: "مرغ",
    desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
];

function Services() {
  return (
    <div className="py-10" data-aos="zoom-down" data-aos-duration="300">
      <div className="container mx-auto">
        <div className="text-center mb-20 max-w-[500px] mx-auto">
          <h1 className="text-3xl font-bold">خدمات ما</h1>
        </div>
        <div className="grid grid-cols-1 mx-5 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {servicesData.map((service) => (
            <div className="rounded-2xl bg-gray-800 hover:bg-yellow-500 text-white hover:text-white relative shadow-xl duration-high group max-w-100 hover:duration-200">
              <div className="h-[120px]">
                <img
                  src={service.img}
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <div className="w-full flex justify-center items-center">
                  <IoStarSharp className="ml-3 text-yellow-400 text-3xl"/>
                  <IoStarSharp className="ml-3 text-yellow-400 text-3xl"/>
                  <IoStarSharp className="ml-3 text-yellow-400 text-3xl"/>
                  <IoStarSharp className="ml-3 text-yellow-400 text-3xl"/>
                  <IoStarSharp className="ml-3 text-yellow-400 text-3xl"/>
                </div>
                <h1 className="text-xl font-bold pt-5">{service.name}</h1>
                <p className="text-gray-500 hover:text-white text-sm line-clamp-2 pt-5">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
