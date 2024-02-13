import React from "react";
import SubHeading from "./SubHeading";
import { testimonialsData } from "@/lib/data";;
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center ">
      <SubHeading
        title="Customer Say!"
        paragraph="Customers love our products and we always strive to please them all."
      />
      <div className="  px-5 flex justify-center gap-5 flex-wrap">
        {testimonialsData?.map((data) => (
          <div
            key={data.id}
            className=" flex flex-col items-center gap-4 border p-8 w-[28rem]  rounded-[5px]"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden relative">
              <Image
                src={data.img}
                alt="profile pic"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm tracking-wide leading-loose text-center text-slate-700 px-3">
              {data.comment}
            </p>
            <div className="rating rating-xs">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <h3 className="text-slate-800">
              {data.name}-{data.isVerified ? "verified buyer" : ""}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
