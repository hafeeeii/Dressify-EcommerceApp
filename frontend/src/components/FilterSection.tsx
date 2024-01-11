"use client";

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { colors, sizes } from "@/lib/data";

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400]);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
  };
  return (
    <div className="flex  flex-col w-[20%]  ml-6">
      <h2 className="text-md font-medium mb-5">Category</h2>
      <div className="text-sm text-slate-600 flex flex-col gap-4">
        <h3>Dresses</h3>
        <h3>Sweaters</h3>
        <h3>Women's Shirts</h3>
        <h3>Dresses</h3>
      </div>
      <h2 className="text-md font-medium my-5 ">Availability</h2>
      <div className="flex flex-col mb-4  ">
        <label className="flex  items-center gap-3 cursor-pointer">
          <input type="checkbox" name="checkbox-10" className="h-4 w-4  " />
          <span className="text-sm text-slate-600">In stock</span>
        </label>
      </div>
      <div className="flex flex-col gap-4 ">
        <label className="flex  items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="checkbox-10"
            className="h-4 w-4  
        "
          />
          <span className=" text-sm text-slate-600">Out of stock</span>
        </label>
      </div>

      <h2 className="text-md font-medium my-5">Price</h2>
      <div className="w-[85%] my-6 ">
        <Slider
          range
          min={0}
          max={400}
          value={priceRange}
          marks={{ 0: 0, 100: 100, 200: 200, 300: 300, 400: 400 }}
          onChange={handlePriceChange}
        />
      </div>
      <h2 className="text-md font-medium my-5">Brand</h2>
      <h2 className="text-md font-medium my-5">Colors</h2>
      <div className="flex flex-wrap">
        {colors?.map((color) => (
    <button
            key={color}
            className=" btn-xs btn-circle mr-4 my-2 tooltip tooltip-top shadow-md hover:scale-110 duration-500 active:scale-100 "
            style={{
              backgroundColor: color,
            }}
            data-tip={color}
          ></button>

      
        ))}
      </div>
      <h2 className="text-md font-medium my-5">Sizes</h2>
      <div>
        {sizes?.map((size) => (
          <button key={size} className="btn  mr-4 my-2 primary-btn">
            {size}
          </button>
        ))}
      </div>
      <h2 className="text-md font-medium my-5">Featured Product</h2>
    </div>
  );
};

export default FilterSection;
