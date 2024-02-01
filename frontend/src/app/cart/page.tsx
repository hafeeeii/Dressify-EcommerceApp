"use client";

import CartCard from "@/app/cart/components/CartCard";
import { useAppSelector } from "@/store/hooks";
import React from "react";

const Cart = () => {
  const { itemData } = useAppSelector(({ cartSlice }) => cartSlice);
  const deliveryCharge = 10;
  const subTotal = itemData?.reduce((accumulator, item) => {
    return accumulator + item?.attributes?.price * item?.attributes?.quantity;
  }, 0);
  const tax = 10;
  const estimatedTotal = tax + subTotal + deliveryCharge;
  return (
    <div className="lg:px-16 p-2 min-h-screen">
      <h2 className="font-bold  py-5">Shopping Cart</h2>
      <div className="flex flex-col sm:justify-between sm:flex-row ">
        <div className="flex flex-col gap-4 ">
          <CartCard itemData={itemData} />
        </div>
        <div className="bg-gray-200 h-fit p-8 rounded-xl sm:w-[40vw] lg:w-[30vw] shadow-md">
          <h2 className="uppercase font-bold">order summary</h2>
          <div className="divider m-0 mb-1"></div>
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex  justify-between capitalize font-medium">
              <h4>sub total</h4>
              <p>{`$${subTotal}`}</p>
            </div>
            <div className="flex  justify-between capitalize font-medium">
              <h4>delivery charge</h4>
              <p>{`$${deliveryCharge}`}</p>
            </div>
            <div className="flex  justify-between capitalize font-medium">
              <h4>tax</h4>
              <p>{`$${tax}`}</p>
            </div>
          </div>
          <div className="divider m-0 mb-1"></div>
          <div className="flex  justify-between capitalize font-medium">
            <h3 className="uppercase font-bold">estimated total</h3>
            <p>{`$${estimatedTotal}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
