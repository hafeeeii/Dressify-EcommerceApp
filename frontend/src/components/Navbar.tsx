"use client";

import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMenuButtonFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CartInitialType } from "@/store/slices/cartSlice";
import { WishListInitialType } from "@/store/slices/wishListSlice";
import Alert from "./Alert";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirecton, setScrollDirection] = useState("up");
  const { itemData } = useAppSelector(
    ({ cartSlice }: { cartSlice: CartInitialType }) => cartSlice
  );

  const { wishListData } = useAppSelector(
    ({ wishListSlice }: { wishListSlice: WishListInitialType }) => wishListSlice
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScrollDirection = scrollTop > 0 ? "down" : "up";

      if (newScrollDirection !== scrollDirecton) {
        setScrollDirection(newScrollDirection);
      }
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirecton]);

  return (
    <nav className="w-[100vw] bg-white  overflow-x-hidden shadow-md ">
      <div >
        <Alert />
        <div className="hidden lg:flex justify-between items-center py-3 px-10 font-medium text-xs border ">
          <div className="flex gap-3">
            <p>+222-1800-2628</p>
            <p>blueskytechcompany@gmail.com</p>
          </div>
          <p>
            Sign up for 10% off your first order:{" "}
            <span className="underline cursor-pointer font-bold">Sign Up</span>
          </p>
          <div className="flex gap-7">
            <p>Our Stores</p>
            <p>United States (USD $) </p>
            <p>English</p>
          </div>
        </div>
      </div>

      <div
        className={`z-50 w-[100vw]  bg-white  p-3  ${
          isScrolled && scrollDirecton === "down" ? "fixed top-0 left-0  shadow-md " : ""
        }`}
      >
        <div className="navbar-start ">
          <div className="drawer  ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className=" w-[100vw] px-4 flex justify-between items-center">
              <label htmlFor="my-drawer" className=" drawer-button lg:hidden">
                <BsMenuButtonFill size={24} />
              </label>
              <Link
                href={"/"}
                className="btn btn-ghost normal-case font-bold text-2xl"
              >
                Dressify
              </Link>

              <ul className="hidden lg:flex gap-10 text-sm font-medium">
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

              <ul className="flex font-medium pr-3">
                <li className="btn btn-ghost btn-circle  hover:text-red-600">
                  <Link href={"/"}>
                    <AiOutlineSearch size={20} />
                  </Link>
                </li>
                <li className="btn btn-ghost btn-circle  hover:text-red-600 relative">
                  <Link href="/wishlist">
                    {" "}
                    <AiOutlineHeart size={20} />
                    <div className="badge absolute top-1 right-0 w-4  bg-red-600 border-none text-white">
                      {wishListData?.length}
                    </div>
                  </Link>
                </li>

                <li className="btn btn-ghost btn-circle  hover:text-red-600 relative">
                  <Link href={"/cart"}>
                    {" "}
                    <AiOutlineShoppingCart size={20} />
                    <div className="badge absolute top-1 right-0 w-5 bg-red-600 border-none text-white">
                      {itemData?.length}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="drawer-side h-[100vh] z-[99999]  lg:hidden ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className=" p-4 w-80 min-h-full bg-white text-red-600 font-medium  flex flex-col gap-11 items-center">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
