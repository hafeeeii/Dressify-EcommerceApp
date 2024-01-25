"use client";
import Image from "next/image";
import React from "react";
import { add } from "date-fns";
import useCountdown from "@/lib/hooks/useCountdown";
const futureDate = add(new Date(), {
  days: 30,
  hours: 22,
  minutes: 40,
});

const Countdown = () => {
  const { days, hours, minutes, seconds} = useCountdown(futureDate);
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <Image src="/fashion2-countdown_1.jpg" alt="img" fill objectFit="cover" />
      <div className=" absolute top-[25%] left-[12%] flex flex-col gap-8  ">
        <p className="uppercase text-xs text-gray-600 flex flex-wrap">Deal of the week</p>
        <h2 className="text-6xl font-medium tracking-tighter">Made for your</h2>
        <p className="text-sm text-gray-600 tracking-normal font-medium flex flex-wrap">
          Explore our latest considered collection for the new season.
        </p>
        <ul className="flex gap-7 flex-wrap">
          <li>
            <span>
              <span className="text-5xl mr-1">{days}</span>days 
            </span>
          </li>
          <li>
            <span>
              <span className="text-5xl mr-1">{hours}</span>hour 
            </span>
          </li>
          <li>
            <span>
              <span className="text-5xl mr-1">{minutes}</span>mins 
            </span>
          </li>
          <li>
            <span>
              <span className="text-5xl mr-1">{seconds}</span>secs
            </span>
          </li>
        </ul>

        <button className="btn btn-circle btn-wide primary-btn mt-10">get at only $256</button>
      </div>
    </div>
  );
};

export default Countdown;
