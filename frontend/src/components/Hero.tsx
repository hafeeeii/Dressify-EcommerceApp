"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
export type HeroImg = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    img: object;
    img2: object;
  };
};

const Hero = ({ heroImg }: { heroImg: HeroImg[] }) => {
 const [currentImage, setCurrentImage] = useState(0);
 const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % heroImg?.length);
  };
  const prevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? heroImg.length - 1 : prevImage - 1
    );
  };
  useEffect(() => {
    const intervel = setInterval(nextSlide, 7000);
    return () => {
      clearInterval(intervel);
    };
  }, []);

  return (
    <div className="relative sm:min-h-[100vh] h-[65vh]  w-[100%]  ">
      {heroImg && (
        <>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="absolute top-[30%]  left-[10%] text-center z-[9999] "
            key={heroImg[currentImage]?.id}
          >
            <div className="sm:text-7xl text-5xl w-[35vw] capitalize">
              <h2>{heroImg[currentImage]?.attributes?.title}</h2>
            </div>

            <div className="opacity-70 mt-2 sm:text-md text-sm">
              <p> So soft, you don&#39;t want to take it of</p>
            </div>

            <div className="btn btn-outline text-black btn-wide  hover:bg-black hover:text-white sm:mt-10 mt-8 ">
              <button>Shop Now</button>
            </div>
          </motion.div>

          {heroImg?.map((data: HeroImg, index) => (
            <div
              key={index}
              className={` absolute w-full h-full opacity-0 transition-opacity duration-1000  ${
                currentImage === index ? "opacity-100 " : ""
              }`}
            >
              <div className="relative h-full">
                <Image
                  src={data?.attributes?.img?.data?.attributes?.formats?.small?.url}
                  alt="banner img"
                  fill
                  className="object-[60%] object-cover"
                  quality={99}
                />
              </div>
            </div>
          ))}

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gray-200  sm:flex items-center justify-center mr-4 hover:bg-black hover:text-white duration-500 hidden"
            onClick={nextSlide}
          >
            <AiOutlineArrowRight />
          </button>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2  w-16 h-16  rounded-full bg-gray-200  sm:flex items-center justify-center ml-4  hover:bg-black hover:text-white duration-500 hidden"
            onClick={prevSlide}
          >
            <AiOutlineArrowLeft />
          </button>
        </>
      )}
    </div>
  );
};

export default Hero;
