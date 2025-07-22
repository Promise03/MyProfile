import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
    '../../assets/banner.jpg',
  '../../assets/profile.jpg',
]

export default function SimpleSlider() {
  

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    fade: true
  };
  return (
    <Slider {...settings}>

         {images.map((imageUrl, index) => (
    
        <div key={index}>
          
        <div className="bg-[url({images})  w-full h-screen  text-white  text-center py-5 m-auto"
        style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
           <center> <h1 className="text-6xl mt-15">Compassionate Home Care <span class="md:block">Services for Your Loved Ones</span></h1>
            <p className="text-sm">Helping your loved ones to balance the demands of daily life with providing compassionate and personalized care that respects individual lifestory and preference</p></center>
      </div>
      </div>
        ))}
    </Slider>
  );
}
