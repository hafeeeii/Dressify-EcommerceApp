import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardOptions from "./CardOptions";
import { Product } from "@/lib/utils/types";



const Card = ({ data }: { data: Product }) => {
  const productImg = data?.attributes?.img?.data?.attributes?.url
  const productImg2 = data?.attributes?.img2?.data?.attributes?.url
  return (
    <div>
      {data && (
        <div>
          <div className="relative group">
            <Link href={`/details/${data.id}`}>
              <figure className="group relative  h-[28rem] w-[20rem]  overflow-hidden">
                <Image
              alt="product image"
              src={productImg && ( productImg)}
              fill
              quality="99"
              className=" object-cover object-top group-hover:opacity-0  duration-500"
              placeholder="blur"
              blurDataURL={productImg2 && ( productImg)}
            />
            <Image
              alt="product image"
              src={productImg2 && ( productImg2)}
              fill
              quality="99"
              className=" object-cover object-top opacity-0 group-hover:opacity-100  duration-500 group-hover:scale-110 "
              placeholder="blur"
              blurDataURL={productImg2 && ( productImg2)}
            />
              </figure>
            </Link>
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <CardOptions data={data} />
            </div>
            <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2  p-4 px-10 bg-white shadow-md rounded-full hover:bg-black hover:text-white duration-500 opacity-0 group-hover:opacity-100">
              Buy Now
            </button>
          </div>
          <div className="w-[20rem]">
            <h2 className="text-md my-1 font-medium">
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
