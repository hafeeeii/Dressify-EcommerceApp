import React from "react";
import { colors } from "@/lib/data";
import AddToCart from "./components/ProductActions/AddToCart";
import BuyBtn from "./components/ProductActions/BuyBtn";
import TabbedPanel from "./components/ProductActions/TabbedPanel";
import FeaturedProduct from "@/components/FeaturedProduct";
import { useFetch } from "@/lib/hooks/useFetch";
import { Product } from "@/lib/utils/types";
import SubHeading from "@/components/SubHeading";
import { BsEye } from "react-icons/bs";
import MainImage from "./components/ProductInfoActions/MainImage";
import Rating from "@/components/Rating";
import ActionButtons from "./components/ProductActions/ActionButtons";
import Sizes from "./components/ProductActions/Sizes";

const Detail = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const newId: number = parseInt(params?.id);
  const data = await useFetch(`/products/${newId}?populate=*`);
  const detailData: Product = data?.data;

  return (
    <div className="min-h-screen  w-full md:px-10 px-4 mt-6 lg:my-24 my-4 flex flex-col  items-center flex-wrap ">
      <>
        <div className="flex lg:gap-10 gap-5 lg:flex-row flex-col items-center lg:items-start lg:justify-center  ">
          <MainImage imagesData={detailData?.attributes?.images?.data} />

          {/* Description */}

          <div className="flex flex-col gap-5 lg:w-[40vw] sm:[80vw] ">
            <h2 className="text-3xl   capitalize  tracking-wide">
              {detailData?.attributes?.title}
            </h2>

            <div className="flex flex-wrap items-center gap-8">
              <Rating />
              <p className="text-red-600 text-sm">🔥17 sold in last 24 hours</p>
            </div>

            <h3 className="text-3xl font-bold">{`$${detailData?.attributes?.price}`}</h3>

            <p className="text-slate-500 pr-3">
              {detailData?.attributes?.description
                ? detailData?.attributes?.description
                : "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasmollitia quidem quo. Suscipit rerum aliquam distinctio, placequaerat nam assumenda numquam, officia atque odit debitis a eumsunt fugiat aliquid. lorem1000"}
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-black h-fit w-fit text-white py-1 px-2">
                <BsEye size={14} />
              </div>
              <p className="text-slate-500">
                13 people are viewing this right now
              </p>
            </div>
            <h3>
              <span className="text-slate-500">color:</span>Black
            </h3>
            <div>
              {colors?.map((color, index) => (
                <button
                  key={index}
                  className=" btn-xs btn-circle mr-4 my-2 tooltip tooltip-top shadow-md hover:scale-110 duration-500 active:scale-100"
                  style={{
                    backgroundColor: color,
                  }}
                  data-tip={color}
                ></button>
              ))}
            </div>
            <Sizes />
            <ActionButtons />

            <AddToCart data={detailData} />

            <BuyBtn />
          </div>
        </div>

        {/* Detail description */}
        <div className="lg:px-10">
          <div className="mt-7 ">
            <TabbedPanel />
          </div>

          <SubHeading
            title="Trending This Week"
            paragraph="Here’s some of our most popular products people are in love with."
          />
          <FeaturedProduct type="trending" />
        </div>
      </>
    </div>
  );
};

export default Detail;
