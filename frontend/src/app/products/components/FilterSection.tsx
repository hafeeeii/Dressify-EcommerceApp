"use client";

import React, { useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { collections, colors, sizes } from "@/lib/data";
import { Product } from "@/lib/utils/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProductInitialType, handleFilter } from "@/store/slices/productSlice";

type CategoryList = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
  };
};

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [priceRange, setPriceRange] = useState<number | number[]>([0, 400]);

  const { filteredProducts, products } = useAppSelector(
    ({ productSlice }: { productSlice: ProductInitialType }) => productSlice
  );
  const getSubcategoryData = useMemo(() => {
    if (products) {
      let data = products
        .map((product: Product) => product?.attributes?.sub_categories?.data)
        .flat();

      let categoryData = data?.map(
        (category: CategoryList) => category?.attributes?.title
      );

      return categoryData;
    }
  }, [filteredProducts]);
  const uniqueCategory = ["all", ...new Set<string>(getSubcategoryData)];

  const handlePriceChange = (value: number | number[]) => {
    setPriceRange(value);
  };

  const { filters } = useAppSelector(({ productSlice }) => productSlice);
  return (
    <div className="flex  flex-col w-[30%]  mx-6">
      <h2 className="text-md font-medium mb-5">Category</h2>
      <div className="text-sm text-slate-600 flex flex-col gap-6 ">
        {uniqueCategory?.map((category, index) => (
          <button
            key={index}
            onClick={(e) => dispatch(handleFilter(e.currentTarget.textContent))}
            className="capitalize hover:translate-x-3 duration-500 cursor-pointer hover:scale-105 hover:text-black text-start"
          >
            {category}
          </button>
        ))}
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
        {colors?.map((color, index) => (
          <button
            key={index}
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
