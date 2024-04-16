import React from "react";
import { Link } from "react-router-dom";
import LandNavbar from "./LandNavbar";

function LandHeader() {
  return (
    <div className="min-h-screen ">
    <div className="background wave">
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
        <button className="border buttonAnimaton m-5 border-gray-500 bg-transparent text-gray-500 rounded-3xl py-2 px-6 hover:bg-green-300 hover:text-black hover:font-bold" ><Link to="/store">Shop now</Link></button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LandHeader;
