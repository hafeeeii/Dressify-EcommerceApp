"use client";

import { Product } from "@/lib/utils/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, decrement, increment } from "@/store/slices/cartSlice";
import { addToCompare } from "@/store/slices/compareSlice";
import {
  addToWishList,
  removeFromWishList,
} from "@/store/slices/wishListSlice";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdOutlineCompareArrows } from "react-icons/Md";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const AddToCart = ({ data }:{
  data:Product
}) => {
  if (!data) {
    return <p>loading</p>;
  }
  const dispatch = useAppDispatch();
  const { itemData } = useAppSelector(({ cartSlice }) => cartSlice);
  const currentData = itemData?.find((item) => item.id === data?.id);
  const { wishListData } = useAppSelector(({ wishListSlice }) => wishListSlice);

  const isExistInWishList = wishListData?.some((item) => item.id === data?.id);
  const { isAuthenticated } = useKindeBrowserClient();
  const addToWishlistBtn = () => {
    if (isAuthenticated) {
      if (isExistInWishList) {
        dispatch(removeFromWishList(data));
      } else {
        dispatch(addToWishList(data));
        toast.success("Item Added To WishList!");
      }
    } else {
      toast.error("You must login to use this feature");
    }
  };

  const doesExistInCart = itemData?.some((item) => item.id === data?.id);

  const compareBtn = () => {
    dispatch(addToCompare(data));
  };
  const handleIncrement = () => {
    doesExistInCart
      ? dispatch(increment(data))
      : toast.error("Please add the product to your cart");
  };
  const handleDecrement = () => {
    doesExistInCart
      ? dispatch(decrement(data))
      : toast.error("Please add the product to your cart");
  };
  const addToCartBtn = () => {
    if (isAuthenticated) {
      dispatch(addToCart(data));
      toast.success("Product added to cart");
    } else {
      toast.error("You must login to use this feature");
    }
  };

  return (
    <div className="flex flex-row gap-5 flex-wrap my-5">
      <div className="flex flex-row gap-2">
        <button onClick={handleDecrement} className="btn primary-btn">
          <AiOutlineMinus />
        </button>
        <p className="flex  p-4 font-medium w-7 justify-center">
          {currentData?.attributes?.quantity ? currentData.attributes.quantity : "0"}
        </p>
        <button onClick={handleIncrement} className="btn primary-btn">
          <AiOutlinePlus />
        </button>
      </div>
      <button onClick={addToCartBtn} className="btn sm:btn-wide primary-btn">
        Add To Cart
      </button>

      <button
        onClick={addToWishlistBtn}
        className="tooltip tooltip-top"
        data-tip="Add to wishlist"
      >
        <AiOutlineHeart
          size={50}
          className={`p-4  shadow-md rounded-full  duration-500 ${
            isExistInWishList
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          }`}
        />
      </button>
      <button
        onClick={compareBtn}
        className="tooltip tooltip-top"
        data-tip="Compare"
      >
        <Link href="/compare">
          <MdOutlineCompareArrows
            size={50}
            className="p-4 bg-white shadow-md rounded-full hover:bg-black hover:text-white duration-500"
          />
        </Link>
      </button>
    </div>
  );
};

export default AddToCart;
