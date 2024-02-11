import React, { useState } from "react";
import FilterSection from "./FilterSection";
const Drawer = () => {
  return (
    <div className="drawer  ">
      <input id="filter" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content hidden lg:block w-[20vw] pl-4">
        <FilterSection />
      </div>
      <label
        htmlFor="filter"
        className="btn bg-black text-white drawer-button lg:hidden flex  cursor-pointer"
      >
        Filter
      </label>

      <div className="drawer-side lg:hidden z-50">
        <label
          htmlFor="filter"
          aria-label="close sidebar"
          className="drawer-overlay h-full"
        ></label>
        <ul className="menu p-4 w-56 min-h-full bg-white text-base-content relative">
          <FilterSection />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
