"use client";

import React, { useState } from "react";
import ProductDescription from "../ProductInfoActions/ProductDescription";
import ProductReview from "../ProductInfoActions/ProductReview";
import ReturnPolicies from "../ProductInfoActions/ReturnPolicies";
import ShippingAndReturns from "../ProductInfoActions/ShippingAndReturns";
import { motion } from "framer-motion";
import Tab from "./Tab";
import { Tabs } from "@/lib/utils/types";

const TabbedPanel = () => {
  const tabs: Tabs[] = [
    {
      id: 0,
      content: <ProductDescription />,
      label: "Description",
    },
    {
      id: 1,
      content: <ProductReview />,
      label: "Review",
    },
    {
      id: 2,
      content: <ReturnPolicies />,
      label: "Return Policy",
    },
    {
      id: 3,
      content: <ShippingAndReturns />,
      label: "Shipping and Returns",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {tabs?.map((tab, index) => (
          <div onClick={() => handleClick(index)} key={index}>
            <Tab index={index} activeTab={activeTab}>
              {tab.label}
            </Tab>
          </div>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="my-10  "
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default TabbedPanel;
