
import { useFetch } from "@/lib/hooks/useFetch";
import { Collection } from "@/lib/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collections = async () => {
  const collections = await useFetch("/sub-categories?populate=*");
  return (
    <div className=" min-h-screen mb-10">
      <div className=" py-20 text-center">
        <h2 className="text-5xl mb-2">All Products</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          fugiat.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center ">

        {collections?.data?.map((collection: Collection) => (
          <div
            key={collection.id}
            className="relative w-[21rem] h-[25rem] shadow-md overflow-hidden"
          >
            <Link href={`/collections/${collection.id}`}>
                <Image
                  src={collection?.attributes?.img?.data?.attributes?.formats?.small?.url}
                  alt="Products image"
                  fill
                  className="object-cover object-top  hover:scale-110 transition duration-500"
                />
              <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2  bg-white w-[17rem] h-[20%] flex justify-center items-center rounded-lg capitalize">
                <h3>{collection.attributes.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
