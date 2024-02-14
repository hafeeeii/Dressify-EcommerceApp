"use client";
import { Product } from "@/lib/utils/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  CartInitialType,
  addToCart,
  decrement,
  increment,
} from "@/store/slices/cartSlice";
import { addToCompare } from "@/store/slices/compareSlice";
import {
  WishListInitialType,
  addToWishList,
  removeFromWishList,
} from "@/store/slices/wishListSlice";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AddToCart = ({ data }: { data: Product }) => {
  const dispatch = useAppDispatch();
  const { itemData } = useAppSelector(
    ({ cartSlice }: { cartSlice: CartInitialType }) => cartSlice
  );
  const currentData = itemData?.find((item: Product) => item.id === data?.id);
  const { wishListData } = useAppSelector(
    ({ wishListSlice }: { wishListSlice: WishListInitialType }) => wishListSlice
  );
  const isExistInWishList = wishListData?.some(
    (item: Product) => item.id === data?.id
  );
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

  const doesExistInCart = itemData?.some(
    (item: Product) => item.id === data?.id
  );

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
    <div className="flex sm:flex-row flex-col gap-5  my-5">
      <div className="flex flex-row justify-evenly gap-2 bg-slate-100 px-10 rounded-full">
        <button onClick={handleDecrement}>
          <AiOutlineMinus />
        </button>
        <p className="flex  p-4 font-medium w-7 justify-center">
          {currentData?.attributes?.quantity
            ? currentData.attributes.quantity
            : "0"}
        </p>
        <button onClick={handleIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={addToCartBtn}
          className="text-center bg-black text-white  w-[50vw] lg:w-[30vw] py-4  rounded-full  uppercase text-xs font-bold"
        >
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
    </div>
  );
};

export default AddToCart;
