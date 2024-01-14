import Card from "@/components/Card";
import FilterSection from "@/components/FilterSection";
import { useFetch } from "@/lib/hooks/useFetch";
import { Collection, Product } from "@/lib/utils/types";
import React from "react";


const CollectionDetail = async ({ params }: { params: { id: string } }) => {
  const newId: number = parseInt(params?.id);
  const collectionsData = await useFetch(
    `/sub-categories?populate=*&[filters][id][$eq]=${newId}`
  );
 const mapCollections:Collection = await collectionsData?.data.map((collection:Collection) =>collection)
 console.log(mapCollections),'this is m applying';
  return (
    <div className="min-h-screen w-[100vw]">
      <div className="flex flex-col sm:flex-row">
        <FilterSection />
        <div className=" ">
  {mapCollections?.attributes?.products?.data?.map((product:Product)=>{
    <Card data={product}/>
  })}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
