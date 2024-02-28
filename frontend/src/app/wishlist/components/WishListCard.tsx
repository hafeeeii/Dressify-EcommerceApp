"use client";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CardOptions from "../../../components/CardOptions";
const WishListCard = () => {
  const { wishListData } = useAppSelector(({ wishListSlice }) => wishListSlice);

  return (
    <>
      {wishListData?.map((data) => (
        <div key={data.id} className="w-[160px] h-[300px] md:w-[210px] md:h-[430px] lg:w-[260px] lg:h-[480px] ">
          <div className="w-full h-[80%]" >
            <figure className="group relative h-full w-full overflow-hidden">
              <Image
                alt="product image"
                src={data?.attributes?.img?.data?.attributes?.url}
                fill
                quality="99"
                className=" object-cover object-top group-hover:opacity-0  duration-500"
              />
              <Image
                alt="product image"
                src={data?.attributes?.img2?.data?.attributes?.url}
                fill
                quality="99"
                className=" object-cover object-top opacity-0 group-hover:opacity-100  duration-500 group-hover:scale-110"
              />
              <div className="lg:opacity-0 group-hover:opacity-100 duration-500 absolute right-2 top-6">
                <CardOptions data={data} />
              </div>
            </figure>
          </div>
          <div className="w-[90%]">
            <Link href={`/details/${data.id}`}>
              <h2 className="hover:font-bold duration-500 text-sm my-1 font-medium capitalize cursor-pointer">
                {data?.attributes?.title}
              </h2>
            </Link>
            <h4 className="text-md">
              <span className="text-red-600 ">
                ${data?.attributes?.price}.00
              </span>{" "}
              <span className="line-through text-slate-500 font-extralight">
                ${data?.attributes?.price + 20}.00
              </span>
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishListCard;
