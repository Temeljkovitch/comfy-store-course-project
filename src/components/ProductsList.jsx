import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { image, title, company, price } = product.attributes;
        const formattedPrice = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-base-200 p-8 flex flex-col sm:flex-row gap-y-4 flex-wrap rounded-lg shadow-xl hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="h-28 sm:h-40 w-28 sm:w-40 rounded-lg object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize ">{company}</h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-large">
              {formattedPrice}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
