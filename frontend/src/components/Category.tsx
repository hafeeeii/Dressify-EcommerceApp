import { heroCategory } from "@/lib/data";
import { HeroCategory } from "@/lib/utils/types";
import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";

const Category = () => {
  return (
    <div>
      <SubHeading
        title="Explore Dressify"
        paragraph="Upgrade your style with our curated sets. Choose confidence, embrace your unique look."
      />

      <div className="flex sm:flex-row flex-col gap-1 px-2 ">
        {heroCategory?.map((category: HeroCategory) => (
          <div
            key={category.id}
            className="sm:h-[39vh] h-[30vh] sm:w-1/3 wf' relative overflow-hidden "
          >
            <Image
              src={category.img}
              alt="category img"
              fill
              className="object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
