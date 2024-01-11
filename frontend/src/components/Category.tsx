import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  const data = [
    {
      img: "/banner1.jpeg",
      title: "Stylish Top Trending",
    },
    {
      img: "/banner2.jpeg",
      title: "Hulton Perfect Simple",
    },
    {
      img: "/banner3.jpeg",
      title: "Online Limited Edition",
    },
  ];

  return (
    <div className="flex flex-col gap-1  w-full relative sm:flex-row sm:h-[60vh] ">
      <div className="relative w-full sm:w-[30%] h-[40vh] sm:h-full overflow-hidden ">
        <Link href="/collections/dress">
          <Image
            src="/women-banner.webp"
            fill
           
            alt="category"
            className="h-full w-full object-cover hover:scale-110 transition duration-500"
          />
          <button className="btn rounded-full hover:text-white normal-case font-normal text-black bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
            Shop Clothing
          </button>
        </Link>
      </div>
      <div className="flex flex-col sm:h-full w-full sm:w-[40%] gap-1">
        <div className=" relative sm:h-[50%] h-[40vh] overflow-hidden">
          <Link href="/collections/sunglasses">
            <Image
              src="/cls2_f1.webp"
              fill
        
              alt="category"
              className="h-full w-full object-cover hover:scale-110 transition duration-500"
            />
            <button className="btn rounded-full hover:text-white normal-case font-normal text-black bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
              Shop Sunglasses
            </button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:h-[50%] gap-1">
          <div className="h-[40vh] sm:h-full w-full relative overflow-hidden">
            <Link href="/collections/sandals">
              <Image
                src="/accesserious.jpeg"
                fill
              
                alt="category"
                className="h-full w-full object-cover hover:scale-110 transition duration-500"
              />
              <button className="btn rounded-full hover:text-white normal-case font-normal text-black bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
                Shop Sandals
              </button>
            </Link>
          </div>
          <div className="h-[40vh] sm:h-full w-full relative overflow-hidden">
            {" "}
            <Link href="/collections.bags">
              <Image
                src="/bag.jpeg"
                fill
            
                alt="category"
                className="h-full w-full object-cover hover:scale-110 transition duration-500 "
              />
              <button className="btn rounded-full hover:text-white normal-case font-normal text-black bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
                Shop Bags
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" relative sm:w-[30%] h-[40vh] sm:h-full overflow-hidden">
        <Link href="/collections/sneakers">
          <Image
            src="/cls5_f1.webp"
            fill
           
            alt="category"
            className="h-full w-full object-cover hover:scale-110 transition duration-500 "
          />
          <button className="btn rounded-full hover:text-white normal-case font-normal text-black bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
            Shop Sneakers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
