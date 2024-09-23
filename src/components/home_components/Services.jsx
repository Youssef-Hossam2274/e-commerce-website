import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="lg:relative w-full lg:h-[150vh] pb-10  bg-mainWhite ">
      <div className="lg:static lg:h-[150vh] lg:p-0 p-3 flex flex-col gap-4 items-center">
        <div className="lg:absolute lg:top-[50vh] lg:left-[20vh] lg:z-10">
          <img src="./src/img/hero2/banner-2.png" alt="" />
        </div>
        <div className="lg:absolute lg:left-[20vh] lg:top-[120vh] lg:z-20">
          <div className="flex flex-col w-fit items-start ">
            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-blueGray font-medium">
              Accessories
            </h1>
            <Link to={"/"} className=" text-blueGray underline">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="lg:absolute lg:right-[20vh] lg:top-[10vh] lg:z-10">
          <img src="./src/img/hero2/banner-1.png" alt="" />
        </div>
        <div className="lg:absolute lg:left-[80vh] lg:top-[25vh] lg:z-20">
          <div className="flex flex-col w-fit items-start ">
            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-blueGray font-medium">
              Clothing
            </h1>
            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-blueGray font-medium">
              Collections 2023
            </h1>
            <Link to={"/"} className=" text-blueGray underline">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="lg:absolute lg:right-[18vh] lg:top-[80vh] lg:z-10">
          <img src="./src/img/hero2/banner-3.png" alt="" />
        </div>
        <div className="lg:absolute lg:left-[95vh] lg:top-[90vh] lg:z-20">
          <div className="flex flex-col w-fit items-start ">
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blueGray font-medium">
              Shoes Spring
            </h2>
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blueGray font-medium">
              2023
            </h2>
            <Link to={"/"} className=" text-blueGray underline">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
