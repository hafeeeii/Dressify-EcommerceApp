import React, { ReactNode } from "react";
import Card from "./Card";
import { useFetch } from "@/lib/hooks/useFetch";
import { Product } from "@/lib/utils/types";

const FeaturedProduct = async ({
  type,
  title,
}: {
  type: string;
  title: string;
}) => {
  const products = await useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="relative">
      <div className=" mt-20 mb-10 text-center ">
        <h1 className="text-4xl mb-2">{title}</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, nobis.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap sm:gap-10">
        {products?.data?.slice(0, 4).map((product: Product) => (
          <div key={product?.id}>
            <Card data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
