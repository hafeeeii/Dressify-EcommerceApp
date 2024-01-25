
import FilterSection from "@/app/products/components/FilterSection";
import ProductList  from "@/app/products/components/ProductList";
import { useFetch } from "@/lib/hooks/useFetch";
import { categories } from "@/lib/utils/types";
import React from "react";

const Products = async () => {
  const categoriesData = await useFetch(
    "/sub-categories?populate[products][populate]=*"
  );
  const products = await categoriesData?.data
    ?.map((categorie: categories) => categorie?.attributes?.products?.data)
    ?.flat();
  return (
    <div className="min-h-screen bg-slate-500">
      <div className="flex flex-col sm:flex-row ">
        <FilterSection />
       <ProductList data={products}/>
      </div>
    </div>
  );
};

export default Products;
