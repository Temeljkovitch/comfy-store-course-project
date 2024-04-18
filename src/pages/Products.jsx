import React from "react";
import { customFetch } from "../utils";
import { Filters, ProductsContainer, PaginationContainer } from "../components";

export const productsLoader = async ({ request }) => {
  // const url = new URL(request.url);
  // const singleParam = url.searchParams.get("company"); // Getting a specific param
  // const params = Object.fromEntries(url.searchParams.entries());

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]); // one-liner to get all params

  const response = await customFetch("/products", {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
