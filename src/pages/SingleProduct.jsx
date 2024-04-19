import { useState } from "react";
import { customFetch, formatPrice, generateAmountOption } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const singleProductLoader = (queryClient) => async (request) => {
  const id = request.params.id;
  const response = await queryClient.ensureQueryData(singleProductQuery(id));
  const product = response.data.data;
  return { product };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, company, price, description, colors } =
  product.attributes;
  const formattedPrice = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  const handleAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    company,
    productColor,
  };


  return (
    <section>
      {/* Breadcrumbs */}
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 gap-y-8 grid lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="h-96 w-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl font-bold mt-2">{company}</h4>
          <p className=" text-xl mt-3">{formattedPrice}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* Colors */}
          <div className="mt-6">
            <h4 className=" font-medium tracking-wider capitalize">colors</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-slate-600"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* Amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="font-medium tracking-wider capitalize">amount</h4>
            </label>
            <select
              id="amount"
              value={amount}
              onChange={handleAmount}
              className="select select-primary select-bordered select-md"
            >
              {generateAmountOption(5)}
            </select>
          </div>
          {/* Cart Button */}
          <div className="mt-10">
            <button
              className="btn btn-primary btn-md uppercase"
              onClick={addToCart}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
