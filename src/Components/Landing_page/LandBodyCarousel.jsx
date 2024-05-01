import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LandBodyCarousel() {
     const BrandImage = [
        {
            image:"/public/image/BrandImage/2560px-Adidas_Logo.svg.png"
        },
        {
            image:"/public/image/BrandImage/AMD-Logo-700x394.png"
        },
        {
            image:"/public/image/BrandImage/asus.png"
        },
        {
            image:"/public/image/BrandImage/Canon-Symbol.png"
        },
        {
            image:"/public/image/BrandImage/Intel_logo.png"
        },
        {
            image:"/public/image/BrandImage/mi-brand.png"
        },
        {
            image:"/public/image/BrandImage/nike.png"
        },
        {
            image:"/public/image/BrandImage/Nikon-Logo-1979.png"
        },
        {
            image:"/public/image/BrandImage/nvidia.png"
        },
        {
            image:"/public/image/BrandImage/puma-2.png"
        },
        {
            image:"/public/image/BrandImage/Samsung-Symbol.png"
        },
        {
            image:"/public/image/BrandImage/Sony-Logo.png"
        },

     ];
       var index ="";

     var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,                             
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 460,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

      };

  return (
    <div className="p-2 my-10">
        <div className="flex h-[200px] items-center">
        <Slider {...settings}>
            {BrandImage.map((imgpath) => (
                <div key={index} className="mx-4 h-[90%] flex justify-center items-center ">
                    <img src={imgpath.image} alt="brandpic" className="object-contain h-[80%] w-[70%]"/>
                </div>
            ))}
        </Slider>
        </div> 
    </div>
  )
}

export default LandBodyCarousel
