import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, tax, shipping, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* Subtotal */}
        <p className="flex justify-between text-sm border-b-2 border-base-300 pb-2">
          <span className="capitalize">subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between text-sm border-b-2 border-base-300 pb-2">
          <span className="capitalize">tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-sm border-b-2 border-base-300 pb-2">
          <span className="capitalize">shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* Total */}
        <p className="flex justify-between text-base mt-4 pb-2">
          <span className="capitalize">order total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
