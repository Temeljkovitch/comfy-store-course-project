import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

export const landingLoader = async () => {
  const response = await customFetch("/products?featured=true");
  const products = response.data.data;
 
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
