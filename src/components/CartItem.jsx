import { formatPrice, generateAmountOption } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (event) => {
    dispatch(editItem({ cartID, amount: Number(event.target.value) }));
  };
  const { cartID, image, title, company, productColor, price, amount } =
    cartItem;
    
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b-2 border-base-300 pb-6 last:border-b-0">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* Info */}
      <div className="sm:ml-16 sm:w-48">
        {/* Title */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* Company */}
        <h4 className="mt-2 capitalize text-sm ">{company}</h4>
        {/* Color */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className=" badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-16">
        {/* Amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOption(amount)}
          </select>
        </div>
        {/* Remove */}
        <button
          onClick={removeItemFromTheCart}
          className="mt-2 link link-primary link-hover text-sm tracking-wide"
        >
          remove
        </button>
      </div>
      {/* Price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
