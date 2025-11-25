import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/images/food-logo.png"
function Navbar() {
  return (
    <div className=" shadow-md bg-white duration-200">
      <div className="container py-3 sm:py0 mx-auto">
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-4 ml-5">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 transition-all cursor-pointer">
              سفارش
              <FaCartShopping />
            </button>
          </div>

          <div className="flex flex-row-reverse mr-5">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-4 pl-10 items-center">
                اژدر
                <img src={Logo}  className="w-10"/>
            </a>

            <ul className="hidden sm:flex items-center gap-4 ">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-500 hover:scale-110 inline-block py-4 px-4 transition-all"
                >
                  خدمات
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-500 inline-block py-4 px-4 hover:scale-110 transition-all"
                >
                  درباره
                </a>

                <a
                  href="#"
                  className="hover:text-yellow-500 inline-block py-4 px-4 hover:scale-110 transition-all"
                >
                  بلاگ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
