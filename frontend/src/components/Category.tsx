"use client";
import { heroCategory } from "@/lib/data";
import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";


const Category = () => {
  return (
    <div className="h-full w-full">
      <SubHeading
        title="Explore Dressify"
        paragraph="Upgrade your style with our curated sets. Choose confidence, embrace your unique look."
      />
      <div className="flex sm:flex-row flex-col gap-1 px-2  sm:justify-center items-center ">
        {heroCategory?.map((category, index) => (
          <motion.div className="sm:h-[39vh] h-[30vh] sm:w-[30vw] w-[90vw] relative overflow-hidden" key={index}>
            <Image
              src={category.img}
              alt="category img"
              fill
              className="object-cover "
            />
            <button className="primary-btn absolute bottom-3 left-1/2 -translate-x-1/2 font-medium py-2  btn-wide rounded-full ">
              {category.title}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Category;
