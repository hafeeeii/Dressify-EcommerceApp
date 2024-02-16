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
import { navigation } from "@/lib/data";

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
      const newScrollDirection = Math.floor(scrollTop) > 0 ? "down" : "up";
      if (newScrollDirection !== scrollDirecton) {
        setScrollDirection(newScrollDirection);
      }
      setIsScrolled(Math.floor(scrollTop) > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirecton]);

  return (
    <nav className="w-full bg-white shadow-md ">
      <div className="w-full">
        <Alert />
        <div className="hidden lg:flex  justify-between items-center  p-3  font-medium text-xs border ">
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
<div className="relative ">


<div
        className={`z-50 w-full   bg-white py-3 flex justify-between items-center px-2 ${
          isScrolled && scrollDirecton === "down"
            ? "fixed top-0 left-0  shadow-md "
            : ""
        }`}
      >
        <div className="drawer  lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <label htmlFor="my-drawer" className=" drawer-button ">
            <BsMenuButtonFill size={24} />
          </label>
          <div className="drawer-side h-[100vh] z-[99999]  lg:hidden ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className=" p-4 w-80 min-h-full bg-white text-red-600 font-medium  flex flex-col gap-11 items-center">
              {navigation?.map((data, index) => (
                <li key={index}>
                  <Link href={data.href}>{data.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={"/"}
          className="btn btn-ghost normal-case font-bold text-2xl"
        >
          Dressify
        </Link>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          {navigation?.map((data, index) => (
            <li key={index} className="hover:text-red-600 cursor-pointer">
              <Link href={data.href}>{data.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex font-medium justify-between  items-center mx-2">
          <li className="btn btn-ghost btn-circle  hover:text-red-600">
            <Link href={"/search"}>
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

</div>
    
    </nav>
  );
};

export default Navbar;
