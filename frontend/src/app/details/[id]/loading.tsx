import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen  w-full md:px-10 px-4 mt-6  my-4 flex flex-col  items-center">
      <div className="flex lg:gap-10 gap-5 lg:flex-row flex-col items-center lg:items-start lg:justify-center ">
        {/* image section */}
        <div className="flex flex-col gap-2 items-center lg:flex-row ">
          <div className="skeleton w-[400px] h-[600px]">{/* main image */}</div>
          <div className="skeleton min-w-[50px] rounded-[10px] w-[83px] h-[75px]">
            {/* other images */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
