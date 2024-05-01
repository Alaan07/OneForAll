import React from 'react'
import { Link } from "react-router-dom";
import StoreNav from './StoreNav'

function StoreHead() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <StoreNav/>
        <div className=" flex flex-col lg:flex-row justify-center mx-4 px-4 py-2 flex-grow">
            <div className="flex flex-col justify-center w-[100%] lg:w-[50%] mx-2 text-left">
            <div>
                <div className="storeBanner">
                    <p className="text-black text-xl">Category <span className="font-bold text-red-600 text-2xl">Special offer 90% off</span></p>
                </div>
                <div className="storeBanner">
                    <h1 className="font-bold text-4xl truncate whitespace-normal">Razer Gameing Mouse with 18000dpi and 2 custom key </h1>
                </div>
                <div className="storeBanner">
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ex veritatis similique, ullam nesciunt odio autem eligendi necessitatibus corporis impedit, quam hic atque aliquam doloribus, labore laudantium sint a incidunt iusto velit quibusdam </p>
                </div>
                <div className=" flex justify-center storeBanner">
                <button className="border buttonAnimaton m-5 border-gray-500 bg-green-300 text-gray-500 rounded-3xl py-2 px-6 hover:bg-green-500 hover:text-black hover:font-bold" ><Link to="/store">Shop now</Link></button>
                </div>
            </div>
            </div>
            <div className=" animationBody min-h-screen w-full lg:w-[50%]">
                <div className="bgAnimation1"></div>
                <div className="bgAnimation2"></div>
                <div className="bgAnimation3 "></div>
                <div className="AnimationItem">
                    <img src="/public/image/landing_banner_image/mpuse.png" alt="" />
                </div>
            </div> 
        </div>
        </div>
    </>
  )
}

export default StoreHead
