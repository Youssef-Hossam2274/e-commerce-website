import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="w-full flex justify-evenly">
        <div className="text-[2rem] flex flex-col justify-center ml-8 dark:text-white">
          <h1>Clothing</h1>
          <h1>Collections 2024</h1>
          <Link className="text-base underline" to={"/"}>
            Shop now
          </Link>
        </div>
        <div className=" bg-blue-gray-50 dark:bg-gray-900">
          <img src="./src/img/hero2/banner-1.png" alt="" />
        </div>
      </div>

      <div className="w-full flex justify-evenly">
        <div className=" bg-blue-gray-50 dark:bg-gray-900">
          <img src="./src/img/hero2/banner-2.png" alt="" />
        </div>
        <div className="text-[2rem] flex flex-col justify-center text-right ml-8 dark:text-white">
          <h1>Accessories</h1>
          <Link className="text-base underline" to={"/"}>
            Shop now
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-evenly">
        <div className="text-[2rem] flex flex-col justify-center ml-8 dark:text-white">
          <h1>Shoes</h1>
          <h1>Spring 2024</h1>
          <Link className="text-base underline" to={"/"}>
            Shop now
          </Link>
        </div>
        <div className=" bg-blue-gray-50 dark:bg-gray-900">
          <img src="./src/img/hero2/banner-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
