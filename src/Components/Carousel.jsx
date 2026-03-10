import React, { useState } from "react";

import offer1 from "../assets/images/offers/offer1.jpg";
import offer2 from "../assets/images/offers/offer2.jpg";
import offer3 from "../assets/images/offers/offer3.jpg";
import offer4 from "../assets/images/offers/offer4.jpg";
import offer5 from "../assets/images/offers/offer5.jpg";


const Carousel = () => {
    const images = [offer1, offer2, offer3, offer4, offer5];
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        //prevIndex - value before update happen
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
       <div className="relative w-full h-64 md:h-96 bg-linear-to-r from-blue-500 to-pink-500 rounded-lg overflow-hidden shadow-lg mb-8">
            <img src={images[index]} alt="Special Offer" className="w-full h-full object-cover hover:scale-105 transition duration-300" />

            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 text-2xl font-bold px-3 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
            onClick={prevSlide}>
                &lt;
            </span>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 text-2xl font-bold px-3 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition" onClick={nextSlide}>
                &gt;
            </span>
            
       </div> 

    )
}

export default Carousel;