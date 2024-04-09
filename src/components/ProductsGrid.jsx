import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {products.map((product) => {
        const { image, title, price } = product.attributes;
        const formattedPrice = formatPrice(price); // Simpliest way to format price: {$price/100}

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-base-200 card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4 flex flex-col">
              <img
                src={image}
                alt={title}
                className="rounded-xl w-full h-64 md:h-48 object-cover hover:scale-105 transition duration-300"
              />
              <div className="card-body items-center text-center">
                <h2 className=" card-title capitalize tracking-wider">
                  {title}
                </h2>
                <span className="text-secondary">{formattedPrice}</span>
              </div>
            </figure>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
