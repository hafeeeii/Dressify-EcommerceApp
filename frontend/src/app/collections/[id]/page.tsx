import Card from "@/components/Card";
import FilterSection from "@/components/FilterSection";
import { useFetch } from "@/lib/hooks/useFetch";
import { Collection, Product } from "@/lib/utils/types";
import React from "react";

const CollectionDetail = async ({ params }: { params: { id: string } }) => {
  const newId: number = parseInt(params?.id);
  const collectionsData = await useFetch(
    `/sub-categories?populate[products][populate]=*&[filters][id][$eq]=${newId}`
  );
  const products = await collectionsData?.data
    ?.map((collection: Collection) => collection?.attributes?.products?.data)
    ?.flat();
  console.log(products, "this is from map collection ddddddddddddddid");
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col sm:flex-row">
        <FilterSection />
        <div className="flex flex-wrap gap-3 ">
          {products?.map((product: Product) => (
            <div key={product.id}>
              <Card data={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
