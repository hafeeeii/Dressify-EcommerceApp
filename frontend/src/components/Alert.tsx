"use client";
import { futureDate } from "@/lib/data";
import useCountdown from "@/lib/hooks/useCountdown";
import React from "react";
import { BsClock } from "react-icons/bs";

const Alert = () => {
  const countDownData = useCountdown(futureDate);
  const modifiedCountDown = [
    {
      time: countDownData?.days,
      label: "days",
    },
    {
      time: countDownData?.hours,
      label: "hours",
    },
    {
      time: countDownData?.minutes,
      label: "min",
    },
    {
      time: countDownData?.seconds,
      label: "seconds",
    },
  ];
  return (
    <div
      role="alert"
      className=" w-[100vw]  flex-row h-9 bg-red-600 text-white text-xs font-serif justify-center items-center tracking-widest gap-2 hidden sm:flex"
    >
      <BsClock size={14} />
      <span className="flex flex-row">
        Black Friday 50% Off! Limited time only:
        <span className="flex tracking-widest gap-2">
          {modifiedCountDown?.map((date,index) => (
            <div key={index} className=" w-[3.5rem] ml-2">
              {date.time}:{date.label}
            </div>
          ))}
        </span>
      </span>
    </div>
  );
};

export default Alert;
