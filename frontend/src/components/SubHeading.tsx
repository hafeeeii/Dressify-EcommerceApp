import React from "react";

const SubHeading = ({ children }: { children: string }) => {
  return (
    <div className=" mt-20 mb-10 text-center p-2">
      <h1 className="text-3xl sm:text-4xl mb-2 font-medium">{children}</h1>
      <p className="text-center text-xs sm:text-sm">
      Find the top most popular items in Dressify best sellers.
      </p>
    </div>
  );
};

export default SubHeading;
