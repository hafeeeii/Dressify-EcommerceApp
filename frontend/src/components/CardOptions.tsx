"use client";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineCompareArrows } from "react-icons/Md";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "@/store/slices/wishListSlice";
import toast from "react-hot-toast";
import Link from "next/link";
import { addToCompare } from "@/store/slices/compareSlice";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Product } from "@/lib/utils/types";

const CardOptions = ({ data }:{data: Product}) => {


  const dispatch = useAppDispatch();
  const { itemData } = useAppSelector(({ cartSlice }) => cartSlice);
  const isExistInCart = itemData?.some((item) => item.id === data?.id);
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
  const addToCartBtn = () => {
    if (isAuthenticated) {
      if (isExistInCart) {
        dispatch(removeFromCart(data));
      } else {
        dispatch(addToCart(data));
        toast.success("Item Added To Cart!");
      }
    } else {
      toast.error("You must login to use this feature");
    }
  };

  const compareBtn = () => {
    dispatch(addToCompare(data));
  };
  return (
    <div className="absolute right-2 top-6  flex flex-col gap-3 ">
      <button
        onClick={addToWishlistBtn}
        className="tooltip tooltip-left"
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
      <Link href="/compare">
        <button
          onClick={compareBtn}
          className="tooltip tooltip-left"
          data-tip="Compare"
        >
          <MdOutlineCompareArrows
            size={50}
            className="p-4 bg-white shadow-md rounded-full hover:bg-black hover:text-white duration-500"
          />
        </button>
      </Link>

      <button
        onClick={addToCartBtn}
        className="tooltip tooltip-left"
        data-tip="Add to cart"
      >
        <AiOutlineShoppingCart
          size={50}
          className={`p-4  shadow-md rounded-full  duration-500 ${
            isExistInCart
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          }`}
        />
      </button>
    </div>
  );
};

export default CardOptions;
