"use client";
import React, { useEffect} from "react";
import { Product } from "@/lib/utils/types";
import Card from "@/components/Card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleProducts } from "@/store/slices/productSlice";
import { motion } from "framer-motion";

const ProductList = ({ data }: { data: Product[] }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(handleProducts(data));
    }
  }, []);

  const { filteredProducts } = useAppSelector(
    ({ productSlice }) => productSlice
  );
  return (
    <div className="flex flex-wrap gap-3 justify-center ">
      {filteredProducts?.map((product: Product) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          key={product.id}
        >
          <Card data={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
