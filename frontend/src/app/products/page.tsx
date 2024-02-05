import ProductList from "@/app/products/components/ProductList";
import { useFetch } from "@/lib/hooks/useFetch";
import { categories } from "@/lib/utils/types";
import React from "react";
import Drawer from "./components/Drawer";
import Sort from "./components/Sort";

const Products = async () => {
  const categoriesData = await useFetch(
    "/sub-categories?populate[products][populate]=*"
  );
  const products = await categoriesData?.data
    ?.map((categorie: categories) => categorie?.attributes?.products?.data)
    ?.flat();
  return (
    <div className="min-h-screen px-10">
      <div className="h-[20vh] w-full bg-purple-300 relative mb-6"></div>
      {/* filter & sort  layout in small screen */}
      <div className="flex  justify-end items-center ">
        <div className="lg:hidden">
          <Drawer />
        </div>
        <div className="lg:pr-44  flex justify-between">
          <Sort />
        </div>
      </div>
      {/* Filter & Sort in large screen */}
      <div className="flex">
        <div className="hidden lg:flex">
          <Drawer />
        </div>
        <div>
          <ProductList data={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
