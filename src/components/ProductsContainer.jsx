import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { MdWindow } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const ProductsContainer = () => {
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary text-primary-content"
        : "btn-ghost"
    }`;
  };

  const { meta } = useLoaderData();
  return (
    <>
      {/* Header */}
      <div className="mt-8 pb-5 border-b-2 border-base-300 flex justify-between items-center">
        <h4 className="font-medium">
          {meta.pagination.total} product{meta.pagination.total > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <MdWindow  />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <RxHamburgerMenu  />
          </button>
        </div>
      </div>
      {/* Products */}
      <div>
        {meta.pagination.total === 0 ? (
          <h5 className="">Sorry, no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
