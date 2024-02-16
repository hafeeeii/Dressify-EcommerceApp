"use client";
import { Product } from "@/lib/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import ImgMagnifier from "./ImgMagnifier";

const MainImage = ({ productData }: { productData: Product }) => {
  const productImages = productData?.attributes?.images?.data;
  const images = productData?.attributes?.images?.data;
  const [mainImage, setMainImage] = useState(productImages[0]?.attributes?.url);
  return (
    <div className="flex flex-col gap-2 items-center lg:flex-row ">
      <div>
        <ImgMagnifier src={mainImage} width={400} height={600} />
      </div>
      <div className="flex gap-1 lg:flex-col ">
        {images?.map((image) => (
          <div
            className={`min-w-[50px] rounded-[10px] overflow-hidden ${
              mainImage === image?.attributes?.url ? "border border-black" : ""
            }`}
            key={image?.id}
            onClick={() => setMainImage(image?.attributes?.url)}
          >
            <Image
              src={image?.attributes?.formats?.small?.url}
              alt="product image"
              width={83}
              height={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainImage;
