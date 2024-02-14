import React from "react";
import { MdScale } from "react-icons/md";
import { colors, sizes } from "@/lib/data";
import AddToCart from "./components/ProductActions/AddToCart";
import BuyBtn from "./components/ProductActions/BuyBtn";
import TabbedPanel from "./components/ProductActions/TabbedPanel";
import FeaturedProduct from "@/components/FeaturedProduct";
import ImgMagnifier from "./components/ProductInfoActions/ImgMagnifier";
import { useFetch } from "@/lib/hooks/useFetch";
import { Product } from "@/lib/utils/types";
import SubHeading from "@/components/SubHeading";
import { BsEye } from "react-icons/bs";

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

  const productImg = detailData?.attributes?.img?.data?.attributes?.url;

  return (
    <div className="min-h-screen  w-[100vw] px-4  lg:my-24 my-4 flex flex-col  items-center flex-wrap ">
      {detailData && (
        <>
          <div className="flex lg:gap-10 gap-5 lg:flex-row flex-col items-center lg:items-start lg:justify-center ">
            <ImgMagnifier src={productImg} width={400} height={600} />

            {/* Description */}

            <div className="flex flex-col gap-5 lg:w-[50vw] sm:[80vw] ">
              <h2 className="text-3xl   capitalize  tracking-wide">
                {detailData?.attributes?.title}
              </h2>

              <div className="flex flex-wrap items-center gap-8">
                <div className="rating rating-xs">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
                <p className="text-red-600 text-sm">
                  🔥17 sold in last 24 hours
                </p>
              </div>

              <h3 className="text-3xl font-bold">{`$${detailData?.attributes?.price}`}</h3>

              <p className="text-slate-500">
                {detailData?.attributes?.description
                  ? detailData?.attributes?.description
                  : "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasmollitia quidem quo. Suscipit rerum aliquam distinctio, placequaerat nam assumenda numquam, officia atque odit debitis a eumsunt fugiat aliquid. lorem1000"}
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
              <h5>Size:L</h5>
              <ul className="flex flex-row flex-wrap gap-2 mb-4">
                {sizes?.map((size, index) => (
                  <li
                    key={index}
                    className=" p-1 px-5 rounded-lg primary-btn font-medium "
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row flex-wrap items-center gap-2">
                <div className=" btn-ghost btn">
                  <MdScale />
                  <button>Size Guide</button>
                </div>
                <div className=" btn-ghost btn">
                  <MdScale />
                  <button>Compare Color</button>
                </div>
                <div className=" btn-ghost btn">
                  <MdScale />
                  <button>Ask A Question</button>
                </div>
                <div className=" btn-ghost btn">
                  <MdScale />
                  <button>vShare</button>
                </div>
              </div>

              <AddToCart data={detailData} />
              <div className="flex flex-nowrap gap-4">
                <input type="checkbox" />
                <p>
                  I agree with{" "}
                  <a href="/" className="link-hover text-gray-600">
                    Terms & Conditions
                  </a>
                </p>
              </div>
              <BuyBtn />
            </div>
          </div>

          {/* Detail description */}

          <div className="md:px-10 px-4 mt-6">
            <TabbedPanel />
          </div>
          <div>
            <SubHeading
              title="Trending This Week"
              paragraph="Here’s some of our most popular products people are in love with."
            />
            <FeaturedProduct type="trending" />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
