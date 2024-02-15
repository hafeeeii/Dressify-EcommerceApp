import React, { ReactNode } from "react";
import Card from "./Card";
import { useFetch } from "@/lib/hooks/useFetch";
import { Product } from "@/lib/utils/types";

const FeaturedProduct = async ({ type }: { type: string }) => {
  const products = await useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="relative px-2">
      <div className="flex justify-center items-center flex-wrap lg:gap-10 gap-3">
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
