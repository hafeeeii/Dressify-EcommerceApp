"use client";
import Image from "next/image";
import React from "react";
import { add } from "date-fns";
import useCountdown from "@/lib/hooks/useCountdown";
const futureDate = add(new Date(), {
  days: 20,
  hours: 22,
  minutes: 40,
});

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
    <div className="relative sm:h-[100vh] w-[100vw] h-[27vh]">
      <Image src="/fashion2-countdown_1.jpg" alt="img" fill objectFit="cover" />
      <div className=" absolute sm:top-[25%] top-[10%] sm:left-[12%] left-[4%] flex flex-col sm:gap-8 gap-2 sm:w-full w-[60vw] ">
        <p className="uppercase text-xs text-gray-600 flex flex-wrap">
          Deal of the week
        </p>
        <h2 className="sm:text-6xl text-2xl font-medium tracking-tighter">
          Made for your
        </h2>
        <p className="sm:text-sm text-xs text-gray-600 tracking-normal font-medium  flex-wrap sm:flex hidden">
          Explore our latest considered collection for the new season.
        </p>

        <ul className="flex sm:gap-7 flex-wrap text-xs w-[50vw] sm:w-full ">
          {modifiedCountDown?.map((data, index) => (
            <li key={index}>
              <span>
                <span className="sm:text-5xl text-lg mr-1">{data.time}</span>
                {data.label}
              </span>
            </li>
          ))}
        </ul>
        <button className="w-[10rem] sm:w-[20rem] btn sm:btn-circle btn-sm  primary-btn sm:mt-10 px-0">
          get at only $256
        </button>
      </div>
    </div>
  );
};

export default Countdown;
