"use client";

import React from "react";

const BuyBtn = () => {
  return (
    <div className="flex flex-col gap-9">
      <button className="btn btm-nav-lg primary-btn">BUY IT NOW</button>
      <div className="flex flex-col gap-2 text-slate-700">
        <p>Estimate delivery times: 3-6 days (International)</p>
        <p>
          Return within 45 days of purchase. Duties & taxes are non-refundable.
        </p>
      </div>
    </div>
  );
};

export default BuyBtn;
