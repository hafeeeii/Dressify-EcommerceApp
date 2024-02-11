"use client";

import Card from "@/components/Card";
import { Product } from "@/lib/utils/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const BASE_URL = process.env.BASE_URL;

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchedData, setSearchedData] = useState([]);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(`${pathname}?${params.toString()}`, "so this is the url");
  };

  let searchTerm = searchParams.get("query")?.toString();
  console.log(searchTerm, "this si");

  const handleSearchBtn = () => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products?populate=*&_q=${searchTerm}`,
      {
        headers: {
          Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchedData(data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className=" relative w-[80vw]   text-gray-600 ">
      <input
        className="border-2 border-gray-300 bg-white h-10 w-full px-5  rounded-full text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button
        onClick={handleSearchBtn}
        type="submit"
        className="absolute right-0 top-0   mr-4 mt-2 text-red-700"
      >
        <BsSearch size={18} />
      </button>

      <div className="flex gap-4 flex-wrap my-7">
        {searchedData?.map((product: Product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
