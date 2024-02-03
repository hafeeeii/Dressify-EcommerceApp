import React, { useState } from "react";
import FilterSection from "./FilterSection";
const Drawer = () => {
  return (
    <div className="drawer  ">
      <input id="filter" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content hidden lg:block">
        <FilterSection />
      </div>
      <label
        htmlFor="filter"
        className="btn bg-black text-white drawer-button lg:hidden flex my-3 cursor-pointer"
      >
        Filter
      </label>

      <div className="drawer-side lg:hidden">
        <label
          htmlFor="filter"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-72 min-h-full bg-white text-base-content my-5 relative">
          <FilterSection />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
