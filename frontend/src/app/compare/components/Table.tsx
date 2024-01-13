"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCompare } from "@/store/slices/compareSlice";
import Image from "next/image";
import React from "react";
import { MdClose } from "react-icons/md";

const Table = () => {
  const dispatch = useAppDispatch();
  const { itemData } = useAppSelector(({ compareSlice }) => compareSlice);

  return (
    <div>
      {itemData?.length !== 0 ? (
        <table className="flex  border">
          <thead>
            <tr className="flex flex-col">
              <th className=" p-10 border min-h-[50vh] ">Products</th>
              <th className=" p-10 border">Vendor</th>
              <th className=" p-10 border">Availability</th>
              <th className=" p-10 border">Size</th>
              <th className=" p-10 border">Color</th>
              <th className=" p-10 border">Reviews</th>
            </tr>
          </thead>
          <tbody className="flex">
            {itemData?.map((item) => (
              <tr key={item.id} className="flex flex-col">
                <td className="p-10 border min-h-[50vh]">
                  <div className=" relative w-[10rem]">
                    <Image src={item.img} alt="dd" fill />

                    <button
                      className="absolute top-2 right-2  p-4 bg-white shadow-md rounded-full hover:bg-black hover:text-white duration-500"
                      onClick={() => dispatch(removeFromCompare(item))}
                    >
                      <MdClose size={10} />
                    </button>
                  </div>
                </td>
                <td className=" p-10 border ">{item.title}</td>
                <td className=" p-10 border ">{item.title}</td>
                <td className=" p-10 border ">{item.title}</td>
                <td className=" p-10 border ">{item.title}</td>
                <td className=" p-10 border ">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Table;
