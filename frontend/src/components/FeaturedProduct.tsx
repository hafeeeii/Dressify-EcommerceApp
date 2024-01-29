import React, { ReactNode } from "react";
import Card from "./Card";
import { useFetch } from "@/lib/hooks/useFetch";
import { Product } from "@/lib/utils/types";
import SubHeading from "./SubHeading";

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
  <SubHeading>
    {title}
  </SubHeading>
      <div className="flex justify-center items-center flex-wrap sm:gap-10 gap-3">
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
