"use client";
import React, { useEffect, useMemo } from "react";
import { Product } from "@/lib/utils/types";
import Card from "@/components/Card";
import { useAppDispatch, useAppSelector} from "@/store/hooks";
import {
  handleProducts,
} from "@/store/slices/productSlice";


const ProductList = ({ data }: { data: Product[] }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(handleProducts(data));
    }
  }, []);

  const  {filteredProducts}= useAppSelector(({productSlice})=>productSlice)
  return (
    <div className="flex flex-wrap gap-3  ">
      {filteredProducts?.map((product: Product) => (
        <div key={product.id}>
          <Card data={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
