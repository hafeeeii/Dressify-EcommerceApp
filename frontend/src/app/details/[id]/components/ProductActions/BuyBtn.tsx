"use client";

import React from "react";

const BuyBtn = () => {
  return (
    <div className="flex flex-col items-center gap-9">
      <button className="text-center bg-black text-white  w-[90vw] lg:w-[40vw]  py-5 rounded-full  uppercase text-xs font-bold">BUY IT NOW</button>
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
