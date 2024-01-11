"use client";


import { Product } from "@/lib/utils/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment, removeFromCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTrash } from "react-icons/Bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartCard = ({itemData}:{itemData:Product[]}) => {
  const dispatch = useAppDispatch();
  
  if(!itemData){
    return <div>
    No item here
  </div>
}

  return (
    <>
    {itemData && (

<div>
{itemData?.map((item) => (
  <div
    key={item.id}
    className="flex justify-between w-full sm:w-[50vw] shadow-md p-4 rounded-lg font-medium"
  >
    <div className="flex  items-center gap-6">
      <Link href={`details/${item.id}`}>
        <Image   src={item.attributes.img.data.attributes.formats.small.url} alt={item.attributes.title} width={100} height={100} />
      </Link>
      <div>
        <div className="flex flex-col gap-1">
          <h3>{item.attributes.title}</h3>
          <div className="flex gap-3">
            <h5 className="text-md ">size:</h5>
            <select className="font-bold text-xs  bg-white border rounded hover:border-black">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="flex gap-3 border mt-3">
            <button
              onClick={() => dispatch(decrement(item))}
              className="bg-slate-200 text-black px-2 hover:bg-black hover:text-white"
            >
              <AiOutlineMinus />
            </button>
            <div>{item.attributes.quantity}</div>
            <button
              onClick={() => dispatch(increment(item))}
              className="bg-slate-200 text-black px-2 hover:bg-black hover:text-white"
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <p>Price: ${item.attributes.price * item.attributes.quantity}</p>
      <button
        className="text-red-600"
        onClick={() => dispatch(removeFromCart(item))}
      >
        <BsTrash />
      </button>
    </div>
  </div>
))}
</div>


    )}
    
    </>

  );
};

export default CartCard;
