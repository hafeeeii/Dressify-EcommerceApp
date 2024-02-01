import FilterSection from "@/app/products/components/FilterSection";
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
    <div className="min-h-screen">
      <div className="h-[20vh] w-full bg-purple-300 relative mb-6"></div>
      <div className="flex flex-col sm:flex-row ">
        <div className=" w-[30%]  mx-6 z-30">
          <Drawer />
        </div>
        <div className="flex flex-col items-end gap-4 ">
          <div className="mr-2420">
            <Sort />
          </div>

          <ProductList data={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
