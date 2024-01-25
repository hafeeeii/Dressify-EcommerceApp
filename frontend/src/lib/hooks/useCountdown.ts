"use client";
import { intervalToDuration, isBefore } from "date-fns";
import React, { useEffect, useState } from "react";

const useCountdown = (futureDate: any) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
        clearInterval(interval);
      };
  }, [futureDate]);

  const isTimeUp = isBefore(futureDate, now);
  if (isTimeUp) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

let { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end: futureDate
});

return { days, hours, minutes, seconds};
};

export default useCountdown;
