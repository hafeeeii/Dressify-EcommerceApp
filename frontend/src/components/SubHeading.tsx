import React from "react";

const SubHeading = ({ title,paragraph }: { title: string,paragraph:string }) => {
  return (
    <div className=" mt-20 mb-10 text-center px-10 ">
      <h1 className="text-3xl sm:text-4xl mb-4 font-medium">{title}</h1>
      <p className="text-center text-sm tracking-wide leading-loose ">
     {paragraph}
      </p>
    </div>
  );
};

export default SubHeading;
