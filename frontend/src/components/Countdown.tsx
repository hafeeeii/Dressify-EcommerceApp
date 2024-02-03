"use client";
import Image from "next/image";
import React from "react";
import useCountdown from "@/lib/hooks/useCountdown";
import { futureDate } from "@/lib/data";


const Countdown = () => {
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
    <div className="relative lg:h-[100vh] w-[100vw] h-[37vh] sm:h-[69vh]">
      <Image src="/fashion2-countdown_1.jpg" alt="img" fill objectFit="cover" />
      <div className=" absolute lg:top-[25%] top-[10%] lg:left-[12%] left-[4%] flex flex-col sm:gap-8 gap-2 lg:w-full w-[60vw] ">
        <p className="uppercase text-xs text-gray-600 flex flex-wrap">
          Deal of the week
        </p>
        <h2 className="sm:text-6xl text-2xl font-medium tracking-tighter">
          Made for your
        </h2>
        <p className="sm:text-lg text-xs text-gray-600 tracking-normal font-medium  flex-wrap lg:flex hidden">
          Explore our latest considered collection for the new season.
        </p>

        <ul className="flex lg:gap-7 sm:gap-4 flex-wrap text-xs w-[50vw] sm:w-full  gap-3">
          {modifiedCountDown?.map((data, index) => (
            <li key={index}>
              <span>
                <span className="sm:text-5xl text-lg mr-1">{data.time}</span>
                {data.label}
              </span>
            </li>
          ))}
        </ul>
        <button className="w-[10rem] sm:w-[20rem] btn lg:btn-circle btn-sm  primary-btn lg:mt-10 mt-5 px-0">
          get at only $256
        </button>
      </div>
    </div>
  );
};

export default Countdown;
