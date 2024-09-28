import React from "react";
import { Link } from "react-router-dom";
import serviceImg1 from "../../img/hero2/banner-1.png";
import serviceImg2 from "../../img/hero2/banner-2.png";
import serviceImg3 from "../../img/hero2/banner-3.png";

const Services = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="w-full flex justify-center items-center gap-4 md:justify-evenly flex-col md:flex-row">
        <div className="text-[2rem] flex flex-col justify-center dark:text-white">
          <h1 className="text-center">Clothing</h1>
          <h1>Collections 2024</h1>
          <Link className="text-base underline text-center mt-2" to={"/shop"}>
            Shop now
          </Link>
        </div>
        <div className=" flex justify-center items-center bg-blue-gray-50 dark:bg-gray-900 w-[250px] md:w-[400px]">
          <img src={serviceImg1} alt="img 1" />
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 md:justify-evenly flex-col-reverse md:flex-row">
        <div className=" flex justify-center items-center bg-blue-gray-50 dark:bg-gray-900 w-[250px] md:w-[400px]">
          <img src={serviceImg2} alt="img 2" />
        </div>
        <div className="text-[2rem] flex flex-col justify-center text-right  dark:text-white">
          <h1>Accessories</h1>
          <Link className="text-base underline text-center mt-2" to={"/shop"}>
            Shop now
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 md:justify-evenly flex-col md:flex-row">
        <div className="text-[2rem] flex flex-col justify-center  dark:text-white">
          <h1 className="text-center">Shoes</h1>
          <h1>Spring 2024</h1>
          <Link className="text-base underline text-center mt-2" to={"/shop"}>
            Shop now
          </Link>
        </div>
        <div className=" flex justify-center items-center bg-blue-gray-50 dark:bg-gray-900 w-[250px] md:w-[400px]">
          <img src={serviceImg3} alt="img 3" />
        </div>
      </div>
    </div>
  );
};

export default Services;
