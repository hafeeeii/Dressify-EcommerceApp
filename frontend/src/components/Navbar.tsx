"use client";

import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React from "react";
import { BsMenuButtonFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CartInitialType } from "@/store/slices/cartSlice";
import { WishListInitialType } from "@/store/slices/wishListSlice";

const Navbar = () => {
  const { itemData } = useAppSelector(
    ({ cartSlice }: { cartSlice: CartInitialType }) => cartSlice
  );

  const { wishListData } = useAppSelector(
    ({ wishListSlice }: { wishListSlice: WishListInitialType }) => wishListSlice
  );

  return (
    <nav className=" z-[99]">
      <div className=" navbar z-[99]  bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <BsMenuButtonFill />
            </label>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={"/"}>Shop</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
              <li>
                <Link href={"/"}>Page</Link>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost normal-case font-bold text-2xl"
          >
            Dressify
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="flex gap-10 text-sm font-medium">
            <li className="hover:text-red-600 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link href={"/"}>Shop</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link href={"/"}>Blog</Link>
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Link href={"/"}>Page</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-medium">
          <Link href={"/"}>
            <button className="btn btn-ghost btn-circle  hover:text-red-600">
              <AiOutlineSearch size={20} />
            </button>
          </Link>
          <Link href="/wishlist">
            <button className="btn btn-ghost btn-circle  hover:text-red-600 relative">
              {" "}
              <AiOutlineHeart size={20} />
              <div className="badge absolute top-1 right-0 w-4  bg-red-600 border-none text-white">
                {wishListData?.length}
              </div>
            </button>
          </Link>

          <Link href={"/cart"}>
            <button className="btn btn-ghost btn-circle  hover:text-red-600 relative">
              {" "}
              <AiOutlineShoppingCart size={20} />
              <div className="badge absolute top-1 right-0 w-5 bg-red-600 border-none text-white">
                {itemData?.length}
              </div>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
