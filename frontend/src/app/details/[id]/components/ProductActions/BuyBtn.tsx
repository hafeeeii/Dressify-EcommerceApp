"use client";

import React from "react";

const BuyBtn = () => {
  return (
    <div className="flex flex-col items-center gap-9">
      <div>
        <div className="flex flex-nowrap gap-4 mb-2">

        <input type="checkbox" />
        <p>
          I agree with{" "}
          <a href="/" className="link-hover text-gray-600">
            Terms & Conditions
          </a>
        </p>
        </div>
       
      <button className="text-center bg-black text-white  w-[90vw] lg:w-[40vw]  py-5 rounded-full  uppercase text-xs font-bold">
        BUY IT NOW
      </button>
      </div>
      <div className="flex flex-col  gap-3 text-slate-700">
        <p>Estimate delivery times: 3-6 days (International)</p>
        <p>
          Return within 45 days of purchase. Duties & taxes are non-refundable.
        </p>
      </div>
    </div>
  );
};

export default BuyBtn;
