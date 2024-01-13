import Link from "next/link";
import React from "react";

import Table from "./components/Table";

const Compare = () => {
  return (
    <div className="lg:px-16 p-1 min-h-screen flex flex-col items-center my-6">
      <h2 className="font-medium text-4xl ">Compare Products</h2>
      <div className="breadcrumbs text-sm mb-10">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Compare</li>
        </ul>
      </div>

      <Table />
    </div>
  );
};

export default Compare;
