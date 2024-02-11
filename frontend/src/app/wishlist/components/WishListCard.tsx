"use client";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CardOptions from "../../../components/CardOptions";
const WishListCard = () => {
  const { wishListData } = useAppSelector(({ wishListSlice }) => wishListSlice);

  return (
    <div>
      {wishListData?.map((data) => (
        <div key={data.id} className="lg:w-[20rem] min-h-[25rem]  lg:min-h-[40rem] w-[10rem]  ">
          <Link href={`/details/${data.id}`}>
            <figure className="group relative lg:min-h-[28rem]lg:w-[20rem] min-h-[18rem] w-[10rem] overflow-hidden">
              <Image
                alt="product image"
                src={ data?.attributes?.img?.data?.attributes?.url}
                fill
                quality="99"
                className=" object-cover object-top group-hover:opacity-0  duration-500"
              />
              <Image
                alt="product image"
                src={ data?.attributes?.img2?.data?.attributes?.url}
                fill
                quality="99"
                className=" object-cover object-top opacity-0 group-hover:opacity-100  duration-500 group-hover:scale-110"
              />
             <div className="lg:opacity-0 group-hover:opacity-100 duration-500">
              <CardOptions data={data} />
            </div>
            </figure>
            <h2 className="text-md my-1 font-medium">
              {data?.attributes?.title}
            </h2>
          </Link>

          <div>
            <h4 className="text-md">
              <span className="text-red-600 ">${data?.attributes?.price}.00</span>{" "}
              <span className="line-through text-slate-500 font-extralight">
                ${data?.attributes?.price + 20}.00
              </span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListCard;
