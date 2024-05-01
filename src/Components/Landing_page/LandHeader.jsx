import React from "react";
import { Link } from "react-router-dom";
import LandNavbar from "./LandNavbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandHeader() {
  const LandHeaderItems = [
    { image: "/public/image/landing_banner_image/Asus.png" },
    { image: "/public/image/landing_banner_image/Nikon-Z8.png" },
    { image: "/public/image/landing_banner_image/Mi.png" },
    { image: "/public/image/landing_banner_image/nike shoe.png" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,                             
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    focusOnSelect: true
  }

  return (
    <div className="min-h-screen">
      <div className="background wave ">
        <LandNavbar />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center max-w-4xl w-full px-6">
            <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl text-center p-10">
              Design & High Quality
            </h1>
            <p className="text-gray-500 text-lg md:text-xl lg:text-2xl text-center px-10">
              "Unbeatable deals on everything you need! Shop now and save big on
              our entire collection. Don't miss out!"
            </p>
            <button className="border buttonAnimaton m-5 border-gray-500 bg-transparent text-gray-500 rounded-3xl py-2 px-6 hover:bg-green-300 hover:text-black hover:font-bold">
              <Link to="/store">Shop now</Link>
            </button>
          </div>
        </div>
      </div>

        {/* <div className="bannerimage h-[100%] flex justify-center items-center flex-grow">
            {LandHeaderItems.map((imagepath, index) => (
              <div key={index} className="flex justify-center items-center h-fit w-[30%]">
                <div className="w-[25%]">
                  <img src={imagepath.image} alt="image" className=" w-[25%]" />
                </div>
                <div>
                </div>
              </div>
            ))}
      </div> */}

       
    </div>
  );
}

export default LandHeader;
