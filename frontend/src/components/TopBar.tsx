import React from "react";
import Alert from "./Alert";

const TopBar = () => {
  return (
    <div className="w-full">
      <Alert />
      <div className="hidden lg:flex  justify-between items-center  p-3  font-medium text-xs border ">
        <div className="flex gap-3">
          <p>+222-1800-2628</p>
          <p>blueskytechcompany@gmail.com</p>
        </div>
        <p>
          Sign up for 10% off your first order:{" "}
          <span className="underline cursor-pointer font-bold">Sign Up</span>
        </p>
        <div className="flex gap-7">
          <p>Our Stores</p>
          <p>United States (USD $) </p>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
