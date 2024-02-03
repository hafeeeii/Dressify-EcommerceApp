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
  console.log(availability, "is this availavle");
  return (
    <div className="flex  ">
      {data && (
        <div className="sm:w-[20rem] min-h-[25rem]  sm:min-h-[40rem] w-[10rem] ">
          <div className="relative group  ">
            <Link href={`/details/${data.id}`}>
              <figure className="group relative sm:min-h-[28rem] sm:w-[20rem] min-h-[18rem] w-[10rem] overflow-hidden">
                <Image
                  alt="product image"
                  src={productImg && productImg}
                  fill
                  quality="99"
                  className=" object-cover object-top group-hover:opacity-0  duration-500"
                />
                <Image
                  alt="product image"
                  src={productImg2 && productImg2}
                  fill
                  quality="99"
                  className=" object-cover object-top opacity-0 group-hover:opacity-100  duration-500 group-hover:scale-110 "
                />
                <div className="lg:opacity-0 group-hover:opacity-100 duration-500">
                  <CardOptions data={data} />
                </div>
              </figure>
            </Link>

            <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2  sm:p-4 sm:px-10 sm:bg-white shadow-md rounded-full text-xs lg:hover:bg-black lg:hover:text-white duration-500 lg:opacity-0 group-hover:opacity-100 bg-white btn-sm sm:btn-md">
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
          <div className="sm:w-[20rem] w-[10rem]">
            <h2 className="sm:text-md text-sm my-1 sm:font-medium capitalize">
              {data?.attributes?.title}
            </h2>
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
