import React from "react";

const SubHeading = ({ title,paragraph }: { title: string,paragraph:string }) => {
  return (
    <div className="sm:mt-20 sm:mb-10 my-10 text-center px-7 ">
      <h1 className="text-3xl sm:text-4xl sm:mb-4 mb-2 sm:font-medium">{title}</h1>
      <p className="text-center text-sm tracking-wide leading-loose text-slate-700 ">
     {paragraph}
      </p>
    </div>
  );
};

export default SubHeading;
