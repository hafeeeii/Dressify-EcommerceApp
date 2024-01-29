import React, { useState } from "react";
import FilterSection from "./FilterSection";
const Drawer = () => {
  return (
    <div className="drawer  ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content hidden sm:block">
        <FilterSection />
      </div>
      <label
        htmlFor="my-drawer"
        className="btn btn-primary drawer-button sm:hidden flex my-3 cursor-pointer"
      >
        Filter
      </label>

      <div className="drawer-side sm:hidden">
        <label
          htmlFor="my-drawer"
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
