import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/images/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
         
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  لینک های مفید 
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">خانه</li>
                  <li className="cursor-pointer">درباره </li>
                  <li className="cursor-pointer">خدمات</li>
                  <li className="cursor-pointer">ورود</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  لینک های مفید
                </h1>
                <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">خانه</li>
                  <li className="cursor-pointer">درباره </li>
                  <li className="cursor-pointer">خدمات</li>
                  <li className="cursor-pointer">ورود</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 ">
                  لینک های مفید
                </h1>
              
                <ul className="flex flex-col gap-3 ">
                <li className="cursor-pointer ">خانه</li>
                  <li className="cursor-pointer">درباره </li>
                  <li className="cursor-pointer">خدمات</li>
                  <li className="cursor-pointer">ورود</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" py-8 px-4">
            <h1 className=" sm:text-3xl text-xl font-bold sm:text-left  mb-3 flex items-center gap-3 justify-center">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              اژدر
            </h1>
            <p className="text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
            استفاده از طراحان گرافیک است چاپگرها 
            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
            </p>
            <br />
            <div className="flex items-center gap-3 justify-center">
              <FaLocationArrow />
              <p>  تهران، ستارخان</p>
            </div>
            <div className="flex items-center gap-3 mt-3 justify-center">
              <FaMobileAlt />
              <p>+98 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6 justify-center">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            Mrcodee.js ساخته شده توسط
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;