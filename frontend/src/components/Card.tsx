import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardOptions from "./CardOptions";
import { Product } from "@/lib/utils/types";

const Card = ({ data }: { data: Product }) => {
  const productImg =
    data?.attributes?.img?.data?.attributes?.formats?.medium?.url;
  const productImg2 =
    data?.attributes?.img2?.data?.attributes?.formats?.medium?.url;
  const isNew = data?.attributes?.isNew;
  const availability = data?.attributes?.availability;
  return (
    <div className="flex  ">
      {data && (
        <div className="w-[160px] h-[300px] md:w-[210px] md:h-[430px] lg:w-[260px] lg:h-[480px]">
          <div className="group h-[80%] w-full relative overflow-hidden ">
            <figure className=" h-full w-full">
              <Image
                alt="product image"
                src={productImg && productImg}
                fill
                quality="99"
                className=" object-cover  group-hover:opacity-0  duration-500"
              />
              <Image
                alt="product image"
                src={productImg2 && productImg2}
                fill
                quality="99"
                className=" object-cover  opacity-0 group-hover:opacity-100  duration-500 group-hover:scale-110 "
              />
            </figure>

            <div className="lg:opacity-0 group-hover:opacity-100 duration-500 absolute right-2 top-6">
              <CardOptions data={data} />
            </div>

            <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2  lg:p-4 lg:px-10 lg:bg-white shadow-md rounded-full text-xs lg:hover:bg-black lg:hover:text-white duration-500 lg:opacity-0 group-hover:opacity-100 bg-white btn-sm lg:btn-md flex items-center">
              Buy Now
            </button>

            {isNew && (
              <button className="badge absolute inset-2 bg-red-600 border-none text-white">
                New
              </button>
            )}

            {availability === false && (
              <button className="badge absolute inset-2 bg-yellow-500 border-none text-white">
                Out of stock
              </button>
            )}
          </div>
          <div className=" w-[90%]">
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
      )}
    </div>
  );
};

export default Card;
